
const route = [{
  path: '/login',
  component: 'Login'
}, {
  path: '/',
  component: '@/layouts/index',
  routes: [{
    path: '/',
    component: '@/pages/index'
  }]
}];

export default route;
