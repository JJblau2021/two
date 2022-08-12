const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const generateBtn = require('./theme/btn');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      pink: colors.pink,
      white: colors.white,
      gray: colors.warmGray,
      indigo: colors.indigo,
      primary: colors.pink,
      secondary: colors.indigo,
      tertiary: colors.green,
      quaternary: colors.orange,
      green: colors.green,
      orange: colors.orange,
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents(generateBtn(theme));
    }),
  ],
};
