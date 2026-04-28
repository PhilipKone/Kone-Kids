import React, { useState, useEffect } from 'react'
import './InstallBanner.css'

const InstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isDismissing, setIsDismissing] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('kkids-install-dismissed')
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10)
      if (Date.now() - dismissedAt < 7 * 24 * 60 * 60 * 1000) return
    }
    if (window.matchMedia('(display-mode: standalone)').matches) return

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowBanner(true)
    }
    window.addEventListener('beforeinstallprompt', handler)

    const fallback = setTimeout(() => {
      if (!window.matchMedia('(display-mode: standalone)').matches) setShowBanner(true)
    }, 5000)

    return () => { window.removeEventListener('beforeinstallprompt', handler); clearTimeout(fallback) }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') setShowBanner(false)
      setDeferredPrompt(null)
    } else {
      alert('To install Kone Kids:\n\n• Chrome/Edge: Click the install icon (⊕) in the address bar\n• Safari: Tap Share → Add to Home Screen')
    }
  }

  const handleDismiss = () => {
    setIsDismissing(true)
    localStorage.setItem('kkids-install-dismissed', Date.now().toString())
    setTimeout(() => setShowBanner(false), 350)
  }

  if (!showBanner) return null

  return (
    <div className={`install-banner ${isDismissing ? 'dismissing' : ''}`}>
      <div className="install-banner-inner">
        <div className="install-banner-icon">
          <img src="/mascot.svg" alt="Kone Kids" />
        </div>
        <div className="install-banner-text">
          <div className="install-banner-title">Install Kone Kids</div>
          <div className="install-banner-subtitle">Fun learning on your home screen!</div>
        </div>
        <div className="install-banner-actions">
          <button className="install-btn" onClick={handleInstall}>Install</button>
          <button className="install-dismiss" onClick={handleDismiss} aria-label="Dismiss">✕</button>
        </div>
      </div>
    </div>
  )
}

export default InstallBanner
