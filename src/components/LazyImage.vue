<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  },
  placeholder: {
    type: String,
    default: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4='
  },
  lazy: {
    type: Boolean,
    default: true
  }
})

const imageRef = ref(null)
const isLoaded = ref(false)
const isError = ref(false)
const currentSrc = ref(props.lazy ? props.placeholder : props.src)

const handleLoad = () => {
  isLoaded.value = true
}

const handleError = () => {
  isError.value = true
}

onMounted(() => {
  if (!props.lazy) {
    return
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSrc.value = props.src
          observer.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '50px'
    })

    if (imageRef.value) {
      observer.observe(imageRef.value)
    }
  } else {
    // Fallback for browsers without IntersectionObserver
    currentSrc.value = props.src
  }
})
</script>

<template>
  <div class="lazy-image-wrapper">
    <img
      ref="imageRef"
      :src="currentSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :class="{
        'lazy-loading': lazy && !isLoaded && !isError,
        'lazy-loaded': lazy && isLoaded,
        'lazy-error': isError
      }"
      @load="handleLoad"
      @error="handleError"
    />
    <div v-if="lazy && !isLoaded && !isError" class="loading-placeholder">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  display: inline-block;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.lazy-loading {
  opacity: 0.6;
}

.lazy-loaded {
  opacity: 1;
}

.lazy-error {
  opacity: 0.5;
  filter: grayscale(100%);
}

.loading-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-top: 2px solid var(--kelepar-color-highlight-one);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>