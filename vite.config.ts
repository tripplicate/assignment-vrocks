import { URL, fileURLToPath } from 'node:url';

import ViteVuePlugin from '@vitejs/plugin-vue';
import PostcssAutoprefixerPlugin from 'autoprefixer';
import PostcssNestedPlugin from 'postcss-nested';
import { defineConfig } from 'vite';
import ViteCompressionPlugin from 'vite-plugin-compression';

export default defineConfig(() => {
  return {
    server: {
      host: '0.0.0.0',
      port: 8080,
      strictPort: true,
      proxy: {
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [
          PostcssAutoprefixerPlugin(),
          PostcssNestedPlugin()
        ],
      },
    },
    plugins: [
      ViteVuePlugin(),
      ViteCompressionPlugin()
    ],
  };
});
