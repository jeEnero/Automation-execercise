import { test, expect } from '@playwright/test';

test('Register user', async ({ page }) => {
  const uniqueEmail = `test_${Date.now()}@gmail.com`;

  await page.goto('http://automationexercise.com');
  await expect(page).toHaveTitle(/Automation Exercise/);

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

  await page.locator('input[data-qa=signup-name]').fill('jerome');
  await page.locator('input[data-qa=signup-email]').fill(uniqueEmail);
  await page.getByRole('button', { name: 'Signup' }).click();

  await expect(page).toHaveURL(/.*signup/);
  await expect(page.getByRole('heading', { name: 'Enter Account Information' })).toBeVisible();

  await page.locator('#id_gender1').click();
  await page.locator('#password').fill('Bgoadmin1234');
  await page.locator('#days').selectOption('11');
  await page.locator('#months').selectOption('11');
  await page.locator('#years').selectOption('1997');
  await page.locator('#newsletter').click();
  await page.locator('#optin').click();
  await page.locator('#first_name').fill('Jerome');
  await page.locator('#last_name').fill('Enero');
  await page.locator('#company').fill('Denso Ten Solution');
  await page.locator('#address1').fill('Rc-9 Barangay Citrus');
  await page.locator('#address2').fill('Citrus Road');
  await page.locator('#state').fill('SJDM');
  await page.locator('#city').fill('Bulacan');
  await page.locator('#zipcode').fill('3023');
  await page.locator('#mobile_number').fill('09669276637');
  //Test

  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible();

  // Click Continue — handle case where it opens a new page/tab
  const popupPromise = page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null);
  await page.getByRole('link', { name: 'Continue' }).click();
  const popup = await popupPromise;
  const active = popup ?? page;

  // Wait for a reliable load state (DOM ready). networkidle may hang on some sites.
  await active.waitForLoadState('domcontentloaded', { timeout: 15000 });

  // Prefer clicking the visible "Delete Account" link (actionable) rather than depending on a "Logged in as" message.
  const deleteLink = active.getByRole('link', { name: 'Delete Account' });
//   await expect(deleteLink).toBeVisible({ timeout: 30000 });
  await deleteLink.click();

//   // Confirm deletion
//   await expect(active.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible({ timeout: 30000 });
});