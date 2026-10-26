/**
 * Live Continuous Rope with 3D Young Boy Climbing Character (Course Detail Pages)
 * - DESKTOP (>= 1100px): Continuous unbroken 3D rope in the right gutter
 * - MOBILE & TABLET (< 1100px): Sleek Floating Progress Mascot (FAB) in bottom-right
 *     * ZERO rope slicing through text or cards!
 *     * Circular scroll progress ring tracking curriculum progress
 *     * 100% touch-safe & content-friendly
 */

(function () {
  'use strict';

  function initBoyRope() {
    // Only initialize on course detail / syllabus pages
    const detailMainCol = document.querySelector('.detail-main-col');
    const layoutContainer = document.querySelector('.detail-layout-container');
    if (!detailMainCol && !layoutContainer) return;

    let container = document.getElementById('liveRopeBoyContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'liveRopeBoyContainer';
      container.className = 'live-rope-boy-container';
      container.setAttribute('aria-hidden', 'true');
      container.innerHTML = `
        <!-- Top Anchor Mount (Desktop Only) -->
        <div class="rope-boy-anchor-plate" id="ropeBoyAnchorPlate">
          <div class="rope-boy-anchor-bracket">
            <span class="rope-boy-anchor-bolt"></span>
            <span class="rope-boy-anchor-bolt"></span>
          </div>
          <div class="rope-boy-anchor-carabiner"></div>
        </div>

        <!-- Continuous Unbroken 3D Live Rope (Desktop Only) -->
        <svg class="live-rope-boy-svg" id="liveRopeBoySvg">
          <defs>
            <linearGradient id="boyRopeCoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#451a03" />
              <stop offset="25%" stop-color="#78350f" />
              <stop offset="50%" stop-color="#b45309" />
              <stop offset="75%" stop-color="#d97706" />
              <stop offset="100%" stop-color="#451a03" />
            </linearGradient>
            <filter id="boyRopeShadow" x="-50%" y="-10%" width="200%" height="120%">
              <feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-opacity="0.32"/>
            </filter>
            <!-- 3D Braided rope fiber texture matching mountaineering climbing rope -->
            <pattern id="boyRopeBraids" width="8" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
              <line x1="0" y1="0" x2="8" y2="0" stroke="#451a03" stroke-width="2.5" />
              <line x1="0" y1="3" x2="8" y2="3" stroke="#fef08a" stroke-width="1.2" />
              <line x1="0" y1="6" x2="8" y2="6" stroke="#b45309" stroke-width="2.5" />
            </pattern>
          </defs>

          <!-- Single UNBROKEN continuous rope paths from top anchor to bottom knot -->
          <path id="boyRopePathShadow" fill="none" stroke="rgba(15, 23, 42, 0.22)" stroke-width="6.5" stroke-linecap="round"/>
          <path id="boyRopePathBase" fill="none" stroke="url(#boyRopeCoreGrad)" stroke-width="5.2" stroke-linecap="round"/>
          <path id="boyRopePathPattern" fill="none" stroke="url(#boyRopeBraids)" stroke-width="4.2" stroke-linecap="round" opacity="0.9"/>
          <path id="boyRopePathHighlight" fill="none" stroke="rgba(255, 255, 255, 0.65)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>

        <!-- Mobile Circular Progress Ring (Mobile & Tablet Only) -->
        <svg class="rope-boy-mobile-progress" id="ropeBoyMobileProgress" viewBox="0 0 62 62">
          <circle cx="31" cy="31" r="27" fill="none" stroke="rgba(234, 88, 12, 0.16)" stroke-width="3" />
          <circle id="boyMascotProgFill" cx="31" cy="31" r="27" fill="none" stroke="#ea580c" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="169.65" stroke-dashoffset="169.65" transform="rotate(-90 31 31)" />
        </svg>

        <!-- Sliding 3D Character Carriage -->
        <div class="rope-boy-carriage" id="ropeBoyCarriage">
          <!-- Speed Wind Streaks (Desktop Only) -->
          <span class="boy-speed-wind-streak streak-1"></span>
          <span class="boy-speed-wind-streak streak-2"></span>
          <span class="boy-speed-wind-streak streak-3"></span>

          <!-- Interactive Speech Bubble -->
          <div class="rope-boy-speech-bubble" id="ropeBoySpeechBubble">
            <span class="boy-bubble-avatar-badge" id="boyBubbleEmoji">🎒</span>
            <p class="boy-bubble-text-content" id="boyBubbleText">Exploring Course Curriculum!</p>
          </div>

          <!-- Organic Breathing Body Animator -->
          <div class="boy-body-animator" id="boyBodyAnimator">
            <!-- 3D Realistic Character Image -->
            <img 
              src="assets/images/rope_boy_character.png" 
              alt="3D Boy Character Rappelling on Rope" 
              class="rope-boy-avatar" 
              id="ropeBoyImg" 
              draggable="false" 
            />

            <!-- Lifelike Animated Eyelids (Blinking) -->
            <div class="boy-character-eye eye-left" id="boyEyeLeft">
              <div class="boy-eyelid" id="boyEyelidLeft"></div>
            </div>
            <div class="boy-character-eye eye-right" id="boyEyeRight">
              <div class="boy-eyelid" id="boyEyelidRight"></div>
            </div>
          </div>

          <!-- Back to Top Mini Button (Desktop Only) -->
          <button type="button" class="rope-boy-back-to-top-btn" id="ropeBoyBackToTop" title="Scroll to top of syllabus">
            <i class="fa-solid fa-arrow-up"></i> Top
          </button>
        </div>

        <!-- Bottom Safety Knot (Desktop Only) -->
        <div class="rope-boy-bottom-knot" id="ropeBoyBottomKnot"></div>
      `;
      document.body.appendChild(container);
    }

    // Elements
    const carriage = document.getElementById('ropeBoyCarriage');
    const anchorPlate = document.getElementById('ropeBoyAnchorPlate');
    const bottomKnot = document.getElementById('ropeBoyBottomKnot');
    const progFill = document.getElementById('boyMascotProgFill');
    const eyelidLeft = document.getElementById('boyEyeLeft') ? document.getElementById('boyEyeLeft').querySelector('.boy-eyelid') : null;
    const eyelidRight = document.getElementById('boyEyeRight') ? document.getElementById('boyEyeRight').querySelector('.boy-eyelid') : null;
    const bubble = document.getElementById('ropeBoySpeechBubble');
    const bubbleEmoji = document.getElementById('boyBubbleEmoji');
    const bubbleText = document.getElementById('boyBubbleText');
    const backToTopBtn = document.getElementById('ropeBoyBackToTop');
    const pathShadow = document.getElementById('boyRopePathShadow');
    const pathBase = document.getElementById('boyRopePathBase');
    const pathPattern = document.getElementById('boyRopePathPattern');
    const pathHighlight = document.getElementById('boyRopePathHighlight');
    const syllabusAnchorBadge = document.querySelector('.syllabus-rope-anchor');

    // ─────────────────────────────────────────────────────────────
    // 1. Lifelike Blinking Engine (Natural human intervals + double blinks)
    // ─────────────────────────────────────────────────────────────
    let isBlinking = false;
    function triggerBoyBlink(duration = 110) {
      if (isBlinking) return;
      isBlinking = true;
      if (eyelidLeft) eyelidLeft.classList.add('is-closed');
      if (eyelidRight) eyelidRight.classList.add('is-closed');

      setTimeout(() => {
        if (eyelidLeft) eyelidLeft.classList.remove('is-closed');
        if (eyelidRight) eyelidRight.classList.remove('is-closed');
        isBlinking = false;
      }, duration);
    }

    function triggerBoyWink() {
      if (eyelidLeft) eyelidLeft.classList.add('is-closed');
      setTimeout(() => {
        if (eyelidLeft) eyelidLeft.classList.remove('is-closed');
      }, 340);
    }

    function scheduleBoyBlinkLoop() {
      const nextDelay = 2600 + Math.random() * 2400;
      setTimeout(() => {
        triggerBoyBlink();

        if (Math.random() < 0.25) {
          setTimeout(() => triggerBoyBlink(90), 220);
        }

        scheduleBoyBlinkLoop();
      }, nextDelay);
    }
    scheduleBoyBlinkLoop();

    // ─────────────────────────────────────────────────────────────
    // 2. Interactive Speech Bubble for Syllabus Tracking
    // ─────────────────────────────────────────────────────────────
    const syllabusTips = [
      { trigger: 0.00, emoji: '🎒', text: 'Curriculum Progress Guide' },
      { trigger: 0.18, emoji: '🚀', text: 'Module 1: Core Foundations' },
      { trigger: 0.38, emoji: '⚡', text: 'Module 2: Advanced Workflows' },
      { trigger: 0.58, emoji: '🛠️', text: 'Module 3: Hands-on Labs' },
      { trigger: 0.76, emoji: '🌐', text: 'Module 4: Enterprise Production' },
      { trigger: 0.90, emoji: '🏆', text: 'Capstone & Global Credential' }
    ];

    let lastTipIndex = -1;
    let bubbleTimeout = null;

    function showSpeechTip(emoji, text, autoDismiss = true) {
      if (!bubble || !bubbleEmoji || !bubbleText) return;
      bubbleEmoji.textContent = emoji;
      bubbleText.textContent = text;
      bubble.classList.add('is-active');

      if (bubbleTimeout) clearTimeout(bubbleTimeout);
      if (autoDismiss) {
        const dismissTime = window.innerWidth < 1100 ? 2600 : 4000;
        bubbleTimeout = setTimeout(() => {
          bubble.classList.remove('is-active');
        }, dismissTime);
      }
    }

    // Scroll to Top action
    function scrollToSyllabusTop() {
      const mainCol = document.querySelector('.detail-main-col') || document.querySelector('.detail-layout-container');
      if (mainCol) {
        const topPos = mainCol.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Click handler for mobile container or desktop carriage
    if (container) {
      container.addEventListener('click', (e) => {
        // On mobile/tablet (< 1100px), clicking the floating mascot returns to top
        if (window.innerWidth < 1100) {
          e.stopPropagation();
          triggerBoyWink();
          showSpeechTip('⬆️', 'Zipping back to syllabus top!');
          scrollToSyllabusTop();
        }
      });
    }

    if (carriage) {
      carriage.addEventListener('click', (e) => {
        if (window.innerWidth >= 1100) {
          e.stopPropagation();
          triggerBoyWink();
          showSpeechTip('🔥', 'Master this program & accelerate your career!');
          carriage.style.transform = `${carriage.style.transform} scale(1.15)`;
          setTimeout(() => {
            carriage.style.transform = carriage.style.transform.replace(' scale(1.15)', '');
          }, 220);
        }
      });

      carriage.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1100) {
          triggerBoyWink();
        }
      });
    }

    // Desktop Back to Top Mini Button
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrollToSyllabusTop();
        showSpeechTip('⬆️', 'Zipping back to syllabus top!');
      });
    }

    // Visual Anchor Badge click handler in navigation bar
    if (syllabusAnchorBadge) {
      syllabusAnchorBadge.style.cursor = 'pointer';
      syllabusAnchorBadge.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSyllabusTop();
        triggerBoyWink();
        showSpeechTip('🧗', 'Guiding your curriculum journey!');
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 3. Desktop Continuous 3D Live Rope (Locked with Hand)
    // ─────────────────────────────────────────────────────────────
    function drawContinuousRope(charY, velocity = 0) {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1100;
      const defaultW = isMobile ? 52 : (isTablet ? 90 : 160);
      const defaultLeft = isMobile ? 5 : (isTablet ? 5 : 10);

      const carriageWidth = (carriage && carriage.offsetWidth > 10) ? carriage.offsetWidth : defaultW;
      const carriageLeft = (carriage && carriage.offsetLeft > 0) ? carriage.offsetLeft : defaultLeft;

      // Exact mathematical hand coordinate on the character (53.7% X, 13.7% Y)
      const anchorX = carriageLeft + (carriageWidth * 0.537);
      const charHandY = charY + (carriageWidth * 0.137);

      const vh = window.innerHeight;
      const topAnchorY = 24;
      const bottomKnotY = vh - 20;

      const bowX = anchorX + (velocity * 0.35);

      const fullPath = `M ${anchorX} ${topAnchorY} ` +
                       `Q ${bowX} ${(topAnchorY + charHandY) * 0.5} ${anchorX} ${charHandY} ` +
                       `Q ${anchorX} ${(charHandY + bottomKnotY) * 0.5} ${anchorX} ${bottomKnotY}`;

      if (pathShadow) pathShadow.setAttribute('d', fullPath);
      if (pathBase) pathBase.setAttribute('d', fullPath);
      if (pathPattern) pathPattern.setAttribute('d', fullPath);
      if (pathHighlight) pathHighlight.setAttribute('d', fullPath);

      if (anchorPlate) {
        anchorPlate.style.left = `${anchorX}px`;
        anchorPlate.style.transform = 'translateX(-50%)';
      }
      if (bottomKnot) {
        bottomKnot.style.left = `${anchorX}px`;
        bottomKnot.style.transform = 'translateX(-50%)';
      }
    }

    // ─────────────────────────────────────────────────────────────
    // 4. Physics Animation Loop (Lerp + Tilt + Dynamic Tracking)
    // ─────────────────────────────────────────────────────────────
    const initCharY = window.innerWidth < 768 ? 95 : 110;
    let currentY = initCharY;
    let targetY = initCharY;
    let currentTilt = 0;
    let targetTilt = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let idleTimer = 0;
    let isVisible = true;

    // Immediate initial draw
    if (carriage) {
      carriage.style.transform = `translate3d(0, ${initCharY}px, 0)`;
    }
    drawContinuousRope(initCharY, 0);

    function getSyllabusBounds() {
      const mainCol = document.querySelector('.detail-main-col') || document.querySelector('.detail-layout-container');
      if (!mainCol) return null;
      const rect = mainCol.getBoundingClientRect();
      const docTop = rect.top + window.scrollY;
      const docHeight = rect.height;
      return { docTop, docHeight };
    }

    function updatePhysics() {
      const vw = window.innerWidth;
      const isMobile = vw < 1100;

      const bounds = getSyllabusBounds();
      if (!bounds) {
        requestAnimationFrame(updatePhysics);
        return;
      }

      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate progress through syllabus (0.0 to 1.0)
      const startOffset = Math.max(0, bounds.docTop - vh * 0.45);
      const totalScrollable = Math.max(350, bounds.docHeight - vh * 0.4);
      let progress = (scrollY - startOffset) / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      // Show container from top of page through syllabus and content
      const shouldBeVisible = scrollY <= (bounds.docTop + bounds.docHeight + 300);

      if (shouldBeVisible !== isVisible) {
        isVisible = shouldBeVisible;
        if (isVisible) {
          container.classList.remove('is-hidden');
          showSpeechTip('🎒', isMobile ? 'Curriculum Guide' : 'Exploring Curriculum Modules', true);
        } else {
          container.classList.add('is-hidden');
        }
      }

      // ── Continuous Gutter Rope & Rappelling Physics (ALL SCREENS) ──
      let trackMinY = 110;
      let trackMaxY = vh - 185;
      if (vw < 768) {
        trackMinY = 95;
        trackMaxY = vh - 85;
      } else if (vw < 1100) {
        trackMinY = 105;
        trackMaxY = vh - 130;
      }

      targetY = trackMinY + progress * (trackMaxY - trackMinY);

      const instantVelocity = scrollY - lastScrollY;
      lastScrollY = scrollY;
      scrollVelocity = scrollVelocity * 0.82 + instantVelocity * 0.18;

      targetTilt = Math.max(-10, Math.min(10, scrollVelocity * 0.5));

      if (Math.abs(scrollVelocity) > 2.8) {
        carriage.classList.add('is-fast-sliding');
      } else {
        carriage.classList.remove('is-fast-sliding');
      }

      currentY += (targetY - currentY) * 0.088;
      currentTilt += (targetTilt - currentTilt) * 0.12;

      idleTimer += 0.035;
      let idleSway = 0;
      let idleBob = 0;
      if (Math.abs(scrollVelocity) < 0.25) {
        idleSway = Math.sin(idleTimer * 1.5) * 1.6;
        idleBob = Math.cos(idleTimer * 2.2) * 2.2;
      }

      const finalTilt = currentTilt + idleSway;
      const finalY = currentY + idleBob;

      if (carriage) {
        carriage.style.transform = `translate3d(0, ${finalY.toFixed(2)}px, 0) rotate(${finalTilt.toFixed(2)}deg)`;
      }

      drawContinuousRope(finalY, scrollVelocity);

      // Active Syllabus Module Speech Feedback
      let matchedIndex = 0;
      for (let i = syllabusTips.length - 1; i >= 0; i--) {
        if (progress >= syllabusTips[i].trigger) {
          matchedIndex = i;
          break;
        }
      }

      if (matchedIndex !== lastTipIndex && isVisible) {
        lastTipIndex = matchedIndex;
        const tip = syllabusTips[matchedIndex];
        showSpeechTip(tip.emoji, tip.text);
      }

      requestAnimationFrame(updatePhysics);
    }

    // Window resize handler
    window.addEventListener('resize', () => {
      if (isVisible) {
        drawContinuousRope(currentY, 0);
      }
    }, { passive: true });

    requestAnimationFrame(updatePhysics);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBoyRope);
  } else {
    initBoyRope();
  }
})();
