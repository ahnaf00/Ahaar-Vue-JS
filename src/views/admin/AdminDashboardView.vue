<script setup>
import DashboardStatsGrid from '../../components/admin/DashboardStatsGrid.vue'
import RecentOrdersTable from '../../components/admin/RecentOrdersTable.vue'
import RecentReservationsTable from '../../components/admin/RecentReservationsTable.vue'
import ImpactSummaryCard from '../../components/admin/ImpactSummaryCard.vue'
import QuickActionsPanel from '../../components/admin/QuickActionsPanel.vue'
import AdminActivityFeed from '../../components/admin/AdminActivityFeed.vue'
</script>

<template>
    <div class="space-y-8">
        <DashboardStatsGrid />

        <div class="grid xl:grid-cols-[1.6fr_1fr] gap-8">
            <RecentOrdersTable />

            <div class="space-y-8">
                <ImpactSummaryCard />
                <QuickActionsPanel />
            </div>
        </div>

        <div class="grid xl:grid-cols-[1.2fr_0.8fr] gap-8">
            <RecentReservationsTable />
            <AdminActivityFeed />
        </div>
    </div>
</template>