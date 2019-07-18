const mix = require('laravel-mix');

require('laravel-mix-purgecss');

mix.js('resources/js/site.js', 'public/js')

    .postCss('resources/css/site.css', 'public/css', [require('tailwindcss')('tailwind.config.js')])

    .options({
        processCssUrls: false,
    })

    .version()

    .babelConfig({
        plugins: ['@babel/plugin-syntax-dynamic-import'],
    })

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
        whitelistPatterns: [/hljs/],
    });
