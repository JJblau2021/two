/**
 * MenuWrap
 * @returns
 */
import styles from './index.module.css';
import React, { useRef, useState, useMemo } from 'react';

const MenuWrap = ({
  children,
  open,
  value,
  onChange,
  options,
  mainItem,
  onOpenToggle,
}) => {
  const [innerOpen, setInnerOpen] = useState(false);
  const isOpen = useMemo(() => {
    if (open !== undefined) {
      return open;
    }
    return innerOpen;
  }, [open, innerOpen]);
  const mainMenuItem = React.cloneElement(mainItem, {
    ...mainItem.props,
    ...options,
    isOpen,
    toggleable: true,
    checked: value?.[0] === options?.key,
    onClick: () => {
      onOpenToggle && onOpenToggle(!open, options?.key);
      setInnerOpen(!innerOpen);
    },
  });
  const renderChildMenuItem = (props) => {
    return React.cloneElement(children, {
      ...children.props,
      ...props,
      checked: value?.[0] === options?.key && value?.[1] === props.key,
      onClick: () => onChange && onChange([options?.key, props.key], props),
    });
  };
  const contentRef = useRef();
  return (
    <div className={styles.menu__wrap}>
      {mainMenuItem}
      <div
        className={styles.menu__body}
        style={{ height: isOpen ? contentRef.current.offsetHeight : 0 }}
      >
        <div className={styles.menu__body__content} ref={contentRef}>
          {options?.children?.map(renderChildMenuItem)}
        </div>
      </div>
    </div>
  );
};

export default MenuWrap;
