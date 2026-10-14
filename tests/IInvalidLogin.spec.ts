import {test, expect} from '@playwright/test'


test( 'Invalid Login', async({page}) => {
    await page.goto('https://automationexercise.com/')
    await page.getByRole('link', {name: ' Signup / Login'}).click()
    await page.locator('input[data-qa=login-email]').fill('test@mlasl.com')
     await page.locator('input[data-qa=login-password]').fill('jeromeenerdfd231')
     await expect(page.getByText('/Your email or password is incorrect!/'))
})