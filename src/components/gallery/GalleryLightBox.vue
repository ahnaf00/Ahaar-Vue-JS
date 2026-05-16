<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
})

defineEmits(['close'])

const categoryLabel = computed(() => {
  if (!props.item) return ''

  const labels = {
    culinary: 'Culinary Art',
    ambiance: 'The Ambiance',
    impact: 'Impact Giving',
  }

  return labels[props.item.category] || 'Gallery'
})
</script>


<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="item"
        class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-10"
        @click.self="$emit('close')">
        <div class="relative max-w-5xl w-full">
          <button type="button"
            class="absolute -top-14 right-0 text-white hover:text-gold-400 text-2xl transition-colors"
            aria-label="Close gallery image" @click="$emit('close')">
            <i class="fas fa-xmark"></i>
          </button>

          <div class="bg-white rounded-[32px] overflow-hidden shadow-2xl">
            <img :src="item.image" :alt="item.alt" class="w-full max-h-[75vh] object-cover" loading="eager" width="1400"
              height="900" />
            <div class="p-6 md:p-8">
              <h3 class="font-heading text-3xl text-forest-800 font-bold">{{ item.title }}</h3>
              <p class="text-sm uppercase tracking-widest font-bold text-gold-500 mt-2">
                {{ categoryLabel }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>