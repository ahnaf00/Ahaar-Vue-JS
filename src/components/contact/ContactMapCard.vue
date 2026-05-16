<script setup>
</script>

<template>
    <div class="rounded-[40px] overflow-hidden shadow-xl h-80 relative group">
        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
            alt="Map View" class="w-full h-full object-cover" loading="lazy" width="1000" height="320" />
        <div class="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-all"></div>

        <div
            class="absolute bottom-6 left-6 right-6 p-6 bg-white rounded-3xl shadow-2xl flex items-center justify-between">
            <div>
                <h5 class="font-bold text-forest-800 text-sm">42 Gulshan Avenue</h5>
                <p class="text-xs text-gray-400">Road 12, Dhaka 1212</p>
            </div>
            <a href="#" class="w-10 h-10 bg-forest-800 text-gold-400 rounded-xl flex items-center justify-center">
                <i class="fas fa-directions"></i>
            </a>
        </div>
    </div>
</template>