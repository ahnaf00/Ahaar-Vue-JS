<script setup>
import { ref } from 'vue'
import MenuCategoryTabs from '../../components/menu/MenuCategoryTabs.vue'
import MenuGrid from '../../components/menu/MenuGrid.vue';
import MenuImpactNote from '../../components/menu/MenuImpactNote.vue';

// Single reactive state — drives both tabs and grid
const activeCategory = ref('all')
</script>


<template>
    <div>
        <!-- Page Header -->
        <header class="py-20 bg-forest-900 text-center relative overflow-hidden -mt-28 pt-48">
            <div class="max-w-7xl mx-auto px-6 relative z-10 animate-fade-up">
                <span class="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm">Taste the Mission</span>
                <h1 class="font-heading text-5xl md:text-6xl text-white font-bold mt-4">Our Culinary Heritage</h1>
                <p class="text-white/60 mt-6 max-w-xl mx-auto text-lg font-light">
                    Explore a menu crafted from centuries of tradition, where every ingredient is chosen
                    with care and every plate serves a purpose.
                </p>
            </div>
            <div class="absolute inset-0 opacity-10">
                <img src="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=1920&q=80"
                    alt="Spice pattern" class="w-full h-full object-cover" loading="eager" width="1920" height="400" />
            </div>
        </header>

        <MenuCategoryTabs v-model:activeCategory="activeCategory" />

        <MenuGrid :active-category="activeCategory" />

        <MenuImpactNote />
    </div>
</template>

<style scoped>
.animate-fade-up {
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>