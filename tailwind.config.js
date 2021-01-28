const colors = require('tailwindcss/colors');

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
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: {
                50: '#f8fcfb',
                100: '#f1f9f8',
                200: '#e1efee',
                300: '#cbe1df',
                400: '#99b2af',
                500: '#6d8380',
                600: '#506260',
                700: '#3b4f4d',
                800: '#233432',
                900: '#162220',
            },
            orange: colors.orange,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.purple,
            pink: colors.pink,
            teal:colors.teal,
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                'sans': 'Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
                'mono': '"Fira Code", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        code: {
                            color: theme('colors.orange.500'),
                            fontWeight: 'normal',
                            '&:before': {
                                display: 'none',
                            },
                            '&:after': {
                                display: 'none',
                            }
                        },
                        a: {
                            color: theme('colors.gray.700'),
                            'text-decoration': 'none',
                            '&:hover': {
                                color: theme('colors.gray.800'),
                            },
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {
            gap: ['group-hover'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
