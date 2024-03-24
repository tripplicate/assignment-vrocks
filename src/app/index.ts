import { createApp, type Component } from 'vue';

import App from './App.vue';
import { unhead } from './extensions/unhead';
import { vueQuery } from './extensions/vue-query';
import { router } from './extensions/vue-router';

import '~/assets/styles/index.css';

const app = createApp(App as Component);

app
  .use(unhead)
  .use(router)
  .use(vueQuery);

app.mount('#root');
