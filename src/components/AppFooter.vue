<script setup>
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_URL } from '../data/site'
import BrandLogo from './BrandLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-crook-brown/10 bg-crook-cream py-16 md:py-20">
    <div class="container-crook">
      <div class="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div class="flex items-start gap-4">
          <BrandLogo size="lg" />
          <div>
            <p class="font-display text-2xl font-extrabold tracking-tight text-crook-brown uppercase">
              THE CROOK.
            </p>
            <p class="mt-2 max-w-xs font-body text-sm text-crook-text/55">
              Cookies worth stealing. Aracaju, SE.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-x-8 gap-y-3">
          <a
            :href="INSTAGRAM_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="font-body text-xs font-semibold tracking-[0.18em] text-crook-brown uppercase transition-opacity hover:opacity-60"
          >
            Instagram
          </a>
          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="font-body text-xs font-semibold tracking-[0.18em] text-crook-brown uppercase transition-opacity hover:opacity-60"
          >
            WhatsApp
          </a>
          <a
            :href="ADDRESS.mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-body text-xs font-semibold tracking-[0.18em] text-crook-brown uppercase transition-opacity hover:opacity-60"
          >
            Localização
          </a>
        </div>
      </div>

      <div class="rule-line mt-12" />

      <p class="mt-6 font-body text-xs tracking-[0.12em] text-crook-text/40 uppercase">
        © {{ year }} THE CROOK.
      </p>
    </div>
  </footer>
</template>
