<script setup>
import { computed, ref } from 'vue'
import ReservationsToolbar from '../../components/admin/reservations/ReservationsToolbar.vue'
import ReservationsSummaryCards from '../../components/admin/reservations/ReservationsSummaryCards.vue'
import ReservationsTable from '../../components/admin/reservations/ReservationsTable.vue'
import ReservationCapacityCard from '../../components/admin/reservations/ReservationCapacityCard.vue'
import ReservationDetailsDrawer from '../../components/admin/reservations/ReservationDetailsDrawer.vue'

const adminReservations = [
    {
        id: 'RSV-512',
        guest: 'Tanveer Islam',
        phone: '+880 1711-111111',
        date: 'May 17, 2026',
        time: '08:00 PM',
        partySize: '4 Guests',
        occasion: 'Birthday Dinner',
        status: 'Confirmed',
        seating: 'Table 12',
        notes: 'Requested a quiet corner table and egg-free dessert.',
    },
    {
        id: 'RSV-511',
        guest: 'Sarah Rahman',
        phone: '+880 1722-222222',
        date: 'May 17, 2026',
        time: '07:30 PM',
        partySize: '2 Guests',
        occasion: 'Anniversary',
        status: 'Pending',
        seating: 'Window Pairing',
        notes: 'Follow-up call needed for final confirmation.',
    },
    {
        id: 'RSV-510',
        guest: 'Mahmud Hasan',
        phone: '+880 1733-333333',
        date: 'May 18, 2026',
        time: '01:00 PM',
        partySize: '6 Guests',
        occasion: 'Family Lunch',
        status: 'Confirmed',
        seating: 'Table 03',
        notes: 'Requires one child seat.',
    },
    {
        id: 'RSV-509',
        guest: 'Nadia Karim',
        phone: '+880 1744-444444',
        date: 'May 17, 2026',
        time: '09:00 PM',
        partySize: '8 Guests',
        occasion: 'Corporate Dinner',
        status: 'Seated',
        seating: 'Private Room A',
        notes: 'Pre-ordered kebab platter and mocktail selection.',
    },
    {
        id: 'RSV-508',
        guest: 'Rafiul Alam',
        phone: '+880 1755-555555',
        date: 'May 18, 2026',
        time: '08:30 PM',
        partySize: '10 Guests',
        occasion: 'Charity Circle Meet',
        status: 'Confirmed',
        seating: 'Private Room B',
        notes: 'Needs projector setup and vegetarian starters.',
    },
    {
        id: 'RSV-507',
        guest: 'Ishita Noor',
        phone: '+880 1766-666666',
        date: 'May 17, 2026',
        time: '06:30 PM',
        partySize: '3 Guests',
        occasion: 'Casual Dining',
        status: 'Cancelled',
        seating: 'Table 08',
        notes: 'Cancelled by guest due to schedule conflict.',
    },
]

const activeStatus = ref('all')
const search = ref('')
const selectedReservation = ref(null)

const filteredReservations = computed(() => {
    return adminReservations.filter((reservation) => {
        const matchesStatus = activeStatus.value === 'all' || reservation.status === activeStatus.value
        const keyword = search.value.trim().toLowerCase()

        const matchesSearch =
            !keyword ||
            [reservation.id, reservation.guest, reservation.phone, reservation.occasion]
                .join(' ')
                .toLowerCase()
                .includes(keyword)

        return matchesStatus && matchesSearch
    })
})
</script>

<template>
    <div class="space-y-8">
        <ReservationsToolbar v-model:activeStatus="activeStatus" v-model:search="search" />

        <ReservationsSummaryCards />

        <div class="grid xl:grid-cols-[1.6fr_0.8fr] gap-8">
            <ReservationsTable :reservations="filteredReservations" @select="selectedReservation = $event" />
            <ReservationCapacityCard />
        </div>

        <ReservationDetailsDrawer :reservation="selectedReservation" @close="selectedReservation = null" />
    </div>
</template>