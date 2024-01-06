<script setup>
// imports
import {RouterLink} from 'vue-router';
import {onMounted, ref} from "vue";

// global variables
let scrollPosition = null;
let mobileView = ref(false);

// change color on scroll event
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

// navbar function
function makeMobile() {
  mobileView.value = true;
  document.querySelector(".logo").classList.add("hidden");
  const container = document.querySelector(".container");
  const items = document.querySelectorAll(".nav-content");
  items.forEach((item) => {
    item.classList.toggle("desktop-view");
  });
  container.classList.toggle("header-mobile");
}

function reset() {
  mobileView.value = false;
  document.querySelector(".logo").classList.remove("hidden");
  const container = document.querySelector(".container");
  const items = document.querySelectorAll(".nav-content");
  items.forEach((item) => {
    item.classList.add("desktop-view");
  });
  container.classList.remove("header-mobile");
}

// event listener on mount
onMounted(() => {
  window.addEventListener('scroll', updateScroll);
})
</script>

<template>
  <div class="header no-blur">
    <div class="container">
      <nav class="grid">
        <div class="logo">
          <RouterLink :to="{ name: 'Home' }">
          </RouterLink>
        </div>
        <div class="nav-content desktop-view">
          <ul class="links">
            <li @click="reset">
              <a href="/#sexualtherapie">Sexualberatung & Therapie</a>
            </li>
            <li @click="reset">
              <a href="/#sexualped">Sexualpädagogik</a>
            </li>
            <li @click="reset">
              <a href="/#workshops">Workshops</a>
            </li>
            <li @click="reset">
              <a href="/#uebermich">über mich</a>
            </li>
          </ul>
        </div>
        <div class="nav-content desktop-view">
          <ul class="social">
            <li @click="reset">
            </li>
          </ul>
        </div>
      </nav>
      <div v-if="!mobileView" id="hamburger" class="hamburger" @click="makeMobile">
        <img src="@/assets/img/icons/menu.svg" width="30" height="30" alt="open menu">
      </div>
      <div v-else id="cross" class="cross" @click="reset">
        <img src="@/assets/img/icons/cross.svg" width="28" height="28" alt="close menu">
      </div>
    </div>
  </div>
</template>

<style scoped>

/* Tags */
li {
  list-style: none;
  padding: 4px 0;
  margin: 0 15px;
  transition: all .5s ease-in-out;
  letter-spacing: 0;
  float: left;
}

ul {
  margin-bottom: 1rem;
  margin-top: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 40px;
}

nav {
  float: right;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  transition: 0.4s;
  color: var(--kelepar-color-white);
}

nav a:hover {
  text-decoration: none;
  color: var(--kelepar-color-orange);
}

nav a:active {
  color: var(--kelepar-color-orange);
}

/* Classes */
.header {
  left: 0;
  width: 100%;
  position: fixed;
  top: 0;
  transition: all .5s cubic-bezier(.87, 0, .13, 1);
  z-index: 10;
  margin: 0 auto;
}

.no-blur {
  background: linear-gradient(180deg, rgba(16, 15, 33, 1.0) 0%, rgba(16, 15, 33, 0) 100%);
  transition: all .3s cubic-bezier(.87, 0, .13, 1);
  height: 200px;
  padding: 45px 0;
}

.blur {
  background: rgba(16, 15, 33, 0.95);
  transition: all .3s cubic-bezier(.87, 0, .13, 1);
  height: 100px;
  padding: 15px 0;
}

.grid {
  display: grid;
  justify-content: center;
  place-content: center;
  grid-template-columns: 72px auto 310px auto;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  place-items: center;
  flex-wrap: wrap;
}

.logo {
  float: left;
}

.play {
  margin: 6px auto;
  padding: 0 0 0 80px;
}

.social {
  padding: 0 0 0 80px;
  margin-left: 25px;
}

.social a {
  color: var(--kelepar-color-white);
  text-align: left;
  transition: 0.4s;
}

.social a:hover {
  text-decoration: none;
  color: var(--kelepar-color-orange);
}

.social li {
  display: flex;
  margin: 0;
}

@media (max-width: 1458px) {
  .links {
    margin-block-start: 0;
  }
}

/**********/
/* MOBILE */
/**********/

.hamburger {
  opacity: 0;
  cursor: pointer;
  background: transparent;
  top: 0;
  right: 0;
  color: var(--kelepar-color-white);
  width: 30px;
  height: auto;
  position: absolute;
  margin: 40px 20px;
}

.cross {
  cursor: pointer;
  background: transparent;
  top: 0;
  right: 0;
  color: var(--kelepar-color-orange);
  width: 30px;
  height: auto;
  position: absolute;
  margin: 40px 20px;
}

@media (max-width: 1200px) {

  li {
    margin: 15px 15px;
  }

  .header-mobile {
    background: rgba(16, 15, 33, 0.97);
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @supports (backdrop-filter: blur(1rem)) {
    .header-mobile {
      background: rgba(16, 15, 33, 0.5);
      backdrop-filter: blur(1rem);
    }
  }

  .grid {
    display: flex;
    justify-content: center;
    place-content: center;
    flex-direction: column;
    grid-template-columns: none;
  }

  .hamburger {
    opacity: 1;
  }

  .hidden {
    opacity: 0;
  }

  .links,
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    place-content: center;
    flex-direction: column;
  }

  .logo {
    float: none;
  }

  .no-blur {
    padding: 25px 0;
    height: 120px;
  }

  .desktop-view {
    display: none;
  }

  .blur {
    padding: 12px 0;
    height: 94px;
  }

  .links,
  .play,
  .social {
    padding: 0;
  }

  .play {
    margin: 15px auto;
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    place-content: center;
    flex-direction: row;
    margin-left: 0;
  }
}
</style>