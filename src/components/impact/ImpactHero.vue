<script setup>
</script>

<template>
    <header class="py-24 md:py-32 bg-forest-900 relative overflow-hidden -mt-28 pt-48">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div class="max-w-3xl mx-auto animate-fade-up">
                <span class="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm">Transparency First</span>
                <h1 class="font-heading text-5xl md:text-7xl text-white font-bold mt-6 leading-tight">
                    Every Plate <br>
                    <span class="text-gold-400 italic">Tells a Story</span>
                </h1>
                <p class="text-xl text-white/60 mt-8 font-light leading-relaxed">
                    At Ahaar, we believe that sharing our success is just as important as sharing our food.
                    Explore the tangible difference your support makes in Dhaka's community.
                </p>
            </div>
        </div>

        <div class="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"
                alt="Children smiling" class="w-full h-full object-cover" loading="eager" width="1920" height="900" />
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