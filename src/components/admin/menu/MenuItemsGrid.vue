<script setup>
import MenuItemStatusBadge from './MenuItemStatusBadge.vue';

defineProps({
    items: { type: Array, required: true },
})

defineEmits(['select'])
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <h2 class="font-heading text-2xl text-forest-800 font-bold">Dish Catalogue</h2>
                <p class="text-sm text-gray-500 mt-1">Click any card to edit pricing, status or details.</p>
            </div>
            <p class="text-sm text-gray-400">{{ items.length }} dishes shown</p>
        </div>

        <div class="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            <div v-for="item in items" :key="item.id"
                class="group rounded-3xl border border-cream-100 bg-cream-50 hover:bg-white hover:shadow-lg transition-all cursor-pointer overflow-hidden"
                @click="$emit('select', item)">
                <div class="relative">
                    <img :src="item.image" :alt="item.name" class="w-full h-36 object-cover" loading="lazy" width="320"
                        height="144" />
                    <div v-if="item.badge"
                        class="absolute top-3 left-3 bg-forest-800 text-gold-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {{ item.badge }}
                    </div>
                    <div class="absolute top-3 right-3">
                        <MenuItemStatusBadge :status="item.status" />
                    </div>
                </div>

                <div class="p-4">
                    <p class="font-bold text-forest-800 leading-tight">{{ item.name }}</p>
                    <p class="text-xs text-gray-400 mt-1">{{ item.category }}</p>

                    <div class="flex items-center justify-between gap-3 mt-4">
                        <span class="font-heading text-xl font-bold text-gold-500">{{ item.price }}</span>
                        <MenuItemStatusBadge :status="item.stock" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>