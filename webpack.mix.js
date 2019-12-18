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
        /*optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },*/
    })

    .purgeCss({
        enabled: mix.inProduction(),
        globs: [
            path.join(__dirname, 'resources/views/**/*.{html,php}'),
        ],
        whitelistPatterns: [/pre/, /hljs/, /highlighted/, /text-teal/, /text-orange/],
    });
