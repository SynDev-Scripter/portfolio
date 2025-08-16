// ===========================
// 📁 script.js for _jw3 Portfolio
// ===========================

// ✅ Portfolio Loaded
console.log("Portfolio loaded.");

// ===========================
// 🌗 Theme Toggle with Button + Persistence
// ===========================

const themeToggleBtn = document.getElementById('toggle-theme');

const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggleBtn.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
};

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Start typewriter animation after theme loads
  typeWriter();
});

// Toggle theme on button click
themeToggleBtn.addEventListener('click', toggleTheme);

// Keyboard shortcut: T key toggles theme
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 't') toggleTheme();
});

// ===========================
// 🧠 Active Nav Link on Scroll
// ===========================

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

// ===========================
// 🔁 Smooth Scroll for Nav Links
// ===========================

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

// ===========================
// ✨ Typewriter Effect
// ===========================

const typewriterText = "_jw3";
let i = 0;
const speed = 150;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  if (i < typewriterText.length) {
    el.innerHTML += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// ===========================
// 🌀 AOS Init
// ===========================

AOS.init({
  duration: 800,
  once: true,
});
