import React from 'react';
import { useGamification } from '../context/GamificationContext';

const BadgeTray: React.FC = () => {
  const { badges } = useGamification();

  return (
    <section className="badge-tray-section" style={{ padding: '3rem 5%', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--kids-dark)', margin: 0 }}>My Achievement Gallery 🏆</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Collect them all as you explore the future!</p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '2rem' 
        }}>
          {badges.map(badge => (
            <div 
              key={badge.id}
              className="glass-card"
              style={{
                width: '180px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                borderRadius: '24px',
                background: badge.unlocked ? 'white' : 'rgba(255,255,255,0.4)',
                filter: badge.unlocked ? 'none' : 'grayscale(1)',
                opacity: badge.unlocked ? 1 : 0.6,
                transform: badge.unlocked ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                border: badge.unlocked ? '3px solid var(--kids-blue)' : '2px dashed #cbd5e1'
              }}
            >
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <img 
                  src={badge.icon} 
                  alt={badge.name} 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    objectFit: 'contain',
                    filter: badge.unlocked ? 'drop-shadow(0 5px 10px rgba(14, 165, 233, 0.2))' : 'none'
                  }} 
                />
              </div>
              <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: 'var(--kids-dark)' }}>{badge.name}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', lineHeight: '1.4' }}>
                {badge.unlocked ? 'Mission Complete!' : badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgeTray;
