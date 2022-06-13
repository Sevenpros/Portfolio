const showMenu = document.querySelector("#show-menu");
const mobileMenu = document.querySelector('.nav-bar-mobile');
const navBar = document.querySelector('.nav-bar');
const cancelMenu = document.querySelector('#cancel-menu');
const menuList = document.querySelectorAll('.menu-list');
showMenu.addEventListener('click', e => {
    navBar.classList.add('invisible');
    mobileMenu.classList.remove('invisible');
});

cancelMenu.addEventListener('click', e => {
    navBar.classList.remove('invisible');
    mobileMenu.classList.add('invisible');
})
menuList.forEach(list => {
    list.addEventListener('click',e => {
        navBar.classList.remove('invisible');
        mobileMenu.classList.add('invisible');    
    })
})