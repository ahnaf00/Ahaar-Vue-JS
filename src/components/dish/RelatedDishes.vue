<script setup>
defineProps({ related: { type: Array, required: true } })
</script>

<template>
    <section class="py-24 bg-cream-50">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 class="font-heading text-3xl text-forest-800 font-bold mb-12">You Might Also Love</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <article v-for="item in related" :key="item.id"
                    class="bg-white rounded-[32px] overflow-hidden shadow-sm group">
                    <div class="h-48 overflow-hidden">
                        <img :src="item.image" :alt="item.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                            loading="lazy" width="600" height="192" />
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-forest-800 text-lg mb-2">{{ item.name }}</h4>
                        <p class="text-gold-500 font-bold mb-4">৳{{ item.price }}</p>
                        <RouterLink :to="`/dish/${item.slug}`"
                            class="text-sm font-bold text-forest-800 hover:text-gold-500 flex items-center gap-2 transition-colors">
                            View Details <i class="fas fa-arrow-right text-[10px]"></i>
                        </RouterLink>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>