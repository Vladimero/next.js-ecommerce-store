import { expect, test } from '@jest/globals';

//  JEST: Test function that combines the product data from the
//  database with the product quantity data from your cookie

test('Subtotal in cart combined from price (database) and quantity (cookie)', () => {
  // Declare the function for the combine
  const subTotal = (quantity: number, price: number) => {
    return quantity * price;
  };
  // Define test values of database and cookie
  const testObject = {
    quantity: 3,
    price: 59,
  };

  expect(subTotal(testObject.quantity, testObject.price)).toBe(177);
});
