import React, { useState, useEffect, useRef } from 'react';
import { X, Printer, Download, Award, User, Layers, Sparkles } from 'lucide-react';
import { sounds } from '../utils/sounds';
import { TrophyCupIcon, ScrollCertIcon, SparkleStarIcon } from './PlayfulIcons';

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

const TIER_STYLES: Record<CertificateTier, { primary: string; deep: string; tint: string; ribbon: string; label: string }> = {
  'Explorer': { primary: '#10b981', deep: '#047857', tint: '#ecfdf5', ribbon: '#059669', label: 'TIER I • EXPLORER' },
  'Junior Developer': { primary: '#0ea5e9', deep: '#0369a1', tint: '#f0f9ff', ribbon: '#0284c7', label: 'TIER II • JUNIOR DEVELOPER' },
  'Master Engineer': { primary: '#f59e0b', deep: '#b45309', tint: '#fffbeb', ribbon: '#d97706', label: 'TIER III • MASTER ENGINEER' }
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
  const [certSerial] = useState(() => `KCA-${Math.floor(100000 + Math.random() * 900000)}`);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (defaultName && defaultName !== 'Junior Coder') setStudentName(defaultName);
  }, [defaultName]);

  const renderCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 1400;
    const H = 990;
    canvas.width = W;
    canvas.height = H;
    const palette = TIER_STYLES[tier];

    // 1. Warm Ivory Parchment Base
    const paper = ctx.createLinearGradient(0, 0, W, H);
    paper.addColorStop(0, '#fffdf8');
    paper.addColorStop(0.5, '#fdfaf1');
    paper.addColorStop(1, '#faf5e8');
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, W, H);

    // Subtle geometric rosette watermark in center
    ctx.save();
    ctx.translate(W / 2, H / 2 + 10);
    ctx.strokeStyle = 'rgba(180, 145, 75, 0.065)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 24; i++) {
      ctx.rotate(Math.PI / 12);
      ctx.beginPath();
      ctx.ellipse(0, 0, 290, 95, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    // 2. Classic Double-Rule Diploma Frame & Corner Filigree
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 6;
    ctx.strokeRect(36, 36, W - 72, H - 72);

    ctx.strokeStyle = palette.primary;
    ctx.lineWidth = 2.5;
    ctx.strokeRect(50, 50, W - 100, H - 100);

    const drawCornerBracket = (cx: number, cy: number, sx: number, sy: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(sx, sy);
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 46);
      ctx.lineTo(0, 0);
      ctx.lineTo(46, 0);
      ctx.stroke();

      ctx.fillStyle = palette.primary;
      ctx.beginPath();
      ctx.moveTo(12, 12);
      ctx.lineTo(26, 12);
      ctx.lineTo(12, 26);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };
    drawCornerBracket(50, 50, 1, 1);
    drawCornerBracket(W - 50, 50, -1, 1);
    drawCornerBracket(50, H - 50, 1, -1);
    drawCornerBracket(W - 50, H - 50, -1, -1);

    // 3. Top Header Crest & Institution Identity
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0f172a';
    ctx.font = '800 18px "Outfit", system-ui, sans-serif';
    ctx.fillText('KONE CODE ACADEMY  •  STEM & AI EDUCATION FOUNDATION', W / 2, 108);

    // Tier Ribbon Pill
    ctx.fillStyle = palette.tint;
    ctx.beginPath();
    ctx.roundRect(W / 2 - 165, 126, 330, 34, 17);
    ctx.fill();
    ctx.strokeStyle = palette.primary;
    ctx.lineWidth = 1.6;
    ctx.stroke();

    ctx.fillStyle = palette.deep;
    ctx.font = '800 13px "Outfit", system-ui, sans-serif';
    ctx.fillText(palette.label, W / 2, 148);

    // Main Diploma Title
    ctx.fillStyle = '#0f172a';
    ctx.font = '700 54px Georgia, "Times New Roman", serif';
    ctx.fillText('Certificate of Achievement', W / 2, 224);

    // Decorative divider with center diamond
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 260, 248);
    ctx.lineTo(W / 2 - 16, 248);
    ctx.moveTo(W / 2 + 16, 248);
    ctx.lineTo(W / 2 + 260, 248);
    ctx.stroke();

    ctx.fillStyle = palette.primary;
    ctx.beginPath();
    ctx.moveTo(W / 2, 240);
    ctx.lineTo(W / 2 + 8, 248);
    ctx.lineTo(W / 2, 256);
    ctx.lineTo(W / 2 - 8, 248);
    ctx.closePath();
    ctx.fill();

    // Presentation Subtitle
    ctx.fillStyle = '#475569';
    ctx.font = 'italic 22px Georgia, serif';
    ctx.fillText('This diploma is proudly conferred upon', W / 2, 296);

    // 4. Student Name (Hero Display)
    const displayName = (studentName || 'Junior Coder').trim();
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 62px "Baloo 2", "Outfit", system-ui, sans-serif';
    ctx.fillText(displayName, W / 2, 374);

    // Gold/Accent Calligraphy Underline
    const nameWidth = Math.min(Math.max(ctx.measureText(displayName).width + 80, 340), 760);
    ctx.strokeStyle = palette.primary;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(W / 2 - nameWidth / 2, 394);
    ctx.lineTo(W / 2 + nameWidth / 2, 394);
    ctx.stroke();

    // 5. Citation & Pathway
    ctx.fillStyle = '#334155';
    ctx.font = '400 21px "Outfit", system-ui, sans-serif';
    ctx.fillText('in recognition of outstanding creativity, computational thinking, and project mastery in', W / 2, 444);

    ctx.fillStyle = palette.deep;
    ctx.font = '800 34px "Outfit", system-ui, sans-serif';
    ctx.fillText(pathway, W / 2, 494);

    // 6. Mastered Competencies (Clean Editorial Pills)
    const powers = PATHWAYS[pathway] || ['Logic Gates', 'Algorithms', 'Debugging', 'Creation'];
    const pillW = 195;
    const gap = 16;
    const totalW = powers.length * pillW + (powers.length - 1) * gap;
    const startX = (W - totalW) / 2;

    powers.forEach((power, idx) => {
      const px = startX + idx * (pillW + gap);
      const py = 532;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect(px, py, pillW, 38, 19);
      ctx.fill();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Small accent dot
      ctx.fillStyle = palette.primary;
      ctx.beginPath();
      ctx.arc(px + 20, py + 19, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1e293b';
      ctx.font = '700 13.5px "Outfit", system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(power, px + 33, py + 24);
    });
    ctx.textAlign = 'center';

    // 7. Bottom Row: Date | Embossed Gold Seal | Director Signature
    const footerY = 760;

    // Left: Date Conferred
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    ctx.fillStyle = '#0f172a';
    ctx.font = '700 19px Georgia, serif';
    ctx.fillText(dateStr, 270, footerY - 14);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(150, footerY);
    ctx.lineTo(390, footerY);
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '700 12px "Outfit", system-ui, sans-serif';
    ctx.fillText('DATE CONFERRED', 270, footerY + 22);

    // Center: Embossed Gold Rosette Seal with Ribbons
    const sx = W / 2;
    const sy = footerY - 8;

    // Ribbons
    ctx.fillStyle = palette.ribbon;
    ctx.beginPath();
    ctx.moveTo(sx - 24, sy + 30);
    ctx.lineTo(sx - 42, sy + 92);
    ctx.lineTo(sx - 22, sy + 80);
    ctx.lineTo(sx - 6, sy + 94);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(sx + 24, sy + 30);
    ctx.lineTo(sx + 42, sy + 92);
    ctx.lineTo(sx + 22, sy + 80);
    ctx.lineTo(sx + 6, sy + 94);
    ctx.closePath();
    ctx.fill();

    // Scalloped Gold Medal
    ctx.save();
    ctx.translate(sx, sy);
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    const teeth = 28;
    for (let i = 0; i < teeth * 2; i++) {
      const r = i % 2 === 0 ? 54 : 49;
      const a = (i * Math.PI) / teeth;
      if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
      else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#fffbeb';
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#92400e';
    ctx.font = '900 16px "Outfit", system-ui, sans-serif';
    ctx.fillText('KONE', 0, -3);
    ctx.font = '800 10px "Outfit", system-ui, sans-serif';
    ctx.fillText('VERIFIED', 0, 12);
    ctx.restore();

    // Right: Academy Director Signature
    const rx = W - 270;
    ctx.fillStyle = '#0369a1';
    ctx.font = 'italic 700 30px Georgia, "Times New Roman", serif';
    ctx.fillText('Philip Hotor', rx, footerY - 14);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(rx - 120, footerY);
    ctx.lineTo(rx + 120, footerY);
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '700 12px "Outfit", system-ui, sans-serif';
    ctx.fillText('PHILIP HOTOR • ACADEMY DIRECTOR', rx, footerY + 22);

    // 8. Bottom Verification Serial
    ctx.fillStyle = '#64748b';
    ctx.font = '600 12px "Outfit", system-ui, sans-serif';
    ctx.fillText(`CREDENTIAL ID: ${certSerial}   •   ISSUED BY KONE CODE ACADEMY   •   KIDS.CODKON.COM`, W / 2, 916);
  };

  useEffect(() => {
    if (isOpen) {
      sounds.playCertificateFanfare();
      const timer = setTimeout(renderCertificate, 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen, studentName, pathway, tier]);

  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playCertificateFanfare();
    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = image;
    a.download = `Kone-Kids-Diploma-${(studentName || 'Student').trim().replace(/\s+/g, '-')}.png`;
    a.click();
  };

  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playSuccess();
    const dataUrl = canvas.toDataURL('image/png');
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.title = `Kone Kids Diploma - ${studentName || 'Student'}`;
      const style = printWindow.document.createElement('style');
      style.textContent = '@page { size: landscape; margin: 0; } body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #fff; } img { width: 100%; height: 100%; object-fit: contain; }';
      printWindow.document.head.appendChild(style);
      const img = printWindow.document.createElement('img');
      img.src = dataUrl;
      img.alt = 'Official Certificate';
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
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.72)',
        backdropFilter: 'blur(10px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div style={{
        background: '#ffffff',
        border: '2px solid #e2e8f0',
        borderRadius: '28px',
        maxWidth: '940px',
        width: '100%',
        maxHeight: '94vh',
        overflowY: 'auto',
        padding: '1.5rem 1.75rem',
        boxShadow: '0 28px 70px rgba(15, 23, 42, 0.28)',
        position: 'relative',
        color: '#0f172a'
      }}>
        {/* Editorial Studio Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1.5px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 14px rgba(245, 158, 11, 0.2)',
              flexShrink: 0
            }}>
              <TrophyCupIcon size={30} />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#d97706', marginBottom: '0.15rem' }}>
                <SparkleStarIcon size={13} /> Kone Academy Registrar
              </div>
              <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.45rem', fontWeight: 900, fontFamily: '"Baloo 2", cursive', lineHeight: 1.15 }}>
                Official STEM Graduation Diploma
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate studio"
            style={{
              background: '#f1f5f9',
              border: '1.5px solid #e2e8f0',
              color: '#475569',
              borderRadius: '14px',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Customization Controls */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.9rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#334155', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <User size={14} color="#0284c7" /> Student Full Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Type student name..."
              style={{
                width: '100%',
                background: '#f8fafc',
                border: '2px solid #cbd5e1',
                borderRadius: '14px',
                padding: '0.65rem 0.9rem',
                color: '#0f172a',
                fontSize: '0.95rem',
                fontWeight: 700,
                outline: 'none'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.background = '#fff'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8fafc'; }}
            />
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#334155', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Layers size={14} color="#f97316" /> Learning Pathway
            </label>
            <select
              value={pathway}
              onChange={(e) => setPathway(e.target.value)}
              style={{
                width: '100%',
                background: '#f8fafc',
                border: '2px solid #cbd5e1',
                borderRadius: '14px',
                padding: '0.65rem 0.9rem',
                color: '#0f172a',
                fontSize: '0.92rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {Object.keys(PATHWAYS).map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#334155', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Award size={14} color="#d97706" /> Distinction Tier
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.35rem', background: '#f1f5f9', padding: '0.28rem', borderRadius: '14px', border: '1.5px solid #e2e8f0' }}>
              {(['Explorer', 'Junior Developer', 'Master Engineer'] as CertificateTier[]).map((tOption) => {
                const active = tier === tOption;
                const shortLabel = tOption === 'Explorer' ? 'Explorer' : tOption === 'Junior Developer' ? 'Junior' : 'Master';
                return (
                  <button
                    key={tOption}
                    type="button"
                    onClick={() => setTier(tOption)}
                    style={{
                      border: 'none',
                      borderRadius: '10px',
                      padding: '0.45rem 0.3rem',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      background: active ? '#ffffff' : 'transparent',
                      color: active ? TIER_STYLES[tOption].deep : '#64748b',
                      boxShadow: active ? '0 2px 6px rgba(15, 23, 42, 0.08)' : 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Parchment Diploma Preview Stage */}
        <div style={{
          background: 'linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)',
          borderRadius: '20px',
          padding: '1rem',
          border: '1.5px solid #cbd5e1',
          marginBottom: '1.25rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <canvas
            ref={canvasRef}
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '10px',
              boxShadow: '0 14px 34px rgba(15, 23, 42, 0.18)'
            }}
          />
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
            <Sparkles size={15} color="#0ea5e9" /> Print-ready 1400×990px parchment layout
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={handlePrint}
              style={{
                background: '#f8fafc',
                border: '2px solid #cbd5e1',
                color: '#0f172a',
                borderRadius: '14px',
                padding: '0.7rem 1.2rem',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Printer size={17} /> Print / Save PDF
            </button>

            <button
              onClick={handleDownloadPNG}
              className="kids-button"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '14px',
                padding: '0.72rem 1.4rem',
                cursor: 'pointer',
                fontSize: '0.92rem',
                fontWeight: 900,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 18px rgba(234, 88, 12, 0.32)'
              }}
            >
              <ScrollCertIcon size={19} /> Download Diploma (PNG)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
