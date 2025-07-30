<template>
  <button @click="toggleTheme" class="theme-switcher" :title="themeTitle">
    <svg v-if="isDark" class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    <svg v-else class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const isDark = ref(false);

const themeTitle = computed(() => {
  return isDark.value ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

function toggleTheme() {
  isDark.value = !isDark.value;
  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = prefersDark;
  }
  
  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
});
</script>

<style scoped>
.theme-switcher {
  background: var(--kelepar-color-neutral);
  border: 2px solid var(--kelepar-color-main);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--kelepar-color-main);
  box-shadow: var(--box-shadow);
}

.theme-switcher:hover {
  background: var(--kelepar-color-main);
  color: var(--kelepar-color-neutral);
  transform: scale(1.1);
}

.sun-icon, .moon-icon {
  transition: transform 0.3s ease;
}

.theme-switcher:hover .sun-icon {
  transform: rotate(180deg);
}

.theme-switcher:hover .moon-icon {
  transform: rotate(-180deg);
}
</style> 