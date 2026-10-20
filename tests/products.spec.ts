import {test, expect} from '@playwright/test'
import {BASE_URL} from '../util/URL'

test('Verify All Products and product detail page', async({page}) => {

    await page.goto(BASE_URL)
    await page.getByRole('link', {name: ' Products'}).click()
    await expect(page.getByText('All Products')).toBeVisible()
    await page.locator('a[href="/product_details/1"]').click()
     await expect(page.getByText('Blue Top')).toBeVisible()
})