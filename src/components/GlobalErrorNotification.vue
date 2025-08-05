<script setup>
import { computed } from 'vue'
import { useErrorHandler } from '@/composables/useErrorHandler.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { globalErrors, removeError, clearErrors } = useErrorHandler()

const visibleErrors = computed(() => 
  globalErrors.errors.slice(-3) // Show max 3 recent errors
)

const dismissError = (errorId) => {
  removeError(errorId)
}

const dismissAll = () => {
  clearErrors()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="globalErrors.hasErrors" class="error-notifications">
      <div class="notification-header">
        <span class="notification-title">{{ t('errors.notifications') }}</span>
        <button @click="dismissAll" class="dismiss-all">
          {{ t('errors.dismissAll') }}
        </button>
      </div>
      
      <div
        v-for="error in visibleErrors"
        :key="error.id"
        class="error-notification"
        :class="{ 'critical': isCriticalError(error) }"
      >
        <div class="notification-content">
          <div class="notification-icon">
            {{ isCriticalError(error) ? '🚨' : '⚠️' }}
          </div>
          <div class="notification-message">
            <strong>{{ error.context }}</strong>
            <p>{{ getErrorMessage(error) }}</p>
          </div>
        </div>
        <button @click="dismissError(error.id)" class="dismiss-btn">
          ×
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.error-notifications {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  max-width: 400px;
  width: 100%;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--kelepar-color-error);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  font-size: 0.9rem;
}

.notification-title {
  font-weight: 600;
}

.dismiss-all {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: underline;
  opacity: 0.9;
}

.dismiss-all:hover {
  opacity: 1;
}

.error-notification {
  background: var(--kelepar-color-neutral);
  border: 1px solid rgba(220, 53, 69, 0.2);
  border-top: none;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  animation: slideIn 0.3s ease-out;
}

.error-notification:last-child {
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.error-notification.critical {
  border-color: rgba(220, 53, 69, 0.5);
  background: rgba(220, 53, 69, 0.05);
}

.notification-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1;
}

.notification-icon {
  font-size: 1.2rem;
  line-height: 1;
}

.notification-message {
  flex: 1;
}

.notification-message strong {
  display: block;
  color: var(--kelepar-color-highlight-one);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
}

.notification-message p {
  margin: 0;
  color: var(--kelepar-font-color);
  font-size: 0.85rem;
  line-height: 1.4;
}

.dismiss-btn {
  background: none;
  border: none;
  color: var(--kelepar-font-color);
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  opacity: 0.6;
}

.dismiss-btn:hover {
  background: rgba(220, 53, 69, 0.1);
  opacity: 1;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .error-notifications {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
}
</style>