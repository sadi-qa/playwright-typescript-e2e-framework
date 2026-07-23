import { type Locator, type Page } from '@playwright/test';

export type ProductSortOption =
  | 'az'
  | 'za'
  | 'lohi'
  | 'hilo';

export class InventoryPage {
  readonly page: Page;

  readonly pageTitle: Locator;

  readonly inventoryList: Locator;

  readonly inventoryItems: Locator;

  readonly productNames: Locator;

  readonly productDescriptions: Locator;

  readonly productPrices: Locator;

  readonly productImages: Locator;

  readonly addToCartButtons: Locator;

  readonly sortDropdown: Locator;

  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByTestId('title');

    this.inventoryList = page.getByTestId(
      'inventory-list',
    );

    this.inventoryItems = page.getByTestId(
      'inventory-item',
    );

    this.productNames = page.getByTestId(
      'inventory-item-name',
    );

    this.productDescriptions = page.getByTestId(
      'inventory-item-desc',
    );

    this.productPrices = page.getByTestId(
      'inventory-item-price',
    );

    this.productImages = this.inventoryItems.locator(
      'img',
    );

    this.addToCartButtons = page.getByRole('button', {
      name: 'Add to cart',
    });

    this.sortDropdown = page.getByTestId(
      'product-sort-container',
    );

    this.shoppingCartLink = page.getByTestId(
      'shopping-cart-link',
    );
  }

  async selectSortOption(
    option: ProductSortOption,
  ): Promise<void> {
    await this.sortDropdown.selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    const names = await this.productNames.allInnerTexts();

    return names.map((name) => name.trim());
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.productPrices.allInnerTexts();

    return prices.map((price) =>
      Number(price.replace('$', '').trim()),
    );
  }
}