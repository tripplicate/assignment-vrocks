<script setup lang='ts'>
import type { Article } from '../entities';

type Props = {

  /**
   * @type {Article}
   */
  content: Article,
};

defineProps<Props>();
</script>

<template>
  <article
    class="article"
  >
    <section class="article__banner" />

    <section class="article__body">
      <h2 class="article__title">
        {{ content.title }}
      </h2>

      <p class="article__subtitle">
        {{ content.body }}
      </p>
    </section>

    <footer>
      By {{ content.user.name }}
    </footer>
  </article>
</template>

<style scoped>
.article {
  cursor: pointer;

  display: flex;
  flex-flow: column;
  gap: 2rem;

  height: max-content;
  padding: 1rem;

  border-radius: 1rem;

  transition: background 0.25s;

  &:hover {
    background-color: var(--sys-color-surface-container-low);
  }

  &__banner {
    flex-shrink: 0;
    height: 140px;
    background: var(--sys-color-surface-container);
    border-radius: 1rem;
  }

  &__body {
    display: flex;
    flex: 1 0 auto;
    flex-flow: column;
    gap: 1rem;

    padding-inline: 1rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
  }

  &__subtitle::first-letter {
    text-transform: uppercase;
  }
}
</style>
