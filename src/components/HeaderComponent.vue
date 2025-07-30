<script setup>
// imports
import { RouterLink } from 'vue-router';
import { onMounted, ref } from "vue";
import { useI18n } from 'vue-i18n'
import ThemeSwitcherComponent from './ThemeSwitcherComponent.vue';

const { locale } = useI18n()
const mobileView = ref(false);

function openMobileMenu() {
  mobileView.value = true;
}
function closeMobileMenu() {
  mobileView.value = false;
}
function setLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
  closeMobileMenu();
}

// Optional: Scroll-Header-Blur (kann später optimiert werden)
let scrollPosition = null;
function updateScroll() {
  scrollPosition = window.scrollY;
  const header = document.querySelector(".header");
  if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
    header.classList.remove("no-blur");
    header.classList.add("blur");
  } else {
    header.classList.remove("blur");
    header.classList.add("no-blur");
  }
}
onMounted(() => {
  window.addEventListener('scroll', updateScroll);
})
</script>

<template>
  <div class="header no-blur">
    <div class="container">
      <nav class="header-nav">
        <!-- Logo -->
        <div class="logo">
          <RouterLink :to="{ name: 'Home' }">
            <img src="@/assets/img/logos/kelepar_k.png" width="60" height="60" alt="Kelepar Logo">
          </RouterLink>
        </div>
        <!-- Desktop Navigation -->
        <ul class="nav-links desktop-only">
          <li><a href="/#aboutus">{{ $t('aboutus') }}</a></li>
          <li><a href="/#team">{{ $t('team') }}</a></li>
          <li><a href="/#competences">{{ $t('competences') }}</a></li>
        </ul>
        <div class="nav-cta desktop-only">
          <RouterLink class="btn1" to="/contact">{{ $t('contact') }}</RouterLink>
        </div>
        <div class="nav-controls desktop-only">
          <ThemeSwitcherComponent />
          <div class="lang-switch">
            <button :class="locale === 'de' ? 'active' : ''" @click="setLanguage('de')">DE</button>
            <button :class="locale === 'en' ? 'active' : ''" @click="setLanguage('en')">EN</button>
          </div>
        </div>
        <!-- Hamburger Icon (Mobile) -->
        <button class="hamburger mobile-only" @click="openMobileMenu" aria-label="Open menu">
          <img src="@/assets/img/icons/menu.svg" width="32" height="32" alt="Menu">
        </button>
      </nav>
    </div>
    <!-- Mobile Overlay Navigation -->
    <div v-if="mobileView" class="mobile-menu-overlay">
      <div class="mobile-menu-content">
        <button class="close-btn" @click="closeMobileMenu" aria-label="Close menu">
          <img src="@/assets/img/icons/cross.svg" width="28" height="28" alt="Close">
        </button>
        <ul class="nav-links-mobile">
          <li><a href="/#aboutus" @click="closeMobileMenu">{{ $t('aboutus') }}</a></li>
          <li><a href="/#team" @click="closeMobileMenu">{{ $t('team') }}</a></li>
          <li><a href="/#competences" @click="closeMobileMenu">{{ $t('competences') }}</a></li>
        </ul>
        <RouterLink class="btn1 mobile-cta" to="/contact" @click="closeMobileMenu">{{ $t('contact') }}</RouterLink>
        <div class="mobile-controls">
          <ThemeSwitcherComponent />
          <div class="lang-switch-mobile">
            <button :class="locale === 'de' ? 'active' : ''" @click="setLanguage('de')">DE</button>
            <button :class="locale === 'en' ? 'active' : ''" @click="setLanguage('en')">EN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--kelepar-color-neutral);
  box-shadow: var(--box-shadow);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  transition: background 0.3s, box-shadow 0.3s;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.logo img {
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px 0 rgba(30, 34, 90, 0.08);
  background: var(--kelepar-color-neutral);
}
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links li a {
  color: var(--kelepar-color-main);
  font-weight: 500;
  font-size: 1.1em;
  text-decoration: none;
  padding: 0.5em 0.8em;
  border-radius: var(--border-radius);
  transition: background 0.2s, color 0.2s;
}
.nav-links li a:hover {
  background: var(--kelepar-color-highlight-two);
  color: #fff;
}
.nav-cta {
  margin-left: 1rem;
}
.nav-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.lang-switch {
  display: flex;
  gap: 0.5rem;
}
.lang-switch button {
  background: none;
  border: 1px solid var(--kelepar-color-main);
  color: var(--kelepar-color-main);
  border-radius: var(--border-radius);
  padding: 0.3em 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.lang-switch button.active,
.lang-switch button:hover {
  background: var(--kelepar-color-highlight-one);
  color: #fff;
  border-color: var(--kelepar-color-highlight-one);
}
.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3em;
}
.desktop-only {
  display: flex;
}
.mobile-only {
  display: none;
}
@media (max-width: 900px) {
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: flex !important;
  }
}
/* Mobile Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.mobile-menu-content {
  width: 90vw;
  max-width: 400px;
  background: var(--kelepar-color-neutral);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2em;
}
.nav-links-mobile {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  margin: 2.5rem 0 1.5rem 0;
  padding: 0;
  width: 100%;
  align-items: center;
}
.nav-links-mobile li a {
  color: var(--kelepar-color-main);
  font-weight: 600;
  font-size: 1.2em;
  text-decoration: none;
  padding: 0.7em 0.8em;
  border-radius: var(--border-radius);
  transition: background 0.2s, color 0.2s;
  width: 100%;
  display: block;
  text-align: center;
}
.nav-links-mobile li a:hover {
  background: var(--kelepar-color-highlight-two);
  color: #fff;
}
.mobile-cta {
  width: 100%;
  margin: 1.2rem 0 0.7rem 0;
  font-size: 1.1em;
  padding: 1em 0;
  border-radius: var(--border-radius);
  text-align: center;
}
.mobile-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.7rem;
}
.lang-switch-mobile {
  display: flex;
  gap: 0.7rem;
  justify-content: center;
}
.lang-switch-mobile button {
  background: none;
  border: 1px solid var(--kelepar-color-main);
  color: var(--kelepar-color-main);
  border-radius: var(--border-radius);
  padding: 0.3em 1.1em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.lang-switch-mobile button.active,
.lang-switch-mobile button:hover {
  background: var(--kelepar-color-highlight-one);
  color: #fff;
  border-color: var(--kelepar-color-highlight-one);
}
</style>