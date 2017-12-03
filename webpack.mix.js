const mix = require('laravel-mix');
const glob = require('glob-all');
const fs = require('fs-extra');
const purgeCss = require('purgecss-webpack-plugin');

//mix.config.uglify.compress.drop_console = false;
mix.config.postCss = require('./postcss.config').plugins;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .options({
        postCss: require('./postcss.config.js').plugins,
        processCssUrls: false
    })
    .version()
    .setPublicPath('web/build')
    .js('resources/js/app.js', 'web/build/js')
    .sass('resources/scss/app.scss', 'web/build/css')
    .copy('./node_modules/font-awesome/fonts/*', 'web/build/fonts')
    .then(function () {
        fs.copySync('web/build/css/app.css', 'templates/critical.css');
    });

if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new purgeCss({
                paths: glob.sync([
                    path.join(__dirname, 'templates/**/*.twig'),
                    path.join(__dirname, 'templates/**/*.html'),
                    path.join(__dirname, 'resources/js/**/*.js'),
                    path.join(__dirname, 'node_modules/fluidbox/**/*.js'),
                ]),
                extractors: [
                    {
                        extractor: class {
                            static extract(content) {
                                return content.match(/[A-z0-9-:\/]+/g)
                            }
                        },
                        extensions: ['html', 'js', 'php', 'vue', 'twig']
                    }
                ]
            })
        ]
    })
}