<script setup lang='ts'>
import { Icon } from '@iconify/vue';

type Props = {

  /**
   * @type {string}
   */
  modelValue: string,
};

type Emits = {
  'update:modelValue': [value: Props['modelValue']],
};

defineProps<Props>();

let emit = defineEmits<Emits>();

const updateModelValue = (e: Event) => {
  let { value } = e.target as HTMLInputElement;

  emit('update:modelValue', value);
};
</script>

<template>
  <label
    class="search"
  >
    <Icon
      icon="lucide:search"
      class="search__icon"
    />

    <input
      :value="modelValue"
      type="search"
      placeholder="Search by author"
      class="search__field"
      @input="updateModelValue"
    >

    <button
      type="button"
      class="search__button"
    >
      Search
    </button>
  </label>
</template>

<style scoped>
.search {
  overflow: hidden;
  display: flex;
  align-items: center;

  width: 70%;
  padding-block: 0.25rem;
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.25rem;

  background: var(--sys-color-surface-container);
  border: 1px solid var(--sys-color-outline);
  border-radius: 1.5rem;

  &:focus-within {
    outline: var(--sys-outline);
    outline-offset: var(--sys-outline-offset);
  }

  &__field, &__button {
    font-weight: 500;
    background: none;
    border: none;
  }

  &__icon {
    font-size: 1.25rem;
  }

  &__field {
    flex: 1 0 auto;
    padding-inline-start: 0.75rem;
    outline: none;
  }

  &__button {
    cursor: pointer;

    padding-block: 0.5rem;
    padding-inline: 1rem;

    color: var(--sys-color-on-primary);

    background: var(--sys-color-primary);
    border-radius: 1.5rem;
  }
}

@media screen and (width < 768px) {
  .search {
    width: 100%;
  }
}
</style>
