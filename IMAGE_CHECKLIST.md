# Danh sách ảnh cần chuẩn bị

Anh chỉ cần thay ảnh thật vào đúng các file bên dưới trong thư mục `assets/`. Giữ nguyên tên file để website tự nhận.

## Ảnh chính và chân dung

| File | Dùng ở đâu | Gợi ý ảnh |
| --- | --- | --- |
| `assets/hero-family.jpg` | Hero đầu trang và slide mở màn | Ảnh đẹp nhất của Tết hoặc cả nhà, nên là ảnh dọc |
| `assets/ba-ngoai.jpg` | Card bà ngoại và slideshow | Ảnh bà ngoại, hoặc bà ngoại với Tết |
| `assets/ba-noi.jpg` | Card bà nội và slideshow | Ảnh bà nội, hoặc bà nội với Tết |
| `assets/me-cua-tet.jpg` | Card mẹ và slideshow | Ảnh mẹ với Tết |
| `assets/tet-portrait.jpg` | Card Tết và slideshow | Ảnh chân dung Tết rõ mặt |

## Ảnh album

Hiện website tạo sẵn 16 slot album:

| File | Gợi ý nội dung |
| --- | --- |
| `assets/album-01.jpg` | Khoảnh khắc đầu tiên |
| `assets/album-02.jpg` | Nụ cười của Tết |
| `assets/album-03.jpg` | Bên bà ngoại |
| `assets/album-04.jpg` | Bên bà nội |
| `assets/album-05.jpg` | Ba mẹ và Tết |
| `assets/album-06.jpg` | Một ngày rất vui |
| `assets/album-07.jpg` | Lần đầu đáng nhớ |
| `assets/album-08.jpg` | Cả nhà bên nhau |
| `assets/album-09.jpg` | Tết khám phá thế giới |
| `assets/album-10.jpg` | Một cái ôm thật lâu |
| `assets/album-11.jpg` | Ngày tháng sáu |
| `assets/album-12.jpg` | Nụ cười trong nhà |
| `assets/album-13.jpg` | Ảnh kỷ niệm 13 |
| `assets/album-14.jpg` | Ảnh kỷ niệm 14 |
| `assets/album-15.jpg` | Ảnh kỷ niệm 15 |
| `assets/album-16.jpg` | Ảnh kỷ niệm 16 |

## Nếu có nhiều hơn 16 ảnh

1. Thêm file mới vào `assets/`, ví dụ `assets/album-17.jpg`.
2. Mở `site-data.js`.
3. Thêm một dòng vào danh sách `images.album`:

```js
{ src: "assets/album-17.jpg", caption: "Caption ảnh 17" },
```

Album và slideshow sẽ tự dùng layout responsive, không cần sửa HTML.
