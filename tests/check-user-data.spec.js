import { test, expect } from '../fixtures/userGaragePage';

const name = 'Anton';
const lastName = 'Pro'

test('Check mocked user data on profile page', async ({ garagePage }) => {
    const page = await garagePage.newPage();
    await page.goto('/');

    await page.route('**/profile', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.data.name = name;
        json.data.lastName = lastName;
        await route.fulfill({ response, json });
      });
    
    await page.locator('a.sidebar_btn.-profile', { hasText: ' Profile ' }).click();
    await expect(page.locator('p.profile_name')).toHaveText(`${name} ${lastName}`)
});