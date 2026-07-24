import {
  expect,
  test as base,
} from '@playwright/test';

import { CartPage } from '../pages/cart.page';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';
import { users } from '../test-data/users';

interface AuthenticatedFixtures {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
}

export const test =
  base.extend<AuthenticatedFixtures>({
    inventoryPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);

      const inventoryPage =
        new InventoryPage(page);

      await loginPage.open();

      await loginPage.login(
        users.standard.username,
        users.standard.password,
      );

      await expect(page).toHaveURL(
        /\/inventory\.html$/,
      );

      await expect(
        inventoryPage.pageTitle,
      ).toHaveText('Products');

      await use(inventoryPage);
    },

    cartPage: async (
      { inventoryPage },
      use,
    ) => {
      const cartPage = new CartPage(
        inventoryPage.page,
      );

      await use(cartPage);
    },
  });

export { expect } from '@playwright/test';