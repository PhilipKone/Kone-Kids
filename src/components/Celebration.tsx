import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { useGamification, Badge } from '../context/GamificationContext';
import { sounds } from '../utils/sounds';

const Celebration: React.FC = () => {
  const { badges, recentXpEvent } = useGamification();
  const [activeBadge, setActiveBadge] = useState<Badge | null>(null);
  const [floatingXp, setFloatingXp] = useState<{ amount: number; id: number } | null>(null);
  const [lastUnlockedIds, setLastUnlockedIds] = useState<Set<string>>(() => {
    return new Set(badges.filter(b => b.unlocked).map(b => b.id));
  });

  // Emotional Design: Floating XP Gain Bubble Listener
  useEffect(() => {
    if (recentXpEvent) {
      setFloatingXp(recentXpEvent);
      sounds.playCoin();
      const timer = setTimeout(() => setFloatingXp(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [recentXpEvent]);

  useEffect(() => {
    // Detect newly unlocked badges
    const newlyUnlocked = badges.find(b => b.unlocked && !lastUnlockedIds.has(b.id));

    if (newlyUnlocked) {
      triggerCelebration(newlyUnlocked);
      setLastUnlockedIds(prev => new Set([...prev, newlyUnlocked.id]));
    }
  }, [badges, lastUnlockedIds]);

  const triggerCelebration = (badge: Badge) => {
    setActiveBadge(badge);

    // 1. Confetti Burst
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // 2. Play Sound (Fanfare)
    sounds.playWin();

    // 3. Auto-close modal
    setTimeout(() => setActiveBadge(null), 5000);
  };

  return (
    <>
      {/* Floating XP Gain Bubble */}
      {floatingXp && (
        <div
          key={floatingXp.id}
          style={{
            position: 'fixed',
            top: '85px',
            right: '24px',
            zIndex: 9998,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            color: '#1e293b',
            padding: '10px 18px',
            borderRadius: '9999px',
            boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.5), 0 0 20px rgba(251, 191, 36, 0.4)',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            animation: 'modalPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both',
            pointerEvents: 'none'
          }}
        >
          <span>⚡</span>
          <span>+{floatingXp.amount} XP</span>
        </div>
      )}

      {/* Badge Unlock Modal */}
      {activeBadge && (
        <div style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          animation: 'fadeIn 0.4s ease-out'
        }}>
          <div className="glass-card" style={{
            padding: '3rem',
            textAlign: 'center',
            background: 'linear-gradient(145deg, #1e293b, #0f172a)',
            borderRadius: '32px',
            border: '2px solid rgba(251, 191, 36, 0.4)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.5), 0 0 40px rgba(251, 191, 36, 0.2)',
            maxWidth: '420px',
            width: '90%',
            color: '#f8fafc',
            animation: 'modalPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both'
          }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              {activeBadge.icon.length > 2 ? (
                <img 
                  src={activeBadge.icon} 
                  alt={activeBadge.name} 
                  width="120"
                  height="120"
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 20px rgba(251, 191, 36, 0.4))'
                  }} 
                />
              ) : (
                <div style={{ fontSize: '6rem', filter: 'drop-shadow(0 10px 20px rgba(251, 191, 36, 0.4))' }}>
                  {activeBadge.icon}
                </div>
              )}
            </div>
            <span style={{
              display: 'inline-block',
              background: 'rgba(251, 191, 36, 0.15)',
              color: '#fbbf24',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Badge Unlocked
            </span>
            <h3 style={{ fontSize: '1.8rem', margin: '0 0 0.75rem', color: '#ffffff', fontWeight: 800 }}>
              {activeBadge.name}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 1.5rem' }}>
              {activeBadge.description}
            </p>
            
            <button 
              className="kids-button" 
              style={{
                marginTop: '1rem',
                width: '100%',
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                color: '#1e293b',
                fontWeight: 'bold',
                padding: '14px 24px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                boxShadow: '0 10px 20px -5px rgba(245, 158, 11, 0.5)'
              }}
              onClick={() => setActiveBadge(null)}
            >
              Collect Reward! 🚀
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Celebration;
