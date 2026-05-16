<script setup>
import ContactInfoCard from './ContactInfoCard.vue';
import ContactMapCard from './ContactMapCard.vue';

const contactCards = [
    {
        id: 'contact-phone',
        icon: 'fas fa-phone',
        title: 'Phone',
        subtitle: 'Daily 11 AM — 11 PM',
        actionText: '+880 1XXX-XXXXXX',
        actionHref: '#',
    },
    {
        id: 'contact-whatsapp',
        icon: 'fab fa-whatsapp',
        title: 'WhatsApp',
        subtitle: 'Instant support orders',
        actionText: 'Message Us',
        actionHref: '#',
    },
    {
        id: 'contact-email',
        icon: 'fas fa-envelope',
        title: 'Email',
        subtitle: 'Official inquiries',
        actionText: 'hello@ahaar.com',
        actionHref: 'mailto:hello@ahaar.com',
    },
    {
        id: 'contact-location',
        icon: 'fas fa-location-dot',
        title: 'Location',
        subtitle: 'Dhaka 1212',
        actionText: 'Gulshan Avenue',
        actionHref: '#',
    },
]
</script>

<template>
    <div class="space-y-8">
        <div class="grid sm:grid-cols-2 gap-6">
            <ContactInfoCard v-for="card in contactCards" :key="card.id" :card="card" />
        </div>

        <ContactMapCard />
    </div>
</template>