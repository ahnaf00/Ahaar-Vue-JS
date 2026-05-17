<script setup>
defineProps({
    dark: { type: Boolean, default: false },
})
</script>

<template>
    <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" aria-label="Ahaar logo"
            class="w-10 h-10 shrink-0">
            <rect width="44" height="44" rx="12" :fill="dark ? '#1a3a2a' : 'rgba(255,255,255,0.12)'" />
            <!-- Bowl -->
            <path d="M10 26 Q22 36 34 26" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <line x1="22" y1="36" x2="22" y2="38" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" />
            <line x1="16" y1="38" x2="28" y2="38" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" />
            <!-- Steam/flame -->
            <path d="M17 23 C17 19 21 20 20 16 C20 16 24 19 23 23" stroke="#C9A84C" stroke-width="2"
                stroke-linecap="round" fill="none" />
            <path d="M24 22 C24 19 27 20 26 17 C26 17 29 19 28 22" stroke="#C9A84C" stroke-width="1.5"
                stroke-linecap="round" fill="none" />
        </svg>

        <div>
            <p class="font-heading text-2xl font-bold leading-none" :class="dark ? 'text-forest-800' : 'text-white'">
                Ahaar
            </p>
            <p class="text-xs tracking-[0.2em] uppercase mt-0.5" :class="dark ? 'text-gold-500' : 'text-gold-300'">
                Admin Dashboard
            </p>
        </div>
    </div>
</template>