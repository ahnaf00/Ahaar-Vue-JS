<script setup>

const partnerHomes = [
    {
        id: 'home-001',
        name: 'Rashid Orphan Home',
        location: 'Mirpur 10, Dhaka',
        children: 38,
        mealsPerWeek: 40,
        contactPerson: 'Br. Abdur Rashid',
        status: 'Active',
        icon: 'fas fa-house-heart',
    },
    {
        id: 'home-002',
        name: 'Noor Foundation Home',
        location: 'Mohammadpur, Dhaka',
        children: 52,
        mealsPerWeek: 55,
        contactPerson: 'Sr. Fatima Begum',
        status: 'Active',
        icon: 'fas fa-house-heart',
    },
    {
        id: 'home-003',
        name: 'Sunshine Children Centre',
        location: 'Rayer Bazar, Dhaka',
        children: 29,
        mealsPerWeek: 30,
        contactPerson: 'Mr. Kamal Hossain',
        status: 'Active',
        icon: 'fas fa-house-heart',
    },
    {
        id: 'home-004',
        name: 'Al-Noor Home',
        location: 'Badda, Dhaka',
        children: 44,
        mealsPerWeek: 45,
        contactPerson: 'Br. Iqbal Ahmed',
        status: 'Active',
        icon: 'fas fa-house-heart',
    },
]
</script>

<template>
    <section class="bg-white rounded-[32px] border border-cream-100 p-6 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <h2 class="font-heading text-2xl text-forest-800 font-bold">Partner Homes</h2>
                <p class="text-sm text-gray-500 mt-1">All active orphan houses in the Ahaar network.</p>
            </div>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
                {{ partnerHomes.length }} Active
            </span>
        </div>

        <div class="grid sm:grid-cols-2 gap-5">
            <div v-for="home in partnerHomes" :key="home.id"
                class="rounded-3xl bg-cream-50 border border-cream-100 p-5 hover:bg-white hover:shadow-md transition-all">
                <div class="flex items-start gap-4">
                    <div
                        class="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0">
                        <i :class="home.icon"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-start justify-between gap-2 flex-wrap">
                            <p class="font-bold text-forest-800 leading-tight">{{ home.name }}</p>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 shrink-0">
                                {{ home.status }}
                            </span>
                        </div>
                        <p class="text-xs text-gray-400 mt-1">
                            <i class="fas fa-location-dot mr-1"></i>{{ home.location }}
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-cream-100">
                    <div class="text-center">
                        <p class="font-heading text-xl font-bold text-forest-800">{{ home.children }}</p>
                        <p class="text-xs text-gray-400 mt-0.5">Children</p>
                    </div>
                    <div class="text-center border-x border-cream-100">
                        <p class="font-heading text-xl font-bold text-gold-500">{{ home.mealsPerWeek }}</p>
                        <p class="text-xs text-gray-400 mt-0.5">Meals/wk</p>
                    </div>
                    <div class="text-center">
                        <p class="text-xs font-semibold text-gray-600 leading-snug">{{ home.contactPerson }}</p>
                        <p class="text-xs text-gray-400 mt-0.5">Contact</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>