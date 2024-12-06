import {test as base} from "@playwright/test";
import {AppsPage} from "@pages/AppsPage";

type Pages = {
  appsPage: AppsPage
}

export const test = base.extend<Pages>({
  appsPage: async ({page}, use) => {
    await use(new AppsPage(page));
  }
});