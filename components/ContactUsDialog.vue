<template>
  <form class="contact-us-dialog" @submit.prevent="handleSubmit">
    <div class="contact-us-dialog__inner">
      <!-- <svg class="contact-us-dialog__logo" width="80" height="80">
        <use xlink:href="/img/logos.svg#logo" />
      </svg> -->
      <h2 class="contact-us-dialog__title text-h3">We Are Here to Help</h2>
      <button class="contact-us-dialog__close" type="button" aria-label="Close" @click="$emit('close')">
        <Icon name="close" width="42" height="42" />
      </button>
      <div class="contact-us-dialog__body">
        <div class="input">
          <label class="input__label" for="contact-name">your first name</label>
          <input class="input__field" id="contact-name" v-model="name" type="text" placeholder="Enter first name here" required />
        </div>
        <div class="input">
          <label class="input__label" for="contact-last-name">your last name</label>
          <input class="input__field" id="contact-last-name" v-model="lastname" type="text" placeholder="Enter last name here" required />
        </div>
        <div class="input">
          <label class="input__label" for="contact-email">email address</label>
          <input class="input__field" id="contact-email" v-model="email" type="email" inputmode="email" placeholder="Enter your email address" required />
        </div>
        <div class="input">
          <label class="input__label" for="contact-phone">phone</label>
          <input class="input__field" id="contact-phone" v-model="phone" type="tel" inputmode="tel" placeholder="Enter your phone number (international format)" />
        </div>
      </div>
    </div>
    <footer class="contact-us-dialog__footer">
      <p class="contact-us-dialog__agree">
        By clicking «Submit» you agree to our
        <AppLink class="contact-us-dialog__agree-link" :to="{ path: '#' }">Privacy Policy</AppLink>
      </p>
      <button class="contact-us-dialog__submit" type="submit">
        submit
      </button>
    </footer>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const handleSubmit = async () => {
  console.log('hello')
}
</script>

<style lang="scss">
.contact-us-dialog {
  width: min(27.75rem, 100%);
  overflow: auto;
  clip-path: polygon(50px 0, 100% 0, 100% 100%, 0 100%, 0 50px);

  @media (max-width: 30rem) {
    width: 100%;
    height: 80vh;

    &.dialog__container {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__inner {
    position: relative;
    min-height: 100%;
    padding: 2.8rem;
    color: var(--color-white);

    @media (max-width: 30rem) {
      padding: 10rem 1.5rem 6rem;
    }
  }

  &__logo {
    display: none;
    margin: 0 auto min(6rem, 11.4vh);

    @media (max-width: 30rem) {
      display: block;
    }
  }

  &__title {
    margin-bottom: 2rem;
    margin-left: 1rem;
    line-height: 1.4;
  }

  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &__body {
    display: grid;
    gap: 2rem;
    margin-bottom: 0rem;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }

  &__agree {
    padding-left: 2.8rem;
    padding-top: 1rem;
    max-width: 15rem;
    font-size: 0.8rem;
    line-height: 1.33;
    opacity: 0.5;
    color: var(--color-white);

    @media (max-width: 30rem) {
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
      left: 1.5rem;
      max-width: 100%;
      text-align: center;
    }

    &-link {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  &__submit {
    font-size: 1.8rem;
    justify-self: flex-end;
    max-width: fit-content;
    clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px);
    padding: 1rem 2rem;
    background: var(--color-white);
    color: var(--color-black);
    border: none;
    cursor: pointer;

    @media (max-width: 765px) {
      font-size: 0.8rem;
      clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px);
      border: 1px solid var(--color-white);
      padding: 0.5rem 2rem;
      border-radius: 0.25rem;
    }
  }
}

.input {
  &__label {
    display: block;
    width: fit-content;
    margin-bottom: 0.9375rem;
    font-size: 0.95rem;
    line-height: 1.33;
    letter-spacing: 0.15rem;
    cursor: pointer;
  }

  &__field {
    --border-opacity: 0.4;
    width: 100%;
    padding: 0 0 0.5rem;
    line-height: inherit;
    color: inherit;
    background: none;
    border: none;
    border-bottom: 0.0625rem solid rgba(var(--color-white-rgb), var(--border-opacity));
    transition: border 0.25s;

    &::placeholder {
      color: inherit;
      opacity: 0.5;
    }

    &:focus {
      --border-opacity: 1;
      outline: none;
    }
  }
}
</style>
