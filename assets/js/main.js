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

  // 7. Floating Drawer & Course Enrollment Modal System
  const drawer = document.querySelector('.floating-drawer');
  const drawerTab = document.querySelector('.floating-drawer-tab');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn') || (drawer ? drawer.querySelector('.drawer-close-btn') : null);
  const drawerSuccessDoneBtn = document.getElementById('drawerSuccessDoneBtn');
  const drawerForm = document.getElementById('drawerForm');
  const drawerSuccessState = document.getElementById('drawerSuccessState');

  window.closeEnrollDrawer = function() {
    if (drawer) drawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.openEnrollDrawer = function(courseTitle, courseId) {
    if (window.event && window.event.stopPropagation) {
      window.event.stopPropagation();
    }
    if (!drawer) return;

    let price = 'INR 45,000';
    let duration = '20 Days';
    let cat = 'PMIUSA Certified';

    const catMap = {
      'ai': 'AI & Modern Tech',
      'management': 'Project & Agile',
      'bim': 'BIM & Architecture',
      'site': 'Site Operations',
      'business': 'Business & Finance',
      'engineering': 'Engineering Tech'
    };

    // Look up from window.PMIUSA_COURSES dataset if available
    if (window.PMIUSA_COURSES && Array.isArray(window.PMIUSA_COURSES) && courseId) {
      const found = window.PMIUSA_COURSES.find(c => c.id === courseId);
      if (found) {
        if (found.price) price = found.price;
        if (found.duration) duration = found.duration;
        if (found.category) cat = catMap[found.category] || found.category;
        if (!courseTitle) courseTitle = found.title;
      }
    }

    // Fallback: look up in DOM card if present (e.g. on courses.html)
    if (courseId) {
      const card = document.getElementById(courseId);
      if (card) {
        const p = card.querySelector('.course-price');
        const d = card.querySelector('.badge-duration');
        const c = card.querySelector('.badge-category');
        if (p) price = p.textContent.trim();
        if (d) duration = d.textContent.trim();
        if (c) {
          cat = c.textContent.trim();
        } else {
          const rawCat = card.getAttribute('data-category') || '';
          if (rawCat && catMap[rawCat]) cat = catMap[rawCat];
        }
      }
    }

    // On course-detail page, check sidebar elements if still default
    const sidebarTitle = document.getElementById('sidebarCourseName');
    const sidebarPrice = document.getElementById('sidebarPrice');
    const featDuration = document.getElementById('featDuration');
    if (sidebarTitle && !courseTitle) courseTitle = sidebarTitle.textContent.trim();
    if (sidebarPrice && price === 'INR 45,000') price = sidebarPrice.textContent.trim();
    if (featDuration && duration === '20 Days') {
      duration = featDuration.textContent.replace('Intensive Cohort', '').trim();
    }

    // Populate drawer elements if present
    const titleEl = document.getElementById('drawerProgramTitle');
    const priceEl = document.getElementById('drawerProgramPrice');
    const durationEl = document.getElementById('drawerProgramDuration');
    const catEl = document.getElementById('drawerProgramCat');
    const idInput = document.getElementById('drawer_course_id');
    const titleInput = document.getElementById('drawer_course_title');

    if (titleEl) titleEl.textContent = courseTitle || 'Professional Program';
    if (priceEl) priceEl.textContent = price;
    if (durationEl) durationEl.innerHTML = '<i class="fa-regular fa-clock me-1"></i> ' + duration;
    if (catEl) catEl.textContent = cat;
    if (idInput) idInput.value = courseId || '';
    if (titleInput) titleInput.value = courseTitle || '';

    // If dropdown exists (e.g. on index.html)
    const courseSelect = document.getElementById('drawer_course');
    if (courseSelect && (courseId || courseTitle)) {
      for (let opt of courseSelect.options) {
        if (opt.value === courseId || (courseTitle && opt.text.toLowerCase().includes(courseTitle.toLowerCase()))) {
          opt.selected = true;
          break;
        }
      }
    }

    // Reset form view
    if (drawerForm) drawerForm.style.display = 'block';
    if (drawerSuccessState) drawerSuccessState.style.display = 'none';

    // Open drawer & backdrop
    drawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    const nameInput = document.getElementById('drawer_name');
    if (nameInput) setTimeout(() => nameInput.focus(), 300);
  };

  if (drawer) {
    if (drawerTab) {
      drawerTab.addEventListener('click', (e) => {
        e.stopPropagation();
        if (drawer.classList.contains('open')) {
          window.closeEnrollDrawer();
        } else {
          const sidebarCourseName = document.getElementById('sidebarCourseName');
          const currentTitle = sidebarCourseName ? sidebarCourseName.textContent.trim() : 'General Program Counseling';
          window.openEnrollDrawer(currentTitle, '');
        }
      });
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.closeEnrollDrawer();
      });
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', (e) => {
        e.stopPropagation();
        window.closeEnrollDrawer();
      });
    }

    if (drawerSuccessDoneBtn) {
      drawerSuccessDoneBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.closeEnrollDrawer();
      });
    }

    // Close on outside click (ignoring any buttons meant to open/toggle the drawer)
    document.addEventListener('click', (e) => {
      if (!drawer.classList.contains('open')) return;
      if (drawer.contains(e.target)) return;
      if (e.target.closest('.floating-drawer-tab')) return;
      if (e.target.closest('.btn-enroll')) return;
      if (e.target.closest('.btn-sidebar-enroll')) return;
      if (e.target.closest('#sidebarEnrollBtn')) return;
      if (e.target.closest('[data-enroll-trigger]')) return;
      if (e.target.closest('.drawer-close-btn')) return;

      window.closeEnrollDrawer();
    });

    // Close drawer on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        window.closeEnrollDrawer();
      }
    });

    // Drawer form submission handling
    if (drawerForm) {
      drawerForm.addEventListener('submit', (e) => {
        const phoneInput = drawerForm.querySelector('input[type="tel"]');
        if (phoneInput) {
          const digitsOnly = phoneInput.value.replace(/\D/g, '');
          if (digitsOnly.length < 10 || digitsOnly.length > 15) {
            e.preventDefault();
            alert('Please enter a valid phone number with 10 to 15 digits.');
            phoneInput.focus();
            return;
          }
        }

        e.preventDefault();
        const titleInput = document.getElementById('drawer_course_title');
        const courseName = (titleInput && titleInput.value) || 'the program';
        const successCourseName = document.getElementById('successCourseName');
        if (successCourseName) successCourseName.textContent = courseName;

        if (drawerSuccessState) {
          drawerForm.style.display = 'none';
          drawerSuccessState.style.display = 'block';
        } else {
          alert('Thank you for enrolling in ' + courseName + '! Our learning advisor will get in touch with you shortly.');
          drawerForm.reset();
          window.closeEnrollDrawer();
        }
      });
    }

    // Phone number input restriction (max 15 digits, prevents oversized numbers)
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
      input.setAttribute('maxlength', '16');
      input.addEventListener('input', (e) => {
        let val = e.target.value;
        const hasPlus = val.startsWith('+');
        let cleaned = val.replace(/[^\d]/g, '');
        if (cleaned.length > 15) {
          cleaned = cleaned.substring(0, 15);
        }
        e.target.value = (hasPlus ? '+' : '') + cleaned;
      });
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
