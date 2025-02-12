
//const { test, expect } = require('@playwright/test');
import{test, expect } from '@playwright/test'

test('Verify Can log in to SauceDemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForTimeout(5000); 
  });

  test('test', )