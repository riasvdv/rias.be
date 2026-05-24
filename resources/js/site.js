import Alpine from 'alpinejs';
import '../css/site.css';

window.Alpine = Alpine;
Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('#mobile-nav')?.classList.add('loaded');
    }, 250);
});
