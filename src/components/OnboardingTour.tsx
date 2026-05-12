import React, { useEffect, useCallback, useState } from 'react';
import Mascot from './Mascot';

interface Step {
  id: number;
  text: string;
  targetId?: string;
  mascotPos: { x: number; y: number };
  actionRequired?: 'click' | 'drag' | 'none';
}

export const ONBOARDING_STEPS: Step[] = [
  {
    id: 0,
    text: "Hi there! I'm the Kone Mascot. Welcome to your very first coding mission! 🚀",
    mascotPos: { x: 50, y: 50 },
    actionRequired: 'none'
  },
  {
    id: 1,
    text: "This is the Toolbox. It's where all your magic coding blocks live! Click on 'Mascot' to see my controls.",
    targetId: 'blockly-toolbox-mascot',
    mascotPos: { x: 50, y: 30 },
    actionRequired: 'click'
  },
  {
    id: 2,
    text: "Great! Now drag the 'Wave' block into the white workspace area.",
    targetId: 'blockly-flyout-wave',
    mascotPos: { x: 30, y: 50 },
    actionRequired: 'drag'
  },
  {
    id: 3,
    text: "Perfect! Now click the green button to run your code and see me wave!",
    targetId: 'run-code-btn',
    mascotPos: { x: 70, y: 75 },
    actionRequired: 'click'
  }
];

interface OnboardingTourProps {
  currentStep: number;
  onNext: () => void;
  onSkip?: () => void;
}

const OnboardingTour: React.FC<OnboardingTourProps> = ({ currentStep, onNext, onSkip }) => {
  const [spotlightRect, setSpotlightRect] = useState<DOMRect | null>(null);
  const [isMobile] = useState(window.innerWidth < 768);
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;

  const updateSpotlight = useCallback(() => {
    const step = ONBOARDING_STEPS[currentStep];
    if (!step?.targetId) {
      setSpotlightRect(null);
      return;
    }

    let el: HTMLElement | null = document.getElementById(step.targetId);

    if (!el && step.targetId === 'blockly-toolbox-mascot') {
      const categories = document.querySelectorAll('.blocklyToolboxCategory, .blocklyTreeLabel');
      el = Array.from(categories).find(c => c.textContent?.includes('Mascot')) as HTMLElement | null;
    }

    if (!el && step.targetId === 'blockly-flyout-wave') {
      const blocks = document.querySelectorAll('.blocklyDraggable');
      el = Array.from(blocks).find(b => b.innerHTML.includes('mascot_wave') || b.textContent?.includes('Wave')) as HTMLElement | null;
    }

    setSpotlightRect(el ? el.getBoundingClientRect() : null);
  }, [currentStep]);

  useEffect(() => {
    const timer = setTimeout(updateSpotlight, 100);
    window.addEventListener('resize', updateSpotlight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSpotlight);
    };
  }, [updateSpotlight, currentStep]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onSkip?.();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onNext, onSkip]);

  if (currentStep >= ONBOARDING_STEPS.length) return null;

  const step = ONBOARDING_STEPS[currentStep];

  const spotlightClipPath = spotlightRect
    ? `polygon(
        0% 0%, 0% 100%,
        ${spotlightRect.left - 5}px 100%,
        ${spotlightRect.left - 5}px ${spotlightRect.top - 5}px,
        ${spotlightRect.right + 5}px ${spotlightRect.top - 5}px,
        ${spotlightRect.right + 5}px ${spotlightRect.bottom + 5}px,
        ${spotlightRect.left - 5}px ${spotlightRect.bottom + 5}px,
        ${spotlightRect.left - 5}px 100%,
        100% 100%, 100% 0%
      )`
    : 'none';

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 10000,
      pointerEvents: 'all',
      overflow: 'hidden'
    }}>
      {/* Dimmed backdrop with spotlight cutout */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(2px)',
        clipPath: spotlightClipPath,
        transition: 'clip-path 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        pointerEvents: 'none'
      }} />

      {/* Skip button — top-right, always clickable */}
      {onSkip && (
        <button
          onClick={onSkip}
          style={{
            position: 'absolute',
            top: isMobile ? '1rem' : '1.5rem',
            right: isMobile ? '1rem' : '1.5rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
            borderRadius: '12px',
            padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1.1rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontFamily: 'Baloo 2, sans-serif',
            fontWeight: 700,
            backdropFilter: 'blur(8px)',
            zIndex: 10001,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'background 0.2s'
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
          onMouseOut={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
        >
          ✕ Skip Tour
        </button>
      )}

      {/* Step progress dots — top-center */}
      <div style={{
        position: 'absolute',
        top: '1.6rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        pointerEvents: 'none'
      }}>
        {ONBOARDING_STEPS.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === currentStep ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === currentStep ? 'var(--kids-orange, #ff9f43)' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Mascot + speech bubble — always has pointer events */}
      <div style={{
        position: 'absolute',
        left: `${step.mascotPos.x}%`,
        top: `${step.mascotPos.y}%`,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: isMobile ? '0.75rem' : '1rem',
        width: isMobile ? '280px' : '340px',
        pointerEvents: 'all'
      }}>
        {/* Speech bubble */}
        <div style={{
          padding: isMobile ? '1rem' : '1.5rem',
          borderRadius: '24px',
          background: 'white',
          position: 'relative',
          color: '#1e293b',
          fontWeight: 700,
          fontSize: isMobile ? '0.9rem' : '1.1rem',
          textAlign: 'center',
          lineHeight: 1.4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          border: '4px solid rgba(0,0,0,0.05)'
        }}>
          {step.text}
          {/* Tail */}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '20px',
            height: '20px',
            background: 'white',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
          }} />
        </div>

        {/* Mascot avatar */}
        <div style={{ width: isMobile ? '100px' : '130px' }}>
          <Mascot />
        </div>

        {/* Next / Got it — shown on EVERY step */}
        <button
          className="kids-button pulse-neon"
          style={{ 
            padding: isMobile ? '0.6rem 2rem' : '0.8rem 3rem', 
            pointerEvents: 'all',
            fontSize: isMobile ? '1rem' : '1.1rem'
          }}
          onClick={onNext}
        >
          {isLastStep ? 'Got it! 🚀' : 'Next →'}
        </button>

        {/* Hint for action-required steps */}
        {step.actionRequired !== 'none' && (
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.8rem',
            margin: 0,
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            Tip: You can also interact with the highlighted area!
          </p>
        )}
      </div>
    </div>
  );
};

export default OnboardingTour;
