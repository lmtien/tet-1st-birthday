# Mùa sinh nhật đầu tiên của Tết

Website tĩnh cho bữa tiệc ngày 5/6: mừng sinh nhật bà ngoại 28/5, bà nội 5/6, mẹ 17/6 và bé Tết 26/6.

## Cách chạy rẻ nhất

Mở trực tiếp file `index.html` trong trình duyệt. Cách này không tốn chi phí và phù hợp để chỉnh nội dung, xem thử trên máy.

Giao diện hiện tại dùng concept **Đêm Gia Đình Hoàng Kim + Tiểu Tết Đoàn Viên**: nền sân khấu đêm, vàng champagne, đỏ son, đèn lồng, cánh hoa và slideshow cho bữa tiệc.

## Cách deploy miễn phí để khách quét QR

Anh có 2 lựa chọn miễn phí:

### GitHub Pages

GitHub Pages host được website, nhưng không tự lưu lời chúc tập trung. Nếu dùng GitHub Pages, xem [WISHES_SETUP.md](WISHES_SETUP.md) để móc Google Forms hoặc Formspree.

### Netlify

1. Vào <https://app.netlify.com/drop>.
2. Kéo thả cả thư mục này vào trang Netlify Drop.
3. Netlify sẽ tạo một link miễn phí.
4. Dùng link đó tạo QR bằng <https://www.qr-code-generator.com/> hoặc bất kỳ công cụ QR nào.

Nếu deploy lên Netlify và muốn dùng Netlify Forms, mở `site-data.js` rồi đổi `wishBackend.provider` thành `"netlify"`.

## Thay ảnh

Em đã tạo sẵn placeholder trong thư mục `assets`. Anh xem danh sách đầy đủ ở [IMAGE_CHECKLIST.md](IMAGE_CHECKLIST.md).

Các file chính:

- `assets/hero-family.png`
- `assets/ba-ngoai.png`
- `assets/ba-noi.png`
- `assets/me-cua-tet.png`
- `assets/tet-portrait.png`
- `assets/album-01.png` đến `assets/album-16.png`

Cách dễ nhất là thay ảnh thật vào đúng tên file đang có. Không cần sửa HTML.

Nếu album có hơn 16 ảnh, thêm file vào `assets` rồi thêm một dòng trong `site-data.js`, mục `images.album`.

## Sửa lời thư

Mở `script.js`, sửa nội dung trong biến `letters`. Bốn lá thư hiện có:

- `tet`: ba gửi Tết lúc 1 tuổi
- `mom`: ba gửi mẹ của Tết
- `grandmas`: ba gửi bà ngoại và bà nội
- `future`: lá thư gửi Tết năm 18 tuổi

File `thu-mau.md` là bản thư riêng, dễ in hoặc lưu lâu dài trong Drive.

## Lưu lại lâu dài

Nên lưu 3 thứ:

- Thư mục website này trong OneDrive hoặc Google Drive.
- File CSV lời chúc tải từ nút mũi tên trong phần "Góc lời chúc".
- Một bản PDF: mở website trong Chrome, bấm Print, chọn Save as PDF.

Nếu deploy Netlify, sau bữa tiệc hãy vào Netlify Forms để export lời chúc thành CSV.
