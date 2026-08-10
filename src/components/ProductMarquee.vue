<script setup>
const items = [
  'Feito na hora',
  'Recheio generoso',
  'Soft · Loaded · Fresh',
  'Entrega em Aracaju',
  'Cookies worth stealing',
  'Pedido via WhatsApp',
]

const loop = [...items, ...items]
</script>

<template>
  <section class="overflow-hidden bg-crook-brown py-3.5" aria-label="Destaques">
    <div class="marquee-track flex w-max items-center gap-8 whitespace-nowrap px-4">
      <template v-for="(item, i) in loop" :key="`${item}-${i}`">
        <span class="font-display text-sm font-extrabold tracking-[0.18em] text-crook-cream uppercase md:text-base">
          {{ item }}
        </span>
        <span class="text-crook-caramel" aria-hidden="true">✦</span>
      </template>
    </div>
  </section>
</template>
