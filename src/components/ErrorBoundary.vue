<script setup>
import {onErrorCaptured, ref} from 'vue'
import {useErrorHandler} from '@/composables/useErrorHandler.js'
import {useI18n} from 'vue-i18n'

const props = defineProps({
  fallback: {
    type: Boolean,
    default: true
  },
  context: {
    type: String,
    default: 'component'
  }
})

const { t } = useI18n()
const { logError } = useErrorHandler()

const hasError = ref(false)
const errorInfo = ref(null)

const resetError = () => {
  hasError.value = false
  errorInfo.value = null
}

// Capture errors from child components
onErrorCaptured((error, instance, info) => {
  console.error('Error boundary caught:', error, info)
  
  errorInfo.value = logError(error, `${props.context}-${info}`)
  hasError.value = true

  // Return false to prevent the error from propagating further
  return false
})
</script>

<template>
  <div class="error-boundary">
    <!-- Error state -->
    <div v-if="hasError && fallback" class="error-fallback">
      <div class="error-content">
        <div class="error-icon">⚠️</div>
        <h3 class="error-title">{{ t('errors.somethingWentWrong') }}</h3>
        <p class="error-message">{{ t('errors.componentError') }}</p>
        <div class="error-actions">
          <button @click="resetError" class="btn-retry">
            {{ t('errors.tryAgain') }}
          </button>
          <button @click="() => window.location.reload()" class="btn-reload">
            {{ t('errors.reloadPage') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Normal content -->
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.error-boundary {
  width: 100%;
  height: 100%;
}

.error-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
  background: var(--kelepar-color-neutral);
  border-radius: var(--border-radius);
  border: 1px solid rgba(220, 53, 69, 0.2);
}

.error-content {
  text-align: center;
  max-width: 400px;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-title {
  color: var(--kelepar-color-error);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.error-message {
  color: var(--kelepar-font-color);
  margin-bottom: 2rem;
  opacity: 0.8;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.btn-retry,
.btn-reload {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.btn-retry {
  background: var(--kelepar-color-highlight-one);
  color: white;
}

.btn-retry:hover {
  background: var(--kelepar-color-highlight-two);
}

.btn-reload {
  background: var(--kelepar-color-second);
  color: var(--kelepar-font-color);
  border: 1px solid var(--kelepar-color-highlight-one);
}

.btn-reload:hover {
  background: var(--kelepar-color-highlight-one);
  color: white;
}

.error-details {
  margin-top: 1rem;
  text-align: left;
}

.error-details summary {
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--kelepar-color-highlight-one);
}

.error-stack {
  background: var(--kelepar-color-second);
  padding: 1rem;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  overflow-x: auto;
  white-space: pre-wrap;
  color: var(--kelepar-font-color);
  max-height: 200px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .error-actions {
    flex-direction: column;
  }
  
  .error-fallback {
    padding: 1rem;
  }
}
</style>