module.exports = {
    plugins: [
        require('postcss-easy-import'),
        ...(process.env.NODE_ENV === 'production' ? [require('postcss-preset-env')(), require('cssnano')()] : []),
    ],
};
