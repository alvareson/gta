<template>
  <div class="contact-us">
    <header class="contact-us__header">
      <h1 class="contact-us__title">CONNECT WITH US</h1>
      <p class="contact-us__subtitle">
        Experience exceptional service with GTA Realty. Known for our reliability, expertise, and honesty, we redefine the real estate experience. Our unparalleled attention to detail sets us apart as industry leaders. Trust us to guide you through buying or selling your home on a level unmatched by any other.
      </p>
    </header>
    <div class="contact-us__body">
      <div class="contact-us__container">
        <div class="contact-us__form-section">
          <h2 class="contact-us__form-title">GET IN TOUCH</h2>
          <p class="contact-us__form-description">
            Kindly complete the form below, and your message will promptly reach the appropriate department and staff member. You can expect a response within the next 24 hours.
          </p>
          <form class="contact-us__form">
            <div class="contact-us__form-group">
              <label for="first-name">YOUR FIRST NAME</label>
              <input id="first-name" type="text" placeholder="Enter first name here" />
            </div>
            <div class="contact-us__form-group">
              <label for="last-name">YOUR LAST NAME</label>
              <input id="last-name" type="text" placeholder="Enter last name here" />
            </div>
            <div class="contact-us__form-group">
              <label for="email">EMAIL ADDRESS</label>
              <input id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div class="contact-us__form-group">
              <label for="phone">PHONE</label>
              <input id="phone" type="tel" placeholder="Enter your phone number (international format)" />
            </div>
            <div class="contact-us__form-footer">
              <p>
                By clicking «Submit» you agree to our <a href="#">Privacy Policy</a>
              </p>
              <button class="contact-us__contact" type="button">
                <span class="contact-us__contact-icon">
                  <Icon class="contact-us__contact-arrow" name="arrow-right" width="58" height="6" />
                </span>
                <p class="contact-us__contact-title">Submit</p>
              </button>
            </div>
          </form>
        </div>
        <div class="contact-us__info-section">
          <h2 class="contact-us__info-title">CONTACTS</h2>
          <address class="contact-us__info-content">
            <p class="contact-us__bold-text">Head Office & Retail</p>
            <p>Office 1203</p>
            <p>Arenco Tower, Dubai Media City, Dubai, United Arab Emirates.</p>
            <div class="contact-us__phone">
              <p class="contact-us__bold-text">Phone</p>
              <p>+971 40 368 8080</p>
            </div>
            <div class="contact-us__email">
              <p class="contact-us__bold-text">Email</p>
              <p>info@mgpartners.ae</p>
            </div>
            <div class="contact-us__social">
              <p class="contact-us__bold-text">Social media</p>
              <div class="contact-us__social-media">
                <Icon name="facebook" width="31" height="24" />
                <Icon name="instagram" width="31" height="24" />
                <Icon name="x" width="31" height="24" />
                <Icon name="linkedin" width="31" height="24" />
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
  padding: 2rem;
  overflow-x: hidden;
  
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    background: var(--color-white);
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--color-black);
    justify-content: center;
    text-align: center;
  }

  &__subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: var(--color-black);
    max-width: 70rem;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
  }

  &__body {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    opacity: 1;
    transition: opacity 1s ease-out, transform 1s ease-out;
    transition-delay: 0.5s;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;
    background: var(--color-black);

    @media (max-width: 1526px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 765px) {
      grid-template-columns: 1fr;
    }
  }

  &__form-section,
  &__info-section {
    padding: 2rem;
    color: var(--color-white);

    opacity: 0;
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    will-change: transform, opacity;

    &.odd {
      transform: translateX(-100%);
      @media (max-width: 765px) {
        order: 2;
      }
    }

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
    padding-left: 8rem;
    @media (max-width: 765px) {
      padding-left: 2rem;
    }
  }

  &__info-title {
    padding-left: 1rem;
    @media (max-width: 765px) {
      padding-left: 0;
    }
  }

  &__form-title,
  &__info-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__form-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 26rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
  }

  &__form-group label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__form-group input {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid var(--color-secondary);
    background: transparent;
    color: var(--color-white);
  }

  &__form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1180px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__bold-text {
    font-weight: bold;
    margin: 0.8rem 0;
  }

  &__phone,
  &__email,
  &__social {
    margin-top: 2rem;
  }

  &__form-footer p {
    font-size: 0.75rem;
  }

  &__form-footer button {
    padding: 0.75rem .1rem;
    color: var(--color-white);
    border: none;
    cursor: pointer;
  }

  &__info-content {
    font-size: 1.2rem;
  }

  &__info-content p {
    margin: 0.2rem 0;
  }

  &__social-media {
    display: flex;
    gap: 1rem;
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

  &__contact {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    margin-left: auto;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.33;
    text-transform: uppercase;
    letter-spacing: 0.15rem;

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
