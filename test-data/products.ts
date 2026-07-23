export interface Product {
  name: string;
  price: number;
}

export const expectedProducts: readonly Product[] = [
  {
    name: 'Sauce Labs Backpack',
    price: 29.99,
  },
  {
    name: 'Sauce Labs Bike Light',
    price: 9.99,
  },
  {
    name: 'Sauce Labs Bolt T-Shirt',
    price: 15.99,
  },
  {
    name: 'Sauce Labs Fleece Jacket',
    price: 49.99,
  },
  {
    name: 'Sauce Labs Onesie',
    price: 7.99,
  },
  {
    name: 'Test.allTheThings() T-Shirt (Red)',
    price: 15.99,
  },
];

export const expectedProductNames = expectedProducts.map(
  ({ name }) => name,
);

export const expectedProductPrices = expectedProducts.map(
  ({ price }) => price,
);