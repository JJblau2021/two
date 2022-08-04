/**
 * Layout
 * @returns
 */
import './index.css';
import { Outlet, useNavigate, useLocation } from 'react-router';
import Sider from './components/Sider';
import { useMemo, useCallback } from 'react';
import { sideMenus } from '../router/routes';

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const selectedKey = useMemo(() => {
    const ret = /^(\/[^/]*)(\/[^/]*)?/.exec(pathname);
    if (!ret) return [];
    return [ret[1], ret[0]];
  }, [pathname]);
  const onSelect = useCallback(
    (key) => {
      navigate(key[1] || key[0]);
    },
    [navigate],
  );

  return (
    <div className="app__wrap">
      <div className="app__sider__wrap">
        <Sider menu={sideMenus} selectedKey={selectedKey} onSelect={onSelect} />
      </div>
      <div className="app__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
