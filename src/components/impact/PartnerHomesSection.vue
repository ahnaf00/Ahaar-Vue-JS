<script setup>
import PartnerHomeCard from './PartnerHomeCard.vue';

const partnerHomes = [
    {
        id: 'partner-alislah',
        name: 'Al-Islah House',
        location: 'Dhaka North',
    },
    {
        id: 'partner-mirpur',
        name: 'Mirpur Childrens',
        location: 'Mirpur 10',
    },
    {
        id: 'partner-asha',
        name: 'Asha Orphanage',
        location: 'Banani Area',
    },
    {
        id: 'partner-dream',
        name: 'Dream Center',
        location: 'Uttara Sector 4',
    },
]
</script>

<template>
    <section class="py-24 bg-cream-50">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 class="font-heading text-4xl text-forest-800 font-bold text-center mb-16">
                Our Partners in Giving
            </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PartnerHomeCard v-for="partner in partnerHomes" :key="partner.id" :partner="partner" />
            </div>
        </div>
    </section>
</template>