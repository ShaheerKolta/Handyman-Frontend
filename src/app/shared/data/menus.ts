export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '/profile',
    name: 'My Profile'
  },
  {
    path: '/auth/requestHistory',
    name: 'Requests'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
];
