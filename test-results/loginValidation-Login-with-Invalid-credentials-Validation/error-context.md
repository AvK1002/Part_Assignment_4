# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginValidation.spec.js >> Login with Invalid credentials Validation
- Location: loginValidation.spec.js:26:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.errorMessage')
Expected: "Email and Password Doesn't match"
Received: "USER Email Doesn't Exist"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('.errorMessage') with timeout 5000ms
  - waiting for locator('.errorMessage')
    14 × locator resolved to <h2 class="errorMessage">…</h2>
       - unexpected value "USER Email Doesn't Exist"

```

```yaml
- heading "error USER Email Doesn't Exist" [level=2]:
  - img "error"
  - text: USER Email Doesn't Exist
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | //Empty Login Attempt 
  4  | test.skip('Login Validation', async ({ page }) => {
  5  |     await page.goto('https://freelance-learn-automation.vercel.app/login');
  6  |     await page.locator("//button[@type='submit']").click();
  7  |     await expect(page.locator('.errorMessage')).toBeVisible();
  8  |     await expect(page.locator('.errorMessage')).toHaveText('Email and Password is required');
  9  |     await page.waitForTimeout(2000);
  10 | });
  11 | 
  12 | 
  13 | //Login with Email Only
  14 | test.skip('Login with Email Only Validation', async ({ page }) => {
  15 |     await page.goto('https://freelance-learn-automation.vercel.app/login');
  16 |     await page.locator('#email1').fill('sibi@gmail.com');
  17 |     await page.locator("//button[@type='submit']").click();
  18 |     await expect(page.locator('.errorMessage')).toBeVisible();
  19 |     await expect(page.locator('.errorMessage')).toHaveText('Password is required');
  20 |     await page.waitForTimeout(2000);
  21 | 
  22 | });
  23 | 
  24 | 
  25 | //Login with Invalid Credentials
  26 | test('Login with Invalid credentials Validation', async ({ page }) => {
  27 |     await page.goto('https://freelance-learn-automation.vercel.app/login');
  28 |     await page.locator('#email1').fill('sibi@gmail.com');
  29 |     await page.locator('#password1').fill('sibi@gmail.com');
  30 |     await page.locator("//button[@type='submit']").click();
  31 |     await expect(page.locator('.errorMessage')).toBeVisible();
> 32 |     await expect(page.locator('.errorMessage')).toHaveText("Email and Password Doesn't match");
     |                                                 ^ Error: expect(locator).toHaveText(expected) failed
  33 |     await page.waitForTimeout(2000);
  34 | 
  35 | });
```