<script setup>
import { ADDRESS, BUSINESS_HOURS, WHATSAPP_URL, INSTAGRAM_URL } from '../data/site'
</script>

<template>
  <section id="contato" class="relative overflow-hidden bg-crook-cream">
    <!-- atmosfera -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_40%,rgba(169,111,66,0.12),transparent_55%),radial-gradient(ellipse_55%_50%_at_100%_80%,rgba(77,54,36,0.08),transparent_50%)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-10 top-8 select-none font-display text-[8rem] font-black leading-none tracking-tighter text-crook-brown/[0.035] uppercase md:text-[12rem]"
      aria-hidden="true"
    >
      Visit
    </div>

    <div class="container-crook relative py-12 sm:py-16 md:py-24">
      <div class="reveal overflow-hidden rounded-[1.35rem] border border-crook-brown/10 bg-crook-beige/40 shadow-lift sm:rounded-[1.75rem] md:rounded-[2rem] lg:grid lg:grid-cols-12 lg:items-stretch">
        <!-- painel info -->
        <div
          class="relative flex flex-col justify-between gap-8 bg-crook-espresso px-5 py-8 text-crook-cream sm:gap-10 sm:px-7 sm:py-10 md:px-10 md:py-12 lg:col-span-5 lg:px-11 lg:py-14"
        >
          <div
            class="location-grain pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden="true"
          />

          <div class="relative">
            <div class="mb-4 flex items-center gap-3">
              <span class="h-px w-8 bg-crook-caramel" aria-hidden="true" />
              <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
                Localização
              </p>
            </div>

            <h2 class="font-display text-3xl font-extrabold tracking-tight text-crook-cream uppercase sm:text-4xl md:text-5xl">
              Visite a<br />The Crook.
            </h2>

            <p class="mt-4 max-w-sm font-body text-sm leading-relaxed text-crook-cream/65">
              Retire na loja ou peça delivery em Aracaju. Confirmamos tudo pelo WhatsApp.
            </p>
          </div>

          <div class="relative space-y-7">
            <div>
              <p class="font-body text-[10px] font-semibold tracking-[0.22em] text-crook-caramel uppercase">
                Endereço
              </p>
              <p class="mt-2 font-display text-xl font-extrabold tracking-tight uppercase">
                {{ ADDRESS.neighborhood }}
              </p>
              <p class="mt-1.5 font-body text-sm leading-relaxed text-crook-cream/70">
                {{ ADDRESS.street }}<br />
                {{ ADDRESS.city }}/{{ ADDRESS.state }}
              </p>
            </div>

            <div class="h-px w-16 bg-crook-cream/15" aria-hidden="true" />

            <div>
              <p class="font-body text-[10px] font-semibold tracking-[0.22em] text-crook-caramel uppercase">
                Horário
              </p>
              <p class="mt-2 font-body text-sm leading-relaxed text-crook-cream/80">
                {{ BUSINESS_HOURS }}
              </p>
            </div>
          </div>

          <div class="relative flex flex-col gap-3">
            <a
              :href="ADDRESS.mapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-pill bg-crook-cream px-7 py-3.5 font-body text-sm font-bold tracking-wide text-crook-brown uppercase transition-transform hover:scale-[1.02]"
            >
              Como chegar
              <span aria-hidden="true">→</span>
            </a>
            <div class="flex gap-3">
              <a
                :href="WHATSAPP_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex flex-1 items-center justify-center rounded-pill border border-crook-cream/25 px-4 py-3 font-body text-[11px] font-bold tracking-[0.14em] text-crook-cream uppercase transition-colors hover:border-crook-cream/50 hover:bg-crook-cream/5"
              >
                WhatsApp
              </a>
              <a
                :href="INSTAGRAM_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex flex-1 items-center justify-center rounded-pill border border-crook-cream/25 px-4 py-3 font-body text-[11px] font-bold tracking-[0.14em] text-crook-cream uppercase transition-colors hover:border-crook-cream/50 hover:bg-crook-cream/5"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <!-- mapa -->
        <div class="relative min-h-[320px] lg:col-span-7 lg:min-h-[560px]">
          <iframe
            title="Mapa The Crook Cookies — Aracaju"
            class="absolute inset-0 h-full w-full contrast-[1.04] saturate-[0.8]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Rua%20Vereador%20Deocleciano%20Ramos%205%20Suissa%20Aracaju&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />

          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-crook-espresso/55 via-crook-espresso/10 to-transparent px-6 pb-6 pt-16"
          >
            <p class="font-display text-sm font-extrabold tracking-tight text-crook-cream uppercase md:text-base">
              {{ ADDRESS.street }}
            </p>
            <p class="mt-1 font-body text-xs text-crook-cream/75">
              {{ ADDRESS.neighborhood }} · {{ ADDRESS.city }}/{{ ADDRESS.state }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
</style>
