import React from 'react';
import { Sparkles, ChevronDown, Smile } from 'lucide-react';

interface HeroSectionProps {
  onPickFlower: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPickFlower,
}) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-orb orb-1" aria-hidden="true" />
      <div className="hero-glow-orb orb-2" aria-hidden="true" />

      {/* Decorative Botanical Corner SVG */}
      <div className="botanical-ornament top-left" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" className="ornament-svg">
          <path
            d="M10 100 C 30 70, 70 30, 100 10"
            stroke="#D8B777"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <path
            d="M35 75 C 20 60, 25 40, 45 45 C 50 65, 40 75, 35 75 Z"
            fill="#F5D5DC"
            stroke="#D98FA3"
            strokeWidth="1"
          />
          <path
            d="M65 45 C 50 30, 55 10, 75 15 C 80 35, 70 45, 65 45 Z"
            fill="#F5D5DC"
            stroke="#D98FA3"
            strokeWidth="1"
          />
          <circle cx="100" cy="10" r="4" fill="#D8B777" />
          <circle cx="10" cy="100" r="3" fill="#D8B777" />
        </svg>
      </div>

      <div className="botanical-ornament top-right" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" className="ornament-svg flip">
          <path
            d="M10 100 C 30 70, 70 30, 100 10"
            stroke="#D8B777"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <path
            d="M35 75 C 20 60, 25 40, 45 45 C 50 65, 40 75, 35 75 Z"
            fill="#F5D5DC"
            stroke="#D98FA3"
            strokeWidth="1"
          />
          <path
            d="M65 45 C 50 30, 55 10, 75 15 C 80 35, 70 45, 65 45 Z"
            fill="#F5D5DC"
            stroke="#D98FA3"
            strokeWidth="1"
          />
          <circle cx="100" cy="10" r="4" fill="#D8B777" />
        </svg>
      </div>

      <div className="hero-content">
        {/* Date & Occasion Badge */}
        <div className="hero-badge animate-fade-in">
          <Sparkles size={14} className="badge-sparkle" />
          <span>20.10 · DÀNH TẶNG HỘI BẠN THÂN</span>
          <span className="badge-dot">•</span>
          <span className="badge-highlight">BLOOM 20.10</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title animate-slide-up">
          Gửi đến cô bạn
          <br />
          <span className="hero-title-accent">tuyệt vời nhất trần đời! 🌸</span>
        </h1>

        {/* Subtitle Message */}
        <p className="hero-subtitle animate-slide-up-delay">
          Chào bạn iu! Nhân ngày Phụ nữ Việt Nam 20/10, <strong>Dương</strong> có một món quà nhỏ siêu cấp đáng yêu gửi riêng cho bạn.
          <br className="desktop-break" />
          Chạm nhẹ vào đóa hoa bạn thích để bốc thăm nhận lời chúc và đặc quyền may mắn nhé!
        </p>

        {/* Call to Actions - Single Big Cute Button */}
        <div className="hero-cta-group animate-slide-up-delay-2">
          <button
            onClick={onPickFlower}
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #FF758F, #C02654)',
              boxShadow: '0 12px 28px rgba(255, 117, 143, 0.35)',
              padding: '1.15rem 2.5rem',
              fontSize: '1.1rem',
            }}
            aria-label="Chọn hoa nhận lời chúc cute cho bạn bè"
          >
            <Smile size={22} className="btn-icon" />
            <span>Hái hoa nhận quà cute nè 🌷</span>
            <div className="btn-shine" aria-hidden="true" />
          </button>
        </div>

        {/* Subtle Indicator */}
        <div className="hero-scroll-indicator" onClick={onPickFlower}>
          <span className="scroll-text">Hái hoa ngay</span>
          <ChevronDown size={18} className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};
