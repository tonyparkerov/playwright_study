import BasePage from "../basePage";
import RegisterForm from "../components/registerForm";
import LogInForm from "../components/logInForm";

export default class MainPage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('h1', {hasText: 'Do more!'}));
        this.signUpButton = page.locator('button', { hasText: 'Sign up' })
        this.registerForm = new RegisterForm(page);
        this.signInButton = page.locator('button', { hasText: 'Sign In' })
        this.logInForm = new LogInForm(page);
    }

    async openRegisterForm() {
        await this.signUpButton.click();
    }

    async openLogInForm() {
        await this.signInButton.click();
    }
}