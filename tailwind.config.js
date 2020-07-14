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
    typography: {
      default: {
        css: {
          code: {
            color: '#ed8936',
            fontWeight: 'normal',
            '&:before': {
              display: 'none',
            },
            '&:after': {
              display: 'none',
            }
          },
          a: {
            color: '#4a5568',
            'text-decoration': 'none',
            '&:hover': {
              color: '#4a5568',
            },
          },
        },
      },
    },
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
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
