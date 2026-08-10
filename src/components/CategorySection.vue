<script setup>
import { media } from '../data/media'

const categories = [
  {
    id: 'classicos',
    label: 'Crooks Clássicos',
    href: '#cat-classicos',
    image: media.hero,
    cta: 'Ver cardápio',
    index: '01',
    accent: 'from-crook-espresso/75 via-crook-espresso/15 to-crook-caramel/40',
  },
  {
    id: 'premium',
    label: 'Crooks Premium',
    href: '#cat-premium',
    image: media.brandCookie,
    cta: 'Ver cardápio',
    index: '02',
    accent: 'from-crook-brown/80 via-transparent to-crook-espresso/50',
  },
  {
    id: 'instagram',
    label: 'No Instagram',
    href: '#instagram',
    image: media.community,
    cta: 'Ver reels',
    index: '03',
    accent: 'from-crook-espresso/70 via-crook-brown/20 to-crook-caramel/30',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-crook-beige/40 py-12 sm:py-16 md:py-20">
    <div
      class="pointer-events-none absolute -right-20 top-10 font-display text-[6rem] font-black leading-none text-crook-brown/[0.04] uppercase sm:text-[8rem] md:text-[12rem]"
      aria-hidden="true"
    >
      Crook
    </div>

    <div class="container-crook relative">
      <div class="reveal mb-8 flex flex-col items-center text-center sm:mb-10">
        <div class="mb-3 flex items-center gap-3">
          <span class="h-px w-8 bg-crook-caramel/60" />
          <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
            Explore
          </p>
          <span class="h-px w-8 bg-crook-caramel/60" />
        </div>
        <h2 class="display-title text-3xl sm:text-4xl md:text-5xl">
          Escolha seu caminho
        </h2>
      </div>

      <div class="grid gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
        <a
          v-for="(cat, index) in categories"
          :key="cat.id"
          :href="cat.href"
          class="reveal group relative block min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[280px] md:min-h-[340px]"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <img
            :src="cat.image"
            :alt="cat.label"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-b" :class="cat.accent" />

          <span
            class="absolute right-4 top-4 font-display text-4xl font-black tracking-tight text-crook-cream/25 transition-colors group-hover:text-crook-cream/40"
            aria-hidden="true"
          >
            {{ cat.index }}
          </span>

          <div class="relative z-10 flex h-full flex-col justify-between p-6">
            <div>
              <h3 class="font-display text-2xl font-extrabold tracking-tight text-crook-cream uppercase">
                {{ cat.label }}
              </h3>
              <p
                class="mt-2 inline-flex items-center gap-1 font-body text-[11px] font-bold tracking-[0.18em] text-crook-cream/85 uppercase transition-transform group-hover:translate-x-1"
              >
                {{ cat.cta }}
                <span aria-hidden="true">→</span>
              </p>
            </div>
            <div class="h-px w-10 bg-crook-cream/40 transition-all duration-500 group-hover:w-16" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
