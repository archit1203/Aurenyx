// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll polyfill for future internal links (if added)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetID = anchor.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetID);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Remove inline onclick from CTA button and add unobtrusive event listener
  const ctaBtn = document.querySelector('button.cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      window.location.href = '/register.html';
    });
  }

  // Add keyboard focus styles on nav links for accessibility
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('focus', () => {
      link.classList.add('focus-visible');
    });
    link.addEventListener('blur', () => {
      link.classList.remove('focus-visible');
    });
  });

  // Sticky navbar shadow effect on scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});
