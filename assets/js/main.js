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

  // 4. Interactive Courses Split Showcase: Smart Stacking Cards & Smooth Scroll Sync
  const coursesSection = document.getElementById('courses');
  const courseNavItems = document.querySelectorAll('.course-nav-item');
  const courseCards = document.querySelectorAll('.course-detail-card');
  const contentColumn = document.querySelector('.courses-content-column');
  const navColumn = document.querySelector('.courses-nav-column');

  if (coursesSection && courseNavItems.length > 0 && courseCards.length > 0) {
    let isProgrammaticScroll = false;
    let programmaticScrollTimer = null;
    let currentActiveIndex = 0;

    // Helper: calculate sticky top offset dynamically based on viewport / header
    const getStickyTopConfig = () => {
      const isMobile = window.innerWidth < 992;
      const isShortScreen = window.innerHeight <= 740;
      if (isShortScreen) {
        return {
          baseTop: 68,
          stepOffset: 4
        };
      }
      return {
        baseTop: isMobile ? 80 : 76,
        stepOffset: isMobile ? 4 : 6
      };
    };

    // Helper: activate nav item & ensure it's visible (auto-scroll on mobile chips)
    const setActiveNav = (index) => {
      if (index === currentActiveIndex && courseNavItems[index].classList.contains('active')) {
        return;
      }
      currentActiveIndex = index;
      courseNavItems.forEach((nav, idx) => {
        const isActive = idx === index;
        nav.classList.toggle('active', isActive);
        nav.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Auto-scroll horizontal pill bar on mobile so active chip is centered in view
      if (window.innerWidth < 992 && navColumn) {
        const activeNav = courseNavItems[index];
        if (activeNav) {
          const navLeft = activeNav.offsetLeft;
          const navWidth = activeNav.offsetWidth;
          const containerWidth = navColumn.offsetWidth;
          navColumn.scrollTo({
            left: navLeft - (containerWidth / 2) + (navWidth / 2),
            behavior: 'smooth'
          });
        }
      }
    };

    // Helper: update card depth, transforms & stacking states on scroll
    const updateCardStack = () => {
      const { baseTop, stepOffset } = getStickyTopConfig();
      let activeIndex = 0;

      // Find currently active / topmost stacked card based on staggered tops
      courseCards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const cardTargetTop = baseTop + (idx * stepOffset);
        if (rect.top <= cardTargetTop + 15) {
          activeIndex = idx;
        }
      });

      // Synchronize left navigation (unless user clicked and programmatic flight is active)
      if (!isProgrammaticScroll) {
        setActiveNav(activeIndex);
      }

      // Calculate continuous depth, scaling, and stacking states for realistic card deck
      courseCards.forEach((card, idx) => {
        card.classList.toggle('active', idx === activeIndex);
        card.classList.toggle('is-stacked', idx >= 1 && idx <= activeIndex);

        if (idx < activeIndex) {
          // Cards buried underneath the current active card
          const depth = activeIndex - idx;
          const scale = Math.max(0.92, 1 - (depth * 0.02));
          const brightness = Math.max(0.78, 1 - (depth * 0.06));

          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${brightness})`;
          card.style.cursor = 'pointer';
        } else {
          // Active card or cards below that haven't reached the stack yet
          card.style.transform = 'scale(1)';
          card.style.filter = 'brightness(1)';
          card.style.cursor = 'default';
        }
      });
    };

    // High performance scroll listener with requestAnimationFrame
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCardStack();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Smooth scroll to card when user clicks or presses Enter on nav item
    const scrollToCard = (index) => {
      if (index < 0 || index >= courseCards.length) return;

      const { baseTop, stepOffset } = getStickyTopConfig();
      const cardTargetTop = baseTop + (index * stepOffset);
      const targetCard = courseCards[index];

      // Instant nav activation for immediate visual feedback
      isProgrammaticScroll = true;
      setActiveNav(index);

      if (programmaticScrollTimer) {
        clearTimeout(programmaticScrollTimer);
      }

      // Calculate exact document scroll position where targetCard reaches cardTargetTop
      const contentDocTop = contentColumn.getBoundingClientRect().top + window.scrollY;
      const targetScrollY = contentDocTop + targetCard.offsetTop - cardTargetTop;

      window.scrollTo({
        top: Math.max(0, targetScrollY),
        behavior: 'smooth'
      });

      // Release programmatic flag once smooth scroll settles
      programmaticScrollTimer = setTimeout(() => {
        isProgrammaticScroll = false;
        updateCardStack();
      }, 750);
    };

    // Attach click and keyboard events to nav items
    courseNavItems.forEach((item, idx) => {
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');

      item.addEventListener('click', () => {
        scrollToCard(idx);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToCard(idx);
        }
      });
    });

    // Allow clicking peeking buried cards in the stack to unstack & jump back to that card
    courseCards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) {
          return;
        }
        if (idx < currentActiveIndex) {
          scrollToCard(idx);
        }
      });
    });

    // Initial run on page load
    updateCardStack();
  }

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

  // 11. Standalone Policy Pages Navigation
  // All policy links navigate directly to separate standalone policy pages (terms-and-conditions.html, privacy-policy.html, service-delivery.html, refund-policy.html).
});
