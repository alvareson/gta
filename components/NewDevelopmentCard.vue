<template>
  <AppLink class="new-development-card" :to="`/properties/${property.id}`">
    <div class="new-development-card__image-container">
      <img class="new-development-card__img" v-if="property.icon" :src="property.icon" alt="" />
      <div class="new-development-card__content">
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

  &:hover {
    border-color: var(--color-white);
  }

  &__image-container {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    width: max-content;
    top: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-white);
    text-align: center;
    padding: 1rem;
  }

  &__type, &__title, &__data, &__price {
    margin: 0.5rem 0;
  }


  &__title {
    font-size: 1.9rem;
    font-weight: 700;
  }

  &__data {
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__data-item {
    font-size: 1.4rem;
    &:not(:first-child) {
      &::before {
        content: "•";
        margin: 0 0.5rem;
      }
    }
  }

  &__price {
    font-size: 1.8rem;
    font-weight: 700;
  }
}
</style>
