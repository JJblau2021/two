import Layout from '../layout';
import Home from '../pages/home';

const menus = [
  {
    title: 'home',
    path: '/home',
    icon: 'home',
    children: [
      {
        index: true,
        element: <Home />,
        title: 'home',
        icon: 'search',
      },
    ],
  },
  {
    title: 'haha',
    path: '/haha',
    icon: 'menu',
    element: 'haha',
  },
  {
    path: '*',
    element: '404',
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
  if (index || path.endsWith(title)) {
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
