'use server';

import { cookies } from 'next/headers';
import { parseJson } from '../../util/json';

export async function removeAllCookies(itemId, quantity) {
  cookies().delete('cart');
}
