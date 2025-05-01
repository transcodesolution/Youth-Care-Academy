const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
const close = document.getElementById('menuClose');

toggle.addEventListener('click', () => {
    menu.classList.remove('hidden'); // Show the menu
});

close.addEventListener('click', () => {
    menu.classList.add('hidden'); // Hide the menu
});