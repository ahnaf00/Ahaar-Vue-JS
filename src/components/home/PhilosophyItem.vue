<template>
    <div class="flex gap-6">
        <div class="w-14 h-14 rounded-2xl bg-forest-800 flex items-center justify-center shrink-0">
            <i :class="item.icon" class="text-gold-400 text-xl"></i>
        </div>
        <div>
            <h4 class="text-forest-800 font-bold text-xl">{{ item.title }}</h4>
            <p class="text-gray-500 mt-1">{{ item.desc }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
    },
})
</script>