<script setup>

const recentOrders = [
  {
    id: 'ORD-1029',
    customer: 'Farhan Ahmed',
    type: 'Delivery',
    amount: '৳1,280',
    status: 'Preparing',
  },
  {
    id: 'ORD-1028',
    customer: 'Nusrat Jahan',
    type: 'Dine In',
    amount: '৳2,140',
    status: 'Completed',
  },
  {
    id: 'ORD-1027',
    customer: 'Sajid Karim',
    type: 'Pickup',
    amount: '৳860',
    status: 'Ready',
  },
  {
    id: 'ORD-1026',
    customer: 'Ishrat Hossain',
    type: 'Delivery',
    amount: '৳1,740',
    status: 'On the way',
  },
]

function statusClass(status) {
  const classes = {
    Completed: 'bg-green-50 text-green-700',
    Preparing: 'bg-amber-50 text-amber-700',
    Ready: 'bg-blue-50 text-blue-700',
    'On the way': 'bg-purple-50 text-purple-700',
  }
  return classes[status] || 'bg-gray-100 text-gray-600'
}
</script>

<template>
  <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm overflow-hidden">
    <div class="flex items-center justify-between gap-3 mb-6">
      <div>
        <h2 class="font-heading text-2xl text-forest-800 font-bold">Recent Orders</h2>
        <p class="text-sm text-gray-500 mt-1">Live view of kitchen and delivery activity.</p>
      </div>
      <button type="button" class="text-sm font-bold text-forest-800 hover:text-gold-500 transition-colors">
        View all
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full text-sm">
        <thead>
          <tr class="text-left text-gray-400 uppercase tracking-[0.18em] text-xs border-b border-cream-100">
            <th class="pb-4 pr-4">Order ID</th>
            <th class="pb-4 pr-4">Customer</th>
            <th class="pb-4 pr-4">Type</th>
            <th class="pb-4 pr-4">Amount</th>
            <th class="pb-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in recentOrders" :key="order.id" class="border-b border-cream-100/80 last:border-b-0">
            <td class="py-4 pr-4 font-bold text-forest-800">{{ order.id }}</td>
            <td class="py-4 pr-4 text-gray-600">{{ order.customer }}</td>
            <td class="py-4 pr-4 text-gray-500">{{ order.type }}</td>
            <td class="py-4 pr-4 font-semibold text-forest-800">{{ order.amount }}</td>
            <td class="py-4">
              <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold" :class="statusClass(order.status)">
                {{ order.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>