<template>
  <div class="about-us-page">
    <header class="about-us-page__header">
      <h1 class="about-us-page__title">GTA Realty : Your Trustwothy Partner</h1>
      <p class="about-us-page__subtitle">
        At GTA Realty, we're synonymous with reliability and trustworthiness in real estate. Our commitment is steadfast: to keep you informed, whether it's about promising opportunities or potential pitfalls. Just as the industry's best, we pride ourselves on being a beacon of reliability. With a keen eye for discerning the best deals and a dedication to transparency, we ensure that every step of your real estate journey is guided by integrity.
      </p>
    </header>
    <div class="about-us-page__body">
      <section class="about-us-page__section">
        <div class="about-us-page__text">
          <h2>Elite connections, Expert insight</h2>
          <p>
            GTA Realty has over two decades of experience and brings unique expertise to the table, particularly in our seamless collaboration with international partners. We offer a curated selection of luxury properties coupled with unparalleled service. Our team of specifically selected experts ensures expert guidance every step of the way. At GTA Realty, we excel in the prime and super-prime real estate market, leveraging our global network to consistently deliver exceptional service. Each member of our team contributes their wealth of expertise and skills, fostering collaboration and synergy to ensure our clients' success. Additionally, we maintain exclusive and privileged contacts with developers, enhancing our ability to secure the finest properties for our clients.            
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
          <h2>On-Demand and On-Location</h2>
          <p>
            As a key player in the luxury real estate industry worldwide, MG Partners is dedicated to providing tailor-made services across the globe, utilizing our exclusive network to offer a personalized touch to every endeavor. Our commitment to each client ensures top-tier guidance and recommendations to facilitate optimal property choices. Leveraging cutting-edge marketing strategies and advanced technology, we ensure your luxury property stands out prominently, attracting the most relevant buyers.
          </p>
        </div>
      </section>
      <section class="about-us-page__section">
        <div class="about-us-page__image">
          <img src="/img/aboutus4.jpg" alt="Enhancing Value" />
        </div>
        <div class="about-us-page__text">
          <h2>Enhancing Value Through Exemplary Standards</h2>
          <p>
            Wherever you may be, the MG Partners team possesses the skill to actualize your aspirations within the sphere of luxury real estate. Beyond their extensive proficiency in local and global residential sales, our experts can provide support across diverse domains such as rentals, property management, new development sales, investment, and portfolio management. At MG Partners, we advocate for a distinctive perspective on luxury real estate—one that places the client at the core of all our endeavors.
          </p>
        </div>
      </section>
    </div>
    <div class="about-us-page__footer">
      <p>OUR LEGACY. OUR TRADITION. YOUR BENEFIT.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let observer: IntersectionObserver | null = null

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
    padding-inline: 2rem;
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
      font-size: 3rem;
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
      font-size: 1.86rem;
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
      height: auto;
      max-width: 1800px;
      max-height: 1800px;
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

  &__footer {
    text-align: center;
    font-size: 1.8rem;
    color: var(--color-black);
    margin-top: 4rem;
    margin-bottom: 4rem;
    font-weight: 500;
    letter-spacing: 0.4rem;

    @media (max-width: 1356px) and (min-width: 769px) {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
    }
  }
}
</style>
