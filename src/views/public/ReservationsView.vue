<script setup>
import { ref } from 'vue'
import ReservationHero from '../../components/reservations/ReservationHero.vue'
import ReservationSuccessToast from '../../components/reservations/ReservationSuccessToast.vue'

const toastVisible = ref(false)

function handleReservationSubmit(formData) {
    console.log('Reservation submitted:', formData)
    toastVisible.value = true

    setTimeout(() => {
        toastVisible.value = false
    }, 3000)
}
</script>

<template>
    <div>
        <ReservationHero @submitted="handleReservationSubmit" />
        <ReservationSuccessToast :visible="toastVisible" />
    </div>
</template>