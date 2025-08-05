import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import ContactComponent from '@/components/ContactComponent.vue'

// Mock translations
const messages = {
  en: {
    contact: {
      title: 'Contact us',
      name: 'Your name',
      email: 'Your email', 
      message: 'Your message',
      cta: 'Send message',
      submitting: 'Sending...',
      privacy: 'Privacy text'
    },
    privacy: 'Privacy',
    agb: 'Terms',
    contact_section: {
      errorNameRequired: 'Please enter your name.',
      errorEmailRequired: 'Please enter your email address.',
      errorEmailInvalid: 'Please enter a valid email address.',
      errorMessageRequired: 'Please enter a message.',
      errorMessageTooShort: 'Your message should be at least 10 characters long.',
      errorNameInvalid: 'Please enter a valid name (2-100 characters).',
      errorMessageLength: 'Your message should be between 10 and 5000 characters.',
      errorSpamDetected: 'Your message was rejected. Please remove any URLs or suspicious content.',
      rateLimitError: 'Too many submissions. Please wait {minutes} minutes before sending another message.',
      successTitle: 'Thank you!',
      successText: 'Your message has been sent successfully.'
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  messages
})

describe('ContactComponent', () => {
  let wrapper

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    vi.clearAllMocks()
    
    wrapper = mount(ContactComponent, {
      global: {
        plugins: [i18n]
      }
    })
  })

  it('renders contact form correctly', () => {
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('validates required fields', async () => {
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')
    
    expect(wrapper.find('.form-error').exists()).toBe(true)
    expect(wrapper.text()).toContain('Please enter your name.')
  })

  it('validates email format', async () => {
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('invalid-email')
    await wrapper.find('textarea').setValue('This is a test message with enough characters')
    
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')
    
    expect(wrapper.text()).toContain('Please enter a valid email address.')
  })

  it('validates message length', async () => {
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('Short')
    
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')
    
    expect(wrapper.text()).toContain('Your message should be at least 10 characters long.')
  })

  it('detects spam content', async () => {
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('Check out this website: https://spam.com')
    
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')
    
    expect(wrapper.text()).toContain('Your message was rejected. Please remove any URLs or suspicious content.')
  })

  it('implements rate limiting', async () => {
    // Simulate 3 previous submissions
    const submissions = [Date.now() - 1000, Date.now() - 2000, Date.now() - 3000]
    localStorage.setItem('kelepar_contact_submissions', JSON.stringify(submissions))
    
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('This is a valid test message')
    
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')
    
    expect(wrapper.text()).toContain('Too many submissions. Please wait')
  })

  it('validates name length constraints', async () => {
    // Test too short name
    await wrapper.find('input[type="text"]').setValue('J')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('This is a valid test message')
    
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')
    
    expect(wrapper.text()).toContain('Please enter a valid name (2-100 characters).')
  })

  it('validates message length constraints', async () => {
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('a'.repeat(5001)) // Too long
    
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')
    
    expect(wrapper.text()).toContain('Your message should be between 10 and 5000 characters.')
  })

  it('successfully submits valid form', async () => {
    // Mock successful API response
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ success: true })
    })
    
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('textarea').setValue('This is a valid test message with enough characters')
    
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('submit')
    
    // Wait for the form submission promise to resolve
    await new Promise(resolve => setTimeout(resolve, 100))
    await wrapper.vm.$nextTick()
    
    expect(fetch).toHaveBeenCalledWith('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: expect.stringContaining('John Doe')
    })
  })
})