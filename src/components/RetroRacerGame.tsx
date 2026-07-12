import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../utils/sounds';

interface RetroRacerGameProps {
  level: number;
  onComplete: (xp: number) => void;
  onExit: () => void;
}

interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  color: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  collected: boolean;
}

const LANE_WIDTH = 80;
const ROAD_WIDTH = LANE_WIDTH * 3;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 500;
const ROAD_X = (CANVAS_WIDTH - ROAD_WIDTH) / 2;

const RetroRacerGame: React.FC<RetroRacerGameProps> = ({ level, onComplete, onExit }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'crashed' | 'gameover' | 'completed'>('ready');
  const [score, setScore] = useState(0);
  const [distanceLeft, setDistanceLeft] = useState(1000 + level * 200); // Distance to finish line
  const [lives, setLives] = useState(3);
  const [muted, setMuted] = useState(sounds.getMuted());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // References for live game loop state
  const stateRef = useRef({
    player: {
      x: CANVAS_WIDTH / 2 - 20,
      y: CANVAS_HEIGHT - 100,
      width: 40,
      height: 70,
      color: '#ef4444',
      targetX: CANVAS_WIDTH / 2 - 20,
      speed: 350 // movement speed
    },
    obstacles: [] as Obstacle[],
    stars: [] as Star[],
    roadOffset: 0,
    roadSpeed: 250 + level * 30, // Road speed scales with level
    spawnTimer: 0,
    starSpawnTimer: 0,
    invincibilityFrames: 0,
    keys: {} as Record<string, boolean>,
    lastTime: 0
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard Handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      stateRef.current.keys[e.key] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      stateRef.current.keys[e.key] = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Restart / Reset game state
  const startGame = () => {
    stateRef.current.player.x = CANVAS_WIDTH / 2 - 20;
    stateRef.current.player.targetX = CANVAS_WIDTH / 2 - 20;
    stateRef.current.obstacles = [];
    stateRef.current.stars = [];
    stateRef.current.invincibilityFrames = 0;
    stateRef.current.lastTime = performance.now();
    setScore(0);
    setLives(3);
    setDistanceLeft(1000 + level * 200);
    setGameState('playing');
    sounds.playClick();
  };

  // Mobile Button Controls
  const moveLeft = () => {
    const state = stateRef.current;
    state.player.targetX = Math.max(ROAD_X + 10, state.player.targetX - LANE_WIDTH);
    sounds.playClick();
  };

  const moveRight = () => {
    const state = stateRef.current;
    state.player.targetX = Math.min(ROAD_X + ROAD_WIDTH - state.player.width - 10, state.player.targetX + LANE_WIDTH);
    sounds.playClick();
  };

  // Toggle Mute
  const handleToggleMute = () => {
    setMuted(sounds.toggleMute());
  };

  // Primary Game Loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    let animationFrameId: number;

    const gameLoop = (time: number) => {
      const dt = (time - stateRef.current.lastTime) / 1000;
      stateRef.current.lastTime = time;

      if (dt > 0.1) {
        animationFrameId = requestAnimationFrame(gameLoop);
        return; // Prevent huge updates if browser tabs switch
      }

      update(dt);
      draw();

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    const update = (dt: number) => {
      const state = stateRef.current;
      const player = state.player;

      // Invincibility cooldown
      if (state.invincibilityFrames > 0) {
        state.invincibilityFrames -= dt * 60;
      }

      // Keyboard Controls (Smooth interpolation to lanes)
      if (state.keys['ArrowLeft'] || state.keys['a']) {
        player.targetX = Math.max(ROAD_X + 10, player.x - state.roadSpeed * dt * 1.5);
      }
      if (state.keys['ArrowRight'] || state.keys['d']) {
        player.targetX = Math.min(ROAD_X + ROAD_WIDTH - player.width - 10, player.x + state.roadSpeed * dt * 1.5);
      }

      // Smoothly slide to target X position
      player.x += (player.targetX - player.x) * 15 * dt;

      // Scroll Road background
      state.roadOffset = (state.roadOffset + state.roadSpeed * dt) % 60;

      // Spawn Obstacles
      state.spawnTimer += dt;
      const spawnInterval = Math.max(0.8, 1.8 - level * 0.1);
      if (state.spawnTimer > spawnInterval) {
        state.spawnTimer = 0;
        const lane = Math.floor(Math.random() * 3);
        const laneX = ROAD_X + lane * LANE_WIDTH + (LANE_WIDTH - 40) / 2;
        const obstacleColors = ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];
        state.obstacles.push({
          x: laneX,
          y: -80,
          width: 40,
          height: 70,
          speed: state.roadSpeed * 0.4 + Math.random() * 50,
          color: obstacleColors[Math.floor(Math.random() * obstacleColors.length)]
        });
      }

      // Spawn Stars/Coins
      state.starSpawnTimer += dt;
      if (state.starSpawnTimer > 1.2) {
        state.starSpawnTimer = 0;
        const lane = Math.floor(Math.random() * 3);
        const laneX = ROAD_X + lane * LANE_WIDTH + LANE_WIDTH / 2;
        state.stars.push({
          x: laneX,
          y: -40,
          size: 15,
          collected: false
        });
      }

      // Move Obstacles & Check Collisions
      state.obstacles.forEach((obs, index) => {
        obs.y += obs.speed * dt;

        // Collision Check (AABB)
        if (
          player.x < obs.x + obs.width &&
          player.x + player.width > obs.x &&
          player.y < obs.y + obs.height &&
          player.y + player.height > obs.y
        ) {
          if (state.invincibilityFrames <= 0) {
            // Hit!
            sounds.playExplosion();
            setLives(prev => {
              const nextLives = prev - 1;
              if (nextLives <= 0) {
                setGameState('gameover');
              } else {
                state.invincibilityFrames = 90; // invincibility for 1.5s
              }
              return nextLives;
            });
            // remove obstacle
            state.obstacles.splice(index, 1);
          }
        }

        // Remove offscreen obstacles
        if (obs.y > CANVAS_HEIGHT) {
          state.obstacles.splice(index, 1);
          setScore(s => s + 5);
        }
      });

      // Move Stars & Collect Collisions
      state.stars.forEach((star, index) => {
        star.y += state.roadSpeed * dt;

        // Check Star Collision
        if (!star.collected) {
          const px = player.x + player.width / 2;
          const py = player.y + player.height / 2;
          const dx = px - star.x;
          const dy = py - star.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 35) {
            star.collected = true;
            sounds.playCoin();
            setScore(s => s + 20);
            state.stars.splice(index, 1);
          }
        }

        // Remove offscreen stars
        if (star.y > CANVAS_HEIGHT) {
          state.stars.splice(index, 1);
        }
      });

      // Update remaining distance
      setDistanceLeft(prev => {
        const nextDist = Math.max(0, prev - state.roadSpeed * dt * 0.1);
        if (nextDist <= 0) {
          setGameState('completed');
          sounds.playSuccess();
          const xpGained = 50 + score + level * 10;
          onComplete(xpGained);
        }
        return nextDist;
      });
    };

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const state = stateRef.current;
      const player = state.player;

      // Clear Screen (Sky/Grass background)
      ctx.fillStyle = '#065f46'; // Green fields
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw Main Road
      ctx.fillStyle = '#1e293b'; // Asphalt gray
      ctx.fillRect(ROAD_X, 0, ROAD_WIDTH, CANVAS_HEIGHT);

      // Draw Road Shoulders/Borders
      ctx.fillStyle = '#ef4444'; // Red-white stripe border (Left)
      ctx.fillRect(ROAD_X - 10, 0, 10, CANVAS_HEIGHT);
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < CANVAS_HEIGHT; i += 40) {
        ctx.fillRect(ROAD_X - 10, (i + state.roadOffset) % CANVAS_HEIGHT, 10, 20);
      }

      ctx.fillStyle = '#ef4444'; // Red-white stripe border (Right)
      ctx.fillRect(ROAD_X + ROAD_WIDTH, 0, 10, CANVAS_HEIGHT);
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < CANVAS_HEIGHT; i += 40) {
        ctx.fillRect(ROAD_X + ROAD_WIDTH, (i + state.roadOffset) % CANVAS_HEIGHT, 10, 20);
      }

      // Draw Lane Lines
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.setLineDash([20, 25]);
      ctx.beginPath();
      // Lane 1 divider
      ctx.moveTo(ROAD_X + LANE_WIDTH, 0);
      ctx.lineTo(ROAD_X + LANE_WIDTH, CANVAS_HEIGHT);
      // Lane 2 divider
      ctx.moveTo(ROAD_X + LANE_WIDTH * 2, 0);
      ctx.lineTo(ROAD_X + LANE_WIDTH * 2, CANVAS_HEIGHT);
      ctx.lineDashOffset = -state.roadOffset;
      ctx.stroke();
      ctx.setLineDash([]); // Reset dash

      // Draw Stars/Coins
      state.stars.forEach(star => {
        if (!star.collected) {
          ctx.font = '20px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⭐', star.x, star.y);
        }
      });

      // Draw Obstacles (Traffic cars)
      state.obstacles.forEach(obs => {
        drawCar(ctx, obs.x, obs.y, obs.width, obs.height, obs.color, true);
      });

      // Draw Player Car (with invincibility flashing)
      const flash = Math.floor(state.invincibilityFrames / 4) % 2 === 0;
      if (state.invincibilityFrames <= 0 || flash) {
        drawCar(ctx, player.x, player.y, player.width, player.height, player.color, false);
      }
    };

    const drawCar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      color: string,
      isObstacle: boolean
    ) => {
      // Wheels
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(x - 4, y + 10, 4, 15); // Front-Left
      ctx.fillRect(x + width, y + 10, 4, 15); // Front-Right
      ctx.fillRect(x - 4, y + height - 25, 4, 15); // Rear-Left
      ctx.fillRect(x + width, y + height - 25, 4, 15); // Rear-Right

      // Car Body
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, width, height, 10) : ctx.rect(x, y, width, height);
      ctx.fill();

      // Spoiler/Rear Wing (only player sports car has wing)
      if (!isObstacle) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(x - 6, y + height - 8, width + 12, 6);
      }

      // Windshield
      ctx.fillStyle = '#93c5fd';
      ctx.fillRect(x + 5, isObstacle ? y + height - 25 : y + 20, width - 10, 12);

      // Cabin glass/roof details
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(x + 5, isObstacle ? y + 25 : y + 32, width - 10, 15);

      // Headlights / Taillights
      ctx.fillStyle = isObstacle ? '#ef4444' : '#fef08a'; // Headlights face up for player, down for traffic
      ctx.fillRect(x + 4, isObstacle ? y + height - 4 : y + 2, 6, 3);
      ctx.fillRect(x + width - 10, isObstacle ? y + height - 4 : y + 2, 6, 3);
    };

    animationFrameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameState, level, score]);

  return (
    <div style={{
      background: '#0f172a',
      borderRadius: '24px',
      padding: isMobile ? '1rem' : '2.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      width: '100%',
      maxWidth: '480px',
      color: 'white',
      border: '2px solid #10b981',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Header hud */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <button 
          onClick={onExit}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            borderRadius: '12px',
            padding: '0.5rem',
            color: '#10b981',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontWeight: 800
          }}
        >
          <ArrowLeft size={18} /> Exit
        </button>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={handleToggleMute}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: 'none',
              borderRadius: '12px',
              padding: '0.5rem',
              color: '#94a3b8',
              cursor: 'pointer'
            }}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>

      <div style={{
        background: 'rgba(16,185,129,0.08)',
        borderRadius: '16px',
        padding: '0.6rem 1.2rem',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.95rem',
        fontWeight: 800,
        fontFamily: '"Baloo 2", cursive',
        marginBottom: '1.2rem',
        border: '1px solid rgba(16,185,129,0.2)'
      }}>
        <span style={{ color: '#10b981' }}>SCORE: {score}</span>
        <span style={{ color: '#fbbf24' }}>ROAD LEFT: {Math.round(distanceLeft)}m</span>
        <span style={{ color: '#ef4444' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i}>{i < lives ? '❤️' : '🖤'}</span>
          ))}
        </span>
      </div>

      <div style={{ 
        position: 'relative', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        border: '3px solid #1e293b',
        background: '#065f46',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <canvas 
          ref={canvasRef} 
          width={CANVAS_WIDTH} 
          height={CANVAS_HEIGHT}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block'
          }}
        />

        {/* Ready Overlay */}
        {gameState === 'ready' && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15,23,42,0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
            <span style={{ fontSize: '4.5rem' }}>🏎️</span>
            <h2 style={{ fontFamily: '"Baloo 2", cursive', margin: '0.5rem 0', fontSize: '2rem' }}>
              Level {level}
            </h2>
            <p style={{ color: '#94a3b8', margin: '0 0 1.5rem', fontSize: '0.95rem' }}>
              Dodge other cars and collect stars. Reach the finish line to complete the level!
            </p>
            <button 
              onClick={startGame}
              style={{
                background: '#10b981',
                color: 'white',
                border: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '14px',
                fontWeight: 900,
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 16px rgba(16,185,129,0.3)'
              }}
            >
              <Play size={18} fill="white" /> Start Race
            </button>
          </div>
        )}

        {/* Game Over Overlay */}
        {gameState === 'gameover' && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(239,68,68,0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
            <span style={{ fontSize: '4rem' }}>💥</span>
            <h2 style={{ fontFamily: '"Baloo 2", cursive', margin: '0.5rem 0 0', fontSize: '2.5rem' }}>
              Crash!
            </h2>
            <p style={{ color: 'white', opacity: 0.9, margin: '0 0 1.5rem', fontWeight: 800 }}>
              Your car was destroyed!
            </p>
            <button 
              onClick={startGame}
              style={{
                background: 'white',
                color: '#ef4444',
                border: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '14px',
                fontWeight: 900,
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }}
            >
              <RotateCcw size={18} /> Try Again
            </button>
          </div>
        )}

        {/* Level Complete Overlay */}
        {gameState === 'completed' && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(16,185,129,0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
            <span style={{ fontSize: '4rem' }}>🏆</span>
            <h2 style={{ fontFamily: '"Baloo 2", cursive', margin: '0.5rem 0 0', fontSize: '2.3rem' }}>
              Victory!
            </h2>
            <p style={{ color: 'white', opacity: 0.95, margin: '0 0 1.5rem', fontWeight: 800 }}>
              You reached the finish line!
            </p>
            <div style={{
              background: 'rgba(255,255,255,0.15)',
              padding: '0.8rem 1.5rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '1.05rem',
              marginBottom: '1.5rem'
            }}>
              + {50 + score + level * 10} XP gained!
            </div>
            <button 
              onClick={onExit}
              style={{
                background: 'white',
                color: '#10b981',
                border: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '14px',
                fontWeight: 900,
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}
            >
              Continue
            </button>
          </div>
        )}
      </div>

      {/* Mobile steering overlay */}
      {isMobile && gameState === 'playing' && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
          gap: '1rem'
        }}>
          <button
            onTouchStart={moveLeft}
            onClick={moveLeft}
            style={{
              flex: 1,
              background: '#334155',
              border: 'none',
              padding: '1.25rem',
              borderRadius: '16px',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 900,
              cursor: 'pointer',
              userSelect: 'none',
              touchAction: 'manipulation'
            }}
          >
            ◀️
          </button>
          <button
            onTouchStart={moveRight}
            onClick={moveRight}
            style={{
              flex: 1,
              background: '#334155',
              border: 'none',
              padding: '1.25rem',
              borderRadius: '16px',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 900,
              cursor: 'pointer',
              userSelect: 'none',
              touchAction: 'manipulation'
            }}
          >
            ▶️
          </button>
        </div>
      )}

      {/* Desktop hint */}
      {!isMobile && gameState === 'playing' && (
        <div style={{
          marginTop: '1rem',
          fontSize: '0.85rem',
          color: '#64748b',
          fontWeight: 700
        }}>
          Use <strong>A / D</strong> or <strong>◀️ / ▶️</strong> Arrow Keys to steer
        </div>
      )}
    </div>
  );
};

export default RetroRacerGame;
