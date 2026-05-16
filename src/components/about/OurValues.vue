<script setup>

import ValueCard from './ValueCard.vue';

const values = [
    {
        id: 'value-integrity',
        icon: 'fas fa-hand-holding-heart',
        title: 'Radical Integrity',
        desc: 'We commit to full transparency in our donation models. Every Taka is tracked, and every meal shared is reported to our patrons monthly.',
    },
    {
        id: 'value-heritage',
        icon: 'fas fa-mortar-pestle',
        title: 'Culinary Heritage',
        desc: 'We preserve forgotten Bengali recipes, using traditional tools and techniques to ensure authentic flavors remain alive in Dhaka.',
    },
    {
        id: 'value-growth',
        icon: 'fas fa-users',
        title: 'Inclusive Growth',
        desc: 'Our staff are partners in our mission. We provide dignified wages and a supportive environment for our team of over 40 local professionals.',
    },
]
</script>

<template>
    <section class="py-24 bg-cream-50">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="font-heading text-4xl text-forest-800 font-bold">The Pillars of Ahaar</h2>
                <div class="w-16 h-1 bg-gold-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid md:grid-cols-3 gap-12">
                <ValueCard v-for="value in values" :key="value.id" :value="value" />
            </div>
        </div>
    </section>
</template>
