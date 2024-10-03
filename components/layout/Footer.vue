<template>
  <div class="footer">
    <div class="footer__social">
      <div class="social-icons">
        <img
          :src="instagramSrc"
          alt="Instagram"
          class="social-icon"
          @mouseover="isInstagramHovered = true"
          @mouseleave="isInstagramHovered = false"
        />
        <img
          :src="facebookSrc"
          alt="Facebook"
          class="social-icon"
          @mouseover="isFacebookHovered = true"
          @mouseleave="isFacebookHovered = false"
        />
      </div>
    </div>
    <div class="footer__contact">
      <h1 class="footer__contact__title">Your Private Consultation ></h1>
      <div class="custom-shape-container">
        <svg
          class="custom-shape"
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="initial-path"
            d="M46.9111 0V18.8288H18.826V47H0V16.8341L21.5392 0H46.9111Z"
            fill="#CAEE5A"
          />
          <path
            class="second-path"
            d="M24.8213 47V28.1712H52.905V0H71.7324V30.1659L50.1932 47H24.8213Z"
            fill="#CAEE5A"
          />
          <path
            class="third-path"
            d="M63.8889 57.3889C61.2606 57.3889 58.7167 56.9667 56.3522 56.1856C55.6239 55.9533 54.79 56.1222 54.2094 56.7028L49.565 61.3578C43.5771 58.3077 38.7074 53.4417 35.6528 47.4561L40.2972 42.7906C40.8778 42.21 41.0467 41.3761 40.8144 40.6478C40.0333 38.2833 39.6111 35.7394 39.6111 33.1111C39.6111 31.9394 38.6717 31 37.5 31H30.1111C29.5512 31 29.0142 31.2224 28.6183 31.6183C28.2224 32.0142 28 32.5512 28 33.1111C28 52.9344 44.0656 69 63.8889 69C65.0606 69 66 68.0606 66 66.8889V59.5C66 58.3283 65.0606 57.3889 63.8889 57.3889ZM47 31V52.1111L53.3333 45.7778H66V31H47Z"
            fill="#CAEE5A"
          />
        </svg>
      </div>
      <!-- <Dialog :component="ContactUsDialog" :open="isContactUsOpen" @close="isContactUsOpen = false" /> -->
    </div>
    <div class="footer__logo">
      <img
        class="footer__img"
        src="/img/logo-footer.png"
        alt="Footer Logo"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const isInstagramHovered = ref(false)
const isFacebookHovered = ref(false)

const instagramSrc = computed(() => {
  return isInstagramHovered.value ? '/img/activated-inst.png' : '/img/inst-logo.png'
});

const facebookSrc = computed(() => {
  return isFacebookHovered.value ? '/img/activated-facebook.png' : '/img/facebook-logo.png'
});
</script>

<style lang="scss">
.footer {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 1rem;
  padding: 2rem 2rem;
  background: var(--color-black);
  color: var(--color-tertiary);
  font-size: 0.875rem;
  line-height: 1.71;
  clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  &__social {
    display: flex;
    align-items: flex-end;

    @media (max-width: 768px) {
      order: 2;
      justify-content: center;
      margin-top: 2rem;
    }

    .social-icons {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;

      .social-icon {
        width: 4rem;
        height: 4rem;
        cursor: pointer;

        @media (max-width: 974px) {
          width: 3.2rem;
          height: 3.2rem;
        }

        @media (hover: none) {
          content: url('/img/activated-inst.png');
        }

        &:nth-child(2) {
          @media (hover: none) {
            content: url('/img/activated-facebook.png');
          }
        }
      }
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      padding-left: 1rem;
    }

    &__title {
      font-size: 2.6rem;
      line-height: 1.5;
      margin-bottom: .2rem;

      @media (max-width: 974px) {
        font-size: 1.8rem;
      }
    }
  }

  &__logo {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 768px) {
      display: none;
    }

    .footer__img {
      width: 114px;
      height: 114px;

      @media (max-width: 974px) {
        width: 84px;
        height: 84px;
      }
    }
  }
}
.custom-shape-container {
  position: relative;
  padding-top: 2rem;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}

.custom-shape {
  height: 19rem;
  width: 50rem;

  @media (max-width: 768px) {
    height: 14rem;
    width: 42rem;
  }
}

.initial-path {
  transform: scale(1.2);
}

.second-path {
  transition: transform 1s ease;
  transform: translate(0, 0) scale(1.2);

  @media (hover: none) and (pointer: coarse) {
    transform: translate(24%, 43%) scale(1.2);
  }
}

.third-path {
  transform: translate(0, 0) scale(1.2);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
  pointer-events: none;

  @media (hover: none) and (pointer: coarse) {
    opacity: 1;
    pointer-events: auto;
    transform: translate(0%, 0%) scale(1.2);
  }
}

/* hover state */
.custom-shape-container:hover .second-path {
  transform: translate(24%, 43%) scale(1.2);
}

.custom-shape-container:hover .third-path {
  transform: translate(10%, 40%) scale(1.2);
  opacity: 1;
  pointer-events: auto;
}

.custom-shape-container:hover .third-path {
  transform: translate(1px, 1px) scale(1.2);
}

.second-path,
.third-path {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
</style>
