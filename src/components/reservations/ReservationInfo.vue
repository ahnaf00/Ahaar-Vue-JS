<script setup>
import ReservationInfoCard from './ReservationInfoCard.vue';
import LocationCard from './LocationCard.vue';

const reservationInfoCards = [
    {
        id: 'info-whatsapp',
        icon: 'fab fa-whatsapp',
        iconClass: 'text-green-500',
        title: 'Direct WhatsApp',
        description: 'Prefer to chat? Message us directly for quick bookings and large events.',
        actionText: '+880 1XXX-XXXXXX',
        actionHref: '#',
    },
    {
        id: 'info-delivery',
        icon: 'fas fa-motorcycle',
        iconClass: 'text-forest-800',
        title: 'Home Delivery',
        description: "Want the Ahaar experience at home? We're available on major delivery platforms.",
        badges: ['FoodPanda', 'Pathao'],
    },
]
</script>

<template>
    <div class="lg:sticky lg:top-40">
        <div class="rounded-[40px] overflow-hidden mb-12 shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant Interior" class="w-full h-80 object-cover" loading="lazy" width="1000" height="320" />
            <div class="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent flex items-end p-10">
                <p class="text-white font-heading text-2xl font-bold">The Ambiance of Giving</p>
            </div>
        </div>

        <div class="space-y-8">
            <ReservationInfoCard v-for="card in reservationInfoCards" :key="card.id" :card="card" />
        </div>

        <LocationCard />
    </div>
</template>
