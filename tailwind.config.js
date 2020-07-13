module.exports = {
  purge: [
    'app/**/*.php',
    'resources/**/*.html',
    'resources/**/*.js',
    'resources/**/*.jsx',
    'resources/**/*.ts',
    'resources/**/*.tsx',
    'resources/**/*.php',
    'resources/**/*.vue',
    'resources/**/*.twig',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': 'Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
        'mono': '"Fira Code", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
      },
    }
  },
  variants: {},
  plugins: []
};
