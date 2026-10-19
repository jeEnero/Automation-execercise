import {test, expect} from '@playwright/test'
import {BASE_URL} from '../util/URL'


test('Test Case Page', async({page}) => {

    await page.goto(BASE_URL)
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.locator('.fa-list').nth(0).click();
    await expect(page).toHaveURL('https://automationexercise.com/test_cases')
    await page.waitForURL('https://automationexercise.com/test_cases');
   await expect(page.getByText('Below is the list of test Cases for you to practice the Automation.')).toBeVisible();

})