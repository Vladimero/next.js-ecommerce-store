'use server';

import { cookies } from 'next/headers';

type EmptyCart = [];

export async function removeAllItemFromCookies() {
  // Clear the cart by setting an empty array for the cart items
  const emptyCart: EmptyCart = [];

  // Update the cookie to reflect the empty cart
  await cookies().set('cart', JSON.stringify(emptyCart));
}
