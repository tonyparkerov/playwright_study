import MainPage from './integration/pageObjects/pages/mainPage'
import { REGISTERED_USER } from './integration/data/constants';

import { test as setup } from '@playwright/test';

setup('signing in', async ({ browser }) => {
    console.log('signing in...');
    const context = await browser.newContext();
    const page = await context.newPage();
    const mainPage = new MainPage(page);

    await mainPage.open();
    await mainPage.openLogInForm();
    await mainPage.logInForm.inputData(REGISTERED_USER);
    await mainPage.logInForm.clickLogInButton();
    await mainPage.logInForm.verifyUserLoggedIn();
    await page.context().storageState({ path: 'state.json' });
    await page.close();
    await browser.close();
});