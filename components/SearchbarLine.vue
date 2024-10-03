<template>
  <form class="search-bar">

    <div class="search-bar__inner" :class="{ 'search-bar__inner--open': isMobileSearchVisible }">
      <div class="search-bar__body">

        <div class="search-bar__dropdown">
          <Dropdown 
            :options="locations" 
            v-model="selectedLocation" 
            placeholder="Location"
          />
        </div>

        <div class="search-bar__dropdown">
          <Dropdown 
            :options="propertyTypes" 
            v-model="selectedType" 
            placeholder="Type"
          />
        </div>

        <div class="search-bar__dropdown">
          <Dropdown 
            :options="priceOptions" 
            v-model="selectedPrice" 
            placeholder="Price"
          />
        </div>

        <div class="search-bar__dropdown">
          <Dropdown 
            :options="sizeOptions" 
            v-model="selectedSize" 
            placeholder="Size"
          />
        </div>

        <div class="search-bar__dropdown">
          <Dropdown 
            :options="bedroomsOptions" 
            v-model="selectedBedrooms" 
            placeholder="Bedrooms"
          />
        </div>

        <div class="search-bar__dropdown">
          <Dropdown 
            :options="bathroomsOptions" 
            v-model="selectedBathrooms" 
            placeholder="Bathrooms"
          />
        </div>

        <button type="button" class="search-bar__search-btn" @click="onSearch">
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
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

const sizeOptions = ref(["< 500 sqft", "500 - 1000 sqft", "1000 - 2000 sqft", "> 2000 sqft"])
const selectedSize = ref("")
const bedroomsOptions = ref(["1", "2", "3", "4", "5+"])
const selectedBedrooms = ref("")
const bathroomsOptions = ref(["1", "2", "3", "4", "5+"])
const selectedBathrooms = ref("")

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
.search-bar {
  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--color-black);
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 20px) 100%, 0 100%);
  }

  &__body {
    display: flex;
    align-items: center;
    width: 100%;

    @media (max-width: 1540px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      justify-items: center;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 508px) {
      grid-template-columns: 1fr;
    }
  }

  &__dropdown {
    margin-right: .8rem;
    flex: 1;
    width: 12rem;
  }

  &__search-btn {
    position: relative;
    cursor: pointer;
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: 1.2rem;
    overflow: hidden;
    width: 12rem;
    height: 2.21rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    clip-path: polygon(0 0, calc(100% - 20px) 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    transition: background-color 0.5s ease;

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
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    }

    &:hover {
      color: var(--color-black);
      background-color: var(--color-white);

      &::before {
        width: 100%;
      }
    }
  }
}
</style>
