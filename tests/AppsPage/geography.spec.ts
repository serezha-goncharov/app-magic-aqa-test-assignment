import {test} from '@fixtures/base';


test.describe('Geography selector', () => {

  test('Check visibility', async ({appsPage}) => {
    await appsPage.geography.checkIsVisible(appsPage.geography.geographyElement);
  });

  test('Check search inside selector', async ({appsPage}) => {
    await appsPage.geography.clickOnGeographyInput();
    await appsPage.geography.checkIsVisible(appsPage.geography.selectorPanel);

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
    await appsPage.geography.checkIsVisible(appsPage.geography.selectorPanel);

    const countryName = await appsPage.geography.getRandomCountry();

    await appsPage.geography.clickOnCountryName(countryName);
    await appsPage.geography.checkSelectorPanelIsHidden();
    await appsPage.geography.checkCountryNameIsShownInGeographyInput(countryName);
  });


  test('Check clear input button', async ({appsPage}) => {
    await appsPage.geography.clickOnGeographyInput();
    await appsPage.geography.checkIsVisible(appsPage.geography.selectorPanel);

    const countryName = await appsPage.geography.getRandomCountry();

    await appsPage.geography.fillSearchInput(countryName);
    await appsPage.geography.clearInputByButton();
    await appsPage.geography.checkSelectorInputIsCleared();
    await appsPage.geography.checkIsVisible(appsPage.geography.countryPanel);

  });

  test('Check "Nothing to display" label', async ({appsPage}) => {
    await appsPage.geography.clickOnGeographyInput();
    await appsPage.geography.checkIsVisible(appsPage.geography.selectorPanel);

    await appsPage.geography.fillSearchInput("Zimbabwe");
    await appsPage.geography.checkIsVisible(appsPage.geography.noDataLabel);
    await appsPage.geography.checkIsHidden(appsPage.geography.countryPanel);
  });

  test('Check invalid input data', async ({appsPage}) => {
    await appsPage.geography.clickOnGeographyInput();
    await appsPage.geography.checkIsVisible(appsPage.geography.selectorPanel);

    const testCases: Array<any> = [
      {
        value: '0',
        hiddenElement: appsPage.geography.countryPanel,
        visibleElement: appsPage.geography.noDataLabel,
      },
      {
        value: '123',
        hiddenElement: appsPage.geography.countryPanel,
        visibleElement: appsPage.geography.noDataLabel,
      },
      {
        value: '-123',
        hiddenElement: appsPage.geography.countryPanel,
        visibleElement: appsPage.geography.noDataLabel,
      },
      {
        value: '1234765738904567859134857198375',
        hiddenElement: appsPage.geography.countryPanel,
        visibleElement: appsPage.geography.noDataLabel,
      },
      {
        value: '!@#$%^&*()_-+=*;"\'<>?\\:|}{[]~`§±/',
        hiddenElement: appsPage.geography.countryPanel,
        visibleElement: appsPage.geography.noDataLabel,
      },
      {
        value: ' ',
        hiddenElement: appsPage.geography.noDataLabel,
        visibleElement: appsPage.geography.countryPanel,
      },
      {
        value: 'Беларусь',
        hiddenElement: appsPage.geography.countryPanel,
        visibleElement: appsPage.geography.noDataLabel,
      },
      {
        value: '<script>alert("I hacked this!")</script>',
        hiddenElement: appsPage.geography.countryPanel,
        visibleElement: appsPage.geography.noDataLabel,
      },
    ];

    for (const testCase of testCases) {
      await appsPage.geography.fillSearchInput(testCase.value);
      await appsPage.geography.checkIsVisible(testCase.visibleElement);
      await appsPage.geography.checkIsHidden(testCase.hiddenElement);
    }
  });

});

