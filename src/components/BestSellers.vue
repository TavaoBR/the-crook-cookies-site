<script setup>
import ProductCard from './ProductCard.vue'
import { products } from '../data/site'
import { useCart } from '../composables/useCart'

const bestsellers = products.filter((p) => p.featured).slice(0, 3)
const { open } = useCart()
</script>

<template>
  <section class="section-pad">
    <div class="container-crook">
      <div class="reveal mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
            Hot picks
          </p>
          <h2 class="display-title mt-3 text-4xl md:text-6xl lg:text-7xl">
            Pick your<br />crook.
          </h2>
        </div>
        <p class="max-w-xs font-body text-sm leading-relaxed text-crook-text/65 md:text-right">
          Os mais pedidos. Adicione ao carrinho e finalize no WhatsApp.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div
          v-for="(product, index) in bestsellers"
          :key="product.id"
          class="reveal"
          :style="{ transitionDelay: `${index * 90}ms` }"
        >
          <ProductCard :product="product" featured />
        </div>
      </div>

      <div class="reveal mt-12 text-center">
        <button type="button" class="btn-secondary" @click="open">
          Ver carrinho
          <span class="arrow">→</span>
        </button>
      </div>
    </div>
  </section>
</template>
