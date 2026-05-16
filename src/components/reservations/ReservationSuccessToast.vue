<script setup>
defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <Transition name="toast">
        <div v-if="visible"
            class="fixed bottom-8 right-8 bg-forest-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
            role="status" aria-live="polite">
            <i class="fas fa-check-circle text-gold-400"></i>
            <span class="font-semibold">Reservation request submitted successfully!</span>
        </div>
    </Transition>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>