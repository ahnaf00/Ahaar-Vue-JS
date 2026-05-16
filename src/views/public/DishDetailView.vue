<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import DishGallery from '../../components/dish/DishGallery.vue'
import DishInfo from '../../components/dish/DishInfo.vue'
import DishStory from '../../components/dish/DishStory.vue'
import RelatedDishes from '../../components/dish/RelatedDishes.vue'
const route = useRoute()

const dishDetails = {
    "heritage-kacchi-biryani": {
        slug: "heritage-kacchi-biryani",
        name: "Heritage Kacchi Biryani",
        categoryLabel: "Biryani & Pulao",
        badge: "Most Popular",
        rating: 4.9,
        reviewCount: 120,
        price: 450,
        description:
            "The gold standard of Dhaka's culinary heritage. Our Kacchi features premium mutton marinated overnight in cold-pressed mustard oil and a precise blend of 12 traditional spices...",
        images: [
            {
                id: "img-1",
                src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
                alt: "Kacchi Biryani",
            },
            {
                id: "img-2",
                src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80",
                alt: "Spice detail",
            },
            {
                id: "img-3",
                src: "https://images.unsplash.com/photo-1633383718081-22ac93e3dbf1?auto=format&fit=crop&w=400&q=80",
                alt: "Plated dish",
            },
        ],
        dietaryInfo: [
            {
                id: "di-spice",
                icon: "fas fa-fire",
                label: "Medium Spice",
                color: "text-terracotta-400",
            },
            {
                id: "di-gluten",
                icon: "fas fa-wheat-awn-circle-exclamation",
                label: "Gluten Free",
                color: "text-forest-800",
            },
            {
                id: "di-time",
                icon: "fas fa-clock",
                label: "20-30 Mins",
                color: "text-blue-400",
            },
        ],
        sizes: [
            { id: "size-regular", label: "Regular", surcharge: 0 },
            { id: "size-large", label: "Large +৳250", surcharge: 250 },
        ],
        addons: [
            { id: "addon-borhani", label: "Extra Borhani", price: 60 },
            { id: "addon-salad", label: "Mixed Salad", price: 30 },
        ],
        ingredients: [
            "Premium Mutton Chunks",
            "Kalijira Aromatic Rice",
            "Cold-pressed Mustard Oil",
            "Saffron-infused Milk",
        ],
        spices: [
            "Green Cardamom",
            "Cinnamon & Cloves",
            "Nutmeg & Mace",
            "White Pepper",
        ],
        story: [
            'Unlike regular biryani, our Kacchi is raw-cooked — Kacchi literally means "raw". The meat and rice are layered together and slow-cooked in one go...',
            "We source our mutton from local farmers who practice sustainable grazing...",
        ],
        impactNote:
            "This specific dish generates a 10-meal contribution that will be shared with the Al-Islah Orphan House this Sunday.",
        related: [
            {
                id: "rel-001",
                slug: "royal-butter-chicken",
                name: "Royal Butter Chicken",
                price: 380,
                image:
                    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
            },
            {
                id: "rel-002",
                slug: "signature-dal-makhani",
                name: "Signature Dal Makhani",
                price: 180,
                image:
                    "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
            },
            {
                id: "rel-003",
                slug: "saffron-rose-firni",
                name: "Saffron Rose Firni",
                price: 120,
                image:
                    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
            },
        ],
    },
    "royal-butter-chicken": {
        slug: "royal-butter-chicken",
        name: "Royal Butter Chicken",
        categoryLabel: "Heritage Curries",
        badge: "Chef's Pick",
        rating: 4.8,
        reviewCount: 95,
        price: 380,
        description: "Boneless chicken tandoor-grilled and simmered in a rich tomato, butter, and cream gravy. A signature north-Indian delight perfected over generations.",
        images: [
            { id: "img-1", src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80", alt: "Butter Chicken" },
            { id: "img-2", src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80", alt: "Side view" },
            { id: "img-3", src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80", alt: "Plated" },
        ],
        dietaryInfo: [
            { id: "di-dairy", icon: "fas fa-cow", label: "Contains Dairy", color: "text-yellow-600" },
            { id: "di-spice", icon: "fas fa-fire", label: "Mild Spice", color: "text-terracotta-400" },
            { id: "di-time", icon: "fas fa-clock", label: "25-35 Mins", color: "text-blue-400" },
        ],
        sizes: [
            { id: "size-regular", label: "Regular", surcharge: 0 },
            { id: "size-large", label: "Large +৳200", surcharge: 200 },
        ],
        addons: [
            { id: "addon-naan", label: "Butter Naan", price: 50 },
            { id: "addon-raita", label: "Cucumber Raita", price: 40 },
        ],
        ingredients: ["Boneless Chicken", "Tomato Puree", "Fresh Cream", "Kashmiri Chili"],
        spices: ["Garam Masala", "Kasuri Methi", "Bay Leaf", "Green Cardamom"],
        story: [
            "Our Butter Chicken recipe traces back to the kitchens of Old Delhi, where slow-cooked tomato gravies became legendary.",
            "Each batch is prepared with hand-ground spices and finished with a swirl of aged butter for an unforgettable richness.",
        ],
        impactNote: "Every order of this dish provides 5 meals to families in need through our community kitchen program.",
        related: [
            { id: "rel-001", slug: "heritage-kacchi-biryani", name: "Heritage Kacchi Biryani", price: 450, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-002", slug: "grand-kebab-platter", name: "Grand Kebab Platter", price: 650, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-003", slug: "saffron-rose-firni", name: "Saffron Rose Firni", price: 120, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80" },
        ],
    },
    "smoked-shorshe-ilish": {
        slug: "smoked-shorshe-ilish",
        name: "Smoked Shorshe Ilish",
        categoryLabel: "Heritage Curries",
        badge: "Bengal Pride",
        rating: 4.9,
        reviewCount: 78,
        price: 520,
        description: "The pride of Bengal. Fresh Hilsa fish cooked in a sharp mustard and green chili gravy, finished with cold-pressed mustard oil.",
        images: [
            { id: "img-1", src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80", alt: "Shorshe Ilish" },
            { id: "img-2", src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80", alt: "Preparation" },
            { id: "img-3", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80", alt: "Spices" },
        ],
        dietaryInfo: [
            { id: "di-spice", icon: "fas fa-fire", label: "High Spice", color: "text-red-500" },
            { id: "di-fish", icon: "fas fa-fish", label: "Seafood", color: "text-blue-500" },
            { id: "di-time", icon: "fas fa-clock", label: "30-40 Mins", color: "text-blue-400" },
        ],
        sizes: [
            { id: "size-regular", label: "Regular", surcharge: 0 },
            { id: "size-large", label: "Large +৳300", surcharge: 300 },
        ],
        addons: [
            { id: "addon-rice", label: "Steamed Rice", price: 40 },
            { id: "addon-dal", label: "Masoor Dal", price: 50 },
        ],
        ingredients: ["Fresh Hilsa Fish", "Yellow Mustard Paste", "Green Chilies", "Cold-pressed Mustard Oil"],
        spices: ["Mustard Seeds", "Turmeric", "Nigella Seeds", "Red Chili"],
        story: [
            "Ilish Maach holds an almost sacred place in Bengali cuisine. Our recipe honors that tradition with fish sourced fresh from Padma river fishermen.",
            "The mustard paste is hand-ground daily, ensuring the pungent, earthy flavor that defines an authentic Shorshe Ilish.",
        ],
        impactNote: "This dish supports sustainable fishing communities along the Padma river.",
        related: [
            { id: "rel-001", slug: "heritage-kacchi-biryani", name: "Heritage Kacchi Biryani", price: 450, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-002", slug: "signature-dal-makhani", name: "Signature Dal Makhani", price: 180, image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-003", slug: "royal-butter-chicken", name: "Royal Butter Chicken", price: 380, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80" },
        ],
    },
    "grand-kebab-platter": {
        slug: "grand-kebab-platter",
        name: "Grand Kebab Platter",
        categoryLabel: "Tandoor Kebabs",
        badge: "Recommended",
        rating: 4.7,
        reviewCount: 64,
        price: 650,
        description: "A royal selection of Lamb Seekh, Chicken Reshmi, and Paneer Tikka, served with mint chutney and laccha onions.",
        images: [
            { id: "img-1", src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80", alt: "Kebab Platter" },
            { id: "img-2", src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80", alt: "Close up" },
            { id: "img-3", src: "https://images.unsplash.com/photo-1633383718081-22ac93e3dbf1?auto=format&fit=crop&w=400&q=80", alt: "Presentation" },
        ],
        dietaryInfo: [
            { id: "di-spice", icon: "fas fa-fire", label: "Medium Spice", color: "text-terracotta-400" },
            { id: "di-protein", icon: "fas fa-drumstick-bite", label: "High Protein", color: "text-red-600" },
            { id: "di-time", icon: "fas fa-clock", label: "25-35 Mins", color: "text-blue-400" },
        ],
        sizes: [
            { id: "size-regular", label: "Regular", surcharge: 0 },
            { id: "size-large", label: "Large +৳350", surcharge: 350 },
        ],
        addons: [
            { id: "addon-chutney", label: "Extra Mint Chutney", price: 30 },
            { id: "addon-naan", label: "Garlic Naan", price: 60 },
        ],
        ingredients: ["Lamb Mince", "Chicken Breast", "Paneer", "Fresh Mint"],
        spices: ["Garam Masala", "Cumin", "Coriander", "Smoked Paprika"],
        story: [
            "Our tandoor burns at over 400°C, creating the perfect charred crust while keeping the kebabs juicy inside.",
            "Each kebab variety is marinated separately for a minimum of 6 hours to ensure deep flavor penetration.",
        ],
        impactNote: "This platter contributes to 8 meals for underprivileged children in our weekend feeding program.",
        related: [
            { id: "rel-001", slug: "royal-butter-chicken", name: "Royal Butter Chicken", price: 380, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-002", slug: "heritage-kacchi-biryani", name: "Heritage Kacchi Biryani", price: 450, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-003", slug: "saffron-rose-firni", name: "Saffron Rose Firni", price: 120, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80" },
        ],
    },
    "signature-dal-makhani": {
        slug: "signature-dal-makhani",
        name: "Signature Dal Makhani",
        categoryLabel: "Bengali Sides",
        badge: "Vegetarian",
        rating: 4.6,
        reviewCount: 88,
        price: 180,
        description: "Black lentils slow-cooked for 18 hours on coal fire, enriched with butter and cream for a silky smooth finish.",
        images: [
            { id: "img-1", src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80", alt: "Dal Makhani" },
            { id: "img-2", src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80", alt: "Cooking" },
            { id: "img-3", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80", alt: "Ingredients" },
        ],
        dietaryInfo: [
            { id: "di-veg", icon: "fas fa-leaf", label: "Vegetarian", color: "text-green-600" },
            { id: "di-dairy", icon: "fas fa-cow", label: "Contains Dairy", color: "text-yellow-600" },
            { id: "di-time", icon: "fas fa-clock", label: "15-20 Mins", color: "text-blue-400" },
        ],
        sizes: [
            { id: "size-regular", label: "Regular", surcharge: 0 },
            { id: "size-large", label: "Large +৳100", surcharge: 100 },
        ],
        addons: [
            { id: "addon-naan", label: "Butter Naan", price: 50 },
            { id: "addon-rice", label: "Jeera Rice", price: 60 },
        ],
        ingredients: ["Black Urad Dal", "Kidney Beans", "Fresh Cream", "Aged Butter"],
        spices: ["Kasuri Methi", "Garam Masala", "Bay Leaf", "Cinnamon"],
        story: [
            "True Dal Makhani cannot be rushed. Ours simmers on a low coal fire for 18 hours, breaking down the lentils into a velvety, smoky gravy.",
            "We finish each batch with a generous dollop of aged white butter, giving it the signature richness.",
        ],
        impactNote: "Every bowl sold provides 3 nutritious meals to school children through our mid-day meal initiative.",
        related: [
            { id: "rel-001", slug: "smoked-shorshe-ilish", name: "Smoked Shorshe Ilish", price: 520, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-002", slug: "heritage-kacchi-biryani", name: "Heritage Kacchi Biryani", price: 450, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-003", slug: "saffron-rose-firni", name: "Saffron Rose Firni", price: 120, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80" },
        ],
    },
    "saffron-rose-firni": {
        slug: "saffron-rose-firni",
        name: "Saffron Rose Firni",
        categoryLabel: "Desserts",
        badge: "Sweet Delight",
        rating: 4.8,
        reviewCount: 102,
        price: 120,
        description: "Chilled ground-rice pudding infused with Kashmiri saffron and organic rose petals, topped with silver leaf.",
        images: [
            { id: "img-1", src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80", alt: "Saffron Firni" },
            { id: "img-2", src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80", alt: "Garnish" },
            { id: "img-3", src: "https://images.unsplash.com/photo-1633383718081-22ac93e3dbf1?auto=format&fit=crop&w=400&q=80", alt: "Presentation" },
        ],
        dietaryInfo: [
            { id: "di-sweet", icon: "fas fa-candy-cane", label: "Sweet", color: "text-pink-500" },
            { id: "di-veg", icon: "fas fa-leaf", label: "Vegetarian", color: "text-green-600" },
            { id: "di-time", icon: "fas fa-clock", label: "10-15 Mins", color: "text-blue-400" },
        ],
        sizes: [
            { id: "size-regular", label: "Regular", surcharge: 0 },
            { id: "size-large", label: "Large +৳60", surcharge: 60 },
        ],
        addons: [
            { id: "addon-pistachio", label: "Extra Pistachios", price: 30 },
            { id: "addon-rose", label: "Rose Syrup Drizzle", price: 20 },
        ],
        ingredients: ["Ground Rice", "Full Cream Milk", "Kashmiri Saffron", "Organic Rose Petals"],
        spices: ["Cardamom", "Saffron", "Rose Water", "Pistachio"],
        story: [
            "Firni is an ancient Mughal dessert, distinct from kheer in its use of ground rice which gives it a thick, custard-like texture.",
            "We set ours in traditional clay pots which absorb excess moisture and impart a subtle earthen aroma.",
        ],
        impactNote: "Each Firni sold contributes to our dessert donation drive at local shelters every Friday.",
        related: [
            { id: "rel-001", slug: "royal-butter-chicken", name: "Royal Butter Chicken", price: 380, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-002", slug: "signature-dal-makhani", name: "Signature Dal Makhani", price: 180, image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80" },
            { id: "rel-003", slug: "heritage-kacchi-biryani", name: "Heritage Kacchi Biryani", price: 450, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80" },
        ],
    },
};


const dish = computed(() => dishDetails[route.params.slug] ?? null)

const toast = ref({ visible: false, message: '' })

function handleAddToOrder(orderItem) {
    toast.value = { visible: true, message: `${orderItem.quantity}× ${orderItem.name} added to order!` }
    setTimeout(() => { toast.value.visible = false }, 3000)
}
</script>

<template>
    <div>
        <!-- 404 / not found -->
        <div v-if="!dish" class="min-h-[60vh] flex flex-col items-center justify-center text-gray-400 py-24">
            <i class="fas fa-bowl-food text-6xl mb-6 block"></i>
            <h2 class="font-heading text-3xl font-bold text-forest-800 mb-2">Dish Not Found</h2>
            <p class="mb-8">We couldn't find that dish on our menu.</p>
            <RouterLink to="/menu"
                class="bg-forest-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-forest-700 transition-all">
                Back to Menu
            </RouterLink>
        </div>

        <template v-else>
            <section class="py-12 md:py-24">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">

                    <!-- Breadcrumb -->
                    <nav class="flex text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
                        <ol class="flex items-center space-x-2">
                            <li>
                                <RouterLink to="/menu" class="hover:text-forest-800 transition-colors">Menu</RouterLink>
                            </li>
                            <li><i class="fas fa-chevron-right text-[10px]"></i></li>
                            <li>{{ dish.categoryLabel }}</li>
                            <li><i class="fas fa-chevron-right text-[10px]"></i></li>
                            <li class="text-forest-800 font-bold" aria-current="page">{{ dish.name }}</li>
                        </ol>
                    </nav>

                    <!-- Gallery + Info columns -->
                    <div class="grid lg:grid-cols-2 gap-16 items-start">
                        <DishGallery :images="dish.images" />
                        <DishInfo :dish="dish" @add-to-order="handleAddToOrder" />
                    </div>
                </div>
            </section>

            <DishStory :dish="dish" />
            <RelatedDishes :related="dish.related" />
        </template>

        <!-- Toast -->
        <Transition name="toast">
            <div v-if="toast.visible" class="fixed bottom-8 right-8 bg-forest-800 text-white px-6 py-4 rounded-2xl
               shadow-2xl flex items-center gap-3 z-50" role="status" aria-live="polite">
                <i class="fas fa-check-circle text-gold-400"></i>
                <span class="font-semibold">{{ toast.message }}</span>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>