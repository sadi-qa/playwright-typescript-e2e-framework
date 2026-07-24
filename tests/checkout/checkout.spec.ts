import { expect, test } from "../../fixtures/auth.fixture";

import { checkoutMessages, validCustomer } from "../../test-data/checkout-data";

import { cartProducts, type Product } from "../../test-data/products";

const selectedProducts: readonly Product[] = [
  cartProducts.backpack,
  cartProducts.bikeLight,
];

test.describe(
  "SauceDemo checkout",
  {
    tag: ["@checkout", "@regression"],
  },
  () => {
    test.beforeEach(async ({ inventoryPage, cartPage }) => {
      for (const product of selectedProducts) {
        await inventoryPage.addProductToCart(product.name);
      }

      await expect(inventoryPage.cartBadge).toHaveText(
        selectedProducts.length.toString(),
      );

      await inventoryPage.openCart();

      await expect(cartPage.cartItems).toHaveCount(selectedProducts.length);

      await cartPage.startCheckout();
    });

    test(
      "CHECKOUT-001: begins checkout with selected products",
      {
        tag: "@smoke",
      },
      async ({ page, checkoutInformationPage }) => {
        await expect(page).toHaveURL(/\/checkout-step-one\.html$/);

        await expect(checkoutInformationPage.pageTitle).toHaveText(
          "Checkout: Your Information",
        );

        await expect(checkoutInformationPage.firstNameInput).toBeVisible();

        await expect(checkoutInformationPage.lastNameInput).toBeVisible();

        await expect(checkoutInformationPage.postalCodeInput).toBeVisible();

        await expect(checkoutInformationPage.continueButton).toBeVisible();
      },
    );

    test(
      "CHECKOUT-002: requires a first name",
      {
        tag: "@negative",
      },
      async ({ checkoutInformationPage }) => {
        await checkoutInformationPage.continueCheckout();

        await expect(checkoutInformationPage.errorMessage).toHaveText(
          checkoutMessages.firstNameRequired,
        );
      },
    );

    test(
      "CHECKOUT-003: requires a last name",
      {
        tag: "@negative",
      },
      async ({ checkoutInformationPage }) => {
        await checkoutInformationPage.fillFirstName(validCustomer.firstName);

        await checkoutInformationPage.fillPostalCode(validCustomer.postalCode);

        await checkoutInformationPage.continueCheckout();

        await expect(checkoutInformationPage.errorMessage).toHaveText(
          checkoutMessages.lastNameRequired,
        );
      },
    );

    test(
      "CHECKOUT-004: requires a postal code",
      {
        tag: "@negative",
      },
      async ({ checkoutInformationPage }) => {
        await checkoutInformationPage.fillFirstName(validCustomer.firstName);

        await checkoutInformationPage.fillLastName(validCustomer.lastName);

        await checkoutInformationPage.continueCheckout();

        await expect(checkoutInformationPage.errorMessage).toHaveText(
          checkoutMessages.postalCodeRequired,
        );
      },
    );

    test(
      "CHECKOUT-005: accepts valid customer information",
      {
        tag: "@smoke",
      },
      async ({ page, checkoutInformationPage, checkoutOverviewPage }) => {
        await checkoutInformationPage.fillAndContinue(validCustomer);

        await expect(page).toHaveURL(/\/checkout-step-two\.html$/);

        await expect(checkoutOverviewPage.pageTitle).toHaveText(
          "Checkout: Overview",
        );
      },
    );

    test("CHECKOUT-006: cancels customer information without losing cart contents", async ({
      page,
      inventoryPage,
      cartPage,
      checkoutInformationPage,
    }) => {
      await checkoutInformationPage.cancel();

      await expect(page).toHaveURL(/\/cart\.html$/);

      await expect(cartPage.pageTitle).toHaveText("Your Cart");

      await expect(cartPage.cartItems).toHaveCount(selectedProducts.length);

      await expect(inventoryPage.cartBadge).toHaveText(
        selectedProducts.length.toString(),
      );
    });

    test("OVERVIEW-001: displays the selected products", async ({
      checkoutInformationPage,
      checkoutOverviewPage,
    }) => {
      await checkoutInformationPage.fillAndContinue(validCustomer);

      await expect(checkoutOverviewPage.cartItems).toHaveCount(
        selectedProducts.length,
      );

      await expect(checkoutOverviewPage.productNames).toHaveText(
        selectedProducts.map(({ name }) => name),
      );

      await expect(checkoutOverviewPage.productPrices).toHaveText(
        selectedProducts.map(({ price }) => `$${price.toFixed(2)}`),
      );
    });

    test("OVERVIEW-002: calculates the correct item subtotal", async ({
      checkoutInformationPage,
      checkoutOverviewPage,
    }) => {
      const expectedSubtotal = selectedProducts.reduce(
        (total, product) => total + product.price,
        0,
      );

      await checkoutInformationPage.fillAndContinue(validCustomer);

      const actualSubtotal = await checkoutOverviewPage.getItemTotal();

      expect(actualSubtotal).toBeCloseTo(expectedSubtotal, 2);
    });

    test("OVERVIEW-003: calculates the final total using subtotal and tax", async ({
      checkoutInformationPage,
      checkoutOverviewPage,
    }) => {
      await checkoutInformationPage.fillAndContinue(validCustomer);

      const itemTotal = await checkoutOverviewPage.getItemTotal();

      const tax = await checkoutOverviewPage.getTax();

      const finalTotal = await checkoutOverviewPage.getFinalTotal();

      expect(finalTotal).toBeCloseTo(itemTotal + tax, 2);
    });

    test("OVERVIEW-004: cancels the overview without losing cart state", async ({
      page,
      inventoryPage,
      checkoutInformationPage,
      checkoutOverviewPage,
    }) => {
      await checkoutInformationPage.fillAndContinue(validCustomer);

      await checkoutOverviewPage.cancel();

      await expect(page).toHaveURL(/\/inventory\.html$/);

      await expect(inventoryPage.pageTitle).toHaveText("Products");

      await expect(inventoryPage.cartBadge).toHaveText(
        selectedProducts.length.toString(),
      );
    });

    test(
      "ORDER-001: completes a valid order",
      {
        tag: "@smoke",
      },
      async ({
        page,
        checkoutInformationPage,
        checkoutOverviewPage,
        checkoutCompletePage,
      }) => {
        await checkoutInformationPage.fillAndContinue(validCustomer);

        await checkoutOverviewPage.finishOrder();

        await expect(page).toHaveURL(/\/checkout-complete\.html$/);

        await expect(checkoutCompletePage.pageTitle).toHaveText(
          "Checkout: Complete!",
        );

        await expect(checkoutCompletePage.confirmationHeader).toHaveText(
          checkoutMessages.orderComplete,
        );

        await expect(checkoutCompletePage.confirmationText).toHaveText(
          checkoutMessages.orderDispatch,
        );
      },
    );

    test("ORDER-002: returns home after completing an order", async ({
      page,
      inventoryPage,
      checkoutInformationPage,
      checkoutOverviewPage,
      checkoutCompletePage,
    }) => {
      await checkoutInformationPage.fillAndContinue(validCustomer);

      await checkoutOverviewPage.finishOrder();

      await checkoutCompletePage.returnHome();

      await expect(page).toHaveURL(/\/inventory\.html$/);

      await expect(inventoryPage.pageTitle).toHaveText("Products");

      await expect(inventoryPage.cartBadge).toHaveCount(0);
    });
  },
);
