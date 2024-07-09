import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/site.css',
            'resources/js/site.js',
        ]),
    ],
});
