<script setup>
import ReservationForm from './ReservationForm.vue'
import ReservationInfo from './ReservationInfo.vue'

const emit = defineEmits(['submitted'])

function onSubmitted(payload) {
    emit('submitted', payload)
}
</script>

<template>
    <section class="py-12 md:py-24">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-start">
                <ReservationForm @submitted="onSubmitted" />
                <ReservationInfo />
            </div>
        </div>
    </section>
</template>