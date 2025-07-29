<template>
  <div class="nav-content">
    <ul class="links">
      <li @click="setLanguage('de')"
          :class="locale === 'de' ? activeClass : inactiveClass">
        <a href="/#aboutus">DE</a>
      </li>
      <li @click="setLanguage('en')"
          :class="locale === 'en' ? activeClass : inactiveClass">
        <a>EN</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useI18n} from 'vue-i18n'

const {locale} = useI18n()

const activeClass = 'underline text-blue-600 dark:text-blue-400'
const inactiveClass = 'hover:underline hover:text-blue-500 dark:hover:text-blue-300'

function setLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>