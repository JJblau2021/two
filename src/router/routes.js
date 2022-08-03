import Layout from '../layout';
import Home from '../pages/home';

const menus = [{ title: 'home', index: true, element: <Home /> }];

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: menus,
  },
];

const getSideMenuItem = (pre, { title, path = '/', children, index }) => {
  if (index || path.endsWith(title)) {
    return [
      ...pre,
      {
        title,
        path,
        key: path,
        children: children?.reduce(getSideMenuItem, []),
      },
    ];
  }
  return pre;
};

export const sideMenus = menus.reduce(getSideMenuItem, []);

export default routes;
