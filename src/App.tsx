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
            
            <ul className="program-list">
              <li>
                <Link to="/coding" className="program-item" style={{ textDecoration: 'none' }}>
                  <span className="bullet-orange"></span>
                  <span>Coding 4 <span style={{ color: 'var(--kids-orange)' }}>Kids</span></span>
                </Link>
              </li>
              <li>
                <Link to="/robotics" className="program-item" style={{ textDecoration: 'none' }}>
                  <span className="bullet-orange" style={{ background: 'var(--kids-blue)', boxShadow: '0 0 10px var(--kids-blue)' }}></span>
                  <span>Robotics 4 <span style={{ color: 'var(--kids-blue)' }}>Kids</span></span>
                </Link>
              </li>
              <li>
                <Link to="/ai" className="program-item" style={{ textDecoration: 'none' }}>
                  <span className="bullet-orange" style={{ background: '#a855f7', boxShadow: '0 0 10px #a855f7' }}></span>
                  <span>AI 4 <span style={{ color: '#a855f7' }}>Kids</span></span>
                </Link>
              </li>
            </ul>

            <div style={{ marginTop: '2.5rem' }}>
              <button 
                className="kids-button"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started Soon
              </button>
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
  const { markVisited, latestBadge } = useGamification();
  const [activeBadge, setActiveBadge] = React.useState<any>(null);

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
        onClose={() => setActiveBadge(null)} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/coding" 
          element={<MissionMap hub="coding" />} 
        />
        <Route 
          path="/robotics" 
          element={<MissionMap hub="robotics" />} 
        />
        <Route 
          path="/ai" 
          element={<MissionMap hub="ai" />} 
        />
        <Route 
          path="/coding/mission/:missionId" 
          element={
            <ProgramDetails 
              title="Coding Lab" 
              image="/programs/coding.png" 
              description="Master the mission! Follow the instructions on the left to earn XP and unlock the next level." 
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
              description="Build and program your robot! Earn XP as you master hardware control." 
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
              description="Train your first AI model! Explore the world of Artificial Intelligence." 
              accentColor="#a855f7"
            />
          } 
        />

      </Routes>
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
