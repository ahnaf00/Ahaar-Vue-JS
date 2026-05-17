<script setup>
defineProps({
    activeCategory: { type: String, required: true },
    search: { type: String, required: true },
})

const menuCategoryFilters = [
    { id: 'all', label: 'All Items' },
    { id: 'Rice & Biryani', label: 'Rice & Biryani' },
    { id: 'Mains', label: 'Mains' },
    { id: 'Starters', label: 'Starters' },
    { id: 'Desserts', label: 'Desserts' },
    { id: 'Drinks', label: 'Drinks' },
]

defineEmits(['update:activeCategory', 'update:search', 'add-item'])
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
        <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
                <p class="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Menu Management</p>
                <h2 class="font-heading text-3xl text-forest-800 font-bold mt-2">Edit dishes, prices and visibility</h2>
            </div>

            <div class="flex flex-col md:flex-row gap-4 md:items-center">
                <div class="relative min-w-[240px]">
                    <i class="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input :value="search" type="text" placeholder="Search dishes..."
                        class="w-full pl-11 pr-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400"
                        @input="$emit('update:search', $event.target.value)" />
                </div>

                <div class="flex flex-wrap gap-2">
                    <button v-for="filter in menuCategoryFilters" :key="filter.id" type="button"
                        class="px-4 py-2.5 rounded-full text-sm font-semibold transition-all border" :class="activeCategory === filter.id
                                ? 'bg-forest-800 text-white border-forest-800'
                                : 'bg-white text-gray-500 border-cream-100 hover:border-gold-400 hover:text-forest-800'
                            " @click="$emit('update:activeCategory', filter.id)">
                        {{ filter.label }}
                    </button>
                </div>

                <button type="button"
                    class="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold px-5 py-3 rounded-2xl transition-colors shrink-0"
                    @click="$emit('add-item')">
                    <i class="fas fa-plus text-sm"></i>
                    Add Dish
                </button>
            </div>
        </div>
    </section>
</template>