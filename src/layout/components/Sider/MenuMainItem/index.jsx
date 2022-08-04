/**
 * MenuMainItem
 * @returns
 */
import MIcon from '@/components/MIcon';
import styles from './index.module.css';
const MenuMainItem = ({ icon, checked, title, onClick, className }) => {
  return (
    <div
      className={[
        styles.menu__item,
        className,
        checked ? styles.active : '',
      ].join(' ')}
      onClick={onClick}
    >
      <MIcon icon={icon} className={styles.menu__icon} />
      <span>{title}</span>
    </div>
  );
};

export default MenuMainItem;
