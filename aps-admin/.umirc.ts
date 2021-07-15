import { defineConfig } from 'umi';
import route from './route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash'
  },
  routes: route,
  fastRefresh: {},
  webpack5: {},
  mfsu: {}
});
