import {expect, Locator, Page} from "@playwright/test";
import {getRandomElement} from "@util/helper";

export class Geography {
  constructor(private page: Page) {
  }

  // Get Elements
  geographyElement: Locator = this.page.locator('country-single-select');
  geographyInput: Locator = this.geographyElement.locator('div.g-selector-selected');
  selectorPanel: Locator = this.page.locator('country-single-select-panel');
  selectorInput: Locator = this.selectorPanel.locator('selector-search input');
  countryPanel: Locator = this.selectorPanel
      .locator('am-scrollbar-wrap > div.group-wrap > div')
      .filter({has: this.page.getByText('Countries')});

  countryList: string[] = [];
  randomCountry: string;

  async getCountryList() {
    const countryNames: string[] = await this.countryPanel.locator('span').allInnerTexts();
    this.countryList = countryNames.filter(countryName => !countryName.includes('\n'));
    return this.countryList;
  }

  async getRandomCountry() {
    const countryList = !!this.countryList.length ? this.countryList : await this.getCountryList();
    this.randomCountry = getRandomElement(countryList);
    return this.randomCountry;
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

  async clickOnCountryName(countryName: string) {
    await this.countryPanel.locator('button').getByText(countryName).click();
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
