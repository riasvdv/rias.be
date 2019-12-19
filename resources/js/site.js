import Alpine from 'alpinejs';
import "./webmentions";

Alpine.start();

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function () {
        document.querySelector('#mobile-nav').classList.add('loaded');
    }, 250);
});
