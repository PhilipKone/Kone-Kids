import React from 'react';
import { GameSeries } from '../data/missions';
import { Lock, Play, Star } from 'lucide-react';

interface SeriesCardProps {
  series: GameSeries;
  isUnlocked: boolean;
  onPlay: () => void;
  onUnlock: () => void;
  progress: number; // 0 to 1
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series, isUnlocked, onPlay, onUnlock, progress }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className={`series-card ${!isUnlocked ? 'series-card-locked' : ''}`} style={{
      position: 'relative',
      width: isMobile ? '160px' : '220px',
      height: isMobile ? '240px' : '300px',
      perspective: '1000px',
      cursor: 'pointer',
    }}
    onClick={() => isUnlocked ? onPlay() : onUnlock()}
    >
      <div className="series-card-inner" style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        borderRadius: '16px',
        boxShadow: isUnlocked ? `0 20px 40px ${series.accentColor}33` : '0 10px 20px rgba(0,0,0,0.2)',
        background: isUnlocked ? `linear-gradient(135deg, ${series.accentColor}, ${series.accentColor}dd)` : '#334155',
        overflow: 'hidden',
        border: `4px solid ${isUnlocked ? 'white' : 'rgba(255,255,255,0.1)'}`
      }}>
        {/* Cover Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}>
          <img 
            src={series.coverImage} 
            alt={series.title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              opacity: isUnlocked ? 0.6 : 0.3,
              transition: 'transform 0.5s ease'
            }}
            className="series-cover-img"
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)`
          }} />
        </div>

        {/* Cover Pattern overlay removed or kept as subtle */}

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile ? '1rem' : '1.5rem',
          color: 'white',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '2px 8px',
                borderRadius: '8px',
                fontSize: '0.7rem',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>{series.difficulty}</span>
              {isUnlocked ? (
                <Play size={18} fill="white" />
              ) : (
                <Lock size={18} />
              )}
            </div>
            
            <h3 style={{
              fontSize: isMobile ? '1.1rem' : '1.4rem',
              fontFamily: '"Baloo 2", cursive',
              margin: '0.5rem 0',
              lineHeight: 1.2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>{series.title}</h3>
            
            <p style={{
              fontSize: '0.75rem',
              opacity: 0.9,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>{isMobile ? series.title : series.description}</p>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>{series.gameCount} GAMES</span>
            </div>

            {!isUnlocked ? (
              <div style={{
                background: 'white',
                color: series.accentColor,
                padding: '0.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 900,
                fontSize: '0.9rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}>
                {series.price} COINS
              </div>
            ) : (
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.2rem', fontWeight: 800 }}>
                  <span>PROGRESS</span>
                  <span>{Math.round(progress * 100)}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${progress * 100}%`, height: '100%', background: 'white' }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Glossy Overlay */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none'
        }} />
      </div>

      <style>{`
        .series-card:hover .series-card-inner {
          transform: translateY(-10px) rotateY(10deg);
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
        }
        .series-card:hover .series-cover-img {
          transform: scale(1.1);
        }
        .series-card-locked {
          filter: grayscale(0.8);
          opacity: 0.9;
        }
        .series-card-locked:hover {
          filter: grayscale(0.4);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SeriesCard;
