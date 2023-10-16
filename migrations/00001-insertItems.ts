import { Sql } from 'postgres';

export type DatabaseType = {
  id: number;
  name: string;
  price: string;
  description: string;
};

// there is the need to manually create this array of objects
export const items: DatabaseType[] = [
  {
    id: 1,
    name: 'Orthopedic Poodle Bed',
    price: '59,00',
    description:
      'Indulge your poodle with the ultimate comfort for a restful & happy sleep',
  },
  {
    id: 2,
    name: 'Grooming Kit',
    price: '29,00',
    description:
      'Everything you need for a stylish, well-groomed poodle. All in one convenient kit',
  },
  {
    id: 3,
    name: 'Leashes Set',
    price: '45,00',
    description:
      'Experience safe and stylish walks with our durable & vibrant leashes for your beloved poodle',
  },
  {
    id: 4,
    name: 'Poodle Sweater',
    price: '34,00',
    description:
      'Keep your poodle warm and adorable in this cozy sweater. Perfect for a fashionable statement',
  },
  {
    id: 5,
    name: 'Pendant Necklace',
    price: '23,00',
    description:
      'An elegant pendant showcasing a refined poodle silhouette design',
  },
  {
    id: 6,
    name: 'Interactive Puzzle Toy',
    price: '19,00',
    description:
      'Engage your poodle with this stimulating and enjoyable interactive toy for mental exercise',
  },
  {
    id: 7,
    name: 'Poodle Dental Care Kit',
    price: '39,00',
    description:
      'Ensure your poodles smile stays healthy and bright with our comprehensive dental care kit',
  },
  {
    id: 8,
    name: 'Training Treat Pouch',
    price: '27,00',
    description:
      'A convenient pouch for carrying treats. Perfect for rewarding and training your beloved poodle',
  },
  {
    id: 9,
    name: 'Poodle Pattern T-Shirt',
    price: '29,00',
    description:
      'Display your poodle love with style in this comfortable t-shirt featuring charming poodle patterns',
  },
];

export async function up(sql: Sql) {
  // loop over the array of objects in order to not hardcode
  for (const item of items) {
    await sql`
       INSERT INTO items
          (name, price, description)
      VALUES
          (${item.name}, ${item.price}, ${item.description})
    `;
  }
}

export async function down(sql: Sql) {
  for (const item of items) {
    await sql`
       DELETE FROM items WHERE id = ${item.id}
    `;
  }
}
