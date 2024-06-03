import BaseComponent from "../baseComponent"
import { test, expect } from '@playwright/test';
import { REGISTER_FORM_VALIDATION_ERROR_MESSAGES } from "../../data/constants";

export default class RegisterForm extends BaseComponent {
    constructor(page) {
        super(page, page.locator('app-signup-modal'));
        this.nameInput = this.container.locator('#signupName');
        this.lastNameInput = this.container.locator('#signupLastName');
        this.emailInput = this.container.locator('#signupEmail');
        this.passwordInput = this.container.locator('#signupPassword');
        this.repeatPasswordInput = this.container.locator('#signupRepeatPassword');
        this.registerButton = this.container.locator('button', { hasText: 'Register' });
        this.validationMessage = this.container.locator('.invalid-feedback');
    }

    async inputData(user) {
        await this.nameInput.fill(user.name);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.repeatPasswordInput.fill(user.repeatPassword);
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async clickOnInput(field) {
        await this[field].click();
    }

    async verifyUserRegistered() {
        await expect(this.page, "Redirect to /panel/garage").toHaveURL('/panel/garage')
    }

    async verifyRegisterButtonDisabled() {
        await expect(this.registerButton).toBeDisabled();
    }

    async verifyValidationMessage(message) {
        if (message === REGISTER_FORM_VALIDATION_ERROR_MESSAGES.shortLongPassword) {
            await expect(this.validationMessage.nth(0)).toHaveText(message);
        } else {
            await expect(this.validationMessage).toHaveText(message);
        }
    }
}