import 'server-only';

// array, defining the products/items --> at least 4!
export const goods = [
  { id: 1, name: 'Orthopedic Poodle Beds', price: '100,00 €' },
  { id: 2, name: 'Grooming Kit', price: '50,00 €' },
  { id: 3, name: 'Leashes Set', price: '50,00 €' },
  { id: 4, name: 'sweaters', price: '50,00 €' },
];

// put the array into a function
export function getGoods() {
  return goods;
}

export function getGoodsById(id) {
  return goods.find((good) => good.id === id);
}
