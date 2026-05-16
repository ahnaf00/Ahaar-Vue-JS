<script setup>

</script>


<template>
    <section class="py-24 bg-white text-center">
        <div class="max-w-3xl mx-auto px-6">
            <h2 class="font-heading text-4xl text-forest-800 font-bold mb-6">Be Part of the Story</h2>
            <p class="text-gray-500 mb-10 text-lg">
                We are always looking for passionate individuals who believe in the power of service.
                Join our team of culinary and social impact professionals.
            </p>
            <RouterLink to="/contact"
                class="btn-primary inline-block bg-forest-800 text-white px-12 py-4 rounded-2xl font-bold hover:bg-forest-700 transition-all">
                View Open Positions
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
.btn-primary {
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(27, 67, 50, 0.3);
}
</style>