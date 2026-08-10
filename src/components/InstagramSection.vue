<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { INSTAGRAM_URL } from '../data/site'
import { galleryItems } from '../data/media'

const root = ref(null)
const modalVideo = ref(null)
const isOpen = ref(false)
const activeIndex = ref(0)
let observer

const activeItem = computed(() => galleryItems[activeIndex.value])
const featured = computed(() => galleryItems[0])
const sideItems = computed(() => galleryItems.slice(1, 3))
const bottomItems = computed(() => galleryItems.slice(3))

function openAt(index) {
  activeIndex.value = index
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

function close() {
  isOpen.value = false
  document.body.style.overflow = ''
  if (modalVideo.value) {
    modalVideo.value.pause()
  }
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % galleryItems.length
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + galleryItems.length) % galleryItems.length
}

function onKeydown(event) {
  if (!isOpen.value) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') prev()
}

watch(isOpen, async (open) => {
  if (!open) return
  await nextTick()
  if (activeItem.value?.type === 'video' && modalVideo.value) {
    modalVideo.value.play().catch(() => {})
  }
})

watch(activeIndex, async () => {
  if (!isOpen.value) return
  await nextTick()
  if (activeItem.value?.type === 'video' && modalVideo.value) {
    modalVideo.value.currentTime = 0
    modalVideo.value.play().catch(() => {})
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

  const videos = root.value?.querySelectorAll('[data-preview-video]') || []
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      })
    },
    { threshold: 0.35 },
  )
  videos.forEach((video) => observer.observe(video))
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  observer?.disconnect()
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="instagram" ref="root" class="relative overflow-hidden bg-crook-espresso text-crook-cream">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_0%,rgba(169,111,66,0.22),transparent_55%),radial-gradient(ellipse_50%_45%_at_95%_80%,rgba(237,226,210,0.08),transparent_50%)]"
      aria-hidden="true"
    />
    <div class="ig-grain pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
    <div
      class="pointer-events-none absolute -left-8 top-16 select-none font-display text-[7rem] font-black leading-none tracking-tighter text-crook-cream/[0.04] uppercase md:text-[11rem]"
      aria-hidden="true"
    >
      Feed
    </div>

    <div class="container-crook relative py-12 sm:py-16 md:py-24">
      <div class="reveal mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-6">
        <div>
          <div class="mb-3 flex items-center gap-3">
            <span class="h-px w-8 bg-crook-caramel" aria-hidden="true" />
            <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
              Instagram
            </p>
          </div>
          <h2 class="font-display text-3xl font-extrabold tracking-tight text-crook-cream uppercase sm:text-4xl md:text-5xl lg:text-6xl">
            Siga a The Crook.
          </h2>
          <p class="mt-3 max-w-md font-body text-sm leading-relaxed text-crook-cream/60">
            Reels e fornadas reais — toque pra assistir sem sair da página.
          </p>
        </div>

        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex w-full items-center justify-center gap-2 self-start rounded-pill border border-crook-cream/25 bg-crook-cream/5 px-6 py-3 font-body text-[11px] font-bold tracking-[0.16em] text-crook-cream uppercase transition-colors hover:border-crook-cream/50 hover:bg-crook-cream/10 sm:w-auto"
        >
          @thecrookcookies
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="reveal flex flex-col gap-3 md:gap-4">
        <!-- topo: featured + 2 laterais -->
        <div class="grid gap-3 md:gap-4 lg:grid-cols-12 lg:items-stretch">
          <button
            type="button"
            class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-crook-brown text-left outline-none ring-crook-caramel/0 transition-[box-shadow] duration-300 hover:ring-2 hover:ring-crook-caramel/40 focus-visible:ring-2 focus-visible:ring-crook-caramel sm:aspect-[16/11] lg:col-span-7 lg:aspect-auto lg:min-h-[520px] lg:rounded-[1.25rem]"
            :aria-label="`Abrir ${featured.alt}`"
            @click="openAt(0)"
          >
            <video
              :src="featured.src"
              data-preview-video
              class="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              muted
              loop
              playsinline
              preload="metadata"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-crook-espresso/85 via-crook-espresso/15 to-transparent"
            />
            <div class="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-crook-cream/95 text-[11px] text-crook-brown shadow-soft"
                aria-hidden="true"
              >▶</span>
              <span
                class="rounded-pill bg-crook-espresso/55 px-2.5 py-1 font-body text-[9px] font-bold tracking-[0.16em] text-crook-cream uppercase backdrop-blur-sm"
              >Reel</span>
            </div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p class="font-display text-lg font-extrabold tracking-tight text-crook-cream uppercase md:text-xl">
                {{ featured.label }}
              </p>
              <p class="mt-1 font-body text-sm text-crook-cream/65">
                {{ featured.alt }}
              </p>
            </div>
          </button>

          <div class="flex flex-col gap-3 max-lg:flex-row md:gap-4 lg:col-span-5">
            <button
              v-for="(item, i) in sideItems"
              :key="item.id"
              type="button"
              class="group relative aspect-square flex-1 overflow-hidden rounded-2xl bg-crook-brown text-left outline-none transition-[box-shadow] duration-300 hover:ring-2 hover:ring-crook-caramel/40 focus-visible:ring-2 focus-visible:ring-crook-caramel lg:aspect-auto lg:min-h-[250px] lg:rounded-[1.25rem]"
              :aria-label="`Abrir ${item.alt}`"
              @click="openAt(i + 1)"
            >
              <video
                v-if="item.type === 'video'"
                :src="item.src"
                data-preview-video
                class="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                muted
                loop
                playsinline
                preload="metadata"
              />
              <img
                v-else
                :src="item.src"
                :alt="item.alt"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-crook-espresso/80 via-transparent to-transparent"
              />
              <div
                v-if="item.type === 'video'"
                class="pointer-events-none absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-crook-cream/95 text-[10px] text-crook-brown shadow-soft"
                aria-hidden="true"
              >▶</div>
              <div class="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 md:p-4">
                <p class="font-display text-sm font-extrabold tracking-tight text-crook-cream uppercase">
                  {{ item.label }}
                </p>
              </div>
            </button>
          </div>
        </div>

        <!-- base: 3 tiles -->
        <div class="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          <button
            v-for="(item, i) in bottomItems"
            :key="item.id"
            type="button"
            class="group relative aspect-[3/4] overflow-hidden rounded-xl bg-crook-brown text-left outline-none transition-[box-shadow] duration-300 hover:ring-2 hover:ring-crook-caramel/40 focus-visible:ring-2 focus-visible:ring-crook-caramel sm:aspect-square sm:rounded-2xl lg:aspect-[4/3] lg:rounded-[1.25rem]"
            :aria-label="`Abrir ${item.alt}`"
            @click="openAt(i + 3)"
          >
            <video
              :src="item.src"
              data-preview-video
              class="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              muted
              loop
              playsinline
              preload="metadata"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-crook-espresso/80 via-transparent to-transparent"
            />
            <div
              class="pointer-events-none absolute left-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-crook-cream/95 text-[9px] text-crook-brown shadow-soft md:left-3 md:top-3 md:h-8 md:w-8"
              aria-hidden="true"
            >▶</div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 p-2.5 md:p-4">
              <p class="font-display text-[11px] font-extrabold tracking-tight text-crook-cream uppercase sm:text-sm">
                {{ item.label }}
              </p>
            </div>
          </button>
        </div>
      </div>

      <div
        class="reveal mt-8 flex flex-col items-start justify-between gap-4 border-t border-crook-cream/10 pt-8 sm:flex-row sm:items-center"
      >
        <p class="font-body text-sm text-crook-cream/55">
          Novidades, bastidores e fornadas no
          <span class="font-semibold text-crook-cream/80">@thecrookcookies</span>
        </p>
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-pill bg-crook-cream px-7 py-3.5 font-body text-sm font-bold tracking-wide text-crook-brown uppercase transition-transform hover:scale-[1.02]"
        >
          Abrir Instagram
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

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
          v-if="isOpen"
          class="fixed inset-0 z-[80] flex items-center justify-center bg-crook-espresso/90 p-3 backdrop-blur-md md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria The Crook"
          @click.self="close"
        >
          <button
            type="button"
            class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-crook-cream/95 font-display text-lg text-crook-brown shadow-soft md:right-6 md:top-6"
            aria-label="Fechar"
            @click="close"
          >
            ✕
          </button>

          <button
            type="button"
            class="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-crook-cream/95 text-crook-brown shadow-soft md:left-6"
            aria-label="Anterior"
            @click="prev"
          >
            ←
          </button>

          <button
            type="button"
            class="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-crook-cream/95 text-crook-brown shadow-soft md:right-6"
            aria-label="Próximo"
            @click="next"
          >
            →
          </button>

          <div class="relative flex max-h-[88vh] w-full max-w-3xl flex-col items-center">
            <div class="relative w-full overflow-hidden rounded-2xl bg-crook-brown shadow-lift">
              <video
                v-if="activeItem.type === 'video'"
                :key="activeItem.id"
                ref="modalVideo"
                :src="activeItem.src"
                class="mx-auto max-h-[78vh] w-full object-contain"
                controls
                playsinline
                autoplay
                loop
              />
              <img
                v-else
                :key="activeItem.id"
                :src="activeItem.src"
                :alt="activeItem.alt"
                class="mx-auto max-h-[78vh] w-full object-contain"
              />
            </div>

            <div class="mt-4 flex w-full items-center justify-between gap-4 px-1">
              <div>
                <p class="font-display text-sm font-extrabold tracking-tight text-crook-cream uppercase">
                  {{ activeItem.label }}
                </p>
                <p class="mt-0.5 font-body text-xs text-crook-cream/65 md:text-sm">
                  {{ activeItem.alt }}
                </p>
              </div>
              <p class="shrink-0 font-display text-xs font-extrabold tracking-[0.16em] text-crook-cream/80 uppercase">
                {{ activeIndex + 1 }} / {{ galleryItems.length }}
              </p>
            </div>

            <div class="mt-3 flex gap-1.5">
              <button
                v-for="(item, index) in galleryItems"
                :key="item.id"
                type="button"
                class="h-1.5 rounded-full transition-all"
                :class="activeIndex === index ? 'w-5 bg-crook-cream' : 'w-1.5 bg-crook-cream/35'"
                :aria-label="`Ir para item ${index + 1}`"
                @click="openAt(index)"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.ig-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
</style>
