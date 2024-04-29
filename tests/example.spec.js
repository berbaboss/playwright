// @ts-check
// const { checkSearchResultContainText } = require('../pages/mainPage.js');
const { PlaywrightMainPage } = require('../pages/mainPageOOP.js');
const { test, expect } = require('@playwright/test');
const defaultTestEnv = 'sit';
const testEnv = process.env.test_env || defaultTestEnv;
const dataPath = require(`../testData/${testEnv}.json`);

// test('Goto google then search robotframework', async ({ page }) => {
//   await page.goto('https://www.google.co.th/');
//   await expect(page.locator('xpath=//img[@alt="Google"]')).toBeVisible();
//   await page.locator('xpath=(//textarea)[1]').fill(dataPath.product);
//   await page.keyboard.press('Enter');
//   await expect(page.locator('xpath=//textarea[@name="q"]')).toHaveText(dataPath.product);
//   await checkSearchResultContainText(page, '//h3', dataPath.product);
// });


test('Goto google then search robotframework', async ({ page }) => {
  const playwrightMain = new PlaywrightMainPage(page);
  await page.goto('https://www.google.co.th/');
  console.log(dataPath.product)
  await expect(page.locator('xpath=//img[@alt="Google"]')).toBeVisible();
  await page.locator('xpath=(//textarea)[1]').fill(dataPath.product);
  await page.keyboard.press('Enter');
  await expect(page.locator('xpath=//textarea[@name="q"]')).toHaveText(dataPath.product);
  await playwrightMain.checkSearchResultContainText('//h3', dataPath.product); 
});