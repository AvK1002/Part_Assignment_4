const { test, expect } = require('@playwright/test');

test('Login Logout Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();

    await page.locator('#react-burger-menu-btn').click();
    await expect(page.locator('#logout_sidebar_link')).toBeVisible();
    await page.locator('#logout_sidebar_link').click();
    await expect(page.locator('#login-button')).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();

});
