/**
 * ============================================================================
 * PMIUSA Master Character Clipart Engine (101 Unique Handcrafted Courses)
 * 5 Batches of 20 with Zero Duplicates & 100% ID Coverage
 * ============================================================================
 */
(function() {
  'use strict';

// Common helper functions for generating SVGs
function getHeroAccents(dropId, planeColor, bubbleColor) {
  return `
      <!-- Floating Paper Airplane with dashed trajectory (Hero Hallmark) -->
      <path d="M 28,36 Q 62,18 96,15" stroke="${planeColor || '#38bdf8'}" stroke-width="1.8" stroke-dasharray="3,3" fill="none" opacity="0.85"/>
      <g transform="translate(96, 9) rotate(-15)">
        <polygon points="0,10 18,0 13,15 7,12" fill="${planeColor || '#38bdf8'}"/>
        <polygon points="7,12 18,0 11,11" fill="#ffffff" opacity="0.9"/>
      </g>
      <!-- Sparkle Stars -->
      <path d="M 18,22 L 20,15 L 22,22 L 29,24 L 22,26 L 20,33 L 18,26 L 11,24 Z" fill="#ffd166" opacity="0.95"/>
      <path d="M 184,22 L 185.5,16 L 187,22 L 193,23.5 L 187,25 L 185.5,31 L 184,25 L 178,23.5 Z" fill="#ffffff" opacity="0.9"/>
      <circle cx="188" cy="85" r="3" fill="#ffd166" opacity="0.8"/>
      <circle cx="18" cy="88" r="2.5" fill="${planeColor || '#38bdf8'}" opacity="0.8"/>
      <!-- Floating Speech Bubble with 3 dots (Hero Hallmark) -->
      <g transform="translate(14, 52)">
        <rect x="0" y="0" width="32" height="18" rx="9" fill="${bubbleColor || '#ec4899'}" filter="url(#${dropId})"/>
        <polygon points="8,18 5,24 14,18" fill="${bubbleColor || '#ec4899'}"/>
        <circle cx="9" cy="9" r="1.8" fill="#ffffff"/>
        <circle cx="16" cy="9" r="1.8" fill="#ffffff"/>
        <circle cx="23" cy="9" r="1.8" fill="#ffffff"/>
      </g>`;
}

function makeDeskHero(id, blobColors, char, screenSvg, badge) {
  const c1 = blobColors[0], c2 = blobColors[1], c3 = blobColors[2];
  const skin = char.skin || '#fcd34d', hair = char.hair || '#1e1b4b', shirt = char.shirt || '#f59e0b';
  const headset = char.headset !== undefined ? char.headset : true;
  const glasses = char.glasses || false;
  const bWidth = badge.width || 62;

  return `
    <svg class="freehand-svg" viewBox="0 0 210 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blob-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="${c2}" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${c3}" stop-opacity="0.88"/>
        </linearGradient>
        <linearGradient id="desk-${id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="50%" stop-color="#2563eb"/>
          <stop offset="100%" stop-color="#4f46e5"/>
        </linearGradient>
        <filter id="drop-${id}" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="${c2}" flood-opacity="0.25"/>
        </filter>
      </defs>
      <path d="M 38,68 C 26,26 76,16 118,20 C 166,24 186,44 182,88 C 176,124 136,128 96,122 C 54,116 48,96 38,68 Z" fill="url(#blob-${id})" filter="url(#drop-${id})"/>
      ${getHeroAccents('drop-' + id, '#38bdf8', '#ec4899')}
      <g transform="translate(64, 26)">
        <path d="M 28,52 C 28,42 34,36 45,36 C 56,36 62,42 62,52 L 66,74 L 24,74 Z" fill="${shirt}"/>
        <circle cx="45" cy="24" r="11" fill="${skin}"/>
        <path d="M 33,22 C 33,12 40,9 49,9 C 57,9 59,13 59,18 C 55,18 51,20 48,19 C 42,19 38,23 33,22 Z" fill="${hair}"/>
        ${glasses ? `<rect x="39" y="21" width="5" height="4" rx="1" fill="none" stroke="#0f172a" stroke-width="1.2"/><rect x="46" y="21" width="5" height="4" rx="1" fill="none" stroke="#0f172a" stroke-width="1.2"/><line x1="44" y1="23" x2="46" y2="23" stroke="#0f172a" stroke-width="1"/>` : ''}
        ${headset ? `<path d="M 34,24 A 11,11 0 0 1 56,24" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/><rect x="32" y="21" width="3.5" height="7" rx="1.5" fill="#0284c7"/><rect x="54" y="21" width="3.5" height="7" rx="1.5" fill="#0284c7"/><path d="M 34,26 Q 36,33 41,34" fill="none" stroke="#0284c7" stroke-width="1.8"/><circle cx="42" cy="34" r="1.8" fill="#38bdf8"/>` : ''}
        <path d="M 30,52 L 20,68" stroke="${skin}" stroke-width="4.2" stroke-linecap="round"/>
        <path d="M 60,52 L 70,68" stroke="${skin}" stroke-width="4.2" stroke-linecap="round"/>
        <path d="M -14,68 Q 45,60 104,68 L 112,82 L -22,82 Z" fill="url(#desk-${id})"/>
        <rect x="22" y="70" width="46" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
        <rect x="0" y="44" width="40" height="26" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
        <rect x="0" y="44" width="40" height="5" rx="2" fill="#1e293b"/>
        <circle cx="3.5" cy="46.5" r="1" fill="#ef4444"/>
        <circle cx="6.5" cy="46.5" r="1" fill="#eab308"/>
        <circle cx="9.5" cy="46.5" r="1" fill="#22c55e"/>
        <rect x="17" y="70" width="6" height="4" fill="#475569"/>
        <g transform="translate(2, 51)">
          ${screenSvg}
        </g>
      </g>
      <g transform="translate(126, 78)">
        <rect x="0" y="0" width="${bWidth}" height="20" rx="6" fill="#0f172a" stroke="${badge.border || '#38bdf8'}" stroke-width="1.5"/>
        <text x="${bWidth/2}" y="14" fill="${badge.color || '#38bdf8'}" font-family="'Inter', sans-serif" font-size="7.5" font-weight="800" text-anchor="middle">${badge.text}</text>
      </g>
    </svg>`;
}

function makePointerHero(id, blobColors, char, arrows, badge) {
  const c1 = blobColors[0], c2 = blobColors[1], c3 = blobColors[2];
  const skin = char.skin || '#fed7aa', hair = char.hair || '#0f172a', shirt = char.shirt || '#ec4899';
  const bWidth = badge.width || 62;

  const arrowsSvg = arrows.map((a, i) => {
    const y = 6 + i * 22;
    const bg = a.bg || '#ffd166';
    const textColor = a.textCol || (bg === '#ffd166' || bg === '#38bdf8' ? '#0f172a' : '#ffffff');
    const xOffset = i % 2 === 0 ? -4 : 6;
    return `
      <g transform="translate(0, ${y})">
        <path d="M ${xOffset},0 H ${xOffset+42} L ${xOffset+50},8 L ${xOffset+42},16 H ${xOffset} Z" fill="${bg}" stroke="#0f172a" stroke-width="1.8"/>
        <text x="${xOffset+23}" y="11" fill="${textColor}" font-family="'Inter', sans-serif" font-size="7" font-weight="800" text-anchor="middle">${a.text}</text>
      </g>
    `;
  }).join('');

  return `
    <svg class="freehand-svg" viewBox="0 0 210 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blob-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="${c2}" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${c3}" stop-opacity="0.88"/>
        </linearGradient>
        <filter id="drop-${id}" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="${c2}" flood-opacity="0.25"/>
        </filter>
      </defs>
      <path d="M 40,65 C 28,28 78,16 118,20 C 166,24 186,44 182,88 C 176,124 136,128 96,122 C 54,116 48,96 40,65 Z" fill="url(#blob-${id})" filter="url(#drop-${id})"/>
      ${getHeroAccents('drop-' + id, '#ffd166', '#38bdf8')}
      <g transform="translate(132, 22)">
        <line x1="22" y1="0" x2="22" y2="86" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
        ${arrowsSvg}
        <circle cx="-12" cy="18" r="12" fill="#f43f5e" opacity="0.7"/>
        <circle cx="-12" cy="18" r="4" fill="#0f172a"/>
      </g>
      <g transform="translate(62, 34)">
        <path d="M 12,40 C 12,30 18,24 30,24 C 42,24 48,30 48,40 L 52,78 L 8,78 Z" fill="${shirt}"/>
        <circle cx="28" cy="14" r="11" fill="${skin}"/>
        <path d="M 16,12 C 16,3 23,0 32,0 C 39,0 41,4 41,9 C 37,9 33,11 30,10 C 24,10 20,14 16,12 Z" fill="${hair}"/>
        <rect x="2" y="44" width="16" height="22" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
        <circle cx="10" cy="55" r="3" fill="#38bdf8"/>
        <circle cx="4" cy="54" r="3.5" fill="${skin}"/>
        <path d="M 44,32 Q 62,26 84,20" stroke="${skin}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      </g>
      <g transform="translate(126, 80)">
        <rect x="0" y="0" width="${bWidth}" height="20" rx="6" fill="#0f172a" stroke="${badge.border || '#ffd166'}" stroke-width="1.5"/>
        <text x="${bWidth/2}" y="14" fill="${badge.color || '#ffd166'}" font-family="'Inter', sans-serif" font-size="7.5" font-weight="800" text-anchor="middle">${badge.text}</text>
      </g>
    </svg>`;
}

function makeSiteHero(id, blobColors, char, equipmentSvg, badge) {
  const c1 = blobColors[0], c2 = blobColors[1], c3 = blobColors[2];
  const skin = char.skin || '#fed7aa', hat = char.hat || '#ffd166', vest = char.vest || '#ea580c';
  const bWidth = badge.width || 62;

  return `
    <svg class="freehand-svg" viewBox="0 0 210 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blob-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="${c2}" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${c3}" stop-opacity="0.88"/>
        </linearGradient>
        <filter id="drop-${id}" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="${c2}" flood-opacity="0.25"/>
        </filter>
      </defs>
      <path d="M 40,65 C 28,28 78,16 118,20 C 166,24 186,44 182,88 C 176,124 136,128 96,122 C 54,116 48,96 40,65 Z" fill="url(#blob-${id})" filter="url(#drop-${id})"/>
      ${getHeroAccents('drop-' + id, '#ffffff', '#ffd166')}
      <g transform="translate(122, 28)">
        ${equipmentSvg}
      </g>
      <g transform="translate(60, 30)">
        <path d="M 12,42 C 12,32 18,26 30,26 C 42,26 48,32 48,42 L 52,78 L 8,78 Z" fill="#0f172a"/>
        <polygon points="14,32 24,78 36,78 46,32" fill="${vest}"/>
        <line x1="16" y1="52" x2="44" y2="52" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="18" y1="64" x2="42" y2="64" stroke="#ffffff" stroke-width="2.5"/>
        <circle cx="30" cy="18" r="10.5" fill="${skin}"/>
        <path d="M 18,17 C 18,5 42,5 42,17 Z" fill="${hat}" stroke="#0f172a" stroke-width="2"/>
        <line x1="14" y1="17" x2="46" y2="17" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="27" y="7" width="6" height="8" rx="1.5" fill="#ea580c"/>
        <path d="M 44,36 Q 58,44 68,38" stroke="${skin}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      </g>
      <g transform="translate(126, 80)">
        <rect x="0" y="0" width="${bWidth}" height="20" rx="6" fill="#0f172a" stroke="${badge.border || '#ffd166'}" stroke-width="1.5"/>
        <text x="${bWidth/2}" y="14" fill="${badge.color || '#ffd166'}" font-family="'Inter', sans-serif" font-size="7.5" font-weight="800" text-anchor="middle">${badge.text}</text>
      </g>
    </svg>`;
}

function makeInspectorHero(id, blobColors, char, propSvg, badge) {
  const c1 = blobColors[0], c2 = blobColors[1], c3 = blobColors[2];
  const skin = char.skin || '#fbcfe8', hair = char.hair || '#312e81', shirt = char.shirt || '#0284c7';
  const bWidth = badge.width || 62;

  return `
    <svg class="freehand-svg" viewBox="0 0 210 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blob-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="${c2}" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${c3}" stop-opacity="0.88"/>
        </linearGradient>
        <filter id="drop-${id}" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="${c2}" flood-opacity="0.25"/>
        </filter>
      </defs>
      <path d="M 40,65 C 28,28 78,16 118,20 C 166,24 186,44 182,88 C 176,124 136,128 96,122 C 54,116 48,96 40,65 Z" fill="url(#blob-${id})" filter="url(#drop-${id})"/>
      ${getHeroAccents('drop-' + id, '#38bdf8', '#10b981')}
      <g transform="translate(122, 28)">
        ${propSvg}
      </g>
      <g transform="translate(62, 32)">
        <path d="M 12,42 C 12,32 18,26 30,26 C 42,26 48,32 48,42 L 52,78 L 8,78 Z" fill="${shirt}"/>
        <circle cx="30" cy="16" r="11" fill="${skin}"/>
        <path d="M 18,14 C 18,4 25,1 34,1 C 41,1 43,5 43,10 C 39,10 35,12 32,11 C 26,11 22,15 18,14 Z" fill="${hair}"/>
        <path d="M 44,34 Q 58,38 68,34" stroke="${skin}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      </g>
      <g transform="translate(126, 80)">
        <rect x="0" y="0" width="${bWidth}" height="20" rx="6" fill="#0f172a" stroke="${badge.border || '#10b981'}" stroke-width="1.5"/>
        <text x="${bWidth/2}" y="14" fill="${badge.color || '#10b981'}" font-family="'Inter', sans-serif" font-size="7.5" font-weight="800" text-anchor="middle">${badge.text}</text>
      </g>
    </svg>`;
}

function makeDroneHero(id, blobColors, char, droneSvg, badge) {
  const c1 = blobColors[0], c2 = blobColors[1], c3 = blobColors[2];
  const skin = char.skin || '#fed7aa', hair = char.hair || '#0f172a', shirt = char.shirt || '#0284c7';
  const bWidth = badge.width || 62;

  return `
    <svg class="freehand-svg" viewBox="0 0 210 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blob-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="${c2}" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${c3}" stop-opacity="0.88"/>
        </linearGradient>
        <filter id="drop-${id}" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="${c2}" flood-opacity="0.25"/>
        </filter>
      </defs>
      <path d="M 40,65 C 28,28 78,16 118,20 C 166,24 186,44 182,88 C 176,124 136,128 96,122 C 54,116 48,96 40,65 Z" fill="url(#blob-${id})" filter="url(#drop-${id})"/>
      ${getHeroAccents('drop-' + id, '#38bdf8', '#ffd166')}
      <g transform="translate(118, 16)">
        <rect x="18" y="18" width="16" height="12" rx="4" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
        <circle cx="26" cy="24" r="3" fill="#22d3ee"/>
        <line x1="6" y1="12" x2="46" y2="28" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="6" y1="28" x2="46" y2="12" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
        <ellipse cx="6" cy="12" rx="7" ry="2" fill="#ffd166" stroke="#0f172a" stroke-width="1"/>
        <ellipse cx="46" cy="12" rx="7" ry="2" fill="#ffd166" stroke="#0f172a" stroke-width="1"/>
        <ellipse cx="6" cy="28" rx="7" ry="2" fill="#ffd166" stroke="#0f172a" stroke-width="1"/>
        <ellipse cx="46" cy="28" rx="7" ry="2" fill="#ffd166" stroke="#0f172a" stroke-width="1"/>
        <polygon points="26,26 12,48 40,48" fill="rgba(34,211,238,0.25)" stroke="#22d3ee" stroke-width="0.8" stroke-dasharray="2,2"/>
      </g>
      <g transform="translate(62, 36)">
        <path d="M 12,38 C 12,28 18,22 30,22 C 42,22 48,28 48,38 L 52,74 L 8,74 Z" fill="${shirt}"/>
        <circle cx="30" cy="12" r="10.5" fill="${skin}"/>
        <path d="M 18,10 C 18,1 25,0 34,0 C 41,0 43,4 43,8 C 39,8 35,10 32,9 C 26,9 22,13 18,10 Z" fill="${hair}"/>
        <rect x="20" y="40" width="22" height="15" rx="3" fill="#0f172a" stroke="#ffffff" stroke-width="1"/>
        <line x1="24" y1="40" x2="21" y2="34" stroke="#ffd166" stroke-width="1.8"/>
        <line x1="38" y1="40" x2="41" y2="34" stroke="#ffd166" stroke-width="1.8"/>
        <circle cx="26" cy="47" r="2" fill="#38bdf8"/>
        <circle cx="36" cy="47" r="2" fill="#38bdf8"/>
      </g>
      <g transform="translate(126, 80)">
        <rect x="0" y="0" width="${bWidth}" height="20" rx="6" fill="#0f172a" stroke="${badge.border || '#38bdf8'}" stroke-width="1.5"/>
        <text x="${bWidth/2}" y="14" fill="${badge.color || '#38bdf8'}" font-family="'Inter', sans-serif" font-size="7.5" font-weight="800" text-anchor="middle">${badge.text}</text>
      </g>
    </svg>`;
}

// Exports replaced for browser
/*
  makeDeskHero,
  makePointerHero,
  makeSiteHero,
  makeInspectorHero,
  makeDroneHero
*/


  const MASTER_CLIS = {};
  const DEFINITIONS = MASTER_CLIS;

  // Batch 1 (Courses 1 - 20)




// ============================================================================
// BATCH 1: COURSES 1 TO 20
// ============================================================================
DEFINITIONS['generative-ai-prompt-engineering-for-enterprise-workflows'] = (id) => {
  const scr = `<rect x="2" y="2" width="32" height="4" rx="2" fill="#ec4899"/><rect x="2" y="8" width="24" height="3" rx="1.5" fill="#38bdf8"/><rect x="2" y="13" width="28" height="3" rx="1.5" fill="#a855f7"/><circle cx="28" cy="10" r="5" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>`;
  return makeDeskHero(id, ['#ec4899', '#8b5cf6', '#3b82f6'], { shirt: '#e11d48', skin: '#fcd34d', hair: '#1e1b4b', headset: true }, scr, { text: 'PROMPT AI', color: '#ec4899', border: '#ec4899' });
};

DEFINITIONS['ai-powered-automation-for-small-business-operations'] = (id) => {
  return makePointerHero(id, ['#06b6d4', '#0284c7', '#4f46e5'], { shirt: '#0284c7', skin: '#fed7aa', hair: '#0f172a' },
    [{ text: 'Zapier', bg: '#ffd166' }, { text: 'Make.com', bg: '#38bdf8' }, { text: 'Auto n8n', bg: '#a855f7' }],
    { text: '10x AUTO', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['ai-driven-copywriting-marketing-content-generation'] = (id) => {
  const prop = `<rect x="4" y="6" width="46" height="56" rx="5" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><line x1="10" y1="18" x2="40" y2="18" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round"/><line x1="10" y1="26" x2="36" y2="26" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="34" x2="42" y2="34" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/><circle cx="50" cy="50" r="12" fill="#ffd166" stroke="#0f172a" stroke-width="1.5"/><text x="50" y="56" fill="#0f172a" font-family="serif" font-size="16" font-weight="900" text-anchor="middle">&ldquo;</text>`;
  return makeInspectorHero(id, ['#f43f5e', '#ec4899', '#f59e0b'], { shirt: '#ec4899', skin: '#fbcfe8', hair: '#312e81' }, prop, { text: 'AI COPY', color: '#f43f5e', border: '#f43f5e' });
};

DEFINITIONS['using-ai-tools-for-market-research-data-synthesis'] = (id) => {
  const scr = `<rect x="2" y="10" width="6" height="8" rx="1.5" fill="#38bdf8"/><rect x="10" y="6" width="6" height="12" rx="1.5" fill="#6366f1"/><rect x="18" y="2" width="6" height="16" rx="1.5" fill="#10b981"/><path d="M 2,12 L 10,7 L 18,3 L 28,1" stroke="#f43f5e" stroke-width="1.8" fill="none"/>`;
  return makeDeskHero(id, ['#4f46e5', '#06b6d4', '#10b981'], { shirt: '#4f46e5', skin: '#fed7aa', hair: '#1e293b', glasses: true }, scr, { text: 'ANALYTICS', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['ai-enhanced-video-editing-creative-media-production'] = (id) => {
  const scr = `<rect x="2" y="2" width="32" height="10" rx="2" fill="#0284c7"/><polygon points="15,4 21,7 15,10" fill="#ffffff"/><line x1="2" y1="15" x2="34" y2="15" stroke="#eab308" stroke-width="2"/><line x1="18" y1="13" x2="18" y2="18" stroke="#ef4444" stroke-width="2"/>`;
  return makeDeskHero(id, ['#8b5cf6', '#d946ef', '#ef4444'], { shirt: '#7c3aed', skin: '#fcd34d', hair: '#0f172a', headset: true }, scr, { text: '4K EDIT', color: '#d946ef', border: '#d946ef' });
};

DEFINITIONS['no-code-ai-agent-custom-chatbot-architecture'] = (id) => {
  return makePointerHero(id, ['#38bdf8', '#6366f1', '#a855f7'], { shirt: '#2563eb', skin: '#fed7aa', hair: '#1e1b4b' },
    [{ text: 'User Intent', bg: '#ffffff' }, { text: 'RAG Pipeline', bg: '#ffd166' }, { text: 'Auto Action', bg: '#38bdf8' }],
    { text: 'AI AGENT', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['ai-productivity-hacks-for-microsoft-office-google-workspace'] = (id) => {
  const prop = `<rect x="4" y="8" width="46" height="52" rx="5" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><rect x="8" y="16" width="10" height="8" rx="2" fill="#10b981"/><rect x="22" y="16" width="22" height="8" rx="2" fill="#e2e8f0"/><rect x="8" y="28" width="10" height="8" rx="2" fill="#0284c7"/><rect x="22" y="28" width="22" height="8" rx="2" fill="#e2e8f0"/><polygon points="46,12 40,24 52,24" fill="#ffd166"/><polygon points="43,24 46,30 49,24" fill="#ef4444"/>`;
  return makeInspectorHero(id, ['#10b981', '#06b6d4', '#3b82f6'], { shirt: '#059669', skin: '#fcd34d', hair: '#1e293b' }, prop, { text: 'OFFICE AI', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['using-midjourney-dall-e-for-commercial-graphic-design'] = (id) => {
  const prop = `<rect x="4" y="6" width="48" height="56" rx="6" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><rect x="8" y="10" width="40" height="34" rx="4" fill="#ec4899"/><circle cx="28" cy="22" r="7" fill="#ffd166"/><ellipse cx="28" cy="52" rx="14" ry="6" fill="#ffd166" stroke="#0f172a" stroke-width="1.2"/><circle cx="20" cy="52" r="2" fill="#ec4899"/><circle cx="28" cy="52" r="2" fill="#38bdf8"/><circle cx="36" cy="52" r="2" fill="#22c55e"/>`;
  return makeInspectorHero(id, ['#ec4899', '#f43f5e', '#ffd166'], { shirt: '#e11d48', skin: '#fbcfe8', hair: '#1e1b4b' }, prop, { text: 'MIDJOURNEY', color: '#ec4899', border: '#ec4899' });
};

DEFINITIONS['ai-for-human-resource-operations-talent-sourcing'] = (id) => {
  return makePointerHero(id, ['#7c3aed', '#ec4899', '#f59e0b'], { shirt: '#7c3aed', skin: '#fed7aa', hair: '#0f172a' },
    [{ text: 'Resume AI', bg: '#ffd166' }, { text: 'Top Match', bg: '#38bdf8' }, { text: 'Hire 10x', bg: '#22c55e' }],
    { text: 'HR TALENT', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['financial-analysis-budgeting-using-ai-assistance'] = (id) => {
  const scr = `<line x1="6" y1="4" x2="6" y2="16" stroke="#22c55e" stroke-width="1"/><rect x="4" y="7" width="4" height="6" fill="#22c55e"/><line x1="14" y1="3" x2="14" y2="17" stroke="#ef4444" stroke-width="1"/><rect x="12" y="8" width="4" height="7" fill="#ef4444"/><line x1="22" y1="2" x2="22" y2="15" stroke="#22c55e" stroke-width="1"/><rect x="20" y="4" width="4" height="8" fill="#22c55e"/><circle cx="30" cy="5" r="4" fill="#ffd166"/><text x="30" y="8" fill="#0f172a" font-size="6" font-weight="900" text-anchor="middle">$</text>`;
  return makeDeskHero(id, ['#059669', '#10b981', '#f59e0b'], { shirt: '#047857', skin: '#fcd34d', hair: '#1e293b', glasses: true }, scr, { text: 'FINANCE AI', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['ai-powered-sales-scraping-cold-email-automation'] = (id) => {
  const prop = `<rect x="4" y="16" width="46" height="32" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><polygon points="4,16 27,32 50,16" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5"/><path d="M 27,24 L 46,6" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/><polygon points="46,6 40,8 44,12" fill="#ef4444"/><circle cx="12" cy="38" r="4" fill="#22c55e"/><text x="24" y="41" fill="#0f172a" font-family="'Inter', sans-serif" font-size="7" font-weight="800">LEADS +98%</text>`;
  return makeInspectorHero(id, ['#ea580c', '#f59e0b', '#0284c7'], { shirt: '#ea580c', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'COLD EMAIL', color: '#ea580c', border: '#ea580c' });
};

DEFINITIONS['using-ai-for-supply-chain-optimization-inventory-planning'] = (id) => {
  const prop = `<rect x="6" y="24" width="22" height="20" rx="3" fill="#ffd166" stroke="#0f172a" stroke-width="1.8"/><line x1="17" y1="24" x2="17" y2="44" stroke="#d97706" stroke-width="1.5"/><rect x="24" y="14" width="20" height="18" rx="3" fill="#f59e0b" stroke="#0f172a" stroke-width="1.8"/><rect x="36" y="40" width="16" height="10" rx="2" fill="#0f172a"/><line x1="36" y1="45" x2="16" y2="34" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>`;
  return makeInspectorHero(id, ['#0284c7', '#0d9488', '#10b981'], { shirt: '#0284c7', skin: '#fcd34d', hair: '#1e1b4b' }, prop, { text: 'LOGISTICS', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['ai-coding-assistants-github-copilot-for-rapid-development'] = (id) => {
  const scr = `<rect x="2" y="2" width="18" height="3" rx="1.5" fill="#a855f7"/><rect x="2" y="7" width="26" height="3" rx="1.5" fill="#38bdf8"/><rect x="6" y="12" width="22" height="3" rx="1.5" fill="#22c55e"/><rect x="2" y="17" width="30" height="2" fill="#ffd166"/>`;
  return makeDeskHero(id, ['#6366f1', '#4f46e5', '#06b6d4'], { shirt: '#4338ca', skin: '#fed7aa', hair: '#0f172a', glasses: true }, scr, { text: 'COPILOT DEV', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['customer-support-automation-using-ai-helpdesk-tools'] = (id) => {
  const scr = `<circle cx="16" cy="10" r="8" fill="#10b981"/><text x="16" y="13" fill="#ffffff" font-size="7" font-weight="900" text-anchor="middle">24/7</text><rect x="4" y="20" width="24" height="2.5" rx="1" fill="#38bdf8"/>`;
  return makeDeskHero(id, ['#ec4899', '#f43f5e', '#3b82f6'], { shirt: '#e11d48', skin: '#fcd34d', hair: '#1e1b4b', headset: true }, scr, { text: 'SUPPORT 24/7', color: '#ec4899', border: '#ec4899' });
};

DEFINITIONS['ai-prompt-engineering-for-legal-compliance-documentation'] = (id) => {
  const prop = `<path d="M 6,12 C 6,6 14,6 14,12 L 14,50 C 14,56 6,56 6,50 Z" fill="#ffd166" stroke="#0f172a" stroke-width="1.5"/><rect x="12" y="8" width="38" height="46" rx="3" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/><circle cx="40" cy="42" r="8" fill="#ef4444"/><polygon points="40,36 38,42 43,39" fill="#ffffff"/>`;
  return makeInspectorHero(id, ['#0284c7', '#4f46e5', '#a855f7'], { shirt: '#1e3a8a', skin: '#fcd34d', hair: '#0f172a' }, prop, { text: 'LEGAL AI', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['construction-project-scheduling-basic-estimation'] = (id) => {
  const scr = `<line x1="4" y1="4" x2="32" y2="4" stroke="#475569" stroke-width="1"/><rect x="4" y="7" width="14" height="3" rx="1.5" fill="#38bdf8"/><rect x="14" y="12" width="16" height="3" rx="1.5" fill="#f59e0b"/><rect x="24" y="17" width="10" height="3" rx="1.5" fill="#22c55e"/>`;
  return makeDeskHero(id, ['#2563eb', '#0284c7', '#f59e0b'], { shirt: '#1d4ed8', skin: '#fed7aa', hair: '#1e293b' }, scr, { text: 'SCHEDULING', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['construction-cost-estimation-quantity-surveying-basics'] = (id) => {
  const prop = `<rect x="4" y="6" width="46" height="56" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><line x1="8" y1="14" x2="44" y2="14" stroke="#0284c7" stroke-width="2"/><circle cx="16" cy="38" r="8" fill="#ffd166" stroke="#0f172a" stroke-width="1.5"/><text x="16" y="42" fill="#0f172a" font-size="9" font-weight="900" text-anchor="middle">&Sigma;</text>`;
  return makeSiteHero(id, ['#f59e0b', '#d97706', '#0284c7'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, prop, { text: 'QS COST', color: '#f59e0b', border: '#f59e0b' });
};

DEFINITIONS['contract-administration-procurement-in-construction'] = (id) => {
  return makePointerHero(id, ['#4f46e5', '#7c3aed', '#ec4899'], { shirt: '#4338ca', skin: '#fcd34d', hair: '#1e1b4b' },
    [{ text: 'Tender RFP', bg: '#ffd166' }, { text: 'FIDIC Clauses', bg: '#38bdf8' }, { text: 'Signed Award', bg: '#22c55e' }],
    { text: 'CONTRACTS', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['construction-bill-checking-contractor-invoice-verification'] = (id) => {
  const prop = `<rect x="4" y="6" width="48" height="56" rx="5" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><line x1="10" y1="18" x2="42" y2="18" stroke="#0f172a" stroke-width="2"/><circle cx="28" cy="46" r="11" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><path d="M 23,46 L 27,50 L 33,42" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>`;
  return makeInspectorHero(id, ['#0284c7', '#059669', '#10b981'], { shirt: '#0f766e', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'VERIFIED', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['rate-analysis-construction-material-price-forecasting'] = (id) => {
  const scr = `<path d="M 2,16 Q 10,8 18,12 T 32,4" stroke="#f59e0b" stroke-width="2" fill="none"/><circle cx="32" cy="4" r="2.5" fill="#ef4444"/><text x="16" y="20" fill="#ffffff" font-size="6" font-weight="800">CEMENT/STEEL</text>`;
  return makeDeskHero(id, ['#ea580c', '#d97706', '#3b82f6'], { shirt: '#d97706', skin: '#fcd34d', hair: '#1e293b' }, scr, { text: 'RATE INDEX', color: '#f59e0b', border: '#f59e0b' });
};






  // Batch 2 (Courses 21 - 40)




DEFINITIONS['construction-risk-assessment-hazard-mitigation-strategies'] = (id) => {
  const eq = `<rect x="4" y="8" width="46" height="46" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><rect x="8" y="12" width="10" height="10" fill="#22c55e"/><rect x="22" y="12" width="10" height="10" fill="#facc15"/><rect x="36" y="12" width="10" height="10" fill="#ef4444"/><rect x="8" y="26" width="10" height="10" fill="#facc15"/><rect x="22" y="26" width="10" height="10" fill="#f97316"/><rect x="36" y="26" width="10" height="10" fill="#ef4444"/>`;
  return makeSiteHero(id, ['#ef4444', '#f59e0b', '#0d9488'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ef4444' }, eq, { text: 'RISK FMEA', color: '#ef4444', border: '#ef4444' });
};

DEFINITIONS['tendering-bidding-commercial-bid-evaluation-frameworks'] = (id) => {
  const prop = `<rect x="4" y="14" width="48" height="34" rx="4" fill="#ffd166" stroke="#0f172a" stroke-width="2"/><polygon points="4,14 28,30 52,14" fill="#f59e0b" stroke="#0f172a" stroke-width="1.5"/><text x="28" y="40" fill="#0f172a" font-family="'Inter', sans-serif" font-size="7.5" font-weight="900" text-anchor="middle">L1 BID WIN</text>`;
  return makeInspectorHero(id, ['#f59e0b', '#d97706', '#2563eb'], { shirt: '#1e3a8a', skin: '#fcd34d', hair: '#0f172a' }, prop, { text: 'TENDER', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['real-estate-project-cost-control-budget-management'] = (id) => {
  const scr = `<polygon points="2,18 10,10 18,14 30,4 30,18" fill="rgba(34,197,94,0.3)"/><polyline points="2,18 10,10 18,14 30,4" stroke="#22c55e" stroke-width="2" fill="none"/><text x="18" y="22" fill="#ffffff" font-size="6" font-weight="800">ROI +32%</text>`;
  return makeDeskHero(id, ['#0284c7', '#059669', '#10b981'], { shirt: '#0f766e', skin: '#fed7aa', hair: '#1e293b' }, scr, { text: 'COST CTRL', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['construction-claim-management-dispute-resolution-prep'] = (id) => {
  const prop = `<rect x="18" y="12" width="24" height="12" rx="3" fill="#92400e" stroke="#0f172a" stroke-width="1.5"/><rect x="27" y="24" width="6" height="26" rx="2" fill="#b45309" stroke="#0f172a" stroke-width="1.5"/><rect x="6" y="48" width="48" height="8" rx="3" fill="#78350f"/>`;
  return makeInspectorHero(id, ['#b45309', '#ea580c', '#3b82f6'], { shirt: '#78350f', skin: '#fcd34d', hair: '#0f172a' }, prop, { text: 'CLAIMS', color: '#f59e0b', border: '#f59e0b' });
};

DEFINITIONS['agile-frameworks-scrum-for-construction-management'] = (id) => {
  return makePointerHero(id, ['#06b6d4', '#3b82f6', '#8b5cf6'], { shirt: '#0284c7', skin: '#fed7aa', hair: '#1e1b4b' },
    [{ text: 'Sprint Planning', bg: '#ffd166' }, { text: 'Daily Standup', bg: '#38bdf8' }, { text: 'Retrospective', bg: '#22c55e' }],
    { text: 'AGILE SCRUM', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['subcontractor-management-site-logistics-mastery'] = (id) => {
  const eq = `<rect x="6" y="18" width="44" height="24" rx="4" fill="#0284c7" stroke="#0f172a" stroke-width="2"/><circle cx="16" cy="42" r="5" fill="#0f172a"/><circle cx="38" cy="42" r="5" fill="#0f172a"/><rect x="26" y="22" width="18" height="10" rx="2" fill="#bae6fd"/><line x1="6" y1="30" x2="26" y2="30" stroke="#ffd166" stroke-width="2"/>`;
  return makeSiteHero(id, ['#0284c7', '#3b82f6', '#f59e0b'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'SITE LOGISTICS', color: '#38bdf8', border: '#38bdf8', width: 74 });
};

DEFINITIONS['construction-micro-scheduling-daily-work-progress-tracking'] = (id) => {
  const scr = `<rect x="2" y="4" width="8" height="4" rx="1" fill="#38bdf8"/><rect x="12" y="4" width="16" height="4" rx="1" fill="#22c55e"/><rect x="2" y="10" width="22" height="4" rx="1" fill="#f59e0b"/><rect x="2" y="16" width="12" height="4" rx="1" fill="#ec4899"/>`;
  return makeDeskHero(id, ['#8b5cf6', '#6366f1', '#06b6d4'], { shirt: '#6d28d9', skin: '#fed7aa', hair: '#0f172a', glasses: true }, scr, { text: 'MICRO PLAN', color: '#8b5cf6', border: '#8b5cf6' });
};

DEFINITIONS['cash-flow-management-capital-allocation-for-builders'] = (id) => {
  const prop = `<circle cx="28" cy="28" r="18" fill="#ffd166" stroke="#0f172a" stroke-width="2"/><text x="28" y="34" fill="#0f172a" font-size="18" font-weight="900" text-anchor="middle">&dollar;</text><path d="M 12,48 L 44,48 L 36,42 M 44,48 L 36,54" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>`;
  return makeInspectorHero(id, ['#f59e0b', '#10b981', '#0284c7'], { shirt: '#047857', skin: '#fcd34d', hair: '#1e293b' }, prop, { text: 'CASH FLOW', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['construction-site-operations-supervisor-foundations'] = (id) => {
  const eq = `<rect x="10" y="8" width="36" height="48" rx="3" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><line x1="16" y1="16" x2="38" y2="16" stroke="#0f172a" stroke-width="2"/><line x1="16" y1="24" x2="38" y2="24" stroke="#0284c7" stroke-width="2"/><line x1="16" y1="32" x2="30" y2="32" stroke="#ea580c" stroke-width="2"/><circle cx="28" cy="44" r="5" fill="#22c55e"/>`;
  return makeSiteHero(id, ['#ea580c', '#f59e0b', '#10b981'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'SITE SUPV', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['heavy-equipment-fleet-management-operations'] = (id) => {
  const eq = `<rect x="6" y="24" width="28" height="18" rx="3" fill="#f59e0b" stroke="#0f172a" stroke-width="2"/><path d="M 28,24 L 46,12 L 48,22" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round" fill="none"/><polygon points="46,22 52,30 42,30" fill="#0f172a"/><circle cx="12" cy="42" r="5" fill="#0f172a"/><circle cx="26" cy="42" r="5" fill="#0f172a"/>`;
  return makeSiteHero(id, ['#d97706', '#f59e0b', '#dc2626'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'FLEET OPS', color: '#f59e0b', border: '#f59e0b' });
};

DEFINITIONS['construction-quality-control-site-inspection-frameworks'] = (id) => {
  const prop = `<circle cx="28" cy="28" r="16" fill="#ffffff" stroke="#0284c7" stroke-width="3"/><path d="M 20,28 L 26,34 L 38,20" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/><rect x="8" y="48" width="40" height="8" rx="2" fill="#0284c7"/><text x="28" y="54" fill="#ffffff" font-size="5" font-weight="900" text-anchor="middle">PASS QC</text>`;
  return makeInspectorHero(id, ['#0284c7', '#059669', '#3b82f6'], { shirt: '#0284c7', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'QA/QC PASS', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['site-layout-land-surveying-tools-levelling-operations'] = (id) => {
  const eq = `<line x1="26" y1="20" x2="14" y2="58" stroke="#0f172a" stroke-width="2.5"/><line x1="26" y1="20" x2="38" y2="58" stroke="#0f172a" stroke-width="2.5"/><line x1="26" y1="20" x2="26" y2="58" stroke="#0f172a" stroke-width="2"/><rect x="18" y="10" width="16" height="12" rx="3" fill="#ea580c" stroke="#0f172a" stroke-width="1.5"/><circle cx="26" cy="16" r="3" fill="#22d3ee"/><line x1="26" y1="16" x2="48" y2="10" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>`;
  return makeSiteHero(id, ['#ea580c', '#f59e0b', '#0284c7'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'SURVEY TS', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['construction-material-storage-waste-reduction-storekeeping'] = (id) => {
  const prop = `<rect x="6" y="12" width="42" height="44" rx="3" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/><line x1="6" y1="26" x2="48" y2="26" stroke="#0f172a" stroke-width="2"/><line x1="6" y1="40" x2="48" y2="40" stroke="#0f172a" stroke-width="2"/><rect x="10" y="16" width="12" height="8" fill="#ffd166"/><rect x="26" y="16" width="10" height="8" fill="#38bdf8"/><rect x="14" y="30" width="16" height="8" fill="#22c55e"/>`;
  return makeSiteHero(id, ['#059669', '#10b981', '#f59e0b'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ea580c' }, prop, { text: '0% WASTE', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['excavation-shoring-deep-foundation-site-coordination'] = (id) => {
  const eq = `<rect x="6" y="10" width="8" height="48" fill="#475569" stroke="#0f172a" stroke-width="1.5"/><rect x="18" y="10" width="8" height="48" fill="#64748b" stroke="#0f172a" stroke-width="1.5"/><rect x="30" y="10" width="8" height="48" fill="#475569" stroke="#0f172a" stroke-width="1.5"/><line x1="2" y1="24" x2="42" y2="24" stroke="#ea580c" stroke-width="3"/><line x1="2" y1="40" x2="42" y2="40" stroke="#ea580c" stroke-width="3"/>`;
  return makeSiteHero(id, ['#ea580c', '#b45309', '#0284c7'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'SHORING', color: '#ea580c', border: '#ea580c' });
};

DEFINITIONS['scaffolding-safety-erection-control-high-rise-access-planning'] = (id) => {
  const eq = `<line x1="10" y1="6" x2="10" y2="58" stroke="#0f172a" stroke-width="2.5"/><line x1="38" y1="6" x2="38" y2="58" stroke="#0f172a" stroke-width="2.5"/><line x1="10" y1="20" x2="38" y2="20" stroke="#0f172a" stroke-width="2"/><line x1="10" y1="38" x2="38" y2="38" stroke="#0f172a" stroke-width="2"/><line x1="10" y1="20" x2="38" y2="38" stroke="#ffd166" stroke-width="2"/><line x1="10" y1="38" x2="38" y2="20" stroke="#ffd166" stroke-width="2"/>`;
  return makeSiteHero(id, ['#ef4444', '#f59e0b', '#0284c7'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ef4444' }, eq, { text: 'SCAFFOLD', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['construction-site-water-management-dewatering-systems'] = (id) => {
  const eq = `<rect x="12" y="24" width="28" height="24" rx="4" fill="#0284c7" stroke="#0f172a" stroke-width="2"/><circle cx="26" cy="36" r="6" fill="#38bdf8"/><path d="M 6,36 L 12,36 M 40,36 L 48,22" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/><path d="M 8,52 Q 26,44 44,52" stroke="#38bdf8" stroke-width="2.5" fill="none"/>`;
  return makeSiteHero(id, ['#0284c7', '#06b6d4', '#10b981'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'DEWATERING', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['demolition-planning-structural-dismantling-salvage-management'] = (id) => {
  const eq = `<line x1="10" y1="10" x2="32" y2="10" stroke="#0f172a" stroke-width="3"/><line x1="32" y1="10" x2="24" y2="34" stroke="#0f172a" stroke-width="1.5"/><circle cx="24" cy="38" r="8" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/><rect x="34" y="24" width="16" height="24" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="2,2"/>`;
  return makeSiteHero(id, ['#dc2626', '#b91c1c', '#f59e0b'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ef4444' }, eq, { text: 'DEMOLITION', color: '#ef4444', border: '#ef4444' });
};

DEFINITIONS['labour-productivity-management-on-site-performance-tracking'] = (id) => {
  const scr = `<path d="M 4,20 A 14,14 0 0 1 28,20" stroke="#475569" stroke-width="3" fill="none"/><line x1="16" y1="20" x2="24" y2="10" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/><text x="16" y="22" fill="#22c55e" font-size="5" font-weight="900" text-anchor="middle">+140%</text>`;
  return makeDeskHero(id, ['#059669', '#10b981', '#3b82f6'], { shirt: '#047857', skin: '#fed7aa', hair: '#1e293b' }, scr, { text: 'LABOUR KPI', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['temporary-structures-site-infrastructure-layout-planning'] = (id) => {
  const prop = `<rect x="6" y="18" width="40" height="26" rx="2" fill="#bae6fd" stroke="#0f172a" stroke-width="2"/><polygon points="4,18 26,8 48,18" fill="#0284c7" stroke="#0f172a" stroke-width="1.8"/><rect x="20" y="28" width="10" height="16" fill="#0f172a"/><rect x="10" y="24" width="6" height="6" fill="#ffffff"/>`;
  return makeSiteHero(id, ['#0284c7', '#3b82f6', '#f59e0b'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ea580c' }, prop, { text: 'CABIN SITE', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['construction-site-utilities-temporary-power-water-setup'] = (id) => {
  const eq = `<rect x="10" y="14" width="32" height="36" rx="4" fill="#ffd166" stroke="#0f172a" stroke-width="2"/><polygon points="26,18 20,30 26,30 22,42 32,28 26,28" fill="#ef4444"/><line x1="14" y1="46" x2="38" y2="46" stroke="#0f172a" stroke-width="2"/>`;
  return makeSiteHero(id, ['#f59e0b', '#ef4444', '#0284c7'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'POWER/WATER', color: '#ffd166', border: '#ffd166' });
};






  // Batch 3 (Courses 41 - 60)




DEFINITIONS['bim-building-information-modeling-software-coordination'] = (id) => {
  const scr = `<polygon points="16,4 28,10 16,16 4,10" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/><polygon points="4,10 16,16 16,28 4,22" fill="#0284c7"/><polygon points="16,16 28,10 28,22 16,28" fill="#1e40af"/>`;
  return makeDeskHero(id, ['#0284c7', '#38bdf8', '#6366f1'], { shirt: '#0369a1', skin: '#fcd34d', hair: '#0f172a', headset: true }, scr, { text: 'BIM 3D', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['advanced-blueprint-architectural-drawing-interpretation'] = (id) => {
  const prop = `<rect x="4" y="8" width="46" height="52" rx="3" fill="#1e3a8a" stroke="#ffffff" stroke-width="1.5"/><line x1="8" y1="18" x2="40" y2="18" stroke="#ffffff" stroke-width="1"/><rect x="8" y="24" width="14" height="18" fill="none" stroke="#60a5fa" stroke-width="1"/><rect x="26" y="24" width="18" height="26" fill="none" stroke="#60a5fa" stroke-width="1"/>`;
  return makeInspectorHero(id, ['#1e40af', '#3b82f6', '#06b6d4'], { shirt: '#1d4ed8', skin: '#fed7aa', hair: '#1e293b' }, prop, { text: 'BLUEPRINT', color: '#60a5fa', border: '#60a5fa' });
};

DEFINITIONS['pre-engineered-building-peb-design-and-assembly-principles'] = (id) => {
  const eq = `<polygon points="6,24 26,12 46,24" fill="none" stroke="#ea580c" stroke-width="3"/><line x1="6" y1="24" x2="6" y2="52" stroke="#ea580c" stroke-width="3"/><line x1="46" y1="24" x2="46" y2="52" stroke="#ea580c" stroke-width="3"/><line x1="26" y1="12" x2="26" y2="52" stroke="#0f172a" stroke-width="1.8" stroke-dasharray="2,2"/>`;
  return makeSiteHero(id, ['#ea580c', '#f59e0b', '#3b82f6'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'PEB STEEL', color: '#ea580c', border: '#ea580c' });
};

DEFINITIONS['structural-drawing-verification-for-site-engineers'] = (id) => {
  const prop = `<rect x="6" y="10" width="42" height="48" rx="3" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><line x1="12" y1="18" x2="12" y2="48" stroke="#ef4444" stroke-width="2"/><line x1="22" y1="18" x2="22" y2="48" stroke="#ef4444" stroke-width="2"/><line x1="32" y1="18" x2="32" y2="48" stroke="#ef4444" stroke-width="2"/><line x1="8" y1="26" x2="38" y2="26" stroke="#0284c7" stroke-width="2"/><line x1="8" y1="38" x2="38" y2="38" stroke="#0284c7" stroke-width="2"/>`;
  return makeSiteHero(id, ['#2563eb', '#0284c7', '#ef4444'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ea580c' }, prop, { text: 'REBAR BBS', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['mep-mechanical-electrical-plumbing-drawing-coordination'] = (id) => {
  const scr = `<path d="M 4,8 H 18 V 22" stroke="#06b6d4" stroke-width="2.5" fill="none"/><path d="M 12,4 V 16 H 28" stroke="#ef4444" stroke-width="2" fill="none"/><circle cx="18" cy="16" r="3" fill="#ffd166"/>`;
  return makeDeskHero(id, ['#0d9488', '#06b6d4', '#f43f5e'], { shirt: '#0f766e', skin: '#fed7aa', hair: '#0f172a' }, scr, { text: 'MEP COORD', color: '#06b6d4', border: '#06b6d4' });
};

DEFINITIONS['as-built-drawing-documentation-handover-report-drafting'] = (id) => {
  const prop = `<rect x="4" y="8" width="46" height="52" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><circle cx="27" cy="38" r="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/><path d="M 22,38 L 26,42 L 32,34" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/><text x="27" y="22" fill="#0f172a" font-size="6" font-weight="900" text-anchor="middle">AS-BUILT</text>`;
  return makeInspectorHero(id, ['#10b981', '#059669', '#3b82f6'], { shirt: '#047857', skin: '#fcd34d', hair: '#1e1b4b' }, prop, { text: 'HANDOVER', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['construction-standard-operating-procedure-sop-writing'] = (id) => {
  const prop = `<rect x="6" y="8" width="44" height="52" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><rect x="10" y="14" width="12" height="12" rx="2" fill="#38bdf8"/><line x1="26" y1="18" x2="42" y2="18" stroke="#0f172a" stroke-width="2"/><line x1="26" y1="24" x2="38" y2="24" stroke="#94a3b8" stroke-width="1.5"/><rect x="10" y="32" width="12" height="12" rx="2" fill="#22c55e"/><line x1="26" y1="36" x2="42" y2="36" stroke="#0f172a" stroke-width="2"/>`;
  return makeInspectorHero(id, ['#3b82f6', '#6366f1', '#06b6d4'], { shirt: '#2563eb', skin: '#fed7aa', hair: '#1e293b' }, prop, { text: 'SOP MANUAL', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['digital-document-control-daily-progress-report-dpr-systems'] = (id) => {
  const scr = `<rect x="4" y="4" width="24" height="6" rx="1.5" fill="#10b981"/><rect x="4" y="12" width="18" height="4" rx="1" fill="#38bdf8"/><path d="M 24,14 L 28,10 L 32,14 M 28,10 V 22" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>`;
  return makeDeskHero(id, ['#059669', '#0d9488', '#f59e0b'], { shirt: '#0f766e', skin: '#fcd34d', hair: '#0f172a' }, scr, { text: 'CLOUD DPR', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['using-excel-for-construction-bar-bending-schedules-bbs'] = (id) => {
  const scr = `<rect x="2" y="2" width="28" height="4" rx="1" fill="#10b981"/><line x1="2" y1="8" x2="30" y2="8" stroke="#475569" stroke-width="1"/><line x1="2" y1="14" x2="30" y2="14" stroke="#475569" stroke-width="1"/><line x1="10" y1="2" x2="10" y2="20" stroke="#475569" stroke-width="1"/><line x1="20" y1="2" x2="20" y2="20" stroke="#475569" stroke-width="1"/>`;
  return makeDeskHero(id, ['#059669', '#10b981', '#3b82f6'], { shirt: '#047857', skin: '#fed7aa', hair: '#1e293b', glasses: true }, scr, { text: 'EXCEL BBS', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['revit-architecture-foundations-for-project-managers'] = (id) => {
  const scr = `<path d="M 4,20 L 16,6 L 28,20 Z" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="16" y1="6" x2="16" y2="20" stroke="#2563eb" stroke-width="1.5"/><rect x="10" y="14" width="4" height="6" fill="#ffd166"/><rect x="18" y="14" width="4" height="6" fill="#ffd166"/>`;
  return makeDeskHero(id, ['#2563eb', '#38bdf8', '#8b5cf6'], { shirt: '#1d4ed8', skin: '#fcd34d', hair: '#0f172a' }, scr, { text: 'REVIT ARCH', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['autocad-basics-for-construction-site-supervisors'] = (id) => {
  const scr = `<line x1="4" y1="4" x2="28" y2="4" stroke="#ef4444" stroke-width="1.5"/><line x1="4" y1="4" x2="4" y2="20" stroke="#ef4444" stroke-width="1.5"/><circle cx="18" cy="14" r="6" fill="none" stroke="#ffd166" stroke-width="1.5"/><line x1="12" y1="14" x2="24" y2="14" stroke="#ffd166" stroke-width="1"/>`;
  return makeDeskHero(id, ['#dc2626', '#ea580c', '#f59e0b'], { shirt: '#b91c1c', skin: '#fed7aa', hair: '#1e1b4b' }, scr, { text: 'AUTOCAD', color: '#ffd166', border: '#ffd166' });
};

// 52. Concrete Technology & Modern Formwork (WAS MISSING)
DEFINITIONS['concrete-technology-modern-formwork-applications'] = (id) => {
  const eq = `<rect x="6" y="12" width="26" height="42" fill="#0284c7" stroke="#0f172a" stroke-width="2"/><line x1="6" y1="26" x2="32" y2="26" stroke="#bae6fd" stroke-width="2"/><line x1="6" y1="40" x2="32" y2="40" stroke="#bae6fd" stroke-width="2"/><polygon points="36,46 44,24 50,24 56,46" fill="#f59e0b" stroke="#0f172a" stroke-width="1.5"/><circle cx="48" cy="48" r="3" fill="#0f172a"/>`;
  return makeSiteHero(id, ['#0284c7', '#f59e0b', '#3b82f6'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'FORMWORK', color: '#38bdf8', border: '#38bdf8' });
};

// 53. Interior Fit-Out & Commercial Finishing (WAS MISSING)
DEFINITIONS['interior-fit-out-commercial-finishing-project-coordination'] = (id) => {
  const prop = `<rect x="6" y="10" width="42" height="48" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><rect x="10" y="16" width="14" height="14" rx="2" fill="#8b5cf6"/><rect x="28" y="16" width="14" height="14" rx="2" fill="#06b6d4"/><rect x="10" y="34" width="14" height="14" rx="2" fill="#f59e0b"/><rect x="28" y="34" width="14" height="14" rx="2" fill="#10b981"/>`;
  return makeInspectorHero(id, ['#8b5cf6', '#06b6d4', '#ec4899'], { shirt: '#7c3aed', skin: '#fbcfe8', hair: '#1e1b4b' }, prop, { text: 'FIT-OUT', color: '#8b5cf6', border: '#8b5cf6' });
};

// 54. Sustainable Building Materials & Green Construction (WAS MISSING)
DEFINITIONS['sustainable-building-materials-green-construction-intro'] = (id) => {
  const prop = `<circle cx="28" cy="28" r="16" fill="#dcfce7" stroke="#10b981" stroke-width="2.5"/><path d="M 28,16 C 20,20 20,32 28,38 C 36,32 36,20 28,16 Z" fill="#10b981"/><line x1="28" y1="20" x2="28" y2="36" stroke="#ffffff" stroke-width="1.5"/><rect x="8" y="48" width="40" height="8" rx="2" fill="#10b981"/><text x="28" y="54" fill="#ffffff" font-size="5" font-weight="900" text-anchor="middle">LEED GREEN</text>`;
  return makeInspectorHero(id, ['#10b981', '#84cc16', '#059669'], { shirt: '#047857', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'GREEN MATS', color: '#10b981', border: '#10b981' });
};

// 55. Residential Property Development Foundations (WAS MISSING - IN USER SCREENSHOT!)
DEFINITIONS['residential-property-development-foundations'] = (id) => {
  return makePointerHero(id, ['#f59e0b', '#2563eb', '#1e40af'], { shirt: '#1e3a8a', skin: '#fed7aa', hair: '#0f172a' },
    [{ text: 'Zoning OK', bg: '#ffd166' }, { text: 'Land Value', bg: '#38bdf8' }, { text: 'ROI +34%', bg: '#22c55e' }],
    { text: 'RESIDENTIAL', color: '#ffd166', border: '#ffd166' });
};

// 56. Waterproofing Technology: Materials, Selection & Application (WAS MISSING - IN USER SCREENSHOT!)
DEFINITIONS['waterproofing-technology-materials-selection-application'] = (id) => {
  const eq = `<rect x="6" y="22" width="40" height="26" rx="4" fill="#0284c7" stroke="#0f172a" stroke-width="2"/><ellipse cx="14" cy="35" rx="6" ry="12" fill="#0369a1"/><path d="M 6,18 Q 26,10 46,18" stroke="#38bdf8" stroke-width="3" fill="none"/><line x1="20" y1="4" x2="20" y2="12" stroke="#38bdf8" stroke-width="2"/><line x1="32" y1="4" x2="32" y2="12" stroke="#38bdf8" stroke-width="2"/>`;
  return makeSiteHero(id, ['#06b6d4', '#0284c7', '#1e3a8a'], { skin: '#fcd34d', hat: '#ffd166', vest: '#0284c7' }, eq, { text: 'WATERPROOF', color: '#38bdf8', border: '#38bdf8' });
};

// 57. Advanced Flooring Systems & Tiling Project Inspection (WAS MISSING - IN USER SCREENSHOT!)
DEFINITIONS['advanced-flooring-systems-tiling-project-inspection'] = (id) => {
  const prop = `<rect x="6" y="14" width="42" height="40" rx="2" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/><line x1="6" y1="34" x2="48" y2="34" stroke="#0f172a" stroke-width="2"/><line x1="27" y1="14" x2="27" y2="54" stroke="#0f172a" stroke-width="2"/><rect x="12" y="8" width="30" height="8" rx="2" fill="#f59e0b" stroke="#0f172a" stroke-width="1.5"/><circle cx="27" cy="12" r="2" fill="#ffffff"/>`;
  return makeInspectorHero(id, ['#f59e0b', '#d97706', '#78716c'], { shirt: '#b45309', skin: '#fed7aa', hair: '#1e293b' }, prop, { text: 'FLOORING QC', color: '#f59e0b', border: '#f59e0b' });
};

// 58. Façade Engineering & Commercial Glazing Installation (WAS MISSING - IN USER SCREENSHOT!)
DEFINITIONS['fa-ade-engineering-commercial-glazing-installation-systems'] = (id) => {
  const eq = `<rect x="6" y="10" width="40" height="48" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><line x1="6" y1="34" x2="46" y2="34" stroke="#0284c7" stroke-width="2"/><circle cx="26" cy="34" r="8" fill="#ea580c" stroke="#0f172a" stroke-width="1.5"/><rect x="23" y="31" width="6" height="6" fill="#ffffff"/>`;
  return makeSiteHero(id, ['#38bdf8', '#6366f1', '#1e1b4b'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'GLAZING', color: '#38bdf8', border: '#38bdf8' });
};

// 59. Precast Concrete Elements: Manufacturing & Erection Control (WAS MISSING - IN USER SCREENSHOT!)
DEFINITIONS['precast-concrete-elements-manufacturing-erection-control'] = (id) => {
  const eq = `<rect x="6" y="24" width="42" height="26" rx="2" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/><circle cx="16" cy="37" r="3" fill="#475569"/><circle cx="38" cy="37" r="3" fill="#475569"/><line x1="16" y1="24" x2="27" y2="8" stroke="#ea580c" stroke-width="2.5"/><line x1="38" y1="24" x2="27" y2="8" stroke="#ea580c" stroke-width="2.5"/><circle cx="27" cy="8" r="3" fill="#0f172a"/>`;
  return makeSiteHero(id, ['#ea580c', '#64748b', '#0f172a'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'PRECAST', color: '#ffd166', border: '#ffd166' });
};

// 60. Drywall Partitioning & Acoustic Insulation Project Coordination
DEFINITIONS['drywall-partitioning-acoustic-insulation-project-coordination'] = (id) => {
  const prop = `<rect x="10" y="8" width="10" height="52" fill="#facc15" stroke="#0f172a" stroke-width="1.8"/><rect x="22" y="8" width="10" height="52" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8"/><rect x="34" y="8" width="10" height="52" fill="#38bdf8" stroke="#0f172a" stroke-width="1.8"/><path d="M 46,24 Q 52,34 46,44" stroke="#22c55e" stroke-width="2" fill="none"/>`;
  return makeInspectorHero(id, ['#0284c7', '#f59e0b', '#3b82f6'], { shirt: '#0284c7', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'ACOUSTIC', color: '#38bdf8', border: '#38bdf8' });
};






  // Batch 4 (Courses 61 - 80)




DEFINITIONS['road-pavement-construction-materials-field-execution'] = (id) => {
  const eq = `<rect x="6" y="24" width="28" height="18" rx="3" fill="#334155" stroke="#0f172a" stroke-width="2"/><circle cx="36" cy="33" r="14" fill="#0f172a" stroke="#ffd166" stroke-width="2.5"/><line x1="2" y1="48" x2="52" y2="48" stroke="#f59e0b" stroke-width="3"/>`;
  return makeSiteHero(id, ['#334155', '#f59e0b', '#0284c7'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'ROAD PAVE', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['building-structural-repair-retrofitting-rehabilitation-basics'] = (id) => {
  const eq = `<rect x="10" y="8" width="34" height="52" rx="2" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/><line x1="10" y1="20" x2="44" y2="20" stroke="#0f172a" stroke-width="3"/><line x1="10" y1="34" x2="44" y2="34" stroke="#0f172a" stroke-width="3"/><line x1="10" y1="48" x2="44" y2="48" stroke="#0f172a" stroke-width="3"/><path d="M 22,22 L 28,32 L 24,34 L 32,44" stroke="#ef4444" stroke-width="2" fill="none"/>`;
  return makeSiteHero(id, ['#0284c7', '#ef4444', '#b45309'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ef4444' }, eq, { text: 'RETROFIT', color: '#ef4444', border: '#ef4444' });
};

DEFINITIONS['landscape-construction-engineering-external-site-works'] = (id) => {
  const eq = `<circle cx="28" cy="24" r="14" fill="#22c55e" stroke="#0f172a" stroke-width="2"/><rect x="25" y="38" width="6" height="20" fill="#78350f" stroke="#0f172a" stroke-width="1.5"/><ellipse cx="14" cy="46" rx="8" ry="4" fill="#84cc16"/><ellipse cx="42" cy="46" rx="8" ry="4" fill="#84cc16"/>`;
  return makeSiteHero(id, ['#10b981', '#22c55e', '#f59e0b'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'LANDSCAPE', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['smart-home-automation-iot-hardware-site-integration'] = (id) => {
  const prop = `<rect x="8" y="14" width="38" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><circle cx="27" cy="30" r="10" fill="#38bdf8"/><path d="M 27,24 L 27,36 M 21,30 L 33,30" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><path d="M 17,46 Q 27,42 37,46" stroke="#22c55e" stroke-width="2" fill="none"/>`;
  return makeInspectorHero(id, ['#0284c7', '#06b6d4', '#6366f1'], { shirt: '#0284c7', skin: '#fcd34d', hair: '#0f172a' }, prop, { text: 'SMART IOT', color: '#38bdf8', border: '#38bdf8' });
};

// 65. Modular Kitchen & Wardrobe Joinery (WAS MISSING)
DEFINITIONS['modular-kitchen-wardrobe-joinery-project-management'] = (id) => {
  const prop = `<rect x="6" y="10" width="42" height="48" rx="2" fill="#fed7aa" stroke="#0f172a" stroke-width="2"/><line x1="6" y1="28" x2="48" y2="28" stroke="#0f172a" stroke-width="2"/><line x1="27" y1="28" x2="27" y2="58" stroke="#0f172a" stroke-width="2"/><circle cx="22" cy="38" r="2" fill="#0f172a"/><circle cx="32" cy="38" r="2" fill="#0f172a"/><rect x="14" y="14" width="26" height="8" rx="1.5" fill="#f59e0b"/>`;
  return makeInspectorHero(id, ['#f59e0b', '#d97706', '#ec4899'], { shirt: '#b45309', skin: '#fed7aa', hair: '#1e293b' }, prop, { text: 'MODULAR CAB', color: '#f59e0b', border: '#f59e0b' });
};

// 66. Advanced Microsoft Excel & Data Dashboarding (WAS MISSING)
DEFINITIONS['advanced-microsoft-excel-data-dashboarding-for-operations'] = (id) => {
  const scr = `<rect x="2" y="2" width="28" height="4" rx="1" fill="#047857"/><rect x="2" y="8" width="8" height="12" fill="#10b981"/><rect x="12" y="12" width="8" height="8" fill="#34d399"/><rect x="22" y="6" width="8" height="14" fill="#059669"/><polyline points="2,18 8,10 18,13 28,4" stroke="#ffffff" stroke-width="1.5" fill="none"/>`;
  return makeDeskHero(id, ['#059669', '#10b981', '#06b6d4'], { shirt: '#047857', skin: '#fcd34d', hair: '#1e1b4b', glasses: true }, scr, { text: 'EXCEL OPS', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['supply-chain-logistics-warehouse-inventory-management'] = (id) => {
  const prop = `<rect x="6" y="24" width="24" height="22" rx="3" fill="#f59e0b" stroke="#0f172a" stroke-width="2"/><line x1="18" y1="24" x2="18" y2="46" stroke="#b45309" stroke-width="1.8"/><rect x="26" y="14" width="20" height="20" rx="3" fill="#ffd166" stroke="#0f172a" stroke-width="2"/><circle cx="42" cy="46" r="6" fill="#38bdf8"/>`;
  return makeInspectorHero(id, ['#0284c7', '#f59e0b', '#10b981'], { shirt: '#0369a1', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'SUPPLY CHAIN', color: '#38bdf8', border: '#38bdf8' });
};

// 68. Vendor Management & Strategic Procurement (WAS MISSING)
DEFINITIONS['vendor-management-strategic-procurement-operations'] = (id) => {
  return makePointerHero(id, ['#7c3aed', '#f59e0b', '#6366f1'], { shirt: '#6d28d9', skin: '#fed7aa', hair: '#0f172a' },
    [{ text: 'RFQ Sent', bg: '#ffd166' }, { text: 'Top Bidder', bg: '#38bdf8' }, { text: 'Contract OK', bg: '#22c55e' }],
    { text: 'VENDOR OPS', color: '#ffd166', border: '#ffd166' });
};

// 69. Agile Frameworks & Scrum Basics for Non-Tech Operations (WAS MISSING)
DEFINITIONS['agile-frameworks-scrum-basics-for-non-tech-operations'] = (id) => {
  const scr = `<rect x="2" y="2" width="8" height="18" rx="1" fill="#38bdf8"/><rect x="12" y="2" width="8" height="18" rx="1" fill="#f59e0b"/><rect x="22" y="2" width="8" height="18" rx="1" fill="#22c55e"/><circle cx="16" cy="11" r="3" fill="#ffffff"/>`;
  return makeDeskHero(id, ['#06b6d4', '#8b5cf6', '#3b82f6'], { shirt: '#0284c7', skin: '#fcd34d', hair: '#1e293b' }, scr, { text: 'AGILE OPS', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['business-process-mapping-workflow-optimization-blueprint'] = (id) => {
  const scr = `<circle cx="8" cy="10" r="4" fill="#38bdf8"/><path d="M 12,10 L 18,10" stroke="#ffffff" stroke-width="1.5"/><rect x="18" y="6" width="8" height="8" rx="1" fill="#ffd166"/><path d="M 26,10 L 32,10" stroke="#ffffff" stroke-width="1.5"/><circle cx="36" cy="10" r="4" fill="#22c55e"/>`;
  return makeDeskHero(id, ['#2563eb', '#38bdf8', '#10b981'], { shirt: '#1d4ed8', skin: '#fed7aa', hair: '#0f172a' }, scr, { text: 'PROCESS MAP', color: '#38bdf8', border: '#38bdf8' });
};

// 71. Lean Six Sigma Foundations (WAS MISSING)
DEFINITIONS['lean-six-sigma-foundations-for-operational-excellence'] = (id) => {
  const prop = `<circle cx="28" cy="28" r="18" fill="#1e3a8a" stroke="#ffd166" stroke-width="2.5"/><text x="28" y="34" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">6&sigma;</text><rect x="6" y="48" width="44" height="8" rx="2" fill="#f59e0b"/><text x="28" y="54" fill="#0f172a" font-size="5" font-weight="900" text-anchor="middle">DMAIC MASTER</text>`;
  return makeInspectorHero(id, ['#1d4ed8', '#f59e0b', '#2563eb'], { shirt: '#1e3a8a', skin: '#fcd34d', hair: '#1e1b4b' }, prop, { text: 'LEAN 6σ', color: '#ffd166', border: '#ffd166' });
};

// 72. Customer Success Operations & Account Retention (WAS MISSING)
DEFINITIONS['customer-success-operations-account-retention-strategies'] = (id) => {
  return makePointerHero(id, ['#d946ef', '#38bdf8', '#a855f7'], { shirt: '#c026d3', skin: '#fed7aa', hair: '#0f172a' },
    [{ text: 'NPS 94%', bg: '#ffd166' }, { text: 'Retention', bg: '#38bdf8' }, { text: 'Zero Churn', bg: '#22c55e' }],
    { text: 'RETENTION', color: '#38bdf8', border: '#38bdf8' });
};

// 73. Key Account Management & Client Relations (WAS MISSING)
DEFINITIONS['key-account-management-client-relations-frameworks'] = (id) => {
  const scr = `<polygon points="2,18 10,12 18,15 28,4 28,18" fill="rgba(34,197,94,0.3)"/><circle cx="28" cy="4" r="3" fill="#22c55e"/><text x="14" y="22" fill="#ffffff" font-size="5" font-weight="800">LTV +180%</text>`;
  return makeDeskHero(id, ['#1e3a8a', '#10b981', '#0284c7'], { shirt: '#1d4ed8', skin: '#fcd34d', hair: '#1e293b', glasses: true }, scr, { text: 'KEY ACCT', color: '#10b981', border: '#10b981' });
};

// 74. Project Management Essentials for Operational Teams (WAS MISSING)
DEFINITIONS['project-management-essentials-for-operational-teams'] = (id) => {
  return makePointerHero(id, ['#f59e0b', '#06b6d4', '#10b981'], { shirt: '#d97706', skin: '#fed7aa', hair: '#0f172a' },
    [{ text: 'Kickoff OK', bg: '#ffd166' }, { text: 'Sprint Goal', bg: '#38bdf8' }, { text: 'Milestone', bg: '#22c55e' }],
    { text: 'PM ESSENTIALS', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['enterprise-resource-planning-erp-software-navigation-basics'] = (id) => {
  const scr = `<rect x="2" y="2" width="12" height="8" rx="1" fill="#0284c7"/><rect x="18" y="2" width="12" height="8" rx="1" fill="#f59e0b"/><rect x="2" y="12" width="12" height="8" rx="1" fill="#10b981"/><rect x="18" y="12" width="12" height="8" rx="1" fill="#8b5cf6"/><line x1="8" y1="10" x2="8" y2="12" stroke="#ffffff" stroke-width="1"/><line x1="24" y1="10" x2="24" y2="12" stroke="#ffffff" stroke-width="1"/>`;
  return makeDeskHero(id, ['#0284c7', '#3b82f6', '#4f46e5'], { shirt: '#1e40af', skin: '#fed7aa', hair: '#1e1b4b' }, scr, { text: 'SAP ERP', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['data-analytics-for-operations-using-powerbi-and-tableau'] = (id) => {
  const scr = `<rect x="2" y="12" width="5" height="8" rx="1" fill="#f59e0b"/><rect x="9" y="8" width="5" height="12" rx="1" fill="#f59e0b"/><rect x="16" y="4" width="5" height="16" rx="1" fill="#f59e0b"/><rect x="23" y="1" width="5" height="19" rx="1" fill="#22c55e"/>`;
  return makeDeskHero(id, ['#f59e0b', '#d97706', '#0284c7'], { shirt: '#ea580c', skin: '#fcd34d', hair: '#0f172a', glasses: true }, scr, { text: 'POWER BI', color: '#f59e0b', border: '#f59e0b' });
};

DEFINITIONS['quality-assurance-qa-and-process-control-frameworks'] = (id) => {
  const prop = `<circle cx="28" cy="28" r="16" fill="#ecfdf5" stroke="#10b981" stroke-width="2.5"/><path d="M 20,28 L 26,34 L 38,20" stroke="#10b981" stroke-width="3" stroke-linecap="round"/><circle cx="28" cy="28" r="10" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="2,2"/>`;
  return makeInspectorHero(id, ['#059669', '#10b981', '#3b82f6'], { shirt: '#047857', skin: '#fed7aa', hair: '#1e293b' }, prop, { text: 'QA PROCESS', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['change-management-frameworks-for-operational-restructuring'] = (id) => {
  const scr = `<circle cx="6" cy="14" r="3" fill="#ef4444"/><circle cx="16" cy="6" r="3" fill="#f59e0b"/><circle cx="26" cy="14" r="3" fill="#22c55e"/><path d="M 6,14 Q 16,6 26,14" stroke="#ffffff" stroke-width="1.5" fill="none"/>`;
  return makeDeskHero(id, ['#8b5cf6', '#a855f7', '#ec4899'], { shirt: '#7c3aed', skin: '#fcd34d', hair: '#0f172a' }, scr, { text: 'CHANGE MGT', color: '#a855f7', border: '#a855f7' });
};

DEFINITIONS['business-continuity-planning-disaster-recovery-workflows'] = (id) => {
  const prop = `<path d="M 28,10 L 46,18 L 46,34 C 46,44 28,52 28,52 C 28,52 10,44 10,34 L 10,18 Z" fill="#0284c7" stroke="#ffffff" stroke-width="2"/><path d="M 22,28 L 26,32 L 34,22" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>`;
  return makeInspectorHero(id, ['#0284c7', '#3b82f6', '#10b981'], { shirt: '#1e40af', skin: '#fed7aa', hair: '#1e1b4b' }, prop, { text: 'RESILIENCE', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['cross-border-trade-logistics-custom-clearance-operations'] = (id) => {
  const prop = `<rect x="6" y="14" width="44" height="34" rx="3" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><circle cx="28" cy="30" r="10" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/><path d="M 24,30 L 27,33 L 33,27" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/><text x="28" y="44" fill="#0f172a" font-size="5" font-weight="900" text-anchor="middle">CUSTOMS OK</text>`;
  return makeInspectorHero(id, ['#d97706', '#f59e0b', '#0284c7'], { shirt: '#b45309', skin: '#fcd34d', hair: '#0f172a' }, prop, { text: 'CUSTOMS 3PL', color: '#f59e0b', border: '#f59e0b' });
};






  // Batch 5 (Courses 81 - 101)




// 81. Corporate Retail Operations (WAS MISSING)
DEFINITIONS['corporate-retail-operations-store-management-systems'] = (id) => {
  const prop = `<rect x="8" y="16" width="38" height="34" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><rect x="12" y="22" width="16" height="10" rx="1" fill="#0284c7"/><line x1="12" y1="38" x2="32" y2="38" stroke="#0f172a" stroke-width="2"/><circle cx="38" cy="26" r="4" fill="#22c55e"/>`;
  return makeInspectorHero(id, ['#f43f5e', '#8b5cf6', '#ec4899'], { shirt: '#e11d48', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'RETAIL OPS', color: '#f43f5e', border: '#f43f5e' });
};

// 82. B2B Service Operations Management & Client SLA Tracking (WAS MISSING)
DEFINITIONS['b2b-service-operations-management-client-sla-tracking'] = (id) => {
  const scr = `<circle cx="16" cy="11" r="8" fill="none" stroke="#22c55e" stroke-width="2.5"/><text x="16" y="14" fill="#ffffff" font-size="6" font-weight="900" text-anchor="middle">99.9%</text><line x1="4" y1="22" x2="28" y2="22" stroke="#38bdf8" stroke-width="1.5"/>`;
  return makeDeskHero(id, ['#2563eb', '#f59e0b', '#1d4ed8'], { shirt: '#1e40af', skin: '#fcd34d', hair: '#1e293b' }, scr, { text: 'B2B SLA', color: '#38bdf8', border: '#38bdf8' });
};

// 83. Digital Product Operations & Lifecycle Coordination (WAS MISSING)
DEFINITIONS['digital-product-operations-lifecycle-coordination'] = (id) => {
  const scr = `<rect x="4" y="2" width="24" height="20" rx="3" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.2"/><rect x="8" y="6" width="16" height="4" rx="1" fill="#38bdf8"/><rect x="8" y="12" width="8" height="6" rx="1" fill="#f59e0b"/><rect x="18" y="12" width="6" height="6" rx="1" fill="#22c55e"/>`;
  return makeDeskHero(id, ['#7c3aed', '#06b6d4', '#a855f7'], { shirt: '#6d28d9', skin: '#fed7aa', hair: '#0f172a' }, scr, { text: 'PRODUCT OPS', color: '#a855f7', border: '#a855f7' });
};

DEFINITIONS['e-commerce-operations-supply-chain-fulfillment-tactics'] = (id) => {
  const prop = `<path d="M 6,18 L 14,18 L 22,38 L 42,38 L 46,24 L 16,24" stroke="#0f172a" stroke-width="2" fill="none"/><circle cx="24" cy="44" r="4" fill="#f59e0b"/><circle cx="40" cy="44" r="4" fill="#f59e0b"/><rect x="22" y="14" width="14" height="10" fill="#ffd166"/>`;
  return makeInspectorHero(id, ['#f59e0b', '#d97706', '#0284c7'], { shirt: '#d97706', skin: '#fcd34d', hair: '#1e1b4b' }, prop, { text: 'E-COMMERCE', color: '#f59e0b', border: '#f59e0b' });
};

// 85. Risk Mitigation & Internal Control Audit (WAS MISSING)
DEFINITIONS['risk-mitigation-internal-control-audit-for-operations-managers'] = (id) => {
  const prop = `<rect x="6" y="10" width="42" height="48" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><circle cx="27" cy="22" r="6" fill="#ef4444"/><line x1="12" y1="36" x2="38" y2="36" stroke="#0f172a" stroke-width="2"/><line x1="12" y1="44" x2="30" y2="44" stroke="#0f172a" stroke-width="2"/><path d="M 34,42 L 37,46 L 44,38" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round"/>`;
  return makeInspectorHero(id, ['#0f172a', '#ffd166', '#1e293b'], { shirt: '#1e293b', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'AUDIT RISK', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['strategic-facility-optimization-resource-budgeting'] = (id) => {
  const scr = `<rect x="4" y="6" width="10" height="16" fill="#38bdf8"/><rect x="18" y="2" width="10" height="20" fill="#0284c7"/><circle cx="9" cy="10" r="1.5" fill="#ffffff"/><circle cx="23" cy="8" r="1.5" fill="#ffffff"/>`;
  return makeDeskHero(id, ['#0284c7', '#10b981', '#3b82f6'], { shirt: '#0369a1', skin: '#fcd34d', hair: '#1e293b' }, scr, { text: 'FACILITIES', color: '#38bdf8', border: '#38bdf8' });
};

// 87. Root-Cause Analysis & Operational Bottleneck (WAS MISSING)
DEFINITIONS['root-cause-analysis-operational-bottleneck-troubleshooting'] = (id) => {
  const prop = `<line x1="6" y1="30" x2="48" y2="30" stroke="#0f172a" stroke-width="3"/><line x1="16" y1="14" x2="26" y2="30" stroke="#ea580c" stroke-width="2"/><line x1="32" y1="14" x2="40" y2="30" stroke="#ea580c" stroke-width="2"/><line x1="16" y1="46" x2="26" y2="30" stroke="#ea580c" stroke-width="2"/><circle cx="48" cy="30" r="5" fill="#ef4444"/>`;
  return makeInspectorHero(id, ['#ea580c', '#0d9488', '#f97316'], { shirt: '#c2410c', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'ROOT CAUSE', color: '#f97316', border: '#f97316' });
};

// 88. Operational Dashboard Design & Performance KPI Mapping (WAS MISSING)
DEFINITIONS['operational-dashboard-design-performance-kpi-mapping'] = (id) => {
  const scr = `<rect x="2" y="2" width="12" height="10" rx="1.5" fill="#8b5cf6"/><circle cx="8" cy="7" r="3" fill="#ffffff"/><rect x="18" y="2" width="12" height="10" rx="1.5" fill="#38bdf8"/><rect x="2" y="14" width="28" height="8" rx="1.5" fill="#10b981"/>`;
  return makeDeskHero(id, ['#8b5cf6', '#84cc16', '#6366f1'], { shirt: '#7c3aed', skin: '#fcd34d', hair: '#1e1b4b', glasses: true }, scr, { text: 'KPI DASH', color: '#8b5cf6', border: '#8b5cf6' });
};

// 89. B2B Client Onboarding & Service Delivery Workflows (WAS MISSING)
DEFINITIONS['b2b-client-onboarding-service-delivery-workflows'] = (id) => {
  return makePointerHero(id, ['#0d9488', '#0284c7', '#14b8a6'], { shirt: '#0f766e', skin: '#fed7aa', hair: '#0f172a' },
    [{ text: 'Discovery', bg: '#ffd166' }, { text: 'Integration', bg: '#38bdf8' }, { text: 'Go-Live OK', bg: '#22c55e' }],
    { text: 'ONBOARDING', color: '#14b8a6', border: '#14b8a6' });
};

DEFINITIONS['fleet-logistics-optimization-last-mile-delivery-planning'] = (id) => {
  const eq = `<rect x="6" y="20" width="38" height="22" rx="3" fill="#0284c7" stroke="#0f172a" stroke-width="2"/><circle cx="14" cy="42" r="5" fill="#0f172a"/><circle cx="36" cy="42" r="5" fill="#0f172a"/><path d="M 28,14 L 38,20" stroke="#f59e0b" stroke-width="2.5"/>`;
  return makeSiteHero(id, ['#0284c7', '#3b82f6', '#f59e0b'], { skin: '#fed7aa', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'LAST MILE', color: '#38bdf8', border: '#38bdf8' });
};

// 91. Corporate Standard Operating Procedure (SOP) Deployment (WAS MISSING)
DEFINITIONS['corporate-standard-operating-procedure-sop-deployment'] = (id) => {
  const prop = `<rect x="6" y="10" width="42" height="48" rx="4" fill="#ffffff" stroke="#4338ca" stroke-width="2"/><circle cx="27" cy="22" r="8" fill="#ffd166" stroke="#4338ca" stroke-width="1.5"/><text x="27" y="25" fill="#4338ca" font-size="6" font-weight="900" text-anchor="middle">SOP</text><line x1="12" y1="36" x2="42" y2="36" stroke="#4338ca" stroke-width="2"/><line x1="12" y1="44" x2="34" y2="44" stroke="#94a3b8" stroke-width="1.5"/>`;
  return makeInspectorHero(id, ['#4338ca', '#ffd166', '#3730a3'], { shirt: '#3730a3', skin: '#fcd34d', hair: '#1e1b4b' }, prop, { text: 'CORP SOP', color: '#ffd166', border: '#ffd166' });
};

// 92. Incident Management & Operational Escalation Engineering (WAS MISSING)
DEFINITIONS['incident-management-operational-escalation-engineering'] = (id) => {
  const scr = `<polygon points="16,2 28,22 4,22" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/><text x="16" y="19" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">!</text>`;
  return makeDeskHero(id, ['#dc2626', '#f97316', '#b91c1c'], { shirt: '#991b1b', skin: '#fed7aa', hair: '#0f172a', headset: true }, scr, { text: 'INCIDENTS', color: '#ef4444', border: '#ef4444' });
};

// 93. Agile Scaling Frameworks for Cross-Departmental Work (WAS MISSING)
DEFINITIONS['agile-scaling-frameworks-for-cross-departmental-work'] = (id) => {
  return makePointerHero(id, ['#06b6d4', '#7c3aed', '#3b82f6'], { shirt: '#0284c7', skin: '#fed7aa', hair: '#1e1b4b' },
    [{ text: 'Squad A', bg: '#ffd166' }, { text: 'Tribe Synch', bg: '#38bdf8' }, { text: 'Release Train', bg: '#22c55e' }],
    { text: 'AGILE SCALE', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['third-party-logistics-3pl-vendor-performance-auditing'] = (id) => {
  const prop = `<rect x="6" y="12" width="44" height="42" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><text x="28" y="24" fill="#0f172a" font-size="7" font-weight="900" text-anchor="middle">3PL AUDIT</text><rect x="12" y="32" width="20" height="4" fill="#22c55e"/><rect x="12" y="40" width="14" height="4" fill="#38bdf8"/>`;
  return makeInspectorHero(id, ['#0284c7', '#059669', '#10b981'], { shirt: '#0369a1', skin: '#fcd34d', hair: '#0f172a' }, prop, { text: '3PL AUDIT', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['enterprise-assets-inventory-valuation-methodologies'] = (id) => {
  const scr = `<rect x="4" y="4" width="24" height="14" rx="2" fill="#ffd166" stroke="#0f172a" stroke-width="1.2"/><text x="16" y="14" fill="#0f172a" font-size="9" font-weight="900" text-anchor="middle">&dollar;&dollar;</text><line x1="4" y1="20" x2="28" y2="20" stroke="#22c55e" stroke-width="2"/>`;
  return makeDeskHero(id, ['#f59e0b', '#10b981', '#0284c7'], { shirt: '#d97706', skin: '#fed7aa', hair: '#1e293b' }, scr, { text: 'VALUATION', color: '#ffd166', border: '#ffd166' });
};

// 96. Predictive Capacity Planning & Workforce Operations (WAS MISSING)
DEFINITIONS['predictive-capacity-planning-workforce-operations'] = (id) => {
  const scr = `<path d="M 2,18 Q 16,2 30,18" stroke="#38bdf8" stroke-width="2.5" fill="none"/><line x1="16" y1="2" x2="16" y2="18" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="2,2"/><text x="16" y="22" fill="#ffffff" font-size="5" font-weight="800">FTE 100%</text>`;
  return makeDeskHero(id, ['#2563eb', '#f59e0b', '#1e40af'], { shirt: '#1d4ed8', skin: '#fcd34d', hair: '#1e1b4b', glasses: true }, scr, { text: 'WORKFORCE', color: '#38bdf8', border: '#38bdf8' });
};

DEFINITIONS['green-supply-chain-carbon-neutral-operations-basics'] = (id) => {
  const prop = `<circle cx="28" cy="28" r="16" fill="#dcfce7" stroke="#10b981" stroke-width="2.5"/><text x="28" y="32" fill="#059669" font-size="8" font-weight="900" text-anchor="middle">CO₂ 0</text><path d="M 20,46 Q 28,42 36,46" stroke="#10b981" stroke-width="2" fill="none"/>`;
  return makeInspectorHero(id, ['#10b981', '#059669', '#3b82f6'], { shirt: '#047857', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'NET-ZERO', color: '#10b981', border: '#10b981' });
};

DEFINITIONS['corporate-relocation-logistics-infrastructure-set-up'] = (id) => {
  const eq = `<rect x="6" y="16" width="40" height="30" rx="3" fill="#ffd166" stroke="#0f172a" stroke-width="2"/><line x1="6" y1="31" x2="46" y2="31" stroke="#d97706" stroke-width="2"/><circle cx="26" cy="31" r="5" fill="#0f172a"/>`;
  return makeSiteHero(id, ['#f59e0b', '#ea580c', '#0284c7'], { skin: '#fcd34d', hat: '#ffd166', vest: '#ea580c' }, eq, { text: 'RELOCATION', color: '#f59e0b', border: '#f59e0b' });
};

DEFINITIONS['digital-workspace-optimization-automation-for-admin-teams'] = (id) => {
  const prop = `<rect x="6" y="12" width="40" height="40" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="2"/><circle cx="26" cy="32" r="10" fill="#a855f7"/><polygon points="26,26 31,35 21,35" fill="#ffffff"/>`;
  return makeInspectorHero(id, ['#7c3aed', '#a855f7', '#06b6d4'], { shirt: '#6d28d9', skin: '#fed7aa', hair: '#1e1b4b' }, prop, { text: 'ADMIN BOT', color: '#a855f7', border: '#a855f7' });
};

DEFINITIONS['crisis-operations-management-business-stabilization'] = (id) => {
  const prop = `<path d="M 26,10 L 44,18 L 44,34 C 44,44 26,52 26,52 C 26,52 8,44 8,34 L 8,18 Z" fill="#ef4444" stroke="#ffffff" stroke-width="2"/><path d="M 20,28 L 26,34 L 34,22" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>`;
  return makeInspectorHero(id, ['#b91c1c', '#dc2626', '#10b981'], { shirt: '#991b1b', skin: '#fed7aa', hair: '#0f172a' }, prop, { text: 'CRISIS OPS', color: '#ffd166', border: '#ffd166' });
};

DEFINITIONS['problemsolvingcertification'] = (id) => {
  const prop = `<circle cx="26" cy="20" r="12" fill="#ffd166" stroke="#0f172a" stroke-width="2"/><polygon points="26,8 24,14 28,14" fill="#ffffff"/><circle cx="26" cy="44" r="8" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5"/><text x="26" y="47" fill="#ffffff" font-size="6" font-weight="900" text-anchor="middle">SOLVED</text>`;
  return makeInspectorHero(id, ['#f59e0b', '#d97706', '#22c55e'], { shirt: '#d97706', skin: '#fcd34d', hair: '#1e1b4b' }, prop, { text: 'PROBLEM SOLVER', color: '#ffd166', border: '#ffd166' });
};






  window.getCourseClipart = function(courseId, category, title) {
    const safeId = (courseId || 'c').replace(/[^a-zA-Z0-9_-]/g, '');

    // 1. Direct match from the 101 handcrafted character library
    if (MASTER_CLIS[courseId]) {
      return MASTER_CLIS[courseId](safeId);
    }

    // Direct match with stripped spaces or dashes
    const trimmed = (courseId || '').trim();
    if (MASTER_CLIS[trimmed]) {
      return MASTER_CLIS[trimmed](safeId);
    }

    // Default character: Generative AI
    return MASTER_CLIS['generative-ai-prompt-engineering-for-enterprise-workflows'](safeId);
  };

  function initCoursePageCliparts() {
    const cards = document.querySelectorAll('.course-grid-card');
    if (!cards || cards.length === 0) return;

    cards.forEach(function(card) {
      const id = card.id;
      const cat = card.getAttribute('data-category') || 'engineering';
      const titleEl = card.querySelector('.course-card-title a') || card.querySelector('.course-card-title');
      const title = titleEl ? titleEl.textContent.trim() : id;
      const wrapper = card.querySelector('.clipart-art-wrapper');

      if (wrapper && window.getCourseClipart) {
        wrapper.innerHTML = window.getCourseClipart(id, cat, title);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCoursePageCliparts);
  } else {
    initCoursePageCliparts();
  }
})();
