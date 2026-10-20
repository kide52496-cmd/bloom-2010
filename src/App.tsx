import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { PetalCanvas } from './components/PetalCanvas';
import { HeroSection } from './components/HeroSection';
import { CuteFlowerPicker } from './components/CuteFlowerPicker';
import { soundManager } from './utils/sound';

export function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [petalsActive, setPetalsActive] = useState(true);

  // Auto-start ambient music and petals on load
  useEffect(() => {
    soundManager.startAutoMusic();
  }, []);

  const handleToggleSound = useCallback(() => {
    const isPlaying = soundManager.toggleMute();
    setIsMuted(!isPlaying);
  }, []);

  const handleTogglePetals = useCallback(() => {
    setPetalsActive((prev) => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="app-container">
      {/* Floating Petals Canvas - Auto Active */}
      <PetalCanvas active={petalsActive} />

      {/* Main Top Navigation */}
      <Navbar
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        petalsActive={petalsActive}
        onTogglePetals={handleTogglePetals}
        onNavigate={scrollToSection}
      />

      {/* Main Content: 100% Focused on Friends & Cute Flowers */}
      <main className="main-content">
        <HeroSection
          onPickFlower={() => scrollToSection('cute-picker')}
        />

        {/* The Star Feature: Cute Flower Fortune Picker for Friends */}
        <CuteFlowerPicker />
      </main>
    </div>
  );
}

export default App;
