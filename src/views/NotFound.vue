<template>
  <main>
    <div class="notfound-container">
      <div class="notfound-background">
        <div class="bg-circle bg-circle-1"></div>
        <div class="bg-circle bg-circle-2"></div>
        <div class="bg-circle bg-circle-3"></div>
        <div class="bg-square bg-square-1"></div>
        <div class="bg-square bg-square-2"></div>
      </div>
      <div class="notfound-content">
        <h1>404</h1>
        <h2>Seite nicht gefunden</h2>
        <p>Die angeforderte Seite existiert leider nicht.</p>
        <RouterLink class="btn1 back-btn" to="/">Zurück zur Startseite</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.notfound-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--kelepar-color-second);
  position: relative;
  overflow: hidden;
}

.notfound-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--kelepar-color-highlight-one), var(--kelepar-color-highlight-two));
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.bg-circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 15%;
  animation-delay: 0s;
}

.bg-circle-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 10%;
  animation-delay: 2s;
}

.bg-circle-3 {
  width: 100px;
  height: 100px;
  top: 60%;
  right: 25%;
  animation-delay: 4s;
}

.bg-square {
  position: absolute;
  background: linear-gradient(45deg, var(--kelepar-color-main), var(--kelepar-color-highlight-one));
  opacity: 0.08;
  animation: rotate 8s linear infinite;
}

.bg-square-1 {
  width: 80px;
  height: 80px;
  top: 30%;
  left: 20%;
  transform: rotate(45deg);
  animation-delay: 1s;
}

.bg-square-2 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  right: 30%;
  transform: rotate(45deg);
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}

.notfound-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 3rem 2rem;
  position: relative;
  z-index: 2;
}

.notfound-content h1 {
  font-size: 8rem;
  font-weight: 700;
  color: var(--kelepar-color-highlight-one);
  margin-bottom: 1rem;
  line-height: 1;
}

.notfound-content h2 {
  font-size: var(--h2-desktop);
  color: var(--kelepar-color-main);
  font-weight: 600;
  margin-bottom: 1rem;
}

.notfound-content p {
  font-size: 1.3em;
  color: var(--kelepar-color-black);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.back-btn {
  font-size: 1.2em;
  padding: 1em 2.5em;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px 0 rgba(91, 66, 243, 0.3);
}

@media (max-width: 900px) {
  .notfound-content h1 {
    font-size: 6rem;
  }
  
  .notfound-content h2 {
    font-size: var(--h3-desktop);
  }
  
  .notfound-content p {
    font-size: 1.1em;
  }
  
  .back-btn {
    font-size: 1.1em;
    padding: 0.9em 2em;
  }
  
  .bg-circle-1 {
    width: 150px;
    height: 150px;
  }
  
  .bg-circle-2 {
    width: 100px;
    height: 100px;
  }
  
  .bg-circle-3 {
    width: 80px;
    height: 80px;
  }
  
  .bg-square-1 {
    width: 60px;
    height: 60px;
  }
  
  .bg-square-2 {
    width: 40px;
    height: 40px;
  }
}
</style>