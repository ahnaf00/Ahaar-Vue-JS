<script setup>
import { computed } from 'vue'
import AdminBrandLogo from '../../components/admin/login/AdminBrandLogo.vue';
import LoginForm from '../../components/admin/login/LoginForm.vue';

const year = computed(() => new Date().getFullYear())
</script>

<template>
    <div class="min-h-screen flex flex-col lg:flex-row font-body">

        <!-- Left brand panel (desktop only) -->
        <div
            class="hidden lg:flex lg:w-1/2 xl:w-[55%] relative flex-col justify-between p-12 bg-forest-900 overflow-hidden">
            <div class="absolute inset-0 bg-cover bg-center opacity-20"
                style="background-image: url('https://images.unsplash.com/photo-1567337710282-00832b415979?w=1400&q=80')"
                aria-hidden="true"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-forest-900/90 via-forest-900/80 to-forest-800/70"
                aria-hidden="true"></div>

            <div class="relative z-10">
                <AdminBrandLogo />
            </div>

            <div class="relative z-10 max-w-md">
                <blockquote class="font-heading text-3xl xl:text-4xl text-white font-bold leading-snug">
                    "Every plate served<br />is a promise kept."
                </blockquote>
                <p class="text-white/60 text-sm mt-4 leading-relaxed">
                    Manage your restaurant operations while staying true to Ahaar's mission — feeding families, funding
                    futures.
                </p>

                <div class="flex gap-6 mt-10">
                    <div class="text-center">
                        <p class="font-heading text-3xl font-bold text-gold-400">2,840</p>
                        <p class="text-xs text-white/50 mt-1 uppercase tracking-widest">Meals Shared</p>
                    </div>
                    <div class="w-px bg-white/10"></div>
                    <div class="text-center">
                        <p class="font-heading text-3xl font-bold text-gold-400">163</p>
                        <p class="text-xs text-white/50 mt-1 uppercase tracking-widest">Children Reached</p>
                    </div>
                    <div class="w-px bg-white/10"></div>
                    <div class="text-center">
                        <p class="font-heading text-3xl font-bold text-gold-400">৳52K+</p>
                        <p class="text-xs text-white/50 mt-1 uppercase tracking-widest">Donated</p>
                    </div>
                </div>
            </div>

            <p class="relative z-10 text-white/30 text-xs">© {{ year }} Ahaar. All rights reserved.</p>
        </div>

        <!-- Right login panel -->
        <div class="flex-1 flex items-center justify-center p-6 sm:p-12 bg-cream-50">
            <div class="w-full max-w-md">
                <div class="lg:hidden mb-10">
                    <AdminBrandLogo dark />
                </div>

                <div class="mb-8">
                    <p class="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold">Admin Portal</p>
                    <h1 class="font-heading text-4xl text-forest-800 font-bold mt-2">Welcome back</h1>
                    <p class="text-gray-500 text-sm mt-2">Sign in to manage orders, reservations and impact.</p>
                </div>

                <LoginForm />

                <p class="text-center text-xs text-gray-400 mt-8">
                    This portal is restricted to authorised Ahaar staff only.
                </p>
            </div>
        </div>
    </div>
</template>