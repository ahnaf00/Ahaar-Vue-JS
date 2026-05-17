<script setup>
import AdminStatCard from './AdminStatCard.vue';

const adminStats = [
  {
    id: 'stat-orders',
    title: 'Orders Today',
    value: '128',
    change: '+12.5%',
    note: 'Compared to yesterday',
    icon: 'fas fa-bag-shopping',
  },
  {
    id: 'stat-revenue',
    title: 'Revenue Today',
    value: '৳42,800',
    change: '+8.3%',
    note: 'Strong dinner traffic',
    icon: 'fas fa-bangladeshi-taka-sign',
  },
  {
    id: 'stat-reservations',
    title: 'Reservations',
    value: '36',
    change: '+5 new',
    note: 'Tables confirmed today',
    icon: 'fas fa-calendar-check',
  },
  {
    id: 'stat-impact',
    title: 'Meals Shared',
    value: '240',
    change: 'This month',
    note: 'Distributed to partner homes',
    icon: 'fas fa-bowl-food',
  },
]
</script>

<template>
  <section>
    <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <AdminStatCard v-for="stat in adminStats" :key="stat.id" :stat="stat" />
    </div>
  </section>
</template>