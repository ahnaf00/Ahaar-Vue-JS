<script setup>
import { computed } from 'vue'

const props = defineProps({
    status: {
        type: String,
        required: true,
    },
})

const badgeClass = computed(() => {
    const classes = {
        Active: 'bg-green-50 text-green-700',
        Hidden: 'bg-gray-100 text-gray-500',
        'Low Stock': 'bg-amber-50 text-amber-700',
        'Out of Stock': 'bg-rose-50 text-rose-700',
        'In Stock': 'bg-green-50 text-green-700',
    }
    return classes[props.status] || 'bg-gray-100 text-gray-600'
})
</script>

<template>
    <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold"
        :class="badgeClass">
        {{ status }}
    </span>
</template>