import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Mascot from './components/Mascot'
import { GamificationProvider, useGamification } from './context/GamificationContext'
import { ThemeProvider } from './context/ThemeContext'
import Celebration from './components/Celebration'
import InstallBanner from './components/InstallBanner'
import BadgeNotification from './components/BadgeNotification'
import { useLocation } from 'react-router-dom'
import { Home as HomeIcon, Code, Cpu, Brain, Sparkles, BookOpen, Clock, ArrowRight } from 'lucide-react'
import { blogArticles } from './data/blogArticles'

const ProgramDetails = React.lazy(() => import('./components/ProgramDetails'))
const EnrollmentModal = React.lazy(() => import('./components/EnrollmentModal'))
const BadgeTray = React.lazy(() => import('./components/BadgeTray'))
const MissionMap = React.lazy(() => import('./components/MissionMap'))
const Blog = React.lazy(() => import('./components/Blog'))
const ArticleReader = React.lazy(() => import('./components/ArticleReader'))
const ClassLogin = React.lazy(() => import('./components/ClassLogin'))
const TeacherDashboard = React.lazy(() => import('./components/TeacherDashboard'))


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { studentName, logoutStudent } = useGamification()

  return (
    <div className="kids-app">
      {isModalOpen && <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

      {/* Navigation / Header */}
      <nav style={{ 
        padding: '1rem 5%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(8px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid var(--nav-border)'
      }}>
        <Link to="/" style={{ 
          fontFamily: "'Baloo 2', cursive", 
          fontWeight: 800, 
          fontSize: '1.4rem', 
          color: 'var(--nav-text)', 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <img src="/mascot.svg" alt="Kone Kids Logo" width="24" height="24" style={{ height: '24px', width: 'auto' }} /> Kone Kids
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {studentName ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ 
                fontFamily: "'Baloo 2', cursive", 
                fontWeight: 800, 
                color: 'var(--kids-blue)',
                background: 'rgba(14, 165, 233, 0.1)',
                padding: '0.35rem 0.85rem',
                borderRadius: '12px',
                fontSize: '0.9rem'
              }}>
                🎒 {studentName.split(' ')[0]}
              </span>
              <button 
                onClick={logoutStudent}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ef4444',
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/class-login" style={{ 
              fontFamily: "'Baloo 2', cursive",
              color: 'var(--kids-orange)', 
              textDecoration: 'none', 
              fontWeight: 800, 
              fontSize: '1rem',
              transition: 'color 0.2s'
            }} className="hover-orange">
              Class Login 🎒
            </Link>
          )}
          
          <Link to="/blog" style={{ 
            fontFamily: "'Baloo 2', cursive",
            color: 'var(--nav-link)', 
            textDecoration: 'none', 
            fontWeight: 800, 
            fontSize: '1rem',
            transition: 'color 0.2s'
          }} className="hover-teal">
            Parent Hub
          </Link>
          <button 
            className="kids-button" 
            onClick={() => setIsModalOpen(true)}
            style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
          >
            Join Hub
          </button>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <header className="section-padding">
          <div className="container hero-grid">
            {/* Mascot Section */}
            <div className="mascot-wrapper">
              <Mascot />
            </div>

            {/* Tagline & Program List */}
            <div className="hero-content">
              <h1 className="hero-tagline">Do it Right</h1>
              
              <div className="app-tiles-grid">
                <Link to="/coding" className="app-tile" style={{ '--tile-color': 'var(--kids-orange)' } as any}>
                  <div className="app-tile-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--kids-orange)' }}>
                    <Code size={32} />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <h2 className="app-tile-title">Coding 4 Kids</h2>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>Build games and apps!</p>
                  </div>
                </Link>

                <Link to="/robotics" className="app-tile" style={{ '--tile-color': 'var(--kids-blue)' } as any}>
                  <div className="app-tile-icon" style={{ background: 'rgba(14, 165, 233, 0.1)', color: 'var(--kids-blue)' }}>
                    <Cpu size={32} />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <h2 className="app-tile-title">Robotics 4 Kids</h2>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>Bring machines to life!</p>
                  </div>
                </Link>

                <Link to="/ai" className="app-tile" style={{ '--tile-color': 'var(--kids-purple)' } as any}>
                  <div className="app-tile-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--kids-purple)' }}>
                    <Brain size={32} />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <h2 className="app-tile-title">AI 4 Kids</h2>
                    <p style={{ margin: '0.15rem 0 0', fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>Train your own AI!</p>
                  </div>
                </Link>
              </div>

              <div className="academy-cta-wrapper" style={{ marginTop: '2.5rem' }}>
                <div className="academy-cta-card">
                  <div className="cta-icon-float">🚀</div>
                  <h2 className="cta-title">Ready to start?</h2>
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

      {/* Featured Blog/Insights Section for Parents & Teachers */}
      <section style={{
        padding: '5rem 5% 6rem',
        background: 'var(--kids-section-bg)',
        borderTop: '1px solid var(--kids-section-border)',
        borderBottom: '1px solid var(--kids-section-border)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3.5rem'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(13, 148, 136, 0.1)',
              color: '#0d9488',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem'
            }}>
              <Sparkles size={14} /> Parents &amp; Teachers Hub
            </div>
            <h2 style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              margin: '0 0 1rem 0',
              color: 'var(--nav-text)'
            }}>
              Featured Insights &amp; STEM Wisdom
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
              color: 'var(--kids-text-muted)',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.5
            }}>
              Explore practical, research-backed advice on screen time, computational literacy, robotics engineering, and raising the next generation of builders in Ghana.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}>
            {blogArticles.slice(0, 3).map((art) => (
              <article
                key={art.id}
                style={{
                  background: 'var(--blog-card-bg)',
                  borderRadius: '24px',
                  border: '1px solid var(--blog-card-border)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease'
                }}
                className="blog-card-hover"
              >
                {/* Card Header Cover */}
                <div style={{
                  background: art.coverGradient,
                  height: '140px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}>
                  <span style={{
                    background: 'white',
                    color: art.accentColor,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    alignSelf: 'flex-start',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                  }}>
                    {art.category}
                  </span>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1e293b'
                  }}>
                    <BookOpen size={16} style={{ color: art.accentColor }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Kone Kids Insights</span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between'
                }}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h3 style={{
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      margin: '0 0 0.5rem 0',
                      lineHeight: 1.3,
                      color: 'var(--blog-card-title)'
                    }}>
                      {art.title}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'var(--blog-card-text)',
                      margin: 0,
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {art.summary}
                    </p>
                  </div>

                  {/* Metadata & Button Row */}
                  <div style={{
                    borderTop: '1px solid var(--blog-card-meta-border)',
                    paddingTop: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={14} style={{ color: '#94a3b8' }} />
                      <span style={{ fontSize: '0.75rem', color: 'var(--kids-text-muted)', fontWeight: 600 }}>{art.readTime}</span>
                    </div>

                    <Link to={`/blog/${art.slug}`} style={{
                      background: 'rgba(13, 148, 136, 0.06)',
                      color: '#0d9488',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      transition: 'all 0.2s'
                    }} className="btn-read-hover">
                      Read <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Footer */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                color: 'white',
                border: 'none',
                padding: '0.85rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)',
                textDecoration: 'none',
                fontFamily: "'Baloo 2', cursive",
                transition: 'all 0.2s'
              }}
              className="btn-cta-hover"
            >
              📖 Visit Parent &amp; Teacher Hub
            </Link>
          </div>
        </div>
      </section>
      </main>
      
      {/* Footer */}
      <footer style={{ 
        padding: 'clamp(1.5rem, 4vw, 2rem) 5%', 
        background: 'var(--footer-bg)', 
        borderTop: '1px solid var(--footer-border)',
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
          <span style={{ color: 'var(--kids-text-muted)', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>
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

  // Dynamically update canonical URL
  React.useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const cleanPath = location.pathname.endsWith('/') && location.pathname !== '/'
      ? location.pathname.slice(0, -1)
      : location.pathname;
    canonical.setAttribute('href', `https://kids.koneacademy.io${cleanPath}`);
  }, [location.pathname]);

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
        <React.Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
            gap: '8px'
          }}>
            <span style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#f97316', animation:'dotPulse 1.2s ease-in-out infinite 0s', display:'block' }}></span>
            <span style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#0ea5e9', animation:'dotPulse 1.2s ease-in-out infinite 0.2s', display:'block' }}></span>
            <span style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#a855f7', animation:'dotPulse 1.2s ease-in-out infinite 0.4s', display:'block' }}></span>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class-login" element={<ClassLogin />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleReader />} />
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
        </React.Suspense>
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
