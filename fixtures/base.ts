import {test as base} from "@playwright/test";
import {AppsPage} from "@pages/AppsPage";

type Pages = {
  appsPage: AppsPage
}

export const test = base.extend<Pages>({
  appsPage: async ({page}, use) => {
    const appsPage = new AppsPage(page);
    await appsPage.goto();
    await use(appsPage);
  }
});