import {expect, test} from '@playwright/test'
import {BASE_URL} from '../util/URL'

test('Contact Form', async({page}) => {
    await page.goto(BASE_URL)
     await expect(page).toHaveTitle(/Automation Exercise/)
    await page.getByRole('link', {name: ' Contact us'}).click()
    await expect(page.getByText('Get In Touch')).toBeVisible()
    await page.locator('input[data-qa = name]').fill('Jerome')
    await page.locator('input[data-qa = email]').fill('test@gmail.com')
    await page.locator('input[data-qa = subject]').fill('This is for testing only')
    await page.locator('textarea[data-qa = message]').fill('This for testing ')
    // await page.locator('input[name=upload_file]').setInputFiles('C:/Users/jerom/Documents/Jerome FIles/Resume/Test.txt');
    await page.locator('input[data-qa = submit-button]').click()
    page.once('dialog', async dialog => {
     console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept(); 
    await expect(page.getByText('Success! Your details have been submitted successfully.')).toBeVisible()
});

})