import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Mascot from './components/Mascot'
import { GamificationProvider, useGamification } from './context/GamificationContext'
import { ThemeProvider } from './context/ThemeContext'
import Celebration from './components/Celebration'
import InstallBanner from './components/InstallBanner'
import BadgeNotification from './components/BadgeNotification'
import SEOManager from './components/SEOManager'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HomeIcon from 'lucide-react/dist/esm/icons/home.mjs'
import Code from 'lucide-react/dist/esm/icons/code.mjs'
import Cpu from 'lucide-react/dist/esm/icons/cpu.mjs'
import Brain from 'lucide-react/dist/esm/icons/brain.mjs'
import Music from 'lucide-react/dist/esm/icons/music.mjs'
import Volume2 from 'lucide-react/dist/esm/icons/volume-2.mjs'
import VolumeX from 'lucide-react/dist/esm/icons/volume-x.mjs'
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs'
import BookOpen from 'lucide-react/dist/esm/icons/book-open.mjs'
import Clock from 'lucide-react/dist/esm/icons/clock.mjs'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right.mjs'
import User from 'lucide-react/dist/esm/icons/user.mjs'
import { blogArticles, getLocalized } from './data/blogArticles'
import { sounds } from './utils/sounds'

const ProgramDetails = React.lazy(() => import('./components/ProgramDetails'))
const EnrollmentModal = React.lazy(() => import('./components/EnrollmentModal'))
const BadgeTray = React.lazy(() => import('./components/BadgeTray'))
const MissionMap = React.lazy(() => import('./components/MissionMap'))
const Blog = React.lazy(() => import('./components/Blog'))
const ArticleReader = React.lazy(() => import('./components/ArticleReader'))
const ClassLogin = React.lazy(() => import('./components/ClassLogin'))
const TeacherDashboard = React.lazy(() => import('./components/TeacherDashboard'))
const ProfileView = React.lazy(() => import('./components/ProfileView'))


function Home() {
  const { t, i18n } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { studentName, logoutStudent, streak } = useGamification()

  // Audio control state
  const [muted, setMuted] = useState(sounds.getMuted())
  const [musicOn, setMusicOn] = useState(sounds.getMusicOn())

  const handleToggleMute = () => {
    const isMuted = sounds.toggleMute()
    setMuted(isMuted)
    sounds.playClick()
  }

  const handleToggleMusic = () => {
    const isMusicOn = sounds.toggleMusic()
    setMusicOn(isMusicOn)
    sounds.playClick()
  }

  return (
    <div className="kids-app">
      {isModalOpen && <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

      {/* Navigation / Header */}
      <nav className="kids-nav-bar" style={{ 
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
        <Link to="/" className="kids-nav-logo-text" style={{ 
          fontFamily: "'Baloo 2', cursive", 
          fontWeight: 800, 
          fontSize: '1.4rem', 
          color: 'var(--nav-text)', 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <img className="kids-nav-logo-img" src="/mascot.svg" alt="Kone Kids Logo" width="24" height="24" style={{ height: '24px', width: 'auto' }} /> Kone Kids
        </Link>
        <div className="nav-links-container" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Audio controls */}
          <div className="nav-audio-controls" style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <button
              onClick={handleToggleMusic}
              title={musicOn ? 'Mute Music' : 'Play Background Music'}
              style={{
                background: musicOn ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: musicOn ? '#c084fc' : '#94a3b8',
                transition: 'all 0.2s',
                outline: 'none'
              }}
            >
              <Music size={18} />
            </button>
            <button
              onClick={handleToggleMute}
              title={muted ? 'Unmute Sound FX' : 'Mute Sound FX'}
              style={{
                background: !muted ? 'rgba(14, 165, 233, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: !muted ? '#38bdf8' : '#94a3b8',
                transition: 'all 0.2s',
                outline: 'none'
              }}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
          {studentName ? (
            <div className="nav-link-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              {streak > 0 && (
                <span style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  color: '#f97316',
                  background: 'rgba(249, 115, 22, 0.1)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }} title={`${streak} Day Coding Streak!`}>
                  🔥 {streak}
                </span>
              )}
              <button 
                onClick={logoutStudent}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ef4444',
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  marginLeft: '0.5rem'
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
            }} className="hover-orange nav-link-desktop">
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
          }} className="hover-teal nav-link-desktop">
            Parent Hub
          </Link>
          
          {/* Language selector toggle (Desktop) */}
          <div className="nav-link-desktop" style={{ display: 'flex', gap: '0.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '3px' }}>
            {['en', 'fr', 'es', 'pt'].map((lang) => (
              <button 
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                style={{
                  background: i18n.language === lang ? 'var(--kids-orange)' : 'transparent',
                  border: 'none',
                  color: 'white',
                  padding: '0.25rem 0.55rem',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontFamily: "'Baloo 2', cursive",
                  textTransform: 'uppercase'
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Language selector toggle (Mobile Dropdown) */}
          <div className="nav-link-mobile" style={{ alignItems: 'center' }}>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.05)',
              border: '1.5px solid var(--nav-border)',
              borderRadius: '12px',
              padding: '0.35rem 0.55rem',
              gap: '4px'
            }}>
              <span style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>🌐</span>
              <select
                value={i18n.language.slice(0, 2)}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  sounds.playClick();
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--nav-text)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontFamily: "'Baloo 2', cursive",
                  outline: 'none',
                  paddingRight: '2px',
                  appearance: 'none',
                  WebkitAppearance: 'none'
                }}
              >
                <option value="en" style={{ background: 'var(--kids-surface)', color: 'var(--kids-text)' }}>EN</option>
                <option value="fr" style={{ background: 'var(--kids-surface)', color: 'var(--kids-text)' }}>FR</option>
                <option value="es" style={{ background: 'var(--kids-surface)', color: 'var(--kids-text)' }}>ES</option>
                <option value="pt" style={{ background: 'var(--kids-surface)', color: 'var(--kids-text)' }}>PT</option>
              </select>
            </div>
          </div>

          {!studentName && (
            <button 
              className="kids-button nav-link-desktop" 
              onClick={() => setIsModalOpen(true)}
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
            >
              Join Hub
            </button>
          )}
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
              <h1 style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: 800,
                color: 'var(--nav-text)',
                margin: '0 0 0.75rem 0',
                lineHeight: 1.25
              }}>
                {t('home.title', 'Welcome to Kone Kids!')}
              </h1>
              <p style={{
                fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
                color: 'var(--kids-text-muted)',
                margin: '0 0 2rem 0',
                lineHeight: 1.6
              }}>
                {t('home.subtitle', 'Embark on gamified coding adventures, earn coins, and build real smart hardware nodes.')}
              </p>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <span className="hero-tagline">
                  {t('home.tagline', 'Do it Right')}
                </span>
              </div>
              
              <div className="app-tiles-grid">
                <Link to="/coding" className="app-tile" style={{ '--tile-color': 'var(--kids-orange)' } as any}>
                  <div className="app-tile-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--kids-orange)' }}>
                    <Code size={32} />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <h2 className="app-tile-title">{t('home.codingTitle', 'Coding 4 Kids')}</h2>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>{t('home.codingDesc', 'Build games and apps!')}</p>
                  </div>
                </Link>

                <Link to="/robotics" className="app-tile" style={{ '--tile-color': 'var(--kids-blue)' } as any}>
                  <div className="app-tile-icon" style={{ background: 'rgba(14, 165, 233, 0.1)', color: 'var(--kids-blue)' }}>
                    <Cpu size={32} />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <h2 className="app-tile-title">{t('home.roboticsTitle', 'Robotics 4 Kids')}</h2>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>{t('home.roboticsDesc', 'Bring machines to life!')}</p>
                  </div>
                </Link>

                <Link to="/ai" className="app-tile" style={{ '--tile-color': 'var(--kids-purple)' } as any}>
                  <div className="app-tile-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--kids-purple)' }}>
                    <Brain size={32} />
                  </div>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <h2 className="app-tile-title">{t('home.aiTitle', 'AI 4 Kids')}</h2>
                    <p style={{ margin: '0.15rem 0 0', fontSize: '0.8rem', color: 'var(--kids-text-muted)' }}>{t('home.aiDesc', 'Train your own AI!')}</p>
                  </div>
                </Link>
              </div>

              <div className="academy-cta-wrapper" style={{ marginTop: '2.5rem' }}>
                <div className="academy-cta-card">
                  <div className="cta-icon-float">🚀</div>
                  <h2 className="cta-title">{t('home.ctaTitle', 'Ready to start?')}</h2>
                  <p className="cta-text">{t('home.ctaDesc', 'Join 1,000+ kids learning to build the future!')}</p>
                  <button 
                    className="kids-button pulse-neon"
                    onClick={() => setIsModalOpen(true)}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    {t('home.ctaButton', 'Join the Academy')}
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
                    {getLocalized(art, 'category', i18n.language)}
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
                      {getLocalized(art, 'title', i18n.language)}
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
                      {getLocalized(art, 'summary', i18n.language)}
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
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem 1rem' }}>
              <span style={{ color: 'var(--kids-text-muted)', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>
                © 2026 Kone Kids. All rights reserved.
              </span>
              <span style={{ color: 'var(--kids-section-border)', fontSize: '0.9rem' }}>•</span>
              <a href="https://www.koneacademy.io" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 700, fontSize: 'clamp(0.8rem, 2.5vw, 0.85rem)' }}>Kone Academy Home</a>
            </div>
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--kids-orange)', fontWeight: 'bold', margin: 0 }}>
              +233 55 199 3820
            </p>
          </div>

          <div style={{
            borderTop: '1px solid var(--kids-section-border)',
            paddingTop: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              color: 'var(--kids-text-muted)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              fontFamily: "'Baloo 2', cursive"
            }}>
              Our Academic Network
            </span>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem 1.25rem',
              fontSize: '0.8rem'
            }}>
              <a href="https://www.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Academy Hub</a>
              <a href="https://code.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Code</a>
              <a href="https://lab.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Lab</a>
              <a href="https://ai.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone AI</a>
              <a href="https://consult.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Consult</a>
              <a href="https://farms.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Farms</a>
              <a href="https://shop.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Shop</a>
              <a href="https://warp.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Warp</a>
              <a href="https://digital.koneacademy.io" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Digital</a>
            </div>
          </div>
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

  // Resume Web Audio context on user interaction
  React.useEffect(() => {
    const resumeAudio = () => {
      sounds.resumeAudio();
    };
    window.addEventListener('click', resumeAudio);
    return () => window.removeEventListener('click', resumeAudio);
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
      <SEOManager />
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
            <Route path="/profile" element={<ProfileView />} />
            {/* ... other routes ... */}
            <Route 
              path="/coding/mission/:missionId" 
              element={
                <ProgramDetails 
                  title="Coding Lab" 
                  image="/programs/coding.webp" 
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
                  image="/programs/robotics.webp" 
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
                  image="/programs/ai.webp" 
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
          <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'nav-item-active' : ''}`}>
            <User size={24} className="nav-icon" />
            <span>Profile</span>
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
