<script setup>
const quickActions = [
  {
    id: 'action-menu',
    title: 'Update Menu Pricing',
    description: "Adjust dish rates before tonight's service.",
    icon: 'fas fa-pen-to-square',
  },
  {
    id: 'action-impact',
    title: 'Publish Impact Update',
    description: "Add this month's giving report to the public site.",
    icon: 'fas fa-file-circle-plus',
  },
  {
    id: 'action-event',
    title: 'Review Large Reservations',
    description: 'Check requests for private charity dinners.',
    icon: 'fas fa-users',
  },
]
</script>

<template>
  <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
    <div class="flex items-center justify-between gap-3 mb-6">
      <div>
        <h2 class="font-heading text-2xl text-forest-800 font-bold">Quick Actions</h2>
        <p class="text-sm text-gray-500 mt-1">Stay ahead of tonight's operations.</p>
      </div>
      <span class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Today</span>
    </div>

    <div class="space-y-4">
      <button v-for="action in quickActions" :key="action.id" type="button"
        class="w-full text-left p-5 rounded-3xl bg-cream-50 border border-cream-100 hover:bg-white hover:shadow-md transition-all">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0">
            <i :class="action.icon"></i>
          </div>
          <div>
            <h3 class="font-bold text-forest-800">{{ action.title }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ action.description }}</p>
          </div>
        </div>
      </button>
    </div>
  </section>
</template>
