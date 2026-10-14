import {test, expect} from '@playwright/test'



test('Login - Happy path', async({page})=>{

    await page.goto('https://automationexercise.com/')
    await expect(page).toHaveTitle(/Automation Exercise/)
    await page.getByRole('link', {name: ' Signup / Login'}).click()
    await page.locator('input[data-qa = login-email]').fill('Jeromeenero459@gmail.com')
    await page.locator('input[data-qa = login-password]').fill('Letmein1027[')
    await expect(page.getByText(' Logged in as ')).toBeVisible

})