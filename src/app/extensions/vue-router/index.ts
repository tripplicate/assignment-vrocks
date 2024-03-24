import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('~/views/pages/notfound.vue'),
    },
    {
      path: '/',
      component: () => import('~/views/layouts/default.vue'),
      children: [
        {
          path: '',
          component: () => import('~/views/pages/homepage.vue'),
        }
      ],
    }
  ],
});

export { router };
