const showMenuBtn = document.querySelector("#show-menu");
const mobileMenu = document.querySelector('.nav-bar-mobile');
const navBar = document.querySelector('.nav-bar');
const cancelMenuBtn = document.querySelector('#cancel-menu');
const menuList = document.querySelectorAll('.menu-list');

showMenuBtn.addEventListener('click', e => {
    navBar.classList.add('invisible');
    mobileMenu.classList.remove('invisible');
});

cancelMenuBtn.addEventListener('click', e => {
    navBar.classList.remove('invisible');
    mobileMenu.classList.add('invisible');
})
menuList.forEach(list => {
    list.addEventListener('click',e => {
        navBar.classList.remove('invisible');
        mobileMenu.classList.add('invisible');    
    })
})