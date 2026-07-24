import { expect, test as base } from "@playwright/test";

import { CartPage } from "../pages/cart.page";
import { CheckoutCompletePage } from "../pages/checkout-complete.page";

import { CheckoutInformationPage } from "../pages/checkout-information.page";

import { CheckoutOverviewPage } from "../pages/checkout-overview.page";
import { InventoryPage } from "../pages/inventory.page";
import { LoginPage } from "../pages/login.page";
import { users } from "../test-data/users";

interface AuthenticatedFixtures {
  inventoryPage: InventoryPage;

  cartPage: CartPage;

  checkoutInformationPage: CheckoutInformationPage;

  checkoutOverviewPage: CheckoutOverviewPage;

  checkoutCompletePage: CheckoutCompletePage;
}

export const test = base.extend<AuthenticatedFixtures>({
  inventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page);

    await loginPage.open();

    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/\/inventory\.html$/);

    await expect(inventoryPage.pageTitle).toHaveText("Products");

    await use(inventoryPage);
  },

  cartPage: async ({ inventoryPage }, use) => {
    const cartPage = new CartPage(inventoryPage.page);

    await use(cartPage);
  },

  checkoutInformationPage: async ({ inventoryPage }, use) => {
    const checkoutInformationPage = new CheckoutInformationPage(
      inventoryPage.page,
    );

    await use(checkoutInformationPage);
  },

  checkoutOverviewPage: async ({ inventoryPage }, use) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(inventoryPage.page);

    await use(checkoutOverviewPage);
  },

  checkoutCompletePage: async ({ inventoryPage }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(inventoryPage.page);

    await use(checkoutCompletePage);
  },
});

export { expect } from "@playwright/test";
