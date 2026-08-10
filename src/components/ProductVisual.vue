<script setup>
defineProps({
  accent: { type: String, default: '#4D3624' },
  chip: { type: String, default: '#2C2119' },
  label: { type: String, default: '' },
  large: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="product-visual relative overflow-hidden rounded-lg"
    :class="large ? 'aspect-[4/5]' : 'aspect-square'"
    :style="{ backgroundColor: accent }"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-30"
      style="
        background-image: radial-gradient(circle at 20% 20%, rgba(255, 253, 237, 0.35), transparent 45%),
          radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.18), transparent 50%);
      "
    />

    <svg
      class="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-105"
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <ellipse cx="100" cy="104" rx="78" ry="74" fill="rgba(0,0,0,0.18)" />
      <ellipse cx="100" cy="98" rx="78" ry="74" :fill="accent" />
      <ellipse cx="100" cy="98" rx="78" ry="74" fill="rgba(255,253,237,0.12)" />
      <circle
        v-for="(dot, i) in [
          [68, 72],
          [118, 64],
          [146, 98],
          [122, 128],
          [78, 124],
          [96, 90],
          [54, 100],
          [140, 72],
        ]"
        :key="i"
        :cx="dot[0]"
        :cy="dot[1]"
        :r="i % 3 === 0 ? 8 : 6"
        :fill="chip"
        opacity="0.92"
      />
      <path
        d="M52 88c18-20 40-18 56-6"
        fill="none"
        stroke="rgba(255,253,237,0.22)"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>

    <div class="absolute inset-x-0 bottom-0 p-4 md:p-5">
      <p
        v-if="label"
        class="font-display text-lg font-extrabold leading-none tracking-tight text-crook-cream uppercase drop-shadow md:text-xl"
      >
        {{ label }}
      </p>
    </div>
  </div>
</template>
