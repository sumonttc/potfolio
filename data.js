/**
 * ============================================================================
 * PORTFOLIO CONTENT CONFIGURATION (data.js)
 * ============================================================================
 * HOW TO CUSTOMIZE:
 * 1. Place your personal photos inside the `assets/images/` folder.
 * 2. Replace the image paths below (e.g., "assets/images/profile.jpg").
 * 3. Edit any text, titles, links, or add/remove objects in the arrays!
 * ============================================================================
 */

// Helper SVG placeholder generator so the layout looks crisp before you add local photos
const createPlaceholderSVG = (label, bgColor = "#FF3366") =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="${bgColor}"/>
      <rect x="24" y="24" width="752" height="552" fill="none" stroke="#111111" stroke-width="8" stroke-dasharray="18 12"/>
      <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="34" fill="#111111">${label}</text>
      <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="20" fill="#111111">Replace in data.js -> assets/images/</text>
    </svg>`
  )}`;

const PORTFOLIO_DATA = {
  // 1. PROFILE & HERO DETAILS
  profile: {
    brandName: "Sumon Technical Training Center",
    fullName: "SUMON ALI",
    role: "CREATIVE DEVELOPER & UI ARCHITECT",
    statusBadge: "OPEN FOR COLLABS ⚡",
    location: "📍 DHAKA / REMOTE WORLDWIDE",
profileImage: "assets/images/profile.jpg",
    shortBio:
      "I design loud, unforgettable digital experiences, interactive interfaces, and expressive brand identities that refuse to blend in.",
    aboutMe:
      "Hey there! I'm a multidisciplinary designer and frontend developer obsessed with bold typography, tactile UI systems, and clean vanilla code. Whether I'm crafting web applications, directing visual campaigns, or experimenting with retro-futuristic aesthetics, I believe the web should feel alive, playful, and unmistakably human.",
    copyrightYear: "2026"
  },

  // 2. DIRECT CONTACT BUTTONS (Call, Email, Message)
  contactActions: {
    phone: "+1234567890", // Used for tel: link
    email: "hello@alexvance.design", // Used for mailto: link
    // WhatsApp, Telegram, or direct chat link:
    messageUrl: "https://wa.me/1234567890?text=Hi%20Alex!%20I%20saw%20your%20portfolio."
  },

  // 3. SOCIAL MEDIA LINKS
  // Supported icons in script.js: github, linkedin, facebook, instagram, twitter, youtube, dribbble
  socials: [
    { name: "GitHub", icon: "github", url: "https://github.com/" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/" },
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/" },
    { name: "X / Twitter", icon: "twitter", url: "https://x.com/" }
  ],

  // 4. INTERACTIVE SLIDER / CAROUSEL ITEMS
  sliderItems: [
    {
      badge: "FEATURED // 01",
      title: "NEON ARCADE FESTIVAL IDENTITY",
      description:
        "Complete visual direction, motion posters, and interactive ticket portal for an annual indie game and electronic music showcase.",
      // Replace with: "assets/images/slide-1.jpg"
      image: createPlaceholderSVG("SLIDE 01 (slide-1.jpg)", "#00E5FF"),
      linkText: "Explore Highlight",
      linkUrl: "#gallery"
    },
    {
      badge: "CASE STUDY // 02",
      title: "HYPER-POP COMMERCE ENGINE",
      description:
        "A high-converting custom storefront built with zero frameworks, tactile micro-interactions, and sub-second page loads.",
      // Replace with: "assets/images/slide-2.jpg"
      image: createPlaceholderSVG("SLIDE 02 (slide-2.jpg)", "#A3E635"),
      linkText: "View Gallery",
      linkUrl: "#gallery"
    },
    {
      badge: "PERSONAL // 03",
      title: "ANALOG ZINE & STREET PHOTOGRAPHY",
      description:
        "A curated 64-page print publication documenting brutalist architecture, street typography, and midnight cityscapes.",
      // Replace with: "assets/images/slide-3.jpg"
      image: createPlaceholderSVG("SLIDE 03 (slide-3.jpg)", "#FF3366"),
      linkText: "See Captures",
      linkUrl: "#gallery"
    }
  ],

  // 5. CUSTOMIZABLE IMAGE GALLERY ITEMS
  // Add, remove, or edit as many cards as you want!
  galleryItems: [
    {
      tag: "BRANDING",
      title: "KINETIC TYPE POSTER SERIES",
      description: "Experimental Swiss-meets-Maximalist poster series printed in fluorescent spot inks.",
      // Replace with: "assets/images/gallery-1.jpg"
      image: createPlaceholderSVG("GALLERY 01 (gallery-1.jpg)", "#FFD60A")
    },
    {
      tag: "WEB DESIGN",
      title: "SYNTHWAVE AUDIO DASHBOARD",
      description: "Browser-based synthesizer interface featuring tactile knobs and real-time waveform visualizers.",
      // Replace with: "assets/images/gallery-2.jpg"
      image: createPlaceholderSVG("GALLERY 02 (gallery-2.jpg)", "#00E5FF")
    },
    {
      tag: "PHOTOGRAPHY",
      title: "CONCRETE & NEON ARCHIVE",
      description: "Late-night 35mm film captures exploring reflections and geometric urban shadows.",
      // Replace with: "assets/images/gallery-3.jpg"
      image: createPlaceholderSVG("GALLERY 03 (gallery-3.jpg)", "#FF3366")
    },
    {
      tag: "ILLUSTRATION",
      title: "STICKER PACK VOL. 04",
      description: "Die-cut vinyl mascot stickers created for developer conferences and creative meetups.",
      // Replace with: "assets/images/gallery-4.jpg"
      image: createPlaceholderSVG("GALLERY 04 (gallery-4.jpg)", "#A3E635")
    },
    {
      tag: "UI / UX",
      title: "RETRO TASK MANAGER APP",
      description: "A playful productivity tool turning daily to-do lists into collectible arcade achievements.",
      // Replace with: "assets/images/gallery-5.jpg"
      image: createPlaceholderSVG("GALLERY 05 (gallery-5.jpg)", "#B5179E")
    },
    {
      tag: "PACKAGING",
      title: "SUPERCHARGED COLD BREW CANS",
      description: "Bold aluminum can wrap designs with high-contrast typography and custom iconography.",
      // Replace with: "assets/images/gallery-6.jpg"
      image: createPlaceholderSVG("GALLERY 06 (gallery-6.jpg)", "#FFE66D")
    }
  ]
};
