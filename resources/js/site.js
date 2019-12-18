import "./webmentions";

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function () {
        document.querySelector('#mobile-nav').classList.add('loaded');
    }, 250);

    document.querySelector('.js-open-nav').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#mobile-nav').classList.add('open');
    });

    document.querySelector('.js-close-nav').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#mobile-nav').classList.remove('open');
    });
});
