<script setup>
const features = [
  {
    title: 'Feito na hora',
    desc: 'Fornada fresca todo dia',
    icon: 'M12 3c.4 2.5 1.2 4 3 5.5C13.5 10 12.5 12 12 15c-.5-3-1.5-5-3-6.5C11 7 11.6 5.5 12 3zm0 12c1.5 2 3 3.2 5 4-2.5.3-4 .8-5 2-1-1.2-2.5-1.7-5-2 2-.8 3.5-2 5-4z',
  },
  {
    title: 'Recheio generoso',
    desc: 'Sabor de verdade',
    icon: 'M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm8-5a5 5 0 00-4.5 2.9c1.2-.3 2.6-.2 4.5.6 1.9-.8 3.3-.9 4.5-.6A5 5 0 0012 7z',
  },
  {
    title: 'Ingredientes premium',
    desc: 'Receitas autorais',
    icon: 'M12 2l1.8 5.5H20l-4.5 3.3L17.2 17 12 13.8 6.8 17l1.7-6.2L4 7.5h6.2L12 2z',
  },
  {
    title: 'Entrega em Aracaju',
    desc: 'Ou retire na loja',
    icon: 'M3 7h13v8H3V7zm13 2h3l2 3v3h-5V9zM6.5 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  },
]
</script>

<template>
  <section id="diferenciais" class="relative bg-crook-brown text-crook-cream">
    <div class="wave-top pointer-events-none absolute inset-x-0 top-0 -translate-y-[99%] text-crook-brown" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="block h-12 w-full md:h-16">
        <path
          fill="currentColor"
          d="M0,48 C180,80 360,0 540,32 C720,64 900,80 1080,40 C1260,0 1350,48 1440,32 L1440,80 L0,80 Z"
        />
      </svg>
    </div>

    <div
      class="pointer-events-none absolute inset-0 opacity-20"
      aria-hidden="true"
      style="
        background-image: radial-gradient(circle at 20% 20%, rgba(169,111,66,0.35), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(255,253,237,0.08), transparent 35%);
      "
    />

    <div class="container-crook relative py-16 md:py-20">
      <div class="reveal mx-auto mb-10 max-w-2xl text-center">
        <div class="mb-3 flex items-center justify-center gap-3">
          <span class="h-px w-8 bg-crook-caramel/70" />
          <p class="font-body text-[10px] font-semibold tracking-[0.28em] text-crook-caramel uppercase">
            Por que a Crook
          </p>
          <span class="h-px w-8 bg-crook-caramel/70" />
        </div>
        <h2 class="font-display text-3xl font-extrabold tracking-tight uppercase md:text-4xl">
          Obrigado por escolher<br />a The Crook
        </h2>
        <p class="mt-3 font-body text-sm text-crook-cream/65">
          Cookies worth stealing — feitos para quem não aceita firula.
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(item, index) in features"
          :key="item.title"
          class="reveal group relative overflow-hidden rounded-2xl bg-crook-cream px-5 py-6 text-center text-crook-brown transition-transform duration-500 hover:-translate-y-1"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <span
            class="pointer-events-none absolute -right-1 -top-2 font-display text-5xl font-black text-crook-brown/[0.06]"
            aria-hidden="true"
          >
            0{{ index + 1 }}
          </span>
          <div
            class="relative mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-crook-brown/15 bg-crook-beige/50 transition-colors group-hover:border-crook-caramel/40"
            aria-hidden="true"
          >
            <svg class="h-5 w-5 text-crook-caramel" viewBox="0 0 24 24" fill="currentColor">
              <path :d="item.icon" />
            </svg>
          </div>
          <h3 class="relative font-display text-sm font-extrabold tracking-tight uppercase">
            {{ item.title }}
          </h3>
          <p class="relative mt-1 font-body text-xs text-crook-text/55">
            {{ item.desc }}
          </p>
        </article>
      </div>
    </div>

    <div class="wave-bottom pointer-events-none absolute inset-x-0 bottom-0 translate-y-[99%] text-crook-brown" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="block h-12 w-full rotate-180 md:h-16">
        <path
          fill="currentColor"
          d="M0,48 C180,80 360,0 540,32 C720,64 900,80 1080,40 C1260,0 1350,48 1440,32 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  </section>
</template>
