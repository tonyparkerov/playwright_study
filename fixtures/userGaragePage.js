import { test as base, expect } from '@playwright/test'

export const test = base.extend({
    garagePage: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: 'state.json' });
        await use(context);
        await context.close();
    },
});  

export { expect };