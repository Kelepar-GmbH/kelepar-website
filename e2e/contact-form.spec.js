import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /contact/i })).toBeVisible();
    await expect(page.getByPlaceholder(/name/i)).toBeVisible();
    await expect(page.getByPlaceholder(/email/i)).toBeVisible();
    await expect(page.getByPlaceholder(/message/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send/i })).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    await page.getByRole('button', { name: /send/i }).click();
    
    // Should show validation error
    await expect(page.getByText(/please enter your name/i)).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.getByPlaceholder(/name/i).fill('John Doe');
    await page.getByPlaceholder(/email/i).fill('invalid-email');
    await page.getByPlaceholder(/message/i).fill('This is a test message with enough characters');
    
    await page.getByRole('button', { name: /send/i }).click();
    
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible();
  });

  test('should validate message length', async ({ page }) => {
    await page.getByPlaceholder(/name/i).fill('John Doe');
    await page.getByPlaceholder(/email/i).fill('john@example.com');
    await page.getByPlaceholder(/message/i).fill('Short');
    
    await page.getByRole('button', { name: /send/i }).click();
    
    await expect(page.getByText(/message should be at least 10 characters/i)).toBeVisible();
  });

  test('should detect spam content', async ({ page }) => {
    await page.getByPlaceholder(/name/i).fill('John Doe');
    await page.getByPlaceholder(/email/i).fill('john@example.com');
    await page.getByPlaceholder(/message/i).fill('Check out this website: https://spam.com');
    
    await page.getByRole('button', { name: /send/i }).click();
    
    await expect(page.getByText(/message was rejected.*remove.*urls/i)).toBeVisible();
  });

  test('should show loading state during submission', async ({ page }) => {
    // Intercept the form submission to delay it
    await page.route('https://api.web3forms.com/submit', async route => {
      await page.waitForTimeout(1000); // Simulate slow network
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true })
      });
    });

    await page.getByPlaceholder(/name/i).fill('John Doe');
    await page.getByPlaceholder(/email/i).fill('john@example.com');
    await page.getByPlaceholder(/message/i).fill('This is a valid test message with enough characters');
    
    await page.getByRole('button', { name: /send/i }).click();
    
    // Should show loading state
    await expect(page.getByText(/sending/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /sending/i })).toBeDisabled();
  });

  test('should show success message after submission', async ({ page }) => {
    // Mock successful API response
    await page.route('https://api.web3forms.com/submit', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true })
      });
    });

    await page.getByPlaceholder(/name/i).fill('John Doe');
    await page.getByPlaceholder(/email/i).fill('john@example.com');
    await page.getByPlaceholder(/message/i).fill('This is a valid test message with enough characters');
    
    await page.getByRole('button', { name: /send/i }).click();
    
    // Should show success message
    await expect(page.getByText(/thank you/i)).toBeVisible();
    await expect(page.getByText(/message has been sent successfully/i)).toBeVisible();
  });

  test('should handle API errors gracefully', async ({ page }) => {
    // Mock API error
    await page.route('https://api.web3forms.com/submit', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ success: false, message: 'Server error' })
      });
    });

    await page.getByPlaceholder(/name/i).fill('John Doe');
    await page.getByPlaceholder(/email/i).fill('john@example.com');
    await page.getByPlaceholder(/message/i).fill('This is a valid test message with enough characters');
    
    await page.getByRole('button', { name: /send/i }).click();
    
    // Should show error message
    await expect(page.getByText(/error sending message/i)).toBeVisible();
  });
});