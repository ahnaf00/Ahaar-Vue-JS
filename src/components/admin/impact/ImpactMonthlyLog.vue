<script setup>
defineEmits(['select', 'add-entry'])

const impactMonthlyLog = [
    {
        id: 'log-may-2026',
        month: 'May 2026',
        status: 'In Progress',
        mealsShared: 240,
        fundReleased: '৳4,000',
        kitsDistributed: 12,
        homesReached: 4,
        highlight: 'Launched school kit programme across Mirpur homes.',
    },
    {
        id: 'log-apr-2026',
        month: 'April 2026',
        status: 'Published',
        mealsShared: 310,
        fundReleased: '৳4,500',
        kitsDistributed: 18,
        homesReached: 4,
        highlight: 'Eid special meal distribution — 110 extra servings.',
    },
    {
        id: 'log-mar-2026',
        month: 'March 2026',
        status: 'Published',
        mealsShared: 280,
        fundReleased: '৳4,000',
        kitsDistributed: 10,
        homesReached: 3,
        highlight: 'Onboarded Al-Noor Home as fourth partner location.',
    },
    {
        id: 'log-feb-2026',
        month: 'February 2026',
        status: 'Published',
        mealsShared: 260,
        fundReleased: '৳4,000',
        kitsDistributed: 0,
        homesReached: 3,
        highlight: 'First birthday celebration event hosted at Rashid Home.',
    },
    {
        id: 'log-jan-2026',
        month: 'January 2026',
        status: 'Published',
        mealsShared: 220,
        fundReleased: '৳4,000',
        kitsDistributed: 10,
        homesReached: 3,
        highlight: 'Ahaars second year launched with renewed giving pledge.',
    },
]
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <h2 class="font-heading text-2xl text-forest-800 font-bold">Monthly Impact Log</h2>
                <p class="text-sm text-gray-500 mt-1">Click any month to review or publish the impact update.</p>
            </div>
            <button type="button"
                class="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold px-5 py-2.5 rounded-2xl transition-colors text-sm"
                @click="$emit('add-entry')">
                <i class="fas fa-plus text-xs"></i>
                New Entry
            </button>
        </div>

        <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-400 uppercase tracking-[0.18em] text-xs border-b border-cream-100">
                        <th class="pb-4 pr-4">Month</th>
                        <th class="pb-4 pr-4">Meals</th>
                        <th class="pb-4 pr-4">Fund Released</th>
                        <th class="pb-4 pr-4">Kits</th>
                        <th class="pb-4 pr-4">Homes</th>
                        <th class="pb-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="entry in impactMonthlyLog" :key="entry.id"
                        class="border-b border-cream-100/80 last:border-b-0 cursor-pointer hover:bg-cream-50/60"
                        @click="$emit('select', entry)">
                        <td class="py-4 pr-4 font-bold text-forest-800">{{ entry.month }}</td>
                        <td class="py-4 pr-4 text-gray-600">{{ entry.mealsShared }}</td>
                        <td class="py-4 pr-4 font-semibold text-forest-800">{{ entry.fundReleased }}</td>
                        <td class="py-4 pr-4 text-gray-600">{{ entry.kitsDistributed }}</td>
                        <td class="py-4 pr-4 text-gray-600">{{ entry.homesReached }}</td>
                        <td class="py-4">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" :class="entry.status === 'Published'
                                ? 'bg-green-50 text-green-700'
                                : 'bg-amber-50 text-amber-700'">
                                {{ entry.status }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>