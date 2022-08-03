/**
 * MIcon
 * @returns
 */

const MIcon = ({ icon, className, style, onClick }) => {
  return (
    <span
      className={['material-symbols-outlined', className].join(' ')}
      style={style}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

export default MIcon;
