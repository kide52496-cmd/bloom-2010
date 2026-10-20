import React from 'react';
import { Volume2, VolumeX, Sparkles, Flower2, Heart } from 'lucide-react';

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
            <span className="brand-sub">Một Ngày Dành Riêng Cho Bạn</span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <button
            onClick={() => onNavigate('cute-picker')}
            className="nav-link-btn highlight"
            style={{ background: 'rgba(255, 117, 143, 0.2)', color: '#C02654' }}
          >
            <span>Hái Hoa Cute 🌸</span>
          </button>
          <button
            onClick={() => onNavigate('envelope')}
            className="nav-link-btn"
          >
            Thiệp Tri Ân
          </button>
          <button
            onClick={() => onNavigate('generator')}
            className="nav-link-btn"
          >
            <Heart size={14} className="inline-icon" />
            Tạo Thiệp Riêng
          </button>
          <button
            onClick={() => onNavigate('garden')}
            className="nav-link-btn"
          >
            Vườn Hoa
          </button>
          <button
            onClick={() => onNavigate('closing')}
            className="nav-link-btn"
          >
            Lời Kết
          </button>
        </nav>

        {/* Action Controls */}
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
                <span className="btn-label-desktop">Giai điệu: Bật</span>
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
