import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Flower2, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { BOTANICAL_FLOWERS } from '../data/flowers';
import type { FlowerWish } from '../types';
import { soundManager } from '../utils/sound';

export const FlowerGarden: React.FC = () => {
  const [activeFlower, setActiveFlower] = useState<FlowerWish | null>(null);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveFlower(null);
      }
    };
    if (activeFlower) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeFlower]);

  const handleSelectFlower = (flower: FlowerWish) => {
    setActiveFlower(flower);
    soundManager.playBloomSound();
  };

  const handleCopyPoem = async () => {
    if (!activeFlower) return;
    const text = `🌸 ${activeFlower.name} (${activeFlower.botanicalName}) 🌸\nÝ nghĩa: ${activeFlower.meaning}\n\n${activeFlower.fullPoem}\n\n"${activeFlower.message}"\n\n— Gửi từ BLOOM 20.10`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="garden" className="garden-section">
      <div className="section-header text-center">
        <div className="section-pill">
          <Flower2 size={13} className="pill-icon" />
          <span>VƯỜN HOA YÊU THƯƠNG</span>
        </div>
        <h2 className="section-title">Nguyện Ước Từ Muôn Sắc Hoa</h2>
        <p className="section-subtitle">
          Mỗi đóa hoa trong khu vườn BLOOM mang một biểu tượng và thông điệp riêng. Hãy chọn một đóa hoa bạn yêu thích nhất để đón nhận lời chúc lành.
        </p>
      </div>

      {/* Flower Grid */}
      <div className="flowers-grid" role="list">
        {BOTANICAL_FLOWERS.map((flower) => (
          <div
            key={flower.id}
            role="listitem"
            className="flower-botanical-card"
            onClick={() => handleSelectFlower(flower)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelectFlower(flower);
              }
            }}
          >
            {/* Card Bloom Glow */}
            <div 
              className="flower-card-glow"
              style={{ backgroundColor: flower.themeColor }}
              aria-hidden="true" 
            />

            <div className="flower-card-top">
              <span className="botanical-badge">{flower.meaning}</span>
              <Flower2 size={24} style={{ color: flower.themeColor }} />
            </div>

            <div className="flower-card-body">
              <h3 className="flower-name">{flower.name}</h3>
              <p className="flower-latin">{flower.botanicalName}</p>
              <p className="flower-short-wish">{flower.shortWish}</p>
            </div>

            <div className="flower-card-footer">
              <span className="action-hint">Khám phá tâm ý</span>
              <ArrowRight size={14} className="hint-arrow" />
            </div>
          </div>
        ))}
      </div>

      {/* Botanical Flower Modal Dialog */}
      {activeFlower && (
        <div 
          className="modal-overlay" 
          onClick={() => setActiveFlower(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-flower-title"
        >
          <div 
            className="modal-card animate-scale-up" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveFlower(null)}
              className="modal-close-btn"
              aria-label="Đóng bảng hoa"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="modal-header">
              <div 
                className="modal-flower-icon-wrap"
                style={{ backgroundColor: `${activeFlower.themeColor}15`, color: activeFlower.themeColor }}
              >
                <Flower2 size={32} />
              </div>
              <div className="modal-title-wrap">
                <span className="modal-meaning-tag">{activeFlower.meaning}</span>
                <h3 id="modal-flower-title" className="modal-flower-name">
                  {activeFlower.name}
                </h3>
                <span className="modal-latin-name">{activeFlower.botanicalName}</span>
              </div>
            </div>

            {/* Poetic Stanza */}
            <div className="modal-poem-box">
              <div className="poem-quote-mark">“</div>
              <pre className="modal-poem-text">{activeFlower.fullPoem}</pre>
            </div>

            {/* Detailed Heartfelt Message */}
            <div className="modal-message-body">
              <p className="modal-message-paragraph">{activeFlower.message}</p>
            </div>

            {/* Modal Footer Actions */}
            <div className="modal-footer-actions">
              <button 
                onClick={handleCopyPoem}
                className="btn-modal-copy"
                title="Sao chép thơ và lời chúc"
              >
                {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                <span>{copied ? 'Đã sao chép thơ hoa!' : 'Sao chép lời chúc này'}</span>
              </button>

              <button 
                onClick={() => setActiveFlower(null)}
                className="btn-modal-done"
              >
                <Heart size={16} />
                <span>Đón nhận yêu thương</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
