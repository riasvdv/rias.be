/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */

 import Url from './components/fieldtypes/Url.vue';

 Statamic.booting(() => {
    Statamic.$components.register('url-fieldtype-index', Url);
});
