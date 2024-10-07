<template>
  <section class="hero">
    <div class="hero__container">
      <SearchForm />
    </div>
    <div class="hero__video">
      <video autoplay muted loop playsinline webkit-playsinline>
        <source src="/video/los-angeles.mp4" type="video/mp4" />
      </video>
      <div class="hero__text">
        <h1>Bring Life to Your Lifestyle</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: calc(100vh - 6rem);
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 30rem;
  }

  @media (max-width: 768px) {
    height: auto;
  }

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
      filter: grayscale(100%);

      &::-webkit-media-controls {
        display: none !important;
      }
      &::--webkit-media-controls {
        display: none !important;
      }
      &::-moz-media-controls {
        display: none !important;
      }
    }
  }

  &__text {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    font-size: 1.8rem;
    color: var(--color-white);

    @media (max-width: 768px) {
      position: relative;
      right: 0;
      top: 26rem;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      left: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 380px) {
      font-size: 1rem;
    }

    @media (max-width: 337px) {
      font-size: .8rem;
      justify-content: center;
    }
  }
}
</style>
