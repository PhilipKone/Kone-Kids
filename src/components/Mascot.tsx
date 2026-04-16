import React, { useState, useEffect, useRef } from 'react'

const Mascot: React.FC = () => {
  const [isWaving, setIsWaving] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const blinkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-blink every 3-4s regardless, more frequent on hover
  const startBlinking = (fast: boolean = false) => {
    if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current)
    const interval = fast ? 1200 : 3500
    blinkIntervalRef.current = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 400)
    }, interval)
  }

  useEffect(() => {
    startBlinking(false)
    return () => { if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current) }
  }, [])

  const handleMouseEnter = () => {
    setIsHovering(true)
    setIsWaving(true)
    startBlinking(true) // blink faster on hover
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (!showBubble) setIsWaving(false)
    startBlinking(false) // back to slow blink
  }

  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel() // stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.pitch = 1.3   // slightly higher — friendlier, kid-like
    utterance.rate = 0.95   // just a touch slower for clarity
    utterance.volume = 1
    // Prefer a friendly voice if available
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Karen'))
    if (preferred) utterance.voice = preferred
    window.speechSynthesis.speak(utterance)
  }

  const handleClick = () => {
    setIsWaving(true)
    setShowBubble(true)
    speak('Hi! Ready to build the future?')
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
          whiteSpace: 'nowrap',
          animation: 'modalPop 0.3s ease-out'
        }}>
          Hi! Ready to build the future? 🚀
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
        style={{ transition: 'transform 0.3s', maxWidth: '500px' }}
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
          {/* Clip paths for eye blink */}
          <clipPath id="left-eye-clip">
            <ellipse cx="160" cy="205" rx="32" ry="48" />
          </clipPath>
          <clipPath id="right-eye-clip">
            <ellipse cx="240" cy="205" rx="32" ry="48" />
          </clipPath>
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

          {/* Left Eye White */}
          <ellipse
            cx="160" cy="205" rx="32"
            ry={isBlinking ? 2 : 48}
            fill="white"
            style={{ transition: 'ry 0.08s ease-in-out' }}
          />
          {/* Right Eye White */}
          <ellipse
            cx="240" cy="205" rx="32"
            ry={isBlinking ? 2 : 48}
            fill="white"
            style={{ transition: 'ry 0.08s ease-in-out' }}
          />

          {/* Left Pupil - hidden when blinking */}
          {!isBlinking && (
            <>
              <circle cx="165" cy="215" r="16" fill="#0f172a" />
              <circle cx="168" cy="208" r="6" fill="white" fillOpacity="0.8" />
            </>
          )}
          {/* Right Pupil - hidden when blinking */}
          {!isBlinking && (
            <>
              <circle cx="245" cy="215" r="16" fill="#0f172a" />
              <circle cx="248" cy="208" r="6" fill="white" fillOpacity="0.8" />
            </>
          )}

          {/* Mouth — open on hover, smile when not */}
          {isHovering ? (
            // Open mouth: filled arc for "ooh!" expression
            <g>
              <path d="M 178 262 Q 200 282 222 262 Q 200 302 178 262 Z" fill="#0f172a" />
              {/* Teeth */}
              <path d="M 183 265 Q 200 270 217 265" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </g>
          ) : (
            // Closed smile
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
}

export default Mascot
