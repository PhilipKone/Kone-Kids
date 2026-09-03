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

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div className="program-details-page" style={{ 
      height: '100vh', 
      width: '100vw',
      background: 'transparent',
      color: 'white',
      padding: 0,
      overflow: 'hidden'
    }}>
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} programTitle={title} />
      
      {/* Kids IDE for Missions */}
      <div style={{ width: '100%', height: '100%' }}>
        <KidsIDE />
      </div>
    </div>
  )
}


export default ProgramDetails

