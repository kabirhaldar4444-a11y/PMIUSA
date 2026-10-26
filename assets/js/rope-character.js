/**
 * Live Continuous Rope with 3D Young Climbing Character on Scroll (Course Catalogue)
 * - DESKTOP (>= 1100px): Continuous unbroken 3D rope in the left gutter
 * - MOBILE & TABLET (< 1100px): Sleek Floating Progress Mascot (FAB) in bottom-left
 *     * ZERO rope slicing through course cards!
 *     * Circular scroll progress ring tracking 101 programs progress
 *     * 100% touch-safe & content-friendly
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
        <!-- Top Anchor Mount (Desktop Only) -->
        <div class="rope-anchor-plate" id="ropeAnchorPlate">
          <div class="rope-anchor-bracket">
            <span class="anchor-bolt"></span>
            <span class="anchor-bolt"></span>
          </div>
          <div class="rope-anchor-carabiner"></div>
        </div>

        <!-- Continuous Unbroken 3D Live Rope (Desktop Only) -->
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
              <feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-opacity="0.3"/>
            </filter>
            <!-- 3D Braided rope fiber texture -->
            <pattern id="ropeBraids" width="8" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
              <line x1="0" y1="0" x2="8" y2="0" stroke="#78350f" stroke-width="2.5" />
              <line x1="0" y1="3" x2="8" y2="3" stroke="#fef3c7" stroke-width="1.2" />
              <line x1="0" y1="6" x2="8" y2="6" stroke="#d97706" stroke-width="2.5" />
            </pattern>
          </defs>

          <!-- Single UNBROKEN continuous rope paths from top anchor to bottom knot -->
          <path id="ropePathShadow" fill="none" stroke="rgba(15, 23, 42, 0.22)" stroke-width="7" stroke-linecap="round"/>
          <path id="ropePathBase" fill="none" stroke="url(#ropeCoreGrad)" stroke-width="5.5" stroke-linecap="round"/>
          <path id="ropePathPattern" fill="none" stroke="url(#ropeBraids)" stroke-width="4.2" stroke-linecap="round" opacity="0.85"/>
          <path id="ropePathHighlight" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

        <!-- Mobile Circular Progress Ring (Mobile & Tablet Only) -->
        <svg class="rope-mobile-progress" id="ropeMobileProgress" viewBox="0 0 62 62">
          <circle cx="31" cy="31" r="27" fill="none" stroke="rgba(20, 128, 221, 0.16)" stroke-width="3" />
          <circle id="girlMascotProgFill" cx="31" cy="31" r="27" fill="none" stroke="#1480dd" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="169.65" stroke-dashoffset="169.65" transform="rotate(-90 31 31)" />
        </svg>

        <!-- Sliding 3D Character Carriage -->
        <div class="rope-character-carriage" id="ropeCharacterCarriage">
          <!-- Speed Wind Streaks (Desktop Only) -->
          <span class="speed-wind-streak streak-1"></span>
          <span class="speed-wind-streak streak-2"></span>
          <span class="speed-wind-streak streak-3"></span>

          <!-- Interactive Speech Bubble -->
          <div class="rope-speech-bubble" id="ropeSpeechBubble">
            <span class="bubble-avatar-badge" id="bubbleEmoji">🎒</span>
            <p class="bubble-text-content" id="bubbleText">Hey! 101 Programs waiting for you!</p>
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

          <!-- Back to Top Mini Button (Desktop Only) -->
          <button type="button" class="rope-back-to-top-btn" id="ropeBackToTop" title="Scroll to top of courses">
            <i class="fa-solid fa-arrow-up"></i> Top
          </button>
        </div>

        <!-- Bottom Safety Knot (Desktop Only) -->
        <div class="rope-bottom-knot" id="ropeBottomKnot"></div>
      `;
      document.body.appendChild(container);
    }

    // Elements
    const carriage = document.getElementById('ropeCharacterCarriage');
    const anchorPlate = document.getElementById('ropeAnchorPlate');
    const bottomKnot = document.getElementById('ropeBottomKnot');
    const progFill = document.getElementById('girlMascotProgFill');
    const eyelidLeft = document.getElementById('eyeLeft');
    const eyelidRight = document.getElementById('eyeRight');
    const bubble = document.getElementById('ropeSpeechBubble');
    const bubbleEmoji = document.getElementById('bubbleEmoji');
    const bubbleText = document.getElementById('bubbleText');
    const backToTopBtn = document.getElementById('ropeBackToTop');
    const pathShadow = document.getElementById('ropePathShadow');
    const pathBase = document.getElementById('ropePathBase');
    const pathPattern = document.getElementById('ropePathPattern');
    const pathHighlight = document.getElementById('ropePathHighlight');
    const controlsAnchor = document.querySelector('.controls-rope-anchor');

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
      if (eyelidLeft) eyelidLeft.classList.add('is-closed');
      setTimeout(() => {
        if (eyelidLeft) eyelidLeft.classList.remove('is-closed');
      }, 340);
    }

    function scheduleBlinkLoop() {
      const nextDelay = 2600 + Math.random() * 2200;
      setTimeout(() => {
        triggerBlink();

        if (Math.random() < 0.28) {
          setTimeout(() => triggerBlink(90), 220);
        }

        scheduleBlinkLoop();
      }, nextDelay);
    }
    scheduleBlinkLoop();

    // ─────────────────────────────────────────────────────────────
    // 2. Interactive Speech Engine & Course Tips
    // ─────────────────────────────────────────────────────────────
    const courseMilestones = [
      { progress: 0.00, emoji: '🎒', text: '101 Accredited Programs' },
      { progress: 0.15, emoji: '🤖', text: 'Explore AI & Cloud Tech' },
      { progress: 0.35, emoji: '🏗️', text: 'Project Management & BIM' },
      { progress: 0.60, emoji: '⚡', text: 'Executive Credentials' },
      { progress: 0.85, emoji: '🌟', text: 'Find Your Dream Program' }
    ];

    let lastMilestone = -1;
    let bubbleTimer = null;
    let isUserHovering = false;
    let isClickBouncing = false;

    function showSpeech(emoji, text, autoDismiss = true) {
      if (!bubble || !bubbleEmoji || !bubbleText) return;
      bubbleEmoji.textContent = emoji;
      bubbleText.textContent = text;
      bubble.classList.add('is-active');

      if (bubbleTimer) clearTimeout(bubbleTimer);
      if (autoDismiss) {
        const dismissTime = window.innerWidth < 1100 ? 2600 : 3800;
        bubbleTimer = setTimeout(() => {
          if (!isUserHovering) {
            bubble.classList.remove('is-active');
          }
        }, dismissTime);
      }
    }

    // Scroll to Top action
    function scrollToCoursesTop() {
      const targetElement = controlsWrapper || coursesGrid;
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - 70;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Click handler for mobile container or desktop carriage
    if (container) {
      container.addEventListener('click', (e) => {
        if (window.innerWidth < 1100) {
          e.stopPropagation();
          triggerWink();
          showSpeech('⬆️', 'Zipping back to top!');
          scrollToCoursesTop();
        }
      });
    }

    // Interactive Click on Controls Anchor
    if (controlsAnchor) {
      controlsAnchor.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToCoursesTop();
        triggerWink();
        showSpeech('🧗‍♀️', 'Climbing through 101 top courses!');
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 3. Desktop Continuous 3D Live Rope (Locked with Hand)
    // ─────────────────────────────────────────────────────────────
    function drawContinuousRope(charY) {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1100;
      const defaultW = isMobile ? 52 : (isTablet ? 90 : 160);
      const defaultLeft = isMobile ? 5 : (isTablet ? 5 : 10);

      const carriageWidth = (carriage && carriage.offsetWidth > 10) ? carriage.offsetWidth : defaultW;
      const carriageLeft = (carriage && carriage.offsetLeft > 0) ? carriage.offsetLeft : defaultLeft;
      const viewportHeight = window.innerHeight;
      
      const anchorX = carriageLeft + (carriageWidth * 0.52);
      const charHandY = charY + (carriageWidth * 0.18);
      
      const topAnchorY = 24;
      const bottomKnotY = viewportHeight - 20;

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
    // 4. Scroll Tracking & Physics Engine
    // ─────────────────────────────────────────────────────────────
    const initCharY = window.innerWidth < 768 ? 95 : 110;
    let targetProgress = 0;
    let currentY = initCharY;
    let targetY = initCharY;
    let currentTilt = 0;
    let velocity = 0;
    let isSectionVisible = true;

    // Immediate initial draw
    if (carriage) {
      carriage.style.transform = `translate3d(0, ${initCharY}px, 0)`;
    }
    drawContinuousRope(initCharY);

    function updateTargetProgress() {
      const vw = window.innerWidth;
      const isMobile = vw < 1100;

      const scrollY = window.scrollY || window.pageYOffset;
      const targetElement = controlsWrapper || coursesGrid;
      if (!targetElement) return;

      const sectionRect = targetElement.getBoundingClientRect();
      const sectionTop = scrollY + sectionRect.top;
      
      const gridRect = coursesGrid ? coursesGrid.getBoundingClientRect() : sectionRect;
      const sectionBottom = scrollY + gridRect.bottom;
      const sectionTotalHeight = sectionBottom - sectionTop;

      const viewportHeight = window.innerHeight;

      // Visibility triggers (Visible from top of page through course listings)
      const startTrigger = 0;
      const endTrigger = sectionBottom + 250;

      if (scrollY <= endTrigger) {
        if (!isSectionVisible) {
          isSectionVisible = true;
          container.classList.remove('is-hidden');
          showSpeech('🎒', isMobile ? '101 Programs' : '101 Accredited Programs to explore', true);
        }

        const scrollDistance = scrollY - (sectionTop - 80);
        const maxScrollDistance = sectionTotalHeight - (viewportHeight * 0.4);
        const progress = Math.max(0, Math.min(1, scrollDistance / Math.max(1, maxScrollDistance)));
        targetProgress = progress;

        // Active milestone feedback
        let activeMilestone = 0;
        for (let i = courseMilestones.length - 1; i >= 0; i--) {
          if (progress >= courseMilestones[i].progress) {
            activeMilestone = i;
            break;
          }
        }
        if (activeMilestone !== lastMilestone && !isUserHovering) {
          lastMilestone = activeMilestone;
          const m = courseMilestones[activeMilestone];
          showSpeech(m.emoji, m.text);
        }
      } else {
        if (isSectionVisible) {
          isSectionVisible = false;
          container.classList.add('is-hidden');
        }
      }

      // ── Responsive Vertical Gutter Slide (ALL SCREENS) ──
      let trackMinY = 110;
      let trackMaxY = viewportHeight - 185;
      if (vw < 768) {
        trackMinY = 95;
        trackMaxY = viewportHeight - 85;
      } else if (vw < 1100) {
        trackMinY = 105;
        trackMaxY = viewportHeight - 130;
      }
      targetY = trackMinY + targetProgress * (trackMaxY - trackMinY);
    }

    // ─────────────────────────────────────────────────────────────
    // 5. Physics Animation Loop (60 FPS requestAnimationFrame)
    // ─────────────────────────────────────────────────────────────
    let lastTime = performance.now();
    function animatePhysics(now) {
      const delta = Math.min(32, now - lastTime);
      lastTime = now;

      if (isSectionVisible) {
        const dy = targetY - currentY;
        velocity = dy * 0.088;
        currentY += velocity;

        if (Math.abs(velocity) > 4.5) {
          container.classList.add('is-speeding');
        } else {
          container.classList.remove('is-speeding');
        }

        let targetTilt = 0;
        if (velocity > 0.4) {
          targetTilt += Math.min(12, velocity * 1.5);
        } else if (velocity < -0.4) {
          targetTilt += Math.max(-10, velocity * 1.5);
        }

        if (Math.abs(velocity) < 0.25 && !isClickBouncing) {
          targetTilt += Math.sin(now * 0.0022) * 2.0;
        }

        currentTilt += (targetTilt - currentTilt) * 0.12;

        const bounceOffset = isClickBouncing ? Math.sin(now * 0.016) * 9 : 0;
        if (carriage) {
          carriage.style.transform = `translate3d(0, ${(currentY + bounceOffset).toFixed(2)}px, 0) rotate(${currentTilt.toFixed(2)}deg)`;
        }

        drawContinuousRope(currentY + bounceOffset);
      }

      requestAnimationFrame(animatePhysics);
    }

    // Event Listeners
    window.addEventListener('scroll', updateTargetProgress, { passive: true });
    window.addEventListener('resize', () => {
      updateTargetProgress();
      if (isSectionVisible) {
        drawContinuousRope(currentY);
      }
    }, { passive: true });

    // Interactive Hover: Playful wink & greeting (Desktop)
    carriage.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 1100) {
        isUserHovering = true;
        triggerWink();
        showSpeech('😉', "Hey there! I'm your course climbing buddy! 🧗‍♀️", false);
      }
    });

    carriage.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 1100) {
        isUserHovering = false;
        if (bubbleTimer) clearTimeout(bubbleTimer);
        bubbleTimer = setTimeout(() => {
          bubble.classList.remove('is-active');
        }, 1500);
      }
    });

    // Interactive Click: Fun Spring Bounce & double blink (Desktop)
    carriage.addEventListener('click', (e) => {
      if (window.innerWidth >= 1100) {
        if (e.target.closest('#ropeBackToTop')) return;
        isClickBouncing = true;
        triggerBlink(160);
        showSpeech('⚡', "Wheee! Let's explore more courses!", false);
        setTimeout(() => {
          isClickBouncing = false;
        }, 650);
      }
    });

    // Back to top button (Desktop)
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrollToCoursesTop();
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
