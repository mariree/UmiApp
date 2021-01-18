import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: '@/pages/login' },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:7000',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
});
