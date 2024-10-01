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
      <button type="button" @click="onMobileMenuChange(false)">Close</button>
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
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

  &__logo {
    width: 240px;
    height: 96px;
    margin-left: 2rem;
    margin-bottom: 1rem;

    img {
      height: 100%;
    }
  }

  &__menu {
    display: flex;
    align-items: flex-end;
    margin-right: 2rem;

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
        }
      }
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__burger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 1024px) {
      display: block;
    }
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 2rem;
    z-index: 1000;

    button {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      margin-bottom: 2rem;
    }

    ul {
      list-style: none;
      padding: 0;

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
