document.addEventListener("DOMContentLoaded", () => {
  const SOCIAL_ICONS = {
    github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.03 11.03 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  };

  /* THEME SWITCHER */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIconSvg = document.getElementById("theme-icon-svg");

  const sunPath = "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.02-12.02l-1.41 1.41M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z";
  const moonPath = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z";

  const applyTheme = (theme) => {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    if (theme === "dark") {
      themeIconSvg.innerHTML = `<path d="${sunPath}"/>`;
      themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
    } else {
      themeIconSvg.innerHTML = `<path d="${moonPath}"/>`;
      themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
    }
  };

  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-theme");
    applyTheme(current === "light" ? "dark" : "light");
  });

  /* POPULATE HERO & DATA */
  const { profile, contactActions, socials, sliderItems, galleryItems } = PORTFOLIO_DATA;

  document.title = `${profile.fullName} — Portfolio`;
  document.getElementById("nav-brand-text").textContent = profile.brandName;
  document.getElementById("badge-status").textContent = profile.statusBadge;
  document.getElementById("profile-location").textContent = profile.location;
  document.getElementById("profile-role").textContent = profile.role;
  document.getElementById("profile-name").textContent = profile.fullName;
  document.getElementById("profile-bio").textContent = profile.shortBio;
  document.getElementById("profile-about").textContent = profile.aboutMe;

  const profileImg = document.getElementById("profile-img");
  profileImg.src = profile.profileImage;
  profileImg.alt = `${profile.fullName} Portrait`;

  document.getElementById("btn-call").href = `tel:${contactActions.phone}`;
  document.getElementById("btn-email").href = `mailto:${contactActions.email}`;

  document.getElementById("footer-name").textContent = profile.fullName;
  document.getElementById("footer-copyright").textContent =
    `© ${profile.copyrightYear} ${profile.fullName}. All Rights Reserved.`;

  const socialContainer = document.getElementById("social-links");
  socials.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "social-link";
    link.setAttribute("aria-label", item.name);
    const iconSvg = SOCIAL_ICONS[item.icon.toLowerCase()] || "✦";
    link.innerHTML = `${iconSvg}<span>${item.name}</span>`;
    socialContainer.appendChild(link);
  });

  /* SLIDER LOGIC */
  const carouselTrack = document.getElementById("carousel-track");
  const carouselDots = document.getElementById("carousel-dots");
  const carouselWrapper = document.getElementById("carousel-wrapper");
  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");

  let currentSlide = 0;

  sliderItems.forEach((slide, index) => {
    const slideEl = document.createElement("article");
    slideEl.className = "slide-card";
    slideEl.innerHTML = `
      <div class="slide-media">
        <span class="slide-badge">${slide.badge}</span>
        <img src="${slide.image}" alt="${slide.title}" loading="lazy" />
      </div>
      <div class="slide-info">
        <h3 class="slide-title">${slide.title}</h3>
        <p class="slide-desc">${slide.description}</p>
        <div>
          <a href="${slide.linkUrl}" class="btn btn-primary">${slide.linkText} →</a>
        </div>
      </div>
    `;
    carouselTrack.appendChild(slideEl);

    const dot = document.createElement("button");
    dot.className = `dot-btn ${index === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    carouselDots.appendChild(dot);
  });

  const updateCarousel = () => {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    const allDots = carouselDots.querySelectorAll(".dot-btn");
    allDots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentSlide);
    });
  };

  const goToSlide = (index) => {
    const total = sliderItems.length;
    currentSlide = (index + total) % total;
    updateCarousel();
  };

  prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  let touchStartX = 0;
  let touchEndX = 0;
  carouselWrapper.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselWrapper.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 45) {
      if (swipeDistance > 0) goToSlide(currentSlide + 1);
      else goToSlide(currentSlide - 1);
    }
  }, { passive: true });

  /* GALLERY & LIGHTBOX */
  const galleryGrid = document.getElementById("gallery-grid");
  const galleryCount = document.getElementById("gallery-count");
  const lightbox = document.getElementById("lightbox");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTag = document.getElementById("lightbox-tag");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");

  galleryCount.textContent = `${galleryItems.length} ITEMS`;

  const openLightbox = (item) => {
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTag.textContent = item.tag || "GALLERY_PREVIEW";
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  galleryItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Inspect ${item.title}`);

    card.innerHTML = `
      <div class="gallery-thumb">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        ${item.tag ? `<span class="gallery-tag">${item.tag}</span>` : ""}
      </div>
      <div class="gallery-content">
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-desc">${item.description}</p>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item);
      }
    });

    galleryGrid.appendChild(card);
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);

  /* SHARE / QR MODAL LOGIC */
  const shareModal = document.getElementById("share-modal");
  const shareBtn = document.getElementById("btn-share-modal");
  const shareClose = document.getElementById("share-close");
  const shareBackdrop = document.getElementById("share-backdrop");
  const qrContainer = document.getElementById("qr-code-container");
  const copyLinkBtn = document.getElementById("btn-copy-link");
  const downloadVcardBtn = document.getElementById("btn-download-vcard");

  const generateQRCodeSVG = (url) => {
    const encodedUrl = encodeURIComponent(url);
    qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodedUrl}" alt="QR Code" style="width:160px;height:160px;display:block;" />`;
  };

  shareBtn.addEventListener("click", () => {
    generateQRCodeSVG(window.location.href);
    shareModal.classList.add("open");
    shareModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  const closeShareModal = () => {
    shareModal.classList.remove("open");
    shareModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  shareClose.addEventListener("click", closeShareModal);
  shareBackdrop.addEventListener("click", closeShareModal);

  copyLinkBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const originalText = copyLinkBtn.textContent;
      copyLinkBtn.textContent = "✓ COPIED!";
      setTimeout(() => { copyLinkBtn.textContent = originalText; }, 2000);
    });
  });

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${profile.fullName}
TITLE:${profile.role}
TEL:${contactActions.phone}
EMAIL:${contactActions.email}
URL:${window.location.href}
END:VCARD`;

  const vCardBlob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
  downloadVcardBtn.href = URL.createObjectURL(vCardBlob);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightbox.classList.contains("open")) closeLightbox();
      if (shareModal.classList.contains("open")) closeShareModal();
    }
  });

  /* FLOATING BACK TO TOP SCROLL BEHAVIOR */
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
