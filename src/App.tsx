import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { PetalCanvas } from './components/PetalCanvas';
import { HeroSection } from './components/HeroSection';
import { CuteFlowerPicker } from './components/CuteFlowerPicker';
import { GreetingGenerator } from './components/GreetingGenerator';
import { ClosingSection } from './components/ClosingSection';
import { soundManager } from './utils/sound';
import type { CustomCardData } from './types';

export function App() {
  const [isMuted, setIsMuted] = useState(soundManager.muted);
  const [petalsActive, setPetalsActive] = useState(true);
  const [generatorData] = useState<Partial<CustomCardData> | undefined>(undefined);

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
      {/* Floating Petals Canvas */}
      <PetalCanvas active={petalsActive} />

      {/* Main Top Navigation */}
      <Navbar
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        petalsActive={petalsActive}
        onTogglePetals={handleTogglePetals}
        onNavigate={scrollToSection}
      />

      {/* Main Application Sections - 100% Focused on Friends & Cute Flowers */}
      <main className="main-content">
        <HeroSection
          onPickFlower={() => scrollToSection('cute-picker')}
          onSendWish={() => scrollToSection('generator')}
        />

        {/* The Star Feature: Cute Flower Fortune Picker for Friends */}
        <CuteFlowerPicker onScrollToGenerator={() => scrollToSection('generator')} />

        {/* Custom Friend Greeting Card Generator */}
        <GreetingGenerator
          key={generatorData?.message ? String(generatorData.createdAt) : 'default'}
          initialData={generatorData}
        />

        {/* Friendly Closing Section */}
        <ClosingSection
          onScrollToGenerator={() => scrollToSection('generator')}
          onScrollToTop={() => scrollToSection('hero')}
        />
      </main>
    </div>
  );
}

export default App;
