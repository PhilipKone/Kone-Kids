import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useGamification } from '../context/GamificationContext'
import Mascot from './Mascot'

interface EnrollmentModalProps {
  isOpen: boolean
  onClose: () => void
  programTitle?: string
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, programTitle = '' }) => {
  const { unlockBadge } = useGamification()
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    age: '',
    program: programTitle || 'General Inquiry'
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const SERVICE_ID = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.parentName,
          student_name: formData.studentName,
          email: formData.email,
          age: formData.age,
          program: formData.program
        },
        PUBLIC_KEY
      )
      setStatus('success')
      unlockBadge('future_hero') // Award badge on success!
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1000 }}>
      <div 
        className="modal-content glass-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="modal-close-btn"
          style={{ 
            position: 'absolute', top: '25px', right: '25px', 
            background: '#f1f5f9', border: 'none', width: '40px', height: '40px', 
            borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer',
            color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 10
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#e2e8f0')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#f1f5f9')}
        >
          ✕
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Mascot />
            </div>
            <h2 style={{ color: 'var(--kids-blue)', margin: '1rem 0', fontSize: 'clamp(1.8rem, 6vw, 2.5rem)' }}>Welcome, Hero! 🚀</h2>
            <p style={{ color: '#475569', maxWidth: '400px', margin: '0 auto' }}>
              Your mission starts here! A Kone Academy representative will contact you soon to begin your journey.
            </p>
            <button className="kids-button" style={{ marginTop: '2.5rem', width: '100%' }} onClick={onClose}>
              Let's Go! 🎮
            </button>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '0.5rem', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 6vw, 2.4rem)' }}>
                Join the <span style={{ color: 'var(--kids-orange)' }}>Mission</span>
              </h2>
              <p style={{ color: '#64748b' }}>Ready to build the physical and digital future? 🤖✨</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>👤</span> What is your name (Parent/Guardian)?
                </label>
                <input 
                  type="text" required className="kids-input" 
                  placeholder="e.g. Ama Kone"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  style={{ borderRadius: '16px', padding: '1rem 1.25rem' }}
                />
              </div>

              <div className="input-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>✨</span> My Future Tech Leader's Name is...
                </label>
                <input 
                  type="text" required className="kids-input" 
                  placeholder="Child's full name"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  style={{ borderRadius: '16px', padding: '1rem 1.25rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div className="input-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>📧</span> Email Address
                  </label>
                  <input 
                    type="email" required className="kids-input" 
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>🎂</span> Student Age
                  </label>
                  <input 
                    type="number" required className="kids-input" 
                    placeholder="e.g. 8"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                  />
                </div>
              </div>

              <div className="input-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🎯</span> I'm Interested In...
                </label>
                <select 
                  className="kids-input"
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                  style={{ borderRadius: '16px', padding: '1rem 1.25rem' }}
                >
                  <option value="General">General Inquiry</option>
                  <option value="Coding 4 Kids">Coding 4 Kids</option>
                  <option value="Robotics 4 Kids">Robotics 4 Kids</option>
                  <option value="AI 4 Kids">AI 4 Kids</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="kids-button" 
                style={{ 
                  width: '100%', 
                  marginTop: '1.5rem', 
                  background: 'var(--kids-blue)',
                  boxShadow: '0 10px 0 #0369a1'
                }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Transmitting Mission Data...' : 'Launch Mission! 🚀'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#ef4444', marginTop: '1.5rem', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>
                  ✕ Oops! Signal lost. Please try again!
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default EnrollmentModal
