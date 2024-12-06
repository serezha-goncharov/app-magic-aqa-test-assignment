import {Locator, Page} from "@playwright/test";

export class Geography {
  page: Page;
  geographyElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.geographyElement = page.locator('country-single-select');
  }

  async checkVisibility() {
    await this.geographyElement.isVisible();
  }

}