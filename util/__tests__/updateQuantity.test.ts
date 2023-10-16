import { expect, test } from '@jest/globals';

//  JEST: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)

type AddedQuantity = {
  id: number;
  quantity: number;
};

// Declare test value of a cookie
const quantity = 4;
const itemId = 2;

// Define an updater function
const updateQuantity = (
  quantityCookie: AddedQuantity[],
  id: number,
  newQuantity: number,
): AddedQuantity[] => {
  const currentCookie = quantityCookie.find((cookie) => cookie.id === id);

  if (currentCookie) {
    currentCookie.quantity += newQuantity;
  } else {
    quantityCookie.push({
      id: itemId,
      quantity: newQuantity,
    });
  }

  return quantityCookie;
};

test('Test function for updating quantity in item of cookie', () => {
  // Define new cookie value on the same item (id)
  const newQuantities: AddedQuantity[] = [{ id: 2, quantity: 2 }];
  const updatedQuantities = updateQuantity(newQuantities, itemId, quantity);

  expect(updatedQuantities).toEqual([{ id: 2, quantity: 6 }]);
});
