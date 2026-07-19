import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Camera, RefreshCw, Cpu, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface AIHandle {
  getClass: () => string;
  onClassDetect: (className: string, callback: () => void) => void;
  reset: () => void;
}

type AIMode = 'custom' | 'gestures' | 'emotions' | 'landmarks';

const AISimulator = forwardRef<AIHandle, {}>((_, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [activeMode, setActiveMode] = useState<AIMode>('custom');

  // Class names for different modes
  const [classA, setClassA] = useState('Cocoa Pod 🟫');
  const [classB, setClassB] = useState('Banana 🟨');
  const [classC, setClassC] = useState('Green Leaf 🟩');

  // Captured images for the classes
  const [imagesA, setImagesA] = useState<string[]>([]);
  const [imagesB, setImagesB] = useState<string[]>([]);
  const [imagesC, setImagesC] = useState<string[]>([]);
  
  // Samples list for K-NN color classification
  const [samplesA, setSamplesA] = useState<{r: number, g: number, b: number}[]>([]);
  const [samplesB, setSamplesB] = useState<{r: number, g: number, b: number}[]>([]);
  const [samplesC, setSamplesC] = useState<{r: number, g: number, b: number}[]>([]);

  // Average RGB values for color classification (Custom mode)
  const [avgColorA, setAvgColorA] = useState<{r: number, g: number, b: number} | null>(null);
  const [avgColorB, setAvgColorB] = useState<{r: number, g: number, b: number} | null>(null);
  const [avgColorC, setAvgColorC] = useState<{r: number, g: number, b: number} | null>(null);

  // Live average color from camera
  const [liveColor, setLiveColor] = useState<{r: number, g: number, b: number}>({ r: 120, g: 120, b: 120 });

  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isTrained, setIsTrained] = useState(false);
  
  const [currentClass, setCurrentClass] = useState<string>('Unknown');
  const [confidence, setConfidence] = useState<number>(0);
  const [hasCamera, setHasCamera] = useState(false);
  const [manualOverride, setManualOverride] = useState<string>('');

  // Organic wobble offset for overlays
  const [wobble, setWobble] = useState({ x: 0, y: 0 });

  const classDetectListeners = useRef<Record<string, (() => void)[]>>({});

  // Set default classes based on selected mode
  useEffect(() => {
    // Reset state when switching modes
    setIsTrained(false);
    setIsTraining(false);
    setImagesA([]);
    setImagesB([]);
    setImagesC([]);
    setSamplesA([]);
    setSamplesB([]);
    setSamplesC([]);
    setAvgColorA(null);
    setAvgColorB(null);
    setAvgColorC(null);
    setCurrentClass('Unknown');
    setConfidence(0);
    setManualOverride('');

    if (activeMode === 'custom') {
      setClassA('Cocoa Pod 🟫');
      setClassB('Banana 🟨');
      setClassC('Green Leaf 🟩');
    } else if (activeMode === 'gestures') {
      setClassA('Rock ✊');
      setClassB('Paper ✋');
      setClassC('Scissors ✌️');
    } else if (activeMode === 'emotions') {
      setClassA('Happy 😊');
      setClassB('Sad 😢');
      setClassC('Surprised 😲');
    } else if (activeMode === 'landmarks') {
      setClassA('Independence Arch 🇬🇭');
      setClassB('Kakum Canopy 🌲');
      setClassC('Larabanga Mosque 🕌');
    }
  }, [activeMode]);

  // Generate organic wobble for tracking skeletons
  useEffect(() => {
    const interval = setInterval(() => {
      setWobble({
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useImperativeHandle(ref, () => ({
    getClass: () => {
      const cleanName = (manualOverride || currentClass).replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "").trim();
      return cleanName;
    },
    onClassDetect: (className: string, callback: () => void) => {
      const label = className.toLowerCase().trim();
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
      setImagesC([]);
      setSamplesA([]);
      setSamplesB([]);
      setSamplesC([]);
      setAvgColorA(null);
      setAvgColorB(null);
      setAvgColorC(null);
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
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
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

  // Classification loop
  useEffect(() => {
    if (!isTrained) return;
    
    let active = true;
    
    const classifyLoop = async () => {
      while (active && isTrained) {
        if (videoRef.current && videoRef.current.readyState === 4) {
            const video = videoRef.current;
            
            const canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 12;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              // Crop center 50% of the video stream (Region of Interest)
              const vW = video.videoWidth || 320;
              const vH = video.videoHeight || 240;
              const cropW = vW * 0.5;
              const cropH = vH * 0.5;
              const cropX = (vW - cropW) / 2;
              const cropY = (vH - cropH) / 2;

              ctx.drawImage(video, cropX, cropY, cropW, cropH, 0, 0, 16, 12);
              const imgData = ctx.getImageData(0, 0, 16, 12).data;
              
              let rSum = 0, gSum = 0, bSum = 0;
              for (let i = 0; i < imgData.length; i += 4) {
                rSum += imgData[i];
                gSum += imgData[i+1];
                bSum += imgData[i+2];
              }
              const count = imgData.length / 4;
              const avg = { r: Math.round(rSum / count), g: Math.round(gSum / count), b: Math.round(bSum / count) };
              setLiveColor(avg);
              
              if (activeMode === 'custom') {
                // Multi-sample 1-Nearest Neighbor Euclidean Distance Classification
                let minDist = Infinity;
                let detected = 'Unknown';
                const totalSamples = samplesA.length + samplesB.length + samplesC.length;

                if (totalSamples > 0) {
                  // Classify against samples A
                  samplesA.forEach(s => {
                    const dist = Math.sqrt(Math.pow(avg.r - s.r, 2) + Math.pow(avg.g - s.g, 2) + Math.pow(avg.b - s.b, 2));
                    if (dist < minDist) {
                      minDist = dist;
                      detected = classA;
                    }
                  });
                  // Classify against samples B
                  samplesB.forEach(s => {
                    const dist = Math.sqrt(Math.pow(avg.r - s.r, 2) + Math.pow(avg.g - s.g, 2) + Math.pow(avg.b - s.b, 2));
                    if (dist < minDist) {
                      minDist = dist;
                      detected = classB;
                    }
                  });
                  // Classify against samples C
                  samplesC.forEach(s => {
                    const dist = Math.sqrt(Math.pow(avg.r - s.r, 2) + Math.pow(avg.g - s.g, 2) + Math.pow(avg.b - s.b, 2));
                    if (dist < minDist) {
                      minDist = dist;
                      detected = classC;
                    }
                  });

                  // Clamped confidence calculation based on Euclidean distance
                  const conf = Math.max(10, Math.min(Math.round(100 - (minDist / 2)), 99));

                  setCurrentClass(detected);
                  setConfidence(conf);
                } else if (avgColorA && avgColorB) {
                  // Fallback to average color comparison if samples list is empty
                  const distA = Math.sqrt(Math.pow(avg.r - avgColorA.r, 2) + Math.pow(avg.g - avgColorA.g, 2) + Math.pow(avg.b - avgColorA.b, 2));
                  const distB = Math.sqrt(Math.pow(avg.r - avgColorB.r, 2) + Math.pow(avg.g - avgColorB.g, 2) + Math.pow(avg.b - avgColorB.b, 2));
                  const distC = avgColorC ? Math.sqrt(Math.pow(avg.r - avgColorC.r, 2) + Math.pow(avg.g - avgColorC.g, 2) + Math.pow(avg.b - avgColorC.b, 2)) : Infinity;

                  const minDistFallback = Math.min(distA, distB, distC);
                  const sumDist = distA + distB + (avgColorC ? distC : 0);

                  let detectedFallback = 'Unknown';
                  let conf = 0;

                  if (minDistFallback === distA) {
                    detectedFallback = classA;
                    conf = Math.round((1 - distA / sumDist) * 100);
                  } else if (minDistFallback === distB) {
                    detectedFallback = classB;
                    conf = Math.round((1 - distB / sumDist) * 100);
                  } else if (avgColorC && minDistFallback === distC) {
                    detectedFallback = classC;
                    conf = Math.round((1 - distC / sumDist) * 100);
                  }

                  setCurrentClass(detectedFallback);
                  setConfidence(Math.max(10, Math.min(conf, 99)));
                }
              } else {
              // Heuristic Classification based on color features & subtle movement
              const score = (avg.r * 0.299 + avg.g * 0.587 + avg.b * 0.114);
              let detected = classA;
              let conf = 75;

              if (activeMode === 'gestures') {
                if (score > 160) {
                  detected = classB; // Paper (Bright hand skin tone)
                  conf = Math.round(75 + (score % 20));
                } else if (score > 100) {
                  detected = classC; // Scissors
                  conf = Math.round(70 + (score % 25));
                } else {
                  detected = classA; // Rock
                  conf = Math.round(65 + (score % 30));
                }
              } else if (activeMode === 'emotions') {
                const wave = Math.sin(Date.now() / 1500);
                if (wave > 0.3) {
                  detected = classA; // Happy
                  conf = Math.round(80 + wave * 15);
                } else if (wave < -0.3) {
                  detected = classB; // Sad
                  conf = Math.round(75 - wave * 15);
                } else {
                  detected = classC; // Surprised
                  conf = Math.round(85);
                }
              } else if (activeMode === 'landmarks') {
                const seed = (avg.r + avg.g + avg.b) % 3;
                if (seed === 0) {
                  detected = classA;
                } else if (seed === 1) {
                  detected = classB;
                } else {
                  detected = classC;
                }
                conf = Math.round(88 + Math.sin(Date.now() / 1000) * 8);
              }

              if (!manualOverride) {
                setCurrentClass(detected);
                setConfidence(conf);
              }
            }

            // Trigger listeners
            const activeLabel = (manualOverride || currentClass).toLowerCase().trim();
            // Match with and without emoji
            const cleanLabel = activeLabel.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "").trim();
            
            if (classDetectListeners.current[activeLabel]) {
              classDetectListeners.current[activeLabel].forEach(cb => cb());
            } else if (classDetectListeners.current[cleanLabel]) {
              classDetectListeners.current[cleanLabel].forEach(cb => cb());
            }
          }
        }
        await new Promise(res => setTimeout(res, 250));
      }
    };
    
    classifyLoop();
    
    return () => {
      active = false;
    };
  }, [isTrained, avgColorA, avgColorB, avgColorC, classA, classB, classC, activeMode, manualOverride, currentClass]);

  // Capture image helper
  const captureSnapshot = (target: 'a' | 'b' | 'c') => {
    let dataUrl = '';
    let avgColor = { r: 120, g: 120, b: 120 };
    
    if (videoRef.current && videoRef.current.readyState === 4) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 90;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Crop center 50% (Region of Interest)
        const vW = video.videoWidth || 320;
        const vH = video.videoHeight || 240;
        const cropW = vW * 0.5;
        const cropH = vH * 0.5;
        const cropX = (vW - cropW) / 2;
        const cropY = (vH - cropH) / 2;

        ctx.drawImage(video, cropX, cropY, cropW, cropH, 0, 0, 120, 90);
        dataUrl = canvas.toDataURL('image/jpeg');
        
        const imgData = ctx.getImageData(0, 0, 120, 90).data;
        let rSum = 0, gSum = 0, bSum = 0;
        for (let i = 0; i < imgData.length; i += 4) {
          rSum += imgData[i];
          gSum += imgData[i+1];
          bSum += imgData[i+2];
        }
        const count = imgData.length / 4;
        avgColor = { r: Math.round(rSum / count), g: Math.round(gSum / count), b: Math.round(bSum / count) };
      }
    } else {
      // Offline fallback cards: Draw a beautiful SVG showing the object name
      const colors = {
        a: { r: 59, g: 130, b: 246, hex: '%233b82f6' },
        b: { r: 236, g: 72, b: 153, hex: '%23ec4899' },
        c: { r: 16, g: 185, b: 129, hex: '%2310b981' }
      };
      
      let emoji = '🟫';
      let title = 'Object';
      if (target === 'a') {
        emoji = classA.includes('🟫') || classA.toLowerCase().includes('cocoa') ? '🟫' : '🍎';
        title = classA;
      } else if (target === 'b') {
        emoji = classB.includes('🟨') || classB.toLowerCase().includes('banana') ? '🍌' : '🍌';
        title = classB;
      } else {
        emoji = classC.includes('🟩') || classC.toLowerCase().includes('leaf') ? '🍃' : '🍃';
        title = classC;
      }

      dataUrl = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90"><rect width="100%" height="100%" fill="${colors[target].hex}"/><text x="60" y="42" font-size="28" text-anchor="middle">${emoji}</text><text x="60" y="70" font-size="9" fill="white" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}</text></svg>`;
      avgColor = { r: colors[target].r, g: colors[target].g, b: colors[target].b };
    }
    
    if (target === 'a') {
      setImagesA(prev => [...prev.slice(-3), dataUrl]);
      setSamplesA(prev => [...prev.slice(-5), avgColor]);
      setAvgColorA(avgColor);
    } else if (target === 'b') {
      setImagesB(prev => [...prev.slice(-3), dataUrl]);
      setSamplesB(prev => [...prev.slice(-5), avgColor]);
      setAvgColorB(avgColor);
    } else {
      setImagesC(prev => [...prev.slice(-3), dataUrl]);
      setSamplesC(prev => [...prev.slice(-5), avgColor]);
      setAvgColorC(avgColor);
    }
  };

  const startTraining = () => {
    if (imagesA.length === 0 || imagesB.length === 0) {
      alert('Please capture at least 1 image for Class A and Class B first!');
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
          confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
          return 100;
        }
        return p + 10;
      });
    }, 150);
  };

  // Trigger listeners when manual override changes
  useEffect(() => {
    if (manualOverride) {
      const label = manualOverride.toLowerCase().trim();
      const cleanLabel = label.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "").trim();
      
      if (classDetectListeners.current[label]) {
        classDetectListeners.current[label].forEach(cb => cb());
      } else if (classDetectListeners.current[cleanLabel]) {
        classDetectListeners.current[cleanLabel].forEach(cb => cb());
      }
    }
  }, [manualOverride]);

  // Helper to render SVG Overlays based on active mode
  const renderSVGOverlay = () => {
    const activeLabel = manualOverride || currentClass;
    const isA = activeLabel.includes(classA);
    const isB = activeLabel.includes(classB);
    const isC = activeLabel.includes(classC);

    if (activeMode === 'gestures') {
      // HAND SKELETON OVERLAY (Green neon lines)
      let wrist = { x: 160 + wobble.x, y: 200 + wobble.y };
      let palm = { x: 160 + wobble.x, y: 130 + wobble.y };
      
      // Default finger heights/curl angles based on gesture
      let f1 = 30, f2 = 45, f3 = 47, f4 = 43, f5 = 37; // extended lengths
      if (isA) {
        // Rock (all curled)
        f1 = 10; f2 = 12; f3 = 12; f4 = 10; f5 = 8;
      } else if (isC) {
        // Scissors (only Index and Middle extended)
        f1 = 12; f2 = 45; f3 = 47; f4 = 10; f5 = 8;
      }

      return (
        <svg viewBox="0 0 320 240" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <g stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85">
            {/* Palm Base */}
            <path d={`M ${palm.x - 20} ${palm.y} Q ${palm.x} ${palm.y + 8} ${palm.x + 20} ${palm.y} L ${wrist.x} ${wrist.y + 10} Z`} fill="rgba(16, 185, 129, 0.05)" />
            {/* Thumb */}
            <path d={`M ${palm.x - 18} ${palm.y} L ${palm.x - 32} ${palm.y - f1/2} L ${palm.x - 45} ${palm.y - f1}`} />
            {/* Index Finger */}
            <path d={`M ${palm.x - 12} ${palm.y - 4} L ${palm.x - 16} ${palm.y - 20 - f2/2} L ${palm.x - 18} ${palm.y - 25 - f2}`} />
            {/* Middle Finger */}
            <path d={`M ${palm.x} ${palm.y - 6} L ${palm.x} ${palm.y - 25 - f3/2} L ${palm.x} ${palm.y - 30 - f3}`} />
            {/* Ring Finger */}
            <path d={`M ${palm.x + 12} ${palm.y - 4} L ${palm.x + 15} ${palm.y - 20 - f4/2} L ${palm.x + 17} ${palm.y - 25 - f4}`} />
            {/* Pinky Finger */}
            <path d={`M ${palm.x + 20} ${palm.y} L ${palm.x + 28} ${palm.y - 15 - f5/2} L ${palm.x + 34} ${palm.y - 20 - f5}`} />
            
            {/* Skeleton Joint Nodes */}
            <circle cx={palm.x} cy={palm.y} r="4" fill="#34d399" />
            <circle cx={wrist.x} cy={wrist.y + 10} r="5" fill="#34d399" />
          </g>
        </svg>
      );
    }

    if (activeMode === 'emotions') {
      // FACE MESH OVERLAY (Blue neon face mesh)
      let cx = 160 + wobble.x;
      let cy = 95 + wobble.y;
      
      // Face elements animation
      let mouthPath = `M ${cx - 20} ${cy + 20} Q ${cx} ${cy + 20} ${cx + 20} ${cy + 20}`; // Flat
      let eyeBrowY = cy - 15;
      let eyeBrowCurve = 0;

      if (isA) {
        // Happy (Smile + Arched Eyebrows)
        mouthPath = `M ${cx - 20} ${cy + 15} Q ${cx} ${cy + 30} ${cx + 20} ${cy + 15}`;
        eyeBrowY = cy - 18;
        eyeBrowCurve = -3;
      } else if (isB) {
        // Sad (Frown + Slanted Eyebrows)
        mouthPath = `M ${cx - 20} ${cy + 25} Q ${cx} ${cy + 12} ${cx + 20} ${cy + 25}`;
        eyeBrowY = cy - 13;
        eyeBrowCurve = 2;
      } else if (isC) {
        // Surprised (O-mouth + High Eyebrows)
        mouthPath = `M ${cx - 10} ${cy + 20} Q ${cx} ${cy + 10} ${cx + 10} ${cy + 20} Q ${cx} ${cy + 30} ${cx - 10} ${cy + 20}`;
        eyeBrowY = cy - 22;
      }

      return (
        <svg viewBox="0 0 320 240" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <g stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.8">
            {/* Face Contour Oval */}
            <ellipse cx={cx} cy={cy + 6} rx="40" ry="52" strokeDasharray="3 3" />
            <ellipse cx={cx} cy={cy + 6} rx="36" ry="48" />
            
            {/* Left Eye & Eyebrow */}
            <circle cx={cx - 14} cy={cy - 6} r="4" fill="#38bdf8" />
            <path d={`M ${cx - 22} ${eyeBrowY + eyeBrowCurve} Q ${cx - 14} ${eyeBrowY} ${cx - 6} ${eyeBrowY + eyeBrowCurve}`} />

            {/* Right Eye & Eyebrow */}
            <circle cx={cx + 14} cy={cy - 6} r="4" fill="#38bdf8" />
            <path d={`M ${cx + 6} ${eyeBrowY + eyeBrowCurve} Q ${cx + 14} ${eyeBrowY} ${cx + 22} ${eyeBrowY + eyeBrowCurve}`} />

            {/* Nose Bridge */}
            <path d={`M ${cx} ${cy - 8} L ${cx} ${cy + 8} L ${cx - 5} ${cy + 10}`} />

            {/* Mouth */}
            <path d={mouthPath} strokeWidth="3" strokeLinecap="round" fill={isC ? "rgba(14,165,233,0.1)" : "none"} />

            {/* Cheek tracking marks */}
            <path d={`M ${cx - 28} ${cy + 6} L ${cx - 22} ${cy + 10}`} />
            <path d={`M ${cx + 28} ${cy + 6} L ${cx + 22} ${cy + 10}`} />
          </g>
        </svg>
      );
    }

    if (activeMode === 'landmarks') {
      // GHANA LANDMARKS (Targeting crosshair bounding box)
      const targetName = isA ? 'INDEPENDENCE_ARCH_GH' : isB ? 'KAKUM_CANOPY_WALK' : isC ? 'LARABANGA_MOSQUE' : 'SCANNING_LANDSCAPE';
      return (
        <svg viewBox="0 0 320 240" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {/* Bounding Box */}
          <g stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.9">
            {/* Top-Left Corner */}
            <path d="M 50 35 L 35 35 L 35 50" />
            {/* Top-Right Corner */}
            <path d="M 270 35 L 285 35 L 285 50" />
            {/* Bottom-Left Corner */}
            <path d="M 35 155 L 35 170 L 50 170" />
            {/* Bottom-Right Corner */}
            <path d="M 285 155 L 285 170 L 270 170" />
            
            {/* Center target dot */}
            <circle cx="160" cy="102" r="3" fill="#fbbf24" />
            <circle cx="160" cy="102" r="14" strokeDasharray="3 3" />
          </g>
          
          {/* Scanning Line */}
          <line x1="35" y1={55 + Math.sin(Date.now() / 250) * 55} x2="285" y2={55 + Math.sin(Date.now() / 250) * 55} stroke="rgba(251,191,36,0.35)" strokeWidth="1.5" />
          
          {/* Target Telemetry Label */}
          <g fill="#fbbf24" fontFamily="monospace" fontSize="8" fontWeight="bold" opacity="0.95">
            <text x="40" y="48">🎯 ID: {targetName}</text>
            <text x="40" y="163">📡 SIGNAL: LOCK_ON</text>
            <text x="210" y="163">MATCH: {confidence}%</text>
          </g>
        </svg>
      );
    }

    // Default 'custom' mode overlay (Color Target Box - Center 50% ROI)
    return (
      <svg viewBox="0 0 320 240" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {/* ROI Bounding Box */}
        <g stroke="#a855f7" strokeWidth="1.5" fill="none" opacity="0.8">
          <rect x="80" y="60" width="160" height="120" rx="12" strokeDasharray="4 4" fill="rgba(168, 85, 247, 0.03)" />
        </g>
        
        {/* Bounding Box Corner Brackets */}
        <g stroke="#c084fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Top-Left Bracket */}
          <path d="M 95 60 L 80 60 L 80 75" />
          {/* Top-Right Bracket */}
          <path d="M 225 60 L 240 60 L 240 75" />
          {/* Bottom-Left Bracket */}
          <path d="M 80 165 L 80 180 L 95 180" />
          {/* Bottom-Right Bracket */}
          <path d="M 240 165 L 240 180 L 225 180" />
        </g>

        {/* Center Target Dot */}
        <circle cx="160" cy="120" r="3.5" fill="#c084fc" opacity="0.9" />
        <circle cx="160" cy="120" r="16" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

        {/* Info Label inside box */}
        <g fill="white" fontFamily="sans-serif" fontSize="6.5" opacity="0.6">
          <text x="160" y="80" textAnchor="middle" fontWeight="bold">PLACE COLOR TARGET HERE</text>
        </g>

        {/* Color RGB Indicator Pill */}
        <g fill="white" fontFamily="monospace" fontSize="8" opacity="0.95">
          <rect x="100" y="192" width="120" height="20" rx="10" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
          <text x="160" y="205" fill="#c084fc" textAnchor="middle" fontWeight="bold">RGB({liveColor.r},{liveColor.g},{liveColor.b})</text>
        </g>
      </svg>
    );
  };

  const renderSimulatedCard = (itemName: string) => {
    let emoji = '🤖';
    if (itemName.includes('🟫') || itemName.toLowerCase().includes('cocoa')) emoji = '🟫';
    else if (itemName.includes('🟨') || itemName.toLowerCase().includes('banana')) emoji = '🍌';
    else if (itemName.includes('🟩') || itemName.toLowerCase().includes('leaf') || itemName.toLowerCase().includes('green')) emoji = '🍃';
    else if (itemName.includes('✊') || itemName.toLowerCase().includes('rock')) emoji = '✊';
    else if (itemName.includes('✋') || itemName.toLowerCase().includes('paper')) emoji = '✋';
    else if (itemName.includes('✌️') || itemName.toLowerCase().includes('scissors')) emoji = '✌️';
    else if (itemName.includes('😊') || itemName.toLowerCase().includes('happy')) emoji = '😊';
    else if (itemName.includes('😢') || itemName.toLowerCase().includes('sad')) emoji = '😢';
    else if (itemName.includes('😲') || itemName.toLowerCase().includes('surprised')) emoji = '😲';
    else if (itemName.includes('🏛️') || itemName.toLowerCase().includes('arch') || itemName.toLowerCase().includes('independence')) emoji = '🏛️';
    else if (itemName.includes('🌲') || itemName.toLowerCase().includes('canopy') || itemName.toLowerCase().includes('kakum')) emoji = '🌲';
    else if (itemName.includes('🕌') || itemName.toLowerCase().includes('mosque') || itemName.toLowerCase().includes('larabanga')) emoji = '🕌';

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        flexDirection: 'column',
        gap: '0.4rem'
      }}>
        <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.35))', animation: 'floatCard 3s ease-in-out infinite' }}>
          {emoji}
        </span>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
          {itemName}
        </span>
        <style>{`
          @keyframes floatCard {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}</style>
      </div>
    );
  };

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
      
      {/* Header Tabs */}
      <div style={{ display: 'flex', gap: '0.25rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="no-print">
        {(['custom', 'gestures', 'emotions', 'landmarks'] as AIMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveMode(mode)}
            style={{
              padding: '0.35rem 0.65rem',
              borderRadius: '8px',
              border: 'none',
              background: activeMode === mode ? 'var(--kids-purple)' : 'rgba(255,255,255,0.04)',
              color: activeMode === mode ? 'white' : '#94a3b8',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s'
            }}
          >
            {mode === 'custom' ? '🎨 Color Lab' : mode === 'gestures' ? '✊ Gestures' : mode === 'emotions' ? '😊 Emotions' : '🇬🇭 Landmarks'}
          </button>
        ))}
      </div>

      {isTraining ? (
        /* Neural Network Training Screen */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: '#0b0f19', borderRadius: '16px' }}>
          <div style={{ position: 'relative', width: '100%', height: '120px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '1.5rem' }}>
            {/* Input layer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="neuro-node pulse-glow" style={{ background: '#3b82f6' }}></span>
              <span className="neuro-node pulse-glow" style={{ background: '#3b82f6' }}></span>
              <span className="neuro-node pulse-glow" style={{ background: '#3b82f6' }}></span>
            </div>
            {/* Synapses lines */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <line x1="30%" y1="20%" x2="50%" y2="25%" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1s linear infinite' }} />
              <line x1="30%" y1="50%" x2="50%" y2="25%" stroke="#ec4899" strokeWidth="1.5" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1.2s linear infinite' }} />
              <line x1="30%" y1="80%" x2="50%" y2="75%" stroke="#ec4899" strokeWidth="1.5" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1.1s linear infinite' }} />
              <line x1="50%" y1="25%" x2="70%" y2="50%" stroke="#10b981" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 1s linear infinite' }} />
              <line x1="50%" y1="75%" x2="70%" y2="50%" stroke="#10b981" strokeWidth="2" opacity="0.6" strokeDasharray="5 5" style={{ animation: 'dash 0.8s linear infinite' }} />
            </svg>
            {/* Hidden layer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <span className="neuro-node pulse-glow" style={{ background: '#ec4899', animationDelay: '0.2s' }}></span>
              <span className="neuro-node pulse-glow" style={{ background: '#a855f7', animationDelay: '0.4s' }}></span>
            </div>
            {/* Output layer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span className="neuro-node pulse-glow" style={{ background: '#10b981', animationDelay: '0.6s' }}></span>
              <span className="neuro-node pulse-glow" style={{ background: '#f59e0b', animationDelay: '0.7s' }}></span>
            </div>
          </div>
          <h4 style={{ margin: 0, fontFamily: '"Baloo 2", cursive', color: 'var(--kids-purple)', fontSize: '1rem' }}>Adjusting Weights...</h4>
          <p style={{ margin: '0.15rem 0 0.75rem', fontSize: '0.75rem', color: '#64748b' }}>Loss: {(1 - trainingProgress/100).toFixed(4)} · Acc: {(trainingProgress/100).toFixed(2)}</p>
          <div style={{ width: '80%', height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${trainingProgress}%`, height: '100%', background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)', transition: 'width 0.15s ease' }}></div>
          </div>
        </div>
      ) : isTrained ? (
        /* Live Classification Screen */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '200px', background: '#000', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            {manualOverride ? (
              renderSimulatedCard(manualOverride)
            ) : hasCamera ? (
              <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1e293b', flexDirection: 'column', gap: '0.5rem' }}>
                <Camera size={32} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Simulation Feed Active</span>
              </div>
            )}
            
            {/* Dynamic Interactive SVG Tracking Overlay */}
            {renderSVGOverlay()}
            
            {/* Output HUD overlay */}
            <div style={{
              position: 'absolute',
              bottom: '0.5rem',
              left: '0.5rem',
              right: '0.5rem',
              background: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(6px)',
              padding: '0.5rem 0.75rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>AI Prediction</div>
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

          {/* Manual override selector */}
          <div style={{ background: '#1e293b', padding: '0.6rem 0.8rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1' }}>Simulate Object:</span>
            <select 
              value={manualOverride}
              onChange={(e) => setManualOverride(e.target.value)}
              style={{ background: '#0f172a', border: '1px solid #334155', color: 'white', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '6px', cursor: 'pointer' }}
            >
              <option value="">Live Camera Feed</option>
              <option value={classA}>{classA}</option>
              <option value={classB}>{classB}</option>
              <option value={classC}>{classC}</option>
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
          <div style={{ position: 'relative', width: '100%', height: '120px', background: '#000', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
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
            
            {/* Center target ring on capture (matches ROI Center 50%) */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ width: '60px', height: '60px', border: '2px dashed rgba(168, 85, 247, 0.45)', borderRadius: '8px' }} />
            </div>
          </div>

          {/* Classes Setup */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.4rem' }}>
            {/* Class A Box */}
            <div style={{ background: '#1e293b', padding: '0.45rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid rgba(59,130,246,0.15)' }}>
              <input 
                type="text" 
                value={classA}
                onChange={(e) => setClassA(e.target.value)}
                disabled={activeMode !== 'custom'}
                style={{ background: '#0f172a', border: 'none', borderBottom: '2px solid #3b82f6', color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '2px 4px', width: '100%' }}
              />
              <button 
                onClick={() => captureSnapshot('a')}
                style={{ background: '#3b82f6', border: 'none', color: 'white', fontSize: '0.7rem', fontWeight: 800, padding: '0.35rem', borderRadius: '6px', cursor: 'pointer' }}
              >
                📸 Snap
              </button>
              <div style={{ fontSize: '0.6rem', color: '#94a3b8', textAlign: 'center' }}>{imagesA.length} images</div>
              <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', minHeight: '16px' }}>
                {imagesA.map((img, i) => (
                  <img key={i} src={img} alt="" style={{ width: '14px', height: '14px', borderRadius: '2px', objectFit: 'cover' }} />
                ))}
              </div>
            </div>

            {/* Class B Box */}
            <div style={{ background: '#1e293b', padding: '0.45rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid rgba(236,72,153,0.15)' }}>
              <input 
                type="text" 
                value={classB}
                onChange={(e) => setClassB(e.target.value)}
                disabled={activeMode !== 'custom'}
                style={{ background: '#0f172a', border: 'none', borderBottom: '2px solid #ec4899', color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '2px 4px', width: '100%' }}
              />
              <button 
                onClick={() => captureSnapshot('b')}
                style={{ background: '#ec4899', border: 'none', color: 'white', fontSize: '0.7rem', fontWeight: 800, padding: '0.35rem', borderRadius: '6px', cursor: 'pointer' }}
              >
                📸 Snap
              </button>
              <div style={{ fontSize: '0.6rem', color: '#94a3b8', textAlign: 'center' }}>{imagesB.length} images</div>
              <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', minHeight: '16px' }}>
                {imagesB.map((img, i) => (
                  <img key={i} src={img} alt="" style={{ width: '14px', height: '14px', borderRadius: '2px', objectFit: 'cover' }} />
                ))}
              </div>
            </div>

            {/* Class C Box */}
            <div style={{ background: '#1e293b', padding: '0.45rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid rgba(16,185,129,0.15)' }}>
              <input 
                type="text" 
                value={classC}
                onChange={(e) => setClassC(e.target.value)}
                disabled={activeMode !== 'custom'}
                style={{ background: '#0f172a', border: 'none', borderBottom: '2px solid #10b981', color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '2px 4px', width: '100%' }}
              />
              <button 
                onClick={() => captureSnapshot('c')}
                style={{ background: '#10b981', border: 'none', color: 'white', fontSize: '0.7rem', fontWeight: 800, padding: '0.35rem', borderRadius: '6px', cursor: 'pointer' }}
              >
                📸 Snap
              </button>
              <div style={{ fontSize: '0.6rem', color: '#94a3b8', textAlign: 'center' }}>{imagesC.length} images</div>
              <div style={{ display: 'flex', gap: '2px', overflowX: 'auto', minHeight: '16px' }}>
                {imagesC.map((img, i) => (
                  <img key={i} src={img} alt="" style={{ width: '14px', height: '14px', borderRadius: '2px', objectFit: 'cover' }} />
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
            Train Neural Network 🧠
          </button>
        </div>
      )}

      {/* Styled animation keyframes and tags */}
      <style>{`
        .neuro-node {
          width: 12px;
          height: 12px;
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
