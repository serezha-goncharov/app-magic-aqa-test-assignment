import {test} from '@fixtures/base';


test.describe('Geography selector', () => {

  test('Is visible', async ({appsPage}) => {
    await appsPage.geography.geographyElement.isVisible();
  });

  test('Check search inside selector', async ({appsPage}) => {
    await appsPage.geography.clickOnGeographyInput();
    await appsPage.geography.selectorPanel.isVisible();

    const countryName = await appsPage.geography.getRandomCountry();

    const testCases = [
      countryName,
      countryName.toLowerCase(),
      countryName.toUpperCase(),
      ` ${countryName}`,
      `${countryName} `,
      ` ${countryName} `,
    ];

    for (const testCase of testCases) {
      await appsPage.geography.fillSearchInput(testCase);
      await appsPage.geography.checkDisplayedCountry();
      await appsPage.geography.clearInputTextWithKeyboard();
    }
  });


  test('Check clicking on country', async ({appsPage}) => {
    await appsPage.geography.clickOnGeographyInput();
    await appsPage.geography.selectorPanel.isVisible();

    const countryName = await appsPage.geography.getRandomCountry();

    await appsPage.geography.clickOnCountryName(countryName);
    await appsPage.geography.checkSelectorPanelIsHidden();
    await appsPage.geography.checkCountryNameIsShownInGeographyInput(countryName);
  });

});

