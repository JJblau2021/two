/**
 * Button
 * @returns
 */
// const btnColors = [
//   'gray',
//   'red',
//   'yellow',
//   'green',
//   'blue',
//   'indigo',
//   'purple',
//   'pink',
// ];

const btnClass = new Proxy(
  {
    default: '',
    // color
    theme: 'btn-theme',
    red: 'btn-red',
    gray: 'btn-gray',
    yellow: 'btn-yellow',
    green: 'btn-green',
    blue: 'btn-blue',
    indigo: 'btn-indigo',
    pink: 'btn-pink',
    // size
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    // type
    fill: 'btn-fill',
    text: 'btn-text',
    circle: 'btn-circle',
  },
  {
    get(t, p) {
      if (t[p]) return ` ${t[p]}`;
      return '';
    },
  },
);

const generateBtnClass = ({ size, color, type, circle }) => {
  return `btn${btnClass[color]}${btnClass[size]}${btnClass[type]}${
    circle ? btnClass.circle : ''
  }`;
};
const Button = ({
  children,
  color = 'theme',
  size = 'md',
  type = 'default',
  circle,
  className,
  ...rest
}) => {
  return (
    <button
      className={[
        generateBtnClass({ color, size, type, circle }),
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
