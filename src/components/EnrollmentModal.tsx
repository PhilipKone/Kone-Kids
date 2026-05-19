import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useGamification } from '../context/GamificationContext'
import Mascot from './Mascot'
import CertificatePreview from './CertificatePreview'

interface EnrollmentModalProps {
  isOpen: boolean
  onClose: () => void
  programTitle?: string
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, programTitle = '' }) => {
  const { unlockBadge } = useGamification()
  const [isMobile] = useState(window.innerWidth < 768)
  const [inquiryType, setInquiryType] = useState<'parent' | 'school'>('parent')
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    age: '',
    program: programTitle || 'Coding 4 Kids'
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
          program: `${inquiryType.toUpperCase()}: ${formData.program}`
        },
        PUBLIC_KEY
      )
      setStatus('success')
      if (inquiryType === 'parent') {
        unlockBadge('future_hero') // Award badge on success for kids!
      }
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
        style={{
          borderTop: inquiryType === 'school' ? '8px solid var(--kids-orange)' : '8px solid var(--kids-blue)',
          padding: '2.5rem 2rem'
        }}
      >
        <button 
          onClick={onClose}
          className="modal-close-btn"
          style={{ 
            position: 'absolute', top: isMobile ? '15px' : '25px', right: isMobile ? '15px' : '25px', 
            background: 'var(--kids-bg)', border: '1px solid var(--kids-border)', width: '36px', height: '36px', 
            borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer',
            color: 'var(--kids-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 10
          }}
        >
          ✕
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Mascot />
            </div>
            <h2 style={{ color: inquiryType === 'school' ? 'var(--kids-orange)' : 'var(--kids-blue)', margin: '1rem 0', fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontFamily: "'Baloo 2', cursive", fontWeight: 800 }}>
              {inquiryType === 'school' ? 'Let\'s Partner! 🏫' : 'Welcome, Hero! 🚀'}
            </h2>
            <p style={{ color: '#475569', maxWidth: '400px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
              {inquiryType === 'school' 
                ? 'Your partnership inquiry has been successfully received. A Kone Academy School Partnership specialist will reach out shortly to plan your Live Lab Demo!' 
                : 'Your mission starts here! A Kone Academy representative will contact you soon to begin your home tutoring journey.'}
            </p>
            <button 
              className="kids-button" 
              style={{ 
                marginTop: '2.5rem', 
                width: '100%',
                background: inquiryType === 'school' ? 'var(--kids-orange)' : 'var(--kids-blue)',
                boxShadow: inquiryType === 'school' ? '0 4px 0 #9a3412' : '0 4px 0 #0369a1'
              }} 
              onClick={onClose}
            >
              Great! 👍
            </button>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ 
                marginBottom: '0.5rem', 
                fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
                fontFamily: "'Baloo 2', cursive",
                fontWeight: 800
              }}>
                Join the <span style={{ color: 'var(--kids-orange)' }}>Mission</span>
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Ready to build the physical and digital future? 🤖✨</p>
            </div>

            {/* Segment Toggle */}
            <div style={{ 
              display: 'flex', 
              background: '#f1f5f9', 
              borderRadius: '30px', 
              padding: '0.25rem',
              maxWidth: '320px',
              margin: '0 auto 2rem',
              border: '1px solid #e2e8f0'
            }}>
              <button
                type="button"
                onClick={() => {
                  setInquiryType('parent');
                  setFormData({
                    ...formData,
                    program: 'Coding 4 Kids'
                  });
                }}
                style={{
                  flex: 1,
                  background: inquiryType === 'parent' ? 'white' : 'transparent',
                  color: inquiryType === 'parent' ? 'var(--kids-blue)' : '#64748b',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: inquiryType === 'parent' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 0.2s',
                  fontFamily: "'Baloo 2', cursive"
                }}
              >
                🏠 Home Tutoring
              </button>
              <button
                type="button"
                onClick={() => {
                  setInquiryType('school');
                  setFormData({
                    ...formData,
                    program: 'School ICT Partnership'
                  });
                }}
                style={{
                  flex: 1,
                  background: inquiryType === 'school' ? 'white' : 'transparent',
                  color: inquiryType === 'school' ? 'var(--kids-orange)' : '#64748b',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: inquiryType === 'school' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 0.2s',
                  fontFamily: "'Baloo 2', cursive"
                }}
              >
                🏫 School Demo
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group" style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span>👤</span> {inquiryType === 'parent' ? 'What is your name (Parent/Guardian)?' : 'Your Name & Role (e.g. Principal)'}
                </label>
                <input 
                  type="text" required className="kids-input" 
                  placeholder={inquiryType === 'parent' ? 'e.g. Ama Kone' : 'e.g. Kojo Mensah (Director)'}
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  style={{ borderRadius: '16px', padding: '0.9rem 1.25rem', fontSize: '1rem', width: '100%', boxSizing: 'border-box' }}
                />
              </div>

              <div className="input-group" style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span>{inquiryType === 'parent' ? '✨' : '🏫'}</span> {inquiryType === 'parent' ? "My Future Tech Leader's Name is..." : 'School Name'}
                </label>
                <input 
                  type="text" required className="kids-input" 
                  placeholder={inquiryType === 'parent' ? "Child's full name" : "e.g. Ridge International School"}
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  style={{ borderRadius: '16px', padding: '0.9rem 1.25rem', fontSize: '1rem', width: '100%', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.25rem'
              }}>
                <div className="input-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <span>📧</span> Email Address
                  </label>
                  <input 
                    type="email" required className="kids-input" 
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ borderRadius: '16px', padding: '0.9rem 1.25rem', fontSize: '1rem', width: '100%', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="input-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <span>{inquiryType === 'parent' ? '🎂' : '👥'}</span> {inquiryType === 'parent' ? 'Student Age' : 'Approximate Students'}
                  </label>
                  <input 
                    type="number" required className="kids-input" 
                    placeholder={inquiryType === 'parent' ? 'e.g. 8' : 'e.g. 150'}
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    style={{ borderRadius: '16px', padding: '0.9rem 1.25rem', fontSize: '1rem', width: '100%', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span>🎯</span> {inquiryType === 'parent' ? "I'm Interested In..." : 'Proposed Partnership...'}
                </label>
                <select 
                  className="kids-input"
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                  style={{ borderRadius: '16px', padding: '0.9rem 1.25rem', fontSize: '1.05rem', fontFamily: "'Baloo 2', cursive", fontWeight: 700, width: '100%', boxSizing: 'border-box' }}
                >
                  {inquiryType === 'parent' ? (
                    <>
                      <option value="Coding 4 Kids">Coding 4 Kids</option>
                      <option value="Robotics 4 Kids">Robotics 4 Kids</option>
                      <option value="AI 4 Kids">AI 4 Kids</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </>
                  ) : (
                    <>
                      <option value="School ICT Partnership">School ICT Curriculum &amp; Partnership</option>
                      <option value="Coding & Robotics Club Setup">Coding &amp; Robotics Club Creation</option>
                      <option value="ICT Lab Hardware Infrastructure">ICT Lab Hardware Infrastructure</option>
                      <option value="General School Inquiry">General School Partnership Inquiry</option>
                    </>
                  )}
                </select>
              </div>

              <button 
                type="submit" 
                className="kids-button pulse-neon" 
                style={{ 
                  width: '100%', 
                  marginTop: '0.5rem', 
                  background: inquiryType === 'school' ? 'var(--kids-orange)' : 'var(--kids-blue)',
                  boxShadow: inquiryType === 'school' ? '0 4px 0 #9a3412' : '0 4px 0 #0369a1',
                  minHeight: '42px',
                  fontSize: '1rem',
                  padding: '0.75rem 1rem',
                  fontFamily: "'Baloo 2', cursive"
                }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Transmitting Mission Data...' : inquiryType === 'school' ? 'Schedule Free School Demo! 🏫' : 'Launch Home Mission! 🚀'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#ef4444', marginTop: '1.5rem', textAlign: 'center', fontSize: '0.95rem', fontWeight: 600 }}>
                  ✕ Oops! Signal lost. Please check connection and try again!
                </p>
              )}
            </form>

            {/* Certificate Preview Section (Only for parents) */}
            {inquiryType === 'parent' && (formData.studentName || formData.program) && (
              <div style={{ marginTop: isMobile ? '2rem' : '2.5rem', borderTop: '1px solid var(--kids-border)', paddingTop: '1.5rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--kids-text-muted)', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 800 }}>
                  PREVIEW YOUR FUTURE CERTIFICATE
                </h3>
                <div style={{ 
                  transform: `scale(${isMobile ? 0.35 : 0.6})`, 
                  transformOrigin: 'top center',
                  margin: '0 auto',
                  width: 'fit-content',
                  height: isMobile ? '130px' : '260px', 
                  maxWidth: '100%',
                  overflow: 'visible'
                }}>
                  <CertificatePreview 
                    pathway={formData.program} 
                    studentName={formData.studentName || 'Future Engineer'} 
                  />
                </div>
                <p style={{ textAlign: 'center', marginTop: isMobile ? '0.5rem' : '1rem', color: 'var(--kids-text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
                  Earn this official signed certificate!
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default EnrollmentModal
