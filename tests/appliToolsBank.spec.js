import { test, expect } from '@playwright/test';
const {loginPage} = require('../src/page/login');

test('Login Test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await loginPage.login(page, 'admin', 'admin');
  await expect(page.getByRole('link', { name: 'View Statement ' })).toBeVisible();
});

/*test('test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Enter your username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin');
  await page.getByRole('checkbox', { name: 'Remember Me' }).check();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'View Statement ' }).click();
  await page.locator('.logged-user-toggler-arrow > .os-icon').click();
  await page.locator('.logged-user-toggler-arrow > .os-icon').click();
  await page.getByRole('link', { name: 'Pay Now ' }).click();
  await page.getByRole('cell', { name: 'Status' }).click();
  await page.getByRole('link', { name: ' Add Account' }).click();
  await page.locator('.os-icon').first().click();
  await page.getByRole('link', { name: ' Make Payment' }).click();
  await page.getByRole('link', { name: '  Mortgages' }).click();
  await page.getByRole('link', { name: '  Mortgages' }).click();
  await page.getByText('Lending').click();
  await page.getByRole('cell', { name: 'Shopify product' }).click();
  await page.getByRole('link', { name: 'View Statement ' }).click();
  await expect(page.locator('#time')).toContainText('Your nearest branch closes in');
  await expect(page.locator('body')).toMatchAriaSnapshot(`- text: /\\$\\d+/`);
});*/