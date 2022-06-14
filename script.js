const showMenuBtn = document.querySelector('#show-menu');
const mobileMenu = document.querySelector('.nav-bar-mobile');
const navBar = document.querySelector('.nav-bar');
const cancelMenuBtn = document.querySelector('#cancel-menu');
const menuList = document.querySelectorAll('.menu-list');

showMenuBtn.addEventListener('click', () => {
  navBar.classList.toggle('invisible');
  mobileMenu.classList.toggle('invisible');
});
cancelMenuBtn.addEventListener('click', () => {
  navBar.classList.toggle('invisible');
  mobileMenu.classList.toggle('invisible');
});
menuList.forEach(list => {
  list.addEventListener('click', () => {
    navBar.classList.toggle('invisible');
    mobileMenu.classList.toggle('invisible');    
    });
});