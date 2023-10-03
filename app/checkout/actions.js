'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeAllItemFromCookies() {
  // Clear the cart by setting an empty array for the cart items
  const emptyCart = [];

  // Update the cookie to reflect the empty cart
  await cookies().set('cart', JSON.stringify(emptyCart));
}
