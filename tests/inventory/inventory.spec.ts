import {
  expect,
  test,
} from '../../fixtures/auth.fixture';

import {
  expectedProductNames,
  expectedProductPrices,
  expectedProducts,
} from '../../test-data/products';

test.describe(
  'SauceDemo inventory',
  {
    tag: ['@inventory', '@regression'],
  },
  () => {
    test(
      'INV-001: displays the inventory page and essential controls',
      {
        tag: '@smoke',
      },
      async ({ inventoryPage }) => {
        await expect(
          inventoryPage.pageTitle,
        ).toHaveText('Products');

        await expect(
          inventoryPage.inventoryList,
        ).toBeVisible();

        await expect(
          inventoryPage.inventoryItems,
        ).toHaveCount(expectedProducts.length);

        await expect(
          inventoryPage.sortDropdown,
        ).toBeVisible();

        await expect(
          inventoryPage.shoppingCartLink,
        ).toBeVisible();
      },
    );

    test(
      'INV-002: displays complete information for every product',
      async ({ inventoryPage }) => {
        await expect(
          inventoryPage.productNames,
        ).toHaveText(expectedProductNames);

        await expect(
          inventoryPage.productPrices,
        ).toHaveText(
          expectedProductPrices.map(
            (price) => `$${price.toFixed(2)}`,
          ),
        );

        await expect(
          inventoryPage.productDescriptions,
        ).toHaveCount(expectedProducts.length);

        await expect(
          inventoryPage.productImages,
        ).toHaveCount(expectedProducts.length);

        await expect(
          inventoryPage.addToCartButtons,
        ).toHaveCount(expectedProducts.length);

        for (
          let index = 0;
          index < expectedProducts.length;
          index += 1
        ) {
          const product =
            inventoryPage.inventoryItems.nth(index);

          await expect(
            product.getByTestId(
              'inventory-item-name',
            ),
          ).not.toHaveText('');

          await expect(
            product.getByTestId(
              'inventory-item-desc',
            ),
          ).not.toHaveText('');

          await expect(
            product.getByTestId(
              'inventory-item-price',
            ),
          ).toHaveText(/^\$\d+\.\d{2}$/);

          await expect(
            product.locator('img'),
          ).toBeVisible();

          await expect(
            product.getByRole('button', {
              name: 'Add to cart',
            }),
          ).toBeVisible();
        }
      },
    );

    test(
      'INV-003: sorts products by name from A to Z',
      async ({ inventoryPage }) => {
        const expectedNames = [
          ...expectedProductNames,
        ].sort((firstName, secondName) =>
          firstName.localeCompare(secondName),
        );

        await inventoryPage.selectSortOption('az');

        await expect(
          inventoryPage.sortDropdown,
        ).toHaveValue('az');

        await expect(
          inventoryPage.productNames,
        ).toHaveText(expectedNames);
      },
    );

    test(
      'INV-004: sorts products by name from Z to A',
      async ({ inventoryPage }) => {
        const expectedNames = [
          ...expectedProductNames,
        ].sort((firstName, secondName) =>
          secondName.localeCompare(firstName),
        );

        await inventoryPage.selectSortOption('za');

        await expect(
          inventoryPage.sortDropdown,
        ).toHaveValue('za');

        await expect(
          inventoryPage.productNames,
        ).toHaveText(expectedNames);
      },
    );

    test(
      'INV-005: sorts products by price from low to high',
      async ({ inventoryPage }) => {
        const expectedPrices = [
          ...expectedProductPrices,
        ].sort(
          (firstPrice, secondPrice) =>
            firstPrice - secondPrice,
        );

        await inventoryPage.selectSortOption(
          'lohi',
        );

        await expect(
          inventoryPage.sortDropdown,
        ).toHaveValue('lohi');

        const actualPrices =
          await inventoryPage.getProductPrices();
        // console.log('Actual prices:', actualPrices);

        expect(actualPrices).toEqual(
          expectedPrices,
        );
      },
    );

    test(
      'INV-006: sorts products by price from high to low',
      async ({ inventoryPage }) => {
        const expectedPrices = [
          ...expectedProductPrices,
        ].sort(
          (firstPrice, secondPrice) =>
            secondPrice - firstPrice,
        );

        await inventoryPage.selectSortOption(
          'hilo',
        );

        await expect(
          inventoryPage.sortDropdown,
        ).toHaveValue('hilo');

        const actualPrices =
          await inventoryPage.getProductPrices();

        expect(actualPrices).toEqual(
          expectedPrices,
        );
      },
    );
  },
);