import React, { useState, useEffect } from 'react'
import './InstallBanner.css'

const InstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isDismissing, setIsDismissing] = useState(false)

  useEffect(() => {
    // Detect if running in a native app wrapper/webview (Google Play or Apple App Store app)
    const isWebView = () => {
      const ua = window.navigator.userAgent.toLowerCase();
      const isAndroidWV = ua.includes('wv') || (ua.includes('android') && ua.includes('version/'));
      const isIOSWV = (ua.includes('ipad') || ua.includes('iphone') || ua.includes('ipod')) && 
                      (!ua.includes('safari') && !ua.includes('chrome') && !ua.includes('crios') && !ua.includes('fxios'));
      const isTWA = document.referrer?.startsWith('android-app://');
      const hasNativeApi = (window as any).Capacitor || (window as any).cordova || (window as any).ReactNativeWebView;
      const hasNativeParam = window.location.search.includes('platform=') || window.location.search.includes('mode=native') || window.location.search.includes('utm_source=app');
      return isAndroidWV || isIOSWV || isTWA || !!hasNativeApi || hasNativeParam;
    };

    if (isWebView()) return;

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
          <img src="/mascot.svg" alt="Kone Kids" width="48" height="48" />
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
