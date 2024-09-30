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
      
      <ul class="property-list-item__data">
        <li class="property-list-item__data-item">
          <Icon name="bed" width="28" height="28" color="black" />
          <p class="property-list-item__data-bed">{{ property.beds }} bedrooms</p>
        </li>
        <li class="property-list-item__data-item">
          <Icon name="bath" width="34" height="34" />
          <p class="property-list-item__data-bath">{{ property.baths }} bathrooms</p>
        </li>
        <li class="property-list-item__data-item">
          <Icon name="square" width="23" height="23" />
          <p class="property-list-item__data-area">{{ property.area }} {{ measurement }}</p>
        </li>
      </ul>

      <p class="property-list-item__description">{{ property.description }}</p>
      <p class="property-list-item__price">{{ displayPrice }}</p>

      <AppLink
        class="property-list-item__details-button"
        :to="`/properties/${property.id}`"
      >
        view details
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
  return props.property.type === 'Sale'
    ? formatSalePrice(props.property.price)
    : formatRentPrice(props.property.price)
})

const formatSalePrice = (price: number) => {
  return `${price.toLocaleString('en-US').replace(/,/g, "'")} AED`
}

const formatRentPrice = (price: number) => {
  return `${price.toLocaleString('en-US')} / month`
}

const smallImages = ref<string[]>([
  '/img/apartments/flat2.jpeg',
  '/img/apartments/flat3.jpeg'
])
</script>

<style lang="scss">
.property-list-item {
  position: relative;
  margin: 1rem;
  display: grid;
  grid-template-columns: 5fr 7fr;
  border: 2px solid var(--color-black);
  gap: 1.5rem;
  padding: 1rem;
  background: var(--color-white);
  overflow: hidden;
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 80px), calc(100% - 70px) 100%, 0% 100%);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -11px;
    right: -50px;
    width: 126px;
    height: 2px;
    background: var(--color-black);
    transform: rotate(-48.9deg);
    transform-origin: left;
    z-index: 1;
  }

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
    display: block;
  }

  &__details {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 0.1rem;
    color: var(--color-black);
    letter-spacing: 0.09rem;
  }

  &__location {
    font-size: 1.2rem;
    color: var(--color-black);
  }

  &__data {
    display: flex;
    gap: 4rem;
    margin-bottom: 1rem;

    &-item {
      display: flex;
      align-items: center;
      color: var(--color-black);
    }

    &-bed {
      margin-left: 1rem;
    }

    &-bath {

    }

    &-area {
      margin-left: 1rem;
    }
  }

  &__description {
    font-size: 1.2rem;
    color: var(--color-black);
    margin-bottom: 1rem;
    color: var(--color-black);
    max-width: 70rem;
  }

  &__price {
    font-size: 2.8rem;
    color: var(--color-secondary);
  }

  &__details-button {
    position: absolute;
    font-size: 1.3rem;
    bottom: 2rem;
    right: 5rem;
    padding: 0.35rem 1.5rem;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s;
    clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%);

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