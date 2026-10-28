# Playwright Automation Testing — Part Assignment 4

## 1.Overview

This assignment contains three automated testing exercises developed using **JavaScript and Playwright Test** as part of the Web Automation using Playwright.

The project demonstrates end-to-end browser automation, element identification, user interactions, form validation, navigation, and assertion-based testing.

## 2. Technologies Used

- JavaScript
- Playwright Test
- Node.js and npm
- Chromium browser

## 3. Test Files and Scenarios

### 3.1 Flight Purchase Automation

**File:** `flightPurchase.spec.js`

**Application:** https://blazedemo.com/

This test automates the complete flight booking and purchase workflow.

Test steps:
1. Navigate to the BlazeDemo website.
2. Select Boston as the departure city and New York as the destination.
3. Search for available flights and select the Lufthansa flight.
4. Verify the purchase page URL and title.
5. Validate the expected airline, flight number, flight price, fees and taxes, and total cost.
6. Fill in the passenger and payment details.
7. Check the Remember Me checkbox and verify its state.
8. Purchase the flight and verify the confirmation page.
9. Capture, validate, and print the generated Order ID.

### 3.2 Login and Logout Verification

**File:** `loginLogout.spec.js`

**Application:** https://www.saucedemo.com/v1/index.html

This test verifies the login and logout functionality of SauceDemo.

Test steps:
1. Navigate to the login page.
2. Enter the specified credentials:
   - Username: `standard_user`
   - Password: `secret_sauce`
3. Click the Login button.
4. Verify successful login, inventory page visibility, and the inventory URL.
5. Open the hamburger menu and verify that the Logout option is visible.
6. Click Logout.
7. Verify redirection to the login page.
8. Verify that the username field, password field, and Login button are visible again.

### 3.3 Login Form Validation

**File:** `loginValidation.spec.js`

**Application:** https://freelance-learn-automation.vercel.app/login

This test validates the login form under four input conditions.

Test scenarios:
1. **Empty login attempt:** Verify the message `Email and Password is required`.
2. **Email only:** Enter `sibi@gmail.com`, leave the password empty, and verify `Password is required`.
3. **Password only:** Follow the assignment's specified input steps and verify `Email is required`.
4. **Invalid credentials:** Enter the specified invalid credentials and verify the expected email-and-password mismatch message.

Each scenario should run independently and assert the corresponding validation message.

## 4. Prerequisites

Install the following software before running the tests:

- Node.js and npm
- Visual Studio Code (recommended)

Verify the installation:

```bash
node --version
npm --version
```

## 5. Project Setup

Open a terminal in the project directory:

```bash
cd "C:\Users\aswin\Downloads\Entri Assignments\Part_Assignment4"
```

Install the project dependencies:

```bash
npm install
```

If Playwright Test is not installed, run:

```bash
npm install -D @playwright/test
```

Install the Chromium browser:

```bash
n
