import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import ProgramDetails from './components/ProgramDetails'
import Mascot from './components/Mascot'
import EnrollmentModal from './components/EnrollmentModal'

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
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Mascot Section */}
          <div style={{ textAlign: 'center', order: window.innerWidth < 768 ? 2 : 1 }}>
            <Mascot />
          </div>

          {/* Tagline & Program List */}
          <div style={{ order: window.innerWidth < 768 ? 1 : 2 }}>
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

            <div style={{ marginTop: '3rem' }}>
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
      
      {/* Footer */}
      <footer style={{ 
        padding: '2rem 10%', 
        background: 'white', 
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>© 2026 Kone Kids. All rights reserved.</span>
        </div>
        <p style={{ fontSize: '1.1rem', color: 'var(--kids-orange)', fontWeight: 'bold' }}>+233 55 199 3820</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/coding" 
        element={
          <ProgramDetails 
            title="Coding 4 Kids" 
            image="/programs/coding.png" 
            description="Learn the language of the future through fun, interactive projects. Master the logic of the digital world through interactive and visual programming." 
            accentColor="var(--kids-orange)"
          />
        } 
      />
      <Route 
        path="/robotics" 
        element={
          <ProgramDetails 
            title="Robotics 4 Kids" 
            image="/programs/robotics.png" 
            description="Build and program your own robots in hands-on engineering labs. Bring machines to life with hands-on electronics and hardware engineering." 
            accentColor="var(--kids-blue)"
          />
        } 
      />
      <Route 
        path="/ai" 
        element={
          <ProgramDetails 
            title="AI 4 Kids" 
            image="/programs/ai.png" 
            description="Explore the world of artificial intelligence and machine learning in a kid-friendly way. Understand how the future is built with machine learning." 
            accentColor="#a855f7"
          />
        } 
      />
    </Routes>
  )
}

export default App
