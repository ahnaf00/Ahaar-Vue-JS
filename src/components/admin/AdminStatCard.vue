<script setup>
defineProps({
  stat: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm hover:shadow-lg transition-all">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">{{ stat.title }}</p>
        <p class="font-heading text-4xl text-forest-800 font-bold mt-3">{{ stat.value }}</p>
      </div>
      <div
        class="w-14 h-14 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center shadow-lg shadow-forest-800/20">
        <i :class="stat.icon" class="text-xl"></i>
      </div>
    </div>

    <div class="mt-5 flex items-center justify-between gap-3 text-sm">
      <span class="inline-flex items-center gap-2 text-green-700 bg-green-50 px-3 py-1 rounded-full font-semibold">
        <i class="fas fa-arrow-trend-up text-xs"></i>
        {{ stat.change }}
      </span>
      <span class="text-gray-400">{{ stat.note }}</span>
    </div>
  </div>
</template>