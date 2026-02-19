import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.getByRole('textbox', { name: 'Enter your Full Name' }).click();
  await page.getByRole('textbox', { name: 'Enter your Full Name' }).fill('houcine');
  await page.getByPlaceholder('Enter your age').click();
  await page.getByPlaceholder('Enter your age').fill('22');
  await page.getByRole('textbox', { name: 'Enter you email adress' }).click();
  await page.getByRole('textbox', { name: 'Enter you email adress' }).fill('aitbenalihoucine18@gmail.com');
  await page.locator('#gender').selectOption('male');
  await page.getByPlaceholder('Enter your phone number').click();
  await page.getByPlaceholder('Enter your phone number').fill('0660348473');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('houcineaitbenali');
  await page.getByRole('textbox', { name: 'check your password' }).click();
  await page.getByRole('textbox', { name: 'check your password' }).fill('houcineaitbenali');
  await page.getByRole('button', { name: 'submit' }).click();});