<template>
    <article
        class="bg-cream-50 p-10 rounded-[40px] border border-cream-100 relative group transition-all hover:bg-forest-800 hover:text-white">
        <div class="flex gap-1 text-gold-400 mb-6 group-hover:text-gold-300">
            <i v-for="star in 5" :key="`star-${testimonial.id}-${star}`" class="fas fa-star"></i>
        </div>

        <p class="text-lg italic leading-relaxed mb-8">{{ testimonial.quote }}</p>

        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <i class="fas fa-user text-gray-400"></i>
            </div>
            <div>
                <p class="font-bold text-forest-800 group-hover:text-white">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-400">{{ testimonial.role }}</p>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    testimonial: {
        type: Object,
        required: true,
    },
})
</script>