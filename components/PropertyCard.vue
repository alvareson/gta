<template>
	<AppLink class="property-card" :to="`/properties/${property.id}`">
    <img class="property-card__img" v-if="property.icon" :src="property.icon" alt="" />
    <div class="property-card__type" v-if="property.type">{{ property?.type }}</div>
    <div class="property-card__inner">
      <p class="property-card__price semibold-text" v-if="property.price">
        {{ displayPrice }}
      </p>
      <ul class="property-card__data semibold-text">
        <li class="property-card__data-item">{{ property.beds }} beds</li>
        <li class="property-card__data-item">{{ property.baths }} baths</li>
        <li class="property-card__data-item">{{ property.area }} {{ measurement }}</li>
      </ul>
      <div class="property-card__info" v-if="property.title">
        {{ property.title }}
      </div>
    </div>
  </AppLink>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { PropType } from "vue"
import { MeasurementUnit } from "~/utils/types"

const props = defineProps({
  property: {
    type: Object as PropType<any>,
    required: true,
  },
  homePageView: {
    type: Boolean,
    default: false,
  }
})

const measurement = ref<MeasurementUnit>(MeasurementUnit.SquareFeet)

const displayPrice = computed(() => {
  return props.property.deal === "sale" ? formatSalePrice(props.property.price) : formatRentPrice(props.property.price)
})

const formatSalePrice = price => {
  return `AED ${price.toLocaleString('en-US')}`
}

const formatRentPrice = price => {
  return `AED ${price.toLocaleString('en-US')} / month`
}
</script>

<style lang="scss">
.property-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0.0625rem solid var(--color-quinary);
  transition: border 0.25s;
  background-color: var(--color-black);
  width: 100%;
  max-width: 31rem;
  height: max-content;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 40px) 100%, 0 100%);

  @media (max-width: 34rem) {
    --padding: 1.5rem;
  }

  &:hover {
    border-color: var(--color-white);

    .property-card__type {
      color: var(--color-black);
      background: var(--color-lemon);
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 47.9375rem) {
      aspect-ratio: auto;
    }
  }

  &__type {
    position: absolute;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: var(--color-white);
    letter-spacing: 0.1em;
    background: var(--color-black);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 15px) 100%, 0 100%);
    transition: color 0.3s, background 0.3s;

    @media (max-width: 34rem) {
      font-size: 0.875rem;
    }
  }

  &__inner {
    height: 30%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: .8rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;

    @media (max-width: 34rem) {
      gap: 0.5rem;
    }
  }

  &__price {
    font-size: 1.125rem;
    font-weight: 700;

    @media (max-width: 34rem) {
      margin-bottom: 1.25rem;
      font-size: 1.125rem;
    }
  }

  &__data {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    &-item {
      &:not(:first-child) {
        &::before {
          margin-inline-end: 1rem;
          content: "•";
        }
      }
    }
  }

  &__info {
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--color-secondary);

    @media (max-width: 34rem) {
      font-size: 1.25rem;
      line-height: 1.75;
    }
  }
}
</style>
