<script setup>
defineProps({
    value: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="bg-white p-10 rounded-[40px] shadow-sm border border-cream-100 text-center">
        <div class="w-16 h-16 bg-forest-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i :class="value.icon" class="text-gold-400 text-2xl"></i>
        </div>
        <h4 class="font-bold text-forest-800 text-xl mb-4">{{ value.title }}</h4>
        <p class="text-gray-500 text-sm leading-relaxed">{{ value.desc }}</p>
    </div>
</template>