import Layout from '../layout';
import Home from '../pages/home';
import Wine from '../pages/wine';
import Demo from '../pages/demo';

const menus = [
  {
    title: 'home',
    index: true,
    icon: 'home',
    element: <Home />,
  },
  {
    title: 'haha',
    path: '/haha',
    icon: 'menu',
    element: 'haha',
  },
  {
    title: 'hbhb',
    path: '/hbhb',
    icon: 'settings_backup_restore',
    children: [
      {
        index: true,
        element: <Wine />,
        title: 'wine',
      },
      {
        path: '/hbhb/cccc',
        element: 'hbhb',
        title: 'hbhb',
      },
      {
        path: '/hbhb/b',
        element: 'hbhb',
        title: 'hbhb',
      },
      {
        path: '/hbhb/c',
        element: 'hbhb',
        title: 'hbhb',
      },
      {
        path: '/hbhb/d',
        element: 'hbhb',
        title: 'hbhb',
      },
      {
        path: '/hbhb/e',
        element: 'hbhb',
        title: 'hbhb',
      },
      {
        path: '/hbhb/f',
        element: 'hbhb',
        title: 'hbhb',
      },
    ],
  },
  {
    path: '*',
    element: '404',
  },
  {
    title: 'demo',
    icon: 'menu',
    path: '/demo',
    element: <Demo />,
  },
];

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: menus,
  },
];

function getSideMenuItem(pre, { title, path = '/', children, index, ...rest }) {
  if (index || path !== '*') {
    return [
      ...pre,
      {
        title,
        path,
        key: path,
        children: children?.reduce(
          (prev, cur) =>
            getSideMenuItem(prev, cur.index ? { ...cur, path } : cur),
          [],
        ),
        ...rest,
      },
    ];
  }
  return pre;
}

export const sideMenus = menus.reduce(getSideMenuItem, []);

export default routes;
