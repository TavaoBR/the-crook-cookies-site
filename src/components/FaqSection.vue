<script setup>
import { ref } from 'vue'
import { faqs } from '../data/site'

const openIndex = ref(0)

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section class="section-pad border-t border-crook-brown/10">
    <div class="container-crook max-w-3xl">
      <div class="reveal mb-10 md:mb-12">
        <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
          Dúvidas
        </p>
        <h2 class="display-title mt-3 text-4xl md:text-5xl">
          Perguntas<br />frequentes
        </h2>
      </div>

      <div class="reveal divide-y divide-crook-brown/15 border-y border-crook-brown/15">
        <div v-for="(faq, index) in faqs" :key="faq.q">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 py-5 text-left"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span class="font-display text-sm font-extrabold tracking-tight text-crook-brown uppercase md:text-base">
              {{ faq.q }}
            </span>
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-crook-brown/20 font-display text-lg leading-none text-crook-brown transition-transform duration-300"
              :class="openIndex === index ? 'rotate-45 bg-crook-brown text-crook-cream' : ''"
              aria-hidden="true"
            >
              +
            </span>
          </button>
          <div
            v-show="openIndex === index"
            class="pb-5 pr-10 font-body text-sm leading-relaxed text-crook-text/70"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
