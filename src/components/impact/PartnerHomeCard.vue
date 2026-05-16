<script setup>
defineProps({
    partner: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div
        class="bg-white p-6 rounded-3xl border border-cream-100 text-center group transition-all hover:bg-forest-800 hover:text-white">
        <div
            class="w-16 h-16 bg-cream-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10">
            <i class="fas fa-house-chimney text-forest-800 group-hover:text-gold-400 text-xl"></i>
        </div>
        <h4 class="font-bold mb-1">{{ partner.name }}</h4>
        <p class="text-xs text-gray-500 group-hover:text-white/60 uppercase tracking-widest font-bold">
            {{ partner.location }}
        </p>
    </div>
</template>