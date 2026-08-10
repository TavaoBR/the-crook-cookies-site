<script setup>
import { useCart } from '../composables/useCart'

const { state, count, subtotal, isEmpty, close, increment, decrement, remove, formatMoney, checkoutWhatsApp } =
  useCart()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="state.isOpen"
        class="fixed inset-0 z-[60] bg-crook-espresso/45"
        @click="close"
      />
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="state.isOpen"
        class="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-crook-cream shadow-soft"
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho"
      >
        <header class="flex items-center justify-between border-b border-crook-brown/15 px-5 py-5">
          <div>
            <p class="font-display text-xl font-extrabold tracking-tight text-crook-brown uppercase">
              Seu pedido
            </p>
            <p class="mt-1 font-body text-xs text-crook-text/55">
              {{ count }} {{ count === 1 ? 'item' : 'itens' }}
            </p>
          </div>
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-crook-brown/20 text-crook-brown transition-colors hover:bg-crook-beige"
            aria-label="Fechar carrinho"
            @click="close"
          >
            ✕
          </button>
        </header>

        <div class="flex-1 overflow-y-auto px-5 py-4">
          <div v-if="isEmpty" class="flex h-full flex-col items-center justify-center text-center">
            <p class="font-display text-2xl font-extrabold tracking-tight text-crook-brown uppercase">
              Carrinho vazio
            </p>
            <p class="mt-2 max-w-xs font-body text-sm text-crook-text/60">
              Escolha seus crooks e finalize pelo WhatsApp.
            </p>
            <button type="button" class="btn-secondary mt-8" @click="close">
              Ver cardápio
            </button>
          </div>

          <ul v-else class="space-y-4">
            <li
              v-for="item in state.items"
              :key="item.id"
              class="flex gap-3 border-b border-crook-brown/10 pb-4"
            >
              <div
                class="relative h-14 w-14 shrink-0 overflow-hidden rounded-md"
                :style="{ backgroundColor: item.accent }"
              >
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.shortName"
                  class="h-full w-full object-cover"
                  width="56"
                  height="56"
                />
                <span
                  class="absolute bottom-0 right-0 rounded-tl-md bg-crook-brown px-1.5 py-0.5 font-display text-[10px] font-extrabold text-crook-cream"
                >
                  ×{{ item.qty }}
                </span>
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <p class="font-display text-sm font-extrabold tracking-tight text-crook-brown uppercase">
                    {{ item.shortName }}
                  </p>
                  <button
                    type="button"
                    class="font-body text-[10px] font-semibold tracking-wide text-crook-text/45 uppercase hover:text-crook-brown"
                    @click="remove(item.id)"
                  >
                    Remover
                  </button>
                </div>
                <p class="mt-1 font-body text-sm text-crook-text/60">
                  {{ formatMoney(item.priceValue) }} cada
                </p>

                <div class="mt-3 flex items-center justify-between">
                  <div class="inline-flex items-center rounded-pill border border-crook-brown/20">
                    <button
                      type="button"
                      class="px-3 py-1.5 font-body text-sm font-bold text-crook-brown"
                      aria-label="Diminuir"
                      @click="decrement(item.id)"
                    >
                      −
                    </button>
                    <span class="min-w-6 text-center font-body text-sm font-bold text-crook-brown">
                      {{ item.qty }}
                    </span>
                    <button
                      type="button"
                      class="px-3 py-1.5 font-body text-sm font-bold text-crook-brown"
                      aria-label="Aumentar"
                      @click="increment(item.id)"
                    >
                      +
                    </button>
                  </div>
                  <p class="font-body text-sm font-bold text-crook-brown">
                    {{ formatMoney(item.priceValue * item.qty) }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <footer v-if="!isEmpty" class="border-t border-crook-brown/15 bg-crook-cream px-5 py-5">
          <div class="mb-4 flex items-center justify-between">
            <span class="font-body text-sm text-crook-text/65">Total</span>
            <span class="font-display text-2xl font-extrabold tracking-tight text-crook-brown">
              {{ formatMoney(subtotal) }}
            </span>
          </div>

          <button
            type="button"
            class="btn-primary w-full"
            @click="checkoutWhatsApp"
          >
            Pedir no WhatsApp
            <span class="arrow">→</span>
          </button>
          <p class="mt-3 text-center font-body text-[11px] leading-relaxed text-crook-text/50">
            Abrimos o WhatsApp com seu pedido pronto para enviar.
          </p>
        </footer>
      </aside>
    </Transition>
  </Teleport>
</template>
