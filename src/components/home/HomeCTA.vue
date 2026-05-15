<script setup>
</script>

<template>
    <section class="pb-24 px-6 lg:px-8">
        <div class="max-w-7xl mx-auto bg-forest-800 rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden">
            <div class="absolute inset-0 opacity-10 pointer-events-none">
                <div
                    class="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full -translate-y-12 translate-x-12 blur-3xl">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-96 h-96 bg-gold-400 rounded-full translate-y-12 -translate-x-12 blur-3xl">
                </div>
            </div>

            <div class="relative z-10">
                <h2 class="font-heading text-4xl md:text-6xl text-white font-bold mb-8">
                    Your Next Meal Can<br>
                    <span class="text-gold-300 italic">Feed a Soul</span>
                </h2>
                <p class="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light">
                    Join us in our mission to make Dhaka better, one plate at a time. Taste the difference that purpose
                    makes.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <RouterLink to="/reservations"
                        class="btn-primary bg-gold-400 hover:bg-gold-500 text-forest-900 px-12 py-5 rounded-2xl font-bold text-lg">
                        Reserve Your Table
                    </RouterLink>
                    <RouterLink to="/contact"
                        class="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
                        Contact Us
                    </RouterLink>
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
</style>