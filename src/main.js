import './assets/styles/main.css'
import {createApp} from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// import function to register Swiper custom elements
import {register} from 'swiper/element/bundle';
// register Swiper custom elements
register();

// Import Services
import './services/analytics.js'
import './services/performance.js'
import { useErrorHandler } from './composables/useErrorHandler.js'

const app = createApp(App)

app.use(router)
app.use(i18n)

// Enhanced global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info);
  
  // Use our error handler composable
  try {
    const { logError } = useErrorHandler()
    logError(err, `vue-${info}`)
  } catch (handlerError) {
    console.error('Error handler failed:', handlerError)
  }
  
  // Send error to analytics if available
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: err.message,
      fatal: false
    });
  }
};

// Global performance monitoring and error handling
// Monitor for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  
  try {
    const { logError } = useErrorHandler()
    logError(new Error(event.reason), 'unhandled-promise-rejection')
  } catch (handlerError) {
    console.error('Error handler failed:', handlerError)
  }
  
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: 'Unhandled Promise Rejection: ' + event.reason,
      fatal: false
    });
  }
});

// Monitor for JavaScript errors
window.addEventListener('error', (event) => {
  console.error('JavaScript Error:', event.error);
  
  try {
    const { logError } = useErrorHandler()
    logError(event.error || new Error(event.message), 'javascript-error')
  } catch (handlerError) {
    console.error('Error handler failed:', handlerError)
  }
});

// Monitor for resource loading errors
window.addEventListener('error', (event) => {
  if (event.target !== window && event.target.tagName) {
    console.error('Resource loading error:', event.target.src || event.target.href);
    
    try {
      const { logError } = useErrorHandler()
      logError(new Error(`Failed to load ${event.target.tagName}: ${event.target.src || event.target.href}`), 'resource-error')
    } catch (handlerError) {
      console.error('Error handler failed:', handlerError)
    }
  }
}, true); // Use capture phase for resource errors

app.mount('#app')
