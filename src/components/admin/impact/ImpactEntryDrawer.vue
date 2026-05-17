<script setup>
import { computed, reactive, watch } from 'vue'

const props = defineProps({
    visible: { type: Boolean, default: false },
    entry: { type: Object, default: null },
})

const emit = defineEmits(['close', 'save', 'delete'])

const form = reactive({
    id: '', month: '', mealsShared: 0, fundReleased: '',
    kitsDistributed: 0, homesReached: 0, highlight: '', status: 'In Progress',
})

const isEditing = computed(() => !!props.entry?.id)

watch(
    () => props.entry,
    (val) => {
        Object.assign(form, val
            ? {
                id: val.id, month: val.month, mealsShared: val.mealsShared,
                fundReleased: val.fundReleased, kitsDistributed: val.kitsDistributed,
                homesReached: val.homesReached, highlight: val.highlight, status: val.status
            }
            : {
                id: '', month: '', mealsShared: 0, fundReleased: '',
                kitsDistributed: 0, homesReached: 0, highlight: '', status: 'In Progress'
            }
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
                                {{ isEditing ? 'Edit Impact Entry' : 'New Impact Entry' }}
                            </p>
                            <h2 class="font-heading text-3xl text-forest-800 font-bold mt-2">
                                {{ isEditing ? form.month : 'Log New Month' }}
                            </h2>
                        </div>
                        <button type="button"
                            class="w-11 h-11 rounded-2xl bg-cream-50 border border-cream-100 text-forest-800"
                            aria-label="Close impact drawer" @click="$emit('close')">
                            <i class="fas fa-xmark"></i>
                        </button>
                    </div>

                    <form class="space-y-5" @submit.prevent="handleSubmit">
                        <div class="space-y-1.5">
                            <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Month &
                                Year</label>
                            <input v-model="form.month" type="text" placeholder="e.g. June 2026" required
                                class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                        </div>

                        <div class="grid sm:grid-cols-2 gap-5">
                            <div class="space-y-1.5">
                                <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Meals
                                    Shared</label>
                                <input v-model.number="form.mealsShared" type="number" min="0" placeholder="e.g. 280"
                                    required
                                    class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Fund
                                    Released</label>
                                <input v-model="form.fundReleased" type="text" placeholder="e.g. ৳4,000" required
                                    class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Kits
                                    Distributed</label>
                                <input v-model.number="form.kitsDistributed" type="number" min="0" placeholder="e.g. 12"
                                    class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Homes
                                    Reached</label>
                                <input v-model.number="form.homesReached" type="number" min="0" placeholder="e.g. 4"
                                    class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400" />
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Month
                                Highlight</label>
                            <textarea v-model="form.highlight" rows="3"
                                placeholder="Key story or milestone from this month..."
                                class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400 resize-none"></textarea>
                        </div>

                        <div class="space-y-1.5">
                            <label class="text-xs uppercase tracking-[0.18em] text-gray-400 font-bold">Publication
                                Status</label>
                            <select v-model="form.status"
                                class="w-full px-4 py-3 rounded-2xl border border-cream-100 bg-cream-50 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/10 focus:border-gold-400">
                                <option>In Progress</option>
                                <option>Published</option>
                            </select>
                        </div>

                        <div class="flex items-center gap-4 pt-4">
                            <button type="submit"
                                class="flex-1 bg-forest-800 hover:bg-forest-700 text-white font-bold py-3 rounded-2xl transition-colors">
                                {{ isEditing ? 'Save Changes' : 'Add Entry' }}
                            </button>
                            <button v-if="isEditing" type="button"
                                class="flex-1 border border-rose-200 text-rose-600 hover:bg-rose-50 font-bold py-3 rounded-2xl transition-colors"
                                @click="$emit('delete', form)">
                                Delete Entry
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