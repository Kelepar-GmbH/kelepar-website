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

const app = createApp(App)

app.use(router)
app.use(i18n)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info);
  
  // Send error to analytics if available
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: err.message,
      fatal: false
    });
  }
};

// Global performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Monitor for unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
    
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: 'Unhandled Promise Rejection: ' + event.reason,
        fatal: false
      });
    }
  });
}

app.mount('#app')
