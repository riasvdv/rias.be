const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        'app/**/*.php',
        'resources/**/*.{html,js,jsx,ts,tsx,php,vue,twig}',
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
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
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
