<script setup>

</script>

<template>
    <!-- Navigation -->
    <nav
        class="sticky top-8 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-cream-100 mx-4 sm:mx-8 lg:mx-12 rounded-2xl mt-4">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <router-link to="/" class="flex items-center gap-2 group">
                    <div
                        class="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center group-hover:bg-forest-700 transition-colors">
                        <span class="text-gold-400 font-heading text-xl font-bold">A</span>
                    </div>
                    <div>
                        <span class="text-forest-800 font-heading text-2xl font-bold tracking-tight">Ahaar</span>
                        <p class="text-[9px] text-gray-400 -mt-1 tracking-widest uppercase hidden sm:block">Every meal,
                            a mission</p>
                    </div>
                </router-link>

                <div class="hidden md:flex items-center gap-8">
                    <router-link to="/"  class="nav-link text-forest-800 font-semibold text-sm tracking-wide">Home</router-link>
                    <router-link to="/menu" class="nav-link text-gray-600 hover:text-forest-800 font-medium text-sm tracking-wide">Menu</router-link>
                    <router-link to="/about" class="nav-link text-gray-600 hover:text-forest-800 font-medium text-sm tracking-wide">About</router-link>
                    <router-link to="/impact" class="nav-link text-gray-600 hover:text-forest-800 font-medium text-sm tracking-wide">Impact</router-link>
                    <router-link to="/gallery" class="nav-link text-gray-600 hover:text-forest-800 font-medium text-sm tracking-wide">Gallery</router-link>
                    <router-link class="btn-primary bg-gold-400 hover:bg-gold-500 text-forest-900 px-6 py-2.5 rounded-xl font-bold text-sm">Book a Table</router-link>
                    <!-- </a> -->
                </div>

                <button id="mobileMenuBtn" class="md:hidden p-2 text-forest-800">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu Placeholder -->
        <div id="mobileMenu"
            class="hidden md:hidden bg-white rounded-b-2xl border-t border-cream-100 p-6 space-y-4 shadow-xl">
            <router-link to="/" class="block font-semibold text-forest-800">Home</router-link>
            <router-link to="/menu" class="block text-gray-600">Menu</router-link>
            <router-link to="/about" class="block text-gray-600">About</router-link>
            <router-link to="/impact" class="block text-gray-600">Impact</router-link>
            <router-link to="/gallery" class="block text-gray-600">Gallery</router-link>
            <router-link class="block bg-gold-400 text-forest-900 text-center py-3 rounded-xl font-bold">Book a Table</router-link>
        </div>
    </nav>
</template>

<style scoped></style>