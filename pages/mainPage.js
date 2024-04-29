const { expect } = require('@playwright/test');

async function checkSearchResultContainText(page, locator, searchWord) {
  const searchOutput = page.locator(locator);
  await searchOutput.nth(1).waitFor({ state: 'attached' });
  const numberOfChildren = await searchOutput.count();
  console.log(numberOfChildren);
  for (let i = 0; i < numberOfChildren; i++) {
    const text = (await searchOutput.nth(i).textContent()).toUpperCase();;
    expect(text).toContain(searchWord.toUpperCase());
  }
}

module.exports = { checkSearchResultContainText };