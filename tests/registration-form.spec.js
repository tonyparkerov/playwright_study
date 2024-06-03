import { test, expect } from '@playwright/test';
import { users } from '../integration/data/user-data';
import MainPage from '../integration/pageObjects/pages/mainPage';
import { REGISTER_FORM_VALIDATION_ERROR_MESSAGES } from '../integration/data/constants';

test.describe('Check registration form', () => {
    let page, mainPage;
    
    test.beforeAll(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        mainPage = new MainPage(page);
    })

    test.afterAll(async ({browser}) => {
        await page.close();
        await browser.close();
    })

    test.beforeEach(async () => {
        await mainPage.open();
        await mainPage.openRegisterForm();
    })

    test('Register new user', async () => {
        await mainPage.registerForm.inputData(users.randUser);
        await mainPage.registerForm.clickRegisterButton();
        await mainPage.registerForm.verifyUserRegistered();
    });

    test('Try register user with empty name', async () => {
        await mainPage.registerForm.inputData(users.userWithEmptyName);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.emptyName);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with too long name', async () => {
        await mainPage.registerForm.inputData(users.userWithTooLongName);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.longName);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with empty last name', async () => {
        await mainPage.registerForm.inputData(users.userWithEmptyLastName);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.emptyLastName);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with too long last name', async () => {
        await mainPage.registerForm.inputData(users.userWithTooLongLastName);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.longLastName);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with empty email', async () => {
        await mainPage.registerForm.inputData(users.userWithEmptyEmail);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.emptyEmail);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with invalid email', async () => {
        await mainPage.registerForm.inputData(users.userWithInvalidEmail);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.invalidEmail);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with too short password', async () => {
        await mainPage.registerForm.inputData(users.userWithTooShortPassword);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.shortLongPassword);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with too long password', async () => {
        await mainPage.registerForm.inputData(users.userWithTooLongPassword);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.shortLongPassword);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user when passwords don`t match', async () => {
        await mainPage.registerForm.inputData(users.userWithDiffRepeatPassword);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.passwordMatch);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });

    test('Try register user with empty repeat password', async () => {
        await mainPage.registerForm.inputData(users.userWithEmptyRepeatPassword);
        await mainPage.registerForm.clickOnInput('nameInput');
        await mainPage.registerForm.verifyValidationMessage(REGISTER_FORM_VALIDATION_ERROR_MESSAGES.emptyRepeatPassword);
        await mainPage.registerForm.verifyRegisterButtonDisabled();
    });
})