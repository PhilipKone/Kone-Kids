import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EnrollmentModal from './EnrollmentModal'
import KidsIDE from './KidsIDE'

interface ProgramDetailsProps {
  title: string
  image: string
  description: string
  accentColor?: string
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ title, image, description, accentColor = 'var(--kids-orange)' }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isCodingProgram = title === 'Mission Lab' || title === 'Coding 4 Kids'

  return (
    <div className="program-details-page" style={{ 
      padding: 'clamp(1.5rem, 6vw, 4rem) 5%', 
      minHeight: '100vh', 
      background: 'var(--kids-dark)',
      color: 'white'
    }}>
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
          onClick={() => navigate(-1)}
          className="kids-button"
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', boxShadow: 'none', padding: '0.8rem 1.5rem', fontSize: '1.1rem' }}
        >
          ← Back to Map
        </button>
        <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 8vw, 3rem)', color: accentColor }}>{title}</h1>
      </div>

      {/* Description Content */}
      <div className="container animate-fade-in-up" style={{ maxWidth: '1200px', animationDelay: '0.4s' }}>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6', 
          color: 'rgba(255,255,255,0.7)',
          fontFamily: 'Nunito, sans-serif',
          marginBottom: '2rem'
        }}>
          {description}
        </p>

        {/* Kids IDE for Missions */}
        <KidsIDE />
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <button 
            className="kids-button" 
            style={{ 
              background: accentColor, 
              boxShadow: `0 8px 0 ${accentColor}aa`
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Enroll for Certificate
          </button>
        </div>
      </div>
    </div>
  )
}


export default ProgramDetails
