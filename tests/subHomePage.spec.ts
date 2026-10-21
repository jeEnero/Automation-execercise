import {test, expect} from '@playwright/test'
import {BASE_URL} from '../util/URL'

test(' Verify Subscription in home page', async({page})=> {
    await page.goto(BASE_URL)
    await expect(page.getByText('Subscription')).toBeVisible();
    await page.locator('#susbscribe_email').fill('Jerometest@gmail.com')
    await page.locator('#subscribe').click()
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();


})