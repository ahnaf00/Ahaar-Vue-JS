<script setup>
import { computed, ref } from 'vue'
import MenuToolbar from '../../components/admin/menu/MenuToolbar.vue'
import MenuSummaryCards from '../../components/admin/menu/MenuSummaryCards.vue'
import MenuItemsGrid from '../../components/admin/menu/MenuItemsGrid.vue'
import MenuStockAlertsCard from '../../components/admin/menu/MenuStockAlertsCard.vue'
import MenuItemFormDrawer from '../../components/admin/menu/MenuItemFormDrawer.vue'

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

const activeCategory = ref('all')
const search = ref('')
const drawerVisible = ref(false)
const selectedItem = ref(null)
const menuItems = ref([...adminMenuItems])

const filteredItems = computed(() =>
    menuItems.value.filter((item) => {
        const matchesCategory = activeCategory.value === 'all' || item.category === activeCategory.value
        const keyword = search.value.trim().toLowerCase()
        const matchesSearch = !keyword || [item.name, item.category, item.id]
            .join(' ').toLowerCase().includes(keyword)
        return matchesCategory && matchesSearch
    })
)

function openAddForm() {
    selectedItem.value = null
    drawerVisible.value = true
}

function openEditForm(item) {
    selectedItem.value = item
    drawerVisible.value = true
}

function closeDrawer() {
    drawerVisible.value = false
    selectedItem.value = null
}

function handleSave(updatedItem) {
    const idx = menuItems.value.findIndex((d) => d.id === updatedItem.id)
    if (idx !== -1) {
        menuItems.value[idx] = { ...menuItems.value[idx], ...updatedItem }
    } else {
        menuItems.value.push({
            ...updatedItem,
            id: `DISH-${String(Date.now()).slice(-4)}`,
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&q=70',
        })
    }
}

function handleDelete(item) {
    menuItems.value = menuItems.value.filter((d) => d.id !== item.id)
    closeDrawer()
}
</script>

<template>
    <div class="space-y-8">
        <MenuToolbar v-model:activeCategory="activeCategory" v-model:search="search" @add-item="openAddForm" />

        <MenuSummaryCards />

        <div class="grid xl:grid-cols-[1fr_320px] gap-8">
            <MenuItemsGrid :items="filteredItems" @select="openEditForm" />
            <MenuStockAlertsCard />
        </div>

        <MenuItemFormDrawer :visible="drawerVisible" :item="selectedItem" @close="closeDrawer" @save="handleSave"
            @delete="handleDelete" />
    </div>
</template>