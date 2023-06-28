const routes: Route[] = [
  {
    path: '',
    component: 'layout-default',
    children: [
      {
        path: '',
        component: 'page-home',
      },
      {
        path: '(.*)',
        component: 'page-oops',
      },
    ],
  },
];

export default routes;
export type Routes = typeof routes;
