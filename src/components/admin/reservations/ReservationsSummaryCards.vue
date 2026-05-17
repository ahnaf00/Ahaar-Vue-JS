<script setup>

const adminReservationMetrics = [
    {
        id: 'reservation-total',
        title: 'Bookings Today',
        value: '36',
        caption: 'Total reservations received',
        icon: 'fas fa-calendar-check',
    },
    {
        id: 'reservation-confirmed',
        title: 'Confirmed Tables',
        value: '24',
        caption: 'Ready for service',
        icon: 'fas fa-circle-check',
    },
    {
        id: 'reservation-pending',
        title: 'Pending Calls',
        value: '7',
        caption: 'Awaiting final confirmation',
        icon: 'fas fa-phone-volume',
    },
    {
        id: 'reservation-capacity',
        title: 'Private Events',
        value: '3',
        caption: 'Large group bookings this week',
        icon: 'fas fa-users',
    },
]

</script>

<template>
    <section>
        <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div v-for="metric in adminReservationMetrics" :key="metric.id"
                class="bg-white rounded-[28px] border border-cream-100 p-5 shadow-sm hover:shadow-lg transition-all">
                <div class="flex items-start justify-between gap-3">
                    <div>
                        <p class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">{{ metric.title }}</p>
                        <p class="font-heading text-4xl text-forest-800 font-bold mt-3">{{ metric.value }}</p>
                        <p class="text-sm text-gray-500 mt-2">{{ metric.caption }}</p>
                    </div>
                    <div class="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center">
                        <i :class="metric.icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>