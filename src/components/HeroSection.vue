<script setup>
import { useCart } from '../composables/useCart'
import { media } from '../data/media'
import { INSTAGRAM_URL } from '../data/site'

const { open, count } = useCart()
</script>

<template>
  <section id="top" class="hero-premium relative overflow-hidden bg-crook-cream">
    <span id="sobre" class="absolute top-0" aria-hidden="true" />

    <div class="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />
    <div
      class="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-crook-caramel/15 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute bottom-0 right-1/3 h-56 w-56 rounded-full bg-crook-beige blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.18]"
      aria-hidden="true"
      style="
        background: repeating-conic-gradient(
          from 12deg at 30% 48%,
          rgba(77, 54, 36, 0.05) 0deg 1.5deg,
          transparent 1.5deg 10deg
        );
      "
    />

    <p
      class="pointer-events-none absolute bottom-10 left-3 hidden origin-left -rotate-90 font-body text-[10px] font-semibold tracking-[0.35em] text-crook-brown/30 uppercase lg:block"
      aria-hidden="true"
    >
      Cookies worth stealing
    </p>

    <div class="relative grid lg:min-h-[100svh] lg:grid-cols-2">
      <!-- texto -->
      <div
        class="container-crook flex flex-col justify-center pb-8 pt-[6.5rem] sm:pb-12 sm:pt-32 md:pt-36 lg:max-w-none lg:px-10 lg:pb-16 xl:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] xl:pr-8"
      >
        <div class="fade-up relative max-w-xl">
          <div
            class="pointer-events-none absolute -left-2 -top-2 h-8 w-8 border-l border-t border-crook-caramel/40 sm:-left-3 sm:-top-3 sm:h-10 sm:w-10 md:-left-5 md:-top-5"
            aria-hidden="true"
          />

          <div class="flex items-center gap-3">
            <span class="h-px w-6 bg-crook-caramel/70 sm:w-8" aria-hidden="true" />
            <p class="font-body text-[11px] font-semibold tracking-[0.2em] text-crook-caramel uppercase sm:text-xs sm:tracking-[0.24em]">
              Bem-vindo · Aracaju
            </p>
          </div>

          <h1
            class="fade-up fade-up-delay-1 mt-4 font-display text-[clamp(2.65rem,12vw,5.75rem)] font-black leading-[0.86] tracking-tight text-crook-brown uppercase sm:mt-5 sm:leading-[0.82]"
          >
            <span class="relative inline-block">
              THE
              <span
                class="absolute -right-2.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-crook-caramel sm:-right-3 sm:-top-1 sm:h-2 sm:w-2 md:-right-4"
                aria-hidden="true"
              />
            </span>
            <br />
            <span class="relative">
              CROOK
              <span class="text-crook-caramel">.</span>
            </span>
          </h1>

          <p
            class="fade-up fade-up-delay-2 mt-5 font-display text-lg font-extrabold leading-tight tracking-tight text-crook-brown uppercase sm:mt-6 sm:text-xl md:text-2xl"
          >
            Bem-vindo à The Crook.
          </p>

          <p class="fade-up fade-up-delay-2 mt-3 max-w-md font-body text-[15px] leading-relaxed text-crook-text/70 sm:mt-4 sm:text-base">
            Aqui, cada detalhe importa. Somos apaixonados por transformar cookies em experiências.
            E a nossa missão é simples:
          </p>

          <p
            class="fade-up fade-up-delay-2 mt-4 inline-flex max-w-md items-start gap-2 rounded-2xl border border-crook-brown/20 bg-crook-white/50 px-4 py-3 font-body text-[13px] font-semibold leading-snug text-crook-brown shadow-soft backdrop-blur-sm sm:mt-5 sm:items-center sm:rounded-pill sm:px-5 sm:text-sm"
          >
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crook-caramel sm:mt-0" aria-hidden="true" />
            Fazer os melhores crooks artesanais que você já provou.
          </p>

          <div class="fade-up fade-up-delay-3 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#cardapio" class="btn-primary w-full sm:w-auto">
              Ver cardápio
              <span class="arrow">→</span>
            </a>
            <button type="button" class="btn-secondary w-full sm:w-auto" @click="open">
              Carrinho
              <span v-if="count" class="ml-1">({{ count }})</span>
            </button>
          </div>

          <div
            class="fade-up fade-up-delay-3 mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-crook-brown/10 pt-5 sm:mt-8 sm:gap-x-5 sm:pt-6"
          >
            <p
              v-for="tag in ['Soft', 'Loaded', 'Fresh']"
              :key="tag"
              class="font-display text-[10px] font-extrabold tracking-[0.18em] text-crook-brown/45 uppercase sm:text-[11px] sm:tracking-[0.2em]"
            >
              {{ tag }}
            </p>
            <a
              :href="INSTAGRAM_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="font-body text-[11px] font-semibold tracking-[0.14em] text-crook-caramel uppercase underline-offset-4 hover:underline sm:text-xs sm:tracking-[0.16em]"
            >
              @thecrookcookies
            </a>
          </div>
        </div>
      </div>

      <!-- imagem -->
      <div class="relative h-[38vh] min-h-[240px] w-full sm:h-[44vh] sm:min-h-[300px] lg:h-auto lg:min-h-full">
        <svg width="0" height="0" class="absolute" aria-hidden="true">
          <defs>
            <clipPath id="hero-wave-clip" clipPathUnits="objectBoundingBox">
              <path
                d="M0.14,0 C0.08,0.08 0.18,0.16 0.1,0.25 C0.04,0.34 0.17,0.42 0.09,0.5 C0.03,0.58 0.16,0.66 0.1,0.75 C0.05,0.84 0.16,0.92 0.12,1 L1,1 L1,0 Z"
              />
            </clipPath>
          </defs>
        </svg>

        <div
          class="pointer-events-none absolute inset-y-10 right-0 left-[18%] rounded-full bg-gradient-to-br from-crook-caramel/25 via-transparent to-crook-brown/10 blur-2xl"
          aria-hidden="true"
        />

        <div class="hero-wave-mask absolute inset-0 overflow-hidden lg:rounded-none">
          <img
            :src="media.hero"
            alt="Crooks artesanais The Crook"
            class="h-full w-full object-cover object-[center_35%]"
            width="1440"
            height="1800"
            fetchpriority="high"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-crook-espresso/30 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div
          class="pointer-events-none absolute bottom-6 right-6 hidden h-16 w-16 border-b border-r border-crook-cream/40 md:block"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-grain {
  opacity: 0.35;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
  mix-blend-mode: multiply;
}

.hero-wave-mask {
  inset: 0;
}

@media (min-width: 1024px) {
  .hero-wave-mask {
    clip-path: url(#hero-wave-clip);
  }
}
</style>
