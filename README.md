# 🌸 BLOOM 20.10 | Một Ngày Dành Riêng Cho Bạn
> **Dự án website quà tặng số cao cấp mừng Ngày Phụ Nữ Việt Nam 20/10**  
> *Ý niệm & Bản quyền lời chúc:* **Dương**

---

## ✨ Tổng Quan Sản Phẩm
**BLOOM 20.10** được định hướng theo phong cách **Romantic Botanical Editorial + Premium Digital Gift**, kết hợp giữa nghệ thuật làm thiệp thủ công truyền thống và trải nghiệm web tương tác hiện đại. 

Website được thiết kế dành cho mọi đối tượng phụ nữ xứng đáng được nâng niu:
- 👵 **Mẹ & Bà kính yêu**: Đấng sinh thành và bến đỗ bình yên vô bờ.
- 👩‍🏫 **Cô giáo kính mến**: Người lái đò tri thức thầm lặng.
- 💖 **Người yêu / Một nửa đặc biệt**: Bông hoa dịu dàng sưởi ấm thế giới.
- 👭 **Bạn bè & Tri kỷ**: Những người bạn đồng hành kiên cường, hồn nhiên.
- 💼 **Đồng nghiệp & Đối tác**: Những đóa hồng bản lĩnh, rạng ngời nơi công sở.
- 🌺 **Tất cả phụ nữ tuyệt vời**: Lời tôn vinh giá trị và vẻ đẹp tự tại.

---

## 🎨 Bảng Màu & Nghệ Thuật Thiết Kế (Art Direction)
- **Warm Ivory** (`#FFF9F3`): Nền giấy mỹ thuật ấm áp, dịu mắt.
- **Blush Pink** (`#F5D5DC`): Sắc hồng phấn nhẹ nhàng, tươi mới.
- **Dusty Rose** (`#D98FA3`): Tông cánh hồng khô thanh lịch, hoài niệm.
- **Rose Burgundy** (`#74384F`): Sắc đỏ rượu quý phái, điểm nhấn sang trọng.
- **Champagne Gold** (`#D8B777`): Ánh kim sa champagne, viền nét kiêu sa.
- **Deep Cocoa** (`#392B30`): Nâu trầm ấm áp cho chữ và độ tương phản cao.

**Typography:**
- Tiêu đề: *Playfair Display* (Serif cổ điển sang trọng).
- Nội dung: *Plus Jakarta Sans* (Sans-serif hiện đại, chuẩn công thái học đọc chữ).

---

## 🚀 Các Tính Năng Đã Triển Khai Thực Tế

1. **Hero Section (Khởi đầu cảm xúc):**
   - Tiêu đề nghệ thuật, huy hiệu ngày lễ 20.10.
   - Nút mở món quà và chuyển cảnh mượt mà.
   - Bầu không khí nhẹ nhàng với họa tiết thực vật và đốm sáng mờ ảo.

2. **Phong Thư Tri Ân 3D Tương Tác (Interactive Gift Envelope):**
   - Phong thư niêm phong sáp đỏ Bordeaux và chỉ vàng.
   - Chạm vào con dấu sáp để mở nắp thư kèm hiệu ứng âm thanh mở giấy.
   - Bức thư trượt lên với lời chúc thơ mộng, trích dẫn triết lý và chữ ký mang tên **Dương**.
   - Chuyển đổi 6 danh mục lời chúc lập tức không cần tải lại trang.
   - Pháo hoa giấy (confetti) hoa hồng vàng bung nở rực rỡ khi mở thư.

3. **Trình Tạo Thiệp Cá Nhân Hóa (Custom Greeting Card Generator):**
   - Nhập tên người nhận, tên người gửi (mặc định sẵn **Dương**).
   - Chọn đối tượng (Mẹ, Cô giáo, Người yêu, Bạn bè, Đồng nghiệp).
   - Chọn phong cách văn phong (Dịu dàng, Chân thành, Lãng mạn, Tươi vui, Trang trọng).
   - Tự động gợi ý câu chúc theo ngữ cảnh văn hóa Việt Nam.
   - Cho phép người dùng tự sửa lời chúc tự do.
   - Thẻ xem trước trực tiếp (*Live Preview*) cập nhật thời gian thực với con dấu sáp và chữ ký riêng.
   - Tạo liên kết chia sẻ mang theo toàn bộ lời chúc qua Query Params (`?to=...&from=Dương&msg=...`).
   - Tích hợp Web Share API (chia sẻ Zalo, Messenger, SMS...) và nút sao chép link / nội dung thông minh.

4. **Vườn Hoa Yêu Thương (Interactive Botanical Garden):**
   - 6 loài hoa đại diện cho 6 thông điệp:
     - **Hoa Sen**: Bình an & Thuần khiết.
     - **Hoa Hồng**: Nồng nàn & Yêu thương.
     - **Hoa Hướng Dương**: Tự tin & Rạng rỡ.
     - **Hoa Tulip**: Thanh lịch & Quý phái.
     - **Hoa Cúc Họa Mi**: Hồn nhiên & Hạnh phúc.
     - **Hoa Lan Hồ Điệp**: Bản lĩnh & Thành công.
   - Mỗi hoa mở một Modal thơ 4 câu + phân tích ý nghĩa + âm thanh chuông hoa thánh thót.

5. **Hiệu Ứng Cánh Hoa Rơi & Âm Thanh Web Audio:**
   - Cánh hoa rơi chuyển động nhẹ nhàng theo gió bằng Canvas tối ưu hóa phần cứng.
   - Có nút bật/tắt cánh hoa và tự động tuân thủ `prefers-reduced-motion`.
   - **Giai điệu Piano Ambient procedural**: Tự động tổng hợp hợp âm du dương qua Web Audio API, không cần tải file MP3 ngoài, không lo lỗi 404/CORS, chạy hoàn toàn offline 100%.

6. **Lời Kết Cảm Xúc & Ký Tên:**
   - Thông điệp tri ân sâu sắc gửi một nửa thế giới.
   - Nút cuộn nhanh lên đầu trang và liên kết tạo thiệp.

---

## 🛠️ Hướng Dẫn Chạy & Phát Triển

### Yêu cầu môi trường:
- Node.js >= 18 (Đã kiểm tra tương thích Node v24).

### Các lệnh thực thi:

```bash
# 1. Chuyển vào thư mục dự án
cd "C:\Users\duong\.gemini\antigravity\scratch\bloom-2010"

# 2. Cài đặt thư viện (nếu clone mới)
npm install

# 3. Khởi chạy môi trường phát triển (Dev Server)
npm run dev

# 4. Kiểm tra lỗi và Lint code
npm run lint

# 5. Đóng gói sản phẩm (Production Build)
npm run build

# 6. Chạy bản build thử nghiệm (Preview Server)
npm run preview
```

---

## 🌐 Hướng Dẫn Triển Khai Hosting Tĩnh Miễn Phí

Dự án là Single Page Application (SPA) thuần túy không cần backend, có thể deploy miễn phí lên bất kỳ nền tảng nào:

### 1. Vercel (Khuyên dùng - 1 click):
1. Đẩy code lên GitHub.
2. Đăng nhập [vercel.com](https://vercel.com) -> *Add New Project* -> Chọn repo.
3. Framework preset tự nhận là **Vite**, nhấn **Deploy**.

### 2. Netlify:
1. Đăng nhập [netlify.com](https://netlify.com) -> kéo thả thư mục `dist/` sau khi chạy `npm run build` vào Netlify Drop.
2. Hoặc kết nối Git với Build Command: `npm run build`, Publish directory: `dist`.

### 3. GitHub Pages:
- Thêm `"base": "./"` vào `vite.config.ts`, chạy `npm run build` và đẩy thư mục `dist` lên nhánh `gh-pages`.

---

## 📝 Tùy Chỉnh Nội Dung & Lời Chúc
- **Dữ liệu lời chúc 6 danh mục**: Chỉnh sửa tại [`src/data/wishes.ts`](file:///C:/Users/duong/.gemini/antigravity/scratch/bloom-2010/src/data/wishes.ts).
- **Ý nghĩa và thơ 6 loài hoa**: Chỉnh sửa tại [`src/data/flowers.ts`](file:///C:/Users/duong/.gemini/antigravity/scratch/bloom-2010/src/data/flowers.ts).
- **Bảng màu và Typography**: Chỉnh sửa tại [`src/index.css`](file:///C:/Users/duong/.gemini/antigravity/scratch/bloom-2010/src/index.css).
