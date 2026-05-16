<script setup>
defineProps({
    stat: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div
        class="bg-white p-10 rounded-[40px] shadow-xl border border-cream-100 text-center transition-transform hover:-translate-y-2">
        <div
            class="w-20 h-20 bg-forest-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-forest-800/20">
            <i :class="stat.icon" class="text-gold-400 text-3xl"></i>
        </div>
        <p class="font-heading text-5xl font-bold text-forest-800 mb-2">{{ stat.value }}</p>
        <p class="text-gold-500 font-bold uppercase tracking-widest text-xs">{{ stat.label }}</p>
        <p class="text-gray-500 text-sm mt-4">{{ stat.description }}</p>
    </div>
</template>