<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submitted'])

const inquiryTypes = [
    { id: 'inquiry-general', label: 'General Feedback', value: 'General Feedback' },
    { id: 'inquiry-catering', label: 'Catering Request', value: 'Catering Request' },
    { id: 'inquiry-charity', label: 'Charity Partnership', value: 'Charity Partnership' },
    { id: 'inquiry-media', label: 'Media Inquiry', value: 'Media Inquiry' },
]

const form = reactive({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
})

function handleSubmit() {
    emit('submitted', { ...form })
}
</script>

<template>
    <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-cream-100">
        <h3 class="font-heading text-3xl text-forest-800 font-bold mb-8">Send a Message</h3>

        <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                <input v-model="form.name" type="text" placeholder="Full Name"
                    class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10" />
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
                <div>
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email
                        Address</label>
                    <input v-model="form.email" type="email" placeholder="email@example.com"
                        class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10" />
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Inquiry
                        Type</label>
                    <select v-model="form.inquiryType"
                        class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all appearance-none focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10">
                        <option value="" disabled>Select type</option>
                        <option v-for="option in inquiryTypes" :key="option.id" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                <textarea v-model="form.message" rows="5" placeholder="Tell us what's on your mind..."
                    class="w-full px-5 py-4 bg-cream-50 border border-cream-100 rounded-2xl text-sm transition-all resize-none focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-400/10"></textarea>
            </div>

            <button type="submit"
                class="w-full btn-primary bg-forest-800 text-white font-bold py-5 rounded-2xl text-lg shadow-lg shadow-forest-800/20">
                Send Message
            </button>
        </form>
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