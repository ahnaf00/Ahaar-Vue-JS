<template>
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span class="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">Guest Experiences</span>
            <h2 class="font-heading text-4xl md:text-5xl text-forest-800 font-bold mt-4 mb-16">
                What Our Community Says
            </h2>

            <div class="grid md:grid-cols-3 gap-8 text-left">
                <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

const testimonials = ref([
    {
        id: 'farhan-ahmed',
        quote: "The Kacchi Biryani was divine, but knowing my lunch helped feed kids at a nearby orphanage made it the best meal I've had in Dhaka.",
        name: 'Farhan Ahmed',
        role: 'Gourmet Foodie',
    },
    {
        id: 'sarah-karim',
        quote: 'Finally, a place that balances premium service with real social impact. The atmosphere is warm and the mission is even warmer.',
        name: 'Sarah Karim',
        role: 'Regular Patron',
    },
    {
        id: 'tanveer-islam',
        quote: "I booked Ahaar for a corporate dinner. My colleagues were impressed not just by the food, but by the brand's commitment to Dhaka's community.",
        name: 'Tanveer Islam',
        role: 'Corporate Manager',
    },
])
</script>