const mix = require('laravel-mix');

require('laravel-mix-purgecss');

mix
    .js('resources/js/site.js', 'public/js')
    .js('resources/js/sw.js', 'public')

    .postCss('resources/css/site.css', 'public/css', [
        require('tailwindcss')('tailwind.config.js')
    ])

    .purgeCss({
        whitelistPatterns: [/pre/, /hljs/, /highlighted/, /text-teal/, /text-orange/],
    })

    .options({
        processCssUrls: false,
    })

    .version();
