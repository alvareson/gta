<template>
  <form class="search-form">

    <div class="search-form__inner" :class="{ 'search-form__inner--open': isMobileSearchVisible }">
      <div class="search-form__body">

        <div class="search-form__dropdown">
          <Dropdown 
            :options="locations" 
            v-model="selectedLocation" 
            placeholder="Location"
          />
        </div>

        <div class="search-form__dropdown">
          <Dropdown 
            :options="propertyTypes" 
            v-model="selectedType" 
            placeholder="Type"
          />
        </div>

        <div class="search-form__dropdown">
          <Dropdown 
            :options="priceOptions" 
            v-model="selectedPrice" 
            placeholder="Price"
          />
        </div>

        <button type="button" class="search-form__search-btn" @click="onSearch">
          <p class="search-form__search-btn-text">Search</p>
        </button>
      </div>
    </div>

    <div class="search-form__buttons">
      <button type="button" class="search-form__button-buy" @click="setDealType('buy')">Buy</button>
      <button type="button" class="search-form__button-rent" @click="setDealType('rent')">Rent</button>
    </div>

  </form>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from 'vue'
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

const locations = ref(["New York", "Los Angeles", "Chicago", "Miami"])
const propertyTypes = ref(["Apartment", "House", "Condo", "Townhouse"])
const priceOptions = ref(["< $500k", "$500k - $1M", "$1M - $2M", "> $2M"])
const selectedLocation = ref("")
const selectedType = ref("")
const selectedPrice = ref("")

useWatcher(isMobileSearchVisible)

type MetaData = {
  minPrice: number
  maxPrice: number
  communities: string[]
}

const onSearch = () => {
  console.log("search")
}

const setDealType = (type: string) => {
  dealType.value = type
}
</script>

<style lang="scss">
.search-form {
  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--color-black);
    padding: 1.1rem;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 20px) 100%, 0 100%);
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 36rem;
      padding: 1.1rem;
    }

    @media (max-width: 554px) {
      width: 16rem;
      padding: 1.1rem;
    }

    @media (max-width: 404px) {
      width: 12rem;
      padding: 1.1rem;
    }
  }

  &__body {
    display: flex;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }

  &__dropdown {
    margin-right: 1rem;
    flex: 1;
    width: 10rem;

    @media (max-width: 947px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      padding-top: 0.8rem;
    }
  }

  &__search-btn {
    position: relative;
    cursor: pointer;
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: 1rem;
    width: 8rem;
    height: 1.77rem;
    margin-right: 0.8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 0.8rem;
    clip-path: polygon(0 0, calc(100% - 20px) 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    transition: background-color 0.5s ease, color 0.5s ease;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }

    &-text {
      @media (max-width: 947px) {
        padding-right: 40px;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: var(--color-lemon);
      z-index: -1;
      transition: width 0.5s ease;
      clip-path: inherit;
    }

    &:hover {
      color: var(--color-black);
      background-color: var(--color-white);

      &::before {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      width: auto;
    }
  }

  &__buttons {
    display: flex;
  }

  &__button-buy,
  &__button-rent {
    display: flex;
    width: 6rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 15px) 100%, 0 100%);
    transform: translateY(-1px);
    transition: all 0.3s ease;
  }

  &__button-buy {
    background-color: var(--color-black);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-black);
    }
  }

  &__button-rent {
    background-color: var(--color-lemon);
    color: var(--color-black);

    &:hover {
      background-color: var(--color-lemon);
    }
  }
}
</style>
