<template>
  <div class="developments">
    <header class="developments__header">
      <div class="developments__container">
        <h1 class="developments__title text-h2">Off Plan Properties ›</h1>
        <SearchbarLine class="developments__search-form" />
      </div>
    </header>
    <div class="developments__body">
      <div class="container">
        <!-- <div v-if="developments?.data && developments?.data.length > 0" class="developments__cards">
          <template v-for="property in developments.data" :key="developments.data.id">
            <PropertyCard :property="property" :broker="findBrokerById(property.broker.id)" />
          </template>
        </div> -->
        <div v-if="developments && developments.length > 0" class="developments__cards">
          <template v-for="development in developments" :key="developments.id">
            <NewDevelopmentCard class="developments__card" :property="development" />
          </template>
        </div>
        <Pagination :total="100" :page-size="pageSize" :page="currentPage" @update:page="changePage" class="developments__pagination" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watch, computed } from "vue"
// import { getBrokers } from "~/data/developments/api"
import { PropertyTypes } from "~/utils/types"
import { useWatcher } from "@/composables/watcher"

const pageTitle = computed(() => {
  const dealType = route.params.dealType
  return dealType === 'sale' ? 'developments FOR SALE' : 'developments FOR RENT'
})

const filters = ref({
  dealType: '',
  category: '',
  neighborhood: '',
  minPrice: null,
  maxPrice: null,
})

const applyQueryParams = () => {
  const query = route.query
  filters.value.dealType = query.dealType as string
  filters.value.category = query.category as string
  filters.value.neighborhood = query.neighborhood as string
  filters.value.minPrice = query.minPrice ? Number(query.minPrice) : null
  filters.value.maxPrice = query.maxPrice ? Number(query.maxPrice) : null
}

const metaData = ref<object | null>(null)
const communities = ref<string[] | null>(null)
const route = useRoute()
const pageSize = 15
const currentPage = ref(1)

const changePage = (newPage: number) => {
  currentPage.value = newPage
}

const developments = computed(() => {
  return [
    {
      id: 1,
      icon: "/img/apartments/flat1.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
    },
    {
      id: 2,
      icon: "/img/apartments/flat2.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
    },
    {
      id: 3,
      icon: "/img/apartments/flat3.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in DownTown",
      type: "Sale"
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

// const { data: developments, refresh } = useFetch(computed(() => `/api/developments/developments?${queryString.value}`))
// const { data: brokersData } = await useAsyncData('brokers', () => getBrokers())

// async function fetchMetaData() {
//   try {
//     const response = await fetch(`/api/developments/meta`)
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

onMounted(async () => {
  applyQueryParams()
  // metaData.value = meta.value
  // if (metaData.value) {
  //   communities.value = metaData.value.communities
  // }
})

// useSeoMeta({
//   title: "developments | Horizon Vista Real Estate Agency",
//   description: "Explore a diverse range of luxury developments in Dubai, UAE with our premier real estate agency. From high-end villas to upscale apartments and commercial spaces, we offer a variety of options to suit your needs. Contact us to find your dream property in Dubai, UAE today.",
//   robots: "noimageindex",
//   keywords: "Dubai real estate, UAE developments, luxury homes Dubai, property investment Dubai, Dubai real estate agency, Dubai villas, Dubai apartments, commercial developments Dubai, luxury real estate Dubai, property for sale Dubai, residential developments Dubai.",
//   author: "Horizon Vista",
//   publisher: "Horizon Vista"
// })

watch(() => route.query, () => {
  applyQueryParams()
  // refresh()
}, { deep: true })

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
.developments {
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
    padding-top: clamp(1rem, 0.3627rem + 2.6144vw, 3.5rem);
    padding-bottom: clamp(2.5rem, 2.2451rem + 1.0458vw, 3.5rem);
    color: var(--color-black);
    background: var(--color-tertiary);
    padding-inline: 3rem;
  }

  &__pagination {
    margin-top: 2.5rem;

    @media (max-width: 47.9375rem) {
      margin-top: 2rem;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1rem, 0.6176rem + 1.5686vw, 2.5rem);
    color: var(--color-white);

    .property-card,
    .property-card__person {
      border-color: rgba(var(--color-black-grb), 0.2);
    }
  }
}
</style>
  