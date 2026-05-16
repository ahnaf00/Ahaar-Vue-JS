<script setup>
</script>

<template>
    <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <div class="inline-flex items-center gap-2 bg-forest-800 text-gold-400 px-4 py-2 rounded-full mb-8">
                <i class="fas fa-shield-halved text-xs"></i>
                <span class="text-[10px] font-bold uppercase tracking-widest">Ahaar Transparency Guarantee</span>
            </div>

            <h2 class="font-heading text-4xl text-forest-800 font-bold mb-6 italic">
                We don't believe in hidden fine print.
            </h2>

            <p class="text-gray-600 text-lg leading-relaxed mb-10">
                Our books are open. We invite any of our regular patrons to join us on our Sunday meal
                delivery rounds. If you'd like to see the impact firsthand, please contact us for our
                community visit schedule.
            </p>

            <div class="flex justify-center gap-4">
                <RouterLink to="/contact"
                    class="btn-primary bg-forest-800 text-white px-10 py-4 rounded-2xl font-bold inline-block">
                    Join a Visit
                </RouterLink>
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