import React from 'react';
import { GameSeries } from '../data/missions';
import { ChevronLeft, Play, Lock, Trophy } from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import WordSearchGame from './WordSearchGame';

interface SeriesPlayViewProps {
  series: GameSeries;
  onBack: () => void;
}

const SeriesPlayView: React.FC<SeriesPlayViewProps> = ({ series, onBack }) => {
  const { completedMissions, completeMission } = useGamification();
  const [playingLevel, setPlayingLevel] = React.useState<number | null>(null);
  const isMobile = window.innerWidth < 768;

  
  // Generate 20 levels for the series
  const levels = Array.from({ length: series.gameCount }, (_, i) => ({
    id: `${series.id}_level_${i + 1}`,
    name: `Level ${i + 1}`,
    isCompleted: completedMissions.includes(`${series.id}_level_${i + 1}`),
    // A level is unlocked if it's the first one or the previous one is completed
    isUnlocked: i === 0 || completedMissions.includes(`${series.id}_level_${i}`)
  }));

  const handleComplete = (xp: number) => {
    if (playingLevel) {
      completeMission(`${series.id}_level_${playingLevel}`, xp);
      setPlayingLevel(null);
    }
  };

  if (playingLevel !== null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: isMobile ? '1rem' : '2rem' }}>
        <WordSearchGame 
          level={playingLevel} 
          onComplete={handleComplete}
          onExit={() => setPlayingLevel(null)}
        />
      </div>
    );
  }

  return (
    <div style={{
      color: 'white',
      maxWidth: '1000px',
      margin: '0 auto',
      width: '100%',
      animation: 'slideUp 0.4s ease-out'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: isMobile ? '0.75rem' : '1.5rem', 
        marginBottom: isMobile ? '1rem' : '2rem' 
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '12px',
            padding: isMobile ? '0.4rem' : '0.6rem',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          <ChevronLeft size={isMobile ? 20 : 24} />
        </button>
        <div>
          <h2 style={{ 
            fontSize: isMobile ? '1.5rem' : '2.5rem', 
            fontFamily: '"Baloo 2", cursive', 
            margin: 0, 
            color: series.accentColor,
            lineHeight: 1.1
          }}>
            {series.title}
          </h2>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '0.5rem' : '1rem', 
            color: '#94a3b8', 
            fontSize: isMobile ? '0.75rem' : '0.9rem', 
            fontWeight: 700 
          }}>
            <span>{series.gameCount} LEVELS</span>
            <span>•</span>
            <span style={{ color: series.accentColor }}>{series.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Level Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(auto-fill, minmax(130px, 1fr))' : 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: isMobile ? '0.75rem' : '1.5rem',
        padding: '1rem 0'
      }}>
        {levels.map((level, idx) => (
          <div 
            key={level.id}
            onClick={() => level.isUnlocked && setPlayingLevel(idx + 1)}
            style={{
              background: level.isUnlocked ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
              border: `2px solid ${level.isCompleted ? '#22c55e' : (level.isUnlocked ? series.accentColor + '44' : 'transparent')}`,
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              cursor: level.isUnlocked ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            className={level.isUnlocked ? 'level-card-unlocked' : ''}
          >
            {level.isCompleted && (
              <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <Trophy size={16} color="#22c55e" />
              </div>
            )}
            
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '15px',
              background: level.isUnlocked ? series.accentColor : '#334155',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 900,
              boxShadow: level.isUnlocked ? `0 8px 16px ${series.accentColor}44` : 'none'
            }}>
              {idx + 1}
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ 
                fontSize: '1rem', 
                fontWeight: 800, 
                color: level.isUnlocked ? 'white' : '#64748b' 
              }}>
                {level.isUnlocked ? 'Ready!' : 'Locked'}
              </span>
            </div>

            <button style={{
              background: level.isUnlocked ? 'white' : 'transparent',
              color: level.isUnlocked ? series.accentColor : '#64748b',
              border: level.isUnlocked ? 'none' : '1px solid #475569',
              padding: '0.4rem 1.2rem',
              borderRadius: '10px',
              fontWeight: 900,
              fontSize: '0.8rem',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}>
              {level.isUnlocked ? <Play size={14} fill={series.accentColor} /> : <Lock size={14} />}
              {level.isCompleted ? 'REPLAY' : (level.isUnlocked ? 'PLAY' : 'LOCKED')}
            </button>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .level-card-unlocked:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.1) !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default SeriesPlayView;
