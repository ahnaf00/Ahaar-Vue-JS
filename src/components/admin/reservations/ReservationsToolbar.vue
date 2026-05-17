<script setup>

const reservationStatusFilters = [
    { id: 'all', label: 'All Reservations' },
    { id: 'Confirmed', label: 'Confirmed' },
    { id: 'Pending', label: 'Pending' },
    { id: 'Seated', label: 'Seated' },
    { id: 'Cancelled', label: 'Cancelled' },
]

defineProps({
    activeStatus: {
        type: String,
        required: true,
    },
    search: {
        type: String,
        required: true,
    },
})

defineEmits(['update:activeStatus', 'update:search'])
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
        <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
                <p class="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Reservation Control</p>
                <h2 class="font-heading text-3xl text-forest-800 font-bold mt-2">Manage tables and guest flow</h2>
            </div>

            <div class="flex flex-col md:flex-row gap-4 md:items-center">
                <div class="relative min-w-[240px]">
                    <i class="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input :value="search" type="text" placeholder="Search by guest or reservation"
                        class="w-full pl-11 pr-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400"
                        @input="$emit('update:search', $event.target.value)" />
                </div>

                <div class="flex flex-wrap gap-2">
                    <button v-for="filter in reservationStatusFilters" :key="filter.id" type="button"
                        class="px-4 py-2.5 rounded-full text-sm font-semibold transition-all border" :class="activeStatus === filter.id
                                ? 'bg-forest-800 text-white border-forest-800'
                                : 'bg-white text-gray-500 border-cream-100 hover:border-gold-400 hover:text-forest-800'
                            " @click="$emit('update:activeStatus', filter.id)">
                        {{ filter.label }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>