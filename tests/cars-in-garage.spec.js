import { test, expect } from '../fixtures/userGaragePage';

test('Check cars in Garage', async ({ garagePage }) => {
    const page = await garagePage.newPage();
    await page.goto('/');
    await expect(page, "Redirect to /panel/garage").toHaveURL('/panel/garage');
    await expect(page.locator('p.car_name').nth(1)).toHaveText('Audi TT');
});