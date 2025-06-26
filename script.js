// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.project-card, #contact-form');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('reveal');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// About section fade-in
function aboutFadeIn() {
  const about = document.querySelector('.about');
  if (!about) return;
  const top = about.getBoundingClientRect().top;
  if (top < window.innerHeight - 60) {
    about.classList.add('reveal');
  }
}
window.addEventListener('scroll', aboutFadeIn);
window.addEventListener('DOMContentLoaded', aboutFadeIn);

// Hero background animation (bubbles)
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  for (let i = 0; i < 18; i++) {
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = 3 + Math.random() * 5 + 's';
    bubble.style.opacity = 0.2 + Math.random() * 0.4;
    heroBg.appendChild(bubble);
  }
}

// Contact form animation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  function revealForm() {
    const top = contactForm.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      contactForm.classList.add('reveal');
    }
  }
  window.addEventListener('scroll', revealForm);
  window.addEventListener('DOMContentLoaded', revealForm);
}

// Optional: Prevent form submission (demo)
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
}

// Extra: Bubble styles for hero background
const style = document.createElement('style');
style.innerHTML = `
.hero-bg .bubble {
  position: absolute;
  bottom: -80px;
  width: 32px;
  height: 32px;
  background: rgba(255,255,255,0.18);
  border-radius: 50%;
  animation: bubbleUp 6s linear infinite;
}
@keyframes bubbleUp {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-120vh) scale(0.7); }
}
`;
document.head.appendChild(style);

// Go to Top button functionality
const goTopBtn = document.getElementById('goTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.add('show');
  } else {
    goTopBtn.classList.remove('show');
  }
});
goTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle functionality
const darkModeBtn = document.getElementById('darkModeBtn');
const darkModeIcon = document.getElementById('darkModeIcon');
function setDarkMode(enabled) {
  document.body.classList.toggle('dark-mode', enabled);
  darkModeIcon.innerHTML = enabled ? '&#9790;' : '&#9788;';
  localStorage.setItem('darkMode', enabled ? '1' : '0');
}
darkModeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  darkModeIcon.innerHTML = isDark ? '&#9790;' : '&#9788;';
  localStorage.setItem('darkMode', isDark ? '1' : '0');
});
// On load, set dark mode if previously enabled
if (localStorage.getItem('darkMode') === '1') {
  setDarkMode(true);
}
