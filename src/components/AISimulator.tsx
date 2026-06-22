import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Camera, RefreshCw, Cpu } from 'lucide-react';

export interface AIHandle {
  getClass: () => string;
  onClassDetect: (className: string, callback: () => void) => void;
  reset: () => void;
}

const AISimulator = forwardRef<AIHandle, {}>((_, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [classA, setClassA] = useState('Cocoa Pod');
  const [classB, setClassB] = useState('Banana');
  
  const [imagesA, setImagesA] = useState<string[]>([]);
  const [imagesB, setImagesB] = useState<string[]>([]);
  
  // Average RGB values for color classification
  const [avgColorA, setAvgColorA] = useState<{r: number, g: number, b: number} | null>(null);
  const [avgColorB, setAvgColorB] = useState<{r: number, g: number, b: number} | null>(null);

  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isTrained, setIsTrained] = useState(false);
  
  const [currentClass, setCurrentClass] = useState<string>('Unknown');
  const [confidence, setConfidence] = useState<number>(0);
  
  const [hasCamera, setHasCamera] = useState(false);
  
  // Custom manual override for testing without webcam
  const [manualOverride, setManualOverride] = useState<string>('');

  const classDetectListeners = useRef<Record<string, (() => void)[]>>({});

  useImperativeHandle(ref, () => ({
    getClass: () => {
      return manualOverride || currentClass;
    },
    onClassDetect: (className: string, callback: () => void) => {
      const label = className.toLowerCase();
      if (!classDetectListeners.current[label]) {
        classDetectListeners.current[label] = [];
      }
      classDetectListeners.current[label].push(callback);
    },
    reset: () => {
      setIsTrained(false);
      setIsTraining(false);
      setTrainingProgress(0);
      setImagesA([]);
      setImagesB([]);
      setAvgColorA(null);
      setAvgColorB(null);
      setCurrentClass('Unknown');
      setConfidence(0);
      setManualOverride('');
      classDetectListeners.current = {};
    }
  }));

  // Start webcam
  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 220 } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        streamRef.current = stream;
        setHasCamera(true);
      } catch (err) {
        console.warn('Webcam access failed:', err);
        setHasCamera(false);
      }
    }
    
    startCamera();
    
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Heuristic Color Classification loop
  useEffect(() => {
    if (!isTrained) return;
    
    let active = true;
    
    const classifyLoop = async () => {
      while (active && isTrained) {
        if (videoRef.current && videoRef.current.readyState === 4) {
          const video = videoRef.current;
          
          // Draw to temporary hidden canvas
          const canvas = document.createElement('canvas');
          canvas.width = 10;
          canvas.height = 10;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(video, 0, 0, 10, 10);
            const imgData = ctx.getImageData(0, 0, 10, 10).data;
            
            // Calculate average RGB
            let rSum = 0, gSum = 0, bSum = 0;
            for (let i = 0; i < imgData.length; i += 4) {
              rSum += imgData[i];
              gSum += imgData[i+1];
              bSum += imgData[i+2];
            }
            const count = imgData.length / 4;
            const avg = { r: rSum / count, g: gSum / count, b: bSum / count };
            
            // Differentiate Class A vs Class B
            if (avgColorA && avgColorB) {
              const distA = Math.sqrt(Math.pow(avg.r - avgColorA.r, 2) + Math.pow(avg.g - avgColorA.g, 2) + Math.pow(avg.b - avgColorA.b, 2));
              const distB = Math.sqrt(Math.pow(avg.r - avgColorB.r, 2) + Math.pow(avg.g - avgColorB.g, 2) + Math.pow(avg.b - avgColorB.b, 2));
              
              const totalDist = distA + distB;
              const confA = totalDist > 0 ? (1 - distA / totalDist) * 100 : 50;
              const confB = totalDist > 0 ? (1 - distB / totalDist) * 100 : 50;
              
              let detected = 'Unknown';
              let finalConf = 0;
              
              if (confA > confB + 5) {
                detected = classA;
                finalConf = Math.round(confA);
              } else if (confB > confA + 5) {
                detected = classB;
                finalConf = Math.round(confB);
              } else {
                detected = 'Uncertain';
                finalConf = 50;
              }
              
              setCurrentClass(detected);
              setConfidence(finalConf);
              
              // Trigger listeners
              const label = detected.toLowerCase();
              if (classDetectListeners.current[label]) {
                classDetectListeners.current[label].forEach(cb => cb());
              }
            }
          }
        }
        await new Promise(res => setTimeout(res, 350));
      }
    };
    
    classifyLoop();
    
    return () => {
      active = false;
    };
  }, [isTrained, avgColorA, avgColorB, classA, classB]);

  // Helper to grab snapshot and calculate RGB
  const captureSnapshot = (target: 'a' | 'b') => {
    let dataUrl = '';
    let avgColor = { r: 120, g: 120, b: 120 };
    
    if (videoRef.current && videoRef.current.readyState === 4) {
      const canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 90;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, 120, 90);
        dataUrl = canvas.toDataURL('image/jpeg');
        
        // Grab pixel data for color calculation
        const imgData = ctx.getImageData(0, 0, 120, 90).data;
        let rSum = 0, gSum = 0, bSum = 0;
        for (let i = 0; i < imgData.length; i += 4) {
          rSum += imgData[i];
          gSum += imgData[i+1];
          bSum += imgData[i+2];
        }
        const count = imgData.length / 4;
        avgColor = { r: rSum / count, g: gSum / count, b: bSum / count };
      }
    } else {
      // Fallback placeholder colors
      dataUrl = target === 'a' ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90"><rect width="100%" height="100%" fill="%233b82f6"/></svg>' : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90"><rect width="100%" height="100%" fill="%23ec4899"/></svg>';
      avgColor = target === 'a' ? { r: 59, g: 130, b: 246 } : { r: 236, g: 72, b: 153 };
    }
    
    if (target === 'a') {
      setImagesA(prev => [...prev.slice(-4), dataUrl]); // limit to last 5
      setAvgColorA(prev => {
        if (!prev) return avgColor;
        return { r: (prev.r + avgColor.r) / 2, g: (prev.g + avgColor.g) / 2, b: (prev.b + avgColor.b) / 2 };
      });
    } else {
      setImagesB(prev => [...prev.slice(-4), dataUrl]);
      setAvgColorB(prev => {
        if (!prev) return avgColor;
        return { r: (prev.r + avgColor.r) / 2, g: (prev.g + avgColor.g) / 2, b: (prev.b + avgColor.b) / 2 };
      });
    }
  };

  const startTraining = () => {
    if (imagesA.length === 0 || imagesB.length === 0) {
      alert('Capture at least 1 image for both classes first!');
      return;
    }
    setIsTraining(true);
    setTrainingProgress(0);
    
    const interval = setInterval(() => {
      setTrainingProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setIsTrained(true);
          return 100;
        }
        return p + 5;
      });
    }, 150);
  };

  // Handle manual override clicks for listeners
  useEffect(() => {
    if (manualOverride) {
      const label = manualOverride.toLowerCase();
      if (classDetectListeners.current[label]) {
        classDetectListeners.current[label].forEach(cb => cb());
      }
    }
  }, [manualOverride]);

  return (
    <div className="ai-simulator-container" style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#0f172a',
      borderRadius: '24px',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '1rem',
      position: 'relative',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'var(--kids-purple)',
        fontSize: '0.8rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '0.75rem'
      }}>
        <Cpu size={16} /> AI Machine Learning Studio
      </div>

      {isTraining ? (
        /* Neural Network Training Screen */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: '#0b0f19', borderRadius: '16px' }}>
          <div style={{ position: 'relative', width: '100%', height: '140px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '1.5rem' }}>
            {/* Input layer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="neuro-node pulse-glow" style={{ background: '#3b82f6' }}></span>
              <span className="neuro-node pulse-glow" style={{ background: '#3b82f6' }}></span>
            </div>
            {/* Synapses lines */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <line x1="30%" y1="30%" x2="50%" y2="25%" stroke="#a855f7" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1s linear infinite' }} />
              <line x1="30%" y1="30%" x2="50%" y2="75%" stroke="#ec4899" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1.2s linear infinite' }} />
              <line x1="30%" y1="70%" x2="50%" y2="25%" stroke="#ec4899" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1.1s linear infinite' }} />
              <line x1="30%" y1="70%" x2="50%" y2="75%" stroke="#a855f7" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 0.9s linear infinite' }} />
              <line x1="50%" y1="25%" x2="70%" y2="50%" stroke="#10b981" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1s linear infinite' }} />
              <line x1="50%" y1="75%" x2="70%" y2="50%" stroke="#10b981" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 0.8s linear infinite' }} />
            </svg>
            {/* Hidden layer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <span className="neuro-node pulse-glow" style={{ background: '#ec4899', animationDelay: '0.2s' }}></span>
              <span className="neuro-node pulse-glow" style={{ background: '#a855f7', animationDelay: '0.4s' }}></span>
            </div>
            {/* Output layer */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="neuro-node pulse-glow" style={{ background: '#10b981', animationDelay: '0.6s' }}></span>
            </div>
          </div>
          <h4 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', color: 'var(--kids-purple)' }}>Tuning Neural Connections...</h4>
          <p style={{ margin: '0.15rem 0 0.75rem', fontSize: '0.75rem', color: '#64748b' }}>Loss: {(1 - trainingProgress/100).toFixed(4)} · Acc: {(trainingProgress/100).toFixed(2)}</p>
          <div style={{ width: '80%', height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${trainingProgress}%`, height: '100%', background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)', transition: 'width 0.15s ease' }}></div>
          </div>
        </div>
      ) : isTrained ? (
        /* Live Classification Screen */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '150px', background: '#000', borderRadius: '16px', overflow: 'hidden' }}>
            {hasCamera ? (
              <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1e293b', flexDirection: 'column', gap: '0.5rem' }}>
                <Camera size={32} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Webcam Simulator Active</span>
              </div>
            )}
            
            {/* Output HUD overlay */}
            <div style={{
              position: 'absolute',
              bottom: '0.5rem',
              left: '0.5rem',
              right: '0.5rem',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(4px)',
              padding: '0.4rem 0.75rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>Detected Object</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--kids-purple)', fontFamily: '"Baloo 2", cursive' }}>
                  {manualOverride || currentClass}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>Confidence</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#10b981' }}>
                  {manualOverride ? '100%' : `${confidence}%`}
                </div>
              </div>
            </div>
          </div>

          {/* Manual override selector (great for testing/fallback) */}
          <div style={{ background: '#1e293b', padding: '0.6rem 0.8rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1' }}>Simulate Object:</span>
            <select 
              value={manualOverride}
              onChange={(e) => setManualOverride(e.target.value)}
              style={{ background: '#0f172a', border: '1px solid #334155', color: 'white', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '6px', cursor: 'pointer' }}
            >
              <option value="">Live Camera Feed</option>
              <option value={classA}>{classA} (Class A)</option>
              <option value={classB}>{classB} (Class B)</option>
            </select>
          </div>

          <button 
            onClick={() => setIsTrained(false)}
            style={{
              background: '#334155', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '10px',
              fontFamily: '"Baloo 2", cursive', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem'
            }}
          >
            <RefreshCw size={14} /> Retrain Model
          </button>
        </div>
      ) : (
        /* Training & Capture Setup Screen */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Camera Area */}
          <div style={{ position: 'relative', width: '100%', height: '120px', background: '#000', borderRadius: '16px', overflow: 'hidden' }}>
            {hasCamera ? (
              <video autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} ref={el => {
                if (el && streamRef.current) el.srcObject = streamRef.current;
              }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1e293b', flexDirection: 'column' }}>
                <Camera size={24} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '0.7rem', color: '#64748b' }}>No camera active</span>
              </div>
            )}
          </div>

          {/* Classes Setup */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {/* Class A Box */}
            <div style={{ background: '#1e293b', padding: '0.6rem', borderRadius: '14px', display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid rgba(59,130,246,0.15)' }}>
              <input 
                type="text" 
                value={classA}
                onChange={(e) => setClassA(e.target.value)}
                style={{ background: '#0f172a', border: 'none', borderBottom: '2px solid #3b82f6', color: 'white', fontSize: '0.8rem', fontWeight: 800, padding: '2px 4px', width: '100%' }}
              />
              <button 
                onClick={() => captureSnapshot('a')}
                style={{ background: '#3b82f6', border: 'none', color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '0.35rem', borderRadius: '8px', cursor: 'pointer' }}
              >
                📸 Capture
              </button>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textAlign: 'center' }}>{imagesA.length} images captured</div>
              <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', minHeight: '20px' }}>
                {imagesA.map((img, i) => (
                  <img key={i} src={img} alt="" style={{ width: '18px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} />
                ))}
              </div>
            </div>

            {/* Class B Box */}
            <div style={{ background: '#1e293b', padding: '0.6rem', borderRadius: '14px', display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid rgba(236,72,153,0.15)' }}>
              <input 
                type="text" 
                value={classB}
                onChange={(e) => setClassB(e.target.value)}
                style={{ background: '#0f172a', border: 'none', borderBottom: '2px solid #ec4899', color: 'white', fontSize: '0.8rem', fontWeight: 800, padding: '2px 4px', width: '100%' }}
              />
              <button 
                onClick={() => captureSnapshot('b')}
                style={{ background: '#ec4899', border: 'none', color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '0.35rem', borderRadius: '8px', cursor: 'pointer' }}
              >
                📸 Capture
              </button>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', textAlign: 'center' }}>{imagesB.length} images captured</div>
              <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', minHeight: '20px' }}>
                {imagesB.map((img, i) => (
                  <img key={i} src={img} alt="" style={{ width: '18px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} />
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={startTraining}
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
              color: 'white',
              border: 'none',
              padding: '0.6rem',
              borderRadius: '12px',
              fontFamily: '"Baloo 2", cursive',
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(168, 85, 247, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              marginTop: 'auto'
            }}
          >
            Train Neural Network
          </button>
        </div>
      )}

      {/* Styled animation keyframes and tags */}
      <style>{`
        .neuro-node {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: block;
          z-index: 10;
        }
        .pulse-glow {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
          animation: pulse 1.2s infinite cubic-bezier(0.66, 0, 0, 1);
        }
        @keyframes pulse {
          to {
            box-shadow: 0 0 12px 6px rgba(255, 255, 255, 0);
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
});

AISimulator.displayName = 'AISimulator';

export default AISimulator;
