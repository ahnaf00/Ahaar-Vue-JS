<script setup>
import ReservationStatusBadge from './ReservationStatusBadge.vue';

defineProps({
    reservation: {
        type: Object,
        default: null,
    },
})

defineEmits(['close'])
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="reservation" class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
                @click.self="$emit('close')">
                <div
                    class="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl p-6 md:p-8 overflow-y-auto">
                    <div class="flex items-start justify-between gap-4 mb-8">
                        <div>
                            <p class="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Reservation Details
                            </p>
                            <h2 class="font-heading text-3xl text-forest-800 font-bold mt-2">{{ reservation.id }}</h2>
                        </div>
                        <button type="button"
                            class="w-11 h-11 rounded-2xl bg-cream-50 border border-cream-100 text-forest-800"
                            aria-label="Close reservation drawer" @click="$emit('close')">
                            <i class="fas fa-xmark"></i>
                        </button>
                    </div>

                    <div class="space-y-6">
                        <div class="rounded-3xl bg-cream-50 border border-cream-100 p-5">
                            <div class="flex items-center justify-between gap-4 mb-4">
                                <div>
                                    <p class="font-semibold text-forest-800">{{ reservation.guest }}</p>
                                    <p class="text-sm text-gray-400 mt-1">{{ reservation.phone }}</p>
                                </div>
                                <ReservationStatusBadge :status="reservation.status" />
                            </div>

                            <div class="grid sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p class="text-gray-400">Date</p>
                                    <p class="font-semibold text-gray-700 mt-1">{{ reservation.date }}</p>
                                </div>
                                <div>
                                    <p class="text-gray-400">Time</p>
                                    <p class="font-semibold text-gray-700 mt-1">{{ reservation.time }}</p>
                                </div>
                                <div>
                                    <p class="text-gray-400">Party Size</p>
                                    <p class="font-semibold text-gray-700 mt-1">{{ reservation.partySize }}</p>
                                </div>
                                <div>
                                    <p class="text-gray-400">Occasion</p>
                                    <p class="font-semibold text-gray-700 mt-1">{{ reservation.occasion }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-3xl bg-white border border-cream-100 p-5">
                            <p class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold mb-3">Seating Plan</p>
                            <p class="text-gray-700 font-medium">{{ reservation.seating }}</p>
                        </div>

                        <div class="rounded-3xl bg-white border border-cream-100 p-5">
                            <p class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold mb-3">Guest Notes</p>
                            <p class="text-gray-600 leading-relaxed">{{ reservation.notes }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
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