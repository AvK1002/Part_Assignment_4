const { test, expect } = require('@playwright/test');

//Empty Login Attempt 
test.skip('Login Validation', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator('.errorMessage')).toBeVisible();
    await expect(page.locator('.errorMessage')).toHaveText('Email and Password is required');
    await page.waitForTimeout(2000);
});


//Login with Email Only
test.skip('Login with Email Only Validation', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('sibi@gmail.com');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator('.errorMessage')).toBeVisible();
    await expect(page.locator('.errorMessage')).toHaveText('Password is required');
    await page.waitForTimeout(2000);

});


//Login with Invalid Credentials
test('Login with Invalid credentials Validation', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('sibi@gmail.com');
    await page.locator('#password1').fill('sibi@gmail.com');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator('.errorMessage')).toBeVisible();
    await expect(page.locator('.errorMessage')).toHaveText("Email and Password Doesn't match");
    await page.waitForTimeout(2000);

});