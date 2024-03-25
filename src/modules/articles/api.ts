import { httpClient } from '~/shared/lib/http';

import type { ResponsePromise } from 'ky';

import type { Article } from './entities';

export const GET_ALL = {
  key: 'GET_ALL_ARTICLES',
  handler: async () => {
    const request = '/api/posts';

    const articles = await httpClient.get(request).json<Article[]>();
    const cache = new Map<string, ResponsePromise>();

    const promises = articles.map(async (article) => {
      const request = `/api/users/${article.userId}`;

      if (!cache.has(request)) {
        cache.set(request, httpClient.get(request));
      }

      const user = await cache.get(request)?.json() as Article['user'];

      return {
        ...article,
        user,
      };
    });

    return Promise.all(promises);
  },
};
