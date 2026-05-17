<script setup>
import OrdersStatusBadge from './OrdersStatusBadge.vue';

defineProps({
    orders: {
        type: Array,
        required: true,
    },
})

defineEmits(['select'])
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm overflow-hidden">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <h2 class="font-heading text-2xl text-forest-800 font-bold">Live Orders</h2>
                <p class="text-sm text-gray-500 mt-1">Click any row to inspect full order details.</p>
            </div>
            <p class="text-sm text-gray-400">{{ orders.length }} orders found</p>
        </div>

        <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-400 uppercase tracking-[0.18em] text-xs border-b border-cream-100">
                        <th class="pb-4 pr-4">Order</th>
                        <th class="pb-4 pr-4">Customer</th>
                        <th class="pb-4 pr-4">Type</th>
                        <th class="pb-4 pr-4">Items</th>
                        <th class="pb-4 pr-4">Amount</th>
                        <th class="pb-4 pr-4">Status</th>
                        <th class="pb-4">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.id"
                        class="border-b border-cream-100/80 last:border-b-0 cursor-pointer hover:bg-cream-50/60"
                        @click="$emit('select', order)">
                        <td class="py-4 pr-4 font-bold text-forest-800">{{ order.id }}</td>
                        <td class="py-4 pr-4">
                            <p class="font-semibold text-gray-700">{{ order.customer }}</p>
                            <p class="text-xs text-gray-400 mt-1">{{ order.phone }}</p>
                        </td>
                        <td class="py-4 pr-4 text-gray-500">{{ order.type }}</td>
                        <td class="py-4 pr-4 text-gray-500">{{ order.items.length }} items</td>
                        <td class="py-4 pr-4 font-semibold text-forest-800">{{ order.amount }}</td>
                        <td class="py-4 pr-4">
                            <OrdersStatusBadge :status="order.status" />
                        </td>
                        <td class="py-4 text-gray-400">{{ order.time }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>