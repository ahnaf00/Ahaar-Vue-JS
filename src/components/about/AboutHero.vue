<script setup>

</script>

<template>
    <header class="py-24 md:py-32 bg-white relative overflow-hidden -mt-28 pt-48">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="max-w-xl animate-fade-up">
                    <span class="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">Our Mission</span>
                    <h1 class="font-heading text-5xl md:text-7xl text-forest-800 font-bold mt-6 leading-tight">
                        Beyond the<br>
                        <span class="text-gold-400 italic">Ordinary Dining</span>
                    </h1>
                    <p class="text-xl text-gray-600 mt-8 font-light leading-relaxed">
                        Ahaar was founded on a simple belief — a restaurant should be a pillar of its
                        community. We don't just serve food; we serve hope, dignity, and heritage.
                    </p>
                </div>

                <div class="relative hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"
                        alt="Chef with team" class="w-full h-[500px] object-cover rounded-[60px] shadow-2xl"
                        loading="eager" width="1000" height="500" />
                    <div
                        class="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.animate-fade-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>