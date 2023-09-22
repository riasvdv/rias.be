import '../css/site.css';
import "./webmentions";

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function () {
        document.querySelector('#mobile-nav').classList.add('loaded');
    }, 250);
});
