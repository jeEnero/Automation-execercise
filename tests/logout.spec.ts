import {test,expect} from '@playwright/test'


test('Logout pages', async({page}) =>{

    await page.goto('https://automationexercise.com/')
    await expect(page).toHaveTitle('Automation Exercise')
    await page.getByRole('link', {name: ' Signup / Login'}).click()
    await page.locator('input[data-qa=login-email]').fill('Jeromeenero459@gmail.com')
    await page.locator('input[data-qa=login-password]').fill('Letmein1027[')
    await page.getByRole('link', {name: ' Logout'})
    await expect(page.getByText('Login to your account')).toBeVisible()
})