/**
 * Sider
 * @returns
 */
import styles from './index.module.css';
import MenuWrap from '../../../components/MenuWrap';
import MenuItem from './MenuItem';

const Sider = () => {
  return (
    <div className={styles.sider__wrap}>
      <MenuWrap
        options={{
          key: 'aaaa',
          title: 'aaaa',
          icon: 'home',
          children: [{ key: 'bbbb', title: 'bbbb', icon: 'home' }],
        }}
        mainItem={<MenuItem />}
      >
        <MenuItem />
      </MenuWrap>
    </div>
  );
};

export default Sider;
