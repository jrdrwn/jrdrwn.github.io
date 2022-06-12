const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#602FF8',
        'on-primary': '#FFFFFF',
        'primary-container': '#E7DEFF',
        'on-primary-container': '#1A0063',
        secondary: '#605C71',
        'on-secondary': '#FFFFFF',
        'secondary-container': '#E6DFF9',
        'on-secondary-container': '#1C192B',
      },
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'hero-headline': ['1.5rem'],
        'hero-title': [
          '3rem',
          {
            letterSpacing: '2px',
            lineHeight: '1.15',
          },
        ],
        'hero-desc': [
          '1.1rem',
          {
            letterSpacing: '1px',
            lineHeight: '1.5',
          },
        ],
        button: [
          '1.05rem',
          {
            letterSpacing: '2px',
          },
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
