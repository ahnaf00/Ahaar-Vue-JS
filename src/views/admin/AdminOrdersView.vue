<script setup>
import { computed, ref } from 'vue'
import OrdersToolbar from '../../components/admin/orders/OrdersToolbar.vue'
import OrdersSummaryCards from '../../components/admin/orders/OrdersSummaryCards.vue'
import OrdersTable from '../../components/admin/orders/OrdersTable.vue'
import OrderDetailsDrawer from '../../components/admin/orders/OrderDetailsDrawer.vue'

const adminOrders = [
    {
        id: 'ORD-1041',
        customer: 'Farhan Ahmed',
        phone: '+880 1711-111111',
        items: ['Kacchi Biryani x2', 'Borhani x1'],
        type: 'Delivery',
        amount: '৳1,280',
        payment: 'Paid Online',
        status: 'Preparing',
        time: '12:40 PM',
        address: 'Gulshan 2, Dhaka',
    },
    {
        id: 'ORD-1040',
        customer: 'Nusrat Jahan',
        phone: '+880 1722-222222',
        items: ['Butter Chicken x1', 'Garlic Naan x2'],
        type: 'Dine In',
        amount: '৳2,140',
        payment: 'Card',
        status: 'Completed',
        time: '12:20 PM',
        address: 'Table 07',
    },
    {
        id: 'ORD-1039',
        customer: 'Sajid Karim',
        phone: '+880 1733-333333',
        items: ['Comfort Dal Bowl x2'],
        type: 'Pickup',
        amount: '৳860',
        payment: 'Cash',
        status: 'Ready',
        time: '12:15 PM',
        address: 'Pickup Counter',
    },
    {
        id: 'ORD-1038',
        customer: 'Ishrat Hossain',
        phone: '+880 1744-444444',
        items: ['Mixed Kebab Platter x1', 'Rose Firni x2'],
        type: 'Delivery',
        amount: '৳1,740',
        payment: 'Cash on Delivery',
        status: 'On the way',
        time: '11:55 AM',
        address: 'Banani DOHS, Dhaka',
    },
    {
        id: 'ORD-1037',
        customer: 'Rifat Mahmud',
        phone: '+880 1755-555555',
        items: ['Grilled Hilsa x1', 'Rice x1'],
        type: 'Delivery',
        amount: '৳1,150',
        payment: 'Paid Online',
        status: 'Completed',
        time: '11:40 AM',
        address: 'Baridhara, Dhaka',
    },
    {
        id: 'ORD-1036',
        customer: 'Maliha Noor',
        phone: '+880 1766-666666',
        items: ['Rose Firni x4', 'Tea x2'],
        type: 'Dine In',
        amount: '৳980',
        payment: 'Card',
        status: 'Preparing',
        time: '11:25 AM',
        address: 'Table 11',
    },
]

const activeStatus = ref('all')
const search = ref('')
const selectedOrder = ref(null)

const filteredOrders = computed(() => {
    return adminOrders.filter((order) => {
        const matchesStatus = activeStatus.value === 'all' || order.status === activeStatus.value

        const keyword = search.value.trim().toLowerCase()
        const matchesSearch =
            !keyword ||
            [order.id, order.customer, order.phone, order.type]
                .join(' ')
                .toLowerCase()
                .includes(keyword)

        return matchesStatus && matchesSearch
    })
})
</script>

<template>
    <div class="space-y-8">
        <OrdersToolbar v-model:activeStatus="activeStatus" v-model:search="search" />

        <OrdersSummaryCards />

        <OrdersTable :orders="filteredOrders" @select="selectedOrder = $event" />

        <OrderDetailsDrawer :order="selectedOrder" @close="selectedOrder = null" />
    </div>
</template>