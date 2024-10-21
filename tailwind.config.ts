module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h2': {
              'text-decoration': 'none', // No text decoration
              a: {
                'text-decoration': 'none', // No underline on links
              },
            },
            'h3': {
              'text-decoration': 'none', // No text decoration
              a: {
                'text-decoration': 'none', // No underline on links
              },
            },
            '@media (prefers-color-scheme: dark)': {
              'h2': {
                color: theme('colors.white'), // White text in dark mode
                a: {
                  color: theme('colors.white'), // Ensure links are also white
                },
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
