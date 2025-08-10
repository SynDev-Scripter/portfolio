// Portfolio loaded
console.log("Portfolio loaded.");

// ========== Theme Toggle ==========
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');

  // Optional: Save user preference to localStorage
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Keyboard shortcut to toggle theme (press "T")
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 't') {
    toggleTheme();
  }
});

// ========== Scroll Active Nav Link ==========
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========== Smooth Scroll (if not using CSS scroll-behavior) ==========
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== AOS Animation Init (already in your HTML) ==========
AOS.init({
  duration: 800,
  once: true,
});
