import {
  type Locator,
  type Page,
} from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;

  readonly pageTitle: Locator;

  readonly confirmationHeader: Locator;

  readonly confirmationText: Locator;

  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByTestId('title');

    this.confirmationHeader = page.getByTestId(
      'complete-header',
    );

    this.confirmationText = page.getByTestId(
      'complete-text',
    );

    this.backHomeButton = page.getByTestId(
      'back-to-products',
    );
  }

  async returnHome(): Promise<void> {
    await this.backHomeButton.click();
  }
}