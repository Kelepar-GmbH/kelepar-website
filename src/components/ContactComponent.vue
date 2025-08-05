<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import analyticsService from '@/services/analytics.js';

const { t } = useI18n();

const name = ref('');
const email = ref('');
const message = ref('');
const formSubmitted = ref(false);
const error = ref('');
const isSubmitting = ref(false);

// Rate limiting - prevent spam submissions
const RATE_LIMIT_KEY = 'kelepar_contact_submissions';
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_SUBMISSIONS = 3;

const WEB3FORMS_ACCESS_KEY = "ade71fee-66c2-4888-b0c9-c65a2bb8cc51";

// Rate limiting check
const checkRateLimit = () => {
  try {
    const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
    const now = Date.now();
    
    // Remove old submissions outside the window
    const recentSubmissions = submissions.filter(timestamp => 
      now - timestamp < RATE_LIMIT_WINDOW
    );
    
    // Update localStorage with cleaned submissions
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
    
    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
      const oldestSubmission = Math.min(...recentSubmissions);
      const waitTime = Math.ceil((RATE_LIMIT_WINDOW - (now - oldestSubmission)) / (1000 * 60));
      error.value = t('contact_section.rateLimitError', { minutes: waitTime });
      return false;
    }
    
    return true;
  } catch (e) {
    // If localStorage fails, allow the submission
    return true;
  }
};

// Record successful submission
const recordSubmission = () => {
  try {
    const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
    submissions.push(Date.now());
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions));
  } catch (e) {
    // Fail silently if localStorage is not available
  }
};

// Form validation with enhanced security
const validateForm = () => {
  // Check rate limiting first
  if (!checkRateLimit()) {
    return false;
  }
  
  if (!name.value.trim()) {
    error.value = t('contact_section.errorNameRequired');
    return false;
  }
  
  // Enhanced name validation - prevent obviously fake names
  if (name.value.trim().length < 2 || name.value.trim().length > 100) {
    error.value = t('contact_section.errorNameInvalid');
    return false;
  }
  
  if (!email.value.trim()) {
    error.value = t('contact_section.errorEmailRequired');
    return false;
  }
  
  // Enhanced email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email.value) || email.value.length > 320) {
    error.value = t('contact_section.errorEmailInvalid');
    return false;
  }
  
  if (!message.value.trim()) {
    error.value = t('contact_section.errorMessageRequired');
    return false;
  }
  
  if (message.value.length < 10 || message.value.length > 5000) {
    error.value = t('contact_section.errorMessageLength');
    return false;
  }
  
  // Basic spam detection - look for suspicious patterns
  const spamPatterns = [
    /https?:\/\//gi, // URLs
    /www\./gi, // Web addresses
    /@.*@/gi, // Multiple @ symbols
    /(.)\1{10,}/gi, // Repeated characters (more than 10 times)
  ];
  
  const fullText = `${name.value} ${email.value} ${message.value}`;
  for (const pattern of spamPatterns) {
    if (pattern.test(fullText)) {
      error.value = t('contact_section.errorSpamDetected');
      return false;
    }
  }
  
  return true;
};

async function submitForm() {
  error.value = '';
  
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Track form submission attempt
    analyticsService.trackEvent('contact_form_attempt', {
      event_category: 'engagement',
      event_label: 'contact_form'
    });
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim(),
        subject: `Neue Kontaktanfrage von ${name.value.trim()}`,
        from_name: name.value.trim(),
        replyto: email.value.trim(),
      }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      formSubmitted.value = true;
      
      // Record this successful submission for rate limiting
      recordSubmission();
      
      // Track successful submission
      analyticsService.trackEvent('contact_form_success', {
        event_category: 'conversion',
        event_label: 'contact_form_submitted'
      });
      
      // Clear form
      name.value = '';
      email.value = '';
      message.value = '';
      
    } else {
      throw new Error('Submission failed');
    }
    
  } catch (err) {
    console.error('Form submission error:', err);
    error.value = t('contact_section.errorSubmit');
    
    // Track failed submission
    analyticsService.trackEvent('contact_form_error', {
      event_category: 'error',
      event_label: 'contact_form_failed'
    });
    
  } finally {
    isSubmitting.value = false;
  }
}

// Track form interactions
const trackFormInteraction = (field) => {
  analyticsService.trackEvent('form_field_interaction', {
    event_category: 'engagement',
    event_label: `contact_form_${field}_focused`
  });
};
</script>

<template>
  <section id="contact">
    <div class="contact-container">
      <h2>{{ $t('contact.title') }}</h2>
      <div class="contact-card">
        <form v-if="!formSubmitted" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" class="sr-only">{{ $t('contact.name') }}</label>
            <input 
              id="name"
              v-model="name" 
              type="text" 
              :placeholder="$t('contact.name')"
              @focus="trackFormInteraction('name')"
              :disabled="isSubmitting"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="sr-only">{{ $t('contact.email') }}</label>
            <input 
              id="email"
              v-model="email" 
              type="email" 
              :placeholder="$t('contact.email')"
              @focus="trackFormInteraction('email')"
              :disabled="isSubmitting"
              required
            />
          </div>
          <div class="form-group">
            <label for="message" class="sr-only">{{ $t('contact.message') }}</label>
            <textarea 
              id="message"
              v-model="message" 
              rows="5" 
              :placeholder="$t('contact.message')"
              @focus="trackFormInteraction('message')"
              :disabled="isSubmitting"
              required
            ></textarea>
          </div>
          
          <div v-if="error" class="form-error" role="alert">
            <span class="error-icon">⚠️</span>
            {{ error }}
          </div>
          
          <button 
            class="btn1 contact-btn" 
            type="submit"
            :disabled="isSubmitting"
            :aria-busy="isSubmitting"
          >
            <span v-if="isSubmitting" class="loading-spinner"></span>
            {{ isSubmitting ? $t('contact.submitting') : $t('contact.cta') }}
          </button>
          
          <div class="contact-privacy">
            <p>{{ $t('contact.privacy') }}</p>
            <p class="privacy-links">
              <a href="/privacy" target="_blank">{{ $t('privacy') }}</a> | 
              <a href="/agb" target="_blank">AGB</a>
            </p>
          </div>
        </form>
        
        <div v-else class="form-success">
          <div class="success-icon">✅</div>
          <h3>{{ $t('contact_section.successTitle') }}</h3>
          <p>{{ $t('contact_section.successText') }}</p>
          <button 
            class="btn1" 
            @click="formSubmitted = false"
            type="button"
          >
            {{ $t('contact.sendAnother') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 10rem 1rem 7rem 1rem;
  text-align: center;
}

@media (max-width: 900px) {
  .contact-container {
    padding-top: 9rem;
    padding-bottom: 6rem;
  }
}

h2 {
  font-size: var(--h2-desktop);
  color: var(--kelepar-color-main);
  margin-bottom: 2.5rem;
  font-weight: 700;
}

.contact-card {
  background: var(--kelepar-color-neutral);
  border-radius: var(--border-radius);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.1);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
  transform: translateY(-2px);
}

.form-group {
  width: 100%;
  margin-bottom: 1.5rem;
}

input, textarea {
  width: 100%;
  padding: 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--kelepar-color-second);
  background: var(--kelepar-color-second);
  color: var(--kelepar-font-color);
  font-size: 1.1em;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus, textarea:focus {
  border-color: var(--kelepar-color-highlight-one);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background: var(--kelepar-color-neutral);
}

input:disabled, textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact-btn {
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1.1em;
  padding: 0.8em 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.contact-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.form-error {
  color: var(--kelepar-color-error);
  margin-bottom: 1rem;
  padding: 0.8rem;
  background: rgba(220, 53, 69, 0.1);
  border-radius: var(--border-radius);
  border: 1px solid rgba(220, 53, 69, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.error-icon {
  font-size: 1.2em;
}

.form-success {
  text-align: center;
  color: var(--kelepar-color-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.success-icon {
  font-size: 3em;
  margin-bottom: 1rem;
}

.form-success h3 {
  margin-bottom: 1rem;
  color: var(--kelepar-color-main);
}

.contact-privacy {
  margin-top: 1.5rem;
  font-size: 0.95em;
  color: var(--kelepar-font-color);
  opacity: 0.7;
}

.privacy-links {
  margin-top: 0.5rem;
}

.privacy-links a {
  color: var(--kelepar-color-highlight-one);
  text-decoration: none;
  transition: color 0.2s;
}

.privacy-links a:hover {
  color: var(--kelepar-color-highlight-two);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
  
  input, textarea {
    font-size: 1em;
  }
}
</style>