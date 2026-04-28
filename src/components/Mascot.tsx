import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { useGamification } from '../context/GamificationContext'

export interface MascotHandle {
  speak: (text: string) => void;
  wave: (duration?: number) => void;
  blink: () => void;
}

const Mascot = forwardRef<MascotHandle, {}>((props, ref) => {
  const { unlockBadge } = useGamification()
  const [clickCount, setClickCount] = useState(0)
  const [isWaving, setIsWaving] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [bubbleText, setBubbleText] = useState('Hi! Ready to build the future?')
  const [isHovering, setIsHovering] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isActive, setIsActive] = useState(false) // Tracks if mascot is executing a command
  
  const blinkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Coordinating active state to pause idle behavior
  const setMascotActive = (duration: number = 3000) => {
    setIsActive(true)
    if (blinkIntervalRef.current) {
      clearInterval(blinkIntervalRef.current)
      blinkIntervalRef.current = null
    }
    
    if (activeTimeoutRef.current) clearTimeout(activeTimeoutRef.current)
    activeTimeoutRef.current = setTimeout(() => {
      setIsActive(false)
      startBlinking(false)
    }, duration)
  }

  // Exposed API via ref
  useImperativeHandle(ref, () => ({
    speak: (text: string) => {
      setMascotActive(4500)
      setBubbleText(text)
      setShowBubble(true)
      speakAction(text)
      setTimeout(() => setShowBubble(false), 4000)
    },
    wave: (duration = 2000) => {
      setMascotActive(duration + 1000)
      setIsWaving(true)
      setTimeout(() => setIsWaving(false), duration)
    },
    blink: () => {
      setMascotActive(1500)
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 400)
    }
  }))

  const startBlinking = (fast: boolean = false) => {
    // Don't start idle blinking if we're active
    if (isActive) return;

    if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current)
    const interval = fast ? 1200 : 3500
    blinkIntervalRef.current = setInterval(() => {
      if (!isActive) { // Double check inside interval
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 400)
      }
    }, interval)
  }

  useEffect(() => {
    startBlinking(false)
    return () => { 
      if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current)
      if (activeTimeoutRef.current) clearTimeout(activeTimeoutRef.current)
    }
  }, [isActive]) // Re-run when active state changes to resume correctly

  const handleMouseEnter = () => {
    setIsHovering(true)
    setIsWaving(true)
    startBlinking(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (!showBubble) setIsWaving(false)
    startBlinking(false)
  }

  const speakAction = (text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.pitch = 1.3
    utterance.rate = 0.95
    utterance.volume = 1
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Karen'))
    if (preferred) utterance.voice = preferred
    window.speechSynthesis.speak(utterance)
  }

  const handleClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    
    if (newCount >= 5) {
      unlockBadge('mascot_master')
    }

    setMascotActive(3000)
    setIsWaving(true)
    setBubbleText('Hi! Ready to build the future?')
    setShowBubble(true)
    speakAction('Hi! Ready to build the future?')
    setTimeout(() => setIsWaving(false), 2000)
    setTimeout(() => setShowBubble(false), 4000)
  }

  return (
    <div
      className="mascot-container"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', cursor: 'pointer', display: 'inline-block' }}
    >
      {/* Thinking Glow Indicator */}
      {isActive && (
        <div style={{
          position: 'absolute',
          inset: '-20px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 70%)',
          borderRadius: '50%',
          zIndex: -1,
          animation: 'pulse 1.5s ease-in-out infinite'
        }} />
      )}

      {/* Speech Bubble */}
      {showBubble && (
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-20px',
          background: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          zIndex: 10,
          fontFamily: "'Baloo 2', cursive",
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--kids-dark)',
          border: '3px solid var(--kids-blue)',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          maxWidth: 'clamp(200px, 50vw, 300px)',
          animation: 'modalPop 0.3s ease-out'
        }}>
          {bubbleText} {bubbleText.includes('future') && '🚀'}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '20px',
            width: '20px',
            height: '20px',
            background: 'white',
            borderRight: '3px solid var(--kids-blue)',
            borderBottom: '3px solid var(--kids-blue)',
            transform: 'rotate(45deg)'
          }} />
        </div>
      )}

      <svg
        width="100%"
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: 'all 0.3s', maxWidth: '500px', filter: isActive ? 'drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))' : 'none' }}
        className={isWaving ? '' : 'animate-float'}
      >
        <defs>
          <radialGradient id="body-radial" cx="200" cy="180" r="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="10" result="offsetblur" />
            <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Legs & Feet */}
        <g filter="url(#soft-shadow)">
          <path d="M 180 320 Q 180 350 180 375" stroke="white" strokeWidth="24" strokeLinecap="round" fill="none" />
          <path d="M 220 320 Q 220 350 220 375" stroke="white" strokeWidth="24" strokeLinecap="round" fill="none" />
          <path d="M 180 375 Q 180 405 140 405 L 120 400 Q 100 380 150 365 Z" fill="white" />
          <path d="M 220 375 Q 220 405 260 405 L 280 400 Q 300 380 250 365 Z" fill="white" />
        </g>

        {/* Desk & Laptop */}
        <g filter="url(#soft-shadow)">
          <path d="M 50 280 L 350 280 L 370 340 L 30 340 Z" fill="#b45309" />
          <rect x="70" y="340" width="20" height="60" fill="#78350f" />
          <rect x="310" y="340" width="20" height="60" fill="#78350f" />
          <path d="M 120 280 L 280 280 L 290 270 L 110 270 Z" fill="#94a3b8" />
          <rect x="130" y="210" width="140" height="60" rx="4" fill="#1e293b" />
          <rect x="135" y="215" width="130" height="50" rx="2" fill="#10b981" />
          <path d="M 185 240 L 195 250 L 215 230" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Body */}
        <g filter="url(#soft-shadow)">
          <path d="M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z" fill="url(#body-radial)" />

          {/* Eyes */}
          <ellipse cx="160" cy="205" rx="32" ry={isBlinking ? 2 : 48} fill="white" style={{ transition: 'ry 0.08s ease-in-out' }} />
          <ellipse cx="240" cy="205" rx="32" ry={isBlinking ? 2 : 48} fill="white" style={{ transition: 'ry 0.08s ease-in-out' }} />

          {!isBlinking && (
            <>
              <circle cx="165" cy="215" r="16" fill="#0f172a" />
              <circle cx="245" cy="215" r="16" fill="#0f172a" />
              <circle cx="168" cy="208" r="6" fill="white" fillOpacity="0.8" />
              <circle cx="248" cy="208" r="6" fill="white" fillOpacity="0.8" />
            </>
          )}

          {/* Mouth */}
          {isHovering ? (
            <g>
              <path d="M 178 262 Q 200 282 222 262 Q 200 302 178 262 Z" fill="#0f172a" />
              <path d="M 183 265 Q 200 270 217 265" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </g>
          ) : (
            <path d="M 178 262 Q 200 282 222 262" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" fill="none" />
          )}
        </g>

        {/* Waving Arm */}
        <g style={{
          transform: isWaving ? 'rotate(-25deg)' : 'rotate(0deg)',
          transformOrigin: '100px 240px',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
          <path d="M 100 240 Q 60 210 40 240" stroke="#1d4ed8" strokeWidth="26" strokeLinecap="round" fill="none" />
          <path d="M 40 240 C 20 220 10 240 25 260 C 20 270 35 285 50 270 C 60 275 75 255 65 235 C 60 215 45 220 40 235" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        </g>

        {/* Resting Arm */}
        <g filter="url(#soft-shadow)">
          <path d="M 300 240 Q 320 280 270 310" stroke="#1d4ed8" strokeWidth="26" strokeLinecap="round" fill="none" />
          <path d="M 270 310 C 250 330 220 310 230 290 C 225 275 245 260 265 275 C 285 270 300 290 285 310 C 280 320 275 315 270 310 Z" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        </g>
      </svg>
    </div>
  )
})

Mascot.displayName = 'Mascot'

export default Mascot
