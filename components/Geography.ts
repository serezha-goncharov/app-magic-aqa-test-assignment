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

  clearSearchButton: Locator = this.selectorPanel.locator('.g-clear-search-icon');

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

  async fillSearchInput(text: string) {
    await this.selectorInput.fill(text);
  }

  async clearInputTextWithKeyboard() {
    await this.page.keyboard.press("Meta+A");
    await this.page.keyboard.press("Backspace");
  }

  async clearInputByButton() {
    await this.clearSearchButton.click();
  }

  async clickOnCountryName(countryName: string) {
    await this.countryPanel.locator('button').getByText(countryName).click();
  }


  // Assertions
  async checkDisplayedCountry() {
    await expect(this.countryPanel.locator('button')).toHaveCount(1);
    await expect(this.countryPanel.locator('button > span > span')).toHaveText(this.randomCountry);
  }

  async checkSelectorPanelIsHidden() {
    await expect(this.countryPanel).toBeHidden();
  }

  async checkCountryNameIsShownInGeographyInput(countryName: string) {
    await expect(this.geographyInput.locator('span > span')).toHaveText(countryName);
  }

  async checkSelectorInputIsCleared() {
    await expect(this.selectorInput).toBeEmpty();
  }
}
