<script setup>
const impactHighlights = [
  {
    id: 'impact-cash',
    label: 'Weekly Support Fund',
    value: '৳4,500',
    detail: 'Allocated over the last 4 weeks',
  },
  {
    id: 'impact-kits',
    label: 'School Kits Shared',
    value: '50',
    detail: 'Prepared for children in Mirpur',
  },
  {
    id: 'impact-partners',
    label: 'Partner Homes Active',
    value: '4',
    detail: 'Dhaka-wide distribution network',
  },
]
</script>

<template>
  <section class="bg-forest-900 rounded-[32px] p-6 text-white shadow-xl">
    <div class="flex items-center justify-between gap-3 mb-6">
      <div>
        <p class="text-xs uppercase tracking-[0.2em] text-gold-300 font-bold">Impact Summary</p>
        <h2 class="font-heading text-2xl font-bold mt-2">This Month's Giving</h2>
      </div>
      <div class="w-14 h-14 rounded-2xl bg-white/10 text-gold-400 flex items-center justify-center">
        <i class="fas fa-hand-holding-heart text-xl"></i>
      </div>
    </div>

    <div class="space-y-4">
      <div v-for="item in impactHighlights" :key="item.id" class="rounded-3xl bg-white/5 border border-white/10 p-4">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-sm text-white/70">{{ item.label }}</p>
            <p class="text-xs text-white/50 mt-1">{{ item.detail }}</p>
          </div>
          <p class="font-heading text-2xl text-gold-400 font-bold">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>