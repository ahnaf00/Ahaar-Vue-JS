<script setup>
import ImpactStatCard from './ImpactStatCard.vue';

const impactStats = [
    {
        id: 'stat-meals',
        icon: 'fas fa-bowl-food',
        value: '15,420',
        label: 'Meals Shared',
        description: 'Freshly prepared nutritious meals delivered to local orphanages since our inception.',
    },
    {
        id: 'stat-support',
        icon: 'fas fa-bangladeshi-taka-sign',
        value: '৳120k',
        label: 'Direct Support',
        description: 'Direct financial assistance provided to families in crisis through our weekly giving model.',
    },
    {
        id: 'stat-homes',
        icon: 'fas fa-house-chimney',
        value: '4 Homes',
        label: 'Partner Homes',
        description: 'Orphanages in Dhaka we support with regular meal plans and educational supplies.',
    },
]
</script>

<template>
    <section class="py-24 bg-cream-50 -mt-20 relative z-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
                <ImpactStatCard v-for="stat in impactStats" :key="stat.id" :stat="stat" />
            </div>
        </div>
    </section>
</template>