<template>
    <section class="py-24 bg-cream-50">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-20 items-center">
                <div class="relative">
                    <div class="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80"
                            alt="Fresh ingredients" class="rounded-3xl shadow-lg mt-8" loading="lazy" width="600"
                            height="400" />
                        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80"
                            alt="Community sharing" class="rounded-3xl shadow-lg" loading="lazy" width="600"
                            height="400" />
                    </div>
                    <div
                        class="absolute -bottom-6 -right-6 bg-forest-800 p-8 rounded-3xl shadow-2xl text-white max-w-[240px]">
                        <p class="font-heading text-4xl font-bold text-gold-400 mb-2">10%</p>
                        <p class="text-sm text-white/80 font-medium">Of every meal shared with local orphan houses</p>
                    </div>
                </div>

                <div>
                    <span class="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">Our Philosophy</span>
                    <h2 class="font-heading text-4xl md:text-5xl text-forest-800 font-bold mt-4 leading-tight">
                        Nourishing Hearts,<br>
                        One Plate at a Time
                    </h2>
                    <p class="text-gray-600 mt-6 text-lg leading-relaxed">
                        At Ahaar, we believe dining is an act of community. Our kitchen is dedicated to providing not
                        just a meal, but a mission.
                    </p>

                    <div class="mt-10 space-y-8">
                        <PhilosophyItem v-for="item in philosophy" :key="item.id" :item="item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import PhilosophyItem from './PhilosophyItem.vue'

const philosophy = ref([
    {
        id: 'quality',
        icon: 'fas fa-leaf',
        title: 'Pristine Quality',
        desc: 'Farm-to-table ingredients sourced directly from local farmers to ensure maximum freshness and support for the local economy.',
    },
    {
        id: 'integrity',
        icon: 'fas fa-hand-holding-heart',
        title: 'Social Integrity',
        desc: 'Transparency is our core. From 1000 BDT weekly donations to sharing 10% of our daily food prep, we report every impact milestone.',
    },
    {
        id: 'excellence',
        icon: 'fas fa-utensils',
        title: 'Culinary Excellence',
        desc: 'Our chefs are masters of traditional Bengali spices, blending age-old techniques with modern presentation styles.',
    },
])
</script>