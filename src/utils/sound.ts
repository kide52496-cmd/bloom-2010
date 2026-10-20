// Web Audio API Procedural Ambient Music & Interaction Chimes
// 100% offline, zero network requests, no CORS issues, no missing files.

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambientInterval: number | null = null;
  private masterGain: GainNode | null = null;
  private isPlayingAmbient: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public get muted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.initContext();
      this.startAmbient();
      this.playChime();
    } else {
      this.stopAmbient();
    }
    return !this.isMuted;
  }

  // Soft romantic chime when envelope or modal opens
  public playChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Celesta arpeggio)
      notes.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const noteGain = this.ctx!.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        noteGain.gain.setValueAtTime(0, now + i * 0.08);
        noteGain.gain.linearRampToValueAtTime(0.18, now + i * 0.08 + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 1.2);

        osc.connect(noteGain);
        noteGain.connect(this.masterGain!);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 1.25);
      });
    } catch {
      // Audio safety catch
    }
  }

  // Gentle flower bloom sound
  public playBloomSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const freqs = [392.00, 493.88, 587.33, 783.99, 987.77]; // G4, B4, D5, G5, B5
      freqs.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.001, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.06 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 1.5);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 1.6);
      });
    } catch {
      // Audio safety catch
    }
  }

  // Cute bubbly blossom sound when picking a flower
  public playCutePopSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      // High-pitched bright cheerful glockenspiel notes
      const notes = [659.25, 880.00, 1174.66, 1318.51, 1567.98]; // E5, A5, D6, E6, G6
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0, now + idx * 0.05);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.8);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.85);
      });
    } catch {
      // Audio safety catch
    }
  }

  // Soft paper rustle / seal click
  public playPaperRustle() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.15);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch {
      // Audio safety catch
    }
  }

  // Procedural soft ambient piano progression (Lydian / Major 7th peaceful chords)
  private startAmbient() {
    if (this.isPlayingAmbient) return;
    this.isPlayingAmbient = true;

    // Peaceful 4-bar chord progression: Fmaj7 -> Gsus4 -> Em7 -> Am9
    const progressions = [
      [349.23, 440.00, 523.25, 659.25], // F4, A4, C5, E5
      [392.00, 523.25, 587.33, 783.99], // G4, C5, D5, G5
      [329.63, 392.00, 493.88, 587.33], // E4, G4, B4, D5
      [220.00, 329.63, 392.00, 493.88, 523.25] // A3, E4, G4, B4, C5
    ];

    let step = 0;
    const playChordStep = () => {
      if (this.isMuted || !this.ctx || !this.masterGain) return;
      const currentChord = progressions[step % progressions.length];
      const baseTime = this.ctx.currentTime;

      // Arpeggiate chord gently
      currentChord.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, baseTime + idx * 0.35);

        const startTime = baseTime + idx * 0.35;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.06, startTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 3.8);

        osc.connect(gain);
        gain.connect(this.masterGain!);

        osc.start(startTime);
        osc.stop(startTime + 4.0);
      });

      step++;
    };

    playChordStep();
    this.ambientInterval = window.setInterval(playChordStep, 4500);
  }

  private stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientInterval !== null) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }
}

export const soundManager = new SoundManager();
