<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <section class="py-8 bg-cream-50 sticky top-28 z-40">
    <div class="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
      <div class="flex items-center justify-start md:justify-center gap-6 min-w-max">
        <button v-for="category in categories" :key="category.id" @click="$emit('update:modelValue', category.id)"
          class="pb-1 transition-colors" :class="modelValue === category.id
              ? 'text-forest-800 font-bold border-b-2 border-gold-400'
              : 'text-gray-400 font-semibold hover:text-forest-800'
            ">
          {{ category.label }}
        </button>
      </div>
    </div>
  </section>
</template>