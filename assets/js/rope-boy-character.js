/**
 * Live Continuous Rope with 3D Young Boy Climbing Character (Syllabus Pages)
 * Positioned on the LEFT SIDE of the syllabus
 * - Single unbroken continuous climbing rope (100% connected with character hand)
 * - Realistic 3D Pixar/Blender Explorer Boy Render
 * - Lifelike natural eye blinking (human timing + double blinks)
 * - Dynamic rappelling physics (tilt, momentum lerp, idle sway, breathing)
 * - Interactive syllabus progress tracking & module feedback
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
        <!-- Top Anchor Mount -->
        <div class="rope-boy-anchor-plate">
          <div class="rope-boy-anchor-bracket">
            <span class="rope-boy-anchor-bolt"></span>
            <span class="rope-boy-anchor-bolt"></span>
          </div>
          <div class="rope-boy-anchor-carabiner"></div>
        </div>

        <!-- Continuous Unbroken 3D Live Rope -->
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
              <feDropShadow dx="2.5" dy="3.5" stdDeviation="3" flood-opacity="0.32"/>
            </filter>
            <!-- 3D Braided rope fiber texture matching mountaineering climbing rope -->
            <pattern id="boyRopeBraids" width="8" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
              <line x1="0" y1="0" x2="8" y2="0" stroke="#451a03" stroke-width="2.5" />
              <line x1="0" y1="3" x2="8" y2="3" stroke="#fef08a" stroke-width="1.2" />
              <line x1="0" y1="6" x2="8" y2="6" stroke="#b45309" stroke-width="2.5" />
            </pattern>
          </defs>

          <!-- Single UNBROKEN continuous rope paths from top anchor to bottom knot -->
          <path id="boyRopePathShadow" fill="none" stroke="rgba(15, 23, 42, 0.25)" stroke-width="7.5" stroke-linecap="round"/>
          <path id="boyRopePathBase" fill="none" stroke="url(#boyRopeCoreGrad)" stroke-width="6" stroke-linecap="round"/>
          <path id="boyRopePathPattern" fill="none" stroke="url(#boyRopeBraids)" stroke-width="4.8" stroke-linecap="round" opacity="0.9"/>
          <path id="boyRopePathHighlight" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.6" stroke-linecap="round"/>
        </svg>

        <!-- Sliding 3D Character Carriage -->
        <div class="rope-boy-carriage" id="ropeBoyCarriage">
          <!-- Speed Wind Streaks -->
          <span class="boy-speed-wind-streak streak-1"></span>
          <span class="boy-speed-wind-streak streak-2"></span>
          <span class="boy-speed-wind-streak streak-3"></span>

          <!-- Interactive Speech Bubble (Points toward Syllabus on the Right) -->
          <div class="rope-boy-speech-bubble" id="ropeBoySpeechBubble">
            <span class="boy-bubble-avatar-badge" id="boyBubbleEmoji">🎒</span>
            <p class="boy-bubble-text-content" id="boyBubbleText">Exploring the Curriculum!</p>
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

          <!-- Back to Top Mini Button -->
          <button type="button" class="rope-boy-back-to-top-btn" id="ropeBoyBackToTop" title="Scroll to top of syllabus">
            <i class="fa-solid fa-arrow-up"></i> Top
          </button>
        </div>

        <!-- Bottom Safety Knot -->
        <div class="rope-boy-bottom-knot" id="ropeBoyBottomKnot"></div>
      `;
      document.body.appendChild(container);
    }

    // Elements
    const carriage = document.getElementById('ropeBoyCarriage');
    const boyImg = document.getElementById('ropeBoyImg');
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

    // ─────────────────────────────────────────────────────────────
    // 2. Lifelike Blinking Engine (Natural human intervals + double blinks)
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
      // Playful left-eye wink
      if (eyelidLeft) eyelidLeft.classList.add('is-closed');
      setTimeout(() => {
        if (eyelidLeft) eyelidLeft.classList.remove('is-closed');
      }, 340);
    }

    function scheduleBoyBlinkLoop() {
      const nextDelay = 2600 + Math.random() * 2200;
      setTimeout(() => {
        triggerBoyBlink();

        // 28% probability of a realistic quick double-blink
        if (Math.random() < 0.28) {
          setTimeout(() => triggerBoyBlink(95), 230);
        }

        scheduleBoyBlinkLoop();
      }, nextDelay);
    }
    scheduleBoyBlinkLoop();

    // ─────────────────────────────────────────────────────────────
    // 3. Interactive Speech Bubble for Syllabus Tracking
    // ─────────────────────────────────────────────────────────────
    const syllabusTips = [
      { trigger: 0.00, emoji: '🎒', text: 'Hey! Exploring the Full Syllabus!' },
      { trigger: 0.15, emoji: '🚀', text: 'Module 1: Foundations & Architecture!' },
      { trigger: 0.35, emoji: '⚡', text: 'Module 2: Advanced Enterprise Workflows!' },
      { trigger: 0.55, emoji: '🛠️', text: 'Module 3: Hands-on Labs & Live Code!' },
      { trigger: 0.72, emoji: '🌐', text: 'Module 4: Enterprise Production Rollout!' },
      { trigger: 0.88, emoji: '🏆', text: 'Capstone Projects & Global Credentials!' }
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
        bubbleTimeout = setTimeout(() => {
          bubble.classList.remove('is-active');
        }, 4600);
      }
    }

    // Click carriage for playful spring bounce & wink
    carriage.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerBoyWink();
      showSpeechTip('🔥', 'Master this program & advance your career!');
      carriage.style.transform = `${carriage.style.transform} scale(1.15)`;
      setTimeout(() => {
        carriage.style.transform = carriage.style.transform.replace(' scale(1.15)', '');
      }, 250);
    });

    carriage.addEventListener('mouseenter', () => {
      triggerBoyWink();
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showSpeechTip('⬆️', 'Zipping back to syllabus top!');
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 4. Single Unbroken Continuous 3D Live Rope (100% Connected)
    // ─────────────────────────────────────────────────────────────
    function drawContinuousRope(charY, velocity) {
      const containerWidth = container.offsetWidth || 200;
      const vh = window.innerHeight;

      // Exact anchor X line (matches top carabiner, carriage hand pivot, and bottom knot)
      const anchorX = containerWidth > 175 ? 108 : (containerWidth > 140 ? 88 : 70);
      const topAnchorY = 24;
      const bottomKnotY = vh - 20;

      // Hand position on the rope (matches transform-origin 53.7% 13.7%)
      const charHandY = charY + 25;

      // Subtle dynamic tension bow when sliding fast
      const bowX = anchorX + (velocity * 0.45);

      // Single continuous unbroken path from top anchor, through his hand, to bottom knot
      const fullPath = `M ${anchorX} ${topAnchorY} ` +
                       `Q ${bowX} ${(topAnchorY + charHandY) * 0.5} ${anchorX} ${charHandY} ` +
                       `Q ${anchorX} ${(charHandY + bottomKnotY) * 0.5} ${anchorX} ${bottomKnotY}`;

      if (pathShadow) pathShadow.setAttribute('d', fullPath);
      if (pathBase) pathBase.setAttribute('d', fullPath);
      if (pathPattern) pathPattern.setAttribute('d', fullPath);
      if (pathHighlight) pathHighlight.setAttribute('d', fullPath);
    }

    // ─────────────────────────────────────────────────────────────
    // 5. Physics Animation Loop (Lerp + Tilt + Dynamic Tracking)
    // ─────────────────────────────────────────────────────────────
    let currentY = 110;
    let targetY = 110;
    let currentTilt = 0;
    let targetTilt = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let idleTimer = 0;
    let isVisible = false;

    function getSyllabusBounds() {
      const mainCol = document.querySelector('.detail-main-col') || document.querySelector('.detail-layout-container');
      if (!mainCol) return null;
      const rect = mainCol.getBoundingClientRect();
      const docTop = rect.top + window.scrollY;
      const docHeight = rect.height;
      return { docTop, docHeight };
    }

    function updatePhysics() {
      if (window.innerWidth < 1440) {
        if (isVisible) {
          isVisible = false;
          container.classList.remove('is-visible');
        }
        requestAnimationFrame(updatePhysics);
        return;
      }

      const bounds = getSyllabusBounds();
      if (!bounds) {
        requestAnimationFrame(updatePhysics);
        return;
      }

      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate progress through syllabus (0.0 to 1.0)
      const startOffset = Math.max(0, bounds.docTop - vh * 0.35);
      const totalScrollable = Math.max(400, bounds.docHeight - vh * 0.4);
      let progress = (scrollY - startOffset) / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      // Show container when within syllabus viewport
      const shouldBeVisible = scrollY >= (bounds.docTop - vh * 0.7) && scrollY <= (bounds.docTop + bounds.docHeight + 200);

      if (shouldBeVisible !== isVisible) {
        isVisible = shouldBeVisible;
        if (isVisible) {
          container.classList.add('is-visible');
          showSpeechTip('🎒', 'Exploring the Curriculum Modules!', true);
        } else {
          container.classList.remove('is-visible');
        }
      }

      // Map progress to vertical screen slide track
      const trackMinY = 90;
      const trackMaxY = vh - 220;
      targetY = trackMinY + progress * (trackMaxY - trackMinY);

      // Instant velocity calculation
      const instantVelocity = scrollY - lastScrollY;
      lastScrollY = scrollY;
      scrollVelocity = scrollVelocity * 0.82 + instantVelocity * 0.18;

      // Rappel Tilt Physics: Leans back on downward slide, forward on upward slide
      targetTilt = Math.max(-12, Math.min(12, scrollVelocity * 0.6));

      // Fast slide wind streaks
      if (Math.abs(scrollVelocity) > 2.8) {
        carriage.classList.add('is-fast-sliding');
      } else {
        carriage.classList.remove('is-fast-sliding');
      }

      // Smooth Momentum Interpolation (Lerp)
      currentY += (targetY - currentY) * 0.085;
      currentTilt += (targetTilt - currentTilt) * 0.12;

      // Idle Sway & Breathing Bobbing when user stops scrolling
      idleTimer += 0.035;
      let idleSway = 0;
      let idleBob = 0;
      if (Math.abs(scrollVelocity) < 0.25) {
        idleSway = Math.sin(idleTimer * 1.5) * 1.8;
        idleBob = Math.cos(idleTimer * 2.2) * 2.4;
      }

      const finalTilt = currentTilt + idleSway;
      const finalY = currentY + idleBob;

      carriage.style.transform = `translate3d(0, ${finalY.toFixed(2)}px, 0) rotate(${finalTilt.toFixed(2)}deg)`;

      // Continuous unbroken rope rendering (100% connected with character hand)
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

    requestAnimationFrame(updatePhysics);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBoyRope);
  } else {
    initBoyRope();
  }
})();
