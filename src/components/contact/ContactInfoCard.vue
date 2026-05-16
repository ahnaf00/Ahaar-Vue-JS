<script setup>
defineProps({
    card: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="bg-white p-8 rounded-[40px] shadow-sm border border-cream-100">
        <div class="w-12 h-12 bg-forest-800 rounded-2xl flex items-center justify-center mb-6">
            <i :class="card.icon" class="text-gold-400"></i>
        </div>
        <h4 class="font-bold text-forest-800 mb-2">{{ card.title }}</h4>
        <p class="text-gray-500 text-sm mb-4">{{ card.subtitle }}</p>
        <a :href="card.actionHref" class="text-forest-800 font-bold text-sm">
            {{ card.actionText }}
        </a>
    </div>
</template>