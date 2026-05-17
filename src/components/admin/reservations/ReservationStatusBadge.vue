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
        Confirmed: 'bg-green-50 text-green-700',
        Pending: 'bg-amber-50 text-amber-700',
        Seated: 'bg-blue-50 text-blue-700',
        Cancelled: 'bg-rose-50 text-rose-700',
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