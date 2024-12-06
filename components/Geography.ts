import {Page} from "@playwright/test";

export class Geography {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

}