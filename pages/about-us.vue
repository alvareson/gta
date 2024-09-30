<template>
  <div class="about-us-page">
    <header class="about-us-page__header">
      <p class="about-us-page__subtitle">
        At GTA Realty, we believe that every client deserves an extraordinary real estate experience. With our international reach and deep understanding of the market, we offer a unique blend of local expertise and global perspective. Founded by a visionary Emirati entrepreneur, our company is dedicated to delivering unparalleled service and exceptional results. Here are three compelling reasons to choose GTA Realty for your real estate needs:
      </p>
    </header>
    <div class="about-us-page__body">
      <section class="about-us-page__section">
        <div class="about-us-page__text">
          <h2>Global Expertise, Local Insight</h2>
          <p>
            With a strong international presence, we bring a wealth of knowledge from diverse markets while maintaining a deep understanding of local trends. This combination allows us to craft tailored strategies that match global opportunities with local needs, ensuring you make informed decisions whether buying or selling.
          </p>
        </div>
        <div class="about-us-page__image">
          <img src="/img/aboutus1.jpg" alt="Elite Connections" />
        </div>
      </section>
      <section class="about-us-page__section">
        <div class="about-us-page__image">
          <img src="/img/aboutus2.jpg" alt="On-Demand and On-Location" />
        </div>
        <div class="about-us-page__text">
          <h2>⁠Integrity and Trust</h2>
          <p>
            At GTA Realty, integrity is at the core of everything we do. Our founder instilled the values of reliability and transparency, ensuring that our clients always feel confident and informed. We prioritize your best interests, fostering a relationship built on trust and open communication throughout your real estate journey.
          </p>
        </div>
      </section>
      <section class="about-us-page__section">
        <div class="about-us-page__image">
          <img src="/img/aboutus4.jpg" alt="Enhancing Value" />
        </div>
        <div class="about-us-page__text">
          <h2>Exceptional Client-Centric Service</h2>
          <p>
            Our mission is to provide a personalized approach to every client. We understand that real estate transactions can be complex, and we are here to simplify the process for you. Our dedicated team is committed to offering continuous support, expert advice, and an attentive ear, ensuring that your experience is smooth, satisfying, and memorable.
            Choose GTA Realty and experience a real estate partnership that truly puts you first!
          </p>
        </div>
      </section>
    </div>
    <div class="about-us-page__team">
      <h2>Our Team</h2>
      <Swiper
        class="about-us-page__swiper"
        :modules="[]"
        :slides-per-view="5"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }"
      >
        <SwiperSlide v-for="(employee, index) in listOfEmployees" :key="index">
          <div class="employee-card">
            <img :src="employee.image" :alt="employee.name" />
            <h3>{{ employee.name }}</h3>
            <p>{{ employee.position }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

let observer: IntersectionObserver | null = null

const listOfEmployees = [
  {
    name: 'Sulaiman Almulla',
    position: 'Chairman',
    image: '/img/stuff/sulaiman.png'
  },
  {
    name: 'Ali Koko',
    position: 'Chief Executive Officer',
    image: '/img/stuff/ali.png'
  },
  {
    name: 'Hussein Abdelhameed',
    position: 'Accountant',
    image: '/img/stuff/hussein.png'
  },
  {
    name: 'Vivien Ezeji',
    position: 'Administrative Officer',
    image: '/img/stuff/vivien.png'
  },
  {
    name: 'Brezhnev Agbor',
    position: 'Property Consultant',
    image: '/img/stuff/brezhnev.png'
  },
  {
    name: 'Ibrahim Ashraf Ibrahim',
    position: 'Property Consultant',
    image: '/img/stuff/ibrahim.png'
  }
]

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-20% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in')
      } else {
        entry.target.classList.remove('slide-in')
      }
    })
  }, options)

  document.querySelectorAll('.about-us-page__text').forEach((section, index) => {
    section.classList.add(index % 2 === 0 ? 'odd' : 'even')
    observer!.observe(section)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style lang="scss">
.about-us-page {
  background: var(--color-white);
  padding: 2rem;
  overflow-x: hidden;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 2rem;
    background: var(--color-white);
    padding-inline: 2rem;
  }

  &__title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: var(--color-black);
    letter-spacing: 0.2rem;
    text-align: left;

    @media (max-width: 835px) {
      font-size: 1.4rem;
    }

    @media (min-width: 836px) and (max-width: 1356px) {
      font-size: 1.8rem;
    }
  }

  &__subtitle {
    text-align: left;
    font-size: 1.4rem;
    color: var(--color-black);
    max-width: 88rem;
    padding-left: 4rem;

    @media (max-width: 1356px) and (min-width: 769px) {
      width: 100%;
      padding: 0 1rem;
      font-size: 1rem;
    }
    
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 1rem;
  }

  &__section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    opacity: 1;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &:nth-child(odd) {
      .about-us-page__text {
        order: 1;
        background-color: var(--color-black);
      }
      .about-us-page__image {
        order: 2;
      }
    }

    &:nth-child(even) {
      .about-us-page__text {
        background-color: var(--color-white);
        color: var(--color-black);
        padding-top: 2rem;
        > p {
          padding-top: 4rem;
        }
      }
      .about-us-page__image {
        animation: slideInLeft 1s forwards;
      }
    }

    &:first-child {
      .about-us-page__text,
      .about-us-page__image {
        animation: none;
      }

      .about-us-page__text {
        clip-path: polygon(0 55px, 55px 0, 100% 0, 100% 100%, 0 100%);
      }
    }

    &:last-child {
      .about-us-page__text {
        > h2 {
          max-width: 40rem;
        }
      }
    }
  }

  &__text {
    background-color: var(--color-black);
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
    color: var(--color-white);
    opacity: 0;
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    will-change: transform, opacity;

    @media (max-width: 1356px) and (min-width: 769px) {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      padding: 1rem;
      font-size: 1rem;
    }

    &.odd {
      transform: translateX(-100%);
    }

    &.even {
      transform: translateX(100%);
      > h2 {
        text-align: center;
      }
    }

    &.slide-in {
      transform: translateX(0);
      opacity: 1;
    }

    h2 {
      font-size: 2.6rem;
      margin-bottom: 1rem;
      margin-left: 1rem;
      letter-spacing: 0.02rem;

      @media (max-width: 1356px) and (min-width: 769px) {
        font-size: 1.8rem;
      }

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.5rem;
      max-width: max-content;
      letter-spacing: .04rem;

      @media (max-width: 1356px) and (min-width: 769px) {
        font-size: 1.1rem;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  &__image {
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-height: 500px;
      height: auto;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      display: none;
    }

    @media (min-width: 769px) and (max-width: 1356px) {
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }

  &__team {
    margin-top: 4rem;
    text-align: center;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      color: var(--color-black);
      letter-spacing: 0.2rem;
    }

    .about-us-page__swiper {
      margin-bottom: 2rem;

      .swiper-slide {
        display: flex;
        justify-content: center;
        width: auto;
      }
    }

    .employee-card {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 280px;
      align-items: center;
      padding: 0.5rem;
      background-color: var(--color-white);

      img {
        width: 100%; /* Make the image width responsive */
        height: auto; /* Maintain aspect ratio */
        object-fit: cover;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        color: var(--color-black);
      }

      p {
        font-size: 1.2rem;
        color: var(--color-grey);
      }
    }
  }
}
</style>
