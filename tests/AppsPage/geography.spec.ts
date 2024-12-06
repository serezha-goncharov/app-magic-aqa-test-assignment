import {test} from '@fixtures/base';


test.describe('Geography selector', () => {

  test('Is visible', async ({appsPage}) => {
    await appsPage.geography.checkVisibility();
  });

  test('Check search inside selector', async ({appsPage}) => {
    await appsPage.geography.clickOnGeographyInput();

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
      await appsPage.geography.typeCountryName(testCase);
      await appsPage.geography.checkDisplayedCountry();
      await appsPage.geography.clearInputTextWithKeyboard();
    }
  });

});

