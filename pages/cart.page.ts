import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  readonly pageTitle: Locator;

  readonly cartList: Locator;

  readonly cartItems: Locator;

  readonly productNames: Locator;

  readonly productPrices: Locator;

  readonly quantities: Locator;

  readonly continueShoppingButton: Locator;

  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByTestId('title');

    this.cartList = page.locator('.cart_list');

    this.cartItems = page.locator('.cart_item');

    this.productNames = page.getByTestId(
      'inventory-item-name',
    );

    this.productPrices = page.getByTestId(
      'inventory-item-price',
    );

    this.quantities = page.getByTestId(
      'item-quantity',
    );

    this.continueShoppingButton = page.getByTestId(
      'continue-shopping',
    );

    this.checkoutButton = page.getByTestId(
      'checkout',
    );
  }

  getCartItem(productName: string): Locator {
    return this.cartItems.filter({
      hasText: productName,
    });
  }

  async removeProduct(
    productName: string,
  ): Promise<void> {
    const cartItem = this.getCartItem(productName);

    await cartItem
      .getByRole('button', {
        name: 'Remove',
        exact: true,
      })
      .click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }
}