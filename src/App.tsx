import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { PetalCanvas } from './components/PetalCanvas';
import { HeroSection } from './components/HeroSection';
import { CuteFlowerPicker } from './components/CuteFlowerPicker';
import { soundManager } from './utils/sound';

export function App() {
  const [isMuted, setIsMuted] = useState(false);

  // Auto-start ambient music on load
  useEffect(() => {
    soundManager.startAutoMusic();
  }, []);

  const handleToggleSound = useCallback(() => {
    const isPlaying = soundManager.toggleMute();
    setIsMuted(!isPlaying);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="app-container">
      {/* Floating Petals Canvas - Always automatically active */}
      <PetalCanvas active={true} />

      {/* Clean Navbar */}
      <Navbar
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
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
