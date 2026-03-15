const btnActive = document.getElementById('btn-active-menu');
const btnClose = document.getElementById('btn-close-nav');
const menuContent = document.getElementById('nav-movil');
const items = document.querySelectorAll('.item');

btnActive.addEventListener('click', () => {
    menuContent.style.left = 0;
});

btnClose.addEventListener('click', () => {
    menuContent.style.left = "-100%";
});

items.forEach (item => {
    item.addEventListener('click', () => {
        menuContent.style.left = "-100%";
    })
});