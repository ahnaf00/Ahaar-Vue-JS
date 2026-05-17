<script setup>
import { computed } from 'vue'
import MenuItemStatusBadge from './MenuItemStatusBadge.vue';

const adminMenuItems = [
    {
        id: 'DISH-001',
        name: 'Kacchi Biryani',
        category: 'Rice & Biryani',
        price: '৳580',
        status: 'Active',
        stock: 'In Stock',
        badge: 'Best Seller',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=70',
    },
    {
        id: 'DISH-002',
        name: 'Butter Chicken',
        category: 'Mains',
        price: '৳520',
        status: 'Active',
        stock: 'In Stock',
        badge: null,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=120&q=70',
    },
    {
        id: 'DISH-003',
        name: 'Rose Firni',
        category: 'Desserts',
        price: '৳180',
        status: 'Active',
        stock: 'Low Stock',
        badge: 'Seasonal',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=120&q=70',
    },
    {
        id: 'DISH-004',
        name: 'Grilled Hilsa',
        category: 'Mains',
        price: '৳750',
        status: 'Active',
        stock: 'In Stock',
        badge: null,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=120&q=70',
    },
    {
        id: 'DISH-005',
        name: 'Comfort Dal Bowl',
        category: 'Mains',
        price: '৳220',
        status: 'Active',
        stock: 'In Stock',
        badge: 'Mission Dish',
        image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=120&q=70',
    },
    {
        id: 'DISH-006',
        name: 'Mixed Kebab Platter',
        category: 'Starters',
        price: '৳460',
        status: 'Active',
        stock: 'In Stock',
        badge: null,
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=120&q=70',
    },
    {
        id: 'DISH-007',
        name: 'Borhani',
        category: 'Drinks',
        price: '৳80',
        status: 'Active',
        stock: 'Low Stock',
        badge: null,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&q=70',
    },
    {
        id: 'DISH-008',
        name: 'Panta Ilish Special',
        category: 'Rice & Biryani',
        price: '৳680',
        status: 'Hidden',
        stock: 'Out of Stock',
        badge: 'Seasonal',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&q=70',
    },
]

const alertItems = computed(() =>
    adminMenuItems.filter((item) => item.stock === 'Low Stock' || item.stock === 'Out of Stock')
)
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <h2 class="font-heading text-2xl text-forest-800 font-bold">Stock Alerts</h2>
                <p class="text-sm text-gray-500 mt-1">Items that need restocking before tonight's service.</p>
            </div>
            <div class="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <i class="fas fa-triangle-exclamation"></i>
            </div>
        </div>

        <div class="space-y-4">
            <div v-for="item in alertItems" :key="item.id"
                class="flex items-center justify-between gap-4 p-4 rounded-3xl bg-cream-50 border border-cream-100">
                <div class="flex items-center gap-3">
                    <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-2xl object-cover" loading="lazy"
                        width="48" height="48" />
                    <div>
                        <p class="font-semibold text-forest-800">{{ item.name }}</p>
                        <p class="text-xs text-gray-400 mt-0.5">{{ item.category }}</p>
                    </div>
                </div>
                <MenuItemStatusBadge :status="item.stock" />
            </div>

            <p v-if="alertItems.length === 0" class="text-center text-sm text-gray-400 py-4">
                All dishes are well-stocked.
            </p>
        </div>
    </section>
</template>