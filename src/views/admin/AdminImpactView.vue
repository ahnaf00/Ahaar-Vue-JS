<script setup>
import { ref } from 'vue'
import ImpactMissionBanner from '../../components/admin/impact/ImpactMissionBanner.vue'
import ImpactSummaryCard from '../../components/admin/ImpactSummaryCard.vue'
import ImpactMonthlyLog from '../../components/admin/impact/ImpactMonthlyLog.vue'
import PartnerHomesGrid from '../../components/admin/impact/PartnerHomesGrid.vue'
import ImpactEntryDrawer from '../../components/admin/impact/ImpactEntryDrawer.vue'

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


const drawerVisible = ref(false)
const selectedEntry = ref(null)
const logEntries = ref([...impactMonthlyLog])

function openAddEntry() {
    selectedEntry.value = null
    drawerVisible.value = true
}

function openEditEntry(entry) {
    selectedEntry.value = entry
    drawerVisible.value = true
}

function closeDrawer() {
    drawerVisible.value = false
    selectedEntry.value = null
}

function handleSave(updatedEntry) {
    const idx = logEntries.value.findIndex((e) => e.id === updatedEntry.id)
    if (idx !== -1) {
        logEntries.value[idx] = { ...logEntries.value[idx], ...updatedEntry }
    } else {
        logEntries.value.unshift({ ...updatedEntry, id: `log-${Date.now()}` })
    }
}

function handleDelete(entry) {
    logEntries.value = logEntries.value.filter((e) => e.id !== entry.id)
    closeDrawer()
}
</script>

<template>
    <div class="space-y-8">
        <div>
            <p class="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Impact Tracker</p>
            <h1 class="font-heading text-3xl text-forest-800 font-bold mt-2">Giving & Community</h1>
        </div>

        <ImpactMissionBanner />

        <ImpactSummaryCards />

        <div class="grid xl:grid-cols-[1.5fr_1fr] gap-8">
            <ImpactMonthlyLog @select="openEditEntry" @add-entry="openAddEntry" />
            <PartnerHomesGrid />
        </div>

        <ImpactEntryDrawer :visible="drawerVisible" :entry="selectedEntry" @close="closeDrawer" @save="handleSave" @delete="handleDelete" />
    </div>
</template>
