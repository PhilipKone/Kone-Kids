import React, { useState } from 'react';
import { GAME_SERIES, GameSeries } from '../data/missions';
import { useGamification } from '../context/GamificationContext';
import SeriesCard from './SeriesCard';
import SeriesPlayView from './SeriesPlayView';
import CoinStoreModal from './CoinStoreModal';
import { X, Sparkles, Coins, Plus } from 'lucide-react';

interface SeriesLibraryProps {
  onClose: () => void;
}

const SeriesLibrary: React.FC<SeriesLibraryProps> = ({ onClose }) => {
  const { unlockedSeries, unlockSeries, coins, completedMissions } = useGamification();
  const [selectedSeries, setSelectedSeries] = useState<GameSeries | null>(null);
  const [activePlaySeries, setActivePlaySeries] = useState<GameSeries | null>(null);
  const [showCoinStore, setShowCoinStore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUnlock = (series: GameSeries) => {
    if (coins < series.price) {
      setError(`You need ${series.price - coins} more coins to unlock this!`);
      setTimeout(() => setError(null), 3000);
      return;
    }
    
    if (unlockSeries(series.id, series.price)) {
      setSelectedSeries(null);
    }
  };

  const getProgress = (seriesId: string) => {
    // This would ideally count missions belonging to this series
    // For now, returning a mock progress based on total completions to show UI works
    return Math.min(completedMissions.length / 10, 1);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      overflowY: 'auto',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <div>
            <h1 style={{
              color: 'white',
              fontSize: isMobile ? '1.8rem' : '2.5rem',
              fontFamily: '"Baloo 2", cursive',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <Sparkles color="#fbbf24" size={isMobile ? 24 : 32} />
              Game Series
            </h1>
            <p style={{ color: '#94a3b8', margin: '0.25rem 0', fontSize: isMobile ? '0.9rem' : '1.1rem' }}>
              Unlock mini-games to play!
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: isMobile ? 'space-between' : 'flex-end',
            gap: isMobile ? '0.75rem' : '1.5rem' 
          }}>
            <div style={{
              background: 'rgba(251,191,36,0.1)',
              padding: isMobile ? '0.4rem 0.8rem' : '0.6rem 1.2rem',
              borderRadius: '12px',
              border: '1px solid #fbbf24',
              color: '#fbbf24',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 800,
              fontSize: isMobile ? '1rem' : '1.2rem'
            }}>
              <Coins size={isMobile ? 18 : 24} />
              {coins}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setShowCoinStore(true)}
                style={{
                  background: '#fbbf24',
                  border: 'none',
                  borderRadius: '12px',
                  padding: isMobile ? '0.4rem 0.8rem' : '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  color: '#1e293b',
                  fontWeight: 900,
                  fontSize: isMobile ? '0.85rem' : '1rem'
                }}
              >
                <Plus size={16} /> {!isMobile && 'Get Coins'}
              </button>
              <button 
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: isMobile ? '36px' : '48px',
                  height: isMobile ? '36px' : '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                <X size={isMobile ? 18 : 24} />
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div style={{
            background: '#ef4444',
            color: 'white',
            padding: '1rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 700,
            animation: 'shake 0.5s ease-in-out'
          }}>
            {error}
          </div>
        )}

        {activePlaySeries ? (
          <SeriesPlayView 
            series={activePlaySeries} 
            onBack={() => setActivePlaySeries(null)} 
          />
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(auto-fill, minmax(140px, 1fr))' : 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: isMobile ? '1rem' : '2rem',
            justifyItems: 'center'
          }}>
            {GAME_SERIES.map(series => (
              <SeriesCard 
                key={series.id}
                series={series}
                isUnlocked={unlockedSeries.includes(series.id)}
                progress={getProgress(series.id)}
                onPlay={() => setActivePlaySeries(series)}
                onUnlock={() => setSelectedSeries(series)}
              />
            ))}
          </div>
        )}

        {/* Purchase Confirmation Modal */}
        {selectedSeries && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100
          }}>
            <div style={{
              background: '#1e293b',
              padding: '2.5rem',
              borderRadius: '24px',
              maxWidth: '400px',
              width: '90%',
              textAlign: 'center',
              border: `2px solid ${selectedSeries.accentColor}`,
              boxShadow: `0 0 50px ${selectedSeries.accentColor}33`
            }}>
              <h2 style={{ color: 'white', fontFamily: '"Baloo 2", cursive', fontSize: '1.8rem' }}>
                Unlock {selectedSeries.title}?
              </h2>
              <p style={{ color: '#94a3b8', margin: '1rem 0' }}>
                This book contains {selectedSeries.gameCount} games and costs <strong>{selectedSeries.price} Coins</strong>.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button 
                  onClick={() => setSelectedSeries(null)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: '2px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button 
                  onClick={() => handleUnlock(selectedSeries)}
                  style={{
                    flex: 1,
                    background: selectedSeries.accentColor,
                    border: 'none',
                    color: 'white',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  Unlock 🚀
                </button>
              </div>
            </div>
          </div>
        )}

        <CoinStoreModal isOpen={showCoinStore} onClose={() => setShowCoinStore(false)} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default SeriesLibrary;
