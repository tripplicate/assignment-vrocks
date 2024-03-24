<script setup lang='ts'>
import { useQuery } from '@tanstack/vue-query';
import { useHead } from '@unhead/vue';
import ky from 'ky';

useHead({
  title: 'Homepage',
});

const { data } = useQuery({
  queryKey: ['users'],
  queryFn: async () => await ky.get('http://jsonplaceholder.typicode.com/users').json(),
});
</script>

<template>
  <main>
    <h1>Homepage</h1>

    <pre lang="json">{{ JSON.stringify(data, null, 2) }}</pre>
  </main>
</template>
