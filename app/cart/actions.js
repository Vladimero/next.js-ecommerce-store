/*'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function plusMinus(itemId, newQuantity) {
  // get the current cookie
  const itemQuantityCookie = getCookie('cart');
  // parse the cookie value & when cookie is undefined create an empty array
  const addedQuantities = !itemQuantityCookie
    ? []
    : parseJson(itemQuantityCookie);

  // Find the item in the cart
  const itemIndex = addedQuantities.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    // If item is found, update the quantity
    if (newQuantity > 0) {
      addedQuantities[itemIndex].quantity = newQuantity;
    } else {
      // If new quantity is 0, remove the item
      addedQuantities.splice(itemIndex, 1);
    }
  } else if (newQuantity > 0) {
    // If item is not in the cart and new quantity is greater than 0, add it
    addedQuantities.push({ id: itemId, quantity: newQuantity });
  }

  // Overwrite the cookie with the updated cart
  await cookies().set('cart', JSON.stringify(addedQuantities));
}
*/
