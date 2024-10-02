<template>
  <nav class="pagination" v-if="totalPages > 1">
    <button
      class="pagination__link pagination__link--prev"
      :class="{ 'pagination__link--current': page === 1 }"
      @click="goToPage(page - 1)"
      aria-label="Previous"
    >
      <Icon name="chevron-left" />
    </button>

    <button class="pagination__link" :class="{ 'pagination__link--current': item === page }" @click="goToPage(item)" v-for="item in pages">
      {{ item !== null ? item : "..." }}
    </button>

    <button
      class="pagination__link pagination__link--next"
      :class="{ 'pagination__link--current': page === totalPages }"
      @click="goToPage(page + 1)"
      aria-label="Next"
    >
      <Icon name="chevron-right" />
    </button>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (event: "update:page", n: number): void }>()
const props = defineProps({
  total: {
    type: Number,
    default: 1000,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  page: {
    type: Number,
    default: 1,
  },
})
const { total, pageSize, page } = toRefs(props)

let sortedUniq = (arr: number[]): number[] => [...new Set(arr)].sort((a, b) => a - b)
const totalPages = computed(() => Math.ceil(total.value / pageSize.value))
const pages = computed(() => {
  if (totalPages.value <= 7) return Array.from({ length: totalPages.value }, (_, k) => k + 1)

  const currentPageBlock = [page.value - 2, page.value - 1, page.value, page.value + 1, page.value + 2]
  const pages = sortedUniq([1, ...currentPageBlock, totalPages.value].map($ => Math.max(Math.min($, totalPages.value), 1)))
  return pages.flatMap((page, index) => {
    if (pages[index + 1] - page > 1) return [page, null]
    return page
  })
})

const goToPage = n => {
  if (!n || n < 1 || n > totalPages.value) return
  emit("update:page", n)
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  font-size: 1.675rem;

  &__link {
    &--current {
      opacity: 0.2;
    }

    &--prev,
    &--next {
      padding: 0.1875rem;

      [dir="rtl"] & {
        transform: rotate(180deg);
      }
    }

    // &--prev {
    //   padding-right: 2rem;
    // }

    // &--next {
    //   padding-left: 2rem;
    // }
  }
}
</style>
