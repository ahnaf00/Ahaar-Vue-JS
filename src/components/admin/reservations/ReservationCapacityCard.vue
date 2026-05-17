<script setup>
</script>

<template>
    <section class="bg-forest-900 rounded-[32px] p-6 text-white shadow-xl">
        <div class="flex items-center justify-between gap-3 mb-6">
            <div>
                <p class="text-xs uppercase tracking-[0.2em] text-gold-300 font-bold">Floor Capacity</p>
                <h2 class="font-heading text-2xl font-bold mt-2">Tonight's seating outlook</h2>
            </div>
            <div class="w-14 h-14 rounded-2xl bg-white/10 text-gold-400 flex items-center justify-center">
                <i class="fas fa-chair text-xl"></i>
            </div>
        </div>

        <div class="space-y-4">
            <div class="rounded-3xl bg-white/5 border border-white/10 p-4">
                <div class="flex items-center justify-between gap-3 mb-2">
                    <span class="text-sm text-white/70">Main Hall</span>
                    <span class="font-semibold text-gold-300">78%</span>
                </div>
                <div class="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div class="h-full w-[78%] bg-gold-400 rounded-full"></div>
                </div>
            </div>

            <div class="rounded-3xl bg-white/5 border border-white/10 p-4">
                <div class="flex items-center justify-between gap-3 mb-2">
                    <span class="text-sm text-white/70">Private Rooms</span>
                    <span class="font-semibold text-gold-300">66%</span>
                </div>
                <div class="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div class="h-full w-[66%] bg-gold-400 rounded-full"></div>
                </div>
            </div>

            <div class="rounded-3xl bg-white/5 border border-white/10 p-4">
                <div class="flex items-center justify-between gap-3 mb-2">
                    <span class="text-sm text-white/70">Walk-in Buffer</span>
                    <span class="font-semibold text-gold-300">12 tables left</span>
                </div>
                <p class="text-xs text-white/50">Keep these available for same-day guests and charity partners.</p>
            </div>
        </div>
    </section>
</template>
