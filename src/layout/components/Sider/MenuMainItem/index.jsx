/**
 * MenuMainItem
 * @returns
 */
import { MIcon } from '@/components';
import styles from './index.module.css';
const MenuMainItem = ({
  icon,
  checked,
  title,
  onClick,
  className,
  isOpen,
  toggleable,
}) => {
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
      {toggleable && (
        <MIcon
          icon="chevron_right"
          className="ml-auto"
          style={{ transform: `rotate(${isOpen ? 90 : 0}deg)` }}
        />
      )}
    </div>
  );
};

export default MenuMainItem;
