import React from 'react';
import { Award, Sparkles, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/sounds';

interface StageVictoryModalProps {
  isOpen: boolean;
  stageNumber: number;
  totalStages: number;
  stageTitle: string;
  xpEarned: number;
  blockCount: number;
  targetBlockCount?: number;
  isDark: boolean;
  onNext: () => void;
  onReplay: () => void;
  onClose: () => void;
}

const StageVictoryModal: React.FC<StageVictoryModalProps> = ({
  isOpen,
  stageNumber,
  totalStages,
  stageTitle,
  xpEarned,
  blockCount,
  targetBlockCount,
  isDark,
  onNext,
  onReplay,
  onClose
}) => {
  if (!isOpen) return null;

  const isFinalStage = stageNumber >= totalStages;
  const isOptimal = targetBlockCount ? blockCount <= targetBlockCount : true;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        background: isDark ? 'linear-gradient(145deg, #1e293b, #0f172a)' : 'linear-gradient(145deg, #ffffff, #f8fafc)',
        border: '2px solid #22c55e',
        borderRadius: '24px',
        padding: '2rem 1.75rem',
        maxWidth: '440px',
        width: '100%',
        boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.35)',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Confetti Glow Header */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #22c55e, #10b981)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          boxShadow: '0 0 25px rgba(34, 197, 94, 0.6)'
        }}>
          <span style={{ fontSize: '2.4rem' }}>{isFinalStage ? '🏆' : '🎉'}</span>
        </div>

        <div style={{
          background: 'rgba(34, 197, 94, 0.15)',
          color: '#22c55e',
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '12px',
          fontWeight: 800,
          fontSize: '0.78rem',
          marginBottom: '0.5rem',
          letterSpacing: '0.5px'
        }}>
          {isFinalStage ? 'MISSION COMPLETED!' : `STAGE ${stageNumber} SOLVED!`}
        </div>

        <h3 style={{
          margin: '0 0 0.5rem',
          fontFamily: '"Baloo 2", cursive',
          fontSize: '1.6rem',
          color: isDark ? '#ffffff' : '#0f172a'
        }}>
          {stageTitle}
        </h3>

        <p style={{
          margin: '0 0 1.25rem',
          fontSize: '0.9rem',
          color: isDark ? '#94a3b8' : '#64748b'
        }}>
          {isOptimal ? '🌟 Brilliant logic! You used the perfect set of code blocks.' : 'Awesome work! Your code executed successfully.'}
        </p>

        {/* Reward Stats Card */}
        <div style={{
          background: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f1f5f9',
          border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '0.85rem 1.2rem',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700 }}>XP REWARD</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Sparkles size={16} /> +{xpEarned}
            </div>
          </div>

          <div style={{ width: '1px', height: '30px', background: isDark ? 'rgba(255,255,255,0.1)' : '#cbd5e1' }} />

          <div>
            <div style={{ fontSize: '0.7rem', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700 }}>BLOCKS USED</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: isOptimal ? '#22c55e' : '#0ea5e9' }}>
              {blockCount} {targetBlockCount ? `/ ${targetBlockCount}` : ''}
            </div>
          </div>

          <div style={{ width: '1px', height: '30px', background: isDark ? 'rgba(255,255,255,0.1)' : '#cbd5e1' }} />

          <div>
            <div style={{ fontSize: '0.7rem', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700 }}>STARS</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#f59e0b' }}>
              {isOptimal ? '⭐⭐⭐' : '⭐⭐'}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              onReplay();
            }}
            style={{
              flex: 1,
              background: isDark ? 'rgba(255,255,255,0.08)' : '#e2e8f0',
              color: isDark ? '#ffffff' : '#334155',
              border: 'none',
              padding: '0.75rem 1rem',
              borderRadius: '14px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              transition: 'all 0.15s ease'
            }}
          >
            <RotateCcw size={16} />
            Replay
          </button>

          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              onNext();
            }}
            style={{
              flex: 2,
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.25rem',
              borderRadius: '14px',
              fontWeight: 900,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)',
              transition: 'all 0.15s ease'
            }}
          >
            <span>{isFinalStage ? 'Finish Mission 🏆' : 'Next Puzzle'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StageVictoryModal;
