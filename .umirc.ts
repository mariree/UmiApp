import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layout/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/chat' },
        { exact: true, path: '/users', component: '@/pages/users' },
        { exact: true, path: '/find', component: '@/pages/find' },
        { exact: true, path: '/mine', component: '@/pages/mine' },
      ],
    },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:7000',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
});
