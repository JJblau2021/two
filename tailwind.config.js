const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      pink: colors.pink,
      white: colors.white,
      gray: colors.warmGray,
    },
    extend: {},
  },
  plugins: [],
};
