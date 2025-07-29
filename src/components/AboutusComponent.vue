<template>
  <section id="aboutus">
    <div class="aboutus-container">
      <div class="aboutus-background">
        <div class="bg-gradient-circle bg-gradient-1"></div>
        <div class="bg-gradient-circle bg-gradient-2"></div>
        <div class="bg-gradient-circle bg-gradient-3"></div>
        <div class="bg-accent-line bg-accent-1"></div>
        <div class="bg-accent-line bg-accent-2"></div>
      </div>
      <div class="aboutus-content">
        <div class="aboutus-text">
          <h2>{{ $t('aboutus_section.title') }}</h2>
          <p>{{ $t('aboutus_section.text') }}</p>
          <RouterLink class="btn1 aboutus-cta" to="/contact">{{ $t('aboutus_section.cta') }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.aboutus-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 1rem;
  position: relative;
  overflow: hidden;
}

.aboutus-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: var(--kelepar-color-second);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.bg-gradient-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--kelepar-color-highlight-one), var(--kelepar-color-highlight-two));
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.bg-gradient-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 15%;
  animation-delay: 0s;
}

.bg-gradient-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 10%;
  animation-delay: 2s;
}

.bg-gradient-3 {
  width: 100px;
  height: 100px;
  top: 60%;
  right: 25%;
  animation-delay: 4s;
}

.bg-accent-line {
  position: absolute;
  background: linear-gradient(45deg, var(--kelepar-color-main), var(--kelepar-color-highlight-one));
  opacity: 0.08;
  animation: rotate 8s linear infinite;
}

.bg-accent-1 {
  width: 80px;
  height: 80px;
  top: 30%;
  left: 20%;
  transform: rotate(45deg);
  animation-delay: 1s;
}

.bg-accent-2 {
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

.aboutus-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
}

.aboutus-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}

.aboutus-text h2 {
  font-size: var(--h2-desktop);
  color: var(--kelepar-color-main);
  font-weight: 700;
  margin-bottom: 0.5em;
}

.aboutus-text p {
  font-size: 1.3em;
  color: var(--kelepar-color-black);
  margin-bottom: 1.5em;
  line-height: 1.7;
  max-width: 600px;
}

.aboutus-cta {
  font-size: 1.2em;
  padding: 1em 2.5em;
  text-align: center;
  display: inline-block;
  width: fit-content;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.aboutus-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px 0 rgba(91, 66, 243, 0.3);
}

@media (max-width: 900px) {
  .aboutus-content {
    padding: 3rem 1.5rem;
  }
  
  .aboutus-text h2 {
    font-size: var(--h3-desktop);
  }
  
  .aboutus-text p {
    font-size: 1.1em;
  }
  
  .aboutus-cta {
    font-size: 1.1em;
    padding: 0.9em 2em;
  }
  
  .bg-gradient-1 {
    width: 200px;
    height: 200px;
  }
  
  .bg-gradient-2 {
    width: 150px;
    height: 150px;
  }
  
  .bg-gradient-3 {
    width: 100px;
    height: 100px;
  }
  
  .bg-accent-1 {
    width: 250px;
  }
  
  .bg-accent-2 {
    width: 200px;
  }
}
</style>