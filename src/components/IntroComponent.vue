<template>
  <section id="intro">
    <div class="hero-container">
      <div class="hero-background">
        <div class="bg-circle bg-circle-1"></div>
        <div class="bg-circle bg-circle-2"></div>
        <div class="bg-circle bg-circle-3"></div>
        <div class="bg-square bg-square-1"></div>
        <div class="bg-square bg-square-2"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <h1>{{ $t('hero.title') }}</h1>
          <p>{{ $t('hero.subtitle') }}</p>
          <RouterLink class="btn1 hero-cta" to="/contact">{{ $t('hero.cta') }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.hero-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--kelepar-color-second);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin-top: 5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.hero-background {
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

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 3rem 1.5rem;
  position: relative;
  z-index: 2;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}

.hero-text h1 {
  font-size: var(--h1-desktop);
  color: var(--kelepar-color-main);
  font-weight: 700;
  margin-bottom: 0.2em;
}

.hero-text p {
  font-size: 1.4em;
  color: var(--kelepar-color-black);
  margin-bottom: 1.2em;
  max-width: 600px;
  line-height: 1.6;
}

.hero-cta {
  font-size: 1.2em;
  padding: 1.2em 2.5em;
  border-radius: var(--border-radius);
  text-align: center;
  margin-top: 0.5em;
  transition: transform 0.2s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .hero-container {
    min-height: 70vh;
    margin-top: 3rem;
  }
  
  .hero-content {
    padding: 2rem 1rem;
  }
  
  .hero-text h1 {
    font-size: var(--h2-desktop);
  }
  
  .hero-text p {
    font-size: 1.2em;
  }
  
  .hero-cta {
    font-size: 1.1em;
    padding: 1em 2em;
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