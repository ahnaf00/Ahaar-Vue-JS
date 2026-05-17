<script setup>
const adminActivities = [
    {
        id: 'activity-1',
        title: 'April impact report published',
        time: '2 hours ago',
    },
    {
        id: 'activity-2',
        title: '12 new dinner reservations confirmed',
        time: '4 hours ago',
    },
    {
        id: 'activity-3',
        title: 'Rose Firni marked as low stock',
        time: 'Today, 11:20 AM',
    },
]
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <h2 class="font-heading text-2xl text-forest-800 font-bold">Recent Activity</h2>
                <p class="text-sm text-gray-500 mt-1">Team updates across operations and outreach.</p>
            </div>
            <i class="fas fa-clock-rotate-left text-gold-500"></i>
        </div>

        <div class="space-y-4">
            <div v-for="activity in adminActivities" :key="activity.id" class="flex items-start gap-4">
                <div class="w-3 h-3 rounded-full bg-gold-400 mt-2 shrink-0"></div>
                <div>
                    <p class="font-semibold text-forest-800">{{ activity.title }}</p>
                    <p class="text-sm text-gray-400 mt-1">{{ activity.time }}</p>
                </div>
            </div>
        </div>
    </section>
</template>