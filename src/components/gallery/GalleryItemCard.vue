<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

defineEmits(['open'])
</script>

<template>
  <button type="button"
    class="relative group rounded-[40px] overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 w-full text-left"
    @click="$emit('open', item)">
    <img :src="item.image" :alt="item.alt" class="w-full h-auto object-cover" loading="lazy" width="800"
      height="1000" />
    <div
      class="absolute inset-0 bg-forest-900/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center px-4 text-center">
      <span class="text-white font-heading text-2xl font-bold leading-tight">{{ item.title }}</span>
    </div>
  </button>
</template>