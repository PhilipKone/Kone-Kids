import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { useGamification } from '../context/GamificationContext'
import { getTranslation } from '../utils/translations'

export interface MascotHandle {
  speak: (text: string) => void;
  wave: (duration?: number) => void;
  blink: () => void;
  celebrate: (intensity?: 'low' | 'high') => void;
}

const Mascot = forwardRef<MascotHandle, {}>((props, ref) => {
  const { unlockBadge, equippedItems, dialect } = useGamification()
  const [clickCount, setClickCount] = useState(0)
  const [isWaving, setIsWaving] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [bubbleText, setBubbleText] = useState('Hi! Ready to build the future?')
  const [isHovering, setIsHovering] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isActive, setIsActive] = useState(false) // Tracks if mascot is executing a command
  
  const blinkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Get dynamic skin colors
  const getSkinColors = () => {
    const skin = equippedItems.skin
    switch (skin) {
      case 'neon_glow':
        return { stop0: '#22d3ee', stop60: '#0891b2', stop100: '#0e7490', armStroke: '#0e7490' }
      case 'gold_chrome':
        return { stop0: '#fbbf24', stop60: '#d97706', stop100: '#92400e', armStroke: '#92400e' }
      case 'matrix_rain':
        return { stop0: '#4ade80', stop60: '#16a34a', stop100: '#14532d', armStroke: '#14532d' }
      case 'quantum_glitch':
        return { stop0: '#f472b6', stop60: '#c084fc', stop100: '#22d3ee', armStroke: '#c084fc' }
      default:
        return { stop0: '#38bdf8', stop60: '#0ea5e9', stop100: '#1d4ed8', armStroke: '#1d4ed8' }
    }
  }

  const skinColors = getSkinColors()

  // Particle Engine Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<any[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const speakIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  // Particle color palette based on equipped skin
  const getParticleColors = () => {
    const skin = equippedItems.skin
    if (skin === 'neon_glow') {
      return ['#22d3ee', '#f472b6', '#a855f7', '#06b6d4', '#e879f9'] // Cyberpunk neon colors
    } else if (skin === 'gold_chrome') {
      return ['#fbbf24', '#f59e0b', '#d97706', '#bef264', '#fef08a'] // Gold/yellow chrome colors
    } else if (skin === 'matrix_rain') {
      return ['#22c55e', '#4ade80', '#86efac', '#15803d', '#10b981'] // Matrix code-green colors
    } else if (skin === 'quantum_glitch') {
      return ['#ec4899', '#a855f7', '#06b6d4', '#f43f5e', '#3b82f6'] // Cyberpunk glitch colors
    }
    // Default rainbow
    return ['#38bdf8', '#f472b6', '#fbbf24', '#a3e635', '#a855f7', '#fb7185']
  }

  const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
    let rot = Math.PI / 2 * 3
    let x = cx
    let y = cy
    let step = Math.PI / spikes

    ctx.beginPath()
    ctx.moveTo(cx, cy - outerRadius)
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius
      y = cy + Math.sin(rot) * outerRadius
      ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius
      y = cy + Math.sin(rot) * innerRadius
      ctx.lineTo(x, y)
      rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath()
    ctx.fill()
  }

  const drawSparkle = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
    ctx.beginPath()
    ctx.moveTo(cx, cy - size)
    ctx.quadraticCurveTo(cx, cy, cx + size, cy)
    ctx.quadraticCurveTo(cx, cy, cx, cy + size)
    ctx.quadraticCurveTo(cx, cy, cx - size, cy)
    ctx.quadraticCurveTo(cx, cy, cx, cy - size)
    ctx.closePath()
    ctx.fill()
  }

  const updateParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const particles = particlesRef.current
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]

      p.x += p.vx
      p.y += p.vy
      p.vy += p.gravity
      p.vx *= 0.98
      p.vy *= 0.98
      p.rotation += p.rotationSpeed
      p.alpha -= p.decay

      if (p.alpha <= 0) {
        particles.splice(i, 1)
        continue
      }

      ctx.save()
      ctx.globalAlpha = p.alpha
      ctx.fillStyle = p.color
      ctx.strokeStyle = p.color
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)

      if (p.type === 'star') {
        drawStar(ctx, 0, 0, 5, p.size, p.size / 2)
      } else if (p.type === 'sparkle') {
        drawSparkle(ctx, 0, 0, p.size)
      } else {
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.restore()
    }

    if (particles.length > 0) {
      animationFrameRef.current = requestAnimationFrame(updateParticles)
    } else {
      animationFrameRef.current = null
    }
  }

  const spawnParticles = (count: number, intensity: 'low' | 'high' = 'low') => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Responsive Canvas Resize Check
    const rect = canvas.getBoundingClientRect()
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const width = canvas.width
    const height = canvas.height
    const startX = width / 2
    const startY = height * 0.55 // Mascot mouth/body center area
    const colors = getParticleColors()

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * Math.random()) - Math.PI
      const speed = intensity === 'high' 
        ? (3 + Math.random() * 8) 
        : (1.5 + Math.random() * 3.5)

      particlesRef.current.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (intensity === 'high' ? 4 : 1.5), // Upward propulsion
        size: intensity === 'high' ? (4 + Math.random() * 10) : (3 + Math.random() * 6),
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.65 ? 'star' : (Math.random() > 0.3 ? 'sparkle' : 'bubble'),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.25,
        alpha: 1,
        decay: intensity === 'high' ? (0.01 + Math.random() * 0.015) : (0.015 + Math.random() * 0.025),
        gravity: 0.08 + Math.random() * 0.12
      })
    }

    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(updateParticles)
    }
  }

  // Exposed API via ref
  useImperativeHandle(ref, () => ({
    speak: (text: string) => {
      setMascotActive(4500)
      const translated = getTranslation(text, dialect)
      setBubbleText(translated.text)
      setShowBubble(true)
      speakAction(translated.phonetic)
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
    },
    celebrate: (intensity: 'low' | 'high' = 'low') => {
      setMascotActive(intensity === 'high' ? 4000 : 2000)
      setIsWaving(true)
      spawnParticles(intensity === 'high' ? 45 : 20, intensity)
      setTimeout(() => setIsWaving(false), intensity === 'high' ? 2500 : 1500)
    }
  }), [dialect, isActive, equippedItems])

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
      if (speakIntervalRef.current) clearInterval(speakIntervalRef.current)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isActive]) // Re-run when active state changes to resume correctly

  // Idle skin-themed particle spawning
  useEffect(() => {
    if (!equippedItems.skin || equippedItems.skin === 'default') return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      spawnParticles(1, 'low');
    }, 800);

    return () => clearInterval(interval);
  }, [equippedItems.skin]);

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
    if (speakIntervalRef.current) {
      clearInterval(speakIntervalRef.current)
      speakIntervalRef.current = null
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.pitch = 1.3
    utterance.rate = 0.95
    utterance.volume = 1
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Karen'))
    if (preferred) utterance.voice = preferred

    utterance.onstart = () => {
      speakIntervalRef.current = setInterval(() => {
        spawnParticles(2, 'low')
      }, 250)
    }

    utterance.onend = utterance.onerror = () => {
      if (speakIntervalRef.current) {
        clearInterval(speakIntervalRef.current)
        speakIntervalRef.current = null
      }
    }

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
    const textToSpeak = 'Hi! Ready to build the future?'
    const translated = getTranslation(textToSpeak, dialect)
    setBubbleText(translated.text)
    setShowBubble(true)
    speakAction(translated.phonetic)
    spawnParticles(15, 'low') // Burst on click
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
      {/* Canvas Overlay for Particle Effects */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 5,
          width: '100%',
          height: '100%'
        }}
      />
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

      {equippedItems.pose && equippedItems.pose !== 'pose_standing' ? (
        <div style={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <img 
            src={`/mascot/${equippedItems.pose.replace('pose_', '')}.svg`} 
            alt="Mascot Pose" 
            width="300"
            height="300"
            style={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: '400px', 
                filter: isActive ? 'drop-shadow(0 0 15px rgba(14, 165, 233, 0.4))' : 'none',
                transition: 'all 0.3s'
            }}
            className="animate-float"
          />
        </div>
      ) : (
        <svg
          width="100%"
          viewBox="0 0 400 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: 'all 0.3s', maxWidth: '500px', filter: isActive ? 'drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))' : 'none' }}
          className={isWaving ? '' : 'animate-float'}
        >
          <style>{`
            @keyframes glitch-anim {
              0% { transform: translate(0) skew(0); }
              5% { transform: translate(-2px, 1px) skew(-1deg); filter: hue-rotate(45deg); }
              10% { transform: translate(2px, -1px) skew(1deg); filter: hue-rotate(-45deg); }
              15% { transform: translate(0) skew(0); }
              100% { transform: translate(0) skew(0); }
            }
            .glitch-active {
              animation: glitch-anim 2s infinite;
              transform-origin: center;
            }
            @keyframes neon-hue {
              0% { filter: hue-rotate(0deg) drop-shadow(0 0 5px rgba(34,211,238,0.5)); }
              50% { filter: hue-rotate(180deg) drop-shadow(0 0 15px rgba(244,114,182,0.8)); }
              100% { filter: hue-rotate(360deg) drop-shadow(0 0 5px rgba(34,211,238,0.5)); }
            }
            .neon-active {
              animation: neon-hue 6s linear infinite;
            }
            @keyframes float-bot {
              0% { transform: translate(320px, 320px) scale(0.6) translateY(0); }
              50% { transform: translate(320px, 320px) scale(0.6) translateY(-8px); }
              100% { transform: translate(320px, 320px) scale(0.6) translateY(0); }
            }
            .floating-bot {
              animation: float-bot 3s ease-in-out infinite;
            }
            @keyframes float-dragon {
              0% { transform: translate(305px, 230px) translateY(0); }
              50% { transform: translate(305px, 230px) translateY(-6px); }
              100% { transform: translate(305px, 230px) translateY(0); }
            }
            .floating-dragon {
              animation: float-dragon 3.5s ease-in-out infinite;
            }
          `}</style>

          <defs>
            <radialGradient id="body-radial" cx="200" cy="180" r="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={skinColors.stop0} />
              <stop offset="60%" stopColor={skinColors.stop60} />
              <stop offset="100%" stopColor={skinColors.stop100} />
            </radialGradient>

            {/* Gold Chrome Shine Gradient */}
            <linearGradient id="shine-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              <animate attributeName="x1" from="-100%" to="100%" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="y1" from="-100%" to="100%" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="x2" from="0%" to="200%" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="y2" from="0%" to="200%" dur="2.5s" repeatCount="indefinite" />
            </linearGradient>

            {/* Matrix Code Pattern */}
            <pattern id="matrix-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="transparent" />
              <text x="5" y="15" fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.7">0</text>
              <text x="15" y="30" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.9">1</text>
              <text x="25" y="10" fill="#22c55e" fontSize="7" fontFamily="monospace" fontWeight="bold" opacity="0.5">1</text>
              <text x="35" y="45" fill="#4ade80" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.8">0</text>
              <text x="45" y="25" fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.6">1</text>
              <animate attributeName="y" from="0" to="50" dur="2s" repeatCount="indefinite" />
            </pattern>

            <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
              <feOffset dx="0" dy="10" result="offsetblur" />
              <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
              <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="saber-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
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
            <path 
              d="M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z" 
              fill="url(#body-radial)" 
              className={equippedItems.skin === 'quantum_glitch' ? 'glitch-active' : equippedItems.skin === 'neon_glow' ? 'neon-active' : ''}
            />

            {/* Matrix rain overlay */}
            {equippedItems.skin === 'matrix_rain' && (
              <path 
                d="M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z" 
                fill="url(#matrix-pattern)" 
              />
            )}

            {/* Gold chrome sheen overlay */}
            {equippedItems.skin === 'gold_chrome' && (
              <path 
                d="M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z" 
                fill="url(#shine-grad)" 
                style={{ mixBlendMode: 'overlay' }}
              />
            )}

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

            {/* ACCESSORY: Glasses */}
            {equippedItems.glasses === 'cool_shades' && (
              <g transform="translate(130, 185)">
                <rect x="0" y="0" width="140" height="40" rx="10" fill="#0f172a" />
                <rect x="5" y="5" width="60" height="30" rx="8" fill="#1e293b" />
                <rect x="75" y="5" width="60" height="30" rx="8" fill="#1e293b" />
              </g>
            )}

            {equippedItems.glasses === 'vr_goggles' && (
              <g transform="translate(125, 180)">
                <rect x="0" y="0" width="150" height="50" rx="12" fill="#1e293b" stroke="#22d3ee" strokeWidth="2" />
                <rect x="10" y="10" width="130" height="30" rx="6" fill="#0ea5e9" fillOpacity="0.5" />
                <path d="M 20 25 L 130 25" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4 2" />
              </g>
            )}

            {equippedItems.glasses === 'cyber_visor' && (
              <g transform="translate(120, 180)">
                <path d="M 0 10 L 15 0 L 145 0 L 160 10 L 150 45 L 135 50 L 25 50 L 10 45 Z" fill="#f43f5e" fillOpacity="0.85" stroke="#fb7185" strokeWidth="2" />
                <path d="M 12 12 L 148 12" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 3" />
                <path d="M 15 38 L 145 38" stroke="#22d3ee" strokeWidth="1" />
                <circle cx="40" cy="25" r="10" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
                <circle cx="40" cy="25" r="3" fill="#22d3ee" />
                <path d="M 110 20 L 130 20 L 135 25" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                <rect x="110" y="27" width="15" height="4" fill="#fb7185" />
                <rect x="128" y="27" width="8" height="4" fill="#22d3ee" />
              </g>
            )}

            {equippedItems.glasses === 'monocle' && (
              <g>
                <circle cx="240" cy="210" r="34" stroke="#fbbf24" strokeWidth="3" fill="rgba(251, 191, 36, 0.15)" />
                <path d="M 220 195 Q 235 185 255 190" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <path d="M 268 228 Q 295 245 285 295" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="285" cy="297" r="4" fill="#d97706" />
              </g>
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

          {/* ACCESSORY: Hats */}
          {equippedItems.hat === 'engineer_cap' && (
            <g transform="translate(140, 50)">
              <path d="M 0 40 Q 60 0 120 40 L 130 50 Q 60 70 -10 50 Z" fill="#1d4ed8" />
              <path d="M 10 40 Q 60 10 110 40" fill="none" stroke="white" strokeWidth="2" />
            </g>
          )}

          {equippedItems.hat === 'space_helmet' && (
            <g transform="translate(125, 45)">
              <circle cx="75" cy="75" r="70" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="2" />
              <rect x="25" y="120" width="100" height="15" rx="5" fill="#cbd5e1" />
            </g>
          )}

          {equippedItems.hat === 'crown' && (
            <g transform="translate(140, 30)">
              <path d="M 0 50 L 20 20 L 40 50 L 60 10 L 80 50 L 100 20 L 120 50 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
              <circle cx="60" cy="10" r="5" fill="#ef4444" />
            </g>
          )}

          {equippedItems.hat === 'wizard_hat' && (
            <g transform="translate(130, 10)">
              <ellipse cx="70" cy="58" rx="60" ry="10" fill="#4f46e5" stroke="#312e81" strokeWidth="2" />
              <path d="M 20 54 Q 70 -5 95 -45 Q 85 15 120 54 Z" fill="#4f46e5" stroke="#312e81" strokeWidth="2" />
              <path d="M 23 51 Q 70 59 117 51 Q 112 43 70 51 Q 28 43 23 51 Z" fill="#fbbf24" />
              <polygon points="70,12 73,20 81,20 75,25 77,33 70,28 63,33 65,25 59,20 67,20" fill="#fef08a" />
              <polygon points="45,35 46.5,39 50.5,39 47.5,41.5 48.5,45.5 45,43 41.5,45.5 42.5,41.5 39.5,39 43.5,39" fill="#fef08a" />
              <polygon points="95,30 96.5,34 100.5,34 97.5,36.5 98.5,40.5 95,38 91.5,40.5 92.5,36.5 89.5,34 93.5,34" fill="#fef08a" />
            </g>
          )}

          {equippedItems.hat === 'detective_hat' && (
            <g transform="translate(130, 15)">
              <path d="M -15 55 Q 70 70 155 55 Q 70 45 -15 55 Z" fill="#5c3d2e" stroke="#3e2723" strokeWidth="2" />
              <path d="M 15 50 C 20 20 40 15 70 25 C 100 15 120 20 125 50 Z" fill="#5c3d2e" stroke="#3e2723" strokeWidth="2" />
              <path d="M 45 23 Q 70 32 95 23" stroke="#3e2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 17 48 Q 70 56 123 48 L 124 40 Q 70 48 16 40 Z" fill="#111827" />
              <rect x="95" y="36" width="6" height="10" fill="#d97706" rx="1" />
            </g>
          )}

          {/* ACCESSORY: Pet */}
          {equippedItems.accessory === 'robot_pet' && (
            <g className="floating-bot">
              <rect x="0" y="0" width="80" height="80" rx="10" fill="#94a3b8" />
              <rect x="10" y="10" width="60" height="40" rx="5" fill="#1e293b" />
              {/* Blinking blue eyes */}
              <circle cx="25" cy="25" r="5" fill="#22d3ee">
                <animate attributeName="ry" values="5;0.5;5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="55" cy="25" r="5" fill="#22d3ee">
                <animate attributeName="ry" values="5;0.5;5" dur="3s" repeatCount="indefinite" />
              </circle>
              {/* Blinking antenna */}
              <line x1="40" y1="0" x2="40" y2="-12" stroke="#475569" strokeWidth="4" />
              <circle cx="40" cy="-12" r="5" fill="#0ea5e9">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <path d="M 10 90 L 30 110 M 70 90 L 50 110" stroke="white" strokeWidth="8" strokeLinecap="round" />
            </g>
          )}

          {equippedItems.accessory === 'pet_dragon' && (
            <g className="floating-dragon" filter="url(#soft-shadow)">
              {/* Flapping Red Wing Left */}
              <g transform="translate(10, 15)">
                <path d="M 0 0 Q -25 -15 -15 10 Q -12 7 0 10 Z" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" values="0; -25; 0" dur="0.6s" repeatCount="indefinite" />
                </path>
              </g>
              <path d="M 15 45 Q -2 55 -5 40 Q -5 30 5 35 L 10 45 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
              <polygon points="-5,40 -10,35 -2,32" fill="#ef4444" />
              <polygon points="25,12 25,18 31,15" fill="#ef4444" />
              <polygon points="25,23 25,29 31,26" fill="#ef4444" />
              <ellipse cx="25" cy="30" rx="16" ry="20" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
              <ellipse cx="25" cy="32" rx="10" ry="14" fill="#fde047" />
              <circle cx="16" cy="48" r="5" fill="#16a34a" />
              <circle cx="34" cy="48" r="5" fill="#16a34a" />
              {/* Flapping Red Wing Right */}
              <g transform="translate(38, 15)">
                <path d="M 0 0 Q 25 -15 15 10 Q 12 7 0 10 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" values="0; 25; 0" dur="0.6s" repeatCount="indefinite" />
                </path>
              </g>
              <circle cx="25" cy="5" r="14" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
              <rect x="18" y="2" width="14" height="8" rx="2.5" fill="#4ade80" />
              <circle cx="20" cy="2" r="3.5" fill="white" />
              <circle cx="20" cy="2" r="1.5" fill="black" />
              <circle cx="30" cy="2" r="3.5" fill="white" />
              <circle cx="30" cy="2" r="1.5" fill="black" />
              <polygon points="16,-7 12,-14 20,-9" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
              <polygon points="34,-7 38,-14 30,-9" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
              <path d="M 12 6 Q -2 12 6 15 Q 12 11 12 6" fill="#f97316" opacity="0.85" />
              {/* Pulsing Fire Breath */}
              <circle cx="-1" cy="13" r="2" fill="#ef4444">
                <animate attributeName="r" values="2;5;2" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {equippedItems.accessory === 'light_saber' && (
            <g filter="url(#soft-shadow)">
              {/* Pulsing blade */}
              <line x1="275" y1="295" x2="345" y2="195" stroke="#22d3ee" strokeWidth="14" strokeLinecap="round" opacity="0.4" filter="url(#saber-glow)">
                <animate attributeName="strokeWidth" values="12;16;12" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="1.2s" repeatCount="indefinite" />
              </line>
              <line x1="275" y1="295" x2="345" y2="195" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round">
                <animate attributeName="strokeWidth" values="7;9;7" dur="1.2s" repeatCount="indefinite" />
              </line>
              <line x1="275" y1="295" x2="345" y2="195" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
              <line x1="265" y1="310" x2="278" y2="292" stroke="#475569" strokeWidth="10" strokeLinecap="round" />
              <line x1="265" y1="310" x2="278" y2="292" stroke="#0f172a" strokeWidth="10" strokeDasharray="2 3" strokeLinecap="round" />
              <circle cx="272" cy="301" r="1.5" fill="#ef4444" />
            </g>
          )}

          {/* Waving Arm */}
          <g style={{
            transform: isWaving ? 'rotate(-25deg)' : 'rotate(0deg)',
            transformOrigin: '100px 240px',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            <path d="M 100 240 Q 60 210 40 240" stroke={skinColors.armStroke} strokeWidth="26" strokeLinecap="round" fill="none" />
            <path d="M 40 240 C 20 220 10 240 25 260 C 20 270 35 285 50 270 C 60 275 75 255 65 235 C 60 215 45 220 40 235" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          </g>

          {/* Resting Arm */}
          <g filter="url(#soft-shadow)">
            <path d="M 300 240 Q 320 280 270 310" stroke={skinColors.armStroke} strokeWidth="26" strokeLinecap="round" fill="none" />
            <path d="M 270 310 C 250 330 220 310 230 290 C 225 275 245 260 265 275 C 285 270 300 290 285 310 C 280 320 275 315 270 310 Z" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          </g>
        </svg>
      )}
    </div>
  )
})

Mascot.displayName = 'Mascot'

export default Mascot
