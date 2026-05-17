import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import ProgramDetails from './components/ProgramDetails'
import Mascot from './components/Mascot'
import EnrollmentModal from './components/EnrollmentModal'
import BadgeTray from './components/BadgeTray'
import { GamificationProvider, useGamification } from './context/GamificationContext'
import { ThemeProvider } from './context/ThemeContext'
import Celebration from './components/Celebration'
import InstallBanner from './components/InstallBanner'
import MissionMap from './components/MissionMap'
import BadgeNotification from './components/BadgeNotification'
import { useLocation } from 'react-router-dom'
import { Home as HomeIcon, Code, Cpu, Brain, Sparkles } from 'lucide-react'

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="kids-app">
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation / Header */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        {/* Logo removed as requested */}
      </nav>

      {/* Hero Section */}
      <header className="section-padding">
        <div className="container hero-grid">
          {/* Mascot Section */}
          <div className="mascot-wrapper">
            <Mascot />
          </div>

          {/* Tagline & Program List */}
          <div className="hero-content">
            <h2 className="hero-tagline">Do it Right</h2>
            
            <div className="app-tiles-grid">
              <Link to="/coding" className="app-tile" style={{ '--tile-color': 'var(--kids-orange)' } as any}>
                <div className="app-tile-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--kids-orange)' }}>
                  <Code size={32} />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <h3 className="app-tile-title">Coding 4 Kids</h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>Build games and apps!</p>
                </div>
              </Link>

              <Link to="/robotics" className="app-tile" style={{ '--tile-color': 'var(--kids-blue)' } as any}>
                <div className="app-tile-icon" style={{ background: 'rgba(14, 165, 233, 0.1)', color: 'var(--kids-blue)' }}>
                  <Cpu size={32} />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <h3 className="app-tile-title">Robotics 4 Kids</h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>Bring machines to life!</p>
                </div>
              </Link>

              <Link to="/ai" className="app-tile" style={{ '--tile-color': 'var(--kids-purple)' } as any}>
                <div className="app-tile-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--kids-purple)' }}>
                  <Brain size={32} />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <h3 className="app-tile-title">AI 4 Kids</h3>
                  <p style={{ margin: '0.15rem 0 0', fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>Train your own AI!</p>
                </div>
              </Link>
            </div>

            <div className="academy-cta-wrapper" style={{ marginTop: '2.5rem' }}>
              <div className="academy-cta-card">
                <div className="cta-icon-float">🚀</div>
                <h4 className="cta-title">Ready to start?</h4>
                <p className="cta-text">Join 1,000+ kids learning to build the future!</p>
                <button 
                  className="kids-button pulse-neon"
                  onClick={() => setIsModalOpen(true)}
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Join the Academy
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Achievement Gallery */}
      <BadgeTray />
      
      {/* Footer */}
      <footer style={{ 
        padding: 'clamp(1.5rem, 4vw, 2rem) 5%', 
        background: 'white', 
        borderTop: '1px solid #e2e8f0',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <span style={{ color: '#64748b', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>
            © 2026 Kone Kids. All rights reserved.
          </span>
          <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--kids-orange)', fontWeight: 'bold', margin: 0 }}>
            +233 55 199 3820
          </p>
        </div>
      </footer>
    </div>
  )
}

function AppContent() {
  const { markVisited, markBadgeViewed, latestBadge } = useGamification();
  const [activeBadge, setActiveBadge] = React.useState<any>(null);
  const location = useLocation();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const isMissionPage = location.pathname.includes('/mission/');

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (latestBadge) {
      setActiveBadge(latestBadge);
    }
  }, [latestBadge]);
  
  // Track visits to pages
  React.useEffect(() => {
    markVisited(window.location.pathname);
  }, [window.location.pathname, markVisited]);

  return (
    <>
      <Celebration />
      <BadgeNotification 
        badge={activeBadge} 
        onClose={() => {
          if (activeBadge) markBadgeViewed(activeBadge.id);
          setActiveBadge(null);
        }} 
      />
      
      <div style={{ paddingBottom: (isMobile && !isMissionPage) ? '80px' : '0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<MissionMap hub="coding" />} />
          <Route path="/robotics" element={<MissionMap hub="robotics" />} />
          <Route path="/ai" element={<MissionMap hub="ai" />} />
          {/* ... other routes ... */}
          <Route 
            path="/coding/mission/:missionId" 
            element={
              <ProgramDetails 
                title="Coding Lab" 
                image="/programs/coding.png" 
                description="Master the mission!" 
                accentColor="var(--kids-orange)"
              />
            } 
          />
          <Route 
            path="/robotics/mission/:missionId" 
            element={
              <ProgramDetails 
                title="Robotics Lab" 
                image="/programs/robotics.png" 
                description="Build and program your robot!" 
                accentColor="var(--kids-blue)"
              />
            } 
          />
          <Route 
            path="/ai/mission/:missionId" 
            element={
              <ProgramDetails 
                title="AI Studio" 
                image="/programs/ai.png" 
                description="Train your first AI model!" 
                accentColor="#a855f7"
              />
            } 
          />
        </Routes>
      </div>

      {isMobile && !isMissionPage && (
        <div className="mobile-bottom-nav">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'nav-item-active' : ''}`}>
            <HomeIcon size={24} className="nav-icon" />
            <span>Home</span>
          </Link>
          <Link to="/coding" className={`nav-item ${location.pathname === '/coding' ? 'nav-item-active' : ''}`}>
            <Code size={24} className="nav-icon" />
            <span>Coding</span>
          </Link>
          <Link to="/robotics" className={`nav-item ${location.pathname === '/robotics' ? 'nav-item-active' : ''}`}>
            <Cpu size={24} className="nav-icon" />
            <span>Robotics</span>
          </Link>
          <Link to="/ai" className={`nav-item ${location.pathname === '/ai' ? 'nav-item-active' : ''}`}>
            <Brain size={24} className="nav-icon" />
            <span>AI Lab</span>
          </Link>
        </div>
      )}

      <InstallBanner />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <GamificationProvider>
        <AppContent />
      </GamificationProvider>
    </ThemeProvider>
  )
}


export default App
