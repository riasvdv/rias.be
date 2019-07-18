import Vue from 'vue';

Vue.config.debug = false;
Vue.config.silent = true;
Vue.config.devtools = true;

window.Vue = Vue;
window._ = require('underscore');
window.$ = window.jQuery = require('jquery');
window.moment = require('moment');
window.rangy = require('rangy');

require('./bootstrap/vue-resource');
require('./bootstrap/globals');
require('./bootstrap/polyfills');
require('./bootstrap/underscore-mixins');
require('./bootstrap/jquery-plugins');
require('./bootstrap/redactor-plugins');
require('./l10n/l10n');
require('./bootstrap/plugins');
require('./bootstrap/filters');
require('./bootstrap/mixins');
require('./bootstrap/components');
require('./bootstrap/fieldtypes');
require('./bootstrap/directives');
