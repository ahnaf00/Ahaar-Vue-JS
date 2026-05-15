<template>
    <section class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div class="max-w-2xl">
                    <span class="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">Chef's Selection</span>
                    <h2 class="font-heading text-4xl md:text-5xl text-forest-800 font-bold mt-4">Our Signature Creations
                    </h2>
                    <p class="text-gray-500 mt-4 text-lg">Hand-crafted recipes passed down through generations, refined
                        for the modern palate.</p>
                </div>
                <RouterLink to="/menu"
                    class="text-forest-800 font-bold border-b-2 border-gold-400 pb-1 hover:text-gold-500 transition-colors shrink-0">
                    View Full Menu <i class="fas fa-arrow-right ml-2 text-sm"></i>
                </RouterLink>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <SignatureDishCard v-for="dish in dishes" :key="dish.id" :dish="dish" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import SignatureDishCard from './SignatureDishCard.vue'

const dishes = ref([
    {
        id: 'dish-kacchi-biryani',
        slug: 'heritage-kacchi-biryani',
        name: 'Heritage Kacchi Biryani',
        badge: 'Top Rated',
        price: 450,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
        description: 'Slow-cooked premium Basmati rice with marinated mutton and special spices.',
    },
    {
        id: 'dish-butter-chicken',
        slug: 'royal-butter-chicken',
        name: 'Royal Butter Chicken',
        badge: 'Bestseller',
        price: 380,
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
        description: 'Velvety tomato gravy with tandoor-grilled chicken chunks and hand-churned butter.',
    },
    {
        id: 'dish-shorshe-ilish',
        slug: 'smoked-shorshe-ilish',
        name: 'Smoked Shorshe Ilish',
        badge: 'Traditional',
        price: 520,
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
        description: 'Premium Hilsa fish cooked in a sharp mustard gravy, a true Bengali classic.',
    },
])
</script>