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
  distance: '30px',
  duration: 1500,
  reset: true
})
sr.reveal('.home-text', {
  delay: 120,
  origin: 'top'
})
sr.reveal('.home-img', {
  delay: 220,
  origin: 'top'
})
sr.reveal('.about, .services, .cta, .resume, .contact, .copyright', {
  delay: 220,
  origin: 'top'
})
