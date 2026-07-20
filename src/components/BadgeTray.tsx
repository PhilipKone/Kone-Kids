import React, { useState } from 'react';
import { useGamification, Badge } from '../context/GamificationContext';
import BadgeModal from './BadgeModal';
import CertificateModal from './CertificateModal';

const BadgeTray: React.FC = () => {
  const { badges } = useGamification();
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section className="badge-tray-section" style={{ padding: 'clamp(2rem, 8vw, 4rem) 5%', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--kids-dark)', margin: 0 }}>My Achievement Gallery 🏆</h2>
          <p style={{ color: 'var(--kids-text-muted)', marginTop: '0.5rem' }}>Collect them all as you explore the future!</p>
          <button
            onClick={() => setShowCertificateModal(true)}
            style={{
              marginTop: '1rem',
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
          gap: 'clamp(1rem, 3vw, 2rem)',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {badges.map(badge => (
            <div 
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              className="badge-card-interactive"
              style={{
                width: '100%',
                padding: 'clamp(1.5rem, 4vw, 2rem) 1rem',
                textAlign: 'center',
                borderRadius: '24px',
                background: badge.unlocked ? 'white' : 'rgba(255,255,255,0.4)',
                filter: badge.unlocked ? 'none' : 'grayscale(1)',
                opacity: badge.unlocked ? 1 : 0.6,
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                border: badge.unlocked ? '3px solid var(--kids-blue)' : '2px dashed #cbd5e1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                marginBottom: '1rem',
                fontSize: '3.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80px'
              }}>
                {badge.icon.startsWith('/') || badge.icon.includes('http') ? (
                  <img 
                    src={badge.icon} 
                    alt={badge.name} 
                    width="80"
                    height="80"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      objectFit: 'contain',
                      filter: badge.unlocked ? 'drop-shadow(0 5px 10px rgba(14, 165, 233, 0.2))' : 'none'
                    }} 
                  />
                ) : (
                  <span style={{ filter: badge.unlocked ? 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))' : 'grayscale(1)' }}>
                    {badge.icon}
                  </span>
                )}
              </div>
              <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--kids-dark)', lineHeight: '1.2' }}>{badge.name}</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--kids-text-muted)', lineHeight: '1.3' }}>
                {badge.unlocked ? 'Mission Complete!' : badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .badge-card-interactive {
          transform: scale(1);
        }
        .badge-card-interactive:hover {
          transform: scale(1.05) !important;
          box-shadow: 0 12px 30px rgba(14, 165, 233, 0.18) !important;
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
