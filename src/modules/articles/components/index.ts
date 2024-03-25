import type { Component } from 'vue';

import Article from './Article.vue';
import Search from './Search.vue';

export const Components = {
  Search: Search as Component,
  Article: Article as Component,
};
