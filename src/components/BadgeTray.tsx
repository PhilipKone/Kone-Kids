import React, { useState } from 'react';
import { useGamification, Badge } from '../context/GamificationContext';
import BadgeModal from './BadgeModal';
import CertificateModal from './CertificateModal';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs';
import Award from 'lucide-react/dist/esm/icons/award.mjs';

const BadgeTray: React.FC = () => {
  const { badges } = useGamification();
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const unlockedCount = badges.filter(b => b.unlocked).length;
  const progressPercent = Math.round((unlockedCount / badges.length) * 100);

  return (
    <section className="badge-tray-section" style={{ padding: 'clamp(2.5rem, 8vw, 4.5rem) 5%', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(14, 165, 233, 0.12)',
            color: '#0284c7',
            padding: '0.35rem 0.9rem',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem'
          }}>
            <Award size={15} /> Gamified Milestones
          </div>

          <h2 style={{ color: 'var(--kids-dark)', margin: 0, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontFamily: "'Baloo 2', cursive", fontWeight: 800 }}>
            My Achievement Gallery 🏆
          </h2>
          <p style={{ color: 'var(--kids-text-muted)', marginTop: '0.5rem', fontSize: '1rem' }}>
            Click any badge to view its secret quest objective and unlock official certificates!
          </p>

          {/* Progress Tracker Pill */}
          <div style={{
            maxWidth: '380px',
            margin: '1.25rem auto 1rem',
            background: 'white',
            border: '1.5px solid #e2e8f0',
            borderRadius: '16px',
            padding: '0.6rem 1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', fontWeight: 800, marginBottom: '6px' }}>
              <span style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={14} className="text-amber-500" /> Quests Completed
              </span>
              <span style={{ color: 'var(--kids-blue)' }}>{unlockedCount} / {badges.length} ({progressPercent}%)</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{
                width: `${Math.max(progressPercent, 6)}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #0ea5e9 0%, #38bdf8 50%, #f59e0b 100%)',
                borderRadius: '10px',
                transition: 'width 0.5s ease-out'
              }} />
            </div>
          </div>

          <button
            onClick={() => setShowCertificateModal(true)}
            style={{
              marginTop: '0.75rem',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              border: 'none',
              color: '#0f172a',
              padding: '0.75rem 1.6rem',
              borderRadius: '16px',
              fontWeight: 900,
              fontSize: '0.95rem',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(245, 158, 11, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <span>📜 Generate Official Certificate</span>
          </button>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(1rem, 3vw, 1.75rem)',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {badges.map(badge => (
            <div 
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              className="badge-card-interactive group"
              style={{
                width: '100%',
                padding: 'clamp(1.25rem, 3vw, 1.75rem) 0.85rem',
                textAlign: 'center',
                borderRadius: '24px',
                background: badge.unlocked ? '#ffffff' : '#f8fafc',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                border: badge.unlocked ? '2.5px solid var(--kids-blue)' : '2px dashed #cbd5e1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {/* Top Unlocked / Quest Pill */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  background: badge.unlocked ? 'rgba(16, 185, 129, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                  color: badge.unlocked ? '#059669' : '#64748b'
                }}>
                  {badge.unlocked ? '✨ Earned' : '🔒 Quest'}
                </span>
              </div>

              <div style={{ 
                marginBottom: '0.75rem',
                fontSize: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70px',
                filter: badge.unlocked ? 'none' : 'grayscale(0.85)',
                opacity: badge.unlocked ? 1 : 0.8
              }}>
                {badge.icon.startsWith('/') || badge.icon.includes('http') ? (
                  <img 
                    src={badge.icon} 
                    alt={badge.name} 
                    width="70"
                    height="70"
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      objectFit: 'contain',
                      filter: badge.unlocked ? 'drop-shadow(0 5px 10px rgba(14, 165, 233, 0.2))' : 'none'
                    }} 
                  />
                ) : (
                  <span style={{ filter: badge.unlocked ? 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))' : 'none' }}>
                    {badge.icon}
                  </span>
                )}
              </div>

              <div>
                <h3 style={{ margin: '0 0 0.25rem', fontSize: '1rem', color: '#0f172a', lineHeight: '1.2', fontWeight: 800, fontFamily: "'Baloo 2', cursive" }}>
                  {badge.name}
                </h3>
                <p style={{ margin: '0 0 0.5rem', fontSize: '0.78rem', color: '#64748b', lineHeight: '1.3', fontWeight: 500 }}>
                  {badge.unlocked ? 'Mission Complete!' : badge.description}
                </p>
              </div>

              <div style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                color: badge.unlocked ? 'var(--kids-blue)' : '#f97316',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                marginTop: 'auto'
              }}>
                <span>{badge.unlocked ? 'View Certificate →' : 'View Quest →'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .badge-card-interactive {
          transform: scale(1);
        }
        .badge-card-interactive:hover {
          transform: translateY(-4px) scale(1.02) !important;
          box-shadow: 0 14px 28px rgba(14, 165, 233, 0.15) !important;
          border-color: var(--kids-orange) !important;
        }
      `}</style>

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
        />
      )}
    </section>
  );
};

export default BadgeTray;
