import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGamification } from '../context/GamificationContext';
import { ShoppingBag, Coins } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CODING_MISSIONS, Pathway } from '../data/missions';
import Mascot from './Mascot';
import MascotShop from './MascotShop';

type HubType = 'coding' | 'robotics' | 'ai';

interface WorldStyle {
  color: string;
  glow: string;
  pattern: string;
  icon: string;
  pathStyle: 'curve' | 'circuit' | 'dots' | 'wave' | 'pixel';
}

const PATHWAY_WORLDS: Record<Pathway, { dark: WorldStyle; light: WorldStyle }> = {
  'Fundamentals': {
    dark: { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.15)', pattern: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 0)', icon: '🧠', pathStyle: 'curve' },
    light: { color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.1)', pattern: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 1px, transparent 0)', icon: '🧠', pathStyle: 'curve' }
  },
  'Mobile App Dev': {
    dark: { color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.15)', pattern: 'linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)', icon: '📱', pathStyle: 'wave' },
    light: { color: '#0891b2', glow: 'rgba(8, 145, 178, 0.1)', pattern: 'linear-gradient(rgba(8, 145, 178, 0.03) 1px, transparent 1px)', icon: '📱', pathStyle: 'wave' }
  },
  'Desktop App Dev': {
    dark: { color: '#94a3b8', glow: 'rgba(148, 163, 184, 0.15)', pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)', icon: '💻', pathStyle: 'dots' },
    light: { color: '#475569', glow: 'rgba(71, 85, 105, 0.05)', pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(71, 85, 105, 0.02) 10px, rgba(71, 85, 105, 0.02) 20px)', icon: '💻', pathStyle: 'dots' }
  },
  'Web App Dev': {
    dark: { color: '#6366f1', glow: 'rgba(99, 102, 241, 0.15)', pattern: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.1) 1px, transparent 0)', icon: '🌐', pathStyle: 'dots' },
    light: { color: '#4338ca', glow: 'rgba(67, 56, 202, 0.08)', pattern: 'radial-gradient(circle at 2px 2px, rgba(67, 56, 202, 0.03) 1px, transparent 0)', icon: '🌐', pathStyle: 'dots' }
  },
  'Game Dev': {
    dark: { color: '#f472b6', glow: 'rgba(244, 114, 182, 0.15)', pattern: 'conic-gradient(from 0deg, rgba(244, 114, 182, 0.05) 0deg 90deg, transparent 90deg 360deg)', icon: '🎮', pathStyle: 'pixel' },
    light: { color: '#db2777', glow: 'rgba(219, 39, 119, 0.08)', pattern: 'conic-gradient(from 0deg, rgba(219, 39, 119, 0.03) 0deg 90deg, transparent 90deg 360deg)', icon: '🎮', pathStyle: 'pixel' }
  },
  'Data Science (AI 4 Kids)': {
    dark: { color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.15)', pattern: 'linear-gradient(90deg, rgba(251, 191, 36, 0.05) 1px, transparent 1px)', icon: '📊', pathStyle: 'dots' },
    light: { color: '#d97706', glow: 'rgba(217, 119, 6, 0.08)', pattern: 'linear-gradient(90deg, rgba(217, 119, 6, 0.03) 1px, transparent 1px)', icon: '📊', pathStyle: 'dots' }
  },
  'ML (AI 4 Kids)': {
    dark: { color: '#10b981', glow: 'rgba(16, 185, 129, 0.15)', pattern: 'radial-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px)', icon: '🤖', pathStyle: 'curve' },
    light: { color: '#059669', glow: 'rgba(5, 150, 105, 0.08)', pattern: 'radial-gradient(rgba(5, 150, 105, 0.04) 1px, transparent 1px)', icon: '🤖', pathStyle: 'curve' }
  },
  'AI (AI 4 Kids)': {
    dark: { color: '#a855f7', glow: 'rgba(168, 85, 247, 0.15)', pattern: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%)', icon: '✨', pathStyle: 'curve' },
    light: { color: '#7e22ce', glow: 'rgba(126, 34, 206, 0.08)', pattern: 'radial-gradient(circle at center, rgba(126, 34, 206, 0.05) 0%, transparent 70%)', icon: '✨', pathStyle: 'curve' }
  },
  'Robotics (AI 4 Kids)': {
    dark: { color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.15)', pattern: 'linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px)', icon: '🦾', pathStyle: 'circuit' },
    light: { color: '#0284c7', glow: 'rgba(2, 132, 199, 0.08)', pattern: 'linear-gradient(rgba(2, 132, 199, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.03) 1px, transparent 1px)', icon: '🦾', pathStyle: 'circuit' }
  }
};


const HUB_PATHWAYS: Record<HubType, Pathway[]> = {
  coding: ['Fundamentals', 'Mobile App Dev', 'Desktop App Dev', 'Web App Dev', 'Game Dev'],
  robotics: ['Robotics (AI 4 Kids)'],
  ai: ['Data Science (AI 4 Kids)', 'ML (AI 4 Kids)', 'AI (AI 4 Kids)']
};

const MissionMap: React.FC<{ hub?: HubType }> = ({ hub = 'coding' }) => {
  const navigate = useNavigate();
  const [showShop, setShowShop] = useState(false);
  const { xp, level, completedMissions, coins } = useGamification();
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const pathways = HUB_PATHWAYS[hub];
  const [selectedPathway, setSelectedPathway] = useState<Pathway>(pathways[0]);

  const world = PATHWAY_WORLDS[selectedPathway][theme];

  const filteredMissions = useMemo(() => {
    return CODING_MISSIONS.filter(m => m.pathway === selectedPathway);
  }, [selectedPathway]);

  return (
    <div className="mission-map-container" style={{
      minHeight: '100vh',
      background: `var(--kids-bg)`,
      backgroundImage: world.pattern,
      backgroundSize: '40px 40px',
      padding: '2rem 5%',
      color: 'var(--kids-text)',
      fontFamily: '"Nunito", sans-serif',
      position: 'relative',
      overflowX: 'hidden',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Background Glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: world.glow,
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'all 0.8s ease'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: world.glow,
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'all 0.8s ease',
        opacity: 0.6
      }} />

      {/* Shop Button */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'flex-end'
      }}>
        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem 1rem',
          borderRadius: '16px',
          border: '2px solid #fbbf24',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          color: 'white',
          fontWeight: 800,
          boxShadow: '0 10px 25px rgba(251, 191, 36, 0.2)'
        }}>
          <Coins className="text-yellow-400" size={20} />
          {coins}
        </div>

        <button 
          onClick={() => setShowShop(true)}
          className="kids-button pulse-neon"
          style={{
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--kids-orange)',
            boxShadow: '0 8px 0 #9a3412',
            fontSize: '1.1rem'
          }}
        >
          <ShoppingBag size={24} />
          MASCOT SHOP
        </button>
      </div>

      {showShop && <MascotShop onClose={() => setShowShop(false)} />}

      {/* Game Header */}
      <header style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'stretch' : 'center',
        background: 'var(--kids-surface)',
        padding: isMobile ? '1rem' : '1.2rem 2rem',
        borderRadius: '24px',
        border: '1px solid var(--kids-border)',
        backdropFilter: 'blur(10px)',
        marginBottom: '2rem',
        position: 'sticky',
        top: '1rem',
        zIndex: 100,
        gap: isMobile ? '1rem' : '0',
        boxShadow: theme === 'light' ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            background: world.color,
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            fontWeight: 800,
            boxShadow: `0 4px 0 ${world.color}88`,
            color: 'white'
          }}>
            {level}
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', letterSpacing: '1px' }}>{hub.toUpperCase()} HUB</h3>
            <p style={{ margin: 0, color: 'var(--kids-text-muted)', fontSize: '0.85rem' }}>LVL {level} Engineer</p>
          </div>
        </div>

        <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '350px', margin: isMobile ? '0' : '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
            <span style={{ fontWeight: 700 }}>XP: {xp}</span>
            <span style={{ color: world.color, fontWeight: 700 }}>Next: {level * 1000}</span>
          </div>
          <div style={{ height: '10px', background: 'var(--kids-border)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(100, (xp % 1000) / 10)}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${world.color}, ${theme === 'dark' ? 'white' : world.color})`,
              boxShadow: `0 0 10px ${world.color}88`,
              transition: 'width 0.5s ease-out'
            }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            onClick={toggleTheme}
            className="kids-button"
            style={{ 
              background: 'var(--kids-surface)', 
              color: 'var(--kids-text)',
              border: '1px solid var(--kids-border)',
              boxShadow: 'none',
              padding: '0.6rem',
              width: '44px',
              height: '44px',
              borderRadius: '12px'
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button 
            onClick={() => navigate('/')}
            className="kids-button" 
            style={{ 
              background: 'transparent', 
              boxShadow: 'none', 
              border: '1px solid var(--kids-border)', 
              padding: '0.6rem 1.2rem',
              color: 'var(--kids-text)'
            }}
          >
            Exit
          </button>
        </div>
      </header>

      {/* Pathway Selector */}
      <div className="pathway-filters">
        {pathways.map(pathway => (
          <div 
            key={pathway}
            className={`pathway-tab ${selectedPathway === pathway ? 'pathway-tab-active' : ''}`}
            style={selectedPathway === pathway ? {
              background: world.color,
              borderColor: world.color,
              boxShadow: `0 0 20px ${world.color}66`
            } : {
              background: 'var(--kids-surface)',
              color: 'var(--kids-text-muted)',
              borderColor: 'var(--kids-border)'
            }}
            onClick={() => setSelectedPathway(pathway)}
          >
            <span className="pathway-tab-icon">
              {PATHWAY_WORLDS[pathway][theme].icon.length > 2 ? (
                <img src={PATHWAY_WORLDS[pathway][theme].icon} alt="" style={{ width: '24px', height: '24px' }} />
              ) : (
                PATHWAY_WORLDS[pathway][theme].icon
              )}
            </span>
            {pathway}
          </div>
        ))}
      </div>

      {/* The Winding Path */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        position: 'relative',
        padding: isMobile ? '2rem 1rem 10rem 1rem' : '2rem 0 10rem 0'
      }}>
        {/* Connection Line */}
        <svg 
          viewBox="0 0 800 1000" 
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.2 }}
        >
          {world.pathStyle === 'curve' && (
            <path 
              d="M 400 100 Q 600 300 400 500 Q 200 700 400 900" 
              fill="none" 
              stroke={world.color} 
              strokeWidth="12" 
              strokeLinecap="round"
              className="path-pulsing"
            />
          )}
          {world.pathStyle === 'circuit' && (
            <path 
              d="M 400 100 L 400 200 L 600 200 L 600 400 L 400 400 L 400 600 L 200 600 L 200 800 L 400 800 L 400 900" 
              fill="none" 
              stroke={world.color} 
              strokeWidth="8" 
              strokeLinejoin="round"
              className="path-pulsing"
            />
          )}
          {world.pathStyle === 'pixel' && (
            <path 
              d="M 400 100 L 400 150 L 450 150 L 450 200 L 500 200 L 500 250 L 550 250 L 550 300 L 500 300 L 500 350 L 450 350 L 450 400 L 400 400 L 400 450 L 350 450 L 350 500 L 300 500 L 300 550 L 250 550 L 250 600 L 300 600 L 300 650 L 350 650 L 350 700 L 400 700 L 400 900" 
              fill="none" 
              stroke={world.color} 
              strokeWidth="10" 
              className="path-solid-pulse"
              style={{ '--kids-blue': world.color } as React.CSSProperties}
            />
          )}
          {world.pathStyle === 'dots' && (
            <path 
              d="M 400 100 Q 600 300 400 500 Q 200 700 400 900" 
              fill="none" 
              stroke={world.color} 
              strokeWidth="6" 
              strokeDasharray="1 20" 
              strokeLinecap="round"
              className="path-solid-pulse"
              style={{ '--kids-blue': world.color } as React.CSSProperties}
            />
          )}
          {world.pathStyle === 'wave' && (
            <path 
              d="M 400 100 T 500 200 T 400 300 T 300 400 T 400 500 T 500 600 T 400 700 T 300 800 T 400 900" 
              fill="none" 
              stroke={world.color} 
              strokeWidth="14" 
              strokeLinecap="round"
              className="path-pulsing"
              opacity={0.4}
            />
          )}
        </svg>

        {filteredMissions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--kids-text-muted)' }}>
            <h3>New missions loading...</h3>
          </div>
        ) : filteredMissions.map((mission, index) => {
          const isUnlocked = index === 0 || completedMissions.includes(filteredMissions[index - 1].id);
          const isCompleted = completedMissions.includes(mission.id);

          return (
            <div 
              key={mission.id}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: isMobile ? 'center' : (index % 2 === 0 ? 'flex-end' : 'flex-start'),
                marginBottom: isMobile ? '6rem' : '8rem',
                zIndex: 1
              }}
            >
              <div 
                onClick={() => isUnlocked && navigate(`/${hub}/mission/${mission.id}`)}
                className={isUnlocked ? 'animate-float mission-node-unlocked' : ''}
                style={{
                  width: isMobile ? '90px' : '110px',
                  height: isMobile ? '90px' : '110px',
                  borderRadius: '50%',
                  background: isCompleted ? 'var(--kids-blue)' : (isUnlocked ? world.color : 'var(--kids-surface)'),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  border: `6px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  boxShadow: isUnlocked ? `0 15px 35px ${world.color}44` : 'none',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: isUnlocked ? 'scale(1)' : 'scale(0.9)',
                  color: isUnlocked ? 'white' : 'var(--kids-text-muted)',
                  position: 'relative',
                  '--kids-blue': world.color // Custom property for the pulsing glow
                } as React.CSSProperties}
              >
                {!isUnlocked ? (
                  <span style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>🔒</span>
                ) : (
                  <>
                    <span style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 800 }}>{index + 1}</span>
                    {isCompleted && <span style={{ fontSize: '0.75rem', position: 'absolute', bottom: '-10px', background: '#22c55e', color: 'white', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>DONE</span>}
                  </>
                )}
                
                {/* Mission Label */}
                <div style={{
                  position: 'absolute',
                  [isMobile ? 'top' : (index % 2 === 0 ? 'right' : 'left')]: isMobile ? '105px' : '135px',
                  [!isMobile ? 'top' : '']: isMobile ? '' : '50%',
                  transform: isMobile ? 'translateX(-50%)' : 'translateY(-50%)',
                  left: isMobile ? '50%' : '',
                  textAlign: isMobile ? 'center' : (index % 2 === 0 ? 'right' : 'left'),
                  width: isMobile ? '180px' : '220px'
                }}>
                  <h4 style={{ margin: 0, color: isUnlocked ? 'var(--kids-text)' : 'var(--kids-text-muted)', fontSize: isMobile ? '1.1rem' : '1.25rem', fontFamily: 'Baloo 2, cursive' }}>{mission.name}</h4>
                  <p style={{ margin: '0.1rem 0 0 0', color: 'var(--kids-text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>{mission.xpReward} XP</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Mascot encouraging at the end */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <div style={{ width: '130px', margin: '0 auto', opacity: 0.9 }}>
            <Mascot />
          </div>
          <h2 className="lab-title" style={{ marginTop: '1.5rem', color: world.color }}>Level Up Your Skills!</h2>
        </div>
      </div>
    </div>
  );
};

export default MissionMap;

