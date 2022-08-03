/**
 * Layout
 * @returns
 */
import './index.css';
import { Outlet } from 'react-router';
import Sider from './components/Sider';

const Layout = () => {
  return (
    <div className="app__wrap">
      <div className="app__sider__wrap">
        <Sider />
      </div>
      <div className="app__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
