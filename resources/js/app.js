/**
 * Bootstrap the application. This includes all setup that doesn't really *do*
 * anything.
 */

require('./bootstrap');

$(function() {
    $('a[rel="fluidbox"]').fluidbox();
});