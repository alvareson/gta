<template>
  <header class="layout-header">
    
    <NuxtLink :to="{ name: 'index' }" class="layout-header__logo">
      <img src="/img/logo.png" alt="Logo" />
    </NuxtLink>

    <nav class="layout-header__menu">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <button class="layout-header__burger" type="button" aria-label="Open menu" @click="isMobileMenuOpen = true">
      <Icon name="burger" width="42" height="42" color="white" />
    </button>

    <div v-if="isMobileMenuOpen" class="layout-header__mobile-menu">
      <Icon
        class="layout-header__mobile-menu-close"
        name="close"
        width="40"
        height="40"
        color="white"
        @click="onMobileMenuChange(false)"
      />
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <NuxtLink :to="item.to" @click="onMobileMenuChange(false)">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)
const onMobileMenuChange = (val: boolean) => {
  isMobileMenuOpen.value = val
}

const menuItems = [
  { name: 'Home', to: { name: 'index' } },
  { name: 'Buy', to: { name: 'properties-sale' } },
  { name: 'Rent', to: { name: 'properties-rent' } },
  { name: 'Off plan', to: { name: 'new-developments' } },
  { name: 'About Us', to: { name: 'about-us' } },
  { name: 'Contact Us', to: { name: 'contact-us' } },
]

watch(isMobileMenuOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
.layout-header {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 8rem;
  background-color: var(--color-black);

  @media (max-width: 1024px) {
    height: 6rem;
  }

  &__logo {
    width: 240px;
    height: 96px;
    margin-left: 2rem;
    margin-bottom: 1rem;

    img {
      height: 100%;
    }

    @media (max-width: 1200px) {
      width: 200px;
      height: 90px;
    }

    @media (max-width: 1024px) {
      width: 160px;
      height: 70px;
    }

    @media (min-width: 767px) and (max-width: 1024px) {
      width: 140px;
      height: 60px;
      margin-left: 1rem;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    margin-right: 2rem;

    @media (max-width: 1024px) {
      margin-right: 1.6rem;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 10px;
      margin: 0;
      padding: 0;

      li {
        a {
          position: relative;
          color: var(--color-white);
          text-decoration: none;
          font-size: 2.4rem;
          padding: 0.5rem 0;

          &::after {
            content: '';
            position: absolute;
            left: 0%;
            bottom: 100%;
            transform: translateY(-50px);
            width: 24px;
            height: 30px;
            background-color: var(--color-lemon);
            clip-path: polygon(
              50% 100%,
              100% 60%,
              100% 0%,
              0% 0%,
              0% 60%
            );
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          &:hover::after {
            transform: translateY(0);
            opacity: 1;
          }

          @media (max-width: 1200px) {
            font-size: 2.2rem;
          }

          @media (max-width: 1024px) {
            font-size: 2rem;
          }

          @media (min-width: 767px) and (max-width: 1024px) {
            font-size: 1.6rem;
          }
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }

    @media (hover: none) and (pointer: coarse) {
      ul li a::after {
        display: none;
      }
    }
  }

  &__burger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
      padding: 1.5rem;
    }
  }

  &__mobile-menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 2rem;
    z-index: 1000;

    &-close {
      position: absolute;
      top: 1.9rem;
      right: 1.6rem;
    }

    ul {
      list-style: none;
      padding: 0;
      text-align: center;

      li {
        margin-bottom: 1.5rem;

        a {
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
