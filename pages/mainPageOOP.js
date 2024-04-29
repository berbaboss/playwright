const { expect } = require('@playwright/test');

exports.PlaywrightMainPage = class PlaywrightMainPage {

  constructor(page) {
    this.page = page;
  }

  async checkSearchResultContainText(locator, searchWord) {
    const searchOutput = this.page.locator(locator);
    await searchOutput.nth(1).waitFor({ state: 'attached' });
    const numberOfChildren = await searchOutput.count(); 
    for (let i = 0; i < numberOfChildren; i++) {
      const text = await searchOutput.nth(i).textContent();
      expect(text).toContain(searchWord);
    }
  }
};