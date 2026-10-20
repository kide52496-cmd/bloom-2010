import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { PetalCanvas } from './components/PetalCanvas';
import { HeroSection } from './components/HeroSection';
import { CuteFlowerPicker } from './components/CuteFlowerPicker';
import { GiftEnvelope } from './components/GiftEnvelope';
import { GreetingGenerator } from './components/GreetingGenerator';
import { FlowerGarden } from './components/FlowerGarden';
import { ClosingSection } from './components/ClosingSection';
import { soundManager } from './utils/sound';
import type { PredefinedWish, CustomCardData } from './types';

export function App() {
  const [isMuted, setIsMuted] = useState(soundManager.muted);
  const [petalsActive, setPetalsActive] = useState(true);
  const [generatorData, setGeneratorData] = useState<Partial<CustomCardData> | undefined>(undefined);

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

  const handleCustomizeWish = useCallback((wish: PredefinedWish) => {
    setGeneratorData({
      recipient: wish.recipientLabel.replace(/^(Gửi|Kính gửi)\s+/i, ''),
      sender: 'Dương',
      relationship: wish.category,
      message: wish.content.join(' '),
      createdAt: Date.now(),
    });
    scrollToSection('generator');
  }, [scrollToSection]);

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

      {/* Main Application Sections */}
      <main className="main-content">
        <HeroSection
          onOpenGift={() => scrollToSection('envelope')}
          onSendWish={() => scrollToSection('generator')}
          onPickFlower={() => scrollToSection('cute-picker')}
        />

        {/* Cute Flower Fortune Picker for Friends */}
        <CuteFlowerPicker onScrollToGenerator={() => scrollToSection('generator')} />

        <GiftEnvelope onCustomizeWish={handleCustomizeWish} />

        <GreetingGenerator
          key={generatorData?.message ? String(generatorData.createdAt) : 'default'}
          initialData={generatorData}
        />

        <FlowerGarden />

        <ClosingSection
          onScrollToGenerator={() => scrollToSection('generator')}
          onScrollToTop={() => scrollToSection('hero')}
        />
      </main>
    </div>
  );
}

export default App;
