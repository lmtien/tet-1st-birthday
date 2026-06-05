const letters = {
  tet: {
    title: "Ba gửi Tết, nhân sinh nhật 1 tuổi",
    body: [
      "Tết của ba,",
      "Một năm qua, con đến với nhà mình nhỏ xíu mà làm mọi thứ lớn lên. Ba học cách chăm con, học cách kiên nhẫn hơn, và học cách thấy hạnh phúc trong những điều rất bé: một cái nắm tay, một lần con cười, một đêm con ngủ ngon.",
      "Sinh nhật 1 tuổi của con, ba không mong con phải lớn thật nhanh. Ba chỉ mong con lớn trong bình an, được yêu thương, được tự do khám phá, và luôn biết rằng nhà mình là nơi con có thể quay về.",
      "Thương con rất nhiều."
    ]
  },
  mom: {
    title: "Ba gửi mẹ của Tết",
    body: [
      "Vợ Cá Nục của anh,",
      "Sinh nhật năm nay của em đặc biệt hơn mọi năm, vì nó đi cùng năm đầu tiên em làm mẹ của Tết. Anh biết có những ngày rất mỏi, có những đêm rất dài, và có những điều em đã làm âm thầm mà không phải lúc nào anh cũng nói được lời cảm ơn.",
      "Cảm ơn em vì đã cùng anh đi qua năm đầu tiên của con. Cảm ơn em vì những chăm sóc, những lo lắng, những hy sinh, và cả những lúc em vẫn mỉm cười để nhà mình thấy nhẹ hơn.",
      "Chúc mừng sinh nhật em, và chúc mừng em tròn một năm làm mẹ."
    ]
  },
  grandmas: {
    title: "Ba gửi bà ngoại và bà nội",
    body: [
      "Con gửi hai bà,",
      "Mùa sinh nhật này nhà mình vui hơn vì có Tết. Nhưng thật ra Tết vui được như vậy là vì quanh con có thêm hai vòng tay của bà ngoại và bà nội.",
      "Cảm ơn hai bà vì đã thương cháu, thương con, và giữ cho nhà mình nhiều hơi ấm. Những chăm sóc nhỏ, những lời hỏi han, những lúc phụ một tay, tất cả đều thành ký ức rất quý với gia đình con.",
      "Chúc hai bà sinh nhật thật vui, thật khỏe, và con mong Tết sẽ còn thật nhiều năm lớn lên trong tình thương của hai bà."
    ]
  },
  future: {
    title: "Lá thư gửi Tết năm 18 tuổi",
    body: [
      "Tết của năm 18 tuổi,",
      "Nếu hôm nay con đọc lại lá thư này, nghĩa là đã qua rất lâu từ bữa tiệc sinh nhật 1 tuổi của con. Hôm đó con vẫn còn bé lắm, chưa biết mình đã làm cả nhà vui đến mức nào.",
      "Ba muốn con biết: ngày con tròn 1 tuổi, nhà mình đã mừng sinh nhật cho bà ngoại, bà nội, mẹ và con trong cùng một mùa. Con là người nhỏ nhất, nhưng con làm những người lớn gần nhau hơn.",
      "Năm 18 tuổi, có thể con đã có nhiều ước mơ riêng. Ba mẹ không cần con trở thành ai đó thật lớn lao. Ba mẹ chỉ mong con thành một người tử tế, biết yêu thương, biết đứng dậy sau những ngày khó, và biết rằng con luôn được yêu.",
      "Từ sinh nhật 1 tuổi của con, ba gửi đến con của tuổi 18 một cái ôm thật dài."
    ]
  }
};

const siteData = window.siteData || {};
const slides = siteData.slides || [];
const wishKey = "tet_first_birthday_wishes";
const letterPaper = document.querySelector("#letterPaper");
const tabs = document.querySelectorAll(".tab");
const wishForm = document.querySelector("#wishForm");
const wishStatus = document.querySelector("#wishStatus");
const wishList = document.querySelector("#wishList");
const exportButton = document.querySelector("#exportWishes");
const photoGrid = document.querySelector("#photoGrid");
const slideshow = document.querySelector("#slideshow");
const slideshowButton = document.querySelector("#slideshowButton");
const closeSlideshow = document.querySelector("#closeSlideshow");
const slideImage = document.querySelector("#slideImage");
const slideEyebrow = document.querySelector("#slideEyebrow");
const slideTitle = document.querySelector("#slideTitle");
const slideText = document.querySelector("#slideText");
const slideCount = document.querySelector("#slideCount");
const prevSlide = document.querySelector("#prevSlide");
const pauseSlide = document.querySelector("#pauseSlide");
const nextSlide = document.querySelector("#nextSlide");

let slideIndex = 0;
let slideTimer;
let isSlidePaused = false;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyConfiguredImages() {
  const images = siteData.images || {};
  if (images.hero) {
    const heroImage = document.querySelector("#heroImage");
    heroImage.src = images.hero.src;
    heroImage.alt = images.hero.alt;
  }

  const honorees = images.honorees || {};
  const honoreeMap = [
    [".grandma-outside .person-photo", honorees.baNgoai],
    [".grandma-inside .person-photo", honorees.baNoi],
    [".mom-card .person-photo", honorees.me],
    [".tet-card .person-photo", honorees.tet]
  ];

  honoreeMap.forEach(([selector, image]) => {
    const element = document.querySelector(selector);
    if (element && image) {
      element.src = image.src;
      element.alt = image.alt;
    }
  });
}

function renderAlbum() {
  const album = siteData.images?.album || [];
  photoGrid.innerHTML = album
    .map((photo, index) => {
      const featureClass = index === 0 || index === 7 ? " large" : index === 4 || index === 11 ? " wide" : "";
      const caption = photo.caption ? `<figcaption>${escapeHtml(photo.caption)}</figcaption>` : "";
      return `
        <figure class="memory-photo${featureClass}">
          <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.caption || 'Ảnh gia đình')}" loading="lazy" />
          ${caption}
        </figure>
      `;
    })
    .join("");
}

function renderLetter(key) {
  const letter = letters[key];
  letterPaper.innerHTML = `
    <h3>${letter.title}</h3>
    ${letter.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;
}

function getWishes() {
  return JSON.parse(localStorage.getItem(wishKey) || "[]");
}

function saveWishes(wishes) {
  localStorage.setItem(wishKey, JSON.stringify(wishes));
}

function renderWishes() {
  const wishes = getWishes();
  if (!wishes.length) {
    wishList.innerHTML = '<p>Chưa có lời chúc nào trên máy này.</p>';
    return;
  }

  wishList.innerHTML = wishes
    .map(
      (wish) => `
        <article class="wish-item">
          <p>${escapeHtml(wish.message)}</p>
          <small>${escapeHtml(wish.name)} gửi ${escapeHtml(wish.to)} · ${escapeHtml(wish.date)}</small>
        </article>
      `
    )
    .join("");
}

function downloadCsv() {
  const wishes = getWishes();
  const header = ["name", "to", "message", "date"];
  const rows = wishes.map((wish) =>
    header.map((key) => `"${String(wish[key]).replaceAll('"', '""')}"`).join(",")
  );
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "loi-chuc-sinh-nhat-tet.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function renderSlide() {
  if (!slides.length) return;
  const normalizedIndex = (slideIndex + slides.length) % slides.length;
  const slide = slides[normalizedIndex];
  slideImage.src = slide.image;
  slideImage.alt = slide.alt || slide.title;
  slideEyebrow.textContent = slide.eyebrow;
  slideTitle.textContent = slide.title;
  slideText.textContent = slide.text;
  slideCount.textContent = `${normalizedIndex + 1}/${slides.length}`;
  slideIndex = normalizedIndex;
}

function goToSlide(offset) {
  slideIndex = (slideIndex + offset + slides.length) % slides.length;
  renderSlide();
}

function scheduleSlides() {
  window.clearInterval(slideTimer);
  if (!isSlidePaused) {
    slideTimer = window.setInterval(() => goToSlide(1), 6200);
  }
}

function openSlideshow() {
  slideIndex = 0;
  isSlidePaused = false;
  pauseSlide.textContent = "Ⅱ";
  slideshow.hidden = false;
  renderSlide();
  scheduleSlides();
}

function closeSlideMode() {
  slideshow.hidden = true;
  window.clearInterval(slideTimer);
}

async function submitWishToBackend(data) {
  const backend = siteData.wishBackend || {};

  if (backend.provider === "formspree" && backend.formspreeEndpoint) {
    await fetch(backend.formspreeEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data
    });
    return "Đã gửi vào kho lời chúc.";
  }

  if (backend.provider === "googleForms" && backend.googleForm?.action) {
    const params = new URLSearchParams();
    const fields = backend.googleForm.fields || {};
    if (fields.name) params.append(fields.name, data.get("name"));
    if (fields.to) params.append(fields.to, data.get("to"));
    if (fields.message) params.append(fields.message, data.get("message"));
    if (fields.metadata) {
      const meta = [
        navigator.userAgent,
        `${screen.width}x${screen.height}`,
        Intl.DateTimeFormat().resolvedOptions().timeZone,
        navigator.language
      ].join(" | ");
      params.append(fields.metadata, meta);
    }

    await fetch(backend.googleForm.action, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    });
    return "Tết nhận được lời chúc rồi ạ! Cảm ơn cô chú nhiều lắm ạ 🎉";
  }

  if (backend.provider === "netlify") {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    });
    return "Đã gửi vào Netlify Forms.";
  }

  return "Đã lưu trên máy này. Muốn gom lời chúc từ nhiều khách khi dùng GitHub Pages thì cấu hình Google Forms hoặc Formspree.";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderLetter(tab.dataset.letter);
  });
});

wishForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  wishStatus.textContent = "Đang lưu lời chúc...";
  const data = new FormData(wishForm);
  const wish = {
    name: data.get("name"),
    to: data.get("to"),
    message: data.get("message"),
    date: new Date().toLocaleString("vi-VN")
  };

  const wishes = [wish, ...getWishes()];
  saveWishes(wishes);
  renderWishes();
  wishForm.reset();

  try {
    wishStatus.textContent = await submitWishToBackend(data);
  } catch (error) {
    wishStatus.textContent =
      "Đã lưu trên máy này, nhưng chưa gửi được lên kho online. Anh kiểm tra lại cấu hình lưu lời chúc.";
  }
});

exportButton.addEventListener("click", downloadCsv);
slideshowButton.addEventListener("click", openSlideshow);
closeSlideshow.addEventListener("click", closeSlideMode);
prevSlide.addEventListener("click", () => {
  goToSlide(-1);
  scheduleSlides();
});
nextSlide.addEventListener("click", () => {
  goToSlide(1);
  scheduleSlides();
});
pauseSlide.addEventListener("click", () => {
  isSlidePaused = !isSlidePaused;
  pauseSlide.textContent = isSlidePaused ? "▶" : "Ⅱ";
  scheduleSlides();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !slideshow.hidden) {
    closeSlideMode();
  }
  if (event.key === "ArrowLeft" && !slideshow.hidden) {
    goToSlide(-1);
    scheduleSlides();
  }
  if (event.key === "ArrowRight" && !slideshow.hidden) {
    goToSlide(1);
    scheduleSlides();
  }
  if (event.key === " " && !slideshow.hidden) {
    event.preventDefault();
    isSlidePaused = !isSlidePaused;
    pauseSlide.textContent = isSlidePaused ? "▶" : "Ⅱ";
    scheduleSlides();
  }
});

applyConfiguredImages();
renderAlbum();
renderLetter("tet");
renderWishes();
