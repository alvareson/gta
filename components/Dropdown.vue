<template>
  <div class="dropdown">
    <select class="dropdown__select" v-model="value">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>

    <Icon name="chevron-down" class="dropdown__icon" width="32" height="32" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  }
})

const value = toRef(props, 'modelValue')
const emit = defineEmits(['update:modelValue'])

watch(value, (newValue: string) => {
  emit('update:modelValue', newValue)
})
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;

  &__select {
    width: 100%;
    padding: 0.5rem;
    padding-right: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid #c4c4c4;
    background-color: #fff;
    font-size: 1rem;
    cursor: pointer;

    appearance: none;
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  // IE display none for default dropdown arrow
  &__select::-ms-expand {
    display: none;
  }
}
</style>
