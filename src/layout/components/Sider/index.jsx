/**
 * Sider
 * @returns
 */
import styles from './index.module.css';
import MenuWrap from '../../../components/MenuWrap';
import MenuItem from './MenuItem';
import { memo } from 'react';

const Sider = ({ menu, selectedKey, onSelect }) => {
  const renderMenuItem = (menuItem) => {
    const { children, key } = menuItem;
    return children ? (
      <MenuWrap
        key={key}
        options={menuItem}
        mainItem={<MenuItem />}
        value={selectedKey}
        onChange={onSelect && onSelect}
      >
        <MenuItem className="pl-6" />
      </MenuWrap>
    ) : (
      <MenuItem
        {...menuItem}
        checked={selectedKey && selectedKey[0] === key}
        onClick={() => {
          onSelect && onSelect([key], menuItem);
        }}
      />
    );
  };
  return <div className={styles.sider__wrap}>{menu?.map(renderMenuItem)}</div>;
};

export default memo(Sider);
