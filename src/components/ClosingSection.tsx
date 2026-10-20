import React from 'react';
import { Heart, Sparkles, ArrowUp, Flower2 } from 'lucide-react';

interface ClosingSectionProps {
  onScrollToGenerator: () => void;
  onScrollToTop: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  onScrollToGenerator,
  onScrollToTop,
}) => {
  return (
    <footer id="closing" className="closing-section">
      <div className="closing-container">
        {/* Decorative Golden Divider */}
        <div className="botanical-divider" aria-hidden="true">
          <div className="divider-line" />
          <Flower2 size={24} className="divider-flower" />
          <div className="divider-line" />
        </div>

        {/* Emotion-driven Quote */}
        <div className="closing-quote-card">
          <p className="closing-main-quote">
            “Thanh xuân trở nên rực rỡ hơn chính là nhờ có những người bạn tuyệt vời như bạn!”
          </p>

          <p className="closing-wish-lead">
            Chúc mừng Ngày Phụ Nữ Việt Nam 20/10 đến hội bạn thân! 🌸
            <br />
            <span className="closing-wish-highlight">
              Chúc bạn ăn ngon không béo, shopping không nhìn giá và nụ cười luôn tỏa nắng!
            </span>
          </p>

          {/* Action to share/create */}
          <div className="closing-cta-wrapper">
            <button
              onClick={onScrollToGenerator}
              className="btn-closing-cta"
              aria-label="Tạo thiệp gửi một người bạn đặc biệt"
            >
              <Heart size={18} className="btn-icon" />
              <span>Gửi thiệp này cho một người bạn thân 💌</span>
              <Sparkles size={16} className="btn-sparkle" />
            </button>
          </div>

          {/* Creator Signature Note */}
          <div className="closing-signature-card">
            <div className="signature-badge">
              <span>Món quà số đặc biệt 20/10</span>
            </div>
            <p className="signature-author">
              Thương gửi từ người bạn: Dương 💖
            </p>
            <p className="signature-subtext">
              Dự án BLOOM 20.10 Friends Edition
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-brand">
            <Flower2 size={16} />
            <span>BLOOM 20.10 — Một Ngày Dành Riêng Cho Bạn</span>
          </div>

          <button
            onClick={onScrollToTop}
            className="btn-back-to-top"
            aria-label="Cuộn lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
