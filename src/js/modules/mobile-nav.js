function mobileNav() {
    const burger = document.querySelector('.burger-btn');
    const menu = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav__close');

    burger.addEventListener('click', () => {
        menu.classList.remove('none');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.add('none');
    });
}

export default mobileNav;