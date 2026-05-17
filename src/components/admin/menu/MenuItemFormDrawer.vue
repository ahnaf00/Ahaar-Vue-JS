<script setup>
import { computed, reactive, watch } from 'vue'

const props = defineProps({
    visible: { type: Boolean, default: false },
    item: { type: Object, default: null },
})

const emit = defineEmits(['close', 'save', 'delete'])

const categories = ['Rice & Biryani', 'Mains', 'Starters', 'Desserts', 'Drinks']

const form = reactive({
    id: '', name: '', category: '', price: '',
    status: 'Active', stock: 'In Stock', badge: '', image: '',
})

const isEditing = computed(() => !!props.item?.id)

watch(
    () => props.item,
    (val) => {
        Object.assign(form, val
            ? {
                id: val.id, name: val.name, category: val.category, price: val.price,
                status: val.status, stock: val.stock, badge: val.badge || '', image: val.image || ''
            }
            : { id: '', name: '', category: '', price: '', status: 'Active', stock: 'In Stock', badge: '', image: '' }
        )
    },
    { immediate: true }
)

function handleSubmit() {
    emit('save', { ...form })
    emit('close')
}
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="visible" class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm" @click.self="$emit('close')">
                <div
                    class="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl p-6 md:p-8 overflow-y-auto">
                    <div class="flex items-start justify-between gap-4 mb-8">
                        <div>
                            <p class="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">
                                {{ isEditing ? 'Edit Dish' : 'Add New Dish' }}
                            </p>
                            <h2 class="font-heading text-3xl text-forest-800 font-bold mt-2">
                                {{ isEditing ? form.name : 'New Item' }}
                            </h2>
                        </div>
                        <button type="button"
                            class="w-11 h-11 rounded-2xl bg-cream-50 border border-cream-100 text-forest-800"
                            aria-label="Close menu item drawer" @click="$emit('close')">
                            <i class="fas fa-xmark"></i>
                        </button>
                    </div>

                    <form class="space-y-5" @submit.prevent="handleSubmit">
                        <div class="space-y-1.5">
                            <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Dish Name</label>
                            <input v-model="form.name" type="text" placeholder="e.g. Kacchi Biryani" required
                                class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                        </div>

                        <div class="space-y-1.5">
                            <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Category</label>
                            <select v-model="form.category" required
                                class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400">
                                <option disabled value="">Select a category</option>
                                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                            </select>
                        </div>

                        <div class="space-y-1.5">
                            <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Price
                                (BDT)</label>
                            <input v-model="form.price" type="text" placeholder="e.g. ৳580" required
                                class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                        </div>

                        <div class="grid sm:grid-cols-2 gap-5">
                            <div class="space-y-1.5">
                                <label
                                    class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Status</label>
                                <select v-model="form.status"
                                    class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400">
                                    <option>Active</option>
                                    <option>Hidden</option>
                                </select>
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Stock</label>
                                <select v-model="form.stock"
                                    class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400">
                                    <option>In Stock</option>
                                    <option>Low Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Badge
                                (Optional)</label>
                            <input v-model="form.badge" type="text"
                                placeholder="e.g. Best Seller, Seasonal, Mission Dish"
                                class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                        </div>

                        <div class="flex items-center gap-4 pt-4">
                            <button type="submit"
                                class="flex-1 bg-forest-800 hover:bg-forest-700 text-white font-bold py-3 rounded-2xl transition-colors">
                                {{ isEditing ? 'Save Changes' : 'Add to Menu' }}
                            </button>
                            <button v-if="isEditing" type="button"
                                class="flex-1 border border-rose-200 text-rose-600 hover:bg-rose-50 font-bold py-3 rounded-2xl transition-colors"
                                @click="$emit('delete', form)">
                                Remove Dish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>