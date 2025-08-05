import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import analyticsService from '@/services/analytics.js'

const globalErrors = reactive({
  errors: [],
  hasErrors: false
})

export function useErrorHandler() {
  const { t } = useI18n()
  
  const clearErrors = () => {
    globalErrors.errors = []
    globalErrors.hasErrors = false
  }

  const logError = (error, context = 'unknown') => {
    console.error(`[${context}]`, error)
    
    // Track error in analytics
    analyticsService.trackEvent('error_occurred', {
      event_category: 'error',
      event_label: context,
      error_message: error.message || 'unknown error'
    })

    // Add to global error state
    const errorInfo = {
      id: Date.now(),
      message: error.message || t('errors.generic'),
      context,
      timestamp: new Date(),
      stack: error.stack,
      userAgent: navigator.userAgent
    }

    globalErrors.errors.push(errorInfo)
    globalErrors.hasErrors = true

    // Auto-clear error after 10 seconds for non-critical errors
    if (!isCriticalError(error)) {
      setTimeout(() => {
        removeError(errorInfo.id)
      }, 10000)
    }

    return errorInfo
  }

  const removeError = (errorId) => {
    const index = globalErrors.errors.findIndex(e => e.id === errorId)
    if (index > -1) {
      globalErrors.errors.splice(index, 1)
    }
    globalErrors.hasErrors = globalErrors.errors.length > 0
  }

  const isCriticalError = (error) => {
    // Define what constitutes a critical error
    const criticalPatterns = [
      /network/i,
      /fetch/i,
      /api/i,
      /server/i,
      /database/i
    ]
    
    return criticalPatterns.some(pattern => 
      pattern.test(error.message) || pattern.test(error.name)
    )
  }

  const getErrorMessage = (error) => {
    // Provide user-friendly error messages
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      return t('errors.network')
    }
    
    if (error.message.includes('404')) {
      return t('errors.notFound')
    }
    
    if (error.message.includes('500')) {
      return t('errors.server')
    }

    if (error.message.includes('timeout')) {
      return t('errors.timeout')
    }

    return t('errors.generic')
  }

  const handleAsyncError = async (asyncFunction, context = 'async-operation') => {
    try {
      return await asyncFunction()
    } catch (error) {
      logError(error, context)
      throw error // Re-throw so calling code can handle if needed
    }
  }

  const withErrorBoundary = (fn, context = 'operation') => {
    return (...args) => {
      try {
        const result = fn(...args)
        
        // If it's a promise, handle async errors
        if (result && typeof result.then === 'function') {
          return result.catch(error => {
            logError(error, context)
            throw error
          })
        }
        
        return result
      } catch (error) {
        logError(error, context)
        throw error
      }
    }
  }

  return {
    globalErrors,
    logError,
    clearErrors,
    removeError,
    getErrorMessage,
    handleAsyncError,
    withErrorBoundary,
    isCriticalError
  }
}