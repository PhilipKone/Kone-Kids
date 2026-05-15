import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGamification } from '../context/GamificationContext';
import { ShoppingBag, Coins } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CODING_MISSIONS, Pathway } from '../data/missions';
import Mascot from './Mascot';
import MascotShop from './MascotShop';
import SeriesLibrary from './SeriesLibrary';
import CoinStoreModal from './CoinStoreModal';

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
  const [showLibrary, setShowLibrary] = useState(false);
  const [showCoinStore, setShowCoinStore] = useState(false);
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
      <header style={{ 
        position: 'sticky', 
        top: '0', 
        zIndex: 100, 
        padding: isMobile ? '0.5rem' : '1rem 5%',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          background: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: isMobile ? '16px' : '24px',
          padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.5rem' : '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.1)',
          maxWidth: '1200px',
          width: '100%',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem' }}>
            <div style={{
              background: world.color,
              width: isMobile ? '32px' : '40px',
              height: isMobile ? '32px' : '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: 'white'
            }}>
              {level}
            </div>
            {!isMobile && <span style={{ fontWeight: 800, marginLeft: '0.25rem' }}>{hub.toUpperCase()}</span>}
          </div>

          <div style={{ display: 'flex', gap: isMobile ? '0.4rem' : '0.75rem', alignItems: 'center' }}>
            <div style={{
              background: 'rgba(251,191,36,0.1)',
              padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.8rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#fbbf24',
              fontWeight: 700,
              fontSize: isMobile ? '0.75rem' : '0.9rem'
            }}>
              <Coins size={isMobile ? 14 : 16} />
              {coins}
            </div>

            <button
              onClick={() => setShowCoinStore(true)}
              style={{
                background: '#fbbf24',
                border: 'none',
                padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.8rem',
                borderRadius: '12px',
                color: '#1e293b',
                fontWeight: 900,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: isMobile ? '0.7rem' : '0.85rem'
              }}
            >
              + Get
            </button>
            
            <button
              onClick={() => setShowShop(true)}
              className="kids-button"
              style={{
                padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--kids-orange)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontWeight: 700,
                fontSize: isMobile ? '0.75rem' : '0.85rem'
              }}
            >
              <ShoppingBag size={isMobile ? 14 : 16} />
              {!isMobile && 'SHOP'}
            </button>

            <button 
              onClick={toggleTheme}
              style={{ background: 'transparent', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button 
              onClick={() => navigate('/')}
              style={{ 
                background: '#ef4444', 
                border: 'none', 
                padding: '0.4rem 0.8rem',
                borderRadius: '12px',
                color: 'white',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Exit
            </button>
          </div>
        </div>
      </header>

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

      {showShop && <MascotShop onClose={() => setShowShop(false)} />}
      {showLibrary && <SeriesLibrary onClose={() => setShowLibrary(false)} />}
      <CoinStoreModal isOpen={showCoinStore} onClose={() => setShowCoinStore(false)} />


      {/* Pathway Selector */}
      <div className="pathway-filters" style={{ 
        padding: isMobile ? '0.4rem 0' : '1rem 0', 
        marginBottom: isMobile ? '1.5rem' : '2.5rem',
        gap: isMobile ? '0.5rem' : '0.75rem' 
      }}>
        {pathways.map(pathway => (
          <div 
            key={pathway}
            className={`pathway-tab ${selectedPathway === pathway ? 'pathway-tab-active' : ''}`}
            style={{
              '--tab-color': world.color,
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.4rem',
              gap: '0.75rem'
            } as any}
            onClick={() => setSelectedPathway(pathway)}
          >
            <span className="pathway-tab-icon" style={{ fontSize: isMobile ? '0.9rem' : '1.1rem' }}>
              {PATHWAY_WORLDS[pathway][theme].icon.length > 2 ? (
                <img src={PATHWAY_WORLDS[pathway][theme].icon} alt="" style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px' }} />
              ) : (
                PATHWAY_WORLDS[pathway][theme].icon
              )}
            </span>
            {pathway}
          </div>
        ))}
      </div>

      {/* Pathway Progress Panel */}
      {(() => {
        const totalInPathway = filteredMissions.length;
        const doneInPathway = filteredMissions.filter(m => completedMissions.includes(m.id)).length;
        const xpRemaining = filteredMissions
          .filter(m => !completedMissions.includes(m.id))
          .reduce((sum, m) => sum + m.xpReward, 0);
        const pct = totalInPathway > 0 ? (doneInPathway / totalInPathway) * 100 : 0;
        return (
          <div style={{
            background: 'var(--kids-surface)',
            border: '1px solid var(--kids-border)',
            borderRadius: '16px',
            padding: '1rem 1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: '1rem'
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--kids-text)' }}>
                  {world.icon} {selectedPathway}
                </span>
                <span style={{ color: world.color, fontWeight: 700 }}>
                  {doneInPathway} / {totalInPathway} missions
                </span>
              </div>
              <div style={{ height: '8px', background: 'var(--kids-border)', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${world.color}, ${world.color}cc)`,
                  boxShadow: `0 0 8px ${world.color}88`,
                  borderRadius: '8px',
                  transition: 'width 0.6s ease-out'
                }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexShrink: 0 }}>
              {doneInPathway === totalInPathway && totalInPathway > 0 ? (
                <span style={{ color: '#22c55e', fontWeight: 800, fontSize: '0.9rem' }}>✅ Pathway Complete!</span>
              ) : (
                <span style={{ color: 'var(--kids-text-muted)', fontSize: '0.85rem' }}>
                  <strong style={{ color: world.color }}>{xpRemaining} XP</strong> remaining
                </span>
              )}
            </div>
          </div>
        );
      })()}

      {/* Series Library Entry Point - Only for Game Dev */}
      {selectedPathway === 'Game Dev' && (
        <div style={{
          background: 'linear-gradient(135deg, #f472b6, #ec4899)',
          borderRadius: '20px',
          padding: '1.5rem 2rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          boxShadow: '0 10px 30px rgba(236, 72, 153, 0.2)',
          border: '2px solid rgba(255,255,255,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', fontSize: '1.5rem' }}>Want to chill? 🍦</h3>
            <p style={{ margin: '0.2rem 0 0', opacity: 0.9, fontSize: '0.95rem' }}>
              Explore the Game Series Library and play over 40+ mini-games!
            </p>
          </div>
          <button 
            onClick={() => setShowLibrary(true)}
            style={{
              background: 'white',
              color: '#ec4899',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '14px',
              fontWeight: 900,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              position: 'relative',
              zIndex: 1
            }}
          >
            Open Library 📚
          </button>
          
          {/* Decorative icons */}
          <div style={{ position: 'absolute', right: '150px', top: '-10px', fontSize: '3rem', opacity: 0.2, transform: 'rotate(15deg)' }}>🎮</div>
          <div style={{ position: 'absolute', left: '40%', bottom: '-10px', fontSize: '2.5rem', opacity: 0.15, transform: 'rotate(-10deg)' }}>🧩</div>
        </div>
      )}

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
                className={`mission-item-container ${isUnlocked ? 'animate-float' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row-reverse' : 'row'),
                  alignItems: 'center',
                  gap: isMobile ? '1.5rem' : '2.5rem',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  width: isMobile ? '100%' : 'auto',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  className={`mission-node ${isUnlocked ? 'mission-node-unlocked' : 'mission-node-locked'} ${isCompleted ? 'mission-node-completed' : ''}`}
                  style={{
                    '--node-color': world.color,
                    '--node-shadow': `${world.color}dd`,
                    flexShrink: 0
                  } as any}
                >
                  {!isUnlocked ? (
                    <span style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>🔒</span>
                  ) : (
                    <>
                      <span style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 800 }}>{index + 1}</span>
                      {isCompleted && <span style={{ fontSize: '0.75rem', position: 'absolute', bottom: '-10px', background: '#22c55e', color: 'white', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>DONE</span>}
                    </>
                  )}
                </div>
                
                {/* Mission Label */}
                <div style={{
                  textAlign: isMobile ? 'center' : (index % 2 === 0 ? 'right' : 'left'),
                  width: isMobile ? '180px' : '240px',
                  pointerEvents: 'none'
                }}>
                  <h4 style={{ 
                    margin: 0, 
                    color: isUnlocked ? 'var(--kids-text)' : 'var(--kids-text-muted)', 
                    fontSize: isMobile ? '1.1rem' : '1.3rem', 
                    fontFamily: 'Baloo 2, cursive',
                    lineHeight: 1.2
                  }}>{mission.name}</h4>
                  <p style={{ margin: '0.2rem 0 0 0', color: 'var(--kids-text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>{mission.xpReward} XP</p>
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

