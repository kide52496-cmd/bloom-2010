import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Heart, 
  RotateCcw, 
  Copy, 
  Check, 
  Share2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { PREDEFINED_WISHES } from '../data/wishes';
import type { Relationship, PredefinedWish } from '../types';
import { soundManager } from '../utils/sound';

interface GiftEnvelopeProps {
  onCustomizeWish: (wish: PredefinedWish) => void;
}

export const GiftEnvelope: React.FC<GiftEnvelopeProps> = ({ onCustomizeWish }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Relationship>('mother');
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const currentWish = PREDEFINED_WISHES.find((w) => w.category === selectedCategory) || PREDEFINED_WISHES[0];

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      soundManager.playChime();
      soundManager.playPaperRustle();

      // Delicate gold & pink celebration confetti burst
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D8B777', '#D98FA3', '#F5D5DC', '#74384F'],
        disableForReducedMotion: true,
      });
    }
  };

  const handleCloseEnvelope = () => {
    setIsOpen(false);
    soundManager.playPaperRustle();
  };

  const handleCategoryChange = (category: Relationship) => {
    setSelectedCategory(category);
    soundManager.playPaperRustle();
  };

  const handleCopyWish = async () => {
    const fullText = `${currentWish.recipientLabel}\n\n${currentWish.content.join('\n\n')}\n\n${currentWish.signature}\n\n— Gửi từ BLOOM 20.10`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `BLOOM 20.10 | ${currentWish.title}`,
      text: `${currentWish.recipientLabel}: "${currentWish.quote}" — ${currentWish.signature}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleCopyWish();
    }
  };

  return (
    <section id="envelope" className="envelope-section">
      <div className="section-header text-center">
        <div className="section-pill">
          <Sparkles size={13} className="pill-icon" />
          <span>MÓN QUÀ ĐẶC BIỆT</span>
        </div>
        <h2 className="section-title">Phong Thư Tri Ân 20/10</h2>
        <p className="section-subtitle">
          Chạm vào phong thư được niêm phong sáp để mở ra những lời chúc tinh tế và chân thành nhất.
        </p>

        {/* Category Selector Tabs */}
        <div className="category-tabs-container" role="tablist" aria-label="Chọn đối tượng nhận lời chúc">
          {PREDEFINED_WISHES.map((wish) => {
            const isSelected = wish.category === selectedCategory;
            return (
              <button
                key={wish.category}
                role="tab"
                aria-selected={isSelected}
                className={`category-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleCategoryChange(wish.category)}
              >
                <span>{wish.categoryLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="envelope-stage">
        {/* The 3D Interactive Envelope Container */}
        <div className={`envelope-wrapper ${isOpen ? 'envelope-open' : ''}`}>
          
          {/* Back base of envelope */}
          <div className="envelope-back" />

          {/* Letter Card (slides up when opened) */}
          <article 
            className={`letter-card ${isOpen ? 'letter-revealed' : ''}`}
            aria-hidden={!isOpen}
          >
            {/* Elegant Letter Header */}
            <div className="letter-header">
              <span className="letter-badge">{currentWish.badge}</span>
              <span className="letter-date">20 Tháng 10</span>
            </div>

            <div className="letter-salutation">
              <h3 className="letter-recipient">{currentWish.recipientLabel}</h3>
              <p className="letter-quote">“{currentWish.quote}”</p>
            </div>

            {/* Letter Body Paragraphs */}
            <div className="letter-body">
              {currentWish.content.map((paragraph, index) => (
                <p key={index} className="letter-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Letter Sign-off */}
            <div className="letter-signature-wrap">
              <div className="gold-flourish" aria-hidden="true" />
              <p className="letter-sign-text">{currentWish.signature}</p>
            </div>

            {/* Actions Inside Letter */}
            <div className="letter-actions">
              <button 
                onClick={handleCopyWish} 
                className="btn-action-outline"
                title="Sao chép toàn bộ lời chúc"
              >
                {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                <span>{copied ? 'Đã sao chép!' : 'Sao chép lời chúc'}</span>
              </button>

              <button 
                onClick={handleShare} 
                className="btn-action-outline"
                title="Chia sẻ thiệp này"
              >
                {shared ? <Check size={16} className="text-success" /> : <Share2 size={16} />}
                <span>{shared ? 'Đã chia sẻ!' : 'Chia sẻ'}</span>
              </button>

              <button 
                onClick={() => onCustomizeWish(currentWish)} 
                className="btn-action-primary"
                title="Tạo thiệp này với tên và lời chúc riêng của bạn"
              >
                <Heart size={16} />
                <span>Cá nhân hóa thiệp này</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </article>

          {/* Front Left and Right Flaps */}
          <div className="envelope-front-flaps" />

          {/* Bottom Flap */}
          <div className="envelope-bottom-flap" />

          {/* Top Flap with Wax Seal */}
          <div 
            className="envelope-top-flap"
            onClick={!isOpen ? handleOpenEnvelope : undefined}
          >
            {!isOpen && (
              <div 
                className="wax-seal"
                role="button"
                tabIndex={0}
                aria-label="Nhấn để mở phong thư"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenEnvelope();
                  }
                }}
              >
                <div className="wax-seal-inner">
                  <span className="seal-text">20.10</span>
                  <Sparkles size={14} className="seal-sparkle" />
                </div>
                <div className="wax-seal-ripple" />
              </div>
            )}
          </div>
        </div>

        {/* Envelope Controls when opened or closed */}
        <div className="envelope-controls-bar">
          {!isOpen ? (
            <button
              onClick={handleOpenEnvelope}
              className="btn-open-envelope"
              aria-label="Nhấn vào đây để mở phong thư"
            >
              <BookOpen size={18} />
              <span>Chạm vào phong bì để mở thư</span>
              <Sparkles size={16} className="pulse-icon" />
            </button>
          ) : (
            <div className="open-controls-group">
              <button
                onClick={handleCloseEnvelope}
                className="btn-control-secondary"
                aria-label="Đóng phong thư lại"
              >
                <RotateCcw size={15} />
                <span>Gấp lại phong thư</span>
              </button>

              <button
                onClick={() => onCustomizeWish(currentWish)}
                className="btn-control-primary"
                aria-label="Chuyển đến phần tạo thiệp"
              >
                <ExternalLink size={15} />
                <span>Tự tay viết thiệp gửi người thương</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
