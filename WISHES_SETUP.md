# Lưu lời chúc khi host trên GitHub Pages

GitHub Pages chỉ host file tĩnh, nên nó không tự lưu lời chúc tập trung được. Website hiện luôn lưu lời chúc vào `localStorage` của từng máy và có nút xuất CSV, nhưng cách đó chỉ lưu trên thiết bị đang mở trang.

Nếu muốn khách quét QR rồi lời chúc gom về một chỗ, dùng một trong hai cách dưới đây.

## Cách miễn phí nên dùng: Google Forms

1. Tạo Google Form mới với 3 câu hỏi dạng Short answer:
   - `Tên người gửi`
   - `Gửi đến ai`
   - `Lời chúc`
2. Bấm menu ba chấm của form, chọn `Get pre-filled link`.
3. Điền thử 3 ô bằng các chữ dễ nhận ra, ví dụ `TEN`, `AI`, `LOI_CHUC`.
4. Bấm `Get link`, copy link.
5. Trong link đó sẽ có các mã kiểu `entry.123456=TEN`, `entry.987654=AI`, `entry.555555=LOI_CHUC`.
6. Mở `site-data.js`, đổi phần `wishBackend` thành:

```js
wishBackend: {
  provider: "googleForms",
  formspreeEndpoint: "",
  googleForm: {
    action: "https://docs.google.com/forms/d/e/FORM_ID/formResponse",
    fields: {
      name: "entry.123456",
      to: "entry.987654",
      message: "entry.555555"
    }
  }
}
```

Trong đó:

- `FORM_ID` lấy từ link Google Form của anh.
- Ba mã `entry...` thay bằng mã thật lấy từ pre-filled link.
- Link Google Form thường có `/viewform`; khi đưa vào `action`, đổi `/viewform` thành `/formResponse`.

Sau bữa tiệc, vào tab Responses của Google Form để xem hoặc export lời chúc ra Google Sheets.

## Cách nhanh hơn: Formspree

1. Tạo form miễn phí tại <https://formspree.io/>.
2. Copy endpoint dạng `https://formspree.io/f/xxxxxxx`.
3. Mở `site-data.js`, đổi phần `wishBackend` thành:

```js
wishBackend: {
  provider: "formspree",
  formspreeEndpoint: "https://formspree.io/f/xxxxxxx",
  googleForm: {
    action: "",
    fields: {
      name: "",
      to: "",
      message: ""
    }
  }
}
```

## Nếu deploy bằng Netlify

Đổi `provider` thành `"netlify"`. Khi đó Netlify Forms sẽ nhận lời chúc. Cách này không dùng được nếu host bằng GitHub Pages.
