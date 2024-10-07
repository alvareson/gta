<template>
  <div class="property-list-item">

    <div class="property-list-item__image-section">
      <div class="property-list-item__main-img-container">
        <Swiper
          class="property-list-item__swiper"
          :modules="[]"
          slides-per-view="auto"
        >
          <SwiperSlide v-for="(image, index) in allImages" :key="index">
            <img
              class="property-list-item__main-img"
              :src="image"
              alt="Property image"
            />
          </SwiperSlide>
        </Swiper>
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
      
      <ul class="property-list-item__data open-sans-text">
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
      <p class="property-list-item__price open-sans-text">{{ displayPrice }}</p>

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
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

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
  return `${price.toLocaleString('en-US').replace(/,/g, ",")} AED`
}

const formatRentPrice = (price: number) => {
  return `${price.toLocaleString('en-US')} / month`
}

const allImages = ref<string[]>([
  '/img/apartments/flat5.jpeg',
  '/img/apartments/flat6.jpeg',
  '/img/apartments/flat7.jpeg',
  '/img/apartments/flat8.jpeg'
])

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

    @media (max-width: 1400px) {
      flex-direction: column;
    }
  }

  &__main-img-container {
    flex: 2;
    overflow: hidden;
    height: 100%;

    @media (max-width: 1400px) {
      width: 100%;
      height: auto;
      flex-direction: row;
    }
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

    @media (max-width: 1400px) {
      flex: 0;
      flex-direction: row;
    }

    @media (max-width: 1700px) {
      display: none;
    }
  }

  &__small-img {
    width: 100%;
    height: calc(50% - 0.5rem);
    object-fit: cover;
    display: block;

    @media (max-width: 1400px) {
      width: calc(50% - 0.25rem);
      height: 100px;
    }
  }

  &__details {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
    height: 20rem;

    @media (max-width: 1400px) {
      height: auto;
      grid-column: 1 / -1;
      margin-left: 0;
    }

    @media (max-width: 1400px) {
      grid-column: 1 / -1;
      margin-left: 0;
    }
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 0.1rem;
    color: var(--color-black);
    letter-spacing: 0.09rem;

    @media (max-width: 1400px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  &__location {
    font-size: 1.2rem;
    color: var(--color-black);
    padding-bottom: 0.4rem;

    @media (max-width: 1400px) {
      text-align: center;
    }
  }

  &__data {
    display: flex;
    gap: 4rem;
    margin-bottom: 1rem;

    @media (max-width: 1400px) {
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-block: 2rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &-item {
      display: flex;
      align-items: center;
      color: var(--color-black);
    }

    &-bed {
      margin-left: 1rem;
    }

    &-bath {
      margin-left: 0.1rem;
    }

    &-area {
      margin-left: 1rem;
    }
  }

  &__description {
    font-size: 1.2rem;
    color: var(--color-black);
    margin-bottom: 0.2rem;
    max-width: 100%;

    @media (max-width: 1400px) {
      text-align: center;
    }
  }

  &__price {
    font-size: 2.8rem;
    color: var(--color-grey);

    @media (min-width: 1700px) and (max-width: 1840px) {
      font-size: 2.4rem;
    }

    @media (max-width: 1400px) {
      text-align: center;
    }
  }

  &__details-button {
    position: absolute;
    display: inline-block; 
    font-size: 1.3rem;
    bottom: 2rem;
    right: 5rem;
    padding: 0.1rem 2.2rem;
    background-color: var(--color-black);
    color: var(--color-white);
    text-decoration: none;
    overflow: hidden;
    transition: color 0.3s ease;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% calc(100% - 20px),
      calc(100% - 20px) 100%,
      0% 100%
    );

    @media (max-width: 1400px) {
      position: static;
      align-self: center;
      font-size: 1rem;
      padding: 0.5rem 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      background-color: var(--color-black);
      color: var(--color-white);
      text-decoration: none;
      overflow: hidden;
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
      transition: width 0.3s ease;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% calc(100% - 20px),
        calc(100% - 20px) 100%,
        0% 100%
      );
    }

    &:hover {
      color: var(--color-black);

      &::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    padding: .4rem .4rem;
  }
}
</style>
