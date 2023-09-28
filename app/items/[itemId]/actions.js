'use server';

import { cookies } from 'next/headers';

// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';

export async function addToCard(quantity) {
  await cookies().set(
    'addedQuantity',
    JSON.stringify([{ id: 1, quantity: quantity }]),
  );
}
