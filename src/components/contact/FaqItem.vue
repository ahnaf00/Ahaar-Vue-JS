<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
    },
    open: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['toggle'])
</script>

<template>
    <div class="p-6 bg-cream-50 rounded-3xl border border-cream-100">
        <button type="button" class="flex items-center justify-between w-full text-left font-bold text-forest-800"
            @click="$emit('toggle')">
            <span>{{ item.question }}</span>
            <i class="fas fa-chevron-down text-gold-400 transition-transform duration-300"
                :class="open ? 'rotate-180' : ''"></i>
        </button>

        <p v-if="open" class="mt-4 text-sm text-gray-500 leading-relaxed">
            {{ item.answer }}
        </p>
    </div>
</template>