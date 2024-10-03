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
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="breakpoints"
          :navigation="{
            prevEl: prev,
            nextEl: next,
            disabledClass: 'new-developments__arrow--disabled',
          }"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <SwiperSlide
            class="new-developments__slide"
            v-for="(apartment, index) in apartments"
            :key="index"
          >
            <NewDevelopmentCard class="new-developments__card" :property="apartment" />
          </SwiperSlide>
        </Swiper>
        <div class="new-developments__arrows">
          <button class="new-developments__arrow" type="button" ref="prev" aria-label="Previous property">
            <Icon name="chevron-left" :width="48" :height="48" :strokeWidth="1.1" />
          </button>
          <button class="new-developments__arrow" type="button" ref="next" aria-label="Next property">
            <Icon name="chevron-right" :width="48" :height="48" :strokeWidth="1.1" />
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

const prev = ref(null)
const next = ref(null)
const activeSlide = ref(0)
const totalSlides = ref(0)

const getActiveSlideNumber = (swiper) => (activeSlide.value = swiper.activeIndex + 1)

const onSwiper = (swiper) => {
  swiper.changeLanguageDirection('ltr')
  getActiveSlideNumber(swiper)
  totalSlides.value = swiper.slides.length
}

const onSlideChange = (swiper) => getActiveSlideNumber(swiper)

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

const breakpoints = {
  390: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
}

onMounted(() => {
  const swiperElement = document.querySelector('.new-developments__swiper')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          swiperElement.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    }
  );
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
    padding-left: 2rem;

    @media (max-width: 768px) {
      padding-left: 1rem;
    }
  }

  &__swiper {
    overflow: hidden;
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 0.5s, transform 0.5s;

    &.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__slide {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 530px;

    @media (max-width: 640px) {
      padding-right: 0.8rem;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

    @media (min-width: 640px) {
      width: calc((100% - 20px) / 2);
    }

    @media (min-width: 1024px) {
      width: calc((100% - 60px) / 3);
    }
  }

  &__card {
    height: 100%;
  }

  &__arrows {
    display: flex;
    gap: .6rem;
    align-items: center;
    align-self: flex-end;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2.2rem;
    justify-content: flex-end;
    
    @media (max-width: 75rem) {
      z-index: 2;
      gap: 1.4rem;
      margin-left: 0.8rem;
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
}
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
