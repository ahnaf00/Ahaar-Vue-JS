<script setup>
import GalleryItemCard from './GalleryItemCard.vue';

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

defineEmits(['open'])
</script>

<template>
  <section class="py-16 bg-cream-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        <GalleryItemCard v-for="item in items" :key="item.id" :item="item" @open="$emit('open', item)" />
      </div>
    </div>
  </section>
</template>