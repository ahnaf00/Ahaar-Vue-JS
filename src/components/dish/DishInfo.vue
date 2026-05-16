<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    dish: { type: Object, required: true },
})
const emit = defineEmits(['add-to-order'])

const selectedSize = ref(props.dish.sizes[0].id)
const selectedAddons = ref([])
const quantity = ref(1)

const sizeTotal = computed(() => {
    const s = props.dish.sizes.find(s => s.id === selectedSize.value)
    return s ? s.surcharge : 0
})
const addonTotal = computed(() =>
    props.dish.addons
        .filter(a => selectedAddons.value.includes(a.id))
        .reduce((sum, a) => sum + a.price, 0)
)
const totalPrice = computed(() => props.dish.price + sizeTotal.value + addonTotal.value)

function addToOrder() {
    emit('add-to-order', {
        slug: props.dish.slug,
        name: props.dish.name,
        size: selectedSize.value,
        addons: selectedAddons.value,
        quantity: quantity.value,
        price: totalPrice.value,
    })
}
</script>

<template>
    <div class="animate-fade-up">
        <!-- Badge + Rating -->
        <div class="flex items-center gap-3 mb-6">
            <span
                class="bg-forest-800 text-gold-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {{ dish.badge }}
            </span>
            <span class="flex items-center gap-1 text-gold-500 text-xs font-bold">
                <i class="fas fa-star"></i>
                {{ dish.rating }} · {{ dish.reviewCount }} Reviews
            </span>
        </div>

        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl text-forest-800 font-bold leading-tight mb-4">
            {{ dish.name }}
        </h1>
        <p class="text-3xl text-gold-500 font-bold mb-8">৳{{ totalPrice }}</p>
        <p class="text-gray-600 text-lg leading-relaxed mb-8">{{ dish.description }}</p>

        <!-- Dietary info badges — v-for with tag.id key -->
        <div class="flex flex-wrap gap-4 mb-10 pb-10 border-b border-cream-100">
            <div v-for="info in dish.dietaryInfo" :key="info.id"
                class="flex items-center gap-3 px-4 py-2 bg-white rounded-xl border border-cream-100">
                <i :class="[info.icon, info.color]"></i>
                <span class="text-sm font-semibold text-gray-600">{{ info.label }}</span>
            </div>
        </div>

        <!-- Size selector -->
        <div class="space-y-8 mb-10">
            <div>
                <label class="block text-sm font-bold text-forest-800 uppercase tracking-widest mb-4">Portion
                    Size</label>
                <div class="flex gap-4">
                    <button v-for="size in dish.sizes" :key="size.id"
                        class="px-8 py-3 rounded-xl border-2 font-bold text-sm transition-all" :class="selectedSize === size.id
                            ? 'border-forest-800 bg-forest-800 text-white'
                            : 'border-cream-100 bg-white text-forest-800 hover:border-gold-400'" @click="selectedSize = size.id">
                        {{ size.label }}
                    </button>
                </div>
            </div>

            <!-- Add-ons — v-model array with addon.id values -->
            <div>
                <label class="block text-sm font-bold text-forest-800 uppercase tracking-widest mb-4">Select
                    Add-ons</label>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="addon in dish.addons" :key="addon.id" class="flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-100
                   cursor-pointer hover:border-gold-400 transition-all">
                        <input type="checkbox" class="w-4 h-4 accent-forest-800" :value="addon.id"
                            v-model="selectedAddons" />
                        <span class="text-sm font-medium">
                            {{ addon.label }} <span class="text-gold-500">+৳{{ addon.price }}</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Quantity + Add to Order -->
        <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex items-center bg-white border border-cream-100 rounded-2xl px-4 py-2 h-16">
                <button
                    class="w-10 h-10 flex items-center justify-center text-forest-800 hover:text-gold-500 transition-colors"
                    aria-label="Decrease quantity" @click="quantity > 1 && quantity--">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="w-12 text-center font-bold text-forest-800">{{ quantity }}</span>
                <button
                    class="w-10 h-10 flex items-center justify-center text-forest-800 hover:text-gold-500 transition-colors"
                    aria-label="Increase quantity" @click="quantity++">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <button class="btn-primary flex-1 bg-forest-800 text-white font-bold text-lg rounded-2xl h-16
               flex items-center justify-center gap-3" @click="addToOrder">
                <i class="fas fa-shopping-bag"></i>
                Add to Order · ৳{{ totalPrice * quantity }}
            </button>
        </div>

        <!-- Impact note -->
        <div class="mt-10 p-6 bg-forest-800/5 rounded-3xl border border-forest-800/10">
            <div class="flex gap-4">
                <div class="w-12 h-12 bg-forest-800 rounded-xl flex items-center justify-center shrink-0">
                    <i class="fas fa-heart text-gold-400"></i>
                </div>
                <div>
                    <h4 class="font-bold text-forest-800">Your order matters.</h4>
                    <p class="text-sm text-gray-500 mt-1">{{ dish.impactNote }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-primary {
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(27, 67, 50, 0.3);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-up {
    animation: fadeInUp 0.6s ease-out forwards;
}
</style>