import React from 'react';
import { useGamification } from '../context/GamificationContext';

interface CertificatePreviewProps {
  pathway: string;
  studentName?: string;
  date?: string;
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({ 
  pathway, 
  studentName = "Future Engineer", 
  date = new Date().toLocaleDateString() 
}) => {
  return (
    <div className="certificate-frame" style={{
      width: '100%',
      maxWidth: '800px',
      aspectRatio: '1.414/1',
      background: 'white',
      padding: '40px',
      position: 'relative',
      border: '20px solid #1e293b',
      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
      fontFamily: '"Cinzel", serif',
      color: '#1e293b',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      {/* Decorative Border */}
      <div style={{
        position: 'absolute',
        inset: '10px',
        border: '2px solid #fbbf24',
        pointerEvents: 'none'
      }} />

      {/* Watermark Logo */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-30deg)',
        fontSize: '10rem',
        opacity: 0.03,
        fontWeight: 900,
        zIndex: 0,
        whiteSpace: 'nowrap'
      }}>
        KONE KIDS ACADEMY
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <header>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '4px', color: '#fbbf24', marginBottom: '10px' }}>
            CERTIFICATE OF ACHIEVEMENT
          </div>
          <div style={{ width: '60px', height: '4px', background: '#fbbf24', margin: '0 auto' }} />
        </header>

        <main>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', margin: '20px 0' }}>This is to certify that</p>
          <h1 style={{ 
            fontSize: '3.5rem', 
            margin: '10px 0', 
            fontFamily: '"Playfair Display", serif',
            borderBottom: '2px solid #e2e8f0',
            display: 'inline-block',
            padding: '0 40px'
          }}>
            {studentName}
          </h1>
          <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
            has successfully completed the specialized program in
          </p>
          <h2 style={{ fontSize: '2.2rem', color: '#0ea5e9', fontWeight: 800 }}>
            {pathway.toUpperCase()}
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '500px', margin: '15px auto' }}>
            Demonstrating exceptional proficiency in logic, algorithmic thinking, and creative problem solving within the Kone Kids Ecosystem.
          </p>
        </main>

        <footer style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', paddingBottom: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: '"Sacramento", cursive', fontSize: '1.8rem', borderBottom: '1px solid #1e293b', width: '150px' }}>
              Philip Kone
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '5px' }}>CHIEF INSTRUCTOR</div>
          </div>

          <div style={{
            width: '100px',
            height: '100px',
            background: '#fbbf24',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: 900,
            border: '4px double white',
            boxShadow: '0 0 0 4px #fbbf24',
            textAlign: 'center',
            transform: 'rotate(-15deg)'
          }}>
            OFFICIAL<br/>KONE SEAL<br/>2026
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', borderBottom: '1px solid #1e293b', width: '150px' }}>
              {date}
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '5px' }}>DATE ISSUED</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CertificatePreview;
