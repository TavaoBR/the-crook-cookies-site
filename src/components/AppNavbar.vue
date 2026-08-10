<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useCart } from '../composables/useCart'
import BrandLogo from './BrandLogo.vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const { open, count } = useCart()

const links = [
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
]

function onScroll() {
  scrolled.value = window.scrollY > 16
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
    <nav
      class="container-crook relative rounded-2xl border transition-all duration-300 md:rounded-pill"
      :class="
        scrolled || menuOpen
          ? 'border-crook-brown/10 bg-crook-cream/95 shadow-nav backdrop-blur-md'
          : 'border-crook-brown/8 bg-crook-cream/80 shadow-soft backdrop-blur-sm'
      "
    >
      <div class="flex h-14 items-center justify-between gap-2 px-3 md:h-16 md:gap-3 md:px-4">
        <a
          href="#top"
          class="flex shrink-0 items-center gap-2 pl-0.5"
          aria-label="THE CROOK. — início"
          @click="closeMenu"
        >
          <BrandLogo size="sm" />
          <span class="font-display text-sm font-extrabold tracking-tight text-crook-brown uppercase">
            THE CROOK.
          </span>
        </a>

        <!-- links desktop -->
        <ul class="hidden items-center gap-6 md:flex lg:gap-7">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="font-body text-[11px] font-semibold tracking-[0.18em] text-crook-brown/80 uppercase transition-colors hover:text-crook-brown"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            class="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-crook-brown/15 bg-crook-white/70 text-crook-brown transition-all hover:border-crook-brown/35 md:w-auto md:gap-2 md:rounded-pill md:px-3"
            aria-label="Abrir carrinho"
            @click="open"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 7h15l-1.4 8.4a2 2 0 0 1-2 1.6H9a2 2 0 0 1-2-1.7L5.2 4H3"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="10" cy="20" r="1.2" fill="currentColor" />
              <circle cx="17" cy="20" r="1.2" fill="currentColor" />
            </svg>
            <span class="hidden font-body text-[11px] font-bold tracking-[0.14em] uppercase md:inline">
              Carrinho
            </span>
            <span
              class="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-crook-brown px-1 text-[10px] font-bold text-crook-cream md:static md:ml-0"
            >
              {{ count }}
            </span>
          </button>

          <button
            type="button"
            class="btn-primary hidden !h-10 !px-5 !py-0 text-[11px] lg:inline-flex"
            @click="open"
          >
            Pedir
            <span class="arrow">→</span>
          </button>

          <!-- menu mobile -->
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-crook-brown/15 bg-crook-white/70 text-crook-brown md:hidden"
            :aria-expanded="menuOpen"
            aria-controls="mobile-nav"
            aria-label="Abrir menu"
            @click="toggleMenu"
          >
            <span class="sr-only">Menu</span>
            <span class="relative block h-3.5 w-4" aria-hidden="true">
              <span
                class="absolute left-0 h-0.5 w-full rounded-full bg-crook-brown transition-all duration-300"
                :class="menuOpen ? 'top-1.5 rotate-45' : 'top-0'"
              />
              <span
                class="absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-crook-brown transition-opacity duration-300"
                :class="menuOpen ? 'opacity-0' : 'opacity-100'"
              />
              <span
                class="absolute left-0 h-0.5 w-full rounded-full bg-crook-brown transition-all duration-300"
                :class="menuOpen ? 'top-1.5 -rotate-45' : 'top-3'"
              />
            </span>
          </button>
        </div>
      </div>

      <!-- painel mobile -->
      <div
        id="mobile-nav"
        class="grid transition-[grid-template-rows] duration-300 ease-out md:hidden"
        :class="menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        :aria-hidden="!menuOpen"
      >
        <div class="overflow-hidden" :inert="!menuOpen">
          <ul class="flex flex-col gap-1 border-t border-crook-brown/10 px-3 py-3">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="flex min-h-12 items-center rounded-xl px-3 font-body text-sm font-bold tracking-[0.14em] text-crook-brown uppercase transition-colors hover:bg-crook-beige/60"
                :tabindex="menuOpen ? 0 : -1"
                @click="closeMenu"
              >
                {{ link.label }}
              </a>
            </li>
            <li class="pt-1">
              <a
                href="#cardapio"
                class="btn-primary mt-1 w-full"
                :tabindex="menuOpen ? 0 : -1"
                @click="closeMenu"
              >
                Ver cardápio
                <span class="arrow">→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>

  <Teleport to="body">
    <button
      v-if="menuOpen"
      type="button"
      class="fixed inset-0 z-40 bg-crook-espresso/30 md:hidden"
      aria-label="Fechar menu"
      @click="closeMenu"
    />
  </Teleport>
</template>
