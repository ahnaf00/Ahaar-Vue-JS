<script setup>
import ImpactUpdateItem from './ImpactUpdateItem.vue';

const monthlyUpdates = [
    {
        id: 'update-may-2026',
        month: 'May 2026',
        latest: true,
        items: [
            'Donated 4,500 BDT across 4 weeks to local families.',
            'Shared 240 meals with Al-Islah Orphan House.',
            'Provided 50 back-to-school kits for children in Mirpur.',
        ],
    },
    {
        id: 'update-april-2026',
        month: 'April 2026',
        latest: false,
        items: [
            'Donated 4,000 BDT to emergency medical support funds.',
            'Shared 210 meals with local community centers.',
        ],
    },
]
</script>

<template>
    <section class="py-24 bg-white">
        <div class="max-w-5xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="font-heading text-4xl text-forest-800 font-bold">Monthly Impact Log</h2>
                <p class="text-gray-500 mt-4 italic">Transparency is the foundation of trust.</p>
            </div>

            <div
                class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cream-100 before:to-transparent">
                <ImpactUpdateItem v-for="update in monthlyUpdates" :key="update.id" :update="update" />
            </div>

            <div class="text-center mt-16">
                <a href="#" class="text-forest-800 font-bold border-b-2 border-gold-400 pb-1">
                    Download Full Annual Report PDF
                </a>
            </div>
        </div>
    </section>
</template>