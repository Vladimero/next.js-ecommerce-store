import { expect, test } from '@jest/globals';

//  JEST: Test cart sum function

test('Total price in cart should be calculated correctly', () => {
  // Define test values of database and cookie
  const testArray = [
    {
      id: 1,
      quantity: 2,
      price: 59,
    },
    {
      id: 3,
      quantity: 5,
      price: 45,
    },
  ];
  // Declare the function for the combine
  const totalPrice = testArray.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  expect(totalPrice).toBe(343);
});
