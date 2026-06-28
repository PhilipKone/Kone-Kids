import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import { Car, Radar, Flag, AlertTriangle } from 'lucide-react';
import './RoboticsSimulator.css';

export interface RoboticsHandle {
  move: (direction: 'forward' | 'backward', duration: number) => Promise<void>;
  turn: (direction: 'left' | 'right', duration: number) => Promise<void>;
  stop: () => void;
  getDistance: () => number;
  reset: () => void;
  hasReachedTarget: () => boolean;
}

interface RoboticsSimulatorProps {
  missionId?: string;
}

interface Wall {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type?: 'wall' | 'obstacle';
}

const RoboticsSimulator = forwardRef<RoboticsHandle, RoboticsSimulatorProps>(({ missionId }, ref) => {
  const [pos, setPos] = useState({ x: 150, y: 150 });
  const [rotation, setRotation] = useState(0); // in degrees
  const [isMoving, setIsMoving] = useState(false);
  const [distance, setDistance] = useState(100);
  const [hasCrashed, setHasCrashed] = useState(false);
  const [reachedTarget, setReachedTarget] = useState(false);
  const [showCrashAlert, setShowCrashAlert] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const posRef = useRef(pos);
  const rotationRef = useRef(rotation);
  const hasCrashedRef = useRef(hasCrashed);

  // Synchronize refs with state for animation loop access
  useEffect(() => { posRef.current = pos; }, [pos]);
  useEffect(() => { rotationRef.current = rotation; }, [rotation]);
  useEffect(() => { hasCrashedRef.current = hasCrashed; }, [hasCrashed]);

  // Define level configurations (Virtual space: 300 x 220)
  const getLevelConfig = () => {
    if (missionId === 'robotics_1') {
      return {
        startPos: { x: 50, y: 180 },
        startRotation: 270, // Facing Up
        target: { x: 250, y: 40, radius: 25 },
        walls: [
          // L-shaped inner corner walls
          { x1: 110, y1: 80, x2: 120, y2: 220, type: 'wall' }, // Vertical wall
          { x1: 110, y1: 80, x2: 300, y2: 90, type: 'wall' },  // Horizontal wall
        ] as Wall[]
      };
    } else if (missionId === 'robotics_2') {
      return {
        startPos: { x: 40, y: 110 },
        startRotation: 0, // Facing Right
        target: { x: 260, y: 110, radius: 9999 }, // Target is solved by stopping before obstacle
        walls: [
          // Brick wall obstacle in the middle
          { x1: 190, y1: 60, x2: 205, y2: 160, type: 'obstacle' }
        ] as Wall[]
      };
    } else if (missionId === 'robotics_3') {
      return {
        startPos: { x: 50, y: 45 },
        startRotation: 0, // Facing Right
        target: { x: 250, y: 175, radius: 22 },
        walls: [
          // Z-shaped maze horizontal barriers
          { x1: 0, y1: 85, x2: 210, y2: 95, type: 'wall' },
          { x1: 90, y1: 145, x2: 300, y2: 155, type: 'wall' }
        ] as Wall[]
      };
    } else if (missionId === 'robotics_4') {
      return {
        startPos: { x: 50, y: 185 },
        startRotation: 270, // Facing Up
        target: { x: 250, y: 45, radius: 22 },
        walls: [
          // Obstacle blocking the direct upward path
          { x1: 0, y1: 95, x2: 160, y2: 105, type: 'obstacle' },
          // Guide wall forcing the detour channel
          { x1: 100, y1: 145, x2: 300, y2: 155, type: 'wall' }
        ] as Wall[]
      };
    }
    // Default open world
    return {
      startPos: { x: 150, y: 110 },
      startRotation: 0,
      target: null,
      walls: [] as Wall[]
    };
  };

  const config = getLevelConfig();

  // Reset/Initialize position when level changes
  const performReset = () => {
    setPos(config.startPos);
    setRotation(config.startRotation);
    setIsMoving(false);
    setHasCrashed(false);
    setReachedTarget(false);
    setShowCrashAlert(false);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  useEffect(() => {
    performReset();
  }, [missionId]);

  // Ray-casting math to find distance to nearest wall/obstacle in robot's heading
  const calculateDistanceSensor = (x: number, y: number, angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const dx = Math.cos(rad);
    const dy = Math.sin(rad);

    let minT = Infinity;

    // 1. Boundary walls of the 300x220 container
    const boundaries = [
      { x1: 0, y1: 0, x2: 300, y2: 0 },   // Top
      { x1: 0, y1: 220, x2: 300, y2: 220 }, // Bottom
      { x1: 0, y1: 0, x2: 0, y2: 220 },   // Left
      { x1: 300, y1: 0, x2: 300, y2: 220 }  // Right
    ];

    const allWalls = [...boundaries, ...config.walls];

    allWalls.forEach(w => {
      // Ray-segment intersection
      // Ray: R(t) = P + t*D
      // Segment: S(s) = A + s*(B - A), s in [0, 1]
      const x1 = w.x1;
      const y1 = w.y1;
      const x2 = w.x2;
      const y2 = w.y2;

      const denominator = (x2 - x1) * dy - (y2 - y1) * dx;
      if (Math.abs(denominator) < 0.0001) return; // Parallel

      const t = ((x1 - x) * (y2 - y1) - (y1 - y) * (x2 - x1)) / denominator;
      const s = ((x1 - x) * dy - (y1 - y) * dx) / denominator;

      if (t >= 0 && s >= 0 && s <= 1) {
        if (t < minT) {
          minT = t;
        }
      }
    });

    return Math.round(minT);
  };

  // Check if a coordinate collides with any wall or boundary
  const checkCollision = (x: number, y: number) => {
    // 1. Check container boundaries (with 14px buffer for robot size)
    if (x < 14 || x > 286 || y < 14 || y > 206) return true;

    // 2. Check level walls/obstacles
    for (const w of config.walls) {
      const pad = 14; // Collision buffer
      const minX = Math.min(w.x1, w.x2) - pad;
      const maxX = Math.max(w.x1, w.x2) + pad;
      const minY = Math.min(w.y1, w.y2) - pad;
      const maxY = Math.max(w.y1, w.y2) + pad;

      if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
        return true;
      }
    }
    return false;
  };

  // Update distance sensor reading dynamically
  useEffect(() => {
    const dist = calculateDistanceSensor(pos.x, pos.y, rotation);
    setDistance(dist);

    // Check if we reached the target flag
    if (config.target) {
      const dx = pos.x - config.target.x;
      const dy = pos.y - config.target.y;
      const distToTarget = Math.sqrt(dx * dx + dy * dy);
      if (distToTarget < config.target.radius) {
        setReachedTarget(true);
      }
    }
  }, [pos, rotation]);

  // Expose API to the IDE
  useImperativeHandle(ref, () => ({
    move: async (direction, duration) => {
      if (hasCrashedRef.current) return;
      setIsMoving(true);
      const speed = direction === 'forward' ? 2 : -2;
      const startTime = Date.now();

      return new Promise((resolve) => {
        const animate = () => {
          if (hasCrashedRef.current) {
            setIsMoving(false);
            resolve();
            return;
          }

          const elapsed = Date.now() - startTime;
          if (elapsed < duration) {
            const rad = (rotationRef.current * Math.PI) / 180;
            const nextX = posRef.current.x + Math.cos(rad) * speed;
            const nextY = posRef.current.y + Math.sin(rad) * speed;

            if (checkCollision(nextX, nextY)) {
              setHasCrashed(true);
              setShowCrashAlert(true);
              setIsMoving(false);
              resolve();
              return;
            }

            setPos({ x: nextX, y: nextY });
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setIsMoving(false);
            resolve();
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      });
    },
    turn: async (direction, duration) => {
      if (hasCrashedRef.current) return;
      setIsMoving(true);
      const turnSpeed = direction === 'right' ? 3 : -3;
      const startTime = Date.now();

      return new Promise((resolve) => {
        const animate = () => {
          if (hasCrashedRef.current) {
            setIsMoving(false);
            resolve();
            return;
          }

          const elapsed = Date.now() - startTime;
          if (elapsed < duration) {
            setRotation(prev => (prev + turnSpeed) % 360);
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setIsMoving(false);
            resolve();
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      });
    },
    stop: () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setIsMoving(false);
    },
    getDistance: () => {
      return calculateDistanceSensor(posRef.current.x, posRef.current.y, rotationRef.current);
    },
    reset: () => {
      performReset();
    },
    hasReachedTarget: () => {
      if (hasCrashed) return false;
      if (missionId === 'robotics_1' || missionId === 'robotics_3' || missionId === 'robotics_4') {
        return reachedTarget;
      } else if (missionId === 'robotics_2') {
        // Mission 2 passes if robot stopped safely close to obstacle
        return distance < 35 && !isMoving;
      }
      return true;
    }
  }));

  return (
    <div className={`robotics-simulator glass-panel ${showCrashAlert ? 'sim-crashed-flash' : ''}`} ref={containerRef} style={{ width: '300px', height: '220px', position: 'relative', overflow: 'hidden', background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
      
      {/* Target Destination Flag */}
      {config.target && (
        <div style={{
          position: 'absolute',
          left: `${config.target.x}px`,
          top: `${config.target.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Flag size={20} fill={reachedTarget ? '#10b981' : '#ef4444'} color={reachedTarget ? '#10b981' : '#ef4444'} className={reachedTarget ? 'animate-bounce' : ''} />
          <span style={{ fontSize: '0.55rem', color: reachedTarget ? '#10b981' : '#ef4444', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Goal</span>
        </div>
      )}

      {/* Level Walls & Obstacles */}
      {config.walls.map((w, idx) => {
        const x = Math.min(w.x1, w.x2);
        const y = Math.min(w.y1, w.y2);
        const wWidth = Math.max(w.x2 - w.x1, 8);
        const wHeight = Math.max(w.y2 - w.y1, 8);
        const isObstacle = w.type === 'obstacle';

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              width: `${wWidth}px`,
              height: `${wHeight}px`,
              background: isObstacle ? 'repeating-linear-gradient(45deg, #f59e0b, #f59e0b 8px, #78350f 8px, #78350f 16px)' : 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
              border: isObstacle ? '1px solid #f59e0b' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              zIndex: 3
            }}
          />
        );
      })}

      {/* Simulator Grid overlay */}
      <div className="sim-grid" style={{ opacity: 0.15 }}>
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="grid-line horizontal" style={{ top: `${i * 12.5}%`, borderBottom: '1px dashed white', position: 'absolute', width: '100%' }} />
            <div className="grid-line vertical" style={{ left: `${i * 12.5}%`, borderRight: '1px dashed white', position: 'absolute', height: '100%' }} />
          </React.Fragment>
        ))}
      </div>
      
      {/* The Robot */}
      <div 
        className={`robot-car ${isMoving ? 'engine-on' : ''} ${hasCrashed ? 'car-crashed' : ''}`}
        style={{ 
          position: 'absolute',
          left: `${pos.x}px`, 
          top: `${pos.y}px`, 
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          transition: isMoving ? 'none' : 'transform 0.1s ease',
          zIndex: 10
        }}
      >
        {/* Sensor Beam */}
        {!hasCrashed && (
          <div 
            className="sensor-beam" 
            style={{ 
              position: 'absolute',
              left: '16px',
              top: '15px',
              width: `${distance}px`,
              height: '2px',
              background: 'rgba(239,68,68,0.25)',
              boxShadow: '0 0 4px #ef4444',
              transformOrigin: 'left center',
              zIndex: 1
            }} 
          />
        )}
        <Car size={26} className="car-body" style={{ color: hasCrashed ? '#ef4444' : 'var(--kids-blue)' }} />
        <Radar size={10} className="radar-icon" style={{ position: 'absolute', top: '8px', left: '8px', color: 'white', opacity: isMoving ? 1 : 0.5 }} />
      </div>

      {/* Crash Banner Overlay */}
      {showCrashAlert && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(239, 68, 68, 0.85)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          animation: 'fadeIn 0.2s ease',
          color: 'white',
          textAlign: 'center',
          padding: '1rem'
        }}>
          <AlertTriangle size={28} className="animate-bounce" style={{ marginBottom: '0.25rem' }} />
          <h4 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', fontSize: '1.25rem' }}>ROBOT CRASHED!</h4>
          <p style={{ margin: '0.2rem 0 0.5rem', fontSize: '0.7rem', opacity: 0.9 }}>You hit a wall or obstacle.</p>
          <button 
            onClick={performReset}
            style={{
              background: 'white',
              color: '#ef4444',
              border: 'none',
              padding: '0.35rem 1rem',
              borderRadius: '8px',
              fontFamily: '"Baloo 2", cursive',
              fontWeight: 800,
              fontSize: '0.75rem',
              cursor: 'pointer',
              boxShadow: '0 3px 0 #991b1b'
            }}
          >
            Reset Robot 🔄
          </button>
        </div>
      )}
      
      {/* Telemetry Stats Overlay */}
      <div className="sim-stats" style={{
        position: 'absolute',
        bottom: '0.5rem',
        left: '0.5rem',
        display: 'flex',
        gap: '0.5rem',
        background: 'rgba(15, 23, 42, 0.85)',
        padding: '0.25rem 0.6rem',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.08)',
        fontSize: '0.65rem',
        fontFamily: 'monospace',
        zIndex: 20
      }}>
        <div className="stat-item">
          <span className="stat-label" style={{ color: '#94a3b8' }}>SEN:</span>
          <span className="stat-value" style={{ color: distance < 40 ? '#ef4444' : '#10b981', fontWeight: 'bold', marginLeft: '2px' }}>{distance}cm</span>
        </div>
        <div className="stat-item">
          <span className="stat-label" style={{ color: '#94a3b8' }}>ROT:</span>
          <span className="stat-value" style={{ color: 'white', marginLeft: '2px' }}>{Math.round(rotation)}°</span>
        </div>
      </div>
    </div>
  );
});

RoboticsSimulator.displayName = 'RoboticsSimulator';

export default RoboticsSimulator;
