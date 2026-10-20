import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Heart, 
  Copy, 
  Check, 
  Share2, 
  RotateCcw, 
  Gift, 
  Smile,
  ArrowRight,
  PartyPopper
} from 'lucide-react';
import { BOTANICAL_FLOWERS } from '../data/flowers';
import type { FlowerWish } from '../types';
import { soundManager } from '../utils/sound';

interface CuteFlowerPickerProps {
  onScrollToGenerator: () => void;
}

export const CuteFlowerPicker: React.FC<CuteFlowerPickerProps> = ({ onScrollToGenerator }) => {
  const [selectedFlower, setSelectedFlower] = useState<FlowerWish | null>(null);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handlePickFlower = (flower: FlowerWish) => {
    setSelectedFlower(flower);
    soundManager.playCutePopSound();

    // Cute pastel confetti explosion with high spread
    confetti({
      particleCount: 60,
      spread: 85,
      origin: { y: 0.6 },
      colors: ['#FF758F', '#FFB3C1', '#D4A373', '#D8B777', '#8E7DBE', '#FFF0F3'],
      disableForReducedMotion: true,
    });
  };

  const handleCopyCuteWish = async () => {
    if (!selectedFlower) return;
    const text = `🌸 20/10 Vui Vẻ Nè! Mình tặng bạn đóa ${selectedFlower.name} ${selectedFlower.emoji} (${selectedFlower.meaning})\n\n"${selectedFlower.cuteWish}"\n\n✨ Đặc quyền hôm nay:\n${selectedFlower.cutePerks.map(p => `• ${p}`).join('\n')}\n\n💌 Gửi từ: Dương\n— Trải nghiệm tại BLOOM 20.10`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleShareCuteWish = async () => {
    if (!selectedFlower) return;
    const shareData = {
      title: `BLOOM 20.10 | Đóa ${selectedFlower.name} gửi bạn!`,
      text: `20/10 mình tặng bạn đóa ${selectedFlower.name} ${selectedFlower.emoji}: "${selectedFlower.shortWish}" — Dương`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // Cancelled
      }
    } else {
      handleCopyCuteWish();
    }
  };

  return (
    <section id="cute-picker" className="cute-picker-section">
      <div className="section-header text-center">
        <div className="cute-badge-pill">
          <Smile size={14} className="cute-icon-bounce" />
          <span>DÀNH TẶNG BẠN BÈ & NGƯỜI THƯƠNG</span>
          <Sparkles size={14} className="badge-sparkle" />
        </div>
        <h2 className="section-title">
          Hái Một Đóa Hoa <span className="cute-title-accent">Nhận Ngay Lời Chúc</span> 🌸
        </h2>
        <p className="section-subtitle">
          Chạm vào bông hoa bạn thấy đáng yêu nhất, một thông điệp siêu ngọt ngào cùng những đặc quyền vui vẻ từ anh <strong>Dương</strong> đang chờ bạn mở ra!
        </p>
      </div>

      {/* Flower Choice Grid */}
      <div className="cute-flowers-container" role="radiogroup" aria-label="Danh sách đóa hoa quà tặng">
        {BOTANICAL_FLOWERS.map((flower) => {
          const isSelected = selectedFlower?.id === flower.id;
          return (
            <button
              key={flower.id}
              role="radio"
              aria-checked={isSelected}
              className={`cute-flower-btn ${isSelected ? 'cute-flower-selected' : ''}`}
              style={{
                borderColor: isSelected ? flower.themeColor : 'rgba(217, 143, 163, 0.35)',
              }}
              onClick={() => handlePickFlower(flower)}
            >
              <div 
                className="cute-flower-avatar"
                style={{ backgroundColor: `${flower.themeColor}18` }}
              >
                <span className="flower-emoji">{flower.emoji}</span>
              </div>
              <div className="cute-flower-info">
                <span className="cute-flower-name">{flower.name}</span>
                <span className="cute-flower-tag" style={{ color: flower.themeColor }}>
                  {flower.cuteTag}
                </span>
              </div>
              <div className="cute-tap-hint">
                <span>Chọn em</span>
                <Sparkles size={12} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Revealed Cute Card */}
      {selectedFlower && (
        <div className="revealed-cute-card-wrapper animate-bounce-in">
          <div 
            className="revealed-cute-card"
            style={{ 
              borderTop: `4px solid ${selectedFlower.themeColor}`,
              boxShadow: `0 20px 50px ${selectedFlower.themeColor}22`
            }}
          >
            {/* Cute Floating Stickers */}
            <div className="cute-sticker top-right">🎀</div>
            <div className="cute-sticker bottom-left">💖</div>

            <div className="cute-card-header">
              <div 
                className="cute-card-icon-bubble"
                style={{ backgroundColor: `${selectedFlower.themeColor}20` }}
              >
                <span className="cute-big-emoji">{selectedFlower.emoji}</span>
              </div>
              <div className="cute-card-title-group">
                <span className="cute-card-eyebrow">
                  ĐÓA HOA BẠN ĐÃ CHỌN
                </span>
                <h3 className="cute-card-heading">
                  {selectedFlower.name}
                </h3>
                <span className="cute-meaning-badge" style={{ backgroundColor: `${selectedFlower.themeColor}15`, color: selectedFlower.themeColor }}>
                  {selectedFlower.meaning}
                </span>
              </div>
            </div>

            {/* The Adorable Message */}
            <div className="cute-card-message-box">
              <div className="cute-quote-mark">“</div>
              <p className="cute-card-message-text">
                {selectedFlower.cuteWish}
              </p>
            </div>

            {/* Fun Perks List */}
            <div className="cute-perks-box">
              <p className="cute-perks-title">
                <PartyPopper size={16} className="text-gold" />
                <span>Gói đặc quyền may mắn ngày 20/10 của bạn:</span>
              </p>
              <ul className="cute-perks-list">
                {selectedFlower.cutePerks.map((perk, idx) => (
                  <li key={idx} className="cute-perk-item">
                    <Check size={14} className="perk-check" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sign-off */}
            <div className="cute-card-signature">
              <div className="cute-author-bubble">
                <Heart size={14} className="heart-icon-beat" />
                <span>Thương gửi từ: <strong>Dương</strong></span>
              </div>
              <span className="cute-wish-date">Chúc mừng Ngày Phụ Nữ Việt Nam 20.10</span>
            </div>

            {/* Action Buttons */}
            <div className="cute-card-actions">
              <button
                onClick={handleCopyCuteWish}
                className="btn-cute-action outline"
                title="Sao chép lời chúc kèm icon để gửi tin nhắn"
              >
                {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                <span>{copied ? 'Đã sao chép!' : 'Sao chép lời chúc'}</span>
              </button>

              <button
                onClick={handleShareCuteWish}
                className="btn-cute-action primary"
                style={{ backgroundColor: selectedFlower.themeColor }}
                title="Gửi cho bạn bè qua Zalo, Messenger..."
              >
                {shared ? <Check size={16} /> : <Share2 size={16} />}
                <span>{shared ? 'Đã chia sẻ!' : 'Gửi cho bạn bè'}</span>
              </button>

              <button
                onClick={() => {
                  setSelectedFlower(null);
                  soundManager.playPaperRustle();
                }}
                className="btn-cute-action subtle"
                title="Chọn một đóa hoa khác"
              >
                <RotateCcw size={15} />
                <span>Đổi hoa khác nè</span>
              </button>

              <button
                onClick={onScrollToGenerator}
                className="btn-cute-action highlight-link"
                title="Tự tay viết thiệp riêng"
              >
                <Gift size={15} />
                <span>Tự viết thiệp riêng</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
