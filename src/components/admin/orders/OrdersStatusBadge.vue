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
        Completed: 'bg-green-50 text-green-700',
        Preparing: 'bg-amber-50 text-amber-700',
        Ready: 'bg-blue-50 text-blue-700',
        'On the way': 'bg-purple-50 text-purple-700',
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