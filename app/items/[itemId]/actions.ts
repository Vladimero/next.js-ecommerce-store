'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type AddedQuantity = {
  id: number;
  quantity: string;
};

export async function addToCard(itemId: number, quantity: string) {
  // get/choose the current cookie
  const itemQuantityCookie = getCookie('cart');
  // parse the cookie value & when cookie is undefined create an empty array
  const addedQuantities = !itemQuantityCookie
    ? []
    : parseJson(itemQuantityCookie) || [];

  // edit the cookie value & get the object
  const itemQuantityToUpdate = addedQuantities.find((addedQuantity) => {
    return addedQuantity.id === itemId;
  });

  // search for the id, if id is there, then change the quantity, if not push id to the array
  if (itemQuantityToUpdate) {
    itemQuantityToUpdate.quantity = quantity;
  } else {
    addedQuantities.push({
      id: itemId,
      quantity: quantity,
    });
  }
  // overwrite the cookie, add the new quantity to the cart, as a new value is pushed to the cookie array of quantities
  await cookies().set('cart', JSON.stringify(addedQuantities));
}
