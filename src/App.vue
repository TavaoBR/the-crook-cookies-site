<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductMarquee from './components/ProductMarquee.vue'
import CategorySection from './components/CategorySection.vue'
import ProductsGrid from './components/ProductsGrid.vue'
import FeaturesBand from './components/FeaturesBand.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import InstagramSection from './components/InstagramSection.vue'
import LocationSection from './components/LocationSection.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCta from './components/FinalCta.vue'
import AppFooter from './components/AppFooter.vue'
import CartDrawer from './components/CartDrawer.vue'
import { useReveal } from './composables/useReveal'

useReveal()
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-crook-cream">
    <AppNavbar />
    <main>
      <HeroSection />
      <ProductMarquee />
      <CategorySection />
      <ProductsGrid />
      <FeaturesBand />
      <ReviewsSection />
      <InstagramSection />
      <LocationSection />
      <FaqSection />
      <FinalCta />
    </main>
    <AppFooter />
    <CartDrawer />
  </div>
</template>
