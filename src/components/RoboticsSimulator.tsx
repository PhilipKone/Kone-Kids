import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import { Car, Radar, Flag, AlertTriangle, Compass, PenTool, Sparkles, RefreshCw, Play, Square, Gamepad2 } from 'lucide-react';
import './RoboticsSimulator.css';
import { sounds } from '../utils/sounds';

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

interface TrailPoint {
  x: number;
  y: number;
  color: string;
}

type ArenaType = 'mission' | 'maze' | 'radar_stop' | 'open_pen';

const RoboticsSimulator = forwardRef<RoboticsHandle, RoboticsSimulatorProps>(({ missionId }, ref) => {
  const [selectedArena, setSelectedArena] = useState<ArenaType>('mission');
  const [pos, setPos] = useState({ x: 150, y: 150 });
  const [rotation, setRotation] = useState(0); // in degrees
  const [isMoving, setIsMoving] = useState(false);
  const [driveAction, setDriveAction] = useState<'IDLE' | 'DRIVING' | 'TURNING'>('IDLE');
  const [distance, setDistance] = useState(100);
  const [hasCrashed, setHasCrashed] = useState(false);
  const [reachedTarget, setReachedTarget] = useState(false);
  const [showCrashAlert, setShowCrashAlert] = useState(false);

  // VEXcode VR Pen / Trail Drawing
  const [penDown, setPenDown] = useState(true);
  const [penColor, setPenColor] = useState('#0ea5e9');
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  // Manual Test Controls visibility
  const [showManualPad, setShowManualPad] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const posRef = useRef(pos);
  const rotationRef = useRef(rotation);
  const hasCrashedRef = useRef(hasCrashed);
  const penDownRef = useRef(penDown);
  const penColorRef = useRef(penColor);

  // Synchronize refs with state for animation loop access
  useEffect(() => { posRef.current = pos; }, [pos]);
  useEffect(() => { rotationRef.current = rotation; }, [rotation]);
  useEffect(() => { hasCrashedRef.current = hasCrashed; }, [hasCrashed]);
  useEffect(() => { penDownRef.current = penDown; }, [penDown]);
  useEffect(() => { penColorRef.current = penColor; }, [penColor]);

  // Define level configurations (Virtual space: 300 x 220)
  const getLevelConfig = () => {
    if (selectedArena === 'maze') {
      return {
        startPos: { x: 45, y: 45 },
        startRotation: 0,
        target: { x: 255, y: 175, radius: 24 },
        walls: [
          { x1: 0, y1: 85, x2: 210, y2: 95, type: 'wall' as const },
          { x1: 90, y1: 145, x2: 300, y2: 155, type: 'wall' as const }
        ]
      };
    }

    if (selectedArena === 'radar_stop') {
      return {
        startPos: { x: 40, y: 110 },
        startRotation: 0,
        target: { x: 260, y: 110, radius: 9999 },
        walls: [
          { x1: 195, y1: 50, x2: 210, y2: 170, type: 'obstacle' as const }
        ]
      };
    }

    if (selectedArena === 'open_pen') {
      return {
        startPos: { x: 150, y: 110 },
        startRotation: 270,
        target: null,
        walls: []
      };
    }

    // Default mission-based configs
    if (missionId === 'robotics_1') {
      return {
        startPos: { x: 50, y: 180 },
        startRotation: 270, // Facing Up
        target: { x: 250, y: 40, radius: 25 },
        walls: [
          { x1: 110, y1: 80, x2: 120, y2: 220, type: 'wall' as const },
          { x1: 110, y1: 80, x2: 300, y2: 90, type: 'wall' as const },
        ]
      };
    } else if (missionId === 'robotics_2') {
      return {
        startPos: { x: 40, y: 110 },
        startRotation: 0, // Facing Right
        target: { x: 260, y: 110, radius: 9999 },
        walls: [
          { x1: 190, y1: 60, x2: 205, y2: 160, type: 'obstacle' as const }
        ]
      };
    } else if (missionId === 'robotics_3') {
      return {
        startPos: { x: 50, y: 45 },
        startRotation: 0, // Facing Right
        target: { x: 250, y: 175, radius: 22 },
        walls: [
          { x1: 0, y1: 85, x2: 210, y2: 95, type: 'wall' as const },
          { x1: 90, y1: 145, x2: 300, y2: 155, type: 'wall' as const }
        ]
      };
    } else if (missionId === 'robotics_4') {
      return {
        startPos: { x: 50, y: 185 },
        startRotation: 270, // Facing Up
        target: { x: 250, y: 45, radius: 22 },
        walls: [
          { x1: 0, y1: 95, x2: 160, y2: 105, type: 'obstacle' as const },
          { x1: 100, y1: 145, x2: 300, y2: 155, type: 'wall' as const }
        ]
      };
    }

    // Default open world
    return {
      startPos: { x: 150, y: 110 },
      startRotation: 0,
      target: null,
      walls: []
    };
  };

  const config = getLevelConfig();

  // Reset/Initialize position when level or arena changes
  const performReset = () => {
    setPos(config.startPos);
    setRotation(config.startRotation);
    setIsMoving(false);
    setDriveAction('IDLE');
    setHasCrashed(false);
    setReachedTarget(false);
    setShowCrashAlert(false);
    setTrail([]);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  useEffect(() => {
    performReset();
  }, [missionId, selectedArena]);

  // Ray-casting distance sensor calculation
  const calculateDistanceSensor = (x: number, y: number, angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const dx = Math.cos(rad);
    const dy = Math.sin(rad);

    let minT = Infinity;

    const boundaries = [
      { x1: 0, y1: 0, x2: 300, y2: 0 },
      { x1: 0, y1: 220, x2: 300, y2: 220 },
      { x1: 0, y1: 0, x2: 0, y2: 220 },
      { x1: 300, y1: 0, x2: 300, y2: 220 }
    ];

    const allWalls = [...boundaries, ...config.walls];

    allWalls.forEach(w => {
      const x1 = w.x1;
      const y1 = w.y1;
      const x2 = w.x2;
      const y2 = w.y2;

      const denominator = (x2 - x1) * dy - (y2 - y1) * dx;
      if (Math.abs(denominator) < 0.0001) return;

      const t = ((x1 - x) * (y2 - y1) - (y1 - y) * (x2 - x1)) / denominator;
      const s = ((x1 - x) * dy - (y1 - y) * dx) / denominator;

      if (t >= 0 && s >= 0 && s <= 1) {
        if (t < minT) minT = t;
      }
    });

    return Math.round(minT);
  };

  // Collision detection
  const checkCollision = (x: number, y: number) => {
    if (x < 14 || x > 286 || y < 14 || y > 206) return true;

    for (const w of config.walls) {
      const pad = 14;
      const minX = Math.min(w.x1, w.x2) - pad;
      const maxX = Math.max(w.x1, w.x2) + pad;
      const minY = Math.min(w.y1, w.y2) - pad;
      const maxY = Math.max(w.y1, w.y2) + pad;

      if (x >= minX && x <= maxX && y >= minY && y <= maxY) return true;
    }
    return false;
  };

  // Update distance sensor reading & check target
  useEffect(() => {
    const dist = calculateDistanceSensor(pos.x, pos.y, rotation);
    setDistance(dist);

    if (config.target) {
      const dx = pos.x - config.target.x;
      const dy = pos.y - config.target.y;
      const distToTarget = Math.sqrt(dx * dx + dy * dy);
      if (distToTarget < config.target.radius) {
        if (!reachedTarget) {
          sounds.playCheer();
          setReachedTarget(true);
        }
      }
    }
  }, [pos, rotation]);

  // Expose API to the IDE
  useImperativeHandle(ref, () => ({
    move: async (direction, duration) => {
      if (hasCrashedRef.current) return;
      setIsMoving(true);
      setDriveAction('DRIVING');
      const speed = direction === 'forward' ? 2 : -2;
      const startTime = Date.now();

      return new Promise((resolve) => {
        const animate = () => {
          if (hasCrashedRef.current) {
            setIsMoving(false);
            setDriveAction('IDLE');
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
              setDriveAction('IDLE');
              sounds.playLaser();
              resolve();
              return;
            }

            // Record trail
            if (penDownRef.current) {
              setTrail(prev => [...prev, { x: nextX, y: nextY, color: penColorRef.current }]);
            }

            setPos({ x: nextX, y: nextY });
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setIsMoving(false);
            setDriveAction('IDLE');
            resolve();
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      });
    },
    turn: async (direction, duration) => {
      if (hasCrashedRef.current) return;
      setIsMoving(true);
      setDriveAction('TURNING');
      const turnSpeed = direction === 'right' ? 3 : -3;
      const startTime = Date.now();

      return new Promise((resolve) => {
        const animate = () => {
          if (hasCrashedRef.current) {
            setIsMoving(false);
            setDriveAction('IDLE');
            resolve();
            return;
          }

          const elapsed = Date.now() - startTime;
          if (elapsed < duration) {
            setRotation(prev => (prev + turnSpeed + 360) % 360);
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setIsMoving(false);
            setDriveAction('IDLE');
            resolve();
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      });
    },
    stop: () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setIsMoving(false);
      setDriveAction('IDLE');
    },
    getDistance: () => {
      return calculateDistanceSensor(posRef.current.x, posRef.current.y, rotationRef.current);
    },
    reset: () => {
      performReset();
    },
    hasReachedTarget: () => {
      if (hasCrashed) return false;
      if (missionId === 'robotics_1' || missionId === 'robotics_3' || missionId === 'robotics_4' || selectedArena === 'maze') {
        return reachedTarget;
      } else if (missionId === 'robotics_2' || selectedArena === 'radar_stop') {
        return distance < 35 && !isMoving;
      }
      return true;
    }
  }));

  // Manual nudge helpers
  const handleManualMove = (direction: 'forward' | 'backward') => {
    if (hasCrashed) return;
    const speed = direction === 'forward' ? 8 : -8;
    const rad = (rotation * Math.PI) / 180;
    const nextX = pos.x + Math.cos(rad) * speed;
    const nextY = pos.y + Math.sin(rad) * speed;
    if (!checkCollision(nextX, nextY)) {
      if (penDown) setTrail(prev => [...prev, { x: nextX, y: nextY, color: penColor }]);
      setPos({ x: nextX, y: nextY });
    } else {
      setHasCrashed(true);
      setShowCrashAlert(true);
    }
  };

  const handleManualTurn = (direction: 'left' | 'right') => {
    if (hasCrashed) return;
    const delta = direction === 'right' ? 15 : -15;
    setRotation(prev => (prev + delta + 360) % 360);
  };

  return (
    <div className="robotics-simulator-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '300px' }}>
      
      {/* VEXcode VR Arena & Tool Selector Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#0f172a',
        padding: '4px 8px',
        borderRadius: '10px 10px 0 0',
        border: '1px solid rgba(255,255,255,0.08)',
        borderBottom: 'none',
        fontSize: '0.72rem',
        color: '#94a3b8'
      }}>
        {/* Arena Mode Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Compass size={13} style={{ color: '#38bdf8' }} />
          <select
            value={selectedArena}
            onChange={(e) => {
              sounds.playClick();
              setSelectedArena(e.target.value as ArenaType);
            }}
            style={{
              background: '#1e293b',
              color: '#38bdf8',
              border: '1px solid #334155',
              borderRadius: '6px',
              padding: '2px 4px',
              fontSize: '0.7rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            <option value="mission">Mission Arena</option>
            <option value="maze">Grid L-Maze</option>
            <option value="radar_stop">Radar Stop Zone</option>
            <option value="open_pen">Open Pen Canvas</option>
          </select>
        </div>

        {/* Pen & Manual Toggles */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              setPenDown(!penDown);
            }}
            title={penDown ? 'Pen Down (Drawing trail)' : 'Pen Up (No trail)'}
            style={{
              background: penDown ? 'rgba(14, 165, 233, 0.25)' : 'rgba(255,255,255,0.06)',
              color: penDown ? '#38bdf8' : '#64748b',
              border: `1px solid ${penDown ? '#0ea5e9' : 'transparent'}`,
              borderRadius: '6px',
              padding: '2px 6px',
              fontSize: '0.65rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <PenTool size={11} />
            <span>{penDown ? 'Pen ON' : 'Pen OFF'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              setShowManualPad(!showManualPad);
            }}
            title="Toggle Manual D-Pad Joystick"
            style={{
              background: showManualPad ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255,255,255,0.06)',
              color: showManualPad ? '#fbbf24' : '#64748b',
              border: `1px solid ${showManualPad ? '#f59e0b' : 'transparent'}`,
              borderRadius: '6px',
              padding: '2px 6px',
              fontSize: '0.65rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '3px'
            }}
          >
            <Gamepad2 size={12} />
            <span>Test</span>
          </button>
        </div>
      </div>

      {/* The 2D Virtual Arena Viewport */}
      <div
        className={`robotics-simulator glass-panel ${showCrashAlert ? 'sim-crashed-flash' : ''}`}
        ref={containerRef}
        style={{
          width: '300px',
          height: '220px',
          position: 'relative',
          overflow: 'hidden',
          background: '#090d16',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '0 0 14px 14px'
        }}
      >
        {/* Drawing Trail Canvas */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
          {trail.map((pt, i) => (
            <circle key={i} cx={pt.x} cy={pt.y} r={2} fill={pt.color} opacity={0.7} />
          ))}
        </svg>

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
            <span style={{ fontSize: '0.55rem', color: reachedTarget ? '#10b981' : '#ef4444', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {reachedTarget ? 'REACHED!' : 'Goal'}
            </span>
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
                background: isObstacle
                  ? 'repeating-linear-gradient(45deg, #f59e0b, #f59e0b 8px, #78350f 8px, #78350f 16px)'
                  : 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
                border: isObstacle ? '1px solid #f59e0b' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                zIndex: 3
              }}
            />
          );
        })}

        {/* Arena Grid Overlay */}
        <div className="sim-grid" style={{ opacity: 0.12 }}>
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="grid-line horizontal" style={{ top: `${i * 12.5}%`, borderBottom: '1px dashed white', position: 'absolute', width: '100%' }} />
              <div className="grid-line vertical" style={{ left: `${i * 12.5}%`, borderRight: '1px dashed white', position: 'absolute', height: '100%' }} />
            </React.Fragment>
          ))}
        </div>

        {/* The Rover Robot */}
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
          {/* Laser Sensor Beam */}
          {!hasCrashed && (
            <div 
              className="sensor-beam" 
              style={{ 
                position: 'absolute',
                left: '16px',
                top: '15px',
                width: `${distance}px`,
                height: '2px',
                background: distance < 40 ? '#ef4444' : '#10b981',
                boxShadow: `0 0 6px ${distance < 40 ? '#ef4444' : '#10b981'}`,
                transformOrigin: 'left center',
                zIndex: 1
              }} 
            />
          )}
          <Car size={26} className="car-body" style={{ color: hasCrashed ? '#ef4444' : '#38bdf8' }} />
          <Radar size={10} className="radar-icon" style={{ position: 'absolute', top: '8px', left: '8px', color: 'white', opacity: isMoving ? 1 : 0.5 }} />
        </div>

        {/* Crash Banner Overlay */}
        {showCrashAlert && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(239, 68, 68, 0.88)',
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
            <h4 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', fontSize: '1.25rem' }}>ROVER CRASHED!</h4>
            <p style={{ margin: '0.2rem 0 0.5rem', fontSize: '0.7rem', opacity: 0.9 }}>Sensor detected direct impact.</p>
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <RefreshCw size={12} />
              <span>Reset Rover</span>
            </button>
          </div>
        )}

        {/* VEXcode VR Sensor HUD Overlay */}
        <div className="sim-stats" style={{
          position: 'absolute',
          bottom: '0.4rem',
          left: '0.4rem',
          right: '0.4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.9)',
          padding: '0.25rem 0.5rem',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.62rem',
          fontFamily: 'monospace',
          zIndex: 20
        }}>
          {/* Distance Sensor */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <span style={{ color: '#94a3b8' }}>RADAR:</span>
            <span style={{ color: distance < 40 ? '#ef4444' : '#10b981', fontWeight: 800 }}>{distance}cm</span>
          </div>

          {/* Gyro Heading */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Compass size={11} style={{ color: '#38bdf8' }} />
            <span style={{ color: 'white' }}>{Math.round(rotation)}°</span>
          </div>

          {/* Drive State */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <span style={{
              background: driveAction === 'DRIVING' ? '#22c55e' : (driveAction === 'TURNING' ? '#a855f7' : '#475569'),
              color: 'white',
              padding: '1px 4px',
              borderRadius: '4px',
              fontWeight: 800,
              fontSize: '0.55rem'
            }}>
              {driveAction}
            </span>
          </div>

          {/* Reset Button */}
          <button
            type="button"
            onClick={performReset}
            title="Reset position and clear trail"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <RefreshCw size={11} />
          </button>
        </div>
      </div>

      {/* Manual D-Pad Joystick Drawer (Optional testing tool) */}
      {showManualPad && (
        <div style={{
          background: '#0f172a',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 800 }}>MANUAL TEST JOYSTICK</div>
          <button
            type="button"
            onClick={() => handleManualMove('forward')}
            style={{ width: '40px', height: '26px', background: '#1e293b', border: '1px solid #334155', color: '#38bdf8', borderRadius: '6px', cursor: 'pointer', fontWeight: 900 }}
          >
            ▲
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => handleManualTurn('left')}
              style={{ width: '40px', height: '26px', background: '#1e293b', border: '1px solid #334155', color: '#38bdf8', borderRadius: '6px', cursor: 'pointer', fontWeight: 900 }}
            >
              ◀
            </button>
            <button
              type="button"
              onClick={performReset}
              style={{ width: '40px', height: '26px', background: '#ef4444', border: 'none', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 900 }}
            >
              RST
            </button>
            <button
              type="button"
              onClick={() => handleManualTurn('right')}
              style={{ width: '40px', height: '26px', background: '#1e293b', border: '1px solid #334155', color: '#38bdf8', borderRadius: '6px', cursor: 'pointer', fontWeight: 900 }}
            >
              ▶
            </button>
          </div>
          <button
            type="button"
            onClick={() => handleManualMove('backward')}
            style={{ width: '40px', height: '26px', background: '#1e293b', border: '1px solid #334155', color: '#38bdf8', borderRadius: '6px', cursor: 'pointer', fontWeight: 900 }}
          >
            ▼
          </button>
        </div>
      )}
    </div>
  );
});

RoboticsSimulator.displayName = 'RoboticsSimulator';

export default RoboticsSimulator;
