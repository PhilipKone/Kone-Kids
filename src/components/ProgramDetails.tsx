import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EnrollmentModal from './EnrollmentModal'

interface ProgramDetailsProps {
  title: string
  image: string
  description: string
  accentColor?: string
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ title, image, description, accentColor = 'var(--kids-orange)' }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="program-details-page" style={{ padding: '2rem 5%', minHeight: '100vh', background: 'white' }}>
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} programTitle={title} />
      
      {/* Header with Back button */}
      <div className="container animate-fade-in-up" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 'clamp(1rem, 4vw, 2rem)', 
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => navigate('/')}
          className="kids-button"
          style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem' }}
        >
          ← Back
        </button>
        <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 8vw, 3rem)', color: accentColor }}>{title}</h1>
      </div>

      {/* Program Image with Precise Footer Crop & Premium Polish */}
      <div className="animate-float glass-card" style={{ 
        width: '100%', 
        maxWidth: '900px', 
        margin: '0 auto 3rem',
        borderRadius: 'clamp(16px, 4vw, 32px)',
        overflow: 'hidden', 
        border: 'clamp(4px, 2vw, 12px) solid white',
        boxShadow: `0 30px 60px -12px rgba(0,0,0,0.2), 0 0 40px ${accentColor}15`,
        animationDelay: '0.2s'
      }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '100%', 
            display: 'block',
            clipPath: 'inset(0 0 15.78% 0)',
            marginBottom: '-14%'
          }} 
        />
      </div>

      {/* Description Content */}
      <div className="container animate-fade-in-up" style={{ maxWidth: '800px', textAlign: 'center', animationDelay: '0.4s' }}>
        <p style={{ 
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', 
          lineHeight: '1.6', 
          color: '#475569',
          fontFamily: 'Nunito, sans-serif'
        }}>
          {description}
        </p>
        
        <div style={{ marginTop: '3rem' }}>
          <button 
            className="kids-button" 
            style={{ 
              background: accentColor, 
              boxShadow: `0 10px 0 ${accentColor}cc`,
              width: window.innerWidth < 768 ? '100%' : 'auto'
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProgramDetails
