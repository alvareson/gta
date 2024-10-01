<template>
  <section class="featured-properties">
    <div class="featured-properties__container">
      <header class="featured-properties__header">
        <h2 class="featured-properties__title">View Our Selected Properties ></h2>
      </header>
      <div v-if="apartments && apartments.length > 0">
        <Swiper
          class="featured-properties__swiper"
          :modules="[Navigation]"
          slides-per-view="auto"
          :navigation="{
						prevEl: prev,
						nextEl: next,
						disabledClass: 'featured-properties__arrow--disabled',
        	}"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
					<SwiperSlide class="featured-properties__slide" v-for="(apartment, index) in apartments" :key="index">
            <div class="featured-properties__card-wrapper">
              <PropertyCard :home-page-view="true" class="featured-properties__card" :property="apartment" />
              <div class="featured-properties__more-details">more details ></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="featured-properties__arrows">
          <button class="featured-properties__arrow" type="button" ref="prev" aria-label="Previous property">
            <Icon name="chevron-left" :width="48" :height="48" :strokeWidth="1.1" style="margin-right: 4px;" />
          </button>
          <div class="featured-properties__number">
            {{ activeSlide }}
            <span class="featured-properties__number-divider">/</span>
            {{ totalSlides }}
          </div>
          <button class="featured-properties__arrow" type="button" ref="next" aria-label="Next property">
            <Icon name="chevron-right" :width="48" :height="48" :strokeWidth="1.1" style="margin-left: 4px;" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const isMobileFilterVisible = ref(false)
const pageSize = ref(10)
const currentPage = ref(1)

// const { locale } = useI18n()

const prev = ref(null)
const next = ref(null)
const activeSlide = ref(0)
const totalSlides = ref(0)

const getActiveSlideNumber = swiper => (activeSlide.value = swiper.activeIndex + 1)

const onSwiper = swiper => {
  // if (locale.value === "ar-EG") {
  //   swiper.changeLanguageDirection("rtl")
  // } else {
  //   swiper.changeLanguageDirection("ltr")
  // }
  swiper.changeLanguageDirection("ltr")
  getActiveSlideNumber(swiper)
  totalSlides.value = swiper.slides.length
}

const onSlideChange = swiper => getActiveSlideNumber(swiper)

const apartments = computed(() => {
  return [
    {
      id: 1,
      icon: "/img/apartments/flat1.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    },
    {
      id: 2,
      icon: "/img/apartments/flat2.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    },
    {
      id: 3,
      icon: "/img/apartments/flat3.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    },
    {
      id: 4,
      icon: "/img/apartments/flat4.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    },
    {
      id: 5,
      icon: "/img/apartments/flat5.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    },
    {
      id: 6,
      icon: "/img/apartments/flat6.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    },
    {
      id: 7,
      icon: "/img/apartments/flat7.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    },
    {
      id: 8,
      icon: "/img/apartments/flat8.jpeg",
      price: 3200308,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale",
      deal: "sale"
    }
  ]
})

onMounted(() => {
  const swiperElement = document.querySelector('.featured-properties__swiper')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        swiperElement.classList.add('in-view')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })
  observer.observe(swiperElement)
})
</script>

<style lang="scss">
.featured-properties {
  color: var(--color-white);
  background: var(--color-white);

  &__container {
    padding-inline: 2rem;

    @media (max-width: 63.9375rem) {
      --padding-inline: 1.5rem;
    }
  }

  &__header {
    display: flex;
    gap: 1rem 2rem;
    justify-content: space-between;
    margin-bottom: 4rem;
    font-size: 1.8rem;

    @media (max-width: 75rem) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__title {
    color: var(--color-black);

    @media (max-width: 75rem) {
      margin: 0;
    }

    @media (max-width: 47.9375rem) {
      font-size: 0.875rem;
    }
  }

  &__swiper {
    overflow: visible;
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 4s, transform 4s;

    @media (max-width: 75rem) {
      padding-bottom: 5.5rem;
    }
  }

  &__swiper.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  &__slide {
    max-width: 24rem;
    height: auto;

    @media (max-width: 34rem) {
      width: 12.5rem;
    }

    &:not(:last-child) {
      margin-inline-end: 5.2rem;

      @media (max-width: 63.9375rem) {
        margin-inline-end: 2rem;
      }

      @media (max-width: 47.9375rem) {
        margin-inline-end: 1rem;
      }

      @media (max-width: 34rem) {
        margin-inline-end: 0.5rem;
      }
    }
  }

  &__card {
    transition: transform 0.3s;

    .property-card__img {
      @media (max-width: 34rem) {
        aspect-ratio: 1 / 1.24;
      }
    }

    .property-card__data {
      @media (max-width: 34rem) {
        display: none;
      }
    }
  }

  &__card-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;

    &:hover {
      .featured-properties__card {
        transform: translateY(-1.4rem);
      }
      .featured-properties__more-details {
        opacity: 1;
      }
    }
  }

  &__more-details {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s;
    text-align: left;
    color: var(--color-black);
    font-size: 1.4rem;
  }

  &__arrows {
    display: flex;
    gap: 0rem;
    align-items: center;
    align-self: flex-end;
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: flex-end;

    @media (max-width: 75rem) {
      position: absolute;
      inset-inline: var(--padding-inline);
      bottom: 0;
      z-index: 2;
      justify-content: space-between;
      margin: 0;
    }
  }

  &__arrow {
    display: grid;
    place-content: center;
    width: 3rem;
    height: 3rem;
    opacity: 1;
		color: var(--color-black);

    [dir="rtl"] & {
      transform: scaleX(-1);
    }

    &--disabled {
      color: var(--color-black);
      cursor: default;
      opacity: 1;
    }
  }

  &__number {
    display: none;

    @media (max-width: 75rem) {
      display: block;
    }

    &-divider {
      margin-inline: 1rem;
    }
  }
}
</style>
