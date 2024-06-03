import BaseComponent from "./baseComponent";

export default class BasePage extends BaseComponent {
    constructor(page, url, container) {
        const wrapper = container ?? page.locator('html');
        super(page, wrapper);
        this.url = url;
    }

    async open() {
        await this.page.goto(this.url);
    }
}