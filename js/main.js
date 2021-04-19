const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

let menuOpen = false;

navToggle.addEventListener('click', () => {
  if (!menuOpen) {
    navToggle.classList.add('active');
    nav.classList.add('active');
    menuOpen = true;
  } else {
    navToggle.classList.remove('active');
    nav.classList.remove('active');
    menuOpen = false;
  }
});
