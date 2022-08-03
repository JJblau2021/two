/**
 * MenuWrap
 * @returns
 */
import styles from './index.module.css';
import React, { useRef } from 'react';

const MenuWrap = ({
  children,
  open,
  value,
  onChange,
  options,
  mainItem,
  onOpenToggle,
}) => {
  const mainMenuItem = React.cloneElement(mainItem, {
    ...mainItem.props,
    ...options,
    checked: value?.[0] === options?.key,
    onClick: onOpenToggle && onOpenToggle(options?.key),
  });
  const renderChildMenuItem = (props) => {
    return React.cloneElement(children, {
      ...children.props,
      ...props,
      checked: value?.[1] === props.key,
      onClick: onChange && onChange([options?.key, props.key], props),
    });
  };
  const contentRef = useRef();
  return (
    <div className={styles.menu__wrap}>
      <div className={styles.menu__main}>{mainMenuItem}</div>
      <div
        className={styles.menu__body}
        style={{ height: open ? contentRef.current.offsetHeight : 0 }}
      >
        <div className={styles.menu__body__content} ref={contentRef}>
          {options?.children?.map(renderChildMenuItem)}
        </div>
      </div>
    </div>
  );
};

export default MenuWrap;
