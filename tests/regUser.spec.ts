import {test, expect} from '@playwright/test';



test('Register user', async ({page}) => {
 await page.goto('http://automationexercise.com')
 await expect(page).toHaveTitle(/Automation Exercise/);
 await page.getByRole('link', { name: ' Signup / Login' }).click();
 await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
 await page.locator('input[data-qa=signup-name]').fill('jerome')  
 await page.locator('input[data-qa=signup-email]').fill('Test@gmail.com')   
 await page.locator('input[data-qa=signup-button]').click

})