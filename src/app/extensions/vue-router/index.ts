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
          redirect() {
            return 'articles';
          },
        },
        {
          name: 'articles',
          path: 'articles',
          component: () => import('~/views/pages/articles/index.vue'),
        },
        {
          path: '/articles/:id(\\d+)',
          component: () => import('~/views/pages/articles/id/index.vue'),
        }
      ],
    }
  ],
});

export { router };
