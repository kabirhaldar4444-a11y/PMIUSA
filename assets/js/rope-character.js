/**
 * Live Continuous Rope with 3D Young Climbing Character on Scroll
 * - Single unbroken 3D mountaineering rope (zero disconnection)
 * - Lifelike blinking eyes (natural human timing + double blinks)
 * - Organic breathing & posture micro-animations
 * - Cursor gaze tracking & dynamic rappelling physics
 */

(function () {
  'use strict';

  function initLiveRope() {
    const coursesGrid = document.getElementById('coursesGrid');
    const controlsWrapper = document.querySelector('.course-controls-wrapper');
    if (!coursesGrid && !controlsWrapper) return;

    let container = document.getElementById('liveRopeContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'liveRopeContainer';
      container.className = 'live-rope-container';
      container.setAttribute('aria-hidden', 'true');
      container.innerHTML = `
        <!-- Top Anchor Mount -->
        <div class="rope-anchor-plate">
          <div class="rope-anchor-bracket">
            <span class="anchor-bolt"></span>
            <span class="anchor-bolt"></span>
          </div>
          <div class="rope-anchor-carabiner"></div>
        </div>

        <!-- Continuous Unbroken 3D Live Rope -->
        <svg class="live-rope-svg" id="liveRopeSvg">
          <defs>
            <linearGradient id="ropeCoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#78350f" />
              <stop offset="30%" stop-color="#b45309" />
              <stop offset="60%" stop-color="#d97706" />
              <stop offset="85%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#78350f" />
            </linearGradient>
            <filter id="ropeShadow" x="-50%" y="-10%" width="200%" height="120%">
              <feDropShadow dx="3" dy="4" stdDeviation="3.5" flood-opacity="0.3"/>
            </filter>
            <!-- 3D Braided rope fiber texture -->
            <pattern id="ropeBraids" width="8" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
              <line x1="0" y1="0" x2="8" y2="0" stroke="#78350f" stroke-width="2.5" />
              <line x1="0" y1="3" x2="8" y2="3" stroke="#fef3c7" stroke-width="1.2" />
              <line x1="0" y1="6" x2="8" y2="6" stroke="#d97706" stroke-width="2.5" />
            </pattern>
          </defs>

          <!-- Single UNBROKEN continuous rope paths from top anchor to bottom knot -->
          <path id="ropePathShadow" fill="none" stroke="rgba(15, 23, 42, 0.22)" stroke-width="8" stroke-linecap="round"/>
          <path id="ropePathBase" fill="none" stroke="url(#ropeCoreGrad)" stroke-width="6.5" stroke-linecap="round"/>
          <path id="ropePathPattern" fill="none" stroke="url(#ropeBraids)" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
          <path id="ropePathHighlight" fill="none" stroke="rgba(255, 255, 255, 0.55)" stroke-width="1.8" stroke-linecap="round"/>
        </svg>

        <!-- Sliding 3D Character Carriage -->
        <div class="rope-character-carriage" id="ropeCharacterCarriage">
          <!-- Speed Wind Streaks -->
          <span class="speed-wind-streak streak-1"></span>
          <span class="speed-wind-streak streak-2"></span>
          <span class="speed-wind-streak streak-3"></span>

          <!-- Interactive Speech Bubble -->
          <div class="rope-speech-bubble" id="ropeSpeechBubble">
            <span class="bubble-avatar-badge" id="bubbleEmoji">🎒</span>
            <p class="bubble-text-content" id="bubbleText">Hey! 101 Courses waiting for you!</p>
          </div>

          <!-- Organic Breathing Body Animator -->
          <div class="character-body-animator" id="characterBodyAnimator">
            <!-- 3D Character Image -->
            <img src="assets/images/rope_character.png" alt="3D Student Character Rappelling on Rope" class="rope-character-avatar" id="ropeCharacterImg" draggable="false" />

            <!-- Lifelike Animated Eyelids (Blinking) -->
            <div class="character-eye eye-left" id="eyeLeft">
              <div class="character-eyelid" id="eyelidLeft"></div>
            </div>
            <div class="character-eye eye-right" id="eyeRight">
              <div class="character-eyelid" id="eyelidRight"></div>
            </div>
          </div>

          <!-- Back to Top Mini Button -->
          <button type="button" class="rope-back-to-top-btn" id="ropeBackToTop" title="Scroll to top of courses">
            <i class="fa-solid fa-arrow-up"></i> Top
          </button>
        </div>

        <!-- Bottom Safety Knot -->
        <div class="rope-bottom-knot" id="ropeBottomKnot"></div>
      `;
      document.body.appendChild(container);
    }

    // Elements
    const carriage = document.getElementById('ropeCharacterCarriage');
    const eyelidLeft = document.getElementById('eyelidLeft');
    const eyelidRight = document.getElementById('eyelidRight');
    const bubble = document.getElementById('ropeSpeechBubble');
    const bubbleEmoji = document.getElementById('bubbleEmoji');
    const bubbleText = document.getElementById('bubbleText');
    const backToTopBtn = document.getElementById('ropeBackToTop');
    const pathShadow = document.getElementById('ropePathShadow');
    const pathBase = document.getElementById('ropePathBase');
    const pathPattern = document.getElementById('ropePathPattern');
    const pathHighlight = document.getElementById('ropePathHighlight');

    // ─────────────────────────────────────────────────────────────
    // 1. Lifelike Blinking Engine (Natural human intervals + double blinks)
    // ─────────────────────────────────────────────────────────────
    let isBlinking = false;
    function triggerBlink(duration = 110) {
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

    function triggerWink() {
      // Playful left-eye wink
      if (eyelidLeft) eyelidLeft.classList.add('is-closed');
      setTimeout(() => {
        if (eyelidLeft) eyelidLeft.classList.remove('is-closed');
      }, 340);
    }

    function scheduleBlinkLoop() {
      // Normal human blinking every 2.8s - 4.5s
      const nextDelay = 2600 + Math.random() * 2200;
      setTimeout(() => {
        triggerBlink();

        // 28% chance of a realistic quick double-blink
        if (Math.random() < 0.28) {
          setTimeout(() => triggerBlink(95), 240);
        }

        scheduleBlinkLoop();
      }, nextDelay);
    }
    scheduleBlinkLoop();

    // ─────────────────────────────────────────────────────────────
    // 2. Cursor Gaze Tracking (Eyes & head follow user mouse subtly)
    // ─────────────────────────────────────────────────────────────
    let mouseGazeTilt = 0;
    window.addEventListener('mousemove', (e) => {
      if (!isSectionVisible || !carriage) return;
      const rect = carriage.getBoundingClientRect();
      const charCenterX = rect.left + rect.width * 0.5;
      const charCenterY = rect.top + rect.height * 0.25;

      const deltaX = e.clientX - charCenterX;
      const deltaY = e.clientY - charCenterY;

      // Subtle tilt toward mouse (-4deg to +4deg)
      const targetGaze = Math.max(-4, Math.min(4, (deltaX / window.innerWidth) * 8));
      mouseGazeTilt += (targetGaze - mouseGazeTilt) * 0.05;
    }, { passive: true });

    // ─────────────────────────────────────────────────────────────
    // 3. Speech & Interactive State
    // ─────────────────────────────────────────────────────────────
    const speeches = [
      { max: 0.18, emoji: '🎒', text: 'Hey! 101 Programs waiting for you!' },
      { max: 0.40, emoji: '🤖', text: 'GenAI, Copilot & Prompt Engineering!' },
      { max: 0.65, emoji: '🏗️', text: 'Agile & BIM Architecture tracks!' },
      { max: 0.88, emoji: '💻', text: 'Full Stack, Cloud & DevOps!' },
      { max: 1.00, emoji: '🌟', text: 'Awesome! Explored all 101 courses!' }
    ];

    let lastSpeechIndex = -1;
    let bubbleTimer = null;
    let isUserHovering = false;
    let isClickBouncing = false;

    function showSpeech(emoji, text, autoDismiss = true) {
      if (bubbleEmoji) bubbleEmoji.textContent = emoji;
      if (bubbleText) bubbleText.textContent = text;
      bubble.classList.add('is-active');

      if (bubbleTimer) clearTimeout(bubbleTimer);
      if (autoDismiss && !isUserHovering) {
        bubbleTimer = setTimeout(() => {
          if (!isUserHovering) {
            bubble.classList.remove('is-active');
          }
        }, 3600);
      }
    }

    // ─────────────────────────────────────────────────────────────
    // 4. Scroll Tracking & Physics Engine
    // ─────────────────────────────────────────────────────────────
    let targetProgress = 0;
    let currentY = 100;
    let targetY = 100;
    let currentTilt = 0;
    let velocity = 0;
    let isSectionVisible = false;

    function updateTargetProgress() {
      const scrollY = window.scrollY || window.pageYOffset;
      const targetElement = controlsWrapper || coursesGrid;
      if (!targetElement) return;

      const sectionRect = targetElement.getBoundingClientRect();
      const sectionTop = scrollY + sectionRect.top;
      
      const gridRect = coursesGrid ? coursesGrid.getBoundingClientRect() : sectionRect;
      const sectionBottom = scrollY + gridRect.bottom;
      const sectionTotalHeight = sectionBottom - sectionTop;

      const viewportHeight = window.innerHeight;

      // Visibility triggers
      const startTrigger = sectionTop - viewportHeight * 0.4;
      const endTrigger = sectionBottom - 50;

      if (scrollY >= startTrigger && scrollY <= endTrigger) {
        if (!isSectionVisible) {
          isSectionVisible = true;
          container.classList.add('is-visible');
          showSpeech('🎒', '101 Accredited Programs to explore!', true);
        }

        const scrollDistance = scrollY - (sectionTop - 80);
        const maxScrollDistance = sectionTotalHeight - (viewportHeight * 0.5);
        const progress = Math.max(0, Math.min(1, scrollDistance / Math.max(1, maxScrollDistance)));
        targetProgress = progress;

        const minY = 80;
        const maxY = Math.max(minY + 50, viewportHeight - 215);
        targetY = minY + (progress * (maxY - minY));

        const speechObj = speeches.find(s => progress <= s.max) || speeches[speeches.length - 1];
        const speechIdx = speeches.indexOf(speechObj);
        if (speechIdx !== lastSpeechIndex && !isUserHovering) {
          lastSpeechIndex = speechIdx;
          showSpeech(speechObj.emoji, speechObj.text, true);
        }

      } else {
        if (isSectionVisible) {
          isSectionVisible = false;
          container.classList.remove('is-visible');
        }
      }
    }

    // ─────────────────────────────────────────────────────────────
    // 5. Continuous Unbroken Live Rope Drawing
    // ─────────────────────────────────────────────────────────────
    function drawContinuousRope(charY) {
      const containerWidth = container.offsetWidth || 200;
      const viewportHeight = window.innerHeight;
      
      // Fixed anchor line (matches top carabiner & bottom knot perfectly)
      const anchorX = containerWidth > 150 ? 107 : 77;
      const topAnchorY = 24;
      const bottomKnotY = viewportHeight - 20;

      // Character hand anchor coordinate
      const charRopeX = anchorX + (currentTilt * 0.35);
      const charHandY = charY + 32;

      // Subtle rope tension curve based on sliding velocity
      const bowX = anchorX + (velocity * 0.5);

      // ONE SINGLE UNBROKEN PATH FROM TOP ANCHOR TO BOTTOM KNOT
      // No segments, no gaps, no disconnection!
      const fullPath = `M ${anchorX} ${topAnchorY} ` +
                       `Q ${bowX} ${(topAnchorY + charHandY) * 0.5} ${charRopeX} ${charHandY} ` +
                       `Q ${anchorX} ${(charHandY + bottomKnotY) * 0.5} ${anchorX} ${bottomKnotY}`;

      if (pathShadow) pathShadow.setAttribute('d', fullPath);
      if (pathBase) pathBase.setAttribute('d', fullPath);
      if (pathPattern) pathPattern.setAttribute('d', fullPath);
      if (pathHighlight) pathHighlight.setAttribute('d', fullPath);
    }

    // ─────────────────────────────────────────────────────────────
    // 6. Physics Animation Loop (60 FPS requestAnimationFrame)
    // ─────────────────────────────────────────────────────────────
    let lastTime = performance.now();
    function animatePhysics(now) {
      const delta = Math.min(32, now - lastTime);
      lastTime = now;

      if (isSectionVisible) {
        // Inertia damping
        const dy = targetY - currentY;
        velocity = dy * 0.085;
        currentY += velocity;

        if (Math.abs(velocity) > 4.5) {
          container.classList.add('is-speeding');
        } else {
          container.classList.remove('is-speeding');
        }

        // Dynamic body lean
        let targetTilt = mouseGazeTilt;
        if (velocity > 0.4) {
          targetTilt += Math.min(13, velocity * 1.6); // Lean back when sliding down
        } else if (velocity < -0.4) {
          targetTilt += Math.max(-10, velocity * 1.6); // Lean forward when climbing up
        }

        // Idle gentle sway when stopped
        if (Math.abs(velocity) < 0.2 && !isClickBouncing) {
          targetTilt += Math.sin(now * 0.0022) * 2.2;
        }

        currentTilt += (targetTilt - currentTilt) * 0.12;

        const bounceOffset = isClickBouncing ? Math.sin(now * 0.016) * 9 : 0;
        carriage.style.transform = `translate3d(0, ${currentY + bounceOffset}px, 0) rotate(${currentTilt}deg)`;

        // Draw the 100% continuous, unbroken rope
        drawContinuousRope(currentY + bounceOffset);
      }

      requestAnimationFrame(animatePhysics);
    }

    // Event Listeners
    window.addEventListener('scroll', updateTargetProgress, { passive: true });
    window.addEventListener('resize', updateTargetProgress, { passive: true });

    // Interactive Hover: Playful wink & greeting!
    carriage.addEventListener('mouseenter', () => {
      isUserHovering = true;
      triggerWink();
      showSpeech('😉', "Hey there! I'm your course climbing buddy! 🧗‍♀️", false);
    });

    carriage.addEventListener('mouseleave', () => {
      isUserHovering = false;
      if (bubbleTimer) clearTimeout(bubbleTimer);
      bubbleTimer = setTimeout(() => {
        bubble.classList.remove('is-active');
      }, 1500);
    });

    // Interactive Click: Fun Spring Bounce & double blink
    carriage.addEventListener('click', (e) => {
      if (e.target.closest('#ropeBackToTop')) return;
      
      isClickBouncing = true;
      triggerBlink(160);
      showSpeech('⚡', "Wheee! Let's explore more courses!", false);
      
      setTimeout(() => {
        isClickBouncing = false;
      }, 650);
    });

    // Back to top button
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetElement = controlsWrapper || coursesGrid;
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - 80;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: 'smooth'
          });
        }
      });
    }

    updateTargetProgress();
    requestAnimationFrame(animatePhysics);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLiveRope);
  } else {
    initLiveRope();
  }
})();
