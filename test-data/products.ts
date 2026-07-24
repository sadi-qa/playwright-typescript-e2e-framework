export interface Product {
  name: string;
  price: number;
}

export const expectedProducts: readonly Product[] = [
  {
    name: "Sauce Labs Backpack",
    price: 29.99,
  },
  {
    name: "Sauce Labs Bike Light",
    price: 9.99,
  },
  {
    name: "Sauce Labs Bolt T-Shirt",
    price: 15.99,
  },
  {
    name: "Sauce Labs Fleece Jacket",
    price: 49.99,
  },
  {
    name: "Sauce Labs Onesie",
    price: 7.99,
  },
  {
    name: "Test.allTheThings() T-Shirt (Red)",
    price: 15.99,
  },
];

export const expectedProductNames = expectedProducts.map(({ name }) => name);

export const expectedProductPrices = expectedProducts.map(({ price }) => price);

const requireProduct = (name: string): Product => {
  const product = expectedProducts.find((candidate) => candidate.name === name);

  if (!product) {
    throw new Error(`Required product was not found: ${name}`);
  }

  return product;
};

export const cartProducts = {
  backpack: requireProduct("Sauce Labs Backpack"),

  bikeLight: requireProduct("Sauce Labs Bike Light"),

  fleeceJacket: requireProduct("Sauce Labs Fleece Jacket"),
} as const;
