import React, { useState } from 'react';
import { useGamification, Badge } from '../context/GamificationContext';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Mascot from './Mascot';
import BadgeModal from './BadgeModal';
import CertificateModal from './CertificateModal';
import { sounds } from '../utils/sounds';
import User from 'lucide-react/dist/esm/icons/user.mjs';
import Award from 'lucide-react/dist/esm/icons/award.mjs';
import Settings from 'lucide-react/dist/esm/icons/settings.mjs';
import Volume2 from 'lucide-react/dist/esm/icons/volume-2.mjs';
import VolumeX from 'lucide-react/dist/esm/icons/volume-x.mjs';
import Music from 'lucide-react/dist/esm/icons/music.mjs';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs';
import LogOut from 'lucide-react/dist/esm/icons/log-out.mjs';
import LogIn from 'lucide-react/dist/esm/icons/log-in.mjs';
import Globe from 'lucide-react/dist/esm/icons/globe.mjs';

const ProfileView: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { 
    studentName, 
    logoutStudent, 
    xp, 
    level, 
    coins, 
    badges, 
    sectionId, 
    studentId 
  } = useGamification();

  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  
  // Audio controls state
  const [muted, setMuted] = useState(sounds.getMuted());
  const [musicOn, setMusicOn] = useState(sounds.getMusicOn());

  const handleToggleMute = () => {
    const isMuted = sounds.toggleMute();
    setMuted(isMuted);
    sounds.playClick();
  };

  const handleToggleMusic = () => {
    const isMusicOn = sounds.toggleMusic();
    setMusicOn(isMusicOn);
    sounds.playClick();
  };

  const handleLogout = async () => {
    sounds.playClick();
    if (window.confirm('Are you sure you want to logout?')) {
      await logoutStudent();
      navigate('/');
    }
  };

  // Calculate XP progress bar
  const xpInCurrentLevel = xp % 250;
  const xpPercent = Math.min(100, Math.floor((xpInCurrentLevel / 250) * 100));

  return (
    <div className="profile-container" style={{ 
      minHeight: '100vh',
      background: 'var(--kids-bg)',
      color: 'var(--kids-text)',
      padding: '2rem 1.5rem 6rem',
      fontFamily: "'Baloo 2', cursive"
    }}>
      {/* Header Banner */}
      <div className="profile-header-card" style={{
        background: 'var(--kids-surface)',
        borderRadius: '28px',
        padding: '2rem',
        border: '1px solid var(--kids-border)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
        maxWidth: '800px',
        margin: '0 auto 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Top Accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, var(--kids-orange), var(--kids-blue), var(--kids-purple))'
        }} />

        <div className="profile-hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Mascot Preview */}
          <div style={{ position: 'relative', minHeight: '260px' }}>
            <Mascot />
          </div>

          {/* Stats Details */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{
                background: 'rgba(249, 115, 22, 0.1)',
                color: 'var(--kids-orange)',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 800
              }}>
                LEVEL {level}
              </span>
              <span style={{ fontSize: '1.25rem' }}>🌟</span>
            </div>

            <h1 style={{ 
              fontSize: '2rem', 
              fontWeight: 800, 
              margin: '0 0 1rem 0',
              color: 'var(--kids-text)'
            }}>
              {studentName || 'Kone Builder'}
            </h1>

            {/* XP Progress Bar */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: 700 }}>
                <span>XP Progress</span>
                <span>{xpInCurrentLevel} / 250 XP</span>
              </div>
              <div style={{ 
                background: 'rgba(0,0,0,0.05)', 
                height: '14px', 
                borderRadius: '10px', 
                overflow: 'hidden',
                border: '1px solid var(--kids-border)'
              }}>
                <div style={{ 
                  width: `${xpPercent}%`, 
                  height: '100%', 
                  background: 'linear-gradient(90deg, var(--kids-blue), var(--kids-purple))',
                  borderRadius: '10px',
                  transition: 'width 0.4s ease'
                }} />
              </div>
            </div>

            {/* Currency Card */}
            <div style={{
              background: 'rgba(249, 115, 22, 0.06)',
              borderRadius: '20px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1.5px solid rgba(249, 115, 22, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>🪙</span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--kids-text-muted)', fontWeight: 700 }}>AVAILABLE VAULT COINS</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--kids-orange)' }}>{coins}</div>
                </div>
              </div>
              <Link to="/coding?library=true" style={{
                background: 'var(--kids-orange)',
                color: 'white',
                padding: '0.45rem 1rem',
                borderRadius: '14px',
                fontSize: '0.85rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 4px 10px rgba(249, 115, 22, 0.2)'
              }}>
                Shop Items
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Settings & Badge Container */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {/* Settings Column */}
        <div style={{
          background: 'var(--kids-surface)',
          borderRadius: '28px',
          padding: '2rem',
          border: '1px solid var(--kids-border)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Settings size={20} style={{ color: 'var(--kids-purple)' }} /> Hub Settings
          </h2>

          {/* Language Picker */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--kids-text-muted)', fontWeight: 800, marginBottom: '0.5rem' }}>
              🌎 SELECT APP LANGUAGE
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <select 
                value={i18n.language.slice(0, 2)} 
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  sounds.playClick();
                }}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1.5px solid var(--kids-border)',
                  color: 'var(--kids-text)',
                  padding: '0.75rem 1rem',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontFamily: "'Baloo 2', cursive",
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  outline: 'none'
                }}
              >
                <option value="en">🇺🇸 English (EN)</option>
                <option value="fr">🇫🇷 Français (FR)</option>
                <option value="es">🇪🇸 Español (ES)</option>
                <option value="pt">🇵🇹 Português (PT)</option>
              </select>
              <span style={{
                position: 'absolute',
                right: '1rem',
                pointerEvents: 'none',
                fontSize: '0.8rem',
                color: 'var(--kids-text-muted)'
              }}>▼</span>
            </div>
          </div>

          {/* Audio Toggles */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--kids-text-muted)', fontWeight: 800, marginBottom: '0.75rem' }}>
              🎵 AUDIO CONTROLS
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleToggleMusic}
                style={{
                  flex: 1,
                  background: musicOn ? 'rgba(168, 85, 247, 0.15)' : 'rgba(0, 0, 0, 0.05)',
                  border: `2px solid ${musicOn ? 'var(--kids-purple)' : 'transparent'}`,
                  borderRadius: '16px',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  color: musicOn ? 'var(--kids-purple)' : 'var(--kids-text-muted)',
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}
              >
                <Music size={18} /> Music {musicOn ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={handleToggleMute}
                style={{
                  flex: 1,
                  background: !muted ? 'rgba(14, 165, 233, 0.15)' : 'rgba(0, 0, 0, 0.05)',
                  border: `2px solid ${!muted ? 'var(--kids-blue)' : 'transparent'}`,
                  borderRadius: '16px',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  color: !muted ? 'var(--kids-blue)' : 'var(--kids-text-muted)',
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />} Sound {muted ? 'OFF' : 'ON'}
              </button>
            </div>
          </div>

          {/* Account/Roster Details */}
          <div style={{ 
            borderTop: '1px solid var(--kids-border)', 
            paddingTop: '1.5rem',
            marginTop: '0.5rem'
          }}>
            {studentName ? (
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--kids-text-muted)', fontWeight: 800, marginBottom: '0.75rem' }}>
                  🎒 CLASSROOM ROSTER MEMBERSHIP
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  <div>Section ID: <span style={{ fontWeight: 800 }}>{sectionId}</span></div>
                  <div>Student ID: <span style={{ fontWeight: 800 }}>{studentId}</span></div>
                </div>
                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    background: 'rgba(239, 68, 68, 0.08)',
                    color: '#ef4444',
                    border: '1.5px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '16px',
                    padding: '0.75rem',
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s'
                  }}
                  className="btn-red-hover"
                >
                  <LogOut size={16} /> Logout from Class
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: 'var(--kids-text-muted)' }}>
                  Sign in with your classroom code to track progress with your teacher!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Link to="/class-login" style={{
                    background: 'var(--kids-blue)',
                    color: 'white',
                    padding: '0.75rem 1rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)'
                  }}>
                    <LogIn size={16} /> Class Login 🎒
                  </Link>
                  <a href="https://www.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{
                    background: 'var(--kids-orange)',
                    color: 'white',
                    padding: '0.75rem 1rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.2)'
                  }}>
                    Join Kone Academy 🚀
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Badges Column */}
        <div style={{
          background: 'var(--kids-surface)',
          borderRadius: '28px',
          padding: '2rem',
          border: '1px solid var(--kids-border)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <button
            onClick={() => {
              sounds.playWin();
              setShowCertificateModal(true);
            }}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
              border: 'none',
              color: '#0f172a',
              borderRadius: '18px',
              padding: '0.75rem 1rem',
              fontWeight: 900,
              fontSize: '0.95rem',
              cursor: 'pointer',
              marginBottom: '1rem',
              boxShadow: '0 6px 20px rgba(217, 119, 6, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <span>📜 Generate Official Certificate</span>
          </button>

          <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={22} style={{ color: 'var(--kids-orange)' }} /> Achievements
          </h2>
          <p style={{ margin: '0 0 1.5rem', fontSize: '0.9rem', color: 'var(--kids-text-muted)' }}>
            Trophy gallery of unlocked badges!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            overflowY: 'auto',
            maxHeight: '400px',
            paddingRight: '4px'
          }} className="custom-scrollbar">
            {badges.map(badge => (
              <div
                key={badge.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedBadge(badge);
                }}
                style={{
                  background: badge.unlocked ? 'rgba(14, 165, 233, 0.05)' : 'rgba(0,0,0,0.02)',
                  borderRadius: '20px',
                  padding: '1rem 0.5rem',
                  textAlign: 'center',
                  border: `1.5px solid ${badge.unlocked ? 'var(--kids-blue)' : 'var(--kids-border)'}`,
                  opacity: badge.unlocked ? 1 : 0.45,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="badge-grid-item"
              >
                <span style={{ fontSize: '2rem', marginBottom: '0.25rem', display: 'block' }}>{badge.icon}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--kids-text)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '100%' }}>
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedBadge && (
        <BadgeModal 
          badge={selectedBadge} 
          onClose={() => setSelectedBadge(null)} 
        />
      )}

      {showCertificateModal && (
        <CertificateModal
          isOpen={showCertificateModal}
          onClose={() => setShowCertificateModal(false)}
          defaultName={studentName || 'Junior Coder'}
        />
      )}

      {/* Network Links Footer */}
      <div style={{
        maxWidth: '800px',
        margin: '3rem auto 0',
        textAlign: 'center',
        borderTop: '1px solid var(--kids-border)',
        paddingTop: '2rem'
      }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--kids-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          OUR ACADEMIC NETWORK
        </span>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem 1.5rem',
          fontSize: '0.85rem',
          marginTop: '0.75rem'
        }}>
          <a href="https://code.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Code</a>
          <a href="https://lab.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Lab</a>
          <a href="https://farms.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Farms</a>
          <a href="https://shop.koneacademy.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--kids-text-muted)', textDecoration: 'none', fontWeight: 700 }}>Kone Shop</a>
        </div>
      </div>

      <style>{`
        .btn-red-hover:hover {
          background: rgba(239, 68, 68, 0.15) !important;
          border-color: #ef4444 !important;
        }
        .badge-grid-item:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--kids-border);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ProfileView;
