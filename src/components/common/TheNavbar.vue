<script setup>

</script>

<template>
    <!-- Navigation -->
    <nav
        class="sticky top-8 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-cream-100 mx-4 sm:mx-8 lg:mx-12 rounded-2xl mt-4">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <a href="home.html" class="flex items-center gap-2 group">
                    <div
                        class="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center group-hover:bg-forest-700 transition-colors">
                        <span class="text-gold-400 font-heading text-xl font-bold">A</span>
                    </div>
                    <div>
                        <span class="text-forest-800 font-heading text-2xl font-bold tracking-tight">Ahaar</span>
                        <p class="text-[9px] text-gray-400 -mt-1 tracking-widest uppercase hidden sm:block">Every meal,
                            a mission</p>
                    </div>
                </a>

                <div class="hidden md:flex items-center gap-8">
                    <router-link to="home"  class="nav-link text-forest-800 font-semibold text-sm tracking-wide">Home</router-link>
                    <!-- <a href="menu.html">Menu</a> -->
                    <router-link to="menu" class="nav-link text-gray-600 hover:text-forest-800 font-medium text-sm tracking-wide">Menu</router-link>
                    <!-- <a href="about.html">About</a> -->
                     <router-link class="nav-link text-gray-600 hover:text-forest-800 font-medium text-sm tracking-wide">About</router-link>
                    <!-- <a href="impact.html" >Impact</a> -->
                    <router-link class="nav-link text-gray-600 hover:text-forest-800 font-medium text-sm tracking-wide">Impact</router-link>
                    <!-- <a href="reservations.html"> -->
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
            <a href="home.html" class="block font-semibold text-forest-800">Home</a>
            <a href="menu.html" class="block text-gray-600">Menu</a>
            <a href="about.html" class="block text-gray-600">About</a>
            <a href="impact.html" class="block text-gray-600">Impact</a>
            <a href="reservations.html"
                class="block bg-gold-400 text-forest-900 text-center py-3 rounded-xl font-bold">Book a Table</a>
        </div>
    </nav>
</template>

<style scoped></style>