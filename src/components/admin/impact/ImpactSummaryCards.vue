<script setup>

const adminImpactMetrics = [
    {
        id: 'impact-meals',
        title: 'Meals Shared',
        value: '2,840',
        caption: 'Across all partner homes',
        icon: 'fas fa-bowl-food',
    },
    {
        id: 'impact-fund',
        title: 'Weekly Fund',
        value: '৳1,000',
        caption: 'Donated every week without fail',
        icon: 'fas fa-bangladeshi-taka-sign',
    },
    {
        id: 'impact-homes',
        title: 'Partner Homes',
        value: '4',
        caption: 'Active orphan houses supported',
        icon: 'fas fa-house-heart',
    },
    {
        id: 'impact-kits',
        title: 'School Kits',
        value: '50',
        caption: 'Distributed to children this month',
        icon: 'fas fa-graduation-cap',
    },
]
</script>

<template>
    <section>
        <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div v-for="metric in adminImpactMetrics" :key="metric.id"
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