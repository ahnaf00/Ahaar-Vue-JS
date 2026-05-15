<template>
    <article class="group relative rounded-3xl overflow-hidden shadow-lg transition-all hover:-translate-y-2">
        <img :src="dish.image" :alt="dish.name"
            class="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"
            width="800" height="400" />
        <div class="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/20 to-transparent"></div>

        <div class="absolute bottom-0 p-8 w-full">
            <span
                class="bg-gold-400 text-forest-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {{ dish.badge }}
            </span>
            <h3 class="font-heading text-2xl text-white font-bold mt-3">{{ dish.name }}</h3>
            <p class="text-white/70 text-sm mt-2 line-clamp-2">{{ dish.description }}</p>
            <div class="flex items-center justify-between mt-6">
                <span class="text-gold-400 font-bold text-xl">৳{{ dish.price }}</span>
                <RouterLink :to="`/menu/${dish.slug}`"
                    class="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold-400 hover:text-forest-900 transition-all"
                    :aria-label="`View ${dish.name}`">
                    <i class="fas fa-plus"></i>
                </RouterLink>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    dish: {
        type: Object,
        required: true,
    },
})
</script>