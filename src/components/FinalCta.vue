<script setup>
import { useCart } from '../composables/useCart'

const { open, count } = useCart()
</script>

<template>
  <section class="relative bg-crook-brown py-14 text-crook-cream sm:py-20 md:py-28">
    <div class="wave-top pointer-events-none absolute inset-x-0 top-0 -translate-y-[99%] text-crook-brown" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="block h-10 w-full md:h-14">
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,36 C960,72 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </div>

    <div class="container-crook text-center">
      <h2
        class="reveal font-display text-[clamp(2.35rem,11vw,5.5rem)] font-black leading-[0.9] tracking-tight uppercase"
      >
        Pronto para<br />pedir?
      </h2>
      <p class="reveal mx-auto mt-4 max-w-md font-body text-sm text-crook-cream/70 sm:mt-5 sm:text-base">
        Monte o carrinho e envie no WhatsApp. Confirmamos entrega ou retirada em Aracaju.
      </p>
      <button
        type="button"
        class="reveal mt-8 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-pill bg-crook-cream px-8 py-4 font-body text-sm font-bold tracking-wide text-crook-brown uppercase transition-transform hover:scale-[1.02] sm:mt-10 sm:w-auto"
        @click="open"
      >
        {{ count ? `Finalizar pedido (${count})` : 'Montar pedido' }}
        <span>→</span>
      </button>
    </div>
  </section>
</template>
