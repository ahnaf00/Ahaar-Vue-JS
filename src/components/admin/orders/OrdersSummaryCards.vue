<script setup>
const adminOrderMetrics = [
    {
        id: 'orders-total',
        title: 'Total Orders',
        value: '128',
        caption: 'Placed today',
        icon: 'fas fa-bag-shopping',
    },
    {
        id: 'orders-preparing',
        title: 'Kitchen Queue',
        value: '18',
        caption: 'Orders being prepared',
        icon: 'fas fa-fire-burner',
    },
    {
        id: 'orders-delivery',
        title: 'Out for Delivery',
        value: '9',
        caption: 'Riders currently active',
        icon: 'fas fa-motorcycle',
    },
    {
        id: 'orders-completed',
        title: 'Completed',
        value: '91',
        caption: 'Finished successfully',
        icon: 'fas fa-circle-check',
    },
]
</script>

<template>
    <section>
        <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div v-for="metric in adminOrderMetrics" :key="metric.id"
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