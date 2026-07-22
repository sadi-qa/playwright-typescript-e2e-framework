import { expect, test } from '@playwright/test';

test.describe('SauceDemo login page', () => {
  test('displays the required login controls', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('shows a validation error when submitted without credentials', async ({
    page,
  }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Username is required')).toBeVisible();
  });
});