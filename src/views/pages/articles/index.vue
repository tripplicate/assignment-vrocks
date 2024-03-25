<script setup lang='ts'>

import { computed, reactive } from 'vue';

import { useQuery } from '@tanstack/vue-query';
import { useHead } from '@unhead/vue';

import { Api, Components } from '~/modules/articles';

useHead({
  title: 'Articles',
});

const state = reactive({
  searchValue: '',
});

const { data: response, isLoading } = useQuery({
  queryKey: [Api.GET_ALL.key],
  queryFn: Api.GET_ALL.handler,
});

const articles = computed(() => {
  return response.value?.filter(article => article.user.name.toLowerCase().includes(state.searchValue.toLowerCase()));
});

</script>

<template>
  <main class="content">
    <section class="content__header">
      <div class="container content__header-container">
        <h1 class="content__header-title">
          Millions of articles in one place
        </h1>

        <Components.Search v-model="state.searchValue" />
      </div>
    </section>

    <section class="content__feed">
      <div
        class="container content__feed-container"
      >
        <span v-if="isLoading">Loading</span>

        <RouterLink
          v-for="article in articles"
          v-else
          :key="article.id"
          v-slot="{navigate}"
          class="article-wrapper"
          :to="{
            path: `/articles/${article.id}`
          }"
        >
          <Components.Article
            :key="article.id"
            :content="article"
            @click="navigate"
          />
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  width: min(900px, 100dvw - 2rem);
  margin-inline: auto;
}
.content {
  display: flex;
  flex-flow: column;

  &__header {
    display: grid;
    flex: 1 0 50dvh;
    place-items: center;
    border-bottom: 1px solid var(--sys-color-outline);

    &-container {
      display: grid;
      gap: 3rem;
      place-items: center;
    }

    &-title {
      font-family: var(--sys-font-family-secondary);
      font-size: clamp(2rem, 5vw, 4rem);
      line-height: 1;
      text-align: center;
    }
  }

  &__feed {
    &-container {
      container-type: inline-size;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: subgrid;
      gap: 2rem;

      padding-block: 2rem;
    }
  }
}

.article-wrapper {
  color: unset;
  text-decoration: none;
}

@media screen and (width < 768px) {
  .content {
    &__header {
      flex-basis: 40dvh;
    }
    &__feed {
      &-container {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
