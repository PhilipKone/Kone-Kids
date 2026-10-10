import React, { useState } from 'react';
import { PuzzleStage, StageType } from '../data/puzzleStages';
import { Check, Sparkles, Lightbulb, ChevronRight, RotateCcw, Award, Zap, Star } from 'lucide-react';
import { sounds } from '../utils/sounds';

interface LessonStageBubblesProps {
  stages: PuzzleStage[];
  currentStageIndex: number;
  completedStageIds: string[];
  blockCount: number;
  isDark: boolean;
  isMobile: boolean;
  onSelectStage: (stageIndex: number) => void;
  onNextStage?: () => void;
}

const STAGE_ICONS: Record<StageType, string> = {
  concept: '💡',
  practice: '🧩',
  challenge: '⚡',
  mastery: '⭐'
};

const STAGE_LABELS: Record<StageType, string> = {
  concept: 'Concept',
  practice: 'Practice',
  challenge: 'Challenge',
  mastery: 'Mastery'
};

const LessonStageBubbles: React.FC<LessonStageBubblesProps> = ({
  stages,
  currentStageIndex,
  completedStageIds,
  blockCount,
  isDark,
  isMobile,
  onSelectStage
}) => {
  const [showHint, setShowHint] = useState(false);
  const activeStage = stages[currentStageIndex] || stages[0];

  if (!stages || stages.length === 0) return null;

  return (
    <div className="code-org-stages-panel" style={{
      background: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)',
      border: isDark ? '1.5px solid rgba(14, 165, 233, 0.3)' : '1.5px solid #bae6fd',
      borderRadius: '16px',
      padding: isMobile ? '0.6rem 0.75rem' : '0.75rem 1.25rem',
      marginBottom: '0.6rem',
      boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.3)' : '0 6px 18px rgba(14, 165, 233, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '0.5rem' : '0.65rem'
    }}>
      {/* 1. Code.org Bubble Strip */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '0.35rem' : '0.75rem',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
        paddingBottom: '0.55rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.3rem' : '0.5rem',
          fontSize: isMobile ? '0.7rem' : '0.8rem',
          fontWeight: 800,
          color: isDark ? '#94a3b8' : '#64748b',
          whiteSpace: 'nowrap'
        }}>
          <span style={{ fontSize: isMobile ? '0.9rem' : '1.05rem' }}>🎓</span>
          <span>STAGE PROGRESS</span>
        </div>

        {/* Bubbles List */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.4rem' : '0.75rem',
          overflowX: 'auto',
          padding: '2px'
        }}>
          {stages.map((stage, idx) => {
            const isCompleted = completedStageIds.includes(stage.id);
            const isActive = idx === currentStageIndex;

            // Visual Colors
            let bgColor = isDark ? '#1e293b' : '#f1f5f9';
            let borderColor = isDark ? '#334155' : '#cbd5e1';
            let textColor = isDark ? '#94a3b8' : '#64748b';

            if (isCompleted) {
              bgColor = '#22c55e';
              borderColor = '#16a34a';
              textColor = '#ffffff';
            } else if (isActive) {
              bgColor = '#0ea5e9';
              borderColor = '#0284c7';
              textColor = '#ffffff';
            }

            return (
              <React.Fragment key={stage.id}>
                {/* Connecting Line between bubbles */}
                {idx > 0 && (
                  <div style={{
                    width: isMobile ? '8px' : '16px',
                    height: '2.5px',
                    background: completedStageIds.includes(stages[idx - 1].id) ? '#22c55e' : (isDark ? '#334155' : '#e2e8f0'),
                    borderRadius: '2px',
                    flexShrink: 0
                  }} />
                )}

                {/* The Bubble Button */}
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    onSelectStage(idx);
                  }}
                  title={`Stage ${stage.stageNumber}: ${stage.title} (${STAGE_LABELS[stage.type]})`}
                  style={{
                    position: 'relative',
                    width: isMobile ? '28px' : '34px',
                    height: isMobile ? '28px' : '34px',
                    borderRadius: stage.type === 'challenge' ? '8px' : '50%',
                    background: bgColor,
                    border: `2px solid ${borderColor}`,
                    color: textColor,
                    fontWeight: 900,
                    fontSize: isMobile ? '0.75rem' : '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 0 12px rgba(14, 165, 233, 0.6)' : (isCompleted ? '0 0 8px rgba(34, 197, 94, 0.4)' : 'none'),
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    flexShrink: 0
                  }}
                >
                  {isCompleted ? (
                    <Check size={isMobile ? 14 : 16} strokeWidth={3} />
                  ) : (
                    <span>{stage.stageNumber}</span>
                  )}

                  {/* Stage type indicator icon badge */}
                  <span style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    fontSize: '0.65rem',
                    lineHeight: 1
                  }}>
                    {STAGE_ICONS[stage.type]}
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* XP Reward Pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          background: 'rgba(251, 191, 36, 0.15)',
          color: '#d97706',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          padding: isMobile ? '2px 6px' : '3px 8px',
          borderRadius: '10px',
          fontSize: isMobile ? '0.68rem' : '0.75rem',
          fontWeight: 800,
          whiteSpace: 'nowrap'
        }}>
          <Sparkles size={12} />
          <span>+{activeStage.xpReward} XP</span>
        </div>
      </div>

      {/* 2. Micro-Goal Instruction Box */}
      {activeStage && (
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '0.5rem'
        }}>
          {/* Mascot Prompt */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', flex: 1, minWidth: 0 }}>
            <div style={{
              width: isMobile ? '30px' : '36px',
              height: isMobile ? '30px' : '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(14, 165, 233, 0.3)'
            }}>
              🤖
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '2px' }}>
                <span style={{
                  background: isDark ? 'rgba(14,165,233,0.2)' : '#e0f2fe',
                  color: '#0284c7',
                  borderRadius: '6px',
                  padding: '1px 6px',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}>
                  {STAGE_LABELS[activeStage.type]} • LEVEL {activeStage.stageNumber} OF {stages.length}
                </span>

                <strong style={{ color: isDark ? '#ffffff' : '#0f172a', fontSize: isMobile ? '0.82rem' : '0.9rem' }}>
                  {activeStage.title}
                </strong>

                {activeStage.targetBlockCount && (
                  <span style={{
                    fontSize: '0.65rem',
                    color: blockCount > activeStage.targetBlockCount ? '#f59e0b' : '#10b981',
                    background: isDark ? 'rgba(255,255,255,0.06)' : '#f8fafc',
                    padding: '1px 6px',
                    borderRadius: '6px',
                    fontWeight: 700
                  }}>
                    🎯 Target: {activeStage.targetBlockCount} {activeStage.targetBlockCount === 1 ? 'block' : 'blocks'} (Current: {blockCount})
                  </span>
                )}
              </div>

              <p style={{
                margin: 0,
                fontSize: isMobile ? '0.78rem' : '0.85rem',
                color: isDark ? '#cbd5e1' : '#334155',
                lineHeight: 1.4
              }}>
                {activeStage.instruction}
              </p>
            </div>
          </div>

          {/* Hint Trigger Button */}
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', alignSelf: isMobile ? 'flex-end' : 'center', flexShrink: 0 }}>
            {activeStage.hint && (
              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  setShowHint(!showHint);
                }}
                style={{
                  background: showHint ? '#fef3c7' : (isDark ? 'rgba(245, 158, 11, 0.15)' : '#fffbeb'),
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: '#d97706',
                  borderRadius: '10px',
                  padding: isMobile ? '3px 8px' : '4px 10px',
                  fontSize: isMobile ? '0.72rem' : '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.15s ease'
                }}
              >
                <Lightbulb size={13} />
                <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. Expandable Hint Banner */}
      {showHint && activeStage.hint && (
        <div style={{
          background: isDark ? 'rgba(245, 158, 11, 0.1)' : '#fffbeb',
          border: '1px dashed #f59e0b',
          borderRadius: '10px',
          padding: '0.5rem 0.75rem',
          fontSize: isMobile ? '0.75rem' : '0.82rem',
          color: isDark ? '#fde68a' : '#92400e',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'flex-start',
          animation: 'fadeIn 0.2s ease'
        }}>
          <span style={{ fontSize: '1rem', flexShrink: 0 }}>💡</span>
          <div>
            <strong>Byte’s Secret Clue: </strong>
            <span>{activeStage.hint}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonStageBubbles;
