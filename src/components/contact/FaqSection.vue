<script setup>
import { ref } from 'vue'
import FaqItem from './FaqItem.vue'

const faqItems = [
    {
        id: 'faq-donation',
        question: 'How can I see where my 10% meal donation goes?',
        answer:
            'We publish monthly impact reports on our website and social media. You can also join us for our Community Visit sessions held every last Sunday of the month.',
    },
    {
        id: 'faq-delivery',
        question: 'Do you offer home delivery?',
        answer:
            'Yes, we are available on FoodPanda and Pathao. You can also place direct orders via WhatsApp for Gulshan and Banani areas.',
    },
    {
        id: 'faq-events',
        question: 'Can I host private charity events at Ahaar?',
        answer:
            'Absolutely. We have a dedicated event space for up to 50 guests. Please contact our events team via the form above for more details.',
    },
]

const openId = ref(faqItems[0]?.id ?? null)

function toggleItem(id) {
    openId.value = openId.value === id ? null : id
}
</script>

<template>
    <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 class="font-heading text-4xl text-forest-800 font-bold text-center mb-16">
                Frequently Asked Questions
            </h2>

            <div class="space-y-4">
                <FaqItem v-for="item in faqItems" :key="item.id" :item="item" :open="openId === item.id"
                    @toggle="toggleItem(item.id)" />
            </div>
        </div>
    </section>
</template>