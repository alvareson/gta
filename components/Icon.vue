<template>
  <svg :width="iconWidth" :height="iconHeight" :viewBox="viewBox" :style="{ color }">
    <use :xlink:href="iconUrl" />
  </svg>
</template>

<script setup lang="ts">
import spriteUrl from "/img/sprite.svg?url"

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: 24,
  },
  height: {
    type: [String, Number],
    default: 24,
  },
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})

const { width: iconWidth, height: iconHeight, name: iconName } = toRefs(props)

const iconUrl = computed(() => `${spriteUrl}#${iconName.value}`)
</script>

<style lang="scss"></style>
