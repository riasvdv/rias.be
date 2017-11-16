/**
 * Bootstrap the application. This includes all setup that doesn't really *do*
 * anything.
 */

require('./bootstrap');

$(function() {
    $('a[rel="fluidbox"]').fluidbox();

    $('.js-open-nav').on('click', () => {
        $('#mobile-nav').removeClass('hidden').addClass('open');
    });

    $('.js-close-nav').on('click', () => {
        $('#mobile-nav').removeClass('open');
    });
});

const FontFaceObserver = require('fontfaceobserver');
const Cookies = require('js-cookie');

// if the class is already set, we're good.
if( document.documentElement.className.indexOf( "fonts-loaded" ) === -1 ){
    let fontA = new FontFaceObserver( "Fira Mono", { weight: 400 });
    let fontB = new FontFaceObserver( "Fira Mono", { weight: 700 });
    Promise
        .all([fontA.load(), fontB.load()])
        .then(function(){
            document.documentElement.className += " fonts-loaded";
            Cookies.set('fonts-loaded', true);
        });
}