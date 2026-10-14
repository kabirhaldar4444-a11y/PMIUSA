// Scratch script to generate and validate SVG freehand cliparts
const fs = require('fs');
const path = require('path');

// 1. FULL STACK WEB & CLOUD
const svgFullstack = `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" aria-label="Full Stack Web & Cloud Development Clipart">
  <defs>
    <linearGradient id="fs-blob" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ec4899" stop-opacity="0.85"/>
      <stop offset="50%" stop-color="#8b5cf6" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="fs-desk" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
    <linearGradient id="fs-screen" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="fs-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Organic freehand background blob -->
  <path d="M 60,130 C 50,60 120,25 210,35 C 310,45 420,15 450,80 C 480,150 440,225 350,235 C 240,245 140,240 85,210 C 55,190 65,160 60,130 Z" fill="url(#fs-blob)" filter="url(#fs-shadow)"/>

  <!-- Background decorative gears -->
  <g fill="#f472b6" opacity="0.6">
    <path d="M 100,55 L 103,50 L 108,52 L 108,57 L 113,60 L 111,65 L 106,66 L 104,71 L 99,70 L 98,65 L 93,62 L 95,57 L 100,58 Z"/>
    <circle cx="103" cy="61" r="3" fill="#1e1b4b"/>
  </g>
  <g fill="#c084fc" opacity="0.5">
    <circle cx="410" cy="55" r="14"/>
    <circle cx="410" cy="55" r="6" fill="#1e1b4b"/>
  </g>

  <!-- Floating Paper Airplane with dashed trail (hero hallmark) -->
  <path d="M 330,85 Q 380,60 425,40" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4" fill="none" opacity="0.8"/>
  <g transform="translate(425, 30) rotate(-15)">
    <polygon points="0,15 28,0 20,24 10,18" fill="#38bdf8"/>
    <polygon points="10,18 28,0 16,16" fill="#bae6fd"/>
  </g>

  <!-- Floating Speech Bubbles with 3 dots (hero hallmark) -->
  <g transform="translate(70, 75)">
    <rect x="0" y="0" width="46" height="26" rx="13" fill="#ec4899"/>
    <polygon points="12,26 8,33 20,26" fill="#ec4899"/>
    <circle cx="15" cy="13" r="2.5" fill="#ffffff"/>
    <circle cx="23" cy="13" r="2.5" fill="#ffffff"/>
    <circle cx="31" cy="13" r="2.5" fill="#ffffff"/>
  </g>
  <g transform="translate(380, 115)">
    <rect x="0" y="0" width="50" height="28" rx="14" fill="#3b82f6"/>
    <polygon points="36,28 42,36 30,28" fill="#3b82f6"/>
    <circle cx="17" cy="14" r="2.5" fill="#ffffff"/>
    <circle cx="25" cy="14" r="2.5" fill="#ffffff"/>
    <circle cx="33" cy="14" r="2.5" fill="#ffffff"/>
  </g>

  <!-- Curved Workstation Desk (hero hallmark) -->
  <path d="M 110,215 Q 250,195 390,215 L 420,255 L 80,255 Z" fill="url(#fs-desk)"/>
  <rect x="175" y="222" width="150" height="22" rx="11" fill="rgba(255,255,255,0.18)"/>
  <text x="250" y="237" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="11" text-anchor="middle" letter-spacing="1">&lt;/&gt; FULL STACK &amp; CLOUD</text>

  <!-- Left Monitor: Code Editor -->
  <g transform="translate(145, 110)">
    <rect x="0" y="0" width="100" height="68" rx="6" fill="url(#fs-screen)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="100" height="12" rx="6" fill="#0f172a"/>
    <circle cx="8" cy="6" r="2" fill="#ef4444"/>
    <circle cx="15" cy="6" r="2" fill="#eab308"/>
    <circle cx="22" cy="6" r="2" fill="#22c55e"/>
    <!-- Code lines -->
    <rect x="8" y="18" width="40" height="3" rx="1.5" fill="#a855f7"/>
    <rect x="14" y="25" width="55" height="3" rx="1.5" fill="#38bdf8"/>
    <rect x="20" y="32" width="45" height="3" rx="1.5" fill="#ec4899"/>
    <rect x="14" y="39" width="65" height="3" rx="1.5" fill="#4ade80"/>
    <rect x="8" y="46" width="30" height="3" rx="1.5" fill="#facc15"/>
    <rect x="14" y="53" width="48" height="3" rx="1.5" fill="#60a5fa"/>
    <!-- Stand -->
    <rect x="44" y="68" width="12" height="18" fill="#475569"/>
    <rect x="36" y="84" width="28" height="4" rx="2" fill="#64748b"/>
  </g>

  <!-- Center Developer with Headset (hero clipart character style) -->
  <g transform="translate(225, 95)">
    <!-- Body / Shirt -->
    <path d="M 12,50 C 12,42 18,36 28,36 C 38,36 44,42 44,50 L 48,80 L 8,80 Z" fill="#f59e0b"/>
    <!-- Head -->
    <circle cx="28" cy="24" r="13" fill="#fcd34d"/>
    <!-- Hair -->
    <path d="M 16,22 C 16,14 22,10 30,10 C 37,10 41,13 41,18 C 38,18 34,20 30,19 C 24,19 19,23 16,22 Z" fill="#1e293b"/>
    <!-- Headset (hero hallmark) -->
    <path d="M 14,24 A 14,14 0 0 1 42,24" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
    <rect x="12" y="21" width="4" height="8" rx="2" fill="#0284c7"/>
    <rect x="40" y="21" width="4" height="8" rx="2" fill="#0284c7"/>
    <path d="M 14,26 Q 16,33 22,34" fill="none" stroke="#0284c7" stroke-width="2"/>
    <circle cx="23" cy="34" r="2" fill="#38bdf8"/>
  </g>

  <!-- Right Monitor: Live Web App UI -->
  <g transform="translate(265, 115)">
    <rect x="0" y="0" width="95" height="65" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="95" height="12" rx="6" fill="#1e293b"/>
    <circle cx="8" cy="6" r="2" fill="#ef4444"/>
    <circle cx="15" cy="6" r="2" fill="#eab308"/>
    <circle cx="22" cy="6" r="2" fill="#22c55e"/>
    <!-- Dashboard blocks -->
    <rect x="6" y="18" width="22" height="40" rx="3" fill="#1e293b"/>
    <rect x="34" y="18" width="55" height="18" rx="3" fill="#312e81"/>
    <!-- Mini bar chart -->
    <rect x="36" y="44" width="8" height="12" rx="1" fill="#38bdf8"/>
    <rect x="48" y="40" width="8" height="16" rx="1" fill="#818cf8"/>
    <rect x="60" y="47" width="8" height="9" rx="1" fill="#c084fc"/>
    <rect x="72" y="38" width="8" height="18" rx="1" fill="#4ade80"/>
    <!-- Stand -->
    <rect x="42" y="65" width="12" height="18" fill="#475569"/>
    <rect x="34" y="81" width="28" height="4" rx="2" fill="#64748b"/>
  </g>

  <!-- Floating React Atom Orbit -->
  <g transform="translate(115, 60)" opacity="0.85">
    <ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#38bdf8" stroke-width="1.5" transform="rotate(0 20 20)"/>
    <ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#38bdf8" stroke-width="1.5" transform="rotate(60 20 20)"/>
    <ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#38bdf8" stroke-width="1.5" transform="rotate(120 20 20)"/>
    <circle cx="20" cy="20" r="3.5" fill="#38bdf8"/>
  </g>

  <!-- Floating Sparkles (4-point stars) -->
  <path d="M 230,45 Q 230,55 240,55 Q 230,55 230,65 Q 230,55 220,55 Q 230,55 230,45 Z" fill="#fef08a"/>
  <path d="M 370,50 Q 370,58 378,58 Q 370,58 370,66 Q 370,58 362,58 Q 370,58 370,50 Z" fill="#ffffff" opacity="0.9"/>
</svg>`;

console.log('Fullstack SVG valid length:', svgFullstack.length);
