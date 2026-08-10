<script setup>
import { useCart } from '../composables/useCart'

const props = defineProps({
  product: { type: Object, required: true },
})

const { add } = useCart()

function handleAdd() {
  if (props.product.soldOut) return
  add(props.product)
}
</script>

<template>
  <article
    class="group flex gap-3 rounded-xl border border-crook-brown/8 bg-crook-white/80 p-3 shadow-soft transition-all duration-300 hover:border-crook-brown/20 hover:shadow-lift sm:gap-3.5 sm:p-3.5"
  >
    <div
      class="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20"
      :style="{ backgroundColor: product.accent }"
    >
      <img
        v-if="product.image"
        :src="product.image"
        :alt="product.name"
        width="80"
        height="80"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-105"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center"
        aria-hidden="true"
      >
        <span class="font-display text-lg font-extrabold text-crook-cream/80">
          {{ product.shortName.slice(0, 1) }}
        </span>
      </div>

      <span
        v-if="product.soldOut"
        class="absolute inset-x-0 bottom-0 bg-crook-espresso/90 py-0.5 text-center font-body text-[8px] font-bold tracking-[0.12em] text-crook-cream uppercase"
      >
        Esgotado
      </span>
      <span
        v-else-if="product.badge"
        class="absolute left-1 top-1 rounded-pill bg-crook-caramel px-1.5 py-0.5 font-body text-[8px] font-bold tracking-[0.1em] text-crook-cream uppercase"
      >
        {{ product.badge }}
      </span>
    </div>

    <div class="flex min-w-0 flex-1 flex-col">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-display text-[13px] font-extrabold leading-tight tracking-tight text-crook-brown uppercase sm:text-sm">
          {{ product.shortName }}
        </h3>
        <p class="shrink-0 font-display text-sm font-extrabold text-crook-brown">
          {{ product.price }}
        </p>
      </div>

      <p class="mt-1 line-clamp-2 font-body text-[11px] leading-snug text-crook-text/55 sm:text-xs">
        {{ product.description }}
      </p>

      <button
        v-if="!product.soldOut"
        type="button"
        class="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 font-body text-[10px] font-bold tracking-[0.16em] text-crook-caramel uppercase transition-colors hover:text-crook-brown"
        @click="handleAdd"
      >
        Adicionar
        <span aria-hidden="true">+</span>
      </button>
      <p
        v-else
        class="mt-auto pt-2 font-body text-[10px] font-semibold tracking-[0.14em] text-crook-brown/35 uppercase"
      >
        Indisponível
      </p>
    </div>
  </article>
</template>
