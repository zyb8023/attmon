
import Home from '../pages/home';
import About from '..//pages/about';
export const router = [{
  path: '/',
  redirect: '/home',
  exact: true
}, {
  path: '/home',
  components: Home,
  title: '首页'
}, {
  path: '/about',
  components: About
}];

export { default as RouteView } from './RouteView';
