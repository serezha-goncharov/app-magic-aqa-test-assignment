import {Locator, Page} from "@playwright/test";

export class Geography {
  page: Page;
  geographyElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.geographyElement = page.locator('country-single-select');
  }


  // Actions
  async clickOnGeographyInput() {
    await this.geographyInput.click();
  }

  async typeCountryName(countryName: string) {
    await this.selectorInput.fill(countryName);
  }

  async clearInputTextWithKeyboard() {
    await this.page.keyboard.press("Meta+A");
    await this.page.keyboard.press("Backspace");
  }


  // Assertions
  async checkVisibility() {
    await this.geographyElement.isVisible();
  }

  async checkDisplayedCountry() {
    await expect(this.countryPanel.locator('button')).toHaveCount(1);
    await expect(this.countryPanel.locator('button > span > span')).toHaveText(this.randomCountry);
  }
}
