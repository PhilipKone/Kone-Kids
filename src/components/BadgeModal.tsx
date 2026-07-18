import React, { useState, useEffect, useRef } from 'react';
import { X, Download, Share2 } from 'lucide-react';
import { Badge, useGamification } from '../context/GamificationContext';
import { Share } from '@capacitor/share';

interface BadgeModalProps {
  badge: Badge;
  onClose: () => void;
}

export default function BadgeModal({ badge, onClose }: BadgeModalProps) {
  const { studentName } = useGamification();
  const [name, setName] = useState(studentName || 'Young Tech Pioneer');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high-resolution dimensions
    canvas.width = 1000;
    canvas.height = 750;

    // 1. Draw Background Radial Gradient
    const grad = ctx.createRadialGradient(500, 375, 100, 500, 375, 600);
    grad.addColorStop(0, '#1e1b4b'); // deep indigo
    grad.addColorStop(1, '#090514'); // dark slate/black
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1000, 750);

    // 2. Draw Decorative Glowing Borders
    // Outer border (Cyan neon)
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 6;
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 15;
    ctx.strokeRect(30, 30, 940, 690);

    // Inner border (Magenta neon)
    ctx.strokeStyle = '#d946ef';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#d946ef';
    ctx.shadowBlur = 10;
    ctx.strokeRect(45, 45, 910, 660);

    // Reset shadow for text drawing to keep it crisp
    ctx.shadowBlur = 0;

    // Draw Corner Brackets (futuristic theme)
    ctx.fillStyle = '#06b6d4';
    // Top-Left
    ctx.fillRect(20, 20, 40, 8);
    ctx.fillRect(20, 20, 8, 40);
    // Top-Right
    ctx.fillRect(940, 20, 40, 8);
    ctx.fillRect(972, 20, 8, 40);
    // Bottom-Left
    ctx.fillRect(20, 722, 40, 8);
    ctx.fillRect(20, 690, 8, 40);
    // Bottom-Right
    ctx.fillRect(940, 722, 40, 8);
    ctx.fillRect(972, 690, 8, 40);

    // 3. Draw Header Text
    ctx.textAlign = 'center';
    
    // Academy name
    ctx.fillStyle = '#fbbf24'; // bright gold
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('KONE CODE ACADEMY', 500, 115);

    // "Certificate of Achievement"
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', 500, 175);

    // Divider line
    const divider = ctx.createLinearGradient(300, 0, 700, 0);
    divider.addColorStop(0, 'transparent');
    divider.addColorStop(0.5, '#06b6d4');
    divider.addColorStop(1, 'transparent');
    ctx.fillStyle = divider;
    ctx.fillRect(250, 205, 500, 3);

    // Award description
    ctx.fillStyle = '#94a3b8'; // light slate
    ctx.font = 'italic 20px Georgia, serif';
    ctx.fillText('This certificate is proudly awarded to', 500, 255);

    // Student Name
    ctx.fillStyle = '#38bdf8'; // bright blue
    ctx.font = 'bold 50px sans-serif';
    ctx.fillText(name.toUpperCase(), 500, 325);

    // Description text
    ctx.fillStyle = '#94a3b8';
    ctx.font = '20px sans-serif';
    ctx.fillText('for completing the coding pathways and unlocking the achievement', 500, 395);

    // Badge Name
    ctx.fillStyle = '#f59e0b'; // amber
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText(`🏆 ${badge.name.toUpperCase()} 🏆`, 500, 455);

    // Quote
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'italic 18px Georgia, serif';
    ctx.fillText('"Keep building the future, one block at a time!"', 500, 515);

    // Date
    const unlockDate = badge.unlockedAt || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillStyle = '#64748b';
    ctx.font = '16px sans-serif';
    ctx.fillText(`Unlocked on: ${unlockDate}`, 500, 555);

    // 4. Signatures & Seals
    // Draw Seal (gold rosette)
    ctx.save();
    ctx.translate(500, 640);
    ctx.fillStyle = '#eab308';
    ctx.shadowColor = '#eab308';
    ctx.shadowBlur = 10;
    // Draw circle seal
    ctx.beginPath();
    ctx.arc(0, 0, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('KCA', 0, 6);
    ctx.restore();

    // Left Signature: Byte
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(150, 645);
    ctx.lineTo(350, 645);
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'italic 20px Georgia, serif';
    ctx.fillText('Byte', 250, 630); // simulated signature text
    ctx.fillStyle = '#64748b';
    ctx.font = '14px sans-serif';
    ctx.fillText('AI Mascot Mentor', 250, 670);

    // Right Signature: Philip Kone
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(650, 645);
    ctx.lineTo(850, 645);
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'italic 20px Georgia, serif';
    ctx.fillText('Philip Kone', 750, 630); // simulated signature text
    ctx.fillStyle = '#64748b';
    ctx.font = '14px sans-serif';
    ctx.fillText('Founder, Kone Academy', 750, 670);

  }, [name, badge]);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `KoneKids_Certificate_${badge.name.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const shareAchievement = async () => {
    const text = `I unlocked the "${badge.name}" badge in Kone Kids! 🚀 Check out my coding achievements!`;
    try {
      await Share.share({
        title: 'Kone Kids Achievement!',
        text: text,
        url: 'https://kids.koneacademy.io',
        dialogTitle: 'Share Achievement'
      });
    } catch (err) {
      console.log('Share error or canceled', err);
    }
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
        overflowY: 'auto'
      }}
    >
      <div className="glass-panel" style={{
        background: '#151921',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '28px',
        padding: '1.5rem 1.5rem 1.85rem 1.5rem',
        maxWidth: '650px',
        width: '100%',
        margin: 'auto',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        animation: 'modalPop 0.3s ease-out',
        color: 'white'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#94a3b8',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239,68,68,0.2)'; e.currentTarget.style.color = '#ef4444'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}
        >
          <X size={20} />
        </button>

        {/* Badge Details Header */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '3rem' }}>{badge.icon}</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, fontFamily: '"Baloo 2", cursive', color: 'var(--kids-blue)' }}>{badge.name}</h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
              {badge.unlocked ? `🎉 Unlocked on ${badge.unlockedAt || new Date().toLocaleDateString()}` : '🔒 Locked - Explore missions to earn!'}
            </p>
          </div>
        </div>

        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '1.5rem' }}>{badge.description}</p>

        {badge.unlocked && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: '#fbbf24', fontWeight: 700 }}>Custom Certificate Generator</h4>
            <p style={{ margin: '0 0 1rem', fontSize: '0.8rem', color: '#94a3b8' }}>Type your name below to print your graduation certificate!</p>
            
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              style={{
                width: '100%',
                background: '#0f172a',
                border: '1.5px solid #334155',
                borderRadius: '12px',
                color: 'white',
                padding: '0.6rem 1rem',
                fontSize: '0.95rem',
                outline: 'none',
                marginBottom: '1rem',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--kids-blue)'}
              onBlur={(e) => e.target.style.borderColor = '#334155'}
            />

            {/* Certificate Preview Canvas */}
            <canvas ref={canvasRef} style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              border: '2px solid rgba(255,255,255,0.05)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              marginBottom: '1.5rem'
            }} />

            {/* Actions Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingBottom: '8px' }}>
              <button 
                onClick={downloadCertificate}
                className="kids-button pulse-neon"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  fontSize: '0.9rem',
                  padding: '0.65rem',
                  '--shadow-height': '5px',
                  '--shadow-color': '#9a3412',
                  minHeight: '44px'
                } as any}
              >
                <Download size={18} />
                <span>Download PNG</span>
              </button>
              <button 
                onClick={shareAchievement}
                className="kids-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  fontSize: '0.9rem',
                  padding: '0.65rem',
                  background: 'var(--kids-purple)',
                  borderColor: '#a855f7',
                  '--shadow-height': '5px',
                  '--shadow-color': '#7e22ce',
                  minHeight: '44px'
                } as any}
              >
                <Share2 size={18} />
                <span>Share Badge</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
