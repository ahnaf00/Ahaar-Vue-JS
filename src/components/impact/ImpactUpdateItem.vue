<script setup>
defineProps({
    update: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-forest-800 text-gold-400 shadow shrink-0 md:order-1 md:group-odd:translate-x-12 md:group-even:-translate-x-12"
            :class="!update.latest ? 'opacity-50' : ''">
            <i class="fas fa-check text-xs"></i>
        </div>

        <div
            class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-cream-50 border border-cream-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
            <div class="flex items-center justify-between mb-4">
                <time class="font-heading font-bold text-forest-800">{{ update.month }}</time>
                <span v-if="update.latest" class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">
                    LATEST
                </span>
            </div>
            <div class="text-gray-600 text-sm space-y-3">
                <p v-for="(item, index) in update.items" :key="`${update.id}-${index}`">
                    {{ item }}
                </p>
            </div>
        </div>
    </div>
</template>