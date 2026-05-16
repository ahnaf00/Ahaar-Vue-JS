<script setup>
import MilestoneItem from './MilestoneItem.vue';

const milestones = [
    {
        id: 'ms-2024-open',
        year: '2024',
        title: 'The Doors Open',
        desc: 'Ahaar opens its first flagship location in Gulshan Avenue with a team of 15 dedicated staff.',
    },
    {
        id: 'ms-2024-meals',
        year: '2024',
        title: '1,000 Meals Milestone',
        desc: 'Just three months in, we reached our first major milestone of sharing 1,000 meals with local orphanages.',
    },
    {
        id: 'ms-2025-portal',
        year: '2025',
        title: 'Transparency Portal',
        desc: 'Launched our public impact dashboard, allowing every patron to see the direct results of their dining choice.',
    },
    {
        id: 'ms-2026-hub',
        year: '2026',
        title: 'Community Hub',
        desc: 'Evolved into a community center, hosting monthly transparency town halls and charity workshops.',
    },
]
</script>

<template>
    <section class="py-24 bg-forest-900 text-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-20">
                <span class="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm">Our Journey</span>
                <h2 class="font-heading text-4xl md:text-5xl font-bold mt-4">Milestones of Mission</h2>
            </div>

            <div class="relative">
                <div class="absolute top-12 left-0 w-full h-px bg-white/10 hidden lg:block"></div>

                <div class="grid lg:grid-cols-4 gap-12 relative z-10">
                    <MilestoneItem v-for="milestone in milestones" :key="milestone.id" :milestone="milestone" />
                </div>
            </div>
        </div>
    </section>
</template>