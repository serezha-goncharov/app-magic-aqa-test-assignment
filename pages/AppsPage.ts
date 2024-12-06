import {Geography} from "@components/Geography";
import {Page} from "@playwright/test";
import {BasePage} from "@pages/BasePage";

export class AppsPage extends BasePage {
  geography: Geography;

  constructor(page: Page, url = 'apps') {
    super(page, url);
    this.geography = new Geography(page);
  }
}