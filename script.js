const nav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('hidden')) {
    nav.classList.add('block');
    nav.classList.remove('hidden');
  } else {
    nav.classList.remove('block');
    nav.classList.add('hidden');
  }
});
