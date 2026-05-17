<script setup>

const adminMenuMetrics = [
    {
        id: 'menu-total',
        title: 'Total Dishes',
        value: '48',
        caption: 'Active on the menu',
        icon: 'fas fa-utensils',
    },
    {
        id: 'menu-popular',
        title: "Today's Top Seller",
        value: 'Kacchi',
        caption: 'Highest order volume',
        icon: 'fas fa-fire',
    },
    {
        id: 'menu-low-stock',
        title: 'Low Stock',
        value: '3',
        caption: 'Items need restocking',
        icon: 'fas fa-triangle-exclamation',
    },
    {
        id: 'menu-hidden',
        title: 'Hidden Items',
        value: '5',
        caption: 'Not shown to guests',
        icon: 'fas fa-eye-slash',
    },
]

</script>

<template>
    <section>
        <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div v-for="metric in adminMenuMetrics" :key="metric.id"
                class="bg-white rounded-[28px] border border-cream-100 p-5 shadow-sm hover:shadow-lg transition-all">
                <div class="flex items-start justify-between gap-3">
                    <div>
                        <p class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">{{ metric.title }}</p>
                        <p class="font-heading text-4xl text-forest-800 font-bold mt-3">{{ metric.value }}</p>
                        <p class="text-sm text-gray-500 mt-2">{{ metric.caption }}</p>
                    </div>
                    <div class="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center">
                        <i :class="metric.icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>