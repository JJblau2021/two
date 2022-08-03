/**
 * MenuItem
 * @returns
 */
import MIcon from '../../../../components/MIcon';
import styles from './index.module.css';
const MenuItem = ({ icon, checked, title, onClick }) => {
  return (
    <div
      className={[styles.menu__item, checked ? styles.active : ''].join(' ')}
      onClick={onClick}
    >
      <MIcon icon={icon} />
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;
