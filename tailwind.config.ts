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
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
