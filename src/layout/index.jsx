/**
 * Layout
 * @returns
 */
import './index.css';
import { Outlet, useNavigate, useLocation } from 'react-router';
import Sider from './components/Sider';
import { useMemo, useCallback } from 'react';
import { sideMenus } from '../router/routes';
import ThemeChanger from './components/ThemeChanger';

const themes = [
  {
    name: 'theme-primary',
    bg: 'bg-primary-300',
    active: 'bg-primary-500',
  },
  {
    name: 'theme-secondary',
    bg: 'bg-secondary-300',
    active: 'bg-secondary-500',
  },
  {
    name: 'theme-tertiary',
    bg: 'bg-tertiary-300',
    active: 'bg-tertiary-500',
  },
  {
    name: 'theme-quaternary',
    bg: 'bg-quaternary-300',
    active: 'bg-quaternary-500',
  },
];
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
      <main className="app__content__wrap ">
        <div className="app__content__container">
          <Outlet />
        </div>
      </main>
      <header className="app__header">
        headder
        <ThemeChanger themes={themes} />
      </header>
    </div>
  );
};

export default Layout;
