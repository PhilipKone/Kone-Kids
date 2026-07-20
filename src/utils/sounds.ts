// A simple Web Audio API based sound and music manager to avoid external assets
class SoundManager {
  private ctx: AudioContext | null = null;
  private musicInterval: any = null;
  private isMuted: boolean = false;
  private isMusicOn: boolean = false;
  private currentStep = 0;

  private triggerHaptic(duration: number = 10) {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(duration);
      } catch (e) {}
    }
  }

  constructor() {
    try {
      const savedMute = localStorage.getItem('kone_kids_muted');
      this.isMuted = savedMute === 'true';
      const savedMusic = localStorage.getItem('kone_kids_music_on');
      this.isMusicOn = savedMusic === 'true';
    } catch (e) {
      this.isMuted = false;
      this.isMusicOn = false;
    }
  }

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    
    // Start music sequencer if active and not already running
    if (this.isMusicOn && !this.isMuted && !this.musicInterval) {
      this.startSequencer();
    }
  }

  resumeAudio() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isMusicOn && !this.isMuted && !this.musicInterval) {
      this.startSequencer();
    }
  }

  getMuted(): boolean {
    return this.isMuted;
  }

  getMusicOn(): boolean {
    return this.isMusicOn;
  }

  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('kone_kids_muted', this.isMuted.toString());
    } catch (e) {}

    if (this.isMuted) {
      this.stopSequencer();
      if (this.ctx && this.ctx.state !== 'suspended') {
        this.ctx.suspend();
      }
    } else {
      this.init();
      if (this.isMusicOn) {
        this.startSequencer();
      }
    }
    return this.isMuted;
  }

  toggleMusic(): boolean {
    this.isMusicOn = !this.isMusicOn;
    try {
      localStorage.setItem('kone_kids_music_on', this.isMusicOn.toString());
    } catch (e) {}

    if (this.isMusicOn && !this.isMuted) {
      this.init();
      this.startSequencer();
    } else {
      this.stopSequencer();
    }
    return this.isMusicOn;
  }

  playClick() {
    this.triggerHaptic(10);
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  playSuccess() {
    this.triggerHaptic([30, 40, 30] as any);
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  playWin() {
    this.triggerHaptic([40, 50, 40, 50] as any);
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.1);
      gain.gain.setValueAtTime(0.08, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx!.destination);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.3);
    });
  }

  playCoin() {
    this.triggerHaptic(15);
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, now);
    osc.frequency.setValueAtTime(1318.51, now + 0.08);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  playExplosion() {
    this.triggerHaptic(50);
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(30, now + 0.3);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  playSnap() {
    this.triggerHaptic(8);
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  playTrash() {
    this.triggerHaptic(20);
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  private startSequencer() {
    if (!this.ctx || this.musicInterval) return;
    this.currentStep = 0;

    const tempo = 100; // BPM
    const stepDuration = 60 / tempo / 2; // 8th note duration (approx 300ms)

    this.musicInterval = setInterval(() => {
      if (this.isMuted || !this.isMusicOn || !this.ctx) return;
      if (this.ctx.state === 'suspended') return;

      const time = this.ctx.currentTime;
      const step = this.currentStep % 8;

      // Chord progression:
      // Step 0-3: Cmaj7 (C3, G3, E4, B4)
      // Step 4-7: Fmaj7 (F2, C3, A3, E4)
      const isC = step < 4;
      const bassFreq = isC ? 130.81 : 87.31; // C3 vs F2
      const chordNotes = isC ? [261.63, 329.63, 392.00, 493.88] : [349.23, 440.00, 523.25, 659.25]; // C4, E4, G4, B4 vs F4, A4, C4, E5

      // 1. Bass Note on Step 0 and 4
      if (step === 0 || step === 4) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(bassFreq, time);
        
        bassGain.gain.setValueAtTime(0.03, time);
        bassGain.gain.exponentialRampToValueAtTime(0.0001, time + stepDuration * 1.8);
        
        bassOsc.connect(bassGain);
        bassGain.connect(this.ctx.destination);
        bassOsc.start(time);
        bassOsc.stop(time + stepDuration * 1.8);
      }

      // 2. Soft Hi-Hat on Step 2 and 6
      if (step === 2 || step === 6) {
        const hatOsc = this.ctx.createOscillator();
        const hatGain = this.ctx.createGain();
        hatOsc.type = 'sine';
        hatOsc.frequency.setValueAtTime(7000, time);
        
        hatGain.gain.setValueAtTime(0.01, time);
        hatGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
        
        hatOsc.connect(hatGain);
        hatGain.connect(this.ctx.destination);
        hatOsc.start(time);
        hatOsc.stop(time + 0.06);
      }

      // 3. Ambient glitter note on step 1, 3, 5, 7
      if (step % 2 === 1) {
        const noteIdx = Math.floor(Math.random() * chordNotes.length);
        const freq = chordNotes[noteIdx];

        const arpOsc = this.ctx.createOscillator();
        const arpGain = this.ctx.createGain();
        arpOsc.type = 'sine';
        arpOsc.frequency.setValueAtTime(freq, time);

        arpGain.gain.setValueAtTime(0.01, time);
        arpGain.gain.exponentialRampToValueAtTime(0.0001, time + stepDuration * 1.2);

        arpOsc.connect(arpGain);
        arpGain.connect(this.ctx.destination);
        arpOsc.start(time);
        arpOsc.stop(time + stepDuration * 1.2);
      }

      this.currentStep++;
    }, stepDuration * 1000);
  }

  private stopSequencer() {
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }
}

export const sounds = new SoundManager();
export default sounds;
