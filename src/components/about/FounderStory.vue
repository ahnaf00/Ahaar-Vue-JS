<script setup>

const founderStats = [
    { id: 'fs-experience', value: '25+', label: 'Years Experience' },
    { id: 'fs-hearts', value: '12k', label: 'Hearts Fed' },
]

</script>

<template>
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-20 items-center">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80"
                        alt="Founder Chef Zakir in kitchen" class="rounded-[60px] shadow-2xl w-full" loading="lazy"
                        width="800" height="600" />
                    <div
                        class="absolute -bottom-10 -right-10 bg-gold-400 p-10 rounded-[40px] shadow-2xl hidden md:block max-w-[240px]">
                        <p class="font-heading text-2xl text-forest-900 font-bold leading-tight">
                            A plate of food can change a life.
                        </p>
                    </div>
                </div>

                <div>
                    <span class="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">The Visionary</span>
                    <h2 class="font-heading text-4xl md:text-5xl text-forest-800 font-bold mt-4 leading-tight">
                        Chef Zakir Hossain
                    </h2>
                    <p class="text-gray-600 mt-8 text-lg leading-relaxed">
                        With over 25 years of experience in luxury hospitality across South Asia, Chef Zakir
                        returned to Dhaka with a mission to redefine dining out. He saw a gap between the
                        city's growing culinary scene and the underlying needs of its most vulnerable citizens.
                    </p>
                    <p class="text-gray-600 mt-6 text-lg leading-relaxed">
                        Ahaar is his answer — a place where the prestige of fine dining is leveraged to create
                        a sustainable cycle of giving.
                    </p>

                    <div class="mt-10 flex gap-12">
                        <div v-for="stat in founderStats" :key="stat.id">
                            <p class="text-4xl font-heading font-bold text-forest-800">{{ stat.value }}</p>
                            <p class="text-sm text-gold-500 font-bold uppercase tracking-widest mt-1">{{ stat.label }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>