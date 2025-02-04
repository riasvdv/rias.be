module.exports = {
    theme: {
        extend: {
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
