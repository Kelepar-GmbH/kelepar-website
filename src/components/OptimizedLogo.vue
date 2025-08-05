<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'medium', // small, medium, large
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  alt: {
    type: String,
    default: 'Kelepar Logo'
  }
})

// Use the kelepar_k.png logo file
const logoSrc = new URL('../assets/img/logos/kelepar_k.png', import.meta.url).href

const sizeClasses = computed(() => {
  const sizes = {
    small: { width: '32px', height: '32px' },
    medium: { width: '60px', height: '60px' },
    large: { width: '120px', height: '120px' }
  }
  return sizes[props.size]
})
</script>

<template>
  <div 
    class="kelepar-logo"
    :style="{ width: sizeClasses.width, height: sizeClasses.height }"
    :class="`logo-${size}`"
  >
    <img 
      :src="logoSrc" 
      :alt="alt"
      loading="lazy"
      decoding="async"
      :width="parseInt(sizeClasses.width)"
      :height="parseInt(sizeClasses.height)"
    />
  </div>
</template>

<style scoped>
.kelepar-logo {
  display: inline-block;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.kelepar-logo:hover {
  transform: scale(1.05);
}

.kelepar-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Optimize rendering for small sizes */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  /* Force hardware acceleration */
  transform: translateZ(0);
  will-change: transform;
}

/* Size-specific optimizations */
.logo-small img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
}

.logo-medium img,
.logo-large img {
  image-rendering: auto;
}
</style>