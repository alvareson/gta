<template>
  <section class="hero">
    <div class="hero__container">
      <SearchForm />
    </div>
    <div class="hero__video">
      <video autoplay muted loop>
        <source src="/video/los-angeles.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero__text">
      <h1>Bring Life to Your Lifestyle</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.hero-wrapper {
  position: relative;
}

.hero {
  position: relative;
  height: calc(100vh - 8rem);
  overflow: hidden;

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2rem;
    box-sizing: border-box;
    z-index: 3;
  }

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    video {
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -100;
      object-fit: cover;
    }
  }

  &__text {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    font-size: 1.8rem;
    color: var(--color-white);
  }
}

@media (max-width: 63.9375rem) {
  .hero {
    min-height: 30rem;
  }
}
</style>
