const mix = require('laravel-mix');

require('laravel-mix-purgecss');

mix.js('resources/js/site.js', 'public/js')

    .postCss('resources/css/site.css', 'public/css', [require('tailwindcss')('tailwind.config.js')])

    .options({
        processCssUrls: false,
    })

    .version()

    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js',
        },
    })

    .purgeCss({
        enabled: mix.inProduction(),
        globs: [
            path.join(__dirname, 'site/themes/**/*.{html,php}'),
        ],
        whitelistPatterns: [/pre/, /hljs/, /highlighted/, /border/, /text-teal/, /text-orange/, /bg-/],
    });
