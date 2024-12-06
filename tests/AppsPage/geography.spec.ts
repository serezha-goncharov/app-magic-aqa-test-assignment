import {test} from '@fixtures/base';


test.describe('Geography selector', () => {

  test('Is visible', async ({appsPage}) => {
    await appsPage.geography.checkVisibility();
  });
  
});

