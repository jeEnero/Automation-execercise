import {test, expect} from '@playwright/test'
import {BASE_URL} from '../util/URL'



test('', async({page}) => {
 await page.goto(BASE_URL)
 await page.locator('a[href="/login"]').click()
 await page.locator('input[data-qa="login-email"]').fill('Jeromeenero459@gmail.com')
 await page.locator('input[data-qa="login-password"]').fill('Letmein1027[')
 await page.locator('button[data-qa="login-button"]').click()
 await page.locator('a[href="/products"]').click()
 await expect(page.getByText('All Products')).toBeVisible();
 await page.locator('a[data-product-id="1"]').nth(0).click();
 await page.getByRole('button', {name: 'Continue Shopping'}).click()
 await page.locator('a[href="/view_cart"]').nth(0).click()
 await expect(page.locator('a[href="/product_details/1"]')).toBeVisible()
})