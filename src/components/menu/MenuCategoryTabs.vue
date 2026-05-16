<script setup>
// import { categories } from '@/data/menu.js'

const categories = [
  { id: "all", label: "All Dishes" },
  { id: "biryani-pulao", label: "Biryani & Pulao" },
  { id: "heritage-curries", label: "Heritage Curries" },
  { id: "tandoor-kebabs", label: "Tandoor Kebabs" },
  { id: "bengali-sides", label: "Bengali Sides" },
  { id: "desserts", label: "Desserts" },
];

defineProps({
    activeCategory: {
        type: String,
        required: true,
    },
})

defineEmits(['update:activeCategory'])
</script>

<template>
    <section class="sticky top-28 z-40 bg-cream-50/80 backdrop-blur-md border-b border-cream-100 py-6"
        aria-label="Menu category filters">
        <div class="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
            <div class="flex items-center justify-start md:justify-center gap-4 min-w-max">
                <button v-for="cat in categories" :key="cat.id" :class="[
                    'px-6 py-2.5 rounded-full font-bold text-sm transition-all',
                    activeCategory === cat.id
                        ? 'bg-forest-800 text-white shadow-lg shadow-forest-800/20'
                        : 'bg-white text-forest-800 font-semibold border border-cream-100 hover:border-gold-400',
                ]" @click="$emit('update:activeCategory', cat.id)">
                    {{ cat.label }}
                </button>
            </div>
        </div>
    </section>
</template>


<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>