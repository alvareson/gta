<template>
  <form class="search-form">
    <div class="search-form__inner" :class="{ 'search-form__inner--open': isMobileSearchVisible }">

      <div class="search-form__body">
        <div class="search-form__input">
          <Icon class="search-form__icon" name="phone" />
          <input
            type="text"
            class="search-form__input-field"
            placeholder="Search for properties"
            v-model="neighborhood"
          />
        </div>
        <button type="button" class="search-form__filter-btn" @click="isFiltersOpen = true">
          Filters
        </button>
        <button type="button" class="search-form__search-btn" @click="onSearch">
          Search
        </button>
      </div>

    </div>
    <button class="search-form__toggle" type="button" @click="isMobileSearchVisible = true">
      {{ location }}
      <Icon name="search" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { useRouter } from 'vue-router'
import { useWatcher } from "@/composables/watcher"

const router = useRouter()
const isMobileSearchVisible = ref(false)
const isPriceRangeVisible = ref(false)
const priceBtnRef = ref()

const priceValue = ref([0, 1_000_000])
const dealType = ref('')
const neighborhood = ref('')
const communities = ref<string[]>([])
const minPrice = ref(0)
const maxPrice = ref(1_000_000)

const location = computed(() => "location")
const metaData: Ref<MetaData | null> = ref(null)

useWatcher(isMobileSearchVisible)

type MetaData = {
  minPrice: number
  maxPrice: number
  communities: string[]
}

const onSearch = () => {
  console.log("search")
}
</script>

<style lang="scss">
.search-form {
  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    background: #000000;
    padding: 1rem;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    margin-bottom: 1rem;
  }

  &__body {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__input {
    width: 32rem;
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
  }

  &__icon {
    margin-right: 0.5rem;
    color: #c4c4c4;
  }

  &__input-field {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #c4c4c4;
    background: transparent;
    padding: 0 0.5rem;
  }

  &__filter-btn,
  &__search-btn {
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  &__toggle {
    display: none;
    align-items: center;
    justify-content: space-between;
    width: min(22.375rem, 100%);
    height: 3rem;
    margin-inline: auto;
    padding-inline: 1rem;
    color: var(--color-quaternary);
    background: var(--color-white);

    @media (max-width: 47.9375rem) {
      display: flex;
    }
  }
}
</style>
