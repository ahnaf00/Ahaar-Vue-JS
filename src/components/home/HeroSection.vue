<script setup>
import { ref } from 'vue'

const stats = ref([
    { id: 'weekly-donation', value: '1k+', label: 'Weekly Donation' },
    { id: 'meals-shared', value: '10%', label: 'Meals Shared' },
    { id: 'impact-reached', value: '15k+', label: 'Impact Reached' },
])
</script>

<template>
    <section class="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-cream-50"
        aria-label="Hero section">
        <div
            class="absolute top-0 right-0 w-1/3 h-full bg-forest-800 rounded-l-[100px] hidden lg:block translate-x-20 opacity-90">
        </div>
        <div
            class="absolute top-14 left-0 w-64 h-64 bg-gold-400 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="fade-up">
                    <div
                        class="inline-flex items-center gap-3 bg-forest-800/5 backdrop-blur-sm border border-forest-800/10 rounded-full px-5 py-2 mb-8">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-gold-500 opacity-75"></span>
                            <span class="relative inline-flex h-2 w-2 rounded-full bg-gold-400"></span>
                        </span>
                        <span class="text-forest-800 text-xs font-bold uppercase tracking-[0.2em]">Taste with a
                            Purpose</span>
                    </div>

                    <h1 class="font-heading text-6xl md:text-8xl text-forest-800 font-bold leading-[1.05] mb-8">
                        Authentic<br>
                        <span class="text-gold-400 italic">Flavors</span>,<br>
                        Social
                        <span class="relative inline-block">
                            <span class="relative z-10">Soul</span>
                            <span class="absolute bottom-4 left-0 w-full h-4 bg-gold-400/20 -z-10"></span>
                        </span>
                    </h1>

                    <p class="text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-lg">
                        Dhaka's premium destination for traditional Bengali heritage. Where every bite nourishes the
                        heart and funds the future of our community.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-5">
                        <RouterLink to="/menu"
                            class="btn-primary bg-forest-800 text-white px-10 py-5 rounded-2xl font-bold text-lg text-center flex items-center justify-center gap-3">
                            Explore Menu
                            <i class="fas fa-chevron-right text-xs text-gold-400"></i>
                        </RouterLink>
                        <RouterLink to="/reservations"
                            class="inline-flex items-center justify-center border-2 border-forest-800/20 text-forest-800 hover:border-gold-400 hover:text-gold-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all text-center">
                            Book a Table
                        </RouterLink>
                    </div>

                    <div class="mt-16 pt-10 border-t border-forest-800/10 flex items-center gap-12 flex-wrap">
                        <div v-for="stat in stats" :key="stat.id">
                            <p class="font-heading text-3xl font-bold text-forest-800">{{ stat.value }}</p>
                            <p class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{{ stat.label }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="relative lg:h-[700px] flex items-center justify-center">
                    <div class="relative w-full max-w-md lg:max-w-none lg:h-full z-20">
                        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop"
                            alt="Exquisite Bengali plating"
                            class="w-full h-full object-cover rounded-[60px] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            loading="eager" width="710" height="700" />

                        <div
                            class="absolute -bottom-10 -left-10 md:-left-20 bg-white/80 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl border border-white/20 max-w-[280px] hidden md:block animate-bounce-slow">
                            <div class="flex gap-4 items-center">
                                <div
                                    class="w-12 h-12 bg-forest-800 rounded-2xl flex items-center justify-center shadow-lg">
                                    <i class="fas fa-heart text-gold-400"></i>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Mission
                                    </p>
                                    <p class="text-sm font-semibold text-forest-800">Feeding 40 kids at Al-Islah House
                                        today</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-gold-400/20 rounded-full -z-10 animate-spin-slow">
                    </div>

                    <div
                        class="absolute -top-12 -left-12 w-48 h-48 rounded-3xl overflow-hidden border-8 border-white shadow-2xl hidden xl:block z-30 -rotate-6">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop"
                            alt="Dish detail" class="w-full h-full object-cover" loading="lazy" width="880"
                            height="880" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.btn-primary {
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 168, 67, 0.35);
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes bounce-slow {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

.animate-spin-slow {
    animation: spin-slow 12s linear infinite;
}

.animate-bounce-slow {
    animation: bounce-slow 4s ease-in-out infinite;
}

.fade-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>