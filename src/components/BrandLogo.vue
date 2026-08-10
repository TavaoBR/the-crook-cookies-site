<script setup>
defineProps({
  size: {
    type: String,
    default: 'md',
  },
})

const sizes = {
  sm: 'h-9 w-9',
  md: 'h-10 w-10 md:h-11 md:w-11',
  lg: 'h-16 w-16 md:h-20 md:w-20',
}
</script>

<template>
  <img
    src="/images/logo.png"
    alt="THE CROOK."
    class="rounded-md object-cover shadow-soft"
    :class="sizes[size] || sizes.md"
    width="80"
    height="80"
  />
</template>
