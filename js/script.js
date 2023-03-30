const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('#theme-toggle .toggle-icon');
const moonIcon = document.querySelector('#theme-toggle .fa-moon');
const sunIcon = document.querySelector('#theme-toggle .fa-sun');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    moonIcon.style.opacity = '1';
    sunIcon.style.opacity = '0';
    themeIcon.style.transform = 'translateX(26px)';
  } else {
    moonIcon.style.opacity = '0';
    sunIcon.style.opacity = '1';
    themeIcon.style.transform = 'translateX(0)';
  }
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '100px',
  duration: 2000,
  reset: true
})
sr.reveal('.home-text', {
  delay: 120,
  origin: 'top'
})
sr.reveal('.home-img', {
  delay: 180,
  origin: 'top'
})
sr.reveal('.about, .services, .cta, .audio-sec, .resume, .contact, .copyright', {
  delay: 240,
  origin: 'bottom'
})
