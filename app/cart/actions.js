'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeSingleItemFromCookies(itemId) {
  // get/choose the current cookie
  const itemQuantityCookie = getCookie('cart');

  // parse the cookie value & when cookie is undefined create an empty array
  const addedQuantities = !itemQuantityCookie
    ? []
    : parseJson(itemQuantityCookie);

  // edit the cookie value & get the object
  const itemQuantityToUpdate = addedQuantities.find((addedQuantity) => {
    return addedQuantity.id === itemId;
  });

  // If the item exists, remove it from the array using splice
  if (itemQuantityToUpdate !== -1) {
    addedQuantities.splice(itemQuantityToUpdate, 1);
  }

  // overwrite the cookie, add the new quantity to the cart, as a new value is pushed to the cookie array of quantities
  await cookies().set('cart', JSON.stringify(addedQuantities));
}
