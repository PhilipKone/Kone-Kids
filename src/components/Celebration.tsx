import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { useGamification, Badge } from '../context/GamificationContext';

const Celebration: React.FC = () => {
  const { badges } = useGamification();
  const [activeBadge, setActiveBadge] = useState<Badge | null>(null);
  const [lastUnlockedIds, setLastUnlockedIds] = useState<Set<string>>(() => {
    // On mount, assume already unlocked badges don't need a celebration
    return new Set(badges.filter(b => b.unlocked).map(b => b.id));
  });

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

    // 2. Play Sound (Magical Chime Arpeggio)
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      const playNote = (freq: number, startTime: number, duration: number) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      const now = audioCtx.currentTime;
      // C Major 7 Arpeggio (C5, E5, G5, B5, C6)
      playNote(523.25, now, 0.8);        // C5
      playNote(659.25, now + 0.1, 0.8);  // E5
      playNote(783.99, now + 0.2, 0.8);  // G5
      playNote(987.77, now + 0.3, 0.8);  // B5
      playNote(1046.50, now + 0.4, 1.2); // C6
    } catch (e) {
      console.error('Audio failed', e);
    }

    // 3. Auto-close modal
    setTimeout(() => setActiveBadge(null), 5000);
  };

  if (!activeBadge) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(8px)',
      animation: 'fadeIn 0.5s ease-out'
    }}>
      <div className="glass-card" style={{
        padding: '3rem',
        textAlign: 'center',
        background: 'white',
        borderRadius: '40px',
        boxShadow: '0 40px 100px -20px rgba(0,0,0,0.2)',
        maxWidth: '400px',
        width: '90%',
        animation: 'modalPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both'
      }}>
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          {activeBadge.icon.length > 2 ? (
            <img 
              src={activeBadge.icon} 
              alt={activeBadge.name} 
              style={{ 
                width: '120px', 
                height: '120px', 
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
              }} 
            />
          ) : (
            <div style={{ fontSize: '6rem', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
              {activeBadge.icon}
            </div>
          )}
        </div>
        <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem', color: 'var(--kids-blue)' }}>Badge Unlocked!</h2>
        <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem', color: 'var(--kids-dark)' }}>{activeBadge.name}</h3>
        <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.5' }}>{activeBadge.description}</p>
        
        <button 
          className="kids-button" 
          style={{ marginTop: '2.5rem', width: '100%' }}
          onClick={() => setActiveBadge(null)}
        >
          Awesome! 🚀
        </button>
      </div>
    </div>
  );
};

export default Celebration;
