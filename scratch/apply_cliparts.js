const fs = require('fs');
const path = require('path');

const svgFullstack = `<div class="course-card-clipart clipart-theme-fullstack">
  <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" aria-label="Full Stack Web &amp; Cloud Development Clipart">
    <defs>
      <linearGradient id="fs-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ec4899" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#8b5cf6" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.9"/>
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

    <!-- Decorative gears -->
    <g fill="#f472b6" opacity="0.65">
      <path d="M 95,50 L 98,45 L 103,47 L 103,52 L 108,55 L 106,60 L 101,61 L 99,66 L 94,65 L 93,60 L 88,57 L 90,52 L 95,53 Z"/>
      <circle cx="98" cy="56" r="3" fill="#1e1b4b"/>
    </g>
    <g fill="#c084fc" opacity="0.55">
      <circle cx="415" cy="55" r="14"/>
      <circle cx="415" cy="55" r="6" fill="#1e1b4b"/>
    </g>

    <!-- Floating Paper Airplane with dashed flight trajectory -->
    <path d="M 320,80 Q 375,55 425,38" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4" fill="none" opacity="0.85"/>
    <g transform="translate(425, 28) rotate(-15)">
      <polygon points="0,15 28,0 20,24 10,18" fill="#38bdf8"/>
      <polygon points="10,18 28,0 16,16" fill="#bae6fd"/>
    </g>

    <!-- Floating Speech Bubbles with 3 dots (homescreen hero hallmark) -->
    <g transform="translate(68, 75)">
      <rect x="0" y="0" width="46" height="26" rx="13" fill="#ec4899"/>
      <polygon points="12,26 8,33 20,26" fill="#ec4899"/>
      <circle cx="15" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="23" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="31" cy="13" r="2.5" fill="#ffffff"/>
    </g>
    <g transform="translate(385, 115)">
      <rect x="0" y="0" width="50" height="28" rx="14" fill="#3b82f6"/>
      <polygon points="36,28 42,36 30,28" fill="#3b82f6"/>
      <circle cx="17" cy="14" r="2.5" fill="#ffffff"/>
      <circle cx="25" cy="14" r="2.5" fill="#ffffff"/>
      <circle cx="33" cy="14" r="2.5" fill="#ffffff"/>
    </g>

    <!-- Curved Workstation Desk (homescreen hero hallmark) -->
    <path d="M 110,215 Q 250,195 390,215 L 420,255 L 80,255 Z" fill="url(#fs-desk)"/>
    <rect x="175" y="222" width="150" height="22" rx="11" fill="rgba(255,255,255,0.2)"/>
    <text x="250" y="237" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="11" text-anchor="middle" letter-spacing="1">&lt;/&gt; FULL STACK &amp; CLOUD</text>

    <!-- Left Monitor: Code Editor with Syntax Lines -->
    <g transform="translate(145, 110)">
      <rect x="0" y="0" width="100" height="68" rx="6" fill="url(#fs-screen)" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="0" y="0" width="100" height="12" rx="6" fill="#0f172a"/>
      <circle cx="8" cy="6" r="2" fill="#ef4444"/>
      <circle cx="15" cy="6" r="2" fill="#eab308"/>
      <circle cx="22" cy="6" r="2" fill="#22c55e"/>
      <rect x="8" y="18" width="40" height="3" rx="1.5" fill="#a855f7"/>
      <rect x="14" y="25" width="55" height="3" rx="1.5" fill="#38bdf8"/>
      <rect x="20" y="32" width="45" height="3" rx="1.5" fill="#ec4899"/>
      <rect x="14" y="39" width="65" height="3" rx="1.5" fill="#4ade80"/>
      <rect x="8" y="46" width="30" height="3" rx="1.5" fill="#facc15"/>
      <rect x="14" y="53" width="48" height="3" rx="1.5" fill="#60a5fa"/>
      <rect x="44" y="68" width="12" height="18" fill="#475569"/>
      <rect x="36" y="84" width="28" height="4" rx="2" fill="#64748b"/>
    </g>

    <!-- Center Developer with Headset (homescreen hero character style) -->
    <g transform="translate(225, 95)">
      <path d="M 12,50 C 12,42 18,36 28,36 C 38,36 44,42 44,50 L 48,80 L 8,80 Z" fill="#f59e0b"/>
      <circle cx="28" cy="24" r="13" fill="#fcd34d"/>
      <path d="M 16,22 C 16,14 22,10 30,10 C 37,10 41,13 41,18 C 38,18 34,20 30,19 C 24,19 19,23 16,22 Z" fill="#1e293b"/>
      <path d="M 14,24 A 14,14 0 0 1 42,24" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
      <rect x="12" y="21" width="4" height="8" rx="2" fill="#0284c7"/>
      <rect x="40" y="21" width="4" height="8" rx="2" fill="#0284c7"/>
      <path d="M 14,26 Q 16,33 22,34" fill="none" stroke="#0284c7" stroke-width="2"/>
      <circle cx="23" cy="34" r="2" fill="#38bdf8"/>
    </g>

    <!-- Right Monitor: Live Web App UI Dashboard -->
    <g transform="translate(265, 115)">
      <rect x="0" y="0" width="95" height="65" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1.5"/>
      <rect x="0" y="0" width="95" height="12" rx="6" fill="#1e293b"/>
      <circle cx="8" cy="6" r="2" fill="#ef4444"/>
      <circle cx="15" cy="6" r="2" fill="#eab308"/>
      <circle cx="22" cy="6" r="2" fill="#22c55e"/>
      <rect x="6" y="18" width="22" height="40" rx="3" fill="#1e293b"/>
      <rect x="34" y="18" width="55" height="18" rx="3" fill="#312e81"/>
      <rect x="36" y="44" width="8" height="12" rx="1" fill="#38bdf8"/>
      <rect x="48" y="40" width="8" height="16" rx="1" fill="#818cf8"/>
      <rect x="60" y="47" width="8" height="9" rx="1" fill="#c084fc"/>
      <rect x="72" y="38" width="8" height="18" rx="1" fill="#4ade80"/>
      <rect x="42" y="65" width="12" height="18" fill="#475569"/>
      <rect x="34" y="81" width="28" height="4" rx="2" fill="#64748b"/>
    </g>

    <!-- Floating React Atom Orbit -->
    <g transform="translate(115, 60)" opacity="0.9">
      <ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#38bdf8" stroke-width="1.5" transform="rotate(0 20 20)"/>
      <ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#38bdf8" stroke-width="1.5" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#38bdf8" stroke-width="1.5" transform="rotate(120 20 20)"/>
      <circle cx="20" cy="20" r="3.5" fill="#38bdf8"/>
    </g>

    <!-- Floating Sparkles (4-point stars) -->
    <path d="M 230,45 Q 230,55 240,55 Q 230,55 230,65 Q 230,55 220,55 Q 230,55 230,45 Z" fill="#fef08a"/>
    <path d="M 370,50 Q 370,58 378,58 Q 370,58 370,66 Q 370,58 362,58 Q 370,58 370,50 Z" fill="#ffffff" opacity="0.9"/>
  </svg>
</div>`;

const svgAI = `<div class="course-card-clipart clipart-theme-ai">
  <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" aria-label="Data Science and AI Clipart">
    <defs>
      <linearGradient id="ai-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d946ef" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#9333ea" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="ai-brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="50%" stop-color="#c084fc"/>
        <stop offset="100%" stop-color="#f43f5e"/>
      </linearGradient>
      <linearGradient id="ai-desk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4c1d95"/>
        <stop offset="50%" stop-color="#6d28d9"/>
        <stop offset="100%" stop-color="#7c3aed"/>
      </linearGradient>
      <filter id="ai-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" flood-opacity="0.25"/>
      </filter>
    </defs>

    <!-- Organic freehand background blob -->
    <path d="M 70,120 C 50,50 130,20 220,30 C 330,40 430,20 460,85 C 485,150 440,230 340,240 C 230,250 130,235 80,200 C 50,175 60,150 70,120 Z" fill="url(#ai-blob)" filter="url(#ai-shadow)"/>

    <!-- Decorative gears & circuit nodes -->
    <g fill="#f0abfc" opacity="0.6">
      <circle cx="85" cy="55" r="12"/>
      <circle cx="85" cy="55" r="5" fill="#18002e"/>
    </g>
    <g fill="#a855f7" opacity="0.5">
      <circle cx="420" cy="65" r="16"/>
      <circle cx="420" cy="65" r="7" fill="#18002e"/>
    </g>

    <!-- Floating Paper Airplane with dashed trajectory -->
    <path d="M 120,70 Q 170,40 210,25" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4" fill="none" opacity="0.85"/>
    <g transform="translate(210, 16) rotate(-20)">
      <polygon points="0,15 28,0 20,24 10,18" fill="#38bdf8"/>
      <polygon points="10,18 28,0 16,16" fill="#bae6fd"/>
    </g>

    <!-- Floating AI Bot Chat Bubble with 3 dots -->
    <g transform="translate(65, 80)">
      <rect x="0" y="0" width="52" height="30" rx="15" fill="#06b6d4"/>
      <polygon points="14,30 8,38 22,30" fill="#06b6d4"/>
      <circle cx="16" cy="15" r="3" fill="#ffffff"/>
      <circle cx="26" cy="15" r="3" fill="#ffffff"/>
      <circle cx="36" cy="15" r="3" fill="#ffffff"/>
    </g>
    <g transform="translate(380, 105)">
      <rect x="0" y="0" width="56" height="30" rx="15" fill="#ec4899"/>
      <polygon points="40,30 46,38 34,30" fill="#ec4899"/>
      <text x="28" y="20" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="11" text-anchor="middle">GenAI</text>
    </g>

    <!-- Curved Workstation Desk -->
    <path d="M 110,215 Q 250,195 390,215 L 420,255 L 80,255 Z" fill="url(#ai-desk)"/>
    <rect x="165" y="222" width="170" height="22" rx="11" fill="rgba(255,255,255,0.2)"/>
    <text x="250" y="237" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="11" text-anchor="middle" letter-spacing="1">⚡ AI &amp; NEURAL NETWORKS</text>

    <!-- Center: Glowing 3D Neural Brain & Network Nodes -->
    <g transform="translate(185, 45)">
      <!-- Synaptic Network Lines -->
      <path d="M 30,50 L 65,30 L 100,50 L 65,80 Z" stroke="#38bdf8" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M 65,30 L 65,80 M 30,50 L 100,50" stroke="#f43f5e" stroke-width="1.5" opacity="0.7"/>
      <path d="M 15,35 L 30,50 L 20,75 M 115,35 L 100,50 L 110,75" stroke="#c084fc" stroke-width="1.5" opacity="0.7"/>
      
      <!-- Brain Hemisphere Left -->
      <path d="M 60,25 C 40,25 25,40 25,60 C 25,75 35,88 50,92 C 55,93 60,95 62,100 L 62,25 Z" fill="url(#ai-brain-grad)" opacity="0.95"/>
      <!-- Brain Hemisphere Right -->
      <path d="M 68,25 C 88,25 103,40 103,60 C 103,75 93,88 78,92 C 73,93 68,95 66,100 L 66,25 Z" fill="url(#ai-brain-grad)" opacity="0.95"/>
      
      <!-- Glowing Synapse Dots -->
      <circle cx="65" cy="30" r="4" fill="#fef08a"/>
      <circle cx="30" cy="50" r="4" fill="#38bdf8"/>
      <circle cx="100" cy="50" r="4" fill="#f43f5e"/>
      <circle cx="65" cy="80" r="4" fill="#4ade80"/>
      <circle cx="15" cy="35" r="3" fill="#ffffff"/>
      <circle cx="115" cy="35" r="3" fill="#ffffff"/>
    </g>

    <!-- Data Analyst Character with Headset (homescreen hero character style) -->
    <g transform="translate(130, 115)">
      <path d="M 10,48 C 10,40 16,34 26,34 C 36,34 42,40 42,48 L 45,75 L 5,75 Z" fill="#ec4899"/>
      <circle cx="26" cy="22" r="12" fill="#fed7aa"/>
      <path d="M 15,20 C 15,12 21,9 28,9 C 35,9 39,12 39,16 C 36,16 32,18 28,17 C 23,17 18,21 15,20 Z" fill="#312e81"/>
      <path d="M 13,22 A 13,13 0 0 1 39,22" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="11" y="20" width="4" height="6" rx="2" fill="#38bdf8"/>
      <rect x="37" y="20" width="4" height="6" rx="2" fill="#38bdf8"/>
      <path d="M 13,24 Q 15,30 20,31" fill="none" stroke="#38bdf8" stroke-width="1.8"/>
      <circle cx="21" cy="31" r="1.8" fill="#fef08a"/>
    </g>

    <!-- Holographic 3D Data Analytics Bar Chart & Trend Curve -->
    <g transform="translate(285, 120)">
      <rect x="0" y="0" width="95" height="65" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1.5"/>
      <rect x="0" y="0" width="95" height="12" rx="6" fill="#1e1b4b"/>
      <circle cx="8" cy="6" r="2" fill="#ef4444"/>
      <circle cx="15" cy="6" r="2" fill="#eab308"/>
      <circle cx="22" cy="6" r="2" fill="#22c55e"/>
      <!-- Bars -->
      <rect x="10" y="44" width="8" height="16" rx="2" fill="#38bdf8"/>
      <rect x="24" y="36" width="8" height="24" rx="2" fill="#818cf8"/>
      <rect x="38" y="28" width="8" height="32" rx="2" fill="#c084fc"/>
      <rect x="52" y="20" width="8" height="40" rx="2" fill="#f43f5e"/>
      <rect x="66" y="16" width="8" height="44" rx="2" fill="#4ade80"/>
      <!-- Upward regression trend curve -->
      <path d="M 14,46 Q 42,32 70,16" stroke="#fef08a" stroke-width="2.5" fill="none"/>
      <!-- Stand -->
      <rect x="42" y="65" width="10" height="16" fill="#475569"/>
      <rect x="34" y="81" width="26" height="4" rx="2" fill="#64748b"/>
    </g>

    <!-- Floating Accuracy Badge -->
    <g transform="translate(265, 48)">
      <rect x="0" y="0" width="90" height="22" rx="11" fill="#1e1b4b" stroke="#4ade80" stroke-width="1.5"/>
      <circle cx="12" cy="11" r="4" fill="#4ade80"/>
      <text x="50" y="15" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="9" text-anchor="middle">99.4% ACCURACY</text>
    </g>

    <!-- Floating Sparkles -->
    <path d="M 160,35 Q 160,42 166,42 Q 160,42 160,49 Q 160,42 154,42 Q 160,42 160,35 Z" fill="#fef08a"/>
    <path d="M 370,40 Q 370,47 377,47 Q 370,47 370,54 Q 370,47 363,47 Q 370,47 370,40 Z" fill="#38bdf8"/>
  </svg>
</div>`;

const svgDevops = `<div class="course-card-clipart clipart-theme-devops">
  <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" aria-label="Cloud Computing &amp; DevOps Clipart">
    <defs>
      <linearGradient id="dev-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#0369a1" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0d9488" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="dev-rocket" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="50%" stop-color="#e0f2fe"/>
        <stop offset="100%" stop-color="#38bdf8"/>
      </linearGradient>
      <linearGradient id="dev-flame" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#ef4444"/>
        <stop offset="100%" stop-color="#dc2626"/>
      </linearGradient>
      <linearGradient id="dev-desk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0369a1"/>
        <stop offset="50%" stop-color="#0284c7"/>
        <stop offset="100%" stop-color="#0ea5e9"/>
      </linearGradient>
      <filter id="dev-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" flood-opacity="0.25"/>
      </filter>
    </defs>

    <!-- Organic freehand background blob -->
    <path d="M 60,130 C 45,55 125,25 210,30 C 310,35 425,15 455,75 C 485,145 445,225 355,235 C 245,245 135,240 85,205 C 55,180 65,155 60,130 Z" fill="url(#dev-blob)" filter="url(#dev-shadow)"/>

    <!-- Decorative gears & cloud doodles -->
    <g fill="#7dd3fc" opacity="0.6">
      <circle cx="85" cy="50" r="14"/>
      <circle cx="85" cy="50" r="6" fill="#082f49"/>
    </g>
    <g fill="#67e8f9" opacity="0.5">
      <circle cx="425" cy="60" r="12"/>
      <circle cx="425" cy="60" r="5" fill="#082f49"/>
    </g>

    <!-- Floating Speech Bubbles with 3 dots -->
    <g transform="translate(65, 75)">
      <rect x="0" y="0" width="48" height="26" rx="13" fill="#0284c7"/>
      <polygon points="12,26 8,33 20,26" fill="#0284c7"/>
      <circle cx="16" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="24" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="32" cy="13" r="2.5" fill="#ffffff"/>
    </g>

    <!-- Curved Workstation Desk -->
    <path d="M 110,215 Q 250,195 390,215 L 420,255 L 80,255 Z" fill="url(#dev-desk)"/>
    <rect x="165" y="222" width="170" height="22" rx="11" fill="rgba(255,255,255,0.2)"/>
    <text x="250" y="237" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="11" text-anchor="middle" letter-spacing="1">🚀 AUTOMATED CI/CD &amp; K8S</text>

    <!-- Left: Cloud Server Rack Tower -->
    <g transform="translate(130, 95)">
      <rect x="0" y="0" width="55" height="90" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Server unit 1 -->
      <rect x="5" y="6" width="45" height="15" rx="3" fill="#1e293b"/>
      <circle cx="12" cy="13" r="2" fill="#22c55e"/>
      <circle cx="18" cy="13" r="2" fill="#38bdf8"/>
      <line x1="26" y1="13" x2="44" y2="13" stroke="#64748b" stroke-width="2"/>
      <!-- Server unit 2 -->
      <rect x="5" y="26" width="45" height="15" rx="3" fill="#1e293b"/>
      <circle cx="12" cy="33" r="2" fill="#22c55e"/>
      <circle cx="18" cy="33" r="2" fill="#22c55e"/>
      <line x1="26" y1="33" x2="44" y2="33" stroke="#64748b" stroke-width="2"/>
      <!-- Server unit 3 -->
      <rect x="5" y="46" width="45" height="15" rx="3" fill="#1e293b"/>
      <circle cx="12" cy="53" r="2" fill="#eab308"/>
      <circle cx="18" cy="53" r="2" fill="#38bdf8"/>
      <line x1="26" y1="53" x2="44" y2="53" stroke="#64748b" stroke-width="2"/>
      <!-- Server unit 4 -->
      <rect x="5" y="66" width="45" height="15" rx="3" fill="#1e293b"/>
      <circle cx="12" cy="73" r="2" fill="#22c55e"/>
      <circle cx="18" cy="73" r="2" fill="#22c55e"/>
      <line x1="26" y1="73" x2="44" y2="73" stroke="#64748b" stroke-width="2"/>
    </g>

    <!-- Center: Sleek Space Rocket Launching Through Clouds -->
    <g transform="translate(235, 40)">
      <!-- Rocket Trail / Speed Dashes -->
      <line x1="-30" y1="120" x2="10" y2="75" stroke="#fef08a" stroke-width="2.5" stroke-dasharray="4,4" opacity="0.8"/>
      <line x1="-15" y1="135" x2="25" y2="90" stroke="#fef08a" stroke-width="2" stroke-dasharray="4,4" opacity="0.6"/>
      
      <!-- Rocket Assembly Angled ~35 deg -->
      <g transform="rotate(35, 30, 45)">
        <!-- Exhaust Flame -->
        <polygon points="20,70 30,105 40,70 30,78" fill="url(#dev-flame)"/>
        <polygon points="24,70 30,90 36,70" fill="#fef08a"/>
        <!-- Rocket Body -->
        <path d="M 30,5 C 22,25 18,50 18,70 L 42,70 C 42,50 38,25 30,5 Z" fill="url(#dev-rocket)"/>
        <!-- Rocket Nosecone -->
        <path d="M 30,5 C 24,18 20,28 20,32 L 40,32 C 40,28 36,18 30,5 Z" fill="#ef4444"/>
        <!-- Porthole Window -->
        <circle cx="30" cy="45" r="6" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Fins -->
        <polygon points="18,55 6,70 18,68" fill="#ef4444"/>
        <polygon points="42,55 54,70 42,68" fill="#ef4444"/>
      </g>
      
      <!-- Fluffy Vector Cloud at Base of Launch -->
      <path d="M -25,120 C -35,120 -40,110 -30,102 C -30,95 -20,90 -10,95 C -5,88 8,88 15,94 C 25,90 35,98 32,108 C 40,112 38,120 28,120 Z" fill="#ffffff" opacity="0.9"/>
    </g>

    <!-- Right: DevOps Infinity Loop & Terminal Window -->
    <g transform="translate(320, 105)">
      <rect x="0" y="0" width="95" height="65" rx="6" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
      <rect x="0" y="0" width="95" height="12" rx="6" fill="#1e293b"/>
      <circle cx="8" cy="6" r="2" fill="#ef4444"/>
      <circle cx="15" cy="6" r="2" fill="#eab308"/>
      <circle cx="22" cy="6" r="2" fill="#22c55e"/>
      <!-- Terminal Commands -->
      <text x="6" y="24" fill="#38bdf8" font-family="monospace" font-size="8">&gt; git push prod</text>
      <text x="6" y="36" fill="#4ade80" font-family="monospace" font-size="8">✓ BUILD PASSED</text>
      <text x="6" y="48" fill="#facc15" font-family="monospace" font-size="8">✓ K8S ROLLING</text>
      <text x="6" y="60" fill="#22c55e" font-family="monospace" font-weight="bold" font-size="8">100% DEPLOYED</text>
      <!-- Stand -->
      <rect x="42" y="65" width="12" height="18" fill="#475569"/>
      <rect x="34" y="81" width="28" height="4" rx="2" fill="#64748b"/>
    </g>

    <!-- Floating Paper Airplane -->
    <path d="M 330,65 Q 380,45 425,30" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" fill="none" opacity="0.8"/>
    <g transform="translate(425, 20) rotate(-15)">
      <polygon points="0,15 28,0 20,24 10,18" fill="#38bdf8"/>
      <polygon points="10,18 28,0 16,16" fill="#bae6fd"/>
    </g>

    <!-- Floating Sparkles -->
    <path d="M 210,30 Q 210,38 217,38 Q 210,38 210,46 Q 210,38 203,38 Q 210,38 210,30 Z" fill="#fef08a"/>
    <path d="M 405,80 Q 405,87 412,87 Q 405,87 405,94 Q 405,87 398,87 Q 405,87 405,80 Z" fill="#ffffff" opacity="0.9"/>
  </svg>
</div>`;

const svgCyber = `<div class="course-card-clipart clipart-theme-cybersecurity">
  <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" aria-label="Cyber Security Clipart">
    <defs>
      <linearGradient id="sec-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#0d9488" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="sec-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="50%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#064e3b"/>
      </linearGradient>
      <linearGradient id="sec-desk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#064e3b"/>
        <stop offset="50%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
      <filter id="sec-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" flood-opacity="0.25"/>
      </filter>
    </defs>

    <!-- Organic freehand background blob -->
    <path d="M 65,125 C 45,55 125,25 215,35 C 315,45 425,20 455,80 C 485,150 445,230 355,240 C 245,250 135,235 85,205 C 55,180 65,155 65,125 Z" fill="url(#sec-blob)" filter="url(#sec-shadow)"/>

    <!-- Concentric Radar Sonar Rings -->
    <g transform="translate(250, 110)" opacity="0.3" stroke="#a7f3d0" fill="none">
      <circle cx="0" cy="0" r="40" stroke-width="1.5" stroke-dasharray="4,4"/>
      <circle cx="0" cy="0" r="75" stroke-width="1.5" stroke-dasharray="6,6"/>
      <circle cx="0" cy="0" r="110" stroke-width="1.5" stroke-dasharray="8,8"/>
      <line x1="0" y1="-110" x2="0" y2="110" stroke-width="1"/>
      <line x1="-110" y1="0" x2="110" y2="0" stroke-width="1"/>
    </g>

    <!-- Floating Speech Bubbles with 3 dots -->
    <g transform="translate(68, 75)">
      <rect x="0" y="0" width="46" height="26" rx="13" fill="#10b981"/>
      <polygon points="12,26 8,33 20,26" fill="#10b981"/>
      <circle cx="15" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="23" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="31" cy="13" r="2.5" fill="#ffffff"/>
    </g>
    <g transform="translate(385, 115)">
      <rect x="0" y="0" width="50" height="28" rx="14" fill="#0d9488"/>
      <polygon points="36,28 42,36 30,28" fill="#0d9488"/>
      <circle cx="17" cy="14" r="2.5" fill="#ffffff"/>
      <circle cx="25" cy="14" r="2.5" fill="#ffffff"/>
      <circle cx="33" cy="14" r="2.5" fill="#ffffff"/>
    </g>

    <!-- Floating Paper Airplane with dashed trajectory -->
    <path d="M 330,75 Q 380,50 425,35" stroke="#a7f3d0" stroke-width="2.5" stroke-dasharray="4,4" fill="none" opacity="0.85"/>
    <g transform="translate(425, 25) rotate(-15)">
      <polygon points="0,15 28,0 20,24 10,18" fill="#34d399"/>
      <polygon points="10,18 28,0 16,16" fill="#a7f3d0"/>
    </g>

    <!-- Curved Workstation Desk -->
    <path d="M 110,215 Q 250,195 390,215 L 420,255 L 80,255 Z" fill="url(#sec-desk)"/>
    <rect x="155" y="222" width="190" height="22" rx="11" fill="rgba(255,255,255,0.2)"/>
    <text x="250" y="237" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="11" text-anchor="middle" letter-spacing="1">🛡️ ZERO-TRUST CYBER DEFENSE</text>

    <!-- Left: Security Analyst in Hoodie with Headset -->
    <g transform="translate(135, 105)">
      <path d="M 12,50 C 12,42 18,36 28,36 C 38,36 44,42 44,50 L 48,80 L 8,80 Z" fill="#064e3b"/>
      <circle cx="28" cy="24" r="13" fill="#fcd34d"/>
      <path d="M 15,22 C 15,12 21,9 29,9 C 37,9 41,12 41,17 C 37,17 33,19 29,18 C 24,18 18,22 15,22 Z" fill="#022c22"/>
      <path d="M 14,24 A 14,14 0 0 1 42,24" fill="none" stroke="#34d399" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="12" y="21" width="4" height="7" rx="2" fill="#34d399"/>
      <rect x="40" y="21" width="4" height="7" rx="2" fill="#34d399"/>
      <path d="M 14,26 Q 16,33 22,34" fill="none" stroke="#34d399" stroke-width="1.8"/>
      <circle cx="23" cy="34" r="1.8" fill="#a7f3d0"/>
    </g>

    <!-- Center: Glowing 3D Cyber Security Shield -->
    <g transform="translate(210, 48)">
      <!-- Outer Glow -->
      <path d="M 40,5 L 75,18 C 75,55 58,85 40,98 C 22,85 5,55 5,18 Z" fill="url(#sec-shield-grad)" filter="url(#sec-shadow)"/>
      <path d="M 40,11 L 69,22 C 69,53 54,79 40,89 C 26,79 11,53 11,22 Z" fill="none" stroke="#6ee7b7" stroke-width="2.5"/>
      <!-- Padlock Symbol inside Shield -->
      <rect x="30" y="44" width="20" height="18" rx="4" fill="#fef08a"/>
      <path d="M 34,44 L 34,36 C 34,32 37,29 40,29 C 43,29 46,32 46,36 L 46,44" fill="none" stroke="#fef08a" stroke-width="3" stroke-linecap="round"/>
      <circle cx="40" cy="52" r="2.5" fill="#064e3b"/>
      <path d="M 40,54 L 40,58" stroke="#064e3b" stroke-width="2"/>
    </g>

    <!-- Right: Firewall Threat Monitor Screen -->
    <g transform="translate(285, 110)">
      <rect x="0" y="0" width="95" height="65" rx="6" fill="#022c22" stroke="#10b981" stroke-width="1.5"/>
      <rect x="0" y="0" width="95" height="12" rx="6" fill="#064e3b"/>
      <circle cx="8" cy="6" r="2" fill="#ef4444"/>
      <circle cx="15" cy="6" r="2" fill="#eab308"/>
      <circle cx="22" cy="6" r="2" fill="#22c55e"/>
      <!-- Security Status Lines -->
      <text x="6" y="24" fill="#a7f3d0" font-family="monospace" font-size="7.5">&gt; FIREWALL: ACTIVE</text>
      <text x="6" y="36" fill="#34d399" font-family="monospace" font-size="7.5">&gt; ENCRYPT: 256-BIT</text>
      <text x="6" y="48" fill="#facc15" font-family="monospace" font-size="7.5">&gt; OWASP AUDIT: PASS</text>
      <text x="6" y="60" fill="#4ade80" font-family="monospace" font-weight="bold" font-size="7.5">THREATS: 0 BLOCKED</text>
      <!-- Stand -->
      <rect x="42" y="65" width="12" height="18" fill="#475569"/>
      <rect x="34" y="81" width="28" height="4" rx="2" fill="#64748b"/>
    </g>

    <!-- Floating Sparkles -->
    <path d="M 120,40 Q 120,48 128,48 Q 120,48 120,56 Q 120,48 112,48 Q 120,48 120,40 Z" fill="#fef08a"/>
    <path d="M 370,55 Q 370,62 377,62 Q 370,62 370,69 Q 370,62 363,62 Q 370,62 370,55 Z" fill="#a7f3d0"/>
  </svg>
</div>`;

const svgMarketing = `<div class="course-card-clipart clipart-theme-marketing">
  <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" aria-label="Digital Marketing &amp; Performance Clipart">
    <defs>
      <linearGradient id="mkt-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f97316" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#ea580c" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#e11d48" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="mkt-horn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="50%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
      <linearGradient id="mkt-desk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#c2410c"/>
        <stop offset="50%" stop-color="#ea580c"/>
        <stop offset="100%" stop-color="#f97316"/>
      </linearGradient>
      <filter id="mkt-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" flood-opacity="0.25"/>
      </filter>
    </defs>

    <!-- Organic freehand background blob -->
    <path d="M 60,125 C 45,55 125,25 215,35 C 315,45 425,20 455,80 C 485,150 445,230 355,240 C 245,250 135,235 85,205 C 55,180 65,155 60,125 Z" fill="url(#mkt-blob)" filter="url(#mkt-shadow)"/>

    <!-- Decorative gears & star doodles -->
    <g fill="#fed7aa" opacity="0.6">
      <circle cx="85" cy="50" r="14"/>
      <circle cx="85" cy="50" r="6" fill="#431407"/>
    </g>
    <g fill="#fde047" opacity="0.5">
      <circle cx="420" cy="65" r="12"/>
      <circle cx="420" cy="65" r="5" fill="#431407"/>
    </g>

    <!-- Floating Speech Bubbles with 3 dots -->
    <g transform="translate(68, 75)">
      <rect x="0" y="0" width="46" height="26" rx="13" fill="#e11d48"/>
      <polygon points="12,26 8,33 20,26" fill="#e11d48"/>
      <circle cx="15" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="23" cy="13" r="2.5" fill="#ffffff"/>
      <circle cx="31" cy="13" r="2.5" fill="#ffffff"/>
    </g>
    <g transform="translate(385, 115)">
      <rect x="0" y="0" width="52" height="28" rx="14" fill="#f59e0b"/>
      <polygon points="36,28 42,36 30,28" fill="#f59e0b"/>
      <circle cx="18" cy="14" r="2.5" fill="#ffffff"/>
      <circle cx="26" cy="14" r="2.5" fill="#ffffff"/>
      <circle cx="34" cy="14" r="2.5" fill="#ffffff"/>
    </g>

    <!-- Curved Workstation Desk -->
    <path d="M 110,215 Q 250,195 390,215 L 420,255 L 80,255 Z" fill="url(#mkt-desk)"/>
    <rect x="155" y="222" width="190" height="22" rx="11" fill="rgba(255,255,255,0.2)"/>
    <text x="250" y="237" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="11" text-anchor="middle" letter-spacing="1">📈 ROI &amp; PERFORMANCE GROWTH</text>

    <!-- Center: Large 3D Vector Megaphone Broadcasting Soundwaves -->
    <g transform="translate(190, 75)">
      <!-- Soundwave concentric arcs -->
      <path d="M 85,15 A 35,35 0 0 1 85,55" fill="none" stroke="#fef08a" stroke-width="3" stroke-linecap="round"/>
      <path d="M 98,5 A 50,50 0 0 1 98,65" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
      <path d="M 112,-5 A 65,65 0 0 1 112,75" fill="none" stroke="#bae6fd" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

      <!-- Megaphone Cone -->
      <polygon points="25,25 78,5 78,65 25,45" fill="url(#mkt-horn)"/>
      <!-- Megaphone Rim -->
      <ellipse cx="78" cy="35" rx="5" ry="30" fill="#fef08a"/>
      <!-- Megaphone Base Body -->
      <rect x="5" y="27" width="22" height="16" rx="4" fill="#ef4444"/>
      <!-- Handle -->
      <path d="M 12,43 L 8,62 L 18,60 L 19,43 Z" fill="#b91c1c"/>
    </g>

    <!-- Left: Marketer Character with Headset Celebrating -->
    <g transform="translate(130, 105)">
      <path d="M 12,50 C 12,42 18,36 28,36 C 38,36 44,42 44,50 L 48,80 L 8,80 Z" fill="#38bdf8"/>
      <circle cx="28" cy="24" r="13" fill="#fcd34d"/>
      <path d="M 15,22 C 15,12 21,9 29,9 C 37,9 41,12 41,17 C 37,17 33,19 29,18 C 24,18 18,22 15,22 Z" fill="#1e293b"/>
      <path d="M 14,24 A 14,14 0 0 1 42,24" fill="none" stroke="#f59e0b" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="12" y="21" width="4" height="7" rx="2" fill="#f59e0b"/>
      <rect x="40" y="21" width="4" height="7" rx="2" fill="#f59e0b"/>
      <path d="M 14,26 Q 16,33 22,34" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
      <circle cx="23" cy="34" r="1.8" fill="#fef08a"/>
    </g>

    <!-- Right: High-Growth Parabolic Curve & Metrics Monitor -->
    <g transform="translate(290, 110)">
      <rect x="0" y="0" width="95" height="65" rx="6" fill="#18181b" stroke="#f59e0b" stroke-width="1.5"/>
      <rect x="0" y="0" width="95" height="12" rx="6" fill="#27272a"/>
      <circle cx="8" cy="6" r="2" fill="#ef4444"/>
      <circle cx="15" cy="6" r="2" fill="#eab308"/>
      <circle cx="22" cy="6" r="2" fill="#22c55e"/>
      <!-- Grid -->
      <line x1="10" y1="56" x2="85" y2="56" stroke="#3f3f46" stroke-width="1"/>
      <line x1="10" y1="20" x2="10" y2="56" stroke="#3f3f46" stroke-width="1"/>
      <!-- Parabolic steep growth curve -->
      <path d="M 12,52 Q 45,50 82,22" fill="none" stroke="#22c55e" stroke-width="3"/>
      <polygon points="85,19 75,21 81,27" fill="#22c55e"/>
      <!-- Metric pills -->
      <rect x="36" y="24" width="46" height="14" rx="7" fill="#22c55e"/>
      <text x="59" y="34" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="8" text-anchor="middle">+350% ROI</text>
      <!-- Stand -->
      <rect x="42" y="65" width="12" height="18" fill="#475569"/>
      <rect x="34" y="81" width="28" height="4" rx="2" fill="#64748b"/>
    </g>

    <!-- Floating Target Bullseye with Arrow -->
    <g transform="translate(325, 40)">
      <circle cx="18" cy="18" r="18" fill="#ffffff"/>
      <circle cx="18" cy="18" r="13" fill="#ef4444"/>
      <circle cx="18" cy="18" r="8" fill="#ffffff"/>
      <circle cx="18" cy="18" r="4" fill="#ef4444"/>
      <!-- Arrow -->
      <line x1="0" y1="0" x2="18" y2="18" stroke="#0284c7" stroke-width="2.5"/>
      <polygon points="0,0 6,1 1,6" fill="#0284c7"/>
    </g>

    <!-- Floating Paper Airplane -->
    <path d="M 120,60 Q 165,35 210,25" stroke="#fde047" stroke-width="2.5" stroke-dasharray="4,4" fill="none" opacity="0.85"/>
    <g transform="translate(210, 16) rotate(-20)">
      <polygon points="0,15 28,0 20,24 10,18" fill="#38bdf8"/>
      <polygon points="10,18 28,0 16,16" fill="#bae6fd"/>
    </g>

    <!-- Floating Sparkles -->
    <path d="M 180,35 Q 180,43 187,43 Q 180,43 180,51 Q 180,43 173,43 Q 180,43 180,35 Z" fill="#fef08a"/>
    <path d="M 410,50 Q 410,57 417,57 Q 410,57 410,64 Q 410,57 403,57 Q 410,57 410,50 Z" fill="#ffffff"/>
  </svg>
</div>`;

// 3 COLLAGE CLIPARTS FOR WELCOME SECTION
const svgCollage1 = `<div class="collage-clipart collage-theme-1">
  <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" aria-label="PMO Architecture &amp; Governance Clipart">
    <defs>
      <linearGradient id="col1-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#1d4ed8" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="col1-desk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1e40af"/>
        <stop offset="50%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#60a5fa"/>
      </linearGradient>
    </defs>
    <!-- Background organic blob -->
    <path d="M 40,110 C 30,50 90,20 170,25 C 255,30 330,15 345,70 C 360,130 340,215 260,225 C 180,235 90,225 55,190 C 35,165 45,140 40,110 Z" fill="url(#col1-blob)"/>
    
    <!-- Blueprint Grid Lines -->
    <g stroke="rgba(255,255,255,0.12)" stroke-width="1">
      <line x1="40" y1="60" x2="320" y2="60"/>
      <line x1="40" y1="100" x2="320" y2="100"/>
      <line x1="40" y1="140" x2="320" y2="140"/>
      <line x1="80" y1="30" x2="80" y2="220"/>
      <line x1="140" y1="30" x2="140" y2="220"/>
      <line x1="200" y1="30" x2="200" y2="220"/>
      <line x1="260" y1="30" x2="260" y2="220"/>
    </g>

    <!-- Tower Crane & Enterprise Skyscrapers Silhouette -->
    <g transform="translate(60, 60)" fill="#1e293b" opacity="0.6">
      <rect x="20" y="40" width="30" height="90" rx="2"/>
      <rect x="58" y="15" width="45" height="115" rx="2"/>
      <rect x="110" y="55" width="35" height="75" rx="2"/>
    </g>
    <!-- Yellow Tower Crane -->
    <g transform="translate(180, 40)" stroke="#facc15" stroke-width="2" fill="none">
      <line x1="20" y1="0" x2="20" y2="110"/>
      <line x1="-30" y1="20" x2="60" y2="20"/>
      <line x1="20" y1="0" x2="-30" y2="20"/>
      <line x1="20" y1="0" x2="60" y2="20"/>
      <line x1="50" y1="20" x2="50" y2="60"/>
      <circle cx="50" cy="62" r="3" fill="#facc15"/>
    </g>

    <!-- Curved Desk with Blueprint & Laptop -->
    <path d="M 60,205 Q 180,185 300,205 L 320,245 L 40,245 Z" fill="url(#col1-desk)"/>
    <rect x="110" y="215" width="140" height="20" rx="10" fill="rgba(255,255,255,0.2)"/>
    <text x="180" y="229" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="10" text-anchor="middle" letter-spacing="1">🏛️ PMO ARCHITECTURE</text>

    <!-- Floating Paper Airplane & Speech Bubble -->
    <g transform="translate(260, 35) rotate(-10)">
      <polygon points="0,12 24,0 18,20 9,15" fill="#38bdf8"/>
    </g>
    <g transform="translate(45, 60)">
      <rect x="0" y="0" width="38" height="22" rx="11" fill="#0284c7"/>
      <circle cx="12" cy="11" r="2" fill="#ffffff"/>
      <circle cx="19" cy="11" r="2" fill="#ffffff"/>
      <circle cx="26" cy="11" r="2" fill="#ffffff"/>
    </g>
    <!-- Floating Sparkle -->
    <path d="M 150,30 Q 150,36 156,36 Q 150,36 150,42 Q 150,36 144,36 Q 150,36 150,30 Z" fill="#fef08a"/>
  </svg>
</div>`;

const svgCollage2 = `<div class="collage-clipart collage-theme-2">
  <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" aria-label="Applied Mentorship &amp; Incubation Clipart">
    <defs>
      <linearGradient id="col2-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#a855f7" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#4c1d95" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="col2-desk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7c3aed"/>
        <stop offset="50%" stop-color="#a855f7"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <!-- Background organic blob -->
    <path d="M 40,110 C 30,50 90,20 170,25 C 255,30 330,15 345,70 C 360,130 340,215 260,225 C 180,235 90,225 55,190 C 35,165 45,140 40,110 Z" fill="url(#col2-blob)"/>

    <!-- Floating Lightbulb of Innovation -->
    <g transform="translate(160, 30)">
      <circle cx="20" cy="18" r="16" fill="#fef08a"/>
      <path d="M 12,28 L 28,28 L 25,36 L 15,36 Z" fill="#eab308"/>
      <path d="M 14,38 L 26,38" stroke="#ca8a04" stroke-width="2"/>
      <!-- Radiating rays -->
      <line x1="20" y1="-2" x2="20" y2="4" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="5" y1="6" x2="9" y2="10" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="35" y1="6" x2="31" y2="10" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round"/>
    </g>

    <!-- Curved Mentorship Desk -->
    <path d="M 60,205 Q 180,185 300,205 L 320,245 L 40,245 Z" fill="url(#col2-desk)"/>
    <rect x="105" y="215" width="150" height="20" rx="10" fill="rgba(255,255,255,0.2)"/>
    <text x="180" y="229" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="10" text-anchor="middle" letter-spacing="1">🤝 APPLIED MENTORSHIP</text>

    <!-- Mentor on Left -->
    <g transform="translate(100, 105)">
      <path d="M 10,42 C 10,34 16,30 24,30 C 32,30 38,34 38,42 L 40,65 L 6,65 Z" fill="#3b82f6"/>
      <circle cx="24" cy="20" r="11" fill="#fed7aa"/>
      <path d="M 14,18 C 14,10 19,7 26,7 C 32,7 35,9 35,13 C 32,13 29,15 25,14 C 20,14 16,18 14,18 Z" fill="#1e1b4b"/>
    </g>

    <!-- Mentee on Right with Headset -->
    <g transform="translate(210, 105)">
      <path d="M 10,42 C 10,34 16,30 24,30 C 32,30 38,34 38,42 L 40,65 L 6,65 Z" fill="#10b981"/>
      <circle cx="24" cy="20" r="11" fill="#fcd34d"/>
      <path d="M 14,18 C 14,10 19,7 26,7 C 32,7 35,9 35,13 C 32,13 29,15 25,14 C 20,14 16,18 14,18 Z" fill="#064e3b"/>
      <path d="M 13,20 A 11,11 0 0 1 35,20" fill="none" stroke="#f43f5e" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="11" y="18" width="3" height="5" rx="1.5" fill="#f43f5e"/>
      <rect x="34" y="18" width="3" height="5" rx="1.5" fill="#f43f5e"/>
    </g>

    <!-- Workstation Laptop in Middle -->
    <g transform="translate(150, 140)">
      <rect x="10" y="10" width="40" height="26" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
      <polygon points="4,36 56,36 52,40 8,40" fill="#64748b"/>
    </g>

    <!-- Floating Speech Bubbles & Stars -->
    <g transform="translate(50, 65)">
      <rect x="0" y="0" width="36" height="20" rx="10" fill="#f43f5e"/>
      <circle cx="11" cy="10" r="2" fill="#ffffff"/>
      <circle cx="18" cy="10" r="2" fill="#ffffff"/>
      <circle cx="25" cy="10" r="2" fill="#ffffff"/>
    </g>
    <path d="M 285,45 Q 285,52 292,52 Q 285,52 285,59 Q 285,52 278,52 Q 285,52 285,45 Z" fill="#ffffff"/>
  </svg>
</div>`;

const svgCollage3 = `<div class="collage-clipart collage-theme-3">
  <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" aria-label="Globally Accredited Certifications Clipart">
    <defs>
      <linearGradient id="col3-blob" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#059669" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="col3-diploma" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f8fafc"/>
      </linearGradient>
      <linearGradient id="col3-desk" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#047857"/>
        <stop offset="50%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
    </defs>
    <!-- Background organic blob -->
    <path d="M 40,110 C 30,50 90,20 170,25 C 255,30 330,15 345,70 C 360,130 340,215 260,225 C 180,235 90,225 55,190 C 35,165 45,140 40,110 Z" fill="url(#col3-blob)"/>

    <!-- Center: Prestigious Gold-Bordered Diploma Certificate -->
    <g transform="translate(100, 45)">
      <!-- Certificate Sheet -->
      <rect x="0" y="0" width="160" height="115" rx="8" fill="url(#col3-diploma)" stroke="#facc15" stroke-width="3" filter="drop-shadow(0 10px 18px rgba(0,0,0,0.25))"/>
      <!-- Inner border -->
      <rect x="6" y="6" width="148" height="103" rx="5" fill="none" stroke="#e2e8f0" stroke-width="1.2"/>
      
      <!-- Certificate Header -->
      <circle cx="80" cy="24" r="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <path d="M 80,18 L 82,22 L 86,22 L 83,25 L 84,29 L 80,27 L 76,29 L 77,25 L 74,22 L 78,22 Z" fill="#ca8a04"/>
      
      <!-- Content lines -->
      <rect x="40" y="40" width="80" height="4" rx="2" fill="#0f172a"/>
      <rect x="52" y="49" width="56" height="3" rx="1.5" fill="#64748b"/>
      <rect x="30" y="58" width="100" height="2" rx="1" fill="#94a3b8"/>
      <rect x="35" y="65" width="90" height="2" rx="1" fill="#94a3b8"/>
      
      <!-- Red Wax Seal & Ribbon -->
      <g transform="translate(80, 88)">
        <polygon points="-8,6 0,22 -4,22" fill="#dc2626"/>
        <polygon points="8,6 0,22 4,22" fill="#ef4444"/>
        <circle cx="0" cy="4" r="10" fill="#dc2626"/>
        <circle cx="0" cy="4" r="7" fill="#b91c1c"/>
        <polygon points="0,-1 2,3 6,3 3,6 4,10 0,7 -4,10 -3,6 -6,3 -2,3" fill="#fef08a"/>
      </g>
    </g>

    <!-- Curved Desk with Verified Stamp -->
    <path d="M 60,205 Q 180,185 300,205 L 320,245 L 40,245 Z" fill="url(#col3-desk)"/>
    <rect x="105" y="215" width="150" height="20" rx="10" fill="rgba(255,255,255,0.2)"/>
    <text x="180" y="229" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="700" font-size="10" text-anchor="middle" letter-spacing="1">🎓 GLOBAL CERTIFICATION</text>

    <!-- Floating Verified Checkmark Badge -->
    <g transform="translate(48, 60)">
      <circle cx="16" cy="16" r="16" fill="#10b981"/>
      <circle cx="16" cy="16" r="13" fill="#059669"/>
      <path d="M 10,16 L 14,20 L 22,12" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <!-- Floating Paper Airplane -->
    <g transform="translate(265, 40) rotate(-15)">
      <polygon points="0,14 26,0 19,22 10,16" fill="#38bdf8"/>
    </g>

    <!-- Floating Stars -->
    <path d="M 270,95 Q 270,102 277,102 Q 270,102 270,109 Q 270,102 263,102 Q 270,102 270,95 Z" fill="#fef08a"/>
  </svg>
</div>`;

// Read index.html and perform replacements
const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace card 1: Fullstack
const fullstackRegex = /<div class="course-card-image">[\s\S]*?<span class="course-card-tag">Full Stack Track<\/span>[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/Virtual%20Assistant%20Services\.png" alt="Full Stack Web Development">[\s\S]*?<\/div>/;
if (fullstackRegex.test(html)) {
  html = html.replace(fullstackRegex, `<div class="course-card-image">
              <span class="course-card-tag">Full Stack Track</span>
              ${svgFullstack}
            </div>`);
  console.log('Replaced Card 1: Fullstack');
} else {
  console.log('FAILED to find Card 1');
}

// Replace card 2: AI & Data Science
const aiRegex = /<div class="course-card-image">[\s\S]*?<span class="course-card-tag">Data & AI Track<\/span>[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/Call%20Center%20Monitoring\.png" alt="Data Science and AI">[\s\S]*?<\/div>/;
if (aiRegex.test(html)) {
  html = html.replace(aiRegex, `<div class="course-card-image">
              <span class="course-card-tag">Data & AI Track</span>
              ${svgAI}
            </div>`);
  console.log('Replaced Card 2: AI & Data Science');
} else {
  console.log('FAILED to find Card 2');
}

// Replace card 3: DevOps
const devopsRegex = /<div class="course-card-image">[\s\S]*?<span class="course-card-tag">DevOps Track<\/span>[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/Lead%20Generation%20Services\.png" alt="Cloud and DevOps">[\s\S]*?<\/div>/;
if (devopsRegex.test(html)) {
  html = html.replace(devopsRegex, `<div class="course-card-image">
              <span class="course-card-tag">DevOps Track</span>
              ${svgDevops}
            </div>`);
  console.log('Replaced Card 3: Cloud & DevOps');
} else {
  console.log('FAILED to find Card 3');
}

// Replace card 4: Cyber Security
const cyberRegex = /<div class="course-card-image">[\s\S]*?<span class="course-card-tag">Security Track<\/span>[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/Customer%20Support%20Services\.png" alt="Cyber Security">[\s\S]*?<\/div>/;
if (cyberRegex.test(html)) {
  html = html.replace(cyberRegex, `<div class="course-card-image">
              <span class="course-card-tag">Security Track</span>
              ${svgCyber}
            </div>`);
  console.log('Replaced Card 4: Cyber Security');
} else {
  console.log('FAILED to find Card 4');
}

// Replace card 5: Digital Marketing
const mktRegex = /<div class="course-card-image">[\s\S]*?<span class="course-card-tag">Growth Track<\/span>[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/Medical%20Record%20Retrieval\.png" alt="Digital Marketing">[\s\S]*?<\/div>/;
if (mktRegex.test(html)) {
  html = html.replace(mktRegex, `<div class="course-card-image">
              <span class="course-card-tag">Growth Track</span>
              ${svgMarketing}
            </div>`);
  console.log('Replaced Card 5: Digital Marketing');
} else {
  console.log('FAILED to find Card 5');
}

// Replace collage cards in #welcome
const collageRegex = /<div class="cards-collage">[\s\S]*?<div class="collage-card collage-card-1">[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/flip1\.png" alt="PMIUSA Campus & Tech Facility">[\s\S]*?<\/div>[\s\S]*?<div class="collage-card collage-card-2">[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/flip2\.jpg" alt="Mentorship & Team Collaboration">[\s\S]*?<\/div>[\s\S]*?<div class="collage-card collage-card-3">[\s\S]*?<img src="https:\/\/www\.pcits\.net\/assets\/images\/flip3\.jpg" alt="Modern Tech Workspaces">[\s\S]*?<\/div>[\s\S]*?<\/div>/;

if (collageRegex.test(html)) {
  html = html.replace(collageRegex, `<div class="cards-collage">
            <div class="collage-card collage-card-1">
              ${svgCollage1}
            </div>
            <div class="collage-card collage-card-2">
              ${svgCollage2}
            </div>
            <div class="collage-card collage-card-3">
              ${svgCollage3}
            </div>
          </div>`);
  console.log('Replaced Welcome Collage Cards');
} else {
  console.log('FAILED to find Collage Cards');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully written to index.html!');
