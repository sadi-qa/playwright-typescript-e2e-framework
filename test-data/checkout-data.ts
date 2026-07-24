export interface CustomerInformation {
  firstName: string;

  lastName: string;

  postalCode: string;
}

export const validCustomer: CustomerInformation = {
  firstName: 'Sadi',

  lastName: 'Tester',

  postalCode: 'H3H 1A1',
};

export const checkoutMessages = {
  firstNameRequired:
    'Error: First Name is required',

  lastNameRequired:
    'Error: Last Name is required',

  postalCodeRequired:
    'Error: Postal Code is required',

  orderComplete:
    'Thank you for your order!',

  orderDispatch:
    'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
} as const;