import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('http://127.0.0.1:5500/login.html');
await page.getByRole('textbox', { name: 'email:' }).click();
await page.getByRole('textbox', { name: 'email:' }).fill('test@test.gmail.com');
await page.getByRole('textbox', { name: 'Enter your password' }).click();
await page.getByRole('textbox', { name: 'Enter your password' }).click();
await page.getByRole('textbox', { name: 'Enter your password' }).fill('testtest');
await page.getByRole('button', { name: 'login' }).click();

await expect(page.getByRole('textbox', { name: 'email:' })).toHaveValue('test@test.gmail.com');
await expect(page.getByRole('textbox', { name: 'Enter your password' })).toHaveValue('testtest');
});