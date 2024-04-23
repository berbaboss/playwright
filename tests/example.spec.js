// @ts-check
const { test, expect } = require('@playwright/test');
const dataPath = require(`../testData/${process.env.test_env}.json`);

test('Goto google then search pizza', async ({ page }) => {
  await page.goto('https://www.google.co.th/');
  console.log(dataPath.product)
  await expect(page.locator('xpath=//img[@alt="Google"]')).toBeVisible();
  await page.locator('xpath=(//textarea)[1]').fill(dataPath.product);
  await page.keyboard.press('Enter');
  await expect(page.locator('xpath=//textarea[@aria-label="ค้นหา"]')).toHaveValue(dataPath.product);
});
