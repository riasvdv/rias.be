const { createVuePlugin } = require('vite-plugin-vue2');

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: false,
        outDir: 'public/vendor/app/js',
        assetsDir: './',
        emptyOutDir: false,
        rollupOptions: {
            input: 'resources/js/cp.js',
            output: {
                entryFileNames: '[name].js'
            },
        },
    },
    plugins: [
        createVuePlugin(),
    ],
});
