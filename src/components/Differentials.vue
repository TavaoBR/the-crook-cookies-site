<script setup>
const items = [
  {
    title: 'FEITO NA HORA.',
    text: 'Sai do forno quando você pede. Textura no ponto. Cheiro impossível de ignorar.',
    image: '/images/instagram/cookies-flatlay.jpg',
  },
  {
    title: 'RECHEIO DE VERDADE.',
    text: 'Não é um verniz. É generosidade derretendo no meio do cookie.',
    image: '/images/instagram/post-07.jpg',
  },
  {
    title: 'COOKIE DE VERDADE.',
    text: 'Grande. Macio. Com presença. Um cookie que parece declaração.',
    image: '/images/instagram/post-08.jpg',
  },
]
</script>

<template>
  <section class="section-pad">
    <div class="container-crook">
      <div class="reveal mb-12 md:mb-16">
        <h2 class="display-title text-4xl md:text-6xl">
          Big.<br />Soft.<br />Loaded.
        </h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <article
          v-for="(item, index) in items"
          :key="item.title"
          class="reveal"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="overflow-hidden rounded-lg bg-crook-beige">
            <img
              :src="item.image"
              :alt="item.title"
              class="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 class="mt-5 font-display text-xl font-extrabold tracking-tight text-crook-brown uppercase md:text-2xl">
            {{ item.title }}
          </h3>
          <p class="mt-2 font-body text-sm leading-relaxed text-crook-text/70">
            {{ item.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
