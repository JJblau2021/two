/**
 * MenuSubItem
 * @returns
 */
import styles from './index.module.css';

const MenuSubItem = ({ checked, title, onClick, className }) => {
  return (
    <div
      className={[
        styles.menu__item,
        className,
        checked ? styles.active : '',
      ].join(' ')}
      onClick={onClick}
    >
      <span>{title}</span>
    </div>
  );
};

export default MenuSubItem;
