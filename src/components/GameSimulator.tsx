import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import './GameSimulator.css';

export interface GameHandle {
  setGravity: (g: number) => void;
  jump: (force: number) => void;
  reset: () => void;
  spawnStars: (count: number) => void;
  updateScore: (points: number) => void;
  onKeyPress: (key: string, callback: () => void) => void;
  updatePlayerProps?: (props: Partial<{ x: number; y: number; size: number; direction: number; visible: boolean; name: string }>) => void;
  setBackdrop?: (backdropId: string) => void;
}

interface GameSimulatorProps {
  backdrop?: string;
  showGrid?: boolean;
}

const GameSimulator = forwardRef<GameHandle, GameSimulatorProps>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  
  // Game State
  const gameState = useRef({
    gravity: 0,
    player: {
      x: 50,
      y: 300,
      vy: 0,
      width: 60,
      height: 60,
      isOnGround: false,
      visible: true,
      size: 100,
      direction: 90,
      name: 'Kone Mascot'
    },
    stars: [] as { x: number, y: number, collected: boolean }[],
    keyListeners: {} as Record<string, (() => void)[]>,
    floorY: 350,
    isRunning: false,
    lastTime: 0,
    backdrop: props.backdrop || 'default',
    showGrid: props.showGrid || false
  });

  const mascotImg = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (props.backdrop) {
      gameState.current.backdrop = props.backdrop;
    }
    gameState.current.showGrid = !!props.showGrid;
  }, [props.backdrop, props.showGrid]);

  useEffect(() => {
    const img = new Image();
    img.src = '/mascot/standing.svg';
    img.onload = () => { mascotImg.current = img; };
  }, []);

  useImperativeHandle(ref, () => ({
    setGravity: (g) => {
      gameState.current.gravity = g;
      gameState.current.isRunning = true;
    },
    jump: (force) => {
      if (gameState.current.player.isOnGround) {
        gameState.current.player.vy = -force / 20;
        gameState.current.player.isOnGround = false;
      }
    },
    reset: () => {
      gameState.current.player.y = 300;
      gameState.current.player.vy = 0;
      gameState.current.player.isOnGround = false;
      gameState.current.stars = [];
      gameState.current.gravity = 0;
      gameState.current.keyListeners = {};
      setScore(0);
    },
    spawnStars: (count) => {
      const newStars = [];
      for (let i = 0; i < count; i++) {
        newStars.push({
          x: 150 + Math.random() * 400,
          y: 100 + Math.random() * 200,
          collected: false
        });
      }
      gameState.current.stars = newStars;
    },
    updateScore: (points: number) => {
      setScore(s => s + points);
    },
    onKeyPress: (key: string, callback: () => void) => {
      if (!gameState.current.keyListeners[key]) {
        gameState.current.keyListeners[key] = [];
      }
      gameState.current.keyListeners[key].push(callback);
    },
    updatePlayerProps: (updates) => {
      if (updates.x !== undefined) gameState.current.player.x = updates.x;
      if (updates.y !== undefined) gameState.current.player.y = updates.y;
      if (updates.size !== undefined) gameState.current.player.size = updates.size;
      if (updates.direction !== undefined) gameState.current.player.direction = updates.direction;
      if (updates.visible !== undefined) gameState.current.player.visible = updates.visible;
      if (updates.name !== undefined) gameState.current.player.name = updates.name;
    },
    setBackdrop: (backdropId: string) => {
      gameState.current.backdrop = backdropId;
    }
  }));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const listeners = gameState.current.keyListeners[e.key] || gameState.current.keyListeners['any'];
      if (listeners) {
        listeners.forEach(cb => cb());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let animationId: number;

    const update = (time: number) => {
      const dt = (time - gameState.current.lastTime) / 1000;
      gameState.current.lastTime = time;

      if (gameState.current.isRunning && dt < 0.1) {
        const state = gameState.current;
        const player = state.player;

        // Physics
        player.vy += state.gravity * dt * 50; // Scaling gravity
        player.y += player.vy;

        // Floor Collision
        const effectiveHeight = 60 * (player.size / 100);
        if (player.y + effectiveHeight > state.floorY) {
          player.y = state.floorY - effectiveHeight;
          player.vy = 0;
          player.isOnGround = true;
        }

        // Star Collision
        const effectiveWidth = 60 * (player.size / 100);
        state.stars.forEach(star => {
          if (!star.collected) {
            const dx = (player.x + effectiveWidth / 2) - star.x;
            const dy = (player.y + effectiveHeight / 2) - star.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 40) {
              star.collected = true;
              setScore(s => s + 10);
            }
          }
        });
      }

      draw();
      animationId = requestAnimationFrame(update);
    };

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { player, stars, floorY, backdrop } = gameState.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Backdrop
      if (backdrop === 'space') {
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, '#0b0f19');
        grad.addColorStop(1, '#1e1b4b');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw stars background
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = 4;
        for (let i = 0; i < 25; i++) {
          const sx = (i * 27 + 12) % canvas.width;
          const sy = (i * 19 + 5) % canvas.height;
          ctx.beginPath();
          ctx.arc(sx, sy, (i % 3) + 1, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;

        // Floor in space
        ctx.fillStyle = '#312e81';
        ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);
        ctx.strokeStyle = '#4338ca';
        ctx.lineWidth = 3;
        ctx.strokeRect(0, floorY, canvas.width, canvas.height - floorY);

      } else if (backdrop === 'underwater') {
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, '#0e7490');
        grad.addColorStop(1, '#164e63');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Water waves / bubbles
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        for (let i = 0; i < 15; i++) {
          const bx = (i * 43) % canvas.width;
          const by = (i * 29 + 10) % canvas.height;
          ctx.beginPath();
          ctx.arc(bx, by, (i % 4) + 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Ocean bed
        ctx.fillStyle = '#d97706';
        ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 3;
        ctx.strokeRect(0, floorY, canvas.width, canvas.height - floorY);

      } else if (backdrop === 'cyber') {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Cyber grid
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Cyber neon floor
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);
        ctx.strokeStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.lineWidth = 4;
        ctx.strokeRect(0, floorY, canvas.width, canvas.height - floorY);
        ctx.shadowBlur = 0;

      } else if (backdrop === 'playground') {
        // Sky
        const grad = ctx.createLinearGradient(0, 0, 0, floorY);
        grad.addColorStop(0, '#38bdf8');
        grad.addColorStop(1, '#bae6fd');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, floorY);

        // Sun
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(520, 60, 35, 0, Math.PI * 2);
        ctx.fill();

        // Stage X/Y Coordinate Grid Overlay
      if (props.showGrid) {
        ctx.save();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);

        for (let x = 0; x <= canvas.width; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();

          ctx.fillStyle = 'rgba(56, 189, 248, 0.75)';
          ctx.font = 'bold 9px monospace';
          ctx.fillText(`x:${x}`, x + 3, 14);
        }

        for (let y = 0; y <= canvas.height; y += 50) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();

          ctx.fillStyle = 'rgba(56, 189, 248, 0.75)';
          ctx.font = 'bold 9px monospace';
          ctx.fillText(`y:${y}`, 4, y - 4);
        }

        ctx.restore();
      }

      } else {
        // Default Stage
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#334155';
        ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 4;
        ctx.strokeRect(0, floorY, canvas.width, canvas.height - floorY);
      }

      // Draw X/Y Coordinate Grid Overlay if active
      if (gameState.current.showGrid) {
        ctx.save();
        const midX = canvas.width / 2;
        const midY = canvas.height / 2;

        // Minor grid lines
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);

        for (let x = 0; x <= canvas.width; x += 50) {
          if (x === midX) continue;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        for (let y = 0; y <= canvas.height; y += 50) {
          if (y === midY) continue;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Major X & Y Axis
        ctx.setLineDash([]);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;

        // X-Axis (Horizontal)
        ctx.beginPath();
        ctx.moveTo(0, midY);
        ctx.lineTo(canvas.width, midY);
        ctx.stroke();

        // Y-Axis (Vertical)
        ctx.beginPath();
        ctx.moveTo(midX, 0);
        ctx.lineTo(midX, canvas.height);
        ctx.stroke();

        // Coordinate Labels
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // X Labels
        for (let x = 50; x < canvas.width; x += 100) {
          const scratchX = x - midX;
          ctx.fillText(`X:${scratchX}`, x, midY + 4);
        }

        // Y Labels
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        for (let y = 50; y < canvas.height; y += 100) {
          const scratchY = midY - y;
          if (scratchY !== 0) {
            ctx.fillText(`Y:${scratchY}`, midX + 6, y);
          }
        }

        // Center Origin (0,0) Marker
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(midX, midY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 11px monospace';
        ctx.fillText('(0,0)', midX + 8, midY - 10);

        ctx.restore();
      }

      // Draw Collectible Stars
      stars.forEach(star => {
        if (!star.collected) {
          ctx.font = '24px serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⭐', star.x, star.y);
        }
      });

      // Draw Player / Mascot with Size, Visibility, and Rotation
      if (player.visible) {
        ctx.save();
        const pWidth = 60 * (player.size / 100);
        const pHeight = 60 * (player.size / 100);
        const centerX = player.x + pWidth / 2;
        const centerY = player.y + pHeight / 2;

        ctx.translate(centerX, centerY);
        // Scratch direction 90 is upright (0 deg rotation).
        const rad = ((player.direction - 90) * Math.PI) / 180;
        ctx.rotate(rad);

        if (mascotImg.current) {
          ctx.drawImage(mascotImg.current, -pWidth / 2, -pHeight / 2, pWidth, pHeight);
        } else {
          ctx.fillStyle = '#0ea5e9';
          ctx.fillRect(-pWidth / 2, -pHeight / 2, pWidth, pHeight);
        }
        ctx.restore();
      }
    };

    animationId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="game-simulator">
      <div className="game-hud">
        <div className="score-badge">SCORE: {score}</div>
      </div>
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={400} 
        className="game-canvas"
      />
    </div>
  );
});

GameSimulator.displayName = 'GameSimulator';
export default GameSimulator;
