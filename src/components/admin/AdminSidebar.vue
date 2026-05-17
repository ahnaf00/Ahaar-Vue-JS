<script setup>
import { useRoute } from 'vue-router'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const adminNavItems = [
  { id: 'nav-dashboard', label: 'Dashboard', icon: 'fas fa-chart-pie', to: '/admin' },
  { id: 'nav-orders', label: 'Orders', icon: 'fas fa-bag-shopping', to: '/admin/orders' },
  { id: 'nav-reservations', label: 'Reservations', icon: 'fas fa-calendar-check', to: '/admin/reservations' },
  { id: 'nav-menu', label: 'Menu', icon: 'fas fa-utensils', to: '/admin/menu' },
  { id: 'nav-impact', label: 'Impact', icon: 'fas fa-hand-holding-heart', to: '/admin/impact' },
]

defineEmits(['close'])

const route = useRoute()

function isActive(path) {
  if (path === '/admin') return route.path === '/admin'
  return route.path.startsWith(path)
}
</script>

<template>
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 bg-black/40 z-40 lg:hidden" @click="$emit('close')"></div>
  </Transition>

  <aside
    class="fixed inset-y-0 left-0 z-50 w-72 bg-forest-900 text-white border-r border-white/10 transform transition-transform duration-300 lg:translate-x-0"
    :class="open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'">
    <div class="h-full flex flex-col">
      <div class="px-6 py-6 border-b border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
            <span class="text-gold-400 font-heading text-xl font-bold">A</span>
          </div>
          <div>
            <p class="font-heading text-2xl font-bold">Ahaar</p>
            <p class="text-xs uppercase tracking-[0.2em] text-white/50">Admin Panel</p>
          </div>
        </div>

        <button type="button" class="lg:hidden text-white/70 hover:text-white" aria-label="Close sidebar"
          @click="$emit('close')">
          <i class="fas fa-xmark text-lg"></i>
        </button>
      </div>

      <nav class="px-4 py-6 space-y-2 flex-1 overflow-y-auto">
        <RouterLink v-for="item in adminNavItems" :key="item.id" :to="item.to"
          class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all" :class="isActive(item.to)
            ? 'bg-gold-400 text-forest-900 font-bold'
            : 'text-white/70 hover:bg-white/10 hover:text-white'
            " @click="$emit('close')">
          <i :class="item.icon" class="text-sm w-5"></i>
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>

      <div class="p-4 border-t border-white/10">
        <div class="rounded-3xl bg-white/5 p-5 border border-white/10">
          <p class="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Mission Pulse</p>
          <p class="font-heading text-2xl text-gold-400 font-bold">10%</p>
          <p class="text-sm text-white/70 mt-1">Meals continue to support partner homes every week.</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>