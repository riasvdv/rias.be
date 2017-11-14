/**
 * First we'll require the necessary polyfills for our application.
 */
require('babel-polyfill');

require('./vendor/prism.js');

window.jQuery = window.$ = require('jquery');
jQuery.throttle = $.throttle = require('throttle-debounce/throttle');
jQuery.debounce = $.debounce = require('throttle-debounce/debounce');
require('fluidbox');
