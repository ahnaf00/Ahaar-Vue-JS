<script setup>
</script>

<template>
    <header class="py-24 md:py-32 bg-white text-center -mt-28 pt-48">
        <div class="max-w-3xl mx-auto px-6 animate-fade-up">
            <span class="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">Get In Touch</span>
            <h1 class="font-heading text-5xl md:text-6xl text-forest-800 font-bold mt-6 leading-tight">
                We'd Love to <br>
                <span class="text-gold-400 italic">Hear From You</span>
            </h1>
            <p class="text-lg text-gray-500 mt-6 font-light">
                Whether it's a catering inquiry, feedback, or just to say hello, our team is ready to assist.
            </p>
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