 import {test, expect} from '@playwright/test'


test('Register with existing email', async({page}) => {
        await page.goto('https://automationexercise.com/')
        await page.getByRole('link', {name: ' Signup / Login'}).click()
        await expect(page.getByRole('heading', {name: 'New User Signup!'})).toBeVisible()
        await page.locator('input[data-qa = signup-name]').fill('Jeromeenero459@gmail.com')
        await page.locator('input[data-qa = signup-email]').fill('Jeromeenero459@gmail.com')
        await page.locator('button[data-qa = signup-button]').click()
        await expect(page.getByText('Email Address already exist!')).toBeVisible();

})