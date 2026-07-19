import React, { useState, useImperativeHandle, forwardRef } from 'react';

export interface ElectronicsHandle {
  setLED: (color: string, state: string) => Promise<void>;
  playBuzzer: (frequency: number, duration: number) => Promise<void>;
  setServo: (pin: number, angle: number) => Promise<void>;
  reset: () => void;
}

const ElectronicsSimulator = forwardRef<ElectronicsHandle>((_, ref) => {
  const [ledStates, setLedStates] = useState<Record<string, boolean>>({
    red: false,
    yellow: false,
    green: false,
  });

  const [isBuzzerActive, setIsBuzzerActive] = useState(false);
  const [servoAngle, setServoAngle] = useState(90);

  useImperativeHandle(ref, () => ({
    setLED: async (color: string, state: string) => {
      const isOn = state.toLowerCase() === 'on';
      setLedStates(prev => ({
        ...prev,
        [color.toLowerCase()]: isOn,
      }));
      // Wait for 850ms so the block-execution pauses visibly for children
      await new Promise(resolve => setTimeout(resolve, 850));
    },
    playBuzzer: async (frequency: number, durationMs: number) => {
      setIsBuzzerActive(true);
      
      // Play a synthesizer beep using standard Web Audio API
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durationMs / 1000);
          
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + durationMs / 1000);
          
          setTimeout(() => {
            try { audioCtx.close(); } catch(e) {}
          }, durationMs + 200);
        }
      } catch (e) {
        console.error('Buzzer Web Audio error:', e);
      }

      await new Promise(resolve => setTimeout(resolve, durationMs));
      setIsBuzzerActive(false);
    },
    setServo: async (pin: number, angle: number) => {
      // Clamp angle between 0 and 180
      const clampedAngle = Math.max(0, Math.min(180, angle));
      setServoAngle(clampedAngle);
      // Wait for 800ms to simulate physical rotation delay
      await new Promise(resolve => setTimeout(resolve, 800));
    },
    reset: () => {
      setLedStates({
        red: false,
        yellow: false,
        green: false,
      });
      setIsBuzzerActive(false);
      setServoAngle(90);
    }
  }));

  // SVG Drawing of the breadboard, board, buzzer, and servo
  return (
    <div className="electronics-simulator-container" style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0b0f19',
      borderRadius: '20px',
      padding: '1rem',
      position: 'relative'
    }}>
      {/* Title */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        color: '#64748b',
        fontSize: '0.8rem',
        fontWeight: 800,
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        🔌 VIRTUAL CIRCUIT BREADBOARD
      </div>

      <svg viewBox="0 0 400 300" width="100%" height="100%" style={{ maxHeight: '260px', marginTop: '1.2rem' }}>
        {/* Glow Filters */}
        <defs>
          <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-yellow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Workbench Grid background */}
        <rect width="400" height="300" rx="16" fill="#0f172a" />
        <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200 M 0 250 L 400 250" stroke="#1e293b" strokeWidth="0.5" />
        <path d="M 50 0 L 50 300 M 100 0 L 100 300 M 150 0 L 150 300 M 200 0 L 200 300 M 250 0 L 250 300 M 300 0 L 300 300 M 350 0 L 350 300" stroke="#1e293b" strokeWidth="0.5" />

        {/* Arduino / Microcontroller Board */}
        <rect x="25" y="60" width="110" height="180" rx="8" fill="#1e3a8a" stroke="#2563eb" strokeWidth="2" />
        <rect x="35" y="70" width="90" height="25" rx="4" fill="#0f172a" />
        {/* Microcontroller Chips */}
        <rect x="65" y="140" width="30" height="30" rx="2" fill="#0b0f19" />
        <circle cx="80" cy="155" r="4" fill="#334155" />
        {/* Board Labels */}
        <text x="80" y="86" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">KONE BOARD V1</text>
        
        {/* Pins headers */}
        <rect x="123" y="100" width="8" height="100" rx="1" fill="#334155" />
        {[...Array(6)].map((_, i) => (
          <circle key={i} cx="127" cy="110 + i * 16" r="2.5" fill="#f8fafc" />
        ))}
        {/* Pin labels */}
        <text x="116" y="113" fill="#93c5fd" fontSize="7" textAnchor="end" fontFamily="sans-serif">D0 (Red)</text>
        <text x="116" y="129" fill="#93c5fd" fontSize="7" textAnchor="end" fontFamily="sans-serif">D1 (Yel)</text>
        <text x="116" y="145" fill="#93c5fd" fontSize="7" textAnchor="end" fontFamily="sans-serif">D2 (Grn)</text>
        <text x="116" y="161" fill="#93c5fd" fontSize="7" textAnchor="end" fontFamily="sans-serif">D3 (Buzz)</text>
        <text x="116" y="177" fill="#93c5fd" fontSize="7" textAnchor="end" fontFamily="sans-serif">D4 (Serv)</text>
        <text x="116" y="193" fill="#93c5fd" fontSize="7" textAnchor="end" fontFamily="sans-serif">GND</text>

        {/* Breadboard */}
        <rect x="180" y="50" width="190" height="200" rx="8" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="190" y="60" width="10" height="180" rx="2" fill="#f1f5f9" /> {/* Left Rail */}
        <rect x="350" y="60" width="10" height="180" rx="2" fill="#f1f5f9" /> {/* Right Rail */}
        
        {/* Power rail lines */}
        <line x1="192" y1="65" x2="192" y2="235" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="198" y1="65" x2="198" y2="235" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Breadboard holes grid */}
        {[...Array(10)].map((_, col) => (
          [...Array(12)].map((_, row) => {
            const x = 220 + col * 12;
            const y = 70 + row * 14;
            // Leave center separator gap
            if (col === 5) return null;
            return (
              <circle key={`${col}-${row}`} cx={x} cy={y} r="1.5" fill="#475569" />
            );
          })
        ))}

        {/* Wires */}
        {/* Red Wire */}
        <path d="M 127 110 Q 160 110 244 84" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        {/* Yellow Wire */}
        <path d="M 127 126 Q 160 135 280 84" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        {/* Green Wire */}
        <path d="M 127 142 Q 160 160 316 84" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        {/* GND/Black Wire */}
        <path d="M 127 190 Q 150 220 198 196" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        {/* Buzzer Wire (Purple) */}
        <path d="M 127 160 Q 150 170 230 152" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        {/* Servo Signal Wire (Orange) */}
        <path d="M 127 176 Q 160 190 310 195" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.85" />

        {/* Resistors */}
        {/* R1 */}
        <line x1="244" y1="126" x2="198" y2="126" stroke="#b45309" strokeWidth="3" />
        <circle cx="210" cy="126" r="3.5" fill="#d97706" />
        <rect x="215" y="125" width="2" height="2" fill="#ef4444" />
        <rect x="220" y="125" width="2" height="2" fill="#eab308" />

        {/* R2 */}
        <line x1="280" y1="126" x2="198" y2="154" stroke="#b45309" strokeWidth="3" />
        <circle cx="230" cy="136" r="3.5" fill="#d97706" />
        <rect x="233" y="134" width="2" height="2" fill="#ef4444" />
        <rect x="238" y="137" width="2" height="2" fill="#eab308" />

        {/* R3 */}
        <line x1="316" y1="126" x2="198" y2="182" stroke="#b45309" strokeWidth="3" />
        <circle cx="250" cy="148" r="3.5" fill="#d97706" />
        <rect x="251" y="145" width="2" height="2" fill="#ef4444" />
        <rect x="256" y="149" width="2" height="2" fill="#eab308" />

        {/* LEDs */}
        {/* Red LED */}
        <g>
          <line x1="244" y1="84" x2="244" y2="126" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="248" y1="84" x2="248" y2="126" stroke="#94a3b8" strokeWidth="1.5" />
          {ledStates.red && (
            <circle cx="244" cy="84" r="16" fill="rgba(239, 68, 68, 0.4)" filter="url(#glow-red)" />
          )}
          <rect x="239" y="70" width="10" height="15" rx="5" fill={ledStates.red ? '#ef4444' : '#7f1d1d'} stroke={ledStates.red ? '#fca5a5' : '#450a0a'} strokeWidth="1" />
          <rect x="237" y="83" width="14" height="3" fill={ledStates.red ? '#ef4444' : '#7f1d1d'} />
        </g>

        {/* Yellow LED */}
        <g>
          <line x1="280" y1="84" x2="280" y2="126" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="284" y1="84" x2="284" y2="126" stroke="#94a3b8" strokeWidth="1.5" />
          {ledStates.yellow && (
            <circle cx="280" cy="84" r="16" fill="rgba(234, 179, 8, 0.4)" filter="url(#glow-yellow)" />
          )}
          <rect x="275" y="70" width="10" height="15" rx="5" fill={ledStates.yellow ? '#eab308' : '#713f12'} stroke={ledStates.yellow ? '#fef08a' : '#422006'} strokeWidth="1" />
          <rect x="273" y="83" width="14" height="3" fill={ledStates.yellow ? '#eab308' : '#713f12'} />
        </g>

        {/* Green LED */}
        <g>
          <line x1="316" y1="84" x2="316" y2="126" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="320" y1="84" x2="320" y2="126" stroke="#94a3b8" strokeWidth="1.5" />
          {ledStates.green && (
            <circle cx="316" cy="84" r="16" fill="rgba(34, 197, 94, 0.4)" filter="url(#glow-green)" />
          )}
          <rect x="311" y="70" width="10" height="15" rx="5" fill={ledStates.green ? '#22c55e' : '#14532d'} stroke={ledStates.green ? '#86efac' : '#052e16'} strokeWidth="1" />
          <rect x="309" y="83" width="14" height="3" fill={ledStates.green ? '#22c55e' : '#14532d'} />
        </g>

        {/* Piezo Buzzer */}
        <g>
          {/* Connection Legs */}
          <line x1="230" y1="152" x2="230" y2="170" stroke="#475569" strokeWidth="2" />
          
          {/* Sound Waves when active */}
          {isBuzzerActive && (
            <g stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.8">
              <circle cx="230" cy="170" r="22">
                <animate attributeName="r" values="18;28" dur="0.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="0.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="230" cy="170" r="26">
                <animate attributeName="r" values="22;34" dur="0.4s" repeatCount="indefinite" begin="0.15s" />
                <animate attributeName="opacity" values="1;0" dur="0.4s" repeatCount="indefinite" begin="0.15s" />
              </circle>
            </g>
          )}

          {/* Buzzer Body */}
          <circle cx="230" cy="170" r="16" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="230" cy="170" r="14" fill="#0f172a" opacity="0.3" />
          <circle cx="230" cy="170" r="4" fill="#020617" />
          <text x="238" y="165" fill="#f8fafc" fontSize="7" fontWeight="bold">+</text>
        </g>

        {/* SG90 Servo Motor */}
        <g>
          {/* Wire connection */}
          <line x1="310" y1="195" x2="310" y2="210" stroke="#f97316" strokeWidth="1.5" />
          
          {/* Servo Body */}
          <rect x="295" y="200" width="45" height="28" rx="3" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5" />
          {/* Mounting tabs */}
          <rect x="290" y="210" width="5" height="8" rx="1" fill="#2563eb" />
          <rect x="340" y="210" width="5" height="8" rx="1" fill="#2563eb" />
          <circle cx="292.5" cy="214" r="1" fill="#f1f5f9" />
          <circle cx="342.5" cy="214" r="1" fill="#f1f5f9" />
          
          {/* Label */}
          <text x="317.5" y="224" fill="#93c5fd" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SG90</text>

          {/* Rotary Gear Shaft */}
          <circle cx="317.5" cy="210" r="5.5" fill="#cbd5e1" />
          
          {/* Rotatable Horn (arm) */}
          <g transform={`rotate(${servoAngle - 90}, 317.5, 210)`}>
            {/* Double Arm Horn */}
            <rect x="302" y="207.5" width="31" height="5" rx="2.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.5" />
            <circle cx="304.5" cy="210" r="1" fill="#475569" />
            <circle cx="330.5" cy="210" r="1" fill="#475569" />
            
            {/* Center screw */}
            <circle cx="317.5" cy="210" r="2.5" fill="#64748b" />
          </g>
        </g>
      </svg>
      
      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginTop: '0.8rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: ledStates.red ? '#ef4444' : '#7f1d1d', boxShadow: ledStates.red ? '0 0 8px #ef4444' : 'none' }}></span>
          Red (D0)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: ledStates.yellow ? '#eab308' : '#713f12', boxShadow: ledStates.yellow ? '0 0 8px #eab308' : 'none' }}></span>
          Yellow (D1)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: ledStates.green ? '#22c55e' : '#14532d', boxShadow: ledStates.green ? '0 0 8px #22c55e' : 'none' }}></span>
          Green (D2)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isBuzzerActive ? '#a855f7' : '#581c87', boxShadow: isBuzzerActive ? '0 0 8px #a855f7' : 'none' }}></span>
          Buzzer (D3)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '4px', background: '#2563eb' }}></span>
          Servo D4: {servoAngle}°
        </div>
      </div>
    </div>
  );
});

ElectronicsSimulator.displayName = 'ElectronicsSimulator';

export default ElectronicsSimulator;
