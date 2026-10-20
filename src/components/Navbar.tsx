import React from 'react';
import { Volume2, VolumeX, Flower2 } from 'lucide-react';

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMuted,
  onToggleSound,
  onNavigate,
}) => {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="brand-logo-btn"
          aria-label="Về đầu trang BLOOM 20.10"
        >
          <div className="brand-icon-wrap">
            <Flower2 className="brand-flower-icon" size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-title">BLOOM 20.10</span>
            <span className="brand-sub">Quà 20/10 Gửi Bạn Thân · Từ Dương 🌸</span>
          </div>
        </button>

        {/* Minimal sound button (sound autoplays by default) */}
        <div className="header-actions">
          <button
            onClick={onToggleSound}
            className={`action-btn sound-btn ${!isMuted ? 'active-sound' : ''}`}
            title={!isMuted ? 'Tắt âm thanh' : 'Bật âm thanh'}
            aria-label={!isMuted ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {!isMuted ? (
              <>
                <Volume2 size={16} className="sound-pulse" />
                <span>Nhạc đang phát 🎵</span>
              </>
            ) : (
              <>
                <VolumeX size={16} />
                <span>Bật nhạc</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
