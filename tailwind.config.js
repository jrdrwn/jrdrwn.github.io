const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['index.html', 'public/js/main.js'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: { darkTheme: 'night', themes: ['night', 'cupcake'] },
};
