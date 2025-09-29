// main.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Toggle visibility using Tailwind's 'hidden' class
            mobileMenu.classList.toggle('hidden');
            
            // Optional: Change icon (Hamburger <-> X)
            const iconPath = menuButton.querySelector('svg path');
            if (mobileMenu.classList.contains('hidden')) {
                // Menu is closed, show hamburger
                iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            } else {
                // Menu is open, show X
                iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });
    }
});

