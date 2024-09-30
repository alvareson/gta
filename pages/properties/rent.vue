<template>
  <div class="properties-rent">
    <div class="properties-rent__container">
      <header class="properties-rent__header">
        <h1 class="properties-rent__title text-h2">Properties For Rent ></h1>
        <SearchbarLine class="properties-rent__search-form" />
      </header>
      <div class="properties-rent__body">
        <div v-if="properties && properties.length > 0" class="properties-rent__list">
          <template v-for="property in properties" :key="property.id">
            <PropertyListItem :property="property" />
          </template>
        </div>
        <Pagination
          :total="100"
          :page-size="pageSize"
          :page="currentPage"
          @update:page="changePage"
          class="properties-rent__pagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watch, computed } from "vue"
import { getBrokers } from "~/data/properties/api"
import { PropertyTypes } from "~/utils/types"
import { useWatcher } from "@/composables/watcher"

const route = useRoute()

const pageTitle = computed(() => {
  const dealType = route.params.dealType
  return dealType === 'rent' ? 'PROPERTIES FOR RENT' : 'PROPERTIES FOR SALE'
})

const filters = ref({
  dealType: 'rent', // Set default to 'rent'
  category: '',
  neighborhood: '',
  minPrice: null,
  maxPrice: null,
})

const applyQueryParams = () => {
  const query = route.query
  filters.value.dealType = (query.dealType as string) || 'rent'
  filters.value.category = query.category as string
  filters.value.neighborhood = query.neighborhood as string
  filters.value.minPrice = query.minPrice ? Number(query.minPrice) : null
  filters.value.maxPrice = query.maxPrice ? Number(query.maxPrice) : null
}

const metaData = ref<object | null>(null)
const communities = ref<string[] | null>(null)
const pageSize = 15
const currentPage = ref(1)

const properties = computed(() => {
  return [
    {
      id: 1,
      icon: "/img/apartments/flat1.jpeg",
      price: 7701298,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Unique 1-Bedroom Property for Sale in UAE",
      type: "Sale",
      location: "Dubai , Al Barsha , Al Barsha Villas",
      description: `Overlooking the Dubai Canal and Burj Khalifa,
        this 5-bed penthouse close to Dubai Opera is part of
        Eywa — a boutique building by established developer R.Evolution with 48 exclusive residences,
        where ancient science, modern technology and world-class architecture combines.
        This continues into the master bedroom with a walk-in closet, as well as a spacious terrace
        with dining and seating areas — a green oasis floating in the air.`
    },
    {
      id: 2,
      icon: "/img/apartments/flat2.jpeg",
      price: 7701298,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Unique 1-Bedroom Property for Sale in UAE",
      type: "Sale",
      description: `Overlooking the Dubai Canal and Burj Khalifa,
        this 5-bed penthouse close to Dubai Opera is part of
        Eywa — a boutique building by established developer R.Evolution with 48 exclusive residences,
        where ancient science, modern technology and world-class architecture combines.
        This continues into the master bedroom with a walk-in closet, as well as a spacious terrace
        with dining and seating areas — a green oasis floating in the air.`
    },
    {
      id: 3,
      icon: "/img/apartments/flat3.jpeg",
      price: 7701298,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Unique 1-Bedroom Property for Sale in UAE",
      type: "Sale",
      description: `Overlooking the Dubai Canal and Burj Khalifa,
        this 5-bed penthouse close to Dubai Opera is part of
        Eywa — a boutique building by established developer R.Evolution with 48 exclusive residences,
        where ancient science, modern technology and world-class architecture combines.
        This continues into the master bedroom with a walk-in closet, as well as a spacious terrace
        with dining and seating areas — a green oasis floating in the air.`
    },
    {
      id: 4,
      icon: "/img/apartments/flat4.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
    },
    {
      id: 5,
      icon: "/img/apartments/flat5.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
    },
    {
      id: 6,
      icon: "/img/apartments/flat6.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
    },
    {
      id: 7,
      icon: "/img/apartments/flat7.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
    },
    {
      id: 8,
      icon: "/img/apartments/flat8.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
    }
  ]
})

// const queryString = computed(() => {
//   const params = new URLSearchParams()
//   for (const [key, value] of Object.entries(filters.value)) {
//     if (value) params.append(key, value.toString())
//   }
//   params.append('page', currentPage.value.toString())
//   params.append('pageSize', pageSize.toString())
//   return params.toString()
// })

// const { data: properties, refresh } = useFetch(computed(() => `/api/properties/properties?${queryString.value}`))
// const { data: brokersData } = await useAsyncData('brokers', () => getBrokers())

// async function fetchMetaData() {
//   try {
//     const response = await fetch(`/api/properties/meta`)
//     const data = await response.json()
//     metaData.value = data

//     if (metaData.value) {
//       filters.value.minPrice = metaData.value.minPrice || filters.value.minPrice
//       filters.value.maxPrice = metaData.value.maxPrice || filters.value.maxPrice
//       communities.value = metaData.value.communities || []
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

// onMounted(fetchMetaData)

// const findBrokerById = (brokerId) => {
//   return brokersData.value?.find(broker => broker.brokerId === brokerId) || {}
// }

const changePage = (newPage: number) => {
  currentPage.value = newPage
}

onMounted(() => {
  applyQueryParams()
})

watch(() => route.query, () => {
  applyQueryParams()
  // refresh() // Uncomment if using useFetch or similar for dynamic data
}, { deep: true })

// useSeoMeta({
//   title: "Properties | Horizon Vista Real Estate Agency",
//   description: "Explore a diverse range of luxury properties in Dubai, UAE with our premier real estate agency. From high-end villas to upscale apartments and commercial spaces, we offer a variety of options to suit your needs. Contact us to find your dream property in Dubai, UAE today.",
//   robots: "noimageindex",
//   keywords: "Dubai real estate, UAE properties, luxury homes Dubai, property investment Dubai, Dubai real estate agency, Dubai villas, Dubai apartments, commercial properties Dubai, luxury real estate Dubai, property for sale Dubai, residential properties Dubai.",
//   author: "Horizon Vista",
//   publisher: "Horizon Vista"
// })


// watch(currentPage, () => {
//   refresh()
// })

// function changePage(newPage: number) {
//   currentPage.value = newPage
// }

// const isMobileFilterVisible = ref(false)

// useWatcher(isMobileFilterVisible)
</script>

<style lang="scss">
.properties-rent {
  background: var(--color-black);

  &__search-form {
    width: max-content;
  }

  &__header {
    padding-top: clamp(0.5rem, 0.299rem + 1.8758vw, 1.15rem);
    padding-bottom: clamp(1.5rem, 0.9902rem + 2.0915vw, 3.5rem);
    color: var(--color-white);
    padding-inline: 2rem;
  }

  &__title {
    margin-bottom: 1.45rem;

    @media (max-width: 47.9375rem) {
      margin-bottom: 1.05rem;
    }
  }


  &__body {
    padding-top: clamp(1rem, 0.3627rem + 2.6144vw, 1.5rem);
    padding-bottom: clamp(2.5rem, 2.2451rem + 1.0458vw, 3.5rem);
    color: var(--color-black);
    background: var(--color-white);
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; 
    gap: 2rem;
    color: var(--color-white);
    padding: 0 2rem;
  }

  &__pagination {
    margin-top: 2.5rem;

    @media (max-width: 47.9375rem) {
      margin-top: 2rem;
    }
  }
}
</style>
