const mix = require('laravel-mix');

mix
    .js('resources/js/site.js', 'public/js')
    .js('resources/js/sw.js', 'public')

    .postCss('resources/css/site.css', 'public/css', [
        require('tailwindcss')('tailwind.config.js')
    ])

    .options({
        processCssUrls: false,
    })

    .version();
