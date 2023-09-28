// array, defining the products/items --> at least 4!
export const items = [
  { id: 1, name: 'Orthopedic Poodle Bed', price: '100,00' },
  { id: 2, name: 'Grooming Kit', price: '50,00' },
  { id: 3, name: 'Leashes Set', price: '50,00' },
  { id: 4, name: 'Poodle Sweater', price: '50,00' },
];

// put the array into a function
export function getItems() {
  return items;
}

export function getItemsById(id) {
  return items.find((item) => item.id === id);
}
