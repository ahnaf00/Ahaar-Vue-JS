<script setup>
import ImpactBar from '../components/common/ImpactBar.vue';
import TheFooter from '../components/common/TheFooter.vue';
import TheNavbar from '../components/common/TheNavbar.vue';


</script>

<template>
    <ImpactBar></ImpactBar>
    <TheNavbar></TheNavbar>
    <main class="flex-1">
        <RouterView></RouterView>
    </main>
    <TheFooter></TheFooter>
</template>

<style scoped>

</style>