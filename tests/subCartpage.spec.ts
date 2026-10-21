import {test,expect} from '@playwright/test'
import {BASE_URL} from '../util/URL'



test('Verify Subscription in Cart page', async({page}) => {
    await page.goto(BASE_URL)
    await page.getByRole('link', {name: ' Cart'}).click();
    await expect(page.getByText('Shopping Cart')).toBeVisible();
    await page.locator('#susbscribe_email').fill('jerome@gmail.com')
    await page.locator('#subscribe').click();
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();

})