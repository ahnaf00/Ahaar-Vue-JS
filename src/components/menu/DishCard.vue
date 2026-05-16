<script setup>
defineProps({
    dish: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article class="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl
           transition-all duration-300 group">
        <!-- Image -->
        <div class="relative h-64 overflow-hidden">
            <img :src="dish.image" :alt="dish.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" width="800" height="256" />
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <span class="text-forest-800 font-bold text-sm">৳{{ dish.price }}</span>
            </div>
        </div>

        <!-- Body -->
        <div class="p-8">
            <div class="flex items-center gap-2 mb-3">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {{ dish.categoryLabel }}
                </span>
            </div>

            <h3 class="font-heading text-2xl text-forest-800 font-bold mb-3">{{ dish.name }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">{{ dish.description }}</p>

            <!-- Footer row -->
            <div class="flex items-center justify-between pt-6 border-t border-cream-100">
                <!-- Dietary tags — v-for with stable :key on tag.id -->
                <div class="flex gap-2">
                    <span v-for="tag in dish.tags" :key="tag.id" class="w-8 h-8 rounded-lg bg-cream-50 flex items-center justify-center
                   text-forest-800 text-xs cursor-help" :title="tag.title" :aria-label="tag.title">
                        <i :class="tag.icon"></i>
                    </span>
                </div>

                <RouterLink :to="`/menu/${dish.slug}`" class="flex items-center gap-2 text-forest-800 font-bold text-sm
                 hover:text-gold-500 transition-colors">
                    Customize
                    <i class="fas fa-chevron-right text-[10px]"></i>
                </RouterLink>
            </div>
        </div>
    </article>
</template>