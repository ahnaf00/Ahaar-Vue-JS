<script setup>
defineEmits(['toggle-sidebar'])
</script>

<template>
  <header
    class="sticky top-0 z-30 bg-cream-50/90 backdrop-blur-md border-b border-cream-100 px-6 md:px-8 lg:px-10 py-4">
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <button type="button"
          class="lg:hidden w-11 h-11 rounded-2xl bg-white border border-cream-100 flex items-center justify-center text-forest-800"
          aria-label="Open sidebar" @click="$emit('toggle-sidebar')">
          <i class="fas fa-bars"></i>
        </button>

        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Operations Overview</p>
          <h1 class="font-heading text-3xl text-forest-800 font-bold">Admin Dashboard</h1>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button type="button" class="w-11 h-11 rounded-2xl bg-white border border-cream-100 text-forest-800">
          <i class="fas fa-bell"></i>
        </button>
        <div class="hidden sm:flex items-center gap-3 bg-white border border-cream-100 rounded-2xl px-4 py-2.5">
          <div class="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center font-bold">A
          </div>
          <div>
            <p class="text-sm font-bold text-forest-800">Admin Team</p>
            <p class="text-xs text-gray-400">Dhaka HQ</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>