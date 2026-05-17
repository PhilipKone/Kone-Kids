import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import './GameSimulator.css';

export interface GameHandle {
  setGravity: (g: number) => void;
  jump: (force: number) => void;
  reset: () => void;
  spawnStars: (count: number) => void;
  updateScore: (points: number) => void;
  onKeyPress: (key: string, callback: () => void) => void;
}

const GameSimulator = forwardRef<GameHandle, {}>((props, ref) => {
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
      isOnGround: false
    },
    stars: [] as { x: number, y: number, collected: boolean }[],
    keyListeners: {} as Record<string, (() => void)[]>,
    floorY: 350,
    isRunning: false,
    lastTime: 0
  });

  const mascotImg = useRef<HTMLImageElement | null>(null);

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
        if (player.y + player.height > state.floorY) {
          player.y = state.floorY - player.height;
          player.vy = 0;
          player.isOnGround = true;
        }

        // Star Collision
        state.stars.forEach(star => {
          if (!star.collected) {
            const dx = (player.x + player.width / 2) - star.x;
            const dy = (player.y + player.height / 2) - star.y;
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

      const { player, stars, floorY } = gameState.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Floor
      ctx.fillStyle = '#334155';
      ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 4;
      ctx.strokeRect(0, floorY, canvas.width, canvas.height - floorY);

      // Draw Stars
      stars.forEach(star => {
        if (!star.collected) {
          ctx.font = '24px serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⭐', star.x, star.y);
        }
      });

      // Draw Player (Mascot)
      if (mascotImg.current) {
        ctx.drawImage(mascotImg.current, player.x, player.y, player.width, player.height);
      } else {
        ctx.fillStyle = '#0ea5e9';
        ctx.fillRect(player.x, player.y, player.width, player.height);
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
