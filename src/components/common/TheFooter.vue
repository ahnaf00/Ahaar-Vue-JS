<script setup>

</script>

<template>
    <!-- Footer -->
    <footer class="bg-forest-900 pt-20 pb-10 text-white/60">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
                <!-- Column 1 -->
                <div class="lg:col-span-1">
                    <a href="home.html" class="flex items-center gap-2 mb-8">
                        <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                            <span class="text-gold-400 font-heading text-2xl font-bold">A</span>
                        </div>
                        <span class="text-white font-heading text-3xl font-bold">Ahaar</span>
                    </a>
                    <p class="text-sm leading-relaxed mb-8 max-w-xs">
                        A modern restaurant experience in the heart of Dhaka, where culinary excellence meets social
                        responsibility.
                    </p>
                    <div class="flex gap-4">
                        <a href="#"
                            class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-forest-900 transition-all"><i
                                class="fab fa-facebook-f"></i></a>
                        <a href="#"
                            class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-forest-900 transition-all"><i
                                class="fab fa-instagram"></i></a>
                        <a href="#"
                            class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold-400 hover:text-forest-900 transition-all"><i
                                class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <!-- Column 2 -->
                <div>
                    <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-xs">Explore</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="menu.html" class="hover:text-gold-400 transition-colors">Full Menu</a></li>
                        <li><a href="impact.html" class="hover:text-gold-400 transition-colors">Our Impact</a></li>
                        <li><a href="about.html" class="hover:text-gold-400 transition-colors">Our Story</a></li>
                        <li><a href="gallery.html" class="hover:text-gold-400 transition-colors">Photo Gallery</a></li>
                        <li><a href="reservations.html" class="hover:text-gold-400 transition-colors">Reservations</a>
                        </li>
                    </ul>
                </div>
                <!-- Column 3 -->
                <div>
                    <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h4>
                    <ul class="space-y-4 text-sm">
                        <li class="flex gap-3"><i class="fas fa-location-dot text-gold-400 mt-1"></i> 42 Gulshan Avenue,
                            <br> Dhaka 1212</li>
                        <li class="flex gap-3"><i class="fas fa-phone text-gold-400 mt-1"></i> +880 1XXX-XXXXXX</li>
                        <li class="flex gap-3"><i class="fas fa-envelope text-gold-400 mt-1"></i> hello@ahaar-dhaka.com
                        </li>
                    </ul>
                </div>
                <!-- Column 4 -->
                <div>
                    <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-xs">Opening Hours</h4>
                    <ul class="space-y-4 text-sm">
                        <li class="flex justify-between"><span>Sat — Thu</span> <span>11 AM — 11 PM</span></li>
                        <li class="flex justify-between"><span>Friday</span> <span>1 PM — 11 PM</span></li>
                        <li class="mt-6">
                            <span
                                class="text-[10px] text-gold-400 font-bold uppercase block mb-2 tracking-widest">Impact
                                Newsletter</span>
                            <form class="flex gap-2">
                                <input type="email" placeholder="Your email"
                                    class="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs w-full focus:border-gold-400 outline-none" />
                                <button class="bg-gold-400 text-forest-900 px-4 py-2 rounded-lg font-bold text-xs"><i
                                        class="fas fa-paper-plane"></i></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© 2026 Ahaar Restaurant. All rights reserved.</p>
                <p>Designed with <i class="fas fa-heart text-gold-400 mx-1"></i> for Dhaka's Community.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>