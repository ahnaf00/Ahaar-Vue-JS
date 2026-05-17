<script setup>
const recentReservations = [
  {
    id: 'RSV-501',
    guest: 'Tanveer Islam',
    date: 'May 17, 2026',
    time: '08:00 PM',
    partySize: '4 Guests',
    status: 'Confirmed',
  },
  {
    id: 'RSV-500',
    guest: 'Sarah Rahman',
    date: 'May 17, 2026',
    time: '07:30 PM',
    partySize: '2 Guests',
    status: 'Pending',
  },
  {
    id: 'RSV-499',
    guest: 'Mahmud Hasan',
    date: 'May 18, 2026',
    time: '01:00 PM',
    partySize: '6 Guests',
    status: 'Confirmed',
  },
]
</script>

<template>
  <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm overflow-hidden">
    <div class="flex items-center justify-between gap-3 mb-6">
      <div>
        <h2 class="font-heading text-2xl text-forest-800 font-bold">Upcoming Reservations</h2>
        <p class="text-sm text-gray-500 mt-1">Confirmed and pending bookings for the next service.</p>
      </div>
      <button type="button" class="text-sm font-bold text-forest-800 hover:text-gold-500 transition-colors">
        Manage list
      </button>
    </div>

    <div class="space-y-4">
      <div v-for="reservation in recentReservations" :key="reservation.id"
        class="p-5 rounded-3xl bg-cream-50 border border-cream-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div class="flex items-center gap-3 flex-wrap">
            <p class="font-bold text-forest-800">{{ reservation.guest }}</p>
            <span class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">{{ reservation.id }}</span>
          </div>
          <p class="text-sm text-gray-500 mt-1">
            {{ reservation.date }} · {{ reservation.time }} · {{ reservation.partySize }}
          </p>
        </div>

        <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold"
          :class="reservation.status === 'Confirmed' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'">
          {{ reservation.status }}
        </span>
      </div>
    </div>
  </section>
</template>