import {
  type Locator,
  type Page,
} from '@playwright/test';

const parseCurrency = (
  text: string,
): number => {
  const match = text.match(/\d+\.\d{2}/);

  if (!match) {
    throw new Error(
      `Unable to parse currency value from: ${text}`,
    );
  }

  return Number(match[0]);
};

export class CheckoutOverviewPage {
  readonly page: Page;

  readonly pageTitle: Locator;

  readonly cartItems: Locator;

  readonly productNames: Locator;

  readonly productPrices: Locator;

  readonly itemTotalLabel: Locator;

  readonly taxLabel: Locator;

  readonly totalLabel: Locator;

  readonly finishButton: Locator;

  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByTestId('title');

    this.cartItems = page.locator('.cart_item');

    this.productNames = page.getByTestId(
      'inventory-item-name',
    );

    this.productPrices = page.getByTestId(
      'inventory-item-price',
    );

    this.itemTotalLabel = page.getByTestId(
      'subtotal-label',
    );

    this.taxLabel = page.getByTestId(
      'tax-label',
    );

    this.totalLabel = page.getByTestId(
      'total-label',
    );

    this.finishButton = page.getByTestId(
      'finish',
    );

    this.cancelButton = page.getByTestId(
      'cancel',
    );
  }

  async getItemTotal(): Promise<number> {
    const text =
      await this.itemTotalLabel.innerText();

    return parseCurrency(text);
  }

  async getTax(): Promise<number> {
    const text = await this.taxLabel.innerText();

    return parseCurrency(text);
  }

  async getFinalTotal(): Promise<number> {
    const text = await this.totalLabel.innerText();

    return parseCurrency(text);
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }
}