# Danh sách ảnh cần chuẩn bị

Anh chỉ cần thay ảnh thật vào đúng các file bên dưới trong thư mục `assets/`. Giữ nguyên tên file để website tự nhận.

## Ảnh chính và chân dung

| File | Dùng ở đâu | Gợi ý ảnh |
| --- | --- | --- |
| `assets/hero-family.png` | Hero đầu trang và slide mở màn | Ảnh đẹp nhất của Tết hoặc cả nhà, nên là ảnh dọc |
| `assets/ba-ngoai.png` | Card bà ngoại và slideshow | Ảnh bà ngoại, hoặc bà ngoại với Tết |
| `assets/ba-noi.png` | Card bà nội và slideshow | Ảnh bà nội, hoặc bà nội với Tết |
| `assets/me-cua-tet.png` | Card mẹ và slideshow | Ảnh mẹ với Tết |
| `assets/tet-portrait.png` | Card Tết và slideshow | Ảnh chân dung Tết rõ mặt |

## Ảnh album

Hiện website tạo sẵn 16 slot album:

| File | Gợi ý nội dung |
| --- | --- |
| `assets/album-01.png` | Khoảnh khắc đầu tiên |
| `assets/album-02.png` | Nụ cười của Tết |
| `assets/album-03.png` | Bên bà ngoại |
| `assets/album-04.png` | Bên bà nội |
| `assets/album-05.png` | Ba mẹ và Tết |
| `assets/album-06.png` | Một ngày rất vui |
| `assets/album-07.png` | Lần đầu đáng nhớ |
| `assets/album-08.png` | Cả nhà bên nhau |
| `assets/album-09.png` | Tết khám phá thế giới |
| `assets/album-10.png` | Một cái ôm thật lâu |
| `assets/album-11.png` | Ngày tháng sáu |
| `assets/album-12.png` | Nụ cười trong nhà |
| `assets/album-13.png` | Ảnh kỷ niệm 13 |
| `assets/album-14.png` | Ảnh kỷ niệm 14 |
| `assets/album-15.png` | Ảnh kỷ niệm 15 |
| `assets/album-16.png` | Ảnh kỷ niệm 16 |

## Nếu có nhiều hơn 16 ảnh

1. Thêm file mới vào `assets/`, ví dụ `assets/album-17.png`.
2. Mở `site-data.js`.
3. Thêm một dòng vào danh sách `images.album`:

```js
{ src: "assets/album-17.png", caption: "Caption ảnh 17" },
```

Album và slideshow sẽ tự dùng layout responsive, không cần sửa HTML.
