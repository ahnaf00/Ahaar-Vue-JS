<script setup>
defineProps({ dish: { type: Object, required: true } })
</script>

<template>
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 class="font-heading text-3xl text-forest-800 font-bold mb-8">What Makes it Heritage?</h2>
                    <div class="space-y-6 text-gray-600 leading-relaxed">
                        <p v-for="(para, i) in dish.story" :key="`story-${dish.slug}-${i}`">{{ para }}</p>
                    </div>
                    <div class="mt-10 grid grid-cols-2 gap-6">
                        <div class="p-6 bg-cream-50 rounded-2xl border border-cream-100">
                            <h4 class="font-bold text-forest-800 mb-2">Primary Ingredients</h4>
                            <ul class="text-sm space-y-2 text-gray-500">
                                <li v-for="item in dish.ingredients" :key="`ing-${item}`">{{ item }}</li>
                            </ul>
                        </div>
                        <div class="p-6 bg-cream-50 rounded-2xl border border-cream-100">
                            <h4 class="font-bold text-forest-800 mb-2">Spice Profile</h4>
                            <ul class="text-sm space-y-2 text-gray-500">
                                <li v-for="spice in dish.spices" :key="`spice-${spice}`">{{ spice }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="relative rounded-[40px] overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
                        alt="Cooking process"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy" width="800" height="600" />
                    <div class="absolute inset-0 bg-forest-900/40 flex items-center justify-center">
                        <button class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center
                           text-white text-2xl hover:scale-110 transition-all border border-white/30"
                            aria-label="Play cooking video">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
