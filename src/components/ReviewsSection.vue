<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { reviews, INSTAGRAM_URL } from '../data/site'

const ratingSummary = {
  score: '5.0',
  count: '50+',
  label: 'avaliações no Instagram',
}

const track = ref(null)
const active = ref(0)
let timer

function scrollTo(index) {
  const el = track.value
  if (!el) return
  const card = el.children[index]
  if (!card) return
  el.scrollTo({ left: card.offsetLeft - 8, behavior: 'smooth' })
  active.value = index
}

function next() {
  scrollTo((active.value + 1) % reviews.length)
}

function prev() {
  scrollTo((active.value - 1 + reviews.length) % reviews.length)
}

function onScroll() {
  const el = track.value
  if (!el) return
  const center = el.scrollLeft + el.clientWidth / 2
  let closest = 0
  let min = Infinity
  ;[...el.children].forEach((child, index) => {
    const mid = child.offsetLeft + child.offsetWidth / 2
    const dist = Math.abs(mid - center)
    if (dist < min) {
      min = dist
      closest = index
    }
  })
  active.value = closest
}

onMounted(() => {
  timer = window.setInterval(next, 5000)
})

onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})
</script>

<template>
  <section id="clientes" class="section-pad">
    <div class="container-crook">
      <div class="reveal mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
            Avaliações
          </p>
          <h2 class="display-title mt-3 text-3xl sm:text-4xl md:text-5xl">
            Quem prova<br />se apaixona.
          </h2>
          <p class="mt-3 font-body text-sm text-crook-text/65">
            Palavras reais de quem já pediu —
            <a
              :href="INSTAGRAM_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="underline underline-offset-2"
            >
              @thecrookcookies
            </a>.
          </p>
        </div>

        <div
          class="flex shrink-0 items-center gap-3 rounded-xl border border-crook-brown/10 bg-crook-white/80 px-4 py-3 shadow-soft"
        >
          <div>
            <p class="font-display text-3xl font-extrabold tracking-tight text-crook-brown">
              {{ ratingSummary.score }}
            </p>
            <p class="text-xs text-crook-caramel" aria-label="5 estrelas">★★★★★</p>
          </div>
          <div class="border-l border-crook-brown/15 pl-3">
            <p class="font-body text-sm font-semibold text-crook-brown">{{ ratingSummary.count }}</p>
            <p class="font-body text-[11px] text-crook-text/55">{{ ratingSummary.label }}</p>
          </div>
        </div>
      </div>

      <div class="reveal relative">
        <div class="mb-3 flex items-center justify-end gap-2">
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-crook-brown/15 text-crook-brown transition-colors hover:bg-crook-beige"
            aria-label="Anterior"
            @click="prev"
          >
            ←
          </button>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-crook-brown/15 text-crook-brown transition-colors hover:bg-crook-beige"
            aria-label="Próximo"
            @click="next"
          >
            →
          </button>
        </div>

        <div
          ref="track"
          class="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          @scroll.passive="onScroll"
        >
          <blockquote
            v-for="(review, index) in reviews"
            :key="review.highlight"
            class="flex w-[260px] shrink-0 snap-start flex-col rounded-xl border border-crook-brown/10 bg-crook-white/85 p-4 shadow-soft sm:w-[280px]"
            :class="active === index ? 'ring-2 ring-crook-caramel/35' : ''"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] tracking-widest text-crook-caramel" aria-hidden="true">★★★★★</span>
              <span class="font-body text-[10px] font-semibold tracking-[0.14em] text-crook-brown/40 uppercase">
                {{ review.source }}
              </span>
            </div>
            <p class="mt-3 font-display text-sm font-extrabold leading-snug tracking-tight text-crook-brown uppercase">
              “{{ review.highlight }}”
            </p>
            <p class="mt-2 flex-1 font-body text-xs leading-relaxed text-crook-text/65">
              {{ review.text }}
            </p>
          </blockquote>
        </div>

        <div class="mt-4 flex justify-center gap-1.5">
          <button
            v-for="(_, index) in reviews"
            :key="index"
            type="button"
            class="h-1.5 rounded-full transition-all"
            :class="active === index ? 'w-5 bg-crook-brown' : 'w-1.5 bg-crook-brown/25'"
            :aria-label="`Ir para avaliação ${index + 1}`"
            @click="scrollTo(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
