import React, { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/sounds';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultName?: string;
  defaultPathway?: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  defaultName = 'Junior Coder',
  defaultPathway = 'Visual Block Coding'
}) => {
  const [studentName, setStudentName] = useState(defaultName);
  const [pathway, setPathway] = useState(defaultPathway);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const PATHWAYS = [
    'Visual Block Coding (Scratch)',
    'Robotics & Hardware Control',
    'Artificial Intelligence & ML',
    'Game Development & Physics',
    'Full-Stack Junior Engineering'
  ];

  const renderCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1200;
    const height = 850;
    canvas.width = width;
    canvas.height = height;

    // 1. Background Fill (Dark Luxury Navy Gradient)
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#0b0f19');
    bgGradient.addColorStop(0.5, '#0f172a');
    bgGradient.addColorStop(1, '#1e293b');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Outer Gold Double Border Frame
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 12;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 3;
    ctx.strokeRect(45, 45, width - 90, height - 90);

    // Corner Ornaments
    const drawCorner = (x: number, y: number) => {
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);

    // 3. Academy Header Logo & Title
    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 24px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🚀 KONE KIDS CODE ACADEMY', width / 2, 110);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 44px "Outfit", sans-serif';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', width / 2, 175);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 20px "Outfit", sans-serif';
    ctx.fillText('THIS IS PROUDLY PRESENTED TO', width / 2, 230);

    // 4. Student Name (Golden Highlighted Serif)
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 56px "Outfit", sans-serif';
    ctx.fillText(studentName || 'Junior Coder', width / 2, 315);

    // Decorative Underline
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 250, 340);
    ctx.lineTo(width / 2 + 250, 340);
    ctx.stroke();

    // 5. Pathway Citation
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 22px "Outfit", sans-serif';
    ctx.fillText('For successfully demonstrating mastery and completing the comprehensive coursework in', width / 2, 400);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 32px "Outfit", sans-serif';
    ctx.fillText(pathway, width / 2, 455);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '400 18px "Outfit", sans-serif';
    ctx.fillText('Empowered to create, innovate, and shape the digital future with code & robotics.', width / 2, 510);

    // 6. Seal Emblem (Gold Circle Badge)
    const sealX = 220;
    const sealY = 670;
    ctx.beginPath();
    ctx.arc(sealX, sealY, 55, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251, 191, 36, 0.15)';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#fbbf24';
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 36px "Outfit", sans-serif';
    ctx.fillText('🏆', sealX, sealY + 12);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '800 12px "Outfit", sans-serif';
    ctx.fillText('OFFICIAL SEAL', sealX, sealY + 75);

    // 7. Signature & Date Section
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const certId = `KCA-${Date.now().toString().slice(-6)}`;

    // Date
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 18px "Outfit", sans-serif';
    ctx.fillText(dateStr, width / 2, 660);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 100, 675);
    ctx.lineTo(width / 2 + 100, 675);
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 14px "Outfit", sans-serif';
    ctx.fillText('DATE ISSUED', width / 2, 695);

    // Signature
    const sigX = width - 220;
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'italic 900 28px "Outfit", sans-serif';
    ctx.fillText('Philip Kone', sigX, 655);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(sigX - 100, 675);
    ctx.lineTo(sigX + 100, 675);
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 14px "Outfit", sans-serif';
    ctx.fillText('ACADEMY DIRECTOR', sigX, 695);

    // Serial ID Footer
    ctx.fillStyle = '#64748b';
    ctx.font = '600 13px "Outfit", sans-serif';
    ctx.fillText(`VERIFIED ID: ${certId} • KONE KIDS ACADEMY`, width / 2, 785);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(renderCertificate, 100);
    }
  }, [isOpen, studentName, pathway]);

  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playWin();
    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = image;
    a.download = `kone-kids-certificate-${studentName.toLowerCase().replace(/\s+/g, '-')}.png`;
    a.click();
  };

  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playSuccess();
    const dataUrl = canvas.toDataURL('image/png');
    const windowContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Certificate - ${studentName}</title>
          <style>
            @page { size: landscape; margin: 0; }
            body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #000; }
            img { max-width: 100%; max-height: 100vh; object-fit: contain; }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <img src="${dataUrl}" />
        </body>
      </html>
    `;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(windowContent);
      printWindow.document.close();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(12px)',
      zIndex: 2500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        background: '#0f172a',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '24px',
        maxWidth: '900px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '1.5rem',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
        position: 'relative'
      }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
          <div>
            <h3 style={{ margin: 0, color: 'white', fontSize: '1.4rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🏆 Official Student Certificate
            </h3>
            <p style={{ margin: '0.2rem 0 0', color: '#94a3b8', fontSize: '0.85rem' }}>
              Personalize, print, or download your official Kone Kids Academy Certificate!
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              color: 'white',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 900
            }}
          >
            ✕
          </button>
        </div>

        {/* Customization Inputs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
          <div>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.3rem' }}>
              👤 Student Full Name:
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter student name..."
              style={{
                width: '100%',
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '10px',
                padding: '0.6rem 0.8rem',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 700,
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.3rem' }}>
              🎓 Completed Pathway:
            </label>
            <select
              value={pathway}
              onChange={(e) => setPathway(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '10px',
                padding: '0.6rem 0.8rem',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {PATHWAYS.map(p => (
                <option key={p} value={p} style={{ background: '#0f172a', color: 'white' }}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Certificate Preview Frame */}
        <div style={{
          background: '#000',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '1.2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        }}>
          <canvas
            ref={canvasRef}
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end' }}>
          <button
            onClick={handlePrint}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'white',
              borderRadius: '12px',
              padding: '0.7rem 1.2rem',
              cursor: 'pointer',
              fontSize: '0.88rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            🖨️ Print Certificate
          </button>

          <button
            onClick={handleDownloadPNG}
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              border: 'none',
              color: 'white',
              borderRadius: '12px',
              padding: '0.7rem 1.4rem',
              cursor: 'pointer',
              fontSize: '0.88rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
            }}
          >
            📥 Download Certificate (PNG)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
