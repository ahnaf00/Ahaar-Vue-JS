<script setup>
import { ref } from 'vue'

defineProps({
    images: { type: Array, required: true },
})

const activeIndex = ref(0)
</script>

<template>
    <div class="space-y-6">
        <!-- Active main image -->
        <div class="rounded-[40px] overflow-hidden shadow-2xl">
            <img :src="images[activeIndex].src" :alt="images[activeIndex].alt"
                class="w-full h-[500px] object-cover transition-all duration-500" loading="eager" width="1200"
                height="500" />
        </div>

        <!-- Thumbnail row -->
        <div class="grid grid-cols-3 gap-4">
            <button v-for="(img, index) in images" :key="img.id" class="rounded-2xl overflow-hidden h-32 transition-all"
                :class="activeIndex === index
                    ? 'opacity-100 ring-2 ring-gold-400'
                    : 'opacity-60 hover:opacity-100'" :aria-label="`View image ${index + 1}`" @click="activeIndex = index">
                <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover" loading="lazy" width="400"
                    height="128" />
            </button>
        </div>
    </div>
</template>
