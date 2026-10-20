import React from 'react';
import { Volume2, VolumeX, Sparkles, Flower2 } from 'lucide-react';

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
  petalsActive: boolean;
  onTogglePetals: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMuted,
  onToggleSound,
  petalsActive,
  onTogglePetals,
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

        {/* Action Controls: Auto-active music & petals */}
        <div className="header-actions">
          {/* Petals Toggle */}
          <button
            onClick={onTogglePetals}
            className={`action-btn ${petalsActive ? 'active' : ''}`}
            title={petalsActive ? 'Tạm dừng cánh hoa rơi' : 'Bật hiệu ứng cánh hoa'}
            aria-label={petalsActive ? 'Tắt cánh hoa rơi' : 'Bật cánh hoa rơi'}
          >
            <Sparkles size={16} />
            <span className="btn-label-desktop">
              {petalsActive ? 'Cánh hoa: Bật' : 'Cánh hoa: Tắt'}
            </span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`action-btn sound-btn ${!isMuted ? 'active-sound' : ''}`}
            title={!isMuted ? 'Tắt giai điệu nền' : 'Bật giai điệu piano êm dịu'}
            aria-label={!isMuted ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {!isMuted ? (
              <>
                <Volume2 size={16} className="sound-pulse" />
                <span className="btn-label-desktop">Giai điệu: Đang phát 🎵</span>
              </>
            ) : (
              <>
                <VolumeX size={16} />
                <span className="btn-label-desktop">Âm thanh: Tắt</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
