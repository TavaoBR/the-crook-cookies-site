<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { products, productCategories } from '../data/site'

const active = ref('all')

function byCategory(categoryId) {
  return products.filter((p) => p.category === categoryId)
}

function setFilter(id) {
  active.value = id
  if (id === 'all') {
    document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }
  document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section id="cardapio" class="section-pad">
    <div class="container-crook">
      <div class="reveal mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
            Cardápio
          </p>
          <h2 class="display-title mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Escolha seu crook.
          </h2>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-pill px-4 py-2 font-body text-[11px] font-bold tracking-[0.14em] uppercase transition-colors"
            :class="
              active === 'all'
                ? 'bg-crook-brown text-crook-cream'
                : 'border border-crook-brown/15 text-crook-brown hover:border-crook-brown/35'
            "
            @click="setFilter('all')"
          >
            Todos
          </button>
          <button
            v-for="category in productCategories"
            :key="category.id"
            type="button"
            class="rounded-pill px-4 py-2 font-body text-[11px] font-bold tracking-[0.14em] uppercase transition-colors"
            :class="
              active === category.id
                ? 'bg-crook-brown text-crook-cream'
                : 'border border-crook-brown/15 text-crook-brown hover:border-crook-brown/35'
            "
            @click="setFilter(category.id)"
          >
            {{ category.label.replace('Crooks ', '') }}
          </button>
        </div>
      </div>

      <div
        v-for="category in productCategories"
        :id="`cat-${category.id}`"
        :key="category.id"
        class="mb-14 scroll-mt-28 last:mb-0"
      >
        <div class="reveal mb-6 flex items-end gap-4">
          <h3 class="font-display text-xl font-extrabold tracking-tight text-crook-brown uppercase md:text-2xl">
            {{ category.label }}
          </h3>
          <div class="rule-line hidden flex-1 md:block" />
        </div>

        <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="(product, index) in byCategory(category.id)"
            :key="product.id"
            class="reveal"
            :style="{ transitionDelay: `${(index % 3) * 50}ms` }"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
