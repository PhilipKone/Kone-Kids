import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EnrollmentModal from './EnrollmentModal'
import KidsIDE from './KidsIDE'

interface ProgramDetailsProps {
  title: string
  image?: string
  description?: string
  accentColor?: string
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ title, accentColor = 'var(--kids-orange)' }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        justifyContent: 'space-between',
        gap: '1rem', 
        marginBottom: '2.5rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            onClick={() => navigate(-1)}
            className="kids-button"
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              boxShadow: 'none', 
              padding: '0.6rem 1.2rem', 
              fontSize: '1rem',
              minHeight: '40px'
            }}
          >
            ← Back
          </button>
          <h1 style={{ margin: 0, fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', color: accentColor }}>{title}</h1>
        </div>
      </div>

      {/* Kids IDE for Missions */}
      <div className="container animate-fade-in-up" style={{ maxWidth: '1200px', animationDelay: '0.2s' }}>
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

