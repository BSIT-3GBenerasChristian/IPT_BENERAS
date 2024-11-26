// script.js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.2)';
            item.style.transition = 'transform 0.5s ease-in-out';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
