<script setup>
import ReservationStatusBadge from './ReservationStatusBadge.vue';

defineProps({
    reservations: {
        type: Array,
        required: true,
    },
})

defineEmits(['select'])
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm overflow-hidden">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <h2 class="font-heading text-2xl text-forest-800 font-bold">Guest Reservations</h2>
                <p class="text-sm text-gray-500 mt-1">Tap any booking to review full guest notes.</p>
            </div>
            <p class="text-sm text-gray-400">{{ reservations.length }} reservations found</p>
        </div>

        <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-400 uppercase tracking-[0.18em] text-xs border-b border-cream-100">
                        <th class="pb-4 pr-4">Reservation</th>
                        <th class="pb-4 pr-4">Guest</th>
                        <th class="pb-4 pr-4">Schedule</th>
                        <th class="pb-4 pr-4">Party</th>
                        <th class="pb-4 pr-4">Occasion</th>
                        <th class="pb-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reservation in reservations" :key="reservation.id"
                        class="border-b border-cream-100/80 last:border-b-0 cursor-pointer hover:bg-cream-50/60"
                        @click="$emit('select', reservation)">
                        <td class="py-4 pr-4 font-bold text-forest-800">{{ reservation.id }}</td>
                        <td class="py-4 pr-4">
                            <p class="font-semibold text-gray-700">{{ reservation.guest }}</p>
                            <p class="text-xs text-gray-400 mt-1">{{ reservation.phone }}</p>
                        </td>
                        <td class="py-4 pr-4 text-gray-500">{{ reservation.date }} · {{ reservation.time }}</td>
                        <td class="py-4 pr-4 text-gray-500">{{ reservation.partySize }}</td>
                        <td class="py-4 pr-4 text-gray-500">{{ reservation.occasion }}</td>
                        <td class="py-4">
                            <ReservationStatusBadge :status="reservation.status" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>