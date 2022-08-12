const generateBtn = (theme) => {
  // Color
  const btnColorConfig = {
    main: 500,
    hover: 100,
    active: 200,
    focus: 200,
    'main-alt': 600,
    'main-light': 400,
  };
  const btnColors = [
    'theme',
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ];
  const mainColor = `var(--btn-color-main, ${theme(
    `colors.gray.${btnColorConfig.main}`,
  )})`;
  const hoverColor = `var(--btn-color-hover, ${theme(
    `colors.gray.${btnColorConfig.hover}`,
  )})`;
  const activeColor = `var(--btn-color-active, ${theme(
    `colors.gray.${btnColorConfig.active}`,
  )})`;
  const focusColor = `var(--btn-color-focus, ${theme(
    `colors.gray.${btnColorConfig.focus}`,
  )})`;
  const mainColorAlt = `var(--btn-color-main-alt, ${theme(
    `colors.gray.${btnColorConfig['main-alt']}`,
  )})`;
  const mainColorLight = `var(--btn-color-main-light, ${theme(
    `colors.gray.${btnColorConfig['main-light']}`,
  )})`;
  const generateBtnColor = (color) =>
    Object.entries(btnColorConfig).reduce(
      (prev, cur) => ({
        ...prev,
        [`--btn-color-${cur[0]}`]:
          theme(`colors.${color}.${cur[1]}`) || `var(--theme-color-${cur[1]})`,
      }),
      {},
    );
  const generateBtnColorClass = (colors) =>
    colors.reduce(
      (prev, color) => ({
        ...prev,
        [`.btn-${color}`]: generateBtnColor(color),
      }),
      {},
    );

  // Size
  const btnSizes = ['lg', 'md', 'sm'];
  // const btnSpacingY = {
  //   sm: 'spacing[0.5]',
  //   md: 'spacing.1',
  //   lg: 'spacing[1.5]',
  // };
  // const btnSapcingX = {
  //   sm: 'spacing[1.5]',
  //   md: 'spacing.2',
  //   lg: 'spacing[2.5]',
  // };
  const fontSize = `var(--btn-font-size, ${theme('fontSize.base')})`;
  // const spacingX = `var(--btn-spacing-x, ${theme('spacing.2')})`;
  const spacingX = '0.75em';
  // const spacingY = `var(--btn-spacing-y, ${theme('spacing.1')})`;
  const spacingY = '0.25em';
  // const borderRadius = `var(--btn-rounded, ${theme('borderRadius.md')})`;
  const borderRadius = '0.25em';
  const generateBtnSize = (size) => ({
    '--btn-font-size': theme(`fontSize.${size}`),
    // '--btn-spacing-x': theme(btnSapcingX[size]),
    // '--btn-spacing-y': theme(btnSpacingY[size]),
    // '--btn-rounded': theme(`borderRadius.${size}`),
  });
  const generateBtnSizeClass = (sizes) =>
    sizes.reduce(
      (prev, size) => ({
        ...prev,
        [`.btn-${size}`]: generateBtnSize(size),
      }),
      {},
    );
  return {
    '.btn': {
      fontSize,
      color: mainColor,
      padding: `${spacingY} ${spacingX}`,
      border: `${theme('borderWidth.2')} solid ${mainColor}`,
      borderRadius: borderRadius,
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: hoverColor,
      },
      '&:active': {
        backgroundColor: activeColor,
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${focusColor}`,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme('colors.gray.200'),
        color: theme('colors.gray.400'),
        borderColor: theme('colors.gray.400'),
      },
    },
    '.btn-fill': {
      color: '#fff',
      backgroundColor: mainColor,
      '&:hover': {
        backgroundColor: mainColorLight,
        borderColor: mainColorLight,
      },
      '&:active': {
        backgroundColor: mainColorAlt,
        borderColor: mainColorAlt,
      },
      '&:disabled': {
        backgroundColor: theme('colors.gray.400'),
        color: theme('colors.gray.200'),
        borderColor: theme('colors.gray.400'),
      },
    },
    '.btn-text': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '&:focus': {
        boxShadow: 'none',
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
    },
    '.btn-circle': {
      borderRadius: 9999,
    },
    ...generateBtnColorClass(btnColors),
    ...generateBtnSizeClass(btnSizes),
  };
};
module.exports = generateBtn;
