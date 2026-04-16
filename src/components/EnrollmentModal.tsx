import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

interface EnrollmentModalProps {
  isOpen: boolean
  onClose: () => void
  programTitle?: string
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, programTitle = '' }) => {
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
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content glass-card" 
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'white', padding: '2.5rem' }}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', top: '20px', right: '20px', 
            background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer',
            color: '#64748b'
          }}
        >
          ✕
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--kids-blue)' }}>Yay! 🚀</h2>
            <p style={{ fontSize: '1.2rem', color: '#475569', marginTop: '1rem' }}>
              We've received your inquiry. A Kone Academy representative will contact you shortly!
            </p>
            <button className="kids-button" style={{ marginTop: '2rem' }} onClick={onClose}>
              Awesome!
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Join the <span style={{ color: 'var(--kids-orange)' }}>Mission</span></h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>Fill in the details below to start the journey.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Parent Name</label>
                <input 
                  type="text" required className="kids-input" 
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                />
              </div>
              <div className="input-group">
                <label>Student Name</label>
                <input 
                  type="text" required className="kids-input" 
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="input-group">
                  <label>Email</label>
                  <input 
                    type="email" required className="kids-input" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input 
                    type="number" required className="kids-input" 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                  />
                </div>
              </div>
              <div className="input-group">
                <label>Program Interest</label>
                <select 
                  className="kids-input"
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
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
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending Mission Data...' : 'Enroll Now!'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                  Oops! Something went wrong. Please try again later.
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
