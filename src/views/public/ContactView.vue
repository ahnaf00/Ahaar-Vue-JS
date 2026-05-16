<script setup>
import { ref } from 'vue'
import ContactHero from '../../components/contact/ContactHero.vue'
import ContactGridSection from '../../components/contact/ContactGridSection.vue'
import FaqSection from '../../components/contact/FaqSection.vue'
import ContactSuccessToast from '../../components/contact/ContactSuccessToast.vue'

const toastVisible = ref(false)

function handleContactSubmit(formData) {
    console.log('Contact submitted:', formData)
    toastVisible.value = true

    setTimeout(() => {
        toastVisible.value = false
    }, 3000)
}
</script>

<template>
    <div>
        <ContactHero />
        <ContactGridSection @submitted="handleContactSubmit" />
        <FaqSection />
        <ContactSuccessToast :visible="toastVisible" />
    </div>
</template>
