<template>
  <section class="new-developments">
    <div class="new-developments__container">
      <header class="new-developments__header">
        <h2 class="new-developments__title">Off Plan Properties</h2>
      </header>
      <div v-if="apartments && apartments.length > 0">
        <Swiper
          class="new-developments__swiper"
          :modules="[Navigation]"
          slides-per-view="auto"
          :navigation="{
						prevEl: prev,
						nextEl: next,
						disabledClass: 'new-developments__arrow--disabled',
        	}"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
					<SwiperSlide class="new-developments__slide" v-for="(apartment, index) in apartments" :key="index">
            <NewDevelopmentCard class="new-developments__card" :property="apartment" />
          </SwiperSlide>
        </Swiper>
        <div class="new-developments__arrows">
          <button class="new-developments__arrow" type="button" ref="prev" aria-label="Previous property">
            <Icon name="chevron-left" :width="38" :height="38" :strokeWidth="1.1" />
          </button>
          <div class="new-developments__number">
            {{ activeSlide }}
            <span class="new-developments__number-divider">/</span>
            {{ totalSlides }}
          </div>
          <button class="new-developments__arrow" type="button" ref="next" aria-label="Next property">
            <Icon name="chevron-right" :width="38" :height="38" :strokeWidth="1.1" />
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

const prev = ref(null)
const next = ref(null)
const activeSlide = ref(0)
const totalSlides = ref(0)

const getActiveSlideNumber = swiper => (activeSlide.value = swiper.activeIndex + 1)

const onSwiper = swiper => {
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
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    },
    {
      id: 2,
      icon: "/img/apartments/flat2.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    },
    {
      id: 3,
      icon: "/img/apartments/flat3.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    },
    {
      id: 4,
      icon: "/img/apartments/flat4.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    },
    {
      id: 5,
      icon: "/img/apartments/flat5.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    },
    {
      id: 6,
      icon: "/img/apartments/flat6.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    },
    {
      id: 7,
      icon: "/img/apartments/flat7.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    },
    {
      id: 8,
      icon: "/img/apartments/flat8.jpeg",
      price: 1000,
      beds: 7,
      baths: 7,
      area: 26204,
      title: "Apartments in Downtown",
			type: "Sale"
    }
  ]
})

onMounted(() => {
  const swiperElement = document.querySelector('.new-developments__swiper')
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
.new-developments {
	padding-top: 1rem;
  color: var(--color-white);
  background: var(--color-white);
  margin-bottom: 2rem;

  &__container {
    padding-left: 3rem;

    @media (max-width: 63.9375rem) {
      --padding-inline: 1.5rem;
    }
  }

  &__header {
    display: flex;
    gap: 1rem 2rem;
    justify-content: space-between;
    margin-bottom: 4rem;
    font-size: 2rem;

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
    overflow: hidden;
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
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    max-height: 580px;

    @media (max-width: 34rem) {
      width: 12.5rem;
    }

    &:not(:last-child) {
      margin-inline-end: 2.5rem;

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
    height: 100%;
  }

  &__arrows {
    display: flex;
    gap: .8rem;
    align-items: center;
    align-self: flex-end;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 3rem;
    justify-content: flex-end;
    
    @media (max-width: 75rem) {
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
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
