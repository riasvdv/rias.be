import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwind(),
        laravel([
            'resources/css/site.css',
            'resources/js/site.js',
        ]),
    ],
});
