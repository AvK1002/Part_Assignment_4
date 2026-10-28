const { test, expect } = require('@playwright/test');

test('Complete Flight Purchase', async ({ page }) => {
    await page.goto('https://blazedemo.com/');
    await page.selectOption('select[name="fromPort"]', 'Boston');
    await page.selectOption('select[name="toPort"]', 'New York');
    await expect(page.locator('select[name="fromPort"]')).toHaveValue('Boston');
    await expect(page.locator('select[name="toPort"]')).toHaveValue('New York');
    await page.locator('input[value="Find Flights"]').click();
   
    const lufthansaFlight = page.locator('tr').filter({hasText: 'Lufthansa'});

    await expect(lufthansaFlight).toBeVisible();
    await lufthansaFlight.getByRole('button', {name: 'Choose This Flight'}).click();

    await expect(page).toHaveURL(/purchase/i);
    await expect(page).toHaveTitle(/purchase/i);

    const purchasePage = page.locator('body');

    await expect(purchasePage).toContainText('United');
    await expect(purchasePage).toContainText('UA954');
    await expect(purchasePage).toContainText('400');
    await expect(purchasePage).toContainText('514.76');
    await expect(purchasePage).toContainText('914.76');

    await page.locator('#inputName').fill('Playwright JS');
    await page.locator('#address').fill('Bangalore');
    await page.locator('#state').fill('Karnataka');

    await page.locator('#cardType').selectOption({
        label: 'American Express'
    });

    await page.locator('#creditCardNumber').fill('556622337788');
    await page.locator('#creditCardYear').fill('2025');
    await page.locator('#nameOnCard').fill('Playwright By Microsoft');

    await expect(page.locator('#inputName')).toHaveValue('Playwright JS');
    await expect(page.locator('#address')).toHaveValue('Bangalore');
    await expect(page.locator('#state')).toHaveValue('Karnataka');
    await expect(page.locator('#cardType')).toHaveValue('amex');
    await expect(page.locator('#creditCardNumber')).toHaveValue('556622337788');
    await expect(page.locator('#creditCardYear')).toHaveValue('2025');
    await expect(page.locator('#nameOnCard')).toHaveValue('Playwright By Microsoft');

    const rememberMeCheckbox = page.locator('#rememberMe');

    await rememberMeCheckbox.check();
    await expect(rememberMeCheckbox).toBeChecked();

    await page.getByRole('button', {
        name: 'Purchase Flight'
    }).click();
    await expect(page).toHaveURL(/confirmation/i);

    
    const orderId = (await page.locator('table tr')
        .filter({ hasText: 'Id' })
        .locator('td')
        .nth(1)
        .textContent())?.trim();
    expect(orderId).not.toBeNull();
    expect(orderId).not.toBeUndefined();
    expect(orderId).not.toBe('');
    expect(orderId).toMatch(/\S/);
    console.log('Generated Order ID:', orderId);

    expect(orderId).toBeTruthy();
    expect(orderId.trim()).not.toBe('');
    console.log('Generated Order ID:', orderId);

});
