// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Example: Highlight nav item based on current page URL
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul.nav-list li a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Optional: smooth scroll for anchor links (if any added later)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
