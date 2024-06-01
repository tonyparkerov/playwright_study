import BasePage from "../basePage";
import RegisterForm from "../components/registerForm";

export default class MainPage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('h1', {hasText: 'Do more!'}));
        this.signUpButton = page.locator('button', { hasText: 'Sign up' })
        this.registerForm = new RegisterForm(page);
    }

    async openRegisterForm() {
        await this.signUpButton.click();
    }
}