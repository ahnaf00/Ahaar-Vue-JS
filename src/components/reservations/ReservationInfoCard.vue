<script setup>
defineProps({
    card: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="flex gap-6">
        <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-cream-100 shrink-0">
            <i :class="[card.icon, card.iconClass]" class="text-2xl"></i>
        </div>

        <div>
            <h4 class="font-bold text-forest-800">{{ card.title }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ card.description }}</p>

            <a v-if="card.actionText" :href="card.actionHref"
                class="text-forest-800 font-bold text-sm mt-2 inline-block">
                {{ card.actionText }}
            </a>

            <div v-if="card.badges" class="flex gap-4 mt-3">
                <span v-for="badge in card.badges" :key="badge"
                    class="text-[10px] font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-full uppercase">
                    {{ badge }}
                </span>
            </div>
        </div>
    </div>
</template>