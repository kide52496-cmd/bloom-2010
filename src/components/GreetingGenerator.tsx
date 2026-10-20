import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  Share2, 
  RefreshCw, 
  Heart, 
  Flower2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import type { Relationship, WishStyle, CustomCardData } from '../types';
import { 
  RELATIONSHIP_LABELS, 
  STYLE_LABELS, 
  SMART_WISH_TEMPLATES 
} from '../data/wishes';
import { soundManager } from '../utils/sound';

interface GreetingGeneratorProps {
  initialData?: Partial<CustomCardData>;
}

const getInitialFromUrl = () => {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const rel = params.get('rel') as Relationship | null;
    const st = params.get('style') as WishStyle | null;
    return {
      recipient: params.get('to') || undefined,
      sender: params.get('from') || undefined,
      relationship: rel && RELATIONSHIP_LABELS[rel] ? rel : undefined,
      style: st && STYLE_LABELS[st] ? st : undefined,
      message: params.get('msg') || undefined,
    };
  } catch {
    return {};
  }
};

export const GreetingGenerator: React.FC<GreetingGeneratorProps> = ({ initialData }) => {
  const [recipient, setRecipient] = useState<string>(
    () => initialData?.recipient || getInitialFromUrl().recipient || 'Cô bạn thân yêu'
  );
  const [sender, setSender] = useState<string>(
    () => initialData?.sender || getInitialFromUrl().sender || 'Dương'
  );
  const [relationship, setRelationship] = useState<Relationship>(
    () => initialData?.relationship || getInitialFromUrl().relationship || 'friend'
  );
  const [style, setStyle] = useState<WishStyle>(
    () => initialData?.style || getInitialFromUrl().style || 'playful'
  );
  const [message, setMessage] = useState<string>(() => {
    const urlData = getInitialFromUrl();
    if (initialData?.message) return initialData.message;
    if (urlData.message) return urlData.message;
    const rel = initialData?.relationship || urlData.relationship || 'friend';
    const st = initialData?.style || urlData.style || 'playful';
    return SMART_WISH_TEMPLATES[rel][st];
  });
  const [isCustomEdited, setIsCustomEdited] = useState<boolean>(() => {
    const urlData = getInitialFromUrl();
    return Boolean(initialData?.message || urlData.message);
  });
  const [copiedWish, setCopiedWish] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [cardGenerated, setCardGenerated] = useState<boolean>(() => {
    const urlData = getInitialFromUrl();
    return Boolean(urlData.recipient || urlData.message);
  });

  const previewRef = useRef<HTMLDivElement | null>(null);

  // Update template suggestion when relationship or style changes (unless user typed custom text)
  const handleRelationshipChange = (newRel: Relationship) => {
    setRelationship(newRel);
    if (!isCustomEdited) {
      setMessage(SMART_WISH_TEMPLATES[newRel][style]);
    }
  };

  const handleStyleChange = (newStyle: WishStyle) => {
    setStyle(newStyle);
    if (!isCustomEdited) {
      setMessage(SMART_WISH_TEMPLATES[relationship][newStyle]);
    }
  };

  const handleResetToTemplate = () => {
    setMessage(SMART_WISH_TEMPLATES[relationship][style]);
    setIsCustomEdited(false);
    soundManager.playPaperRustle();
  };

  const handleGenerateCard = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setCardGenerated(true);
    soundManager.playChime();

    // Trigger joyful celebration confetti
    confetti({
      particleCount: 50,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#D8B777', '#D98FA3', '#F5D5DC', '#74384F', '#FFF9F3'],
      disableForReducedMotion: true,
    });

    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const buildShareUrl = () => {
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('to', recipient);
    url.searchParams.set('from', sender);
    url.searchParams.set('rel', relationship);
    url.searchParams.set('style', style);
    url.searchParams.set('msg', message);
    return url.toString();
  };

  const handleCopyWishText = async () => {
    const fullText = `🌸 Chúc mừng Ngày Phụ nữ Việt Nam 20/10 🌸\n\nThân gửi: ${recipient}\n\n"${message}"\n\nThân ái,\n${sender}\n\n— Tạo từ BLOOM 20.10`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedWish(true);
      setTimeout(() => setCopiedWish(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = buildShareUrl();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleShareNative = async () => {
    const shareUrl = buildShareUrl();
    const shareData = {
      title: `BLOOM 20.10 | Món quà gửi ${recipient}`,
      text: `Gửi ${recipient}: "${message}" — Từ ${sender}`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch {
        // Cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section id="generator" className="generator-section">
      <div className="section-header text-center">
        <div className="section-pill">
          <Heart size={13} className="pill-icon" />
          <span>TỰ TAY VIẾT THIỆP</span>
        </div>
        <h2 className="section-title">Trình Tạo Thiệp Cá Nhân Hóa</h2>
        <p className="section-subtitle">
          Chỉ cần nhập tên và chọn phong cách, BLOOM 20.10 sẽ trau chuốt món quà số tuyệt đẹp mang dấu ấn riêng của bạn.
        </p>
      </div>

      <div className="generator-grid">
        {/* Left Form: Customizer Controls */}
        <div className="generator-card-form">
          <form onSubmit={handleGenerateCard} className="form-wrapper">
            {/* Recipient & Sender Inputs */}
            <div className="form-row two-cols">
              <div className="input-field-group">
                <label htmlFor="recipient-input" className="field-label">
                  Tên người nhận <span className="req">*</span>
                </label>
                <input
                  id="recipient-input"
                  type="text"
                  required
                  maxLength={40}
                  className="custom-text-input"
                  placeholder="Ví dụ: Mẹ yêu, Cô giáo Lan, Ngọc Anh..."
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </div>

              <div className="input-field-group">
                <label htmlFor="sender-input" className="field-label">
                  Tên người gửi <span className="req">*</span>
                </label>
                <input
                  id="sender-input"
                  type="text"
                  required
                  maxLength={40}
                  className="custom-text-input"
                  placeholder="Ví dụ: Dương, Con trai..."
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                />
              </div>
            </div>

            {/* Relationship Selector */}
            <div className="input-field-group">
              <label className="field-label">Mối quan hệ</label>
              <div className="chips-container" role="radiogroup" aria-label="Mối quan hệ">
                {(Object.keys(RELATIONSHIP_LABELS) as Relationship[]).map((rel) => (
                  <button
                    key={rel}
                    type="button"
                    role="radio"
                    aria-checked={relationship === rel}
                    className={`chip-btn ${relationship === rel ? 'chip-selected' : ''}`}
                    onClick={() => handleRelationshipChange(rel)}
                  >
                    {RELATIONSHIP_LABELS[rel]}
                  </button>
                ))}
              </div>
            </div>

            {/* Wish Style Selector */}
            <div className="input-field-group">
              <label className="field-label">Phong cách lời chúc</label>
              <div className="chips-container" role="radiogroup" aria-label="Phong cách lời chúc">
                {(Object.keys(STYLE_LABELS) as WishStyle[]).map((st) => (
                  <button
                    key={st}
                    type="button"
                    role="radio"
                    aria-checked={style === st}
                    className={`chip-btn ${style === st ? 'chip-selected' : ''}`}
                    onClick={() => handleStyleChange(st)}
                  >
                    {STYLE_LABELS[st]}
                  </button>
                ))}
              </div>
            </div>

            {/* Wish Message Area */}
            <div className="input-field-group">
              <div className="field-label-between">
                <label htmlFor="message-input" className="field-label">
                  Nội dung lời chúc
                </label>
                {isCustomEdited && (
                  <button
                    type="button"
                    onClick={handleResetToTemplate}
                    className="btn-text-link"
                    title="Khôi phục mẫu viết sẵn"
                  >
                    <RefreshCw size={12} />
                    <span>Dùng mẫu gợi ý</span>
                  </button>
                )}
              </div>
              <textarea
                id="message-input"
                rows={4}
                maxLength={450}
                required
                className="custom-textarea"
                placeholder="Nhập những lời chúc chân thành từ trái tim bạn..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setIsCustomEdited(true);
                }}
              />
              <span className="char-counter">{message.length}/450 ký tự</span>
            </div>

            {/* Submit Action */}
            <button type="submit" className="btn-generate">
              <Sparkles size={18} />
              <span>Tạo & Cập Nhật Thiệp</span>
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Right: Live Interactive Card Preview */}
        <div className="generator-preview-wrapper" ref={previewRef}>
          <div className="preview-label-bar">
            <span className="preview-indicator">
              <span className="preview-dot" />
              {cardGenerated ? 'Thiệp đã tạo sẵn sàng!' : 'Xem trước trực tiếp'}
            </span>
            <span className="preview-hint">{cardGenerated ? 'Đã kích hoạt pháo hoa' : 'Cập nhật ngay tức thì'}</span>
          </div>

          <div className="luxury-preview-card">
            {/* Ornamental Frame Details */}
            <div className="card-border-frame" aria-hidden="true" />
            <div className="card-corner-seal" aria-hidden="true">
              <Flower2 size={24} className="corner-flower" />
            </div>

            <div className="preview-card-inner">
              <div className="preview-card-header">
                <div className="header-flower-badge">
                  <span>BLOOM 20.10</span>
                </div>
                <span className="preview-card-date">20 Tháng 10</span>
              </div>

              <div className="preview-card-salutation">
                <p className="card-dear-text">Thương gửi</p>
                <h3 className="card-recipient-name">
                  {recipient || 'Người phụ nữ tôi yêu mến'}
                </h3>
              </div>

              <div className="preview-card-content">
                <p className="preview-message-text">
                  “{message || 'Chúc bạn luôn bình yên, rạng rỡ và ngập tràn hạnh phúc trong ngày đặc biệt này.'}”
                </p>
              </div>

              <div className="preview-card-signoff">
                <div className="card-wax-stamp" aria-hidden="true">
                  <Heart size={14} className="wax-heart-icon" />
                </div>
                <div className="signature-info">
                  <span className="sign-from">Người gửi yêu thương,</span>
                  <span className="sign-author">{sender || 'Dương'}</span>
                </div>
              </div>
            </div>

            {/* Sharing and Action Buttons */}
            <div className="preview-card-footer-actions">
              <button
                type="button"
                onClick={handleCopyWishText}
                className="preview-btn"
                title="Sao chép nội dung lời chúc"
              >
                {copiedWish ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                <span>{copiedWish ? 'Đã sao chép' : 'Sao chép chữ'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="preview-btn"
                title="Sao chép liên kết có chứa lời chúc này"
              >
                {copiedLink ? <CheckCircle2 size={16} className="text-success" /> : <ExternalLink size={16} />}
                <span>{copiedLink ? 'Đã chép link' : 'Lấy link thiệp'}</span>
              </button>

              <button
                type="button"
                onClick={handleShareNative}
                className="preview-btn btn-highlight"
                title="Gửi thiệp qua Zalo, Messenger, SMS..."
              >
                {shareSuccess ? <Check size={16} /> : <Share2 size={16} />}
                <span>Chia sẻ ngay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
