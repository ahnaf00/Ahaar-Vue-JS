<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submitted'])

const reservationTimeOptions = [
    { id: 'time-1200', label: '12:00 PM', value: '12:00 PM' },
    { id: 'time-0100', label: '01:00 PM', value: '01:00 PM' },
    { id: 'time-0700', label: '07:00 PM', value: '07:00 PM' },
    { id: 'time-0800', label: '08:00 PM', value: '08:00 PM' },
]

const guestOptions = [
    { id: 'guests-2', label: '2 People', value: '2 People' },
    { id: 'guests-4', label: '4 People', value: '4 People' },
    { id: 'guests-6', label: '6 People', value: '6 People' },
    { id: 'guests-large', label: 'Large Group', value: 'Large Group' },
]


const form = reactive({
    fullName: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    request: '',
})

function handleSubmit() {
    emit('submitted', { ...form })
}
</script>

<template>
    <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-cream-100">
        <h1 class="font-heading text-4xl text-forest-800 font-bold mb-2">Reserve Your Table</h1>
        <p class="text-gray-500 mb-10">Choose your preferred time and we'll handle the rest.</p>

        <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full
                        Name</label>
                    <input v-model="form.fullName" type="text" placeholder="e.g. Tanveer Islam"
                        class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10" />
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone
                        Number</label>
                    <input v-model="form.phone" type="tel" placeholder="+880 1XXX-XXXXXX"
                        class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10" />
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div>
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Date</label>
                    <input v-model="form.date" type="date"
                        class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10" />
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Time</label>
                    <select v-model="form.time"
                        class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all appearance-none focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10">
                        <option value="" disabled>Select time</option>
                        <option v-for="option in reservationTimeOptions" :key="option.id" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Guests</label>
                    <select v-model="form.guests"
                        class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all appearance-none focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10">
                        <option value="" disabled>Select guests</option>
                        <option v-for="option in guestOptions" :key="option.id" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Special Request <span class="normal-case font-medium">Optional</span>
                </label>
                <textarea v-model="form.request" rows="3"
                    placeholder="Birthday, anniversary, or dietary requirements..."
                    class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all resize-none focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10"></textarea>
            </div>

            <button type="submit"
                class="w-full btn-primary bg-forest-800 text-white font-bold py-5 rounded-2xl text-lg shadow-lg shadow-forest-800/20">
                Confirm Reservation
            </button>
        </form>

        <p class="text-[10px] text-gray-400 text-center mt-6">
            <i class="fas fa-info-circle mr-1"></i>
            We'll send a confirmation SMS within 15 minutes.
        </p>
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
</style>