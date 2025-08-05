import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate through main pages', async ({ page }) => {
    await page.goto('/');
    
    // Check home page
    await expect(page.getByText(/swiss made.*trust.*innovation/i)).toBeVisible();
    
    // Navigate to contact
    await page.getByRole('link', { name: /contact/i }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole('heading', { name: /contact/i })).toBeVisible();
    
    // Navigate back to home
    await page.getByRole('link', { name: /home/i }).first().click();
    await expect(page).toHaveURL('/');
  });

  test('should toggle language', async ({ page }) => {
    await page.goto('/');
    
    // Check if German language toggle works
    const germanButton = page.getByRole('button', { name: /de/i });
    if (await germanButton.isVisible()) {
      await germanButton.click();
      // Should show German content
      await expect(page.getByText(/schweizer partner/i)).toBeVisible();
      
      // Switch back to English
      await page.getByRole('button', { name: /en/i }).click();
      await expect(page.getByText(/swiss partner/i)).toBeVisible();
    }
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/');
    
    // Check if theme toggle works
    const themeToggle = page.locator('[aria-label*="theme"], [title*="theme"]').first();
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      
      // Verify theme change by checking for dark mode class or styles
      const html = page.locator('html');
      const classList = await html.getAttribute('class');
      expect(classList).toContain('dark'); // Assuming dark theme adds 'dark' class
    }
  });

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile viewport
    await page.goto('/');
    
    // Mobile menu button should be visible
    const menuButton = page.locator('[aria-label*="menu"], .navbar-toggler, .mobile-menu-toggle').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      
      // Navigation items should become visible
      await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
    }
  });

  test('should handle 404 page', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Should show 404 page or redirect to home
    const url = page.url();
    if (url.includes('404') || url.includes('not-found')) {
      await expect(page.getByText(/404|not found/i)).toBeVisible();
    } else {
      // If redirected to home, that's also acceptable
      await expect(page).toHaveURL('/');
    }
  });
});