import { vi } from 'vitest'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock

// Mock fetch for form submissions
global.fetch = vi.fn()

// Mock analytics service
vi.mock('@/services/analytics.js', () => ({
  default: {
    trackEvent: vi.fn()
  }
}))

// Mock intersection observer for lazy loading
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
}))