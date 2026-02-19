import{test,expect} from '@playwright/test';
import { report } from 'node:process';

test('should validate form inuts',async({page})=>{
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.fill('#fullName','John Doe');
    await page.fill('#age', '30');
    await page.fill('#email', 'joedoe@mail.com');
    await page.selectOption ('#gender','male');
    await page.fill('#phoneNumber', '0612345678');
    await page.fill('#password', 'password123');
    await page.fill('#checkPassword', 'password123');
    await page.click('button');
    await expect(page.locator('#fullName').locator('xpath=..')).toHaveClass(/success/); 
     await expect(page.locator('#error-fullname')).toHaveText('');
        await expect(page.locator('#age').locator('xpath=..')).toHaveClass(/success/);
        await expect(page.locator('#error-age')).toHaveText('');
        await expect(page.locator('#email').locator('xpath=..')).toHaveClass(/success/);
        await expect(page.locator('#error-email')).toHaveText('');
        await expect(page.locator('#gender').locator('xpath=..')).toHaveClass(/success/);
        await expect(page.locator('#error-gender')).toHaveText('');
        await expect(page.locator('#phoneNumber').locator('xpath=..')).toHaveClass(/success/);
        await expect(page.locator('#error-phoneNumber')).toHaveText('');
        await expect(page.locator('#password').locator('xpath=..')).toHaveClass(/success/);
        await expect(page.locator('#error-password')).toHaveText('');
        await expect(page.locator('#checkPassword').locator('xpath=..')).toHaveClass(/success/);
        await expect(page.locator('#error-checkPassword')).toHaveText('');  
        await report('Form validation test passed successfully');
});