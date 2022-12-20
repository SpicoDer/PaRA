const navOthers = document.querySelector('.nav-others');
const navSign = document.querySelector('.nav-sign');
const menu = document.querySelector('.icon-menu');
const closeIcon = document.querySelector('.icon-close');

menu.addEventListener('click', function () {
  navOthers.classList.toggle('open');
  navSign.classList.toggle('open');
  menu.classList.toggle('open');
  closeIcon.classList.toggle('open');
});

closeIcon.addEventListener('click', function () {
  navOthers.classList.toggle('open');
  navSign.classList.toggle('open');
  menu.classList.toggle('open');
  closeIcon.classList.toggle('open');
});
