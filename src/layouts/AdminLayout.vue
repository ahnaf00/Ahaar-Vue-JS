<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AdminSidebar from '../components/admin/AdminSidebar.vue';
import AdminTopbar from '../components/admin/AdminTopbar.vue';

const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-cream-50 text-gray-800 lg:flex">
    <AdminSidebar :open="sidebarOpen" @close="sidebarOpen = false" />

    <div class="flex-1 min-w-0 lg:ml-72">
      <AdminTopbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="p-6 md:p-8 lg:p-10">
        <RouterView />
      </main>
    </div>
  </div>
</template>
