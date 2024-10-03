<template>
  <div class="contact-us">
    <header class="contact-us__header">
      <h1 class="contact-us__title text-h2">Connect With Us</h1>
      <p class="contact-us__subtitle">
        Connect with GTA Realty for an unparalleled real estate experience! Our dedicated team combines reliability, expertise, and honesty to redefine the way you buy or sell your home. 
      </p>
    </header>
    <div class="contact-us__body">
      <div class="contact-us__container">

        <div class="contact-us__form-section">
          <h2 class="contact-us__form-title">Get In Touch</h2>
          <p class="contact-us__form-description">
            Please fill out the form below, and your message will be directed to the right department and team member.
          </p>
          <form class="contact-us__form">
            <div class="contact-us__form-group">
              <label for="first-name">your first name</label>
              <input id="first-name" type="text" placeholder="Enter first name here" />
            </div>
            <div class="contact-us__form-group">
              <label for="last-name">your last name</label>
              <input id="last-name" type="text" placeholder="Enter last name here" />
            </div>
            <div class="contact-us__form-group">
              <label for="email">email address</label>
              <input id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div class="contact-us__form-group">
              <label for="phone">phone</label>
              <input id="phone" type="tel" placeholder="Enter your phone number (international format)" />
            </div>
            <div class="contact-us__form-footer">
              <p>
                By clicking «Submit» you agree to our <a href="#" style="text-decoration: underline;">Privacy Policy</a>
              </p>
              <Btn class="contact-us__submit">submit</Btn>
            </div>
          </form>
        </div>

        <div class="contact-us__info-section">
          <h2 class="contact-us__info-title">Contacts</h2>
          <address class="contact-us__info-content">
            <div class="contact-us__info-address">
              <p class="semibold-text">Head Office & Retail</p>
              <p>CEO Building</p>
              <p>Unit 215</p>
              <p>Investment Park</p>
              <p>Dubai, </p>
              <p>United Arab Emirates.</p>
            </div>
            <div class="contact-us__phone">
              <p class="semibold-text">Phone</p>
              <p>+971 40 368 8080</p>
            </div>
            <div class="contact-us__email">
              <p class="semibold-text">Email</p>
              <p>info@mgpartners.ae</p>
            </div>
            <div class="contact-us__social">
              <p class="semibold-text">Social media</p>
              <div class="contact-us__social-media">
                <Icon name="facebook" width="31" height="24" />
                <Icon name="instagram" width="31" height="24" />
              </div>
            </div>
          </address>
        </div>

        <div class="contact-us__image-section">
          <img src="/img/image2.jpg" alt="Contact Image" />
        </div>
      </div>
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

  document.querySelectorAll('.contact-us__form-section, .contact-us__info-section, .contact-us__image-section').forEach((section, index) => {
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
.contact-us {
  background: var(--color-white);
  padding-top: 1rem;
  padding-inline: 2rem;
  overflow-x: hidden;
  padding: 3rem;
  
  &__header {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 3rem;
    background: var(--color-white);
    padding-inline: 2rem;
  }

  &__title {
    font-size: 2.4rem;
    margin-bottom: .6rem;
    color: var(--color-black);
    text-align: left;

    @media (max-width: 835px) {
      font-size: 2.1rem;
    }

    @media (min-width: 836px) and (max-width: 1356px) {
      font-size: 1.8rem;
    }
  }

  &__subtitle {
    text-align: left;
    font-size: 1.2rem;
    color: var(--color-black);
    max-width: 78rem;

    @media (max-width: 1356px) and (min-width: 769px) {
      width: 100%;
      font-size: 1.5rem;
    }
    
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
    }
  }

  &__container {
    clip-path: polygon(0 55px, 55px 0, 100% 0, 100% 100%, 0 100%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;
    background: var(--color-black);

    @media (max-width: 1526px) {
      grid-template-columns: 2fr 1fr;
      gap: 0;
    }

    @media (max-width: 765px) {
      grid-template-columns: 1fr;
    }
  }

  &__form-section,
  &__info-section {
    padding: 3rem;
    color: var(--color-white);
    padding-left: 4rem;

    opacity: 0;
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    will-change: transform, opacity;

    // &.odd {
    //   transform: translateX(-100%);
    //   @media (max-width: 765px) {
    //     order: 2;
    //   }
    // }

    &.even {
      transform: translateX(100%);
      @media (max-width: 765px) {
        order: 1;
      }
    }

    &.slide-in {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &__info-section {
    padding-left: 10rem;

    @media (max-width: 1526px) {
      padding-left: 1rem;
    }

    @media (max-width: 765px) {
      text-align: center;
    }
  }

  &__info-title {
    @media (max-width: 765px) {
      padding-left: 0;
    }
  }

  &__form-title,
  &__info-title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  &__form-description {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    max-width: 26rem;

    @media (max-width: 1526px) {
      max-width: 50rem;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
  }

  &__form-group label {
    margin-bottom: 0.4rem;
    font-size: 1rem;
    color: var(--color-white);
    letter-spacing: 0.075rem;
  }

  &__form-group input {
    padding-top: .8rem;
    padding-bottom: .8rem;
    font-size: 1.1rem;
    border: none;
    border-bottom: 1px solid var(--color-secondary);
    background: transparent;
    color: var(--color-white);
  }

  &__form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.8rem;
  }

  &__phone,
  &__email,
  &__social {
    margin-top: 2rem;
  }

  &__form-footer p {
    font-size: .8rem;
    max-width: 12rem;
    color: var(--color-secondary);
  }

  &__form-footer button {
    font-size: 1.8rem;
    justify-self: flex-end;
    clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px);
    padding: 1rem 2rem;
    background: var(--color-white);
    color: var(--color-black);
    border: none;
    cursor: pointer;
  }

  &__info-content {
    font-size: 1.3rem;
  }

  &__social-media {
    display: flex;
    gap: 1rem;

    @media (max-width: 765px) {
      justify-content: center;
    }
  }

  &__social-media svg {
    margin-top: 0.8rem;
  }

  &__image-section {
    display: flex;
    justify-content: end;

    opacity: 0;
    transform: translateX(100%);
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;

    &.slide-in {
      transform: translateX(0);
      opacity: 1;
    }

    @media (max-width: 1526px) {
      display: none;
    }
  }

  &__image-section img {
    max-width: 100%;
    height: auto;
  }

  &__form-group input::placeholder {
    color: var(--color-white);
    opacity: .5;
  }

  &__button {
    display: flex;
    gap: .755rem;
    align-items: center;
    margin-left: auto;
    font-size: 0.5rem;
    line-height: 1;
    letter-spacing: 0.2rem;

    @media (max-width: 1180px) {
      margin-top: 1rem;
      margin-right: auto;
    }

    &-icon {
      display: grid;
      place-items: center;

      &::before,
      &::after {
        --color: var(--color-white);
        grid-area: 1 / -1;
        width: var(--size);
        height: var(--size);
        content: "";
        border: 0.0625rem solid var(--color-white);
        transition: 0.3s;
        transition-property: transform, opacity;
        transform: rotate(45deg);
      }

      &::before {
        --size: 3rem;
        opacity: 0.2;

        .contact-us__contact:hover & {
          opacity: 0;
          transform: rotate(-45deg);
        }
      }

      &::after {
        --size: 2rem;

        .contact-us__contact:hover & {
          opacity: 0;
          transform: rotate(135deg);
        }
      }
    }

    &-arrow {
      grid-area: 1 / -1;
      transition: transform 0.3s;
      transform: translateX(-1.625rem);
      color: var(--color-white);

      .contact-us__contact:hover & {
        transform: translateX(0);
      }
    }

    &-title {
      color: var(--color-white);
    }
  }
}
</style>
