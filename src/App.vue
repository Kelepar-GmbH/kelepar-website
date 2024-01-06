<script setup>
import {RouterView} from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <header>
    <HeaderComponent/>
  </header>
  <RouterView/>
  <footer>
    <FooterComponent/>
  </footer>
</template>

<style scoped>
</style>