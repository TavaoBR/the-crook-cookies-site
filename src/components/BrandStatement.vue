<template>
  <section class="section-pad border-y border-crook-brown/8 bg-crook-beige/35">
    <div class="container-crook grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div class="reveal relative lg:col-span-5">
        <div class="overflow-hidden rounded-[1.75rem] shadow-lift">
          <img
            src="/images/instagram/cookies-flatlay.jpg"
            alt="Crooks artesanais"
            class="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          class="absolute -bottom-5 -right-2 rounded-xl border border-crook-brown/10 bg-crook-cream px-5 py-4 shadow-lift md:-right-4"
        >
          <p class="font-display text-2xl font-extrabold text-crook-brown">13.4k</p>
          <p class="font-body text-[11px] tracking-[0.16em] text-crook-text/55 uppercase">
            Followers
          </p>
        </div>
      </div>

      <div class="reveal lg:col-span-7">
        <p class="font-body text-xs font-semibold tracking-[0.24em] text-crook-caramel uppercase">
          The artisanal bakery
        </p>
        <h2 class="display-title mt-3 text-4xl md:text-6xl">
          Not just<br />a cookie.
        </h2>
        <p class="mt-5 max-w-xl font-body text-base leading-relaxed text-crook-text/70">
          Aqui, cada detalhe importa. Transformamos cookies em experiências — grandes, macios e
          recheados de verdade.
        </p>

        <ul class="mt-10 space-y-5">
          <li
            v-for="item in [
              { t: 'Baked fresh', d: 'Produção artesanal, do forno pra você.' },
              { t: 'Loaded filling', d: 'Recheio generoso. Zero firula.' },
              { t: 'Worth stealing', d: 'Uma marca jovem, ousada e premium.' },
            ]"
            :key="item.t"
            class="flex gap-4"
          >
            <span
              class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crook-brown text-crook-cream"
            >
              <span class="font-display text-xs font-bold">+</span>
            </span>
            <div>
              <p class="font-display text-sm font-extrabold tracking-tight text-crook-brown uppercase">
                {{ item.t }}
              </p>
              <p class="mt-1 font-body text-sm text-crook-text/65">{{ item.d }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
