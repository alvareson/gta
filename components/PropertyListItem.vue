<template>
  <div class="property-list-item">

    <div class="property-list-item__image-section">
      <div class="property-list-item__main-img-container">
        <img
          class="property-list-item__main-img"
          v-if="property.icon"
          :src="property.icon"
          alt="Property main image"
        />
      </div>
      <div class="property-list-item__small-images">
        <img
          v-for="(image, index) in smallImages"
          :key="index"
          class="property-list-item__small-img"
          :src="image"
          alt="Small image"
        />
      </div>
    </div>

    <div class="property-list-item__details">
      <h2 class="property-list-item__title">{{ property.title }}</h2>
      <p class="property-list-item__location">{{ property.location }}</p>
      
      <ul class="property-list-item__data semibold-text">
        <li class="property-list-item__data-item">
          <span class="property-list-item__icon">🛏️</span> {{ property.beds }} bedrooms
        </li>
        <li class="property-list-item__data-item">
          <span class="property-list-item__icon">🛁</span> {{ property.baths }} bathrooms
        </li>
        <li class="property-list-item__data-item">
          <span class="property-list-item__icon">📐</span> {{ property.area }} {{ measurement }}
        </li>
      </ul>

      <p class="property-list-item__description">{{ property.description }}</p>

      <p class="property-list-item__price">{{ displayPrice }}</p>

      <AppLink
        class="property-list-item__details-button"
        :to="`/properties/${property.id}`"
      >
        View Details
      </AppLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import { MeasurementUnit } from '~/utils/types'

const props = defineProps({
  property: {
    type: Object as PropType<any>,
    required: true
  }
})

const measurement = ref<MeasurementUnit>(MeasurementUnit.SquareFeet)

const displayPrice = computed(() => {
  return props.property.deal === 'sale'
    ? formatSalePrice(props.property.price)
    : formatRentPrice(props.property.price)
})

const formatSalePrice = (price: number) => {
  return `AED ${price.toLocaleString('en-US')}`
}

const formatRentPrice = (price: number) => {
  return `AED ${price.toLocaleString('en-US')} / month`
}

const smallImages = ref<string[]>([
  '/img/apartments/flat2.jpeg',
  '/img/apartments/flat3.jpeg'
])
</script>

<style lang="scss">
.property-list-item {
  display: grid;
  grid-template-columns: 5fr 7fr;
  border: 2px solid #ccc;
  gap: 1.5rem;
  padding: 3rem;

  &__image-section {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    grid-column: 1 / 2;
    height: 100%;
  }

  &__main-img-container {
    flex: 2;
    overflow: hidden;
    border-radius: 8px;
  }

  &__main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__small-images {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__small-img {
    width: 100%;
    height: calc(50% - 0.25rem);
    object-fit: cover;
    border-radius: 8px;
    display: block;
  }

  &__details {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__location {
    font-size: 1rem;
    color: #777;
    margin-bottom: 1rem;
  }

  &__data {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    &-item {
      display: flex;
      align-items: center;
    }

    &__icon {
      margin-right: 0.5rem;
    }
  }

  &__description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  &__price {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
  }

  &__details-button {
    align-self: flex-start;
    padding: 0.75rem 1.5rem;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #444;
    }
  }

  @media (max-width: 768px) {
    .property-list-item {
      grid-template-columns: 1fr;
    }

    .property-list-item__image-section,
    .property-list-item__details {
      grid-column: unset;
      width: 100%;
      height: auto;
    }

    .property-list-item__image-section {
      flex-direction: column;
      height: auto;
    }

    .property-list-item__main-img-container {
      width: 100%;
      height: 200px;
    }

    .property-list-item__small-images {
      width: 100%;
      flex-direction: row;
      gap: 0.5rem;
      height: 100px;
    }

    .property-list-item__small-img {
      height: 100%;
      width: calc(50% - 0.25rem);
    }
  }
}
</style>