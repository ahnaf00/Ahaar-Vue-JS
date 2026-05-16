<script setup>
import ContactInfoSection from './ContactInfoSection.vue';
import ContactForm from './ContactForm.vue';

defineEmits(['submitted'])
</script>

<template>
    <section class="py-16 bg-cream-50">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-start">
                <ContactInfoSection />
                <ContactForm @submitted="$emit('submitted', $event)" />
            </div>
        </div>
    </section>
</template>