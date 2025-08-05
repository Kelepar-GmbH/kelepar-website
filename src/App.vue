<script setup>
import {RouterView} from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ErrorBoundary from "@/components/ErrorBoundary.vue";
import GlobalErrorNotification from "@/components/GlobalErrorNotification.vue";
</script>

<template>
  <ErrorBoundary context="app-header">
    <header>
      <HeaderComponent/>
    </header>
  </ErrorBoundary>
  
  <ErrorBoundary context="app-main">
    <RouterView/>
  </ErrorBoundary>
  
  <ErrorBoundary context="app-footer">
    <footer>
      <FooterComponent/>
    </footer>
  </ErrorBoundary>
  
  <!-- Global error notifications -->
  <GlobalErrorNotification />
</template>

<style scoped>
</style>