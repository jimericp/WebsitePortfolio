const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__link');

let menuOpen = false;

navToggle.addEventListener('click', () => {
  if (!menuOpen) {
    navToggle.classList.add('active');
    nav.classList.add('active');
    body.classList.add('overflow');

    menuOpen = true;
  } else {
    navToggle.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('overflow');
    menuOpen = false;
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('overflow');
  });
});
