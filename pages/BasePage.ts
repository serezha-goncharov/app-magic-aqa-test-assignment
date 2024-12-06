import {Page} from "@playwright/test";

export class BasePage {
  url: string;
  page: Page;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  async goto() {
    await this.page.goto(`/${this.url}`);
  }
}