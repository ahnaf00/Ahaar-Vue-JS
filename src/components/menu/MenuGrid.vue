<script setup>
import { ref, computed, watch } from 'vue'
import DishCard from './DishCard.vue'
// import { menuItems } from '@/data/menu.js'

const props = defineProps({
    activeCategory: {
        type: String,
        required: true,
    },
})

const menuItems = [
  {
    id: "dish-001",
    slug: "heritage-kacchi-biryani",
    name: "Heritage Kacchi Biryani",
    category: "biryani-pulao",
    categoryLabel: "Biryani & Pulao",
    price: 450,
    description:
      "Traditional Dhaka-style Kacchi with tender mutton chunks marinated in over 12 secret spices, slow-cooked with aromatic Kalijira rice.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    tags: [
      { id: "tag-spicy", icon: "fas fa-fire", title: "Spicy" },
      {
        id: "tag-gluten-free",
        icon: "fas fa-wheat-awn-circle-exclamation",
        title: "Gluten Free",
      },
    ],
  },
  {
    id: "dish-002",
    slug: "royal-butter-chicken",
    name: "Royal Butter Chicken",
    category: "heritage-curries",
    categoryLabel: "Heritage Curries",
    price: 380,
    description:
      "Boneless chicken tandoor-grilled and simmered in a rich tomato, butter, and cream gravy. A signature north-Indian delight.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tags: [{ id: "tag-dairy", icon: "fas fa-cow", title: "Contains Dairy" }],
  },
  {
    id: "dish-003",
    slug: "smoked-shorshe-ilish",
    name: "Smoked Shorshe Ilish",
    category: "heritage-curries",
    categoryLabel: "Heritage Curries",
    price: 520,
    description:
      "The pride of Bengal. Fresh Hilsa fish cooked in a sharp mustard and green chili gravy, finished with cold-pressed mustard oil.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    tags: [{ id: "tag-spicy", icon: "fas fa-fire", title: "Spicy" }],
  },
  {
    id: "dish-004",
    slug: "grand-kebab-platter",
    name: "Grand Kebab Platter",
    category: "tandoor-kebabs",
    categoryLabel: "Tandoor Kebabs",
    price: 650,
    description:
      "A royal selection of Lamb Seekh, Chicken Reshmi, and Paneer Tikka, served with mint chutney and laccha onions.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    tags: [
      { id: "tag-recommended", icon: "fas fa-thumbs-up", title: "Recommended" },
    ],
  },
  {
    id: "dish-005",
    slug: "signature-dal-makhani",
    name: "Signature Dal Makhani",
    category: "bengali-sides",
    categoryLabel: "Bengali Sides",
    price: 180,
    description:
      "Black lentils slow-cooked for 18 hours on coal fire, enriched with butter and cream for a silky smooth finish.",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: [{ id: "tag-vegetarian", icon: "fas fa-leaf", title: "Vegetarian" }],
  },
  {
    id: "dish-006",
    slug: "saffron-rose-firni",
    name: "Saffron Rose Firni",
    category: "desserts",
    categoryLabel: "Desserts",
    price: 120,
    description:
      "Chilled ground-rice pudding infused with Kashmiri saffron and organic rose petals, topped with silver leaf.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
    tags: [{ id: "tag-sweet", icon: "fas fa-candy-cane", title: "Sweet" }],
  },
];

const PAGE_SIZE = 6
const page = ref(1)

const filtered = computed(() =>
    props.activeCategory === 'all'
        ? menuItems
        : menuItems.filter(d => d.category === props.activeCategory)
)

const visibleDishes = computed(() => filtered.value.slice(0, page.value * PAGE_SIZE))
const hasMore = computed(() => visibleDishes.value.length < filtered.value.length)

function loadMore() {
    page.value++
}

// Reset to page 1 when category filter changes
watch(() => props.activeCategory, () => {
    page.value = 1
})
</script>


<template>
    <section class="py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">

            <!-- Dish grid with animated transitions -->
            <TransitionGroup name="dish-list" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DishCard v-for="dish in visibleDishes" :key="dish.id" :dish="dish" />
            </TransitionGroup>

            <!-- Empty state -->
            <div v-if="visibleDishes.length === 0" class="text-center py-20 text-gray-400">
                <i class="fas fa-bowl-food text-5xl mb-4 block"></i>
                <p class="text-lg font-medium">No dishes in this category yet.</p>
            </div>

            <!-- Load more -->
            <div v-if="hasMore" class="mt-16 text-center">
                <button class="bg-forest-800 text-white px-10 py-4 rounded-2xl font-bold
                 hover:bg-forest-700 transition-all" @click="loadMore">
                    Load More Dishes
                </button>
            </div>

        </div>
    </section>
</template>

<style scoped>
.dish-list-enter-active,
.dish-list-leave-active {
    transition: all 0.3s ease;
}

.dish-list-enter-from {
    opacity: 0;
    transform: translateY(16px);
}

.dish-list-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>