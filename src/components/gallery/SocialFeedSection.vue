<script setup>
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <div>
          <h2 class="font-heading text-4xl text-forest-800 font-bold mb-4">Follow the Mission</h2>
          <p class="text-gray-500 italic">@ahaardhaka on Instagram</p>
        </div>
        <a href="#"
          class="btn-primary bg-forest-800 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3">
          <i class="fab fa-instagram text-xl text-gold-400"></i>
          Follow Our Story
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div v-for="n in 6" :key="n" class="aspect-square bg-cream-50 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-primary {
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 168, 67, 0.35);
}
</style>