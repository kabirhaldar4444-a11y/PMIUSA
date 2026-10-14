/* ==========================================================================
   PMIUSA - Main Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Sticky Header
  const header = document.querySelector('.main-header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 80) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }

    lastScrollTop = scrollTop;
  });

  // 2. Mobile Menu Toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navigationMenu = document.querySelector('.navigation-menu-wrapper');
  const dropdownToggles = document.querySelectorAll('.navigation li.dropdown > a');

  if (navbarToggler && navigationMenu) {
    navbarToggler.addEventListener('click', () => {
      navigationMenu.classList.toggle('show');
    });

    // Close menu when clicking links (non-dropdown)
    const navLinks = document.querySelectorAll('.navigation > li:not(.dropdown) > a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navigationMenu.classList.remove('show');
      });
    });
  }

  // Mobile dropdown toggle
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const parent = toggle.closest('li.dropdown');
        parent.classList.toggle('open');
      }
    });
  });

  // 3. Hero Carousel / Slider matching pcits.net slick-dots & arrows
  const heroSlides = document.querySelectorAll('.hero-section .hero-slide');
  const heroDots = document.querySelectorAll('.hero-section .slick-dots li');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  const currentSlideNum = document.getElementById('currentSlideNum');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (!heroSlides || heroSlides.length === 0) return;

    if (index >= heroSlides.length) index = 0;
    if (index < 0) index = heroSlides.length - 1;

    heroSlides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
        slide.classList.add('active');
      } else {
        slide.style.display = 'none';
        slide.classList.remove('active');
      }
    });

    heroDots.forEach((dot, i) => {
      dot.classList.toggle('slick-active', i === index);
    });

    if (currentSlideNum) {
      currentSlideNum.textContent = '0' + (index + 1);
    }

    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % heroSlides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }

  if (heroSlides.length > 0) {
    showSlide(0);

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(i);
        restartSlideInterval();
      });
    });

    if (heroPrevBtn) {
      heroPrevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        restartSlideInterval();
      });
    }

    if (heroNextBtn) {
      heroNextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        restartSlideInterval();
      });
    }

    function startSlideInterval() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3500);
    }

    function restartSlideInterval() {
      clearInterval(slideInterval);
      startSlideInterval();
    }

    startSlideInterval();

    const sliderContainer = document.querySelector('.hero-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => {
        if (slideInterval) clearInterval(slideInterval);
      });
      sliderContainer.addEventListener('mouseleave', startSlideInterval);

      // Touch swipe support for mobile
      let touchStartX = 0;
      let touchEndX = 0;
      sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 45) {
          nextSlide();
          restartSlideInterval();
        } else if (touchEndX - touchStartX > 45) {
          prevSlide();
          restartSlideInterval();
        }
      }, { passive: true });
    }
  }

  // 4. Interactive Courses Split Showcase
  const courseNavItems = document.querySelectorAll('.course-nav-item');
  const courseCards = document.querySelectorAll('.course-detail-card');

  courseNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      
      // Update nav states
      courseNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      // Scroll to target card smoothly
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetCard.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight nav item as cards scroll into view
  window.addEventListener('scroll', () => {
    if (courseCards.length === 0) return;

    let currentCardId = '';
    const scrollMiddle = window.scrollY + window.innerHeight / 2;

    courseCards.forEach(card => {
      const cardTop = card.offsetTop;
      const cardHeight = card.offsetHeight;
      if (scrollMiddle >= cardTop && scrollMiddle <= cardTop + cardHeight) {
        currentCardId = card.getAttribute('id');
      }
    });

    if (currentCardId) {
      courseNavItems.forEach(nav => {
        if (nav.getAttribute('data-target') === currentCardId) {
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');
        }
      });
    }
  });

  // 5. Testimonials Slider
  const track = document.querySelector('.testimonials-track');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  let testimonialIndex = 0;

  function updateTestimonialSlider() {
    if (!track) return;
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;

    let visibleCards = 3;
    if (window.innerWidth <= 768) {
      visibleCards = 1;
    } else if (window.innerWidth <= 992) {
      visibleCards = 2;
    }

    const maxIndex = Math.max(0, cards.length - visibleCards);
    if (testimonialIndex > maxIndex) testimonialIndex = 0;
    if (testimonialIndex < 0) testimonialIndex = maxIndex;

    const cardWidth = cards[0].offsetWidth + 30; // 30px gap
    track.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      testimonialIndex--;
      updateTestimonialSlider();
    });

    nextBtn.addEventListener('click', () => {
      testimonialIndex++;
      updateTestimonialSlider();
    });

    window.addEventListener('resize', updateTestimonialSlider);
  }

  // 6. FAQ Accordion
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isActive = item.classList.contains('active');

      // Close other accordion items
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 7. Floating Drawer ("Reach out to us")
  const drawer = document.querySelector('.floating-drawer');
  const drawerTab = document.querySelector('.floating-drawer-tab');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  if (drawer && drawerTab) {
    drawerTab.addEventListener('click', (e) => {
      e.stopPropagation();
      drawer.classList.toggle('open');
      if (drawerBackdrop) drawerBackdrop.classList.toggle('active');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target)) {
        drawer.classList.remove('open');
        if (drawerBackdrop) drawerBackdrop.classList.remove('active');
      }
    });

    // Close drawer on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        if (drawerBackdrop) drawerBackdrop.classList.remove('active');
      }
    });
  }

  // 8. Stats Counter Animation on Scroll
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedCounters = false;

  function runCounters() {
    const presenceSection = document.querySelector('.presence-section');
    if (!presenceSection || animatedCounters) return;

    const rect = presenceSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
      animatedCounters = true;
      statNumbers.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const step = target / (duration / 25);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.innerText = target + (counter.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            counter.innerText = Math.ceil(current) + (counter.getAttribute('data-suffix') || '');
          }
        }, 25);
      });
    }
  }

  window.addEventListener('scroll', runCounters);
  runCounters();

  // 9. Scroll To Top Button
  const scrollTopBtn = document.querySelector('.scroll-to-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 10. General Form Submissions
  const allForms = document.querySelectorAll('form:not(#drawerForm)');
  allForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting PMIUSA! Our learning advisor will get in touch with you shortly.');
      form.reset();
      if (drawer) drawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    });
  });

  // 11. Interactive Policy Modal & Hub (From PMI Website)
  const policyLinks = document.querySelectorAll('.policy-link-item');
  const isPoliciesPage = window.location.pathname.endsWith('policies.html');

  if (!isPoliciesPage && policyLinks.length > 0) {
    const modalHtml = `
      <div class="policy-modal-overlay" id="policyModalOverlay" role="dialog" aria-modal="true" aria-labelledby="policyModalTitle">
        <div class="policy-modal-card">
          <div class="policy-modal-header">
            <div class="modal-header-info">
              <div class="modal-icon-badge">
                <i class="fa-solid fa-scale-balanced" id="policyModalIcon"></i>
              </div>
              <div class="modal-header-text">
                <h3 id="policyModalTitle">PMIUSA Policy Framework</h3>
                <p id="policyModalSubtitle">Institutional Governance & Compliance</p>
              </div>
            </div>
            <div class="modal-header-actions">
              <a href="policies.html" class="modal-btn-action" id="policyFullPageBtn" title="Open full legal document in new tab">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <span>Full Page</span>
              </a>
              <button type="button" class="modal-close-btn" id="policyModalCloseBtn" aria-label="Close policy modal">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          <div class="modal-tabs-bar" role="tablist">
            <button type="button" class="modal-tab-btn" data-policy="terms">
              <i class="fa-solid fa-file-contract"></i> Terms &amp; Conditions
            </button>
            <button type="button" class="modal-tab-btn" data-policy="privacy">
              <i class="fa-solid fa-shield-halved"></i> Privacy Policy
            </button>
            <button type="button" class="modal-tab-btn" data-policy="delivery">
              <i class="fa-solid fa-truck-ramp-box"></i> Service Delivery
            </button>
            <button type="button" class="modal-tab-btn" data-policy="refund">
              <i class="fa-solid fa-rotate-left"></i> Refund Policy
            </button>
          </div>

          <div class="policy-modal-body">
            <!-- Terms Tab -->
            <div class="modal-tab-pane" id="modal-tab-terms">
              <div style="background:#f0fdfa; border-left:4px solid #00d2c4; padding:14px 18px; border-radius:8px; margin-bottom:20px;">
                <strong style="color:#0f2942;">Official Enrollment Terms:</strong> Please review these Terms &amp; Conditions carefully before enrolling in our programs. Your enrollment implies legally binding acceptance of all institutional guidelines.
              </div>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-building-columns" style="color:#004aab; margin-right:6px;"></i> 1. Institutional Governance</h4>
              <p>PMIUSA functions as an educational infrastructure provider delivering enterprise PMO advisory and vocational training pathways asynchronously.</p>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-id-card" style="color:#004aab; margin-right:6px;"></i> 2. Mandatory KYC Identification</h4>
              <p>All candidates must successfully complete Document KYC and Video KYC verification prior to receiving unrestricted examination tokens and official certifications.</p>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-copyright" style="color:#004aab; margin-right:6px;"></i> 3. Proprietary Intellectual Property</h4>
              <p>Curricular blueprints, video masterclasses, and PDF reference manuals are the sole intellectual property of PMIUSA. Unauthorized redistribution is strictly prohibited.</p>
            </div>

            <!-- Privacy Tab -->
            <div class="modal-tab-pane" id="modal-tab-privacy">
              <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:14px 18px; border-radius:8px; margin-bottom:20px;">
                <strong style="color:#1e3a8a;">Data Security Commitment:</strong> PMIUSA employs bank-grade 256-bit TLS encryption to safeguard student identity records and academic telemetry.
              </div>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-database" style="color:#2563eb; margin-right:6px;"></i> 1. Information Collected</h4>
              <p>We collect essential identity details, verified contact channels, government KYC credentials, and portal engagement analytics for academic verification.</p>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-lock" style="color:#2563eb; margin-right:6px;"></i> 2. Cryptographic Protection</h4>
              <p>Sensitive KYC documents are encrypted at rest using AES-256 and stored in segregated cloud silos accessible only to authorized compliance officers.</p>
            </div>

            <!-- Delivery Tab -->
            <div class="modal-tab-pane" id="modal-tab-delivery">
              <div style="background:#fefce8; border-left:4px solid #eab308; padding:14px 18px; border-radius:8px; margin-bottom:20px;">
                <strong style="color:#713f12;">9-Step Service Fulfillment:</strong> All curricular tracks are provisioned within 24 to 48 business hours following fee clearance and KYC authentication.
              </div>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-network-wired" style="color:#ca8a04; margin-right:6px;"></i> Asynchronous Learning Delivery</h4>
              <p>Students receive instantaneous digital access to our LMS dashboard, downloadable PDF study blueprints, modular video lectures, and online proctored examination portals.</p>
            </div>

            <!-- Refund Tab -->
            <div class="modal-tab-pane" id="modal-tab-refund">
              <div style="background:#fef2f2; border-left:4px solid #ef4444; padding:14px 18px; border-radius:8px; margin-bottom:20px;">
                <strong style="color:#991b1b;">Finality of Transactions:</strong> All educational registrations and commercial transactions on PMIUSA are strictly <strong>FINAL, NON-CANCELLABLE, AND NON-REFUNDABLE</strong>.
              </div>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-triangle-exclamation" style="color:#dc2626; margin-right:6px;"></i> 1. Instant Fulfillment Waiver</h4>
              <p>Upon triggering Step 1 (Admission Confirmation) and Step 5 (PDF Study Material Dissemination), digital fulfillment is complete. Enrollees explicitly waive any cooling-off period.</p>
              <h4 style="font-size:16px; font-weight:700; color:#0f172a; margin:16px 0 8px;"><i class="fa-solid fa-shield-halved" style="color:#dc2626; margin-right:6px;"></i> 2. Chargeback &amp; Dispute Mitigation</h4>
              <p>Attempted chargebacks or false transaction claims will be legally treated as contract breach. Server log telemetry is submitted directly to banks to deny reversals.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const overlay = document.getElementById('policyModalOverlay');
    const closeBtn = document.getElementById('policyModalCloseBtn');
    const fullPageBtn = document.getElementById('policyFullPageBtn');
    const tabBtns = overlay.querySelectorAll('.modal-tab-btn');
    const panes = overlay.querySelectorAll('.modal-tab-pane');
    const modalTitle = document.getElementById('policyModalTitle');
    const modalSubtitle = document.getElementById('policyModalSubtitle');
    const modalIcon = document.getElementById('policyModalIcon');

    const policyMetadata = {
      terms: {
        title: 'Terms & Conditions',
        subtitle: 'Institutional Governance & Legal Contract',
        icon: 'fa-file-contract',
        hash: 'panel-terms'
      },
      privacy: {
        title: 'Privacy Policy',
        subtitle: 'Comprehensive Data Protection & KYC Security',
        icon: 'fa-shield-halved',
        hash: 'panel-privacy'
      },
      delivery: {
        title: 'Service Delivery Policy',
        subtitle: '9-Step Asynchronous Fulfillment Architecture',
        icon: 'fa-truck-ramp-box',
        hash: 'panel-delivery'
      },
      refund: {
        title: 'Service Fulfillment & No-Refund Policy',
        subtitle: 'Transaction Finality, Waivers & Dispute Mitigation',
        icon: 'fa-rotate-left',
        hash: 'panel-refund'
      }
    };

    function showPolicyInModal(policyKey) {
      const meta = policyMetadata[policyKey] || policyMetadata.terms;
      modalTitle.textContent = meta.title;
      modalSubtitle.textContent = meta.subtitle;
      modalIcon.className = 'fa-solid ' + meta.icon;
      fullPageBtn.href = 'policies.html#' + meta.hash;

      tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-policy') === policyKey);
      });
      panes.forEach(pane => {
        pane.classList.toggle('active', pane.id === 'modal-tab-' + policyKey);
      });

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closePolicyModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    policyLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const policyKey = link.getAttribute('data-policy') || 'terms';
        showPolicyInModal(policyKey);
      });
    });

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const policyKey = btn.getAttribute('data-policy');
        showPolicyInModal(policyKey);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closePolicyModal);
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closePolicyModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closePolicyModal();
      }
    });
  }

});
