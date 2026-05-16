<script setup>
defineProps({
    milestone: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="relative pt-12">
        <div
            class="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-forest-900 font-bold mb-6 mx-auto lg:mx-0 ring-8 ring-forest-900/20">
            {{ milestone.year }}
        </div>
        <h4 class="font-bold text-xl mb-3">{{ milestone.title }}</h4>
        <p class="text-white/50 text-sm">{{ milestone.desc }}</p>
    </div>
</template>