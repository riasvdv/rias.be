import '../css/site.css';

import Alpine from 'alpinejs'
import "./webmentions";

window.Alpine = Alpine;
Alpine.start();

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function () {
        document.querySelector('#mobile-nav').classList.add('loaded');
    }, 250);
});
