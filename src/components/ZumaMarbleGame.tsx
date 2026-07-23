import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, RotateCcw, Sparkles, Trophy, Flame, Zap, Clock, Rewind, Target } from 'lucide-react';
import { sounds } from '../utils/sounds';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { useIsMobile } from '../hooks/useMediaQuery';

interface ZumaMarbleGameProps {
  level: number;
  onComplete: (xp: number) => void;
  onExit: () => void;
}

export type MarbleColor = '#ec4899' | '#06b6d4' | '#10b981' | '#f59e0b' | '#a855f7' | '#ef4444';
export type PowerUpType = 'bomb' | 'slow' | 'reverse' | 'laser' | 'normal';

export interface Marble {
  id: string;
  color: MarbleColor;
  distance: number; // distance along the path curve in pixels
  powerUp: PowerUpType;
}

interface ShotProjectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: MarbleColor;
  powerUp: PowerUpType;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  maxLife: number;
  size: number;
}

interface LevelData {
  title: string;
  colors: MarbleColor[];
  speed: number; // pixels per frame
  totalMarbles: number;
  parScore: number;
  curveType: 'spiral' | 's_curve' | 'loop' | 'figure8' | 'concentric';
}

const COLOR_PALETTE: MarbleColor[] = ['#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#a855f7', '#ef4444'];

const LEVEL_CONFIGS: Record<number, LevelData> = {
  1: { title: 'Spiral Beginnings', colors: ['#ec4899', '#06b6d4', '#10b981'], speed: 0.8, totalMarbles: 25, parScore: 1200, curveType: 'spiral' },
  2: { title: 'Snake Curve', colors: ['#ec4899', '#06b6d4', '#10b981'], speed: 0.9, totalMarbles: 30, parScore: 1500, curveType: 's_curve' },
  3: { title: 'Emerald Loop', colors: ['#ec4899', '#06b6d4', '#f59e0b'], speed: 1.0, totalMarbles: 35, parScore: 1800, curveType: 'loop' },
  4: { title: 'Golden Figure 8', colors: ['#06b6d4', '#10b981', '#f59e0b'], speed: 1.1, totalMarbles: 40, parScore: 2200, curveType: 'figure8' },
  5: { title: 'Purple Vortex', colors: ['#ec4899', '#10b981', '#a855f7'], speed: 1.2, totalMarbles: 45, parScore: 2600, curveType: 'concentric' },
  6: { title: 'Ruby S-Trail', colors: ['#ec4899', '#06b6d4', '#ef4444', '#f59e0b'], speed: 1.3, totalMarbles: 50, parScore: 3000, curveType: 's_curve' },
  7: { title: 'Cyan Whirlwind', colors: ['#06b6d4', '#10b981', '#f59e0b', '#a855f7'], speed: 1.4, totalMarbles: 55, parScore: 3500, curveType: 'spiral' },
  8: { title: 'Neon Infinity', colors: ['#ec4899', '#06b6d4', '#10b981', '#a855f7'], speed: 1.5, totalMarbles: 60, parScore: 4000, curveType: 'figure8' },
  9: { title: 'Triple Threat Loop', colors: ['#ec4899', '#06b6d4', '#10b981', '#ef4444', '#a855f7'], speed: 1.6, totalMarbles: 65, parScore: 4500, curveType: 'loop' },
  10: { title: 'Prism Labyrinth', colors: ['#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'], speed: 1.7, totalMarbles: 70, parScore: 5000, curveType: 'concentric' },
  11: { title: 'Supernova Spiral', colors: ['#06b6d4', '#10b981', '#f59e0b', '#a855f7', '#ef4444'], speed: 1.8, totalMarbles: 75, parScore: 5500, curveType: 'spiral' },
  12: { title: 'Quantum S-Curve', colors: ['#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#a855f7', '#ef4444'], speed: 1.9, totalMarbles: 80, parScore: 6000, curveType: 's_curve' },
  13: { title: 'Cosmic Loop Chamber', colors: ['#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#a855f7', '#ef4444'], speed: 2.0, totalMarbles: 85, parScore: 6500, curveType: 'loop' },
  14: { title: 'Hyper Figure-8', colors: ['#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#a855f7', '#ef4444'], speed: 2.1, totalMarbles: 90, parScore: 7000, curveType: 'figure8' },
  15: { title: 'Master Skull Pit', colors: ['#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#a855f7', '#ef4444'], speed: 2.3, totalMarbles: 100, parScore: 8000, curveType: 'concentric' }
};

const MARBLE_RADIUS = 15;
const MARBLE_DIAMETER = MARBLE_RADIUS * 2;

export const ZumaMarbleGame: React.FC<ZumaMarbleGameProps> = ({ level, onComplete, onExit }) => {
  const isMobile = useIsMobile();
  const config = LEVEL_CONFIGS[level] || LEVEL_CONFIGS[1];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Game State Refs & State
  const [score, setScore] = useState(0);
  const [combos, setCombos] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [activePowerUp, setActivePowerUp] = useState<string | null>(null);

  // Refs for animation loop
  const marblesRef = useRef<Marble[]>([]);
  const shotRef = useRef<ShotProjectile | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const currentAmmoRef = useRef<{ color: MarbleColor; powerUp: PowerUpType }>({ color: '#ec4899', powerUp: 'normal' });
  const nextAmmoRef = useRef<{ color: MarbleColor; powerUp: PowerUpType }>({ color: '#06b6d4', powerUp: 'normal' });

  const turretAngleRef = useRef(0);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 300, y: 300 });

  const spawnedCountRef = useRef(0);
  const speedMultiplierRef = useRef(1); // 1 = normal, 0.3 = slow, -1 = reverse
  const powerUpTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathPointsRef = useRef<{ x: number; y: number }[]>([]);

  // Generate 2D track points based on curveType
  const generatePathPoints = (width: number, height: number, type: string) => {
    const points: { x: number; y: number }[] = [];
    const cx = width / 2;
    const cy = height / 2;

    const totalSteps = 600;

    if (type === 'spiral') {
      for (let i = 0; i <= totalSteps; i++) {
        const t = (i / totalSteps) * (Math.PI * 4.5);
        const r = Math.max(25, (width * 0.42) - (t * 22));
        const x = cx + r * Math.cos(t);
        const y = cy + r * Math.sin(t);
        points.push({ x, y });
      }
    } else if (type === 's_curve') {
      for (let i = 0; i <= totalSteps; i++) {
        const t = (i / totalSteps);
        const x = 50 + t * (width - 100);
        const y = cy + Math.sin(t * Math.PI * 3) * (height * 0.3);
        points.push({ x, y });
      }
    } else if (type === 'loop') {
      for (let i = 0; i <= totalSteps; i++) {
        const t = (i / totalSteps) * (Math.PI * 2);
        const r = width * 0.35;
        const x = cx + r * Math.cos(t);
        const y = cy + (r * 0.7) * Math.sin(t);
        points.push({ x, y });
      }
    } else if (type === 'figure8') {
      for (let i = 0; i <= totalSteps; i++) {
        const t = (i / totalSteps) * (Math.PI * 2);
        const scale = width * 0.38;
        const x = cx + (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
        const y = cy + (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
        points.push({ x, y });
      }
    } else { // concentric
      for (let i = 0; i <= totalSteps; i++) {
        const t = (i / totalSteps) * (Math.PI * 3.5);
        const r = Math.max(30, (width * 0.4) * (1 - (t / (Math.PI * 3.5)) * 0.7));
        const x = cx + r * Math.cos(t);
        const y = cy + r * Math.sin(t);
        points.push({ x, y });
      }
    }
    return points;
  };

  // Get point on path at distance
  const getPointAtDistance = (dist: number): { x: number; y: number } => {
    const pts = pathPointsRef.current;
    if (pts.length === 0) return { x: 300, y: 300 };

    let accumulated = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const segmentLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);

      if (accumulated + segmentLen >= dist) {
        const ratio = (dist - accumulated) / segmentLen;
        return {
          x: p1.x + (p2.x - p1.x) * ratio,
          y: p1.y + (p2.y - p1.y) * ratio
        };
      }
      accumulated += segmentLen;
    }
    return pts[pts.length - 1];
  };

  const getPathTotalLength = (): number => {
    const pts = pathPointsRef.current;
    let total = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      total += Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
    }
    return total;
  };

  // Random color from current level colors
  const getRandomColor = (): MarbleColor => {
    return config.colors[Math.floor(Math.random() * config.colors.length)];
  };

  // Random PowerUp with 10% chance
  const getRandomPowerUp = (): PowerUpType => {
    const r = Math.random();
    if (r < 0.04) return 'bomb';
    if (r < 0.08) return 'slow';
    if (r < 0.12) return 'reverse';
    if (r < 0.15) return 'laser';
    return 'normal';
  };

  // Spawn initial ammo
  const initAmmo = () => {
    currentAmmoRef.current = { color: getRandomColor(), powerUp: getRandomPowerUp() };
    nextAmmoRef.current = { color: getRandomColor(), powerUp: getRandomPowerUp() };
  };

  // Reset & Start Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const w = isMobile ? 340 : 540;
    const h = isMobile ? 340 : 540;
    canvas.width = w;
    canvas.height = h;

    pathPointsRef.current = generatePathPoints(w, h, config.curveType);
    marblesRef.current = [];
    shotRef.current = null;
    particlesRef.current = [];
    spawnedCountRef.current = 0;
    speedMultiplierRef.current = 1;
    setScore(0);
    setCombos(0);
    setGameState('playing');
    setActivePowerUp(null);

    initAmmo();

    let animationFrameId: number;

    // MAIN GAME LOOP (60 FPS)
    const gameLoop = () => {
      if (gameState !== 'playing') return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Clear Canvas & Draw Background Track
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Draw Path Track Line
      const pts = pathPointsRef.current;
      if (pts.length > 1) {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = MARBLE_DIAMETER + 6;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Draw Destination Pit (End of Track)
        const pit = pts[pts.length - 1];
        ctx.beginPath();
        ctx.arc(pit.x, pit.y, MARBLE_RADIUS + 6, 0, Math.PI * 2);
        ctx.fillStyle = '#ef4444';
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      const pathTotalLen = getPathTotalLength();

      // 2. Spawn New Marbles if total not reached
      if (spawnedCountRef.current < config.totalMarbles) {
        const lastMarble = marblesRef.current[marblesRef.current.length - 1];
        if (!lastMarble || lastMarble.distance >= MARBLE_DIAMETER) {
          marblesRef.current.push({
            id: `m_${Date.now()}_${Math.random()}`,
            color: getRandomColor(),
            distance: 0,
            powerUp: getRandomPowerUp()
          });
          spawnedCountRef.current++;
        }
      }

      // 3. Move Marbles along path
      const moveStep = config.speed * speedMultiplierRef.current;
      for (let i = 0; i < marblesRef.current.length; i++) {
        marblesRef.current[i].distance += moveStep;
      }

      // Check if any marble reached pit (Loss condition)
      if (marblesRef.current.some(m => m.distance >= pathTotalLen - MARBLE_RADIUS)) {
        setGameState('lost');
        sounds.playError();
        try { Haptics.notification({ type: NotificationType.Error }); } catch (e) {}
        return;
      }

      // Check Win Condition (All marbles cleared)
      if (spawnedCountRef.current >= config.totalMarbles && marblesRef.current.length === 0) {
        setGameState('won');
        sounds.playWin();
        try { Haptics.notification({ type: NotificationType.Success }); } catch (e) {}
        return;
      }

      // 4. Update Shot Projectile
      const shot = shotRef.current;
      if (shot) {
        shot.x += shot.vx;
        shot.y += shot.vy;

        // Check Wall Bounce or Out of Bounds
        if (shot.x < 0 || shot.x > w || shot.y < 0 || shot.y > h) {
          shotRef.current = null;
        } else {
          // Check collision with rolling marble chain
          for (let i = 0; i < marblesRef.current.length; i++) {
            const m = marblesRef.current[i];
            const mPos = getPointAtDistance(m.distance);
            const dist = Math.hypot(shot.x - mPos.x, shot.y - mPos.y);

            if (dist <= MARBLE_DIAMETER) {
              // Collision detected! Insert marble into chain
              const newMarble: Marble = {
                id: `m_shot_${Date.now()}`,
                color: shot.color,
                distance: m.distance,
                powerUp: shot.powerUp
              };

              // Insert at index i
              marblesRef.current.splice(i, 0, newMarble);

              // Shift subsequent marbles
              for (let j = i + 1; j < marblesRef.current.length; j++) {
                marblesRef.current[j].distance += MARBLE_DIAMETER;
              }

              shotRef.current = null;
              sounds.playPop();

              // Trigger PowerUp if activated
              if (shot.powerUp !== 'normal') {
                activatePowerUpEffect(shot.powerUp, i, mPos);
              }

              // Check for Match-3
              checkMatchThree(i);
              break;
            }
          }
        }
      }

      // 5. Draw Laser Sight Line if active
      if (currentAmmoRef.current.powerUp === 'laser' || activePowerUp === 'Laser') {
        const turretX = w / 2;
        const turretY = h / 2;
        ctx.beginPath();
        ctx.moveTo(turretX, turretY);
        ctx.lineTo(
          turretX + Math.cos(turretAngleRef.current) * 600,
          turretY + Math.sin(turretAngleRef.current) * 600
        );
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 6. Draw Marbles
      marblesRef.current.forEach(m => {
        const pos = getPointAtDistance(m.distance);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, MARBLE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = m.color;
        ctx.shadowColor = m.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw PowerUp Badge on Marble if any
        if (m.powerUp !== 'normal') {
          ctx.fillStyle = '#ffffff';
          ctx.font = '10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const icon = m.powerUp === 'bomb' ? '💣' : m.powerUp === 'slow' ? '⏱️' : m.powerUp === 'reverse' ? '⏪' : '🎯';
          ctx.fillText(icon, pos.x, pos.y);
        }
      });

      // 7. Draw Shot Projectile
      if (shotRef.current) {
        const s = shotRef.current;
        ctx.beginPath();
        ctx.arc(s.x, s.y, MARBLE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 8. Draw Central Turret Shooter
      const cx = w / 2;
      const cy = h / 2;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(turretAngleRef.current);

      // Turret Barrel
      ctx.fillStyle = '#334155';
      ctx.fillRect(0, -8, 28, 16);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, -8, 28, 16);

      // Turret Core Base
      ctx.beginPath();
      ctx.arc(0, 0, 22, 0, Math.PI * 2);
      ctx.fillStyle = 'linear-gradient(135deg, #1e293b, #0f172a)';
      ctx.fill();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Current Ammo Marble inside Turret
      ctx.beginPath();
      ctx.arc(0, 0, MARBLE_RADIUS - 2, 0, Math.PI * 2);
      ctx.fillStyle = currentAmmoRef.current.color;
      ctx.fill();

      ctx.restore();

      // Draw Next Ammo Preview Pill
      ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
      ctx.beginPath();
      ctx.roundRect(12, h - 45, 90, 32, 16);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.fillText('NEXT:', 22, h - 25);

      ctx.beginPath();
      ctx.arc(80, h - 29, 9, 0, Math.PI * 2);
      ctx.fillStyle = nextAmmoRef.current.color;
      ctx.fill();

      // 9. Update & Draw Explosive Particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const alpha = 1 - p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        if (p.life >= p.maxLife) {
          particlesRef.current.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (powerUpTimerRef.current) clearTimeout(powerUpTimerRef.current);
    };
  }, [level, gameState]);

  // Activate PowerUp Effects
  const activatePowerUpEffect = (powerUp: PowerUpType, index: number, pos: { x: number; y: number }) => {
    if (powerUp === 'bomb') {
      setActivePowerUp('Bomb Blast 💣');
      sounds.playExplosion();
      spawnParticles(pos.x, pos.y, '#ef4444', 30);

      // Remove marbles within 70px radius
      const nextMarbles = marblesRef.current.filter(m => {
        const mPos = getPointAtDistance(m.distance);
        return Math.hypot(mPos.x - pos.x, mPos.y - pos.y) > 70;
      });
      marblesRef.current = nextMarbles;
      setScore(prev => prev + 300);
    } else if (powerUp === 'slow') {
      setActivePowerUp('Slow-Mo ⏱️');
      sounds.playCoin();
      speedMultiplierRef.current = 0.35;
      if (powerUpTimerRef.current) clearTimeout(powerUpTimerRef.current);
      powerUpTimerRef.current = setTimeout(() => {
        speedMultiplierRef.current = 1;
        setActivePowerUp(null);
      }, 5000);
    } else if (powerUp === 'reverse') {
      setActivePowerUp('Track Reverse ⏪');
      sounds.playCoin();
      speedMultiplierRef.current = -1.2;
      if (powerUpTimerRef.current) clearTimeout(powerUpTimerRef.current);
      powerUpTimerRef.current = setTimeout(() => {
        speedMultiplierRef.current = 1;
        setActivePowerUp(null);
      }, 3000);
    }
  };

  // Check Match 3 or more adjacent colors
  const checkMatchThree = (startIndex: number) => {
    const list = marblesRef.current;
    if (list.length === 0 || startIndex < 0 || startIndex >= list.length) return;

    const targetColor = list[startIndex].color;
    let left = startIndex;
    let right = startIndex;

    while (left > 0 && list[left - 1].color === targetColor) left--;
    while (right < list.length - 1 && list[right + 1].color === targetColor) right++;

    const matchLength = right - left + 1;

    if (matchLength >= 3) {
      sounds.playSuccess();
      try { Haptics.impact({ style: ImpactStyle.Heavy }); } catch (e) {}

      // Spawn particles for popped marbles
      for (let i = left; i <= right; i++) {
        const mPos = getPointAtDistance(list[i].distance);
        spawnParticles(mPos.x, mPos.y, targetColor, 15);
      }

      // Remove matched marbles
      marblesRef.current.splice(left, matchLength);
      setScore(prev => prev + matchLength * 100);
      setCombos(prev => prev + 1);

      // Check Combo Pullback (if ends match after removal)
      if (left > 0 && left < marblesRef.current.length) {
        if (marblesRef.current[left - 1].color === marblesRef.current[left].color) {
          setTimeout(() => checkMatchThree(left), 300);
        }
      }
    }
  };

  // Spawn explosion particles
  const spawnParticles = (x: number, y: number, color: string, count: number) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        life: 0,
        maxLife: Math.floor(Math.random() * 20 + 15),
        size: Math.random() * 5 + 3
      });
    }
  };

  // Handle Mouse/Touch Aiming
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePosRef.current = { x, y };

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    turretAngleRef.current = Math.atan2(y - cy, x - cx);
  };

  // Shoot Marble
  const handleShoot = () => {
    if (shotRef.current || gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const angle = turretAngleRef.current;
    const speed = 14;

    shotRef.current = {
      x: cx + Math.cos(angle) * 30,
      y: cy + Math.sin(angle) * 30,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color: currentAmmoRef.current.color,
      powerUp: currentAmmoRef.current.powerUp
    };

    sounds.playClick();
    try { Haptics.impact({ style: ImpactStyle.Light }); } catch (e) {}

    // Cycle Ammo
    currentAmmoRef.current = nextAmmoRef.current;
    nextAmmoRef.current = { color: getRandomColor(), powerUp: getRandomPowerUp() };
  };

  const handleClaimVictory = () => {
    const xp = Math.max(150, 350 - Math.floor(score / 10));
    onComplete(xp);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '750px',
      margin: '0 auto',
      background: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(16px)',
      borderRadius: '28px',
      border: '1px solid rgba(6, 182, 212, 0.3)',
      padding: isMobile ? '1rem' : '1.5rem',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      position: 'relative'
    }}>
      {/* Top Navigation */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <button
          onClick={onExit}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '14px',
            padding: '0.5rem 0.9rem',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}
        >
          <ChevronLeft size={20} /> Back
        </button>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            margin: 0,
            fontSize: isMobile ? '1.3rem' : '1.8rem',
            fontFamily: '"Baloo 2", cursive',
            color: '#06b6d4',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={22} color="#06b6d4" />
            Level {level}: {config.title}
          </h2>
          <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8' }}>
            Score: <strong style={{ color: '#38bdf8' }}>{score}</strong> | Combos: <strong style={{ color: '#ec4899' }}>{combos}</strong>
          </p>
        </div>

        <button
          onClick={() => {
            setGameState('playing');
            marblesRef.current = [];
            spawnedCountRef.current = 0;
            setScore(0);
            setCombos(0);
          }}
          title="Restart Level"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '14px',
            padding: '0.5rem',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* Active PowerUp Badge */}
      {activePowerUp && (
        <div style={{
          background: 'rgba(6, 182, 212, 0.2)',
          border: '1px solid #06b6d4',
          borderRadius: '20px',
          padding: '0.3rem 1rem',
          fontSize: '0.85rem',
          fontWeight: 800,
          color: '#22d3ee',
          marginBottom: '0.75rem',
          animation: 'pulse 1s infinite'
        }}>
          ⚡ Active: {activePowerUp}
        </div>
      )}

      {/* Main Interactive 2D Canvas */}
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onClick={handleShoot}
        style={{
          borderRadius: '20px',
          border: '2px solid rgba(6, 182, 212, 0.3)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          cursor: 'crosshair',
          touchAction: 'none'
        }}
      />

      {/* Victory / Loss Overlay */}
      {gameState !== 'playing' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          zIndex: 50,
          animation: 'fadeIn 0.4s ease-out'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: gameState === 'won' ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            boxShadow: gameState === 'won' ? '0 0 30px rgba(6,182,212,0.5)' : '0 0 30px rgba(239,68,68,0.5)'
          }}>
            <Trophy size={42} color="white" />
          </div>

          <h2 style={{
            fontFamily: '"Baloo 2", cursive',
            fontSize: '2.2rem',
            color: 'white',
            margin: '0 0 0.5rem 0'
          }}>
            {gameState === 'won' ? 'Level Cleared! 🔮' : 'Skull Pit Reached! 💥'}
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '1rem', margin: '0 0 1.5rem 0', textAlign: 'center' }}>
            {gameState === 'won' ? `Final Score: ${score} points!` : 'Don\'t give up! Tap retry to clear the track.'}
          </p>

          <button
            onClick={gameState === 'won' ? handleClaimVictory : () => setGameState('playing')}
            style={{
              background: gameState === 'won' ? 'linear-gradient(135deg, #06b6d4, #3b82f6)' : 'linear-gradient(135deg, #ef4444, #f97316)',
              border: 'none',
              borderRadius: '16px',
              padding: '0.8rem 2.5rem',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(6,182,212,0.4)'
            }}
          >
            {gameState === 'won' ? 'Next Level 🚀' : 'Try Again 🔄'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ZumaMarbleGame;
