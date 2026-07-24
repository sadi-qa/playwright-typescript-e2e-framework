import { expect, test } from "@playwright/test";

import { LoginPage } from "../../pages/login.page";
import { loginMessages } from "../../test-data/login-messages";
import { users } from "../../test-data/users";

test.describe("SauceDemo authentication", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.open();
  });

  test(
    "LOGIN-001: displays the required login controls",
    {
      tag: ["@login", "@smoke", "@regression"],
    },
    async () => {
      await expect(loginPage.usernameInput).toBeVisible();

      await expect(loginPage.passwordInput).toBeVisible();

      await expect(loginPage.loginButton).toBeVisible();
    },
  );

  test(
    "LOGIN-002: shows username validation for an empty form",
    {
      tag: ["@login", "@negative", "@regression"],
    },
    async () => {
      await loginPage.submit();

      await expect(loginPage.errorMessage).toHaveText(
        loginMessages.usernameRequired,
      );
    },
  );

  test(
    "LOGIN-003: shows password validation when password is empty",
    {
      tag: ["@login", "@negative", "@regression"],
    },
    async () => {
      await loginPage.fillUsername(users.standard.username);

      await loginPage.submit();

      await expect(loginPage.errorMessage).toHaveText(
        loginMessages.passwordRequired,
      );
    },
  );

  test(
    "LOGIN-004: shows username validation when username is empty",
    {
      tag: ["@login", "@negative", "@regression"],
    },
    async () => {
      await loginPage.fillPassword(users.standard.password);

      await loginPage.submit();

      await expect(loginPage.errorMessage).toHaveText(
        loginMessages.usernameRequired,
      );
    },
  );

  test(
    "LOGIN-005: rejects invalid credentials",
    {
      tag: ["@login", "@negative", "@regression"],
    },
    async ({ page }) => {
      await loginPage.login(users.invalid.username, users.invalid.password);

      await expect(loginPage.errorMessage).toHaveText(
        loginMessages.invalidCredentials,
      );

      await expect(page).toHaveURL("/");
    },
  );

  test(
    "LOGIN-006: allows the standard user to log in",
    {
      tag: ["@login", "@smoke", "@regression"],
    },
    async ({ page }) => {
      await loginPage.login(users.standard.username, users.standard.password);

      await expect(page).toHaveURL(/\/inventory\.html$/);

      await expect(page.getByTestId("title")).toHaveText("Products");
    },
  );

  test(
    "LOGIN-007: rejects the locked-out user",
    {
      tag: ["@login", "@negative", "@regression"],
    },
    async () => {
      await loginPage.login(users.lockedOut.username, users.lockedOut.password);

      await expect(loginPage.errorMessage).toHaveText(loginMessages.lockedOut);
    },
  );

  test(
    "LOGIN-008: closes the displayed validation error",
    {
      tag: ["@login", "@regression"],
    },
    async () => {
      await loginPage.submit();

      await expect(loginPage.errorMessage).toBeVisible();

      await loginPage.closeError();

      await expect(loginPage.errorMessage).toBeHidden();
    },
  );
});
