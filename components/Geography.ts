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

}