import React, { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/sounds';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultName?: string;
  defaultPathway?: string;
}

export type CertificateTier = 'Explorer' | 'Junior Developer' | 'Master Engineer';

const PATHWAYS: Record<string, string[]> = {
  'Visual Block Coding (Scratch)': ['Visual Algorithms', 'Event Triggers', 'Sprite Physics', 'Broadcast Logic'],
  'Robotics & Hardware Control': ['Microcontroller Firmware', 'Sensor Telemetry', 'Motor Control', 'Hardware I/O'],
  'Artificial Intelligence & ML': ['Neural Prompting', 'Computer Vision', 'Data Classification', 'Ethical AI'],
  'Game Development & Physics': ['Collision Vectors', 'State Machines', 'Frame Loops', 'Sound FX Sync'],
  'Full-Stack Junior Engineering': ['DOM Architecture', 'Reactive State', 'REST APIs', 'Cloud Sync']
};

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  defaultName = 'Junior Coder',
  defaultPathway = 'Visual Block Coding (Scratch)'
}) => {
  const [studentName, setStudentName] = useState(defaultName);
  const [pathway, setPathway] = useState(defaultPathway);
  const [tier, setTier] = useState<CertificateTier>('Master Engineer');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1200;
    const height = 850;
    canvas.width = width;
    canvas.height = height;

    // 1. Background Fill (Luxury Dark Navy Gradient with subtle radial glow)
    const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, 700);
    bgGradient.addColorStop(0, '#0f172a');
    bgGradient.addColorStop(0.6, '#0b0f19');
    bgGradient.addColorStop(1, '#05070d');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Outer Gold Double Border Frame with Corner Jewels
    const goldPrimary = tier === 'Master Engineer' ? '#fbbf24' : tier === 'Junior Developer' ? '#38bdf8' : '#34d399';
    const goldSecondary = tier === 'Master Engineer' ? '#d97706' : tier === 'Junior Developer' ? '#0284c7' : '#059669';

    ctx.strokeStyle = goldPrimary;
    ctx.lineWidth = 10;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = goldSecondary;
    ctx.lineWidth = 3;
    ctx.strokeRect(45, 45, width - 90, height - 90);

    // Corner Ornaments
    const drawCorner = (x: number, y: number) => {
      ctx.fillStyle = goldPrimary;
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);

    // 3. Academy Header Logo & Tier Badge
    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 22px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🚀 KONE CODE ACADEMY • STEM FOUNDATION', width / 2, 95);

    // Tier Pill Badge
    ctx.fillStyle = tier === 'Master Engineer' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(56, 189, 248, 0.2)';
    ctx.beginPath();
    ctx.roundRect(width / 2 - 130, 115, 260, 32, 16);
    ctx.fill();
    ctx.strokeStyle = goldPrimary;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = goldPrimary;
    ctx.font = '800 14px "Outfit", sans-serif';
    ctx.fillText(`★ TIER ${tier.toUpperCase()} ★`, width / 2, 136);

    // Main Certificate Header
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 42px "Outfit", sans-serif';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', width / 2, 195);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 18px "Outfit", sans-serif';
    ctx.fillText('THIS IS PROUDLY CONFERRED UPON', width / 2, 235);

    // 4. Student Name (Golden Highlighted Serif)
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 52px "Outfit", sans-serif';
    ctx.fillText(studentName || 'Junior Coder', width / 2, 305);

    // Decorative Gold Underline
    ctx.strokeStyle = goldPrimary;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 220, 325);
    ctx.lineTo(width / 2 + 220, 325);
    ctx.stroke();

    // 5. Pathway Citation
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 20px "Outfit", sans-serif';
    ctx.fillText('For exceptional problem-solving, code mastery, and creative project development in', width / 2, 370);

    ctx.fillStyle = goldPrimary;
    ctx.font = '900 30px "Outfit", sans-serif';
    ctx.fillText(pathway, width / 2, 415);

    // 6. Mastered STEM Superpowers (Pill Badges)
    const powers = PATHWAYS[pathway] || ['Logic Gates', 'Algorithms', 'Debugging', 'Creation'];
    const startX = width / 2 - (powers.length * 150) / 2 + 20;
    
    powers.forEach((power, idx) => {
      const px = startX + idx * 150;
      const py = 465;
      
      // Pill Background
      ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
      ctx.beginPath();
      ctx.roundRect(px, py, 140, 32, 16);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Pill Text
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '700 12px "Outfit", sans-serif';
      ctx.fillText(`⚡ ${power}`, px + 70, py + 20);
    });

    // 7. Gold Holographic Seal Emblem
    const sealX = 220;
    const sealY = 660;
    ctx.beginPath();
    ctx.arc(sealX, sealY, 52, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251, 191, 36, 0.15)';
    ctx.fill();
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = goldPrimary;
    ctx.stroke();

    ctx.fillStyle = goldPrimary;
    ctx.font = '900 32px "Outfit", sans-serif';
    ctx.fillText('🏆', sealX, sealY + 10);

    ctx.fillStyle = goldPrimary;
    ctx.font = '800 11px "Outfit", sans-serif';
    ctx.fillText('KONE VERIFIED SEAL', sealX, sealY + 68);

    // 8. Signature & Date Section
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const certId = `KCA-${Date.now().toString().slice(-6)}`;

    // Date
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 16px "Outfit", sans-serif';
    ctx.fillText(dateStr, width / 2, 650);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 90, 665);
    ctx.lineTo(width / 2 + 90, 665);
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 13px "Outfit", sans-serif';
    ctx.fillText('DATE CONFERRED', width / 2, 685);

    // Signature
    const sigX = width - 220;
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'italic 900 26px "Outfit", sans-serif';
    ctx.fillText('Philip Hotor', sigX, 645);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(sigX - 90, 665);
    ctx.lineTo(sigX + 90, 665);
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 13px "Outfit", sans-serif';
    ctx.fillText('ACADEMY DIRECTOR', sigX, 685);

    // Serial ID Footer
    ctx.fillStyle = '#64748b';
    ctx.font = '600 12px "Outfit", sans-serif';
    ctx.fillText(`VERIFIED ID: ${certId} • SCAN & VERIFY AT KIDS.KONEACADEMY.IO`, width / 2, 775);
  };

  useEffect(() => {
    if (isOpen) {
      sounds.playCertificateFanfare();
      setTimeout(renderCertificate, 100);
    }
  }, [isOpen, studentName, pathway, tier]);

  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playCertificateFanfare();
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
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.title = 'Certificate - ' + (studentName || 'Student');
      const style = printWindow.document.createElement('style');
      style.textContent = '@page { size: landscape; margin: 0; } body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #000; } img { max-width: 100%; max-height: 100vh; object-fit: contain; }';
      printWindow.document.head.appendChild(style);
      const img = printWindow.document.createElement('img');
      img.src = dataUrl;
      img.alt = 'Certificate';
      printWindow.document.body.appendChild(img);
      img.onload = () => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      };
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
        maxWidth: '920px',
        width: '100%',
        maxHeight: '94vh',
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
              Tiered Gold-Sealed certification with verified STEM Superpowers!
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
          <div>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.3rem' }}>
              👤 Student Name:
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
              🎓 Pathway:
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
              {Object.keys(PATHWAYS).map(p => (
                <option key={p} value={p} style={{ background: '#0f172a', color: 'white' }}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.3rem' }}>
              ⭐ Certification Tier:
            </label>
            <select
              value={tier}
              onChange={(e) => setTier(e.target.value as CertificateTier)}
              style={{
                width: '100%',
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(251, 191, 36, 0.5)',
                borderRadius: '10px',
                padding: '0.6rem 0.8rem',
                color: '#fbbf24',
                fontSize: '0.9rem',
                fontWeight: 800,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="Explorer" style={{ background: '#0f172a', color: '#34d399' }}>Explorer (Tier 1)</option>
              <option value="Junior Developer" style={{ background: '#0f172a', color: '#38bdf8' }}>Junior Developer (Tier 2)</option>
              <option value="Master Engineer" style={{ background: '#0f172a', color: '#fbbf24' }}>Master Engineer (Tier 3)</option>
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
              background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
              border: 'none',
              color: '#0f172a',
              borderRadius: '12px',
              padding: '0.7rem 1.4rem',
              cursor: 'pointer',
              fontSize: '0.88rem',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
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
