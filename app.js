/* app.js — Pelipost Homepage Interactions */

(function () {
  'use strict';

  // ===== NAV SCROLL EFFECT =====
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ===== MOBILE MENU =====
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('mobile-menu--open');
      mobileMenu.classList.toggle('mobile-menu--open');
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');

      // Update icon
      if (!isOpen) {
        menuToggle.innerHTML =
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>';
      } else {
        menuToggle.innerHTML =
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      }
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('mobile-menu--open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML =
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      });
    });
  }

  // ===== HERO CYCLING TEXT =====
  const cyclingWords = ['prison', 'county jail', 'halfway home', 'juvenile facility'];
  const cyclingEl = document.getElementById('cyclingWord');
  let currentIndex = 0;

  if (cyclingEl) {
    setInterval(function () {
      // Fade out
      cyclingEl.style.opacity = '0';
      setTimeout(function () {
        currentIndex = (currentIndex + 1) % cyclingWords.length;
        cyclingEl.textContent = cyclingWords[currentIndex];
        // Fade in
        cyclingEl.style.opacity = '1';
      }, 300);
    }, 3000);
  }

  // ===== SCROLL-TRIGGERED FADE-IN =====
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('reveal--visible');
            }
            if (entry.target.classList.contains('reveal-stagger')) {
              entry.target.classList.add('reveal-stagger--visible');
            }
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
      el.classList.add('reveal-stagger--visible');
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
