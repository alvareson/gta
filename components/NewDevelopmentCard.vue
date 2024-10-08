<template>
  <AppLink class="new-development-card" :to="`/properties/${property.id}`">
    <div class="new-development-card__image-container">
      <img
        class="new-development-card__img"
        v-if="property.icon"
        :src="property.icon"
        alt=""
      />
      <div 
        :class="[
          'new-development-card__content',
          'open-sans-text',
          { 'new-development-card__content--offplan': page === 'offplan' }
        ]"
      >
        <div class="new-development-card__title semibold-text" v-if="property.title">
          {{ property.title }}
        </div>
        <p class="new-development-card__price" v-if="property.price">
          {{ displayPrice }}
        </p>
        <ul class="new-development-card__data">
          <li class="new-development-card__data-item">{{ property.beds }} beds</li>
          <li class="new-development-card__data-item">{{ property.baths }} baths</li>
        </ul>
      </div>
      <div
        :class="[
          'new-development-card__more-details',
          { 'new-development-card__more-details--offplan': page === 'offplan' }
        ]"
      >
        more details &gt;
      </div>
    </div>
  </AppLink>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import { MeasurementUnit } from '~/utils/types'

const props = defineProps({
  property: {
    type: Object as PropType<any>,
    required: true,
  },
  page: {
    type: String,
    required: false,
    default: "home"
  }
})

const measurement = ref<MeasurementUnit>(MeasurementUnit.SquareFeet)

const displayPrice = computed(() => {
  return `${props.property.price.toLocaleString('en-US')} AED`
})
</script>


<style lang="scss">
.new-development-card {
  border: 0.0625rem solid var(--color-quinary);
  transition: border 0.25s;
  background-color: var(--color-quaternary);
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  &__image-container {
    position: relative;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.5) 25%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      mix-blend-mode: multiply;
      transition: opacity 0.4s ease-in-out;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        .new-development-card__more-details {
          opacity: 1;
          transform: translate(-50%, -12.8rem);
        }
        &::before {
          opacity: 0;
        }
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    width: max-content;
    top: 16%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-white);
    text-align: center;
    padding: 1rem;

    @media (min-width: 769px) and (max-width: 1400px) {
      top: 26%;
    }

    @media (max-width: 768px) {
      top: 20%;
      padding: 0.8rem;
    }

    @media (max-width: 480px) {
      top: 28%;
      padding: 0.6rem;
    }
  }

  &__more-details {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: opacity 0.4s, transform 0.4s ease-in-out;
    color: var(--color-white);
    font-size: 1.8rem;
    text-align: center;
    pointer-events: none;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  &__more-details--offplan {
    bottom: -10rem;
  }

  &__title {
    font-size: 1.8rem;
    font-weight: 700;

    @media (min-width: 769px) and (max-width: 1400px) {
      font-size: 1.4rem;
    }

    @media (min-width: 640px) and (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 639px) {
      font-size: 1rem;
    }
  }

  &__data {
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    padding: 0;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &__data-item {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0.4rem;

    @media (min-width: 640px) and (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 639px) {
      font-size: 1rem;
    }

    &:not(:first-child) {
      &::before {
        content: '•';
        padding-right: 1rem;
      }
    }
  }

  &__price {
    font-size: 1.4rem;
    font-weight: 600;

    @media (min-width: 640px) and (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 639px) {
      font-size: 1.2rem;
    }
  }

  .new-development-card__content--offplan {
    top: 20%;

    @media (min-width: 769px) and (max-width: 1400px) {
      top: 46%;
    }

    @media (max-width: 768px) {
      top: 40%;
    }

    @media (max-width: 480px) {
      top: 48%;
    }
  }
}
</style>
