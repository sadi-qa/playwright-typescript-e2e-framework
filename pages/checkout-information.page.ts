import { type Locator, type Page } from "@playwright/test";

import { type CustomerInformation } from "../test-data/checkout-data";

export class CheckoutInformationPage {
  readonly page: Page;

  readonly pageTitle: Locator;

  readonly firstNameInput: Locator;

  readonly lastNameInput: Locator;

  readonly postalCodeInput: Locator;

  readonly continueButton: Locator;

  readonly cancelButton: Locator;

  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByTestId("title");

    this.firstNameInput = page.getByTestId("firstName");

    this.lastNameInput = page.getByTestId("lastName");

    this.postalCodeInput = page.getByTestId("postalCode");

    this.continueButton = page.getByTestId("continue");

    this.cancelButton = page.getByTestId("cancel");

    this.errorMessage = page.getByTestId("error");
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
  }

  async fillPostalCode(postalCode: string): Promise<void> {
    await this.postalCodeInput.fill(postalCode);
  }

  async fillCustomerInformation(customer: CustomerInformation): Promise<void> {
    await this.fillFirstName(customer.firstName);

    await this.fillLastName(customer.lastName);

    await this.fillPostalCode(customer.postalCode);
  }

  async continueCheckout(): Promise<void> {
    await this.continueButton.click();
  }

  async fillAndContinue(customer: CustomerInformation): Promise<void> {
    await this.fillCustomerInformation(customer);

    await this.continueCheckout();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }
}
