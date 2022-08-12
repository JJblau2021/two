const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const generateBtn = require('./theme/btn');
const genThemeVars = (defaultColor) =>
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (prev, cur) => ({
      ...prev,
      [`${cur}`]: `var(--theme-color-${cur}, ${defaultColor})`,
    }),
    {},
  );
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
        theme: genThemeVars('#ccc'),
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents(generateBtn(theme));
    }),
  ],
};
