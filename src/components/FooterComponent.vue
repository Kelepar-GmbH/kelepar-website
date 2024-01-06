<script setup>
import {RouterLink} from "vue-router";</script>

<template>
  <div class="container">
    <div class="footer-border content">
      <div class="text">
        <p>Made with ❤️ in Switzerland</p>
      </div>
      <div class="text d-inline-block">
        <p class="d-inline-block">© 2024 </p>
        <a class="footer-link d-inline-block" href="https://kelepar.com" target="_blank" aria-label="Link to Kelepar">Kelepar
          GmbH</a>
        <p class="d-inline-block"> All rights reserved.</p>
      </div>
      <div class="links">
        <RouterLink :to="{ name: 'About' }">About</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2 {
  font-size: 20px;
}

p {
  font-size: 16px;
  display: flex;
  place-content: center;
  align-items: center;
}

.container {
  padding: 40px 20px 10px 20px;
  background-color: var(--kelepar-color-neutral);
}

.footer-link {
  padding-left: 5px;
  padding-right: 5px;
  color: var(--kelepar-color-orange);
  text-decoration: none;
}

.content {
  min-width: auto;
  margin: 0 auto;
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;
}

.footer-border {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 1450px;
  padding: 30px 0;
}

.links a {
  color: var(--kelepar-color-orange);
  transition: 0.4s;
  padding: 15px 25px;
  text-decoration: none;
  text-align: left;
}

.social a {
  color: var(--kelepar-color-orange);
  text-align: left;
  transition: 0.4s;
}

.links a:hover,
.social a:hover {
  text-decoration: none;
  color: var(--kelepar-color-orange);
}

.text {
  padding: 5px 0 0 0;
  text-align: center;
}
</style>