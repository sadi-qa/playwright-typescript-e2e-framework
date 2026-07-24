import { expect, test } from "../../fixtures/auth.fixture";

import { cartProducts } from "../../test-data/products";

test.describe(
  "SauceDemo shopping cart",
  {
    tag: ["@cart", "@regression"],
  },
  () => {
    test(
      "CART-001: adds one product to the cart",
      {
        tag: "@smoke",
      },
      async ({ inventoryPage, cartPage }) => {
        const product = cartProducts.backpack;

        await inventoryPage.addProductToCart(product.name);

        await expect(inventoryPage.cartBadge).toHaveText("1");

        await inventoryPage.openCart();

        await expect(cartPage.pageTitle).toHaveText("Your Cart");

        await expect(cartPage.cartItems).toHaveCount(1);

        await expect(cartPage.getCartItem(product.name)).toBeVisible();
      },
    );

    test("CART-002: adds multiple products to the cart", async ({
      inventoryPage,
      cartPage,
    }) => {
      const selectedProducts = [
        cartProducts.backpack,
        cartProducts.bikeLight,
        cartProducts.fleeceJacket,
      ];

      for (const product of selectedProducts) {
        await inventoryPage.addProductToCart(product.name);
      }

      await expect(inventoryPage.cartBadge).toHaveText(
        selectedProducts.length.toString(),
      );

      await inventoryPage.openCart();

      await expect(cartPage.cartItems).toHaveCount(selectedProducts.length);

      for (const product of selectedProducts) {
        await expect(cartPage.getCartItem(product.name)).toBeVisible();
      }
    });

    test("CART-003: removes a product from the inventory page", async ({
      inventoryPage,
    }) => {
      const product = cartProducts.backpack;

      const productCard = inventoryPage.getProductCard(product.name);

      await inventoryPage.addProductToCart(product.name);

      await expect(inventoryPage.cartBadge).toHaveText("1");

      await expect(
        productCard.getByRole("button", {
          name: "Remove",
          exact: true,
        }),
      ).toBeVisible();

      await inventoryPage.removeProductFromInventory(product.name);

      await expect(inventoryPage.cartBadge).toHaveCount(0);

      await expect(
        productCard.getByRole("button", {
          name: "Add to cart",
          exact: true,
        }),
      ).toBeVisible();
    });

    test("CART-004: removes a product from the cart page", async ({
      inventoryPage,
      cartPage,
    }) => {
      const firstProduct = cartProducts.backpack;

      const remainingProduct = cartProducts.bikeLight;

      await inventoryPage.addProductToCart(firstProduct.name);

      await inventoryPage.addProductToCart(remainingProduct.name);

      await inventoryPage.openCart();

      await expect(cartPage.cartItems).toHaveCount(2);

      await cartPage.removeProduct(firstProduct.name);

      await expect(cartPage.cartItems).toHaveCount(1);

      await expect(inventoryPage.cartBadge).toHaveText("1");

      await expect(cartPage.getCartItem(firstProduct.name)).toHaveCount(0);

      await expect(cartPage.getCartItem(remainingProduct.name)).toBeVisible();
    });

    test("CART-005: displays the correct product details in the cart", async ({
      inventoryPage,
      cartPage,
    }) => {
      const product = cartProducts.backpack;

      await inventoryPage.addProductToCart(product.name);

      await inventoryPage.openCart();

      const cartItem = cartPage.getCartItem(product.name);

      await expect(cartItem.getByTestId("inventory-item-name")).toHaveText(
        product.name,
      );

      await expect(cartItem.getByTestId("inventory-item-price")).toHaveText(
        `$${product.price.toFixed(2)}`,
      );

      await expect(cartItem.getByTestId("item-quantity")).toHaveText("1");
    });

    test("CART-006: continues shopping without losing cart contents", async ({
      page,
      inventoryPage,
      cartPage,
    }) => {
      const product = cartProducts.backpack;

      await inventoryPage.addProductToCart(product.name);

      await inventoryPage.openCart();

      await cartPage.continueShopping();

      await expect(page).toHaveURL(/\/inventory\.html$/);

      await expect(inventoryPage.pageTitle).toHaveText("Products");

      await expect(inventoryPage.cartBadge).toHaveText("1");

      await expect(
        inventoryPage.getProductCard(product.name).getByRole("button", {
          name: "Remove",
          exact: true,
        }),
      ).toBeVisible();
    });
  },
);
