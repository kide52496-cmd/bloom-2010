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
            “Thế giới đẹp hơn khi có những người phụ nữ biết yêu thương, biết ước mơ và không ngừng viết nên câu chuyện của chính mình.”
          </p>

          <p className="closing-wish-lead">
            Chúc mừng Ngày Phụ nữ Việt Nam 20/10.
            <br />
            <span className="closing-wish-highlight">
              Mong yêu thương luôn tìm được đường đến bên bạn.
            </span>
          </p>

          {/* Action to share/create */}
          <div className="closing-cta-wrapper">
            <button
              onClick={onScrollToGenerator}
              className="btn-closing-cta"
              aria-label="Tạo thiệp gửi một người đặc biệt"
            >
              <Heart size={18} className="btn-icon" />
              <span>Gửi món quà này cho một người đặc biệt</span>
              <Sparkles size={16} className="btn-sparkle" />
            </button>
          </div>

          {/* Creator Signature Note */}
          <div className="closing-signature-card">
            <div className="signature-badge">
              <span>Được thiết kế với tất cả sự trân quý</span>
            </div>
            <p className="signature-author">
              Dành tặng những người phụ nữ Việt Nam yêu dấu
            </p>
            <p className="signature-subtext">
              Dự án BLOOM 20.10 · Bản quyền ý niệm & lời chúc: <strong>Dương</strong>
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
