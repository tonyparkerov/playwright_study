import { test, expect } from '@playwright/test';
import { randUser, userWithDiffRepeatPassword, userWithEmptyEmail, userWithEmptyLastName, userWithEmptyName, userWithEmptyRepeatPassword, userWithInvalidEmail, userWithTooLongLastName, userWithTooLongName, userWithTooLongPassword, userWithTooShortPassword } from '../integration/data/user-data';

let signUpModal, nameInput, lastNameInput, emailInput, passwordInput, repeatPasswordInput;
async function inputData(user) {
    await nameInput.fill(user.name);
    await lastNameInput.fill(user.lastName);
    await emailInput.fill(user.email);
    await passwordInput.fill(user.password);
    await repeatPasswordInput.fill(user.repeatPassword);
}

test.beforeAll(async ({ page }) => {
    signUpModal = page.locator('app-signup-modal');
    nameInput = signUpModal.locator('#signupName');
    lastNameInput = signUpModal.locator('#signupLastName');
    emailInput = signUpModal.locator('#signupEmail');
    passwordInput = signUpModal.locator('#signupPassword');
    repeatPasswordInput = signUpModal.locator('#signupRepeatPassword');
});

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('button', { hasText: 'Sign up' }).click();
})

test.describe('Check registration form', () => {
    
    test('Register new user', async ({ page }) => {
        await inputData(randUser);
        await page.locator('button', { hasText: 'Register' }).click();
        await expect(page, "Redirect to /panel/garage").toHaveURL('/panel/garage')
    });

    test('Try register user with empty name', async ({ page }) => {
        await inputData(userWithEmptyName);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name required');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with too long name', async ({ page }) => {
        await inputData(userWithTooLongName);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with empty last name', async ({ page }) => {
        await inputData(userWithEmptyLastName);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name required');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with too long last name', async ({ page }) => {
        await inputData(userWithTooLongLastName);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with empty email', async ({ page }) => {
        await inputData(userWithEmptyEmail);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email required');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with invalid email', async ({ page }) => {
        await inputData(userWithInvalidEmail);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with too short password', async ({ page }) => {
        await inputData(userWithTooShortPassword);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback').nth(0)).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with too long password', async ({ page }) => {
        await inputData(userWithTooLongPassword);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback').nth(0)).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user when passwords don`t match', async ({ page }) => {
        await inputData(userWithDiffRepeatPassword);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Passwords do not match');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });

    test('Try register user with empty repeat password', async ({ page }) => {
        await inputData(userWithEmptyRepeatPassword);
        await nameInput.click();
        await expect(page.locator('.invalid-feedback')).toHaveText('Re-enter password required');
        await expect(page.locator('button', { hasText: 'Register' })).toBeDisabled();
    });
});