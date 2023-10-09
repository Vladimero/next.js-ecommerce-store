import { cache } from 'react';
import { sql } from '../database/connect';
import { Item } from '../migrations/00000-createTableItems';

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
