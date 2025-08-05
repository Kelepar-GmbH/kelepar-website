<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const companies = [
  {
    name: 'BSI',
    logo: new URL('../assets/img/reference_logos/bsi.svg', import.meta.url).href,
    url: 'https://www.bsi-software.com'
  },
  {
    name: 'CSS',
    logo: new URL('../assets/img/reference_logos/css.svg', import.meta.url).href,
    url: 'https://www.css.ch'
  },
  {
    name: 'Valus',
    logo: new URL('../assets/img/reference_logos/valus.png', import.meta.url).href,
    url: 'https://www.valus.ch'
  },
  // {
  //   name: 'Swiss Life',
  //   logo: new URL('../assets/img/reference_logos/swiss-life.svg', import.meta.url).href,
  //   url: 'https://www.swisslife.ch'
  // },
  {
    name: 'Ashen Horizon',
    logo: new URL('../assets/img/reference_logos/ah.png', import.meta.url).href,
    url: 'https://www.ashenhorizon.com'
  },
  {
    name: 'OEKK',
    logo: new URL('../assets/img/reference_logos/oekk.svg', import.meta.url).href,
    url: 'https://www.oekk.ch'
  },
  {
    name: 'Swica',
    logo: new URL('../assets/img/reference_logos/swica.svg', import.meta.url).href,
    url: 'https://www.swica.ch'
  },
  {
    name: 'Visana',
    logo: new URL('../assets/img/reference_logos/visana.svg', import.meta.url).href,
    url: 'https://www.visana.ch'
  },
  {
    name: 'Hornbach',
    logo: new URL('../assets/img/reference_logos/hornbach.svg', import.meta.url).href,
    url: 'https://www.hornbach.ch'
  }
];

const isPaused = ref(false);

const handleMouseEnter = () => {
  isPaused.value = true;
};

const handleMouseLeave = () => {
  isPaused.value = false;
};
</script>

<template>
  <section id="references" class="references-section">
    <div class="references-container">
      <div class="logo-showcase">
        <div 
          class="logo-track"
          :class="{ 'paused': isPaused }"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <!-- First set of logos -->
          <div 
            v-for="(company, index) in companies" 
            :key="`first-${index}`"
            class="logo-item"
          >
            <a 
              :href="company.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="logo-link"
              :title="`Visit ${company.name}`"
            >
              <div class="logo-wrapper">
                <img 
                  :src="company.logo" 
                  :alt="`${company.name} logo`"
                  class="logo-image"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
          
          <!-- Duplicate set for seamless loop -->
          <div 
            v-for="(company, index) in companies" 
            :key="`second-${index}`"
            class="logo-item"
          >
            <a 
              :href="company.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="logo-link"
              :title="`Visit ${company.name}`"
            >
              <div class="logo-wrapper">
                <img 
                  :src="company.logo" 
                  :alt="`${company.name} logo`"
                  class="logo-image"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.references-section {
  padding: 3rem 0;
  background: linear-gradient(135deg, var(--kelepar-color-neutral) 0%, var(--kelepar-color-second) 100%);
  overflow: hidden;
}

.references-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo-showcase {
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;
}

.logo-track {
  display: flex;
  align-items: center;
  height: 100%;
  animation: scroll 30s linear infinite;
  width: max-content;
}

.logo-track.paused {
  animation-play-state: paused;
}

.logo-item {
  flex-shrink: 0;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-link {
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-link:hover {
  transform: translateY(-2px);
}

.logo-wrapper {
  width: 140px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--kelepar-color-neutral);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(99, 102, 241, 0.08);
}

.logo-link:hover .logo-wrapper {
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.2);
  transform: scale(1.05);
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.7);
  transition: all 0.3s ease;
}

.logo-link:hover .logo-image {
  filter: grayscale(0%) opacity(1);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .references-section {
    padding: 2rem 0;
  }
  
  .logo-showcase {
    height: 100px;
  }
  
  .logo-wrapper {
    width: 120px;
    height: 70px;
    padding: 0.75rem;
  }
  
  .logo-item {
    padding: 0 1.5rem;
  }
  
  /* SVG logos always colored on mobile */
  .logo-image {
    filter: grayscale(0%) opacity(1) !important;
  }
}

@media (max-width: 480px) {
  .logo-showcase {
    height: 80px;
  }
  
  .logo-wrapper {
    width: 100px;
    height: 60px;
    padding: 0.5rem;
  }
  
  .logo-item {
    padding: 0 1rem;
  }
}

/* Dark theme adjustments */

[data-theme="dark"] .logo-wrapper {
  background: var(--kelepar-color-main);
  border-color: rgba(99, 102, 241, 0.15);
}

[data-theme="dark"] .logo-link:hover .logo-wrapper {
  border-color: rgba(99, 102, 241, 0.3);
}
</style> 