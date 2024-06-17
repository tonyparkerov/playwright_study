import BaseComponent from "../baseComponent"
import { test, expect } from '@playwright/test';

export default class LogInForm extends BaseComponent {
    constructor(page) {
        super(page, page.locator('app-signin-modal'));
        this.emailInput = this.container.locator('#signinEmail');
        this.passwordInput = this.container.locator('#signinPassword');
        this.logInButton = this.container.locator('button', { hasText: 'Login' });
    }

    async inputData(user) {
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
    }

    async clickLogInButton() {
        await this.logInButton.click();
    }

    async verifyUserLoggedIn() {
        await expect(this.page, "Redirect to /panel/garage").toHaveURL('/panel/garage')
    }
}