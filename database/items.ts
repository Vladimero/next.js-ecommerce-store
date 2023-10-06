import { cache } from 'react';
import { sql } from '../database/connect';

/*
export const items = [
  { id: 1, name: 'Orthopedic Poodle Bed', price: '59,00' },
  { id: 2, name: 'Grooming Kit', price: '29,00' },
  { id: 3, name: 'Leashes Set', price: '45,00' },
  { id: 4, name: 'Poodle Sweater', price: '34,00' },
];
*/

type Item = {
  id: number;
  name: string;
  price: string;
  description: string;
};

// put the array into a function
export const getItems = cache(async () => {
  const items = await sql<Item[]>`
  SELECT * FROM items
  `;
  return items;
});

export const getItemsById = cache(async (id: number) => {
  const [item] = await sql<Item[]>`
  SELECT * FROM items WHERE id = ${id}
  `;
  return item;
});
