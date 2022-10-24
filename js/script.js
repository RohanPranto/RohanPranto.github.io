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
  distance: '25px',
  duration: 1200,
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
sr.reveal('.about, .services, .cta, .resume, .contact, .copyright', {
  delay: 180,
  origin: 'top'
})
