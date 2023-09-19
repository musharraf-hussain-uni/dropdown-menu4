document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const responsiveNav = document.getElementById('responsiveNav');

    burgerMenu.addEventListener('click', () => {
        responsiveNav.classList.toggle('open');
        burgerMenu.classList.toggle('open');
    });
});