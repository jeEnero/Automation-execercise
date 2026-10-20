import {test, expect} from '@playwright/test'
import {BASE_URL} from '../util/URL'

test('Verify All Products and product detail page', async({page}) => {

    await page.goto(BASE_URL)
    await page.getByRole('link', {name: ' Products'}).click()
    await expect(page.getByText('All Products')).toBeVisible()
    await page.locator('#search_product').fill('blue top')
    await page.locator('#submit_search').click()
    await expect(page.getByText('Searched Products')).toBeVisible();

})