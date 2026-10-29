import {test, expect} from '@playwright/test'
import {BASE_URL} from '../util/URL'



test('Verify Product quantity in Cart', async({page}) =>{

    await page.goto(BASE_URL)
    await page.getByRole('link', {name: ' Signup / Login'}).click();
    await page.locator('input[data-qa=login-email]').fill('Jeromeenero459@gmail.com')
    await page.locator('input[data-qa=login-password]').fill('Letmein1027[')
    await page.locator('button[data-qa=login-button]').click()
    await page.getByRole('link', {name: ' Cart'}).click()
    await expect(page.getByText('8')).toBeVisible();

})