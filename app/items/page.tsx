import '../globals.scss';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getItems } from '../../database/items';

export const metadata = {
  title: 'Poodle goods page',
  description: 'Choose your poodle goods',
};

export default async function ItemsPage() {
  const items = await getItems();

  if (!items) {
    return notFound();
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={`items-${item.id}`}>
            <Link
              data-test-id="product-<product id>"
              href={`/items/${item.id}`}
            >
              <h1>{item.name}</h1>
            </Link>
            <div>
              <p>
                <span data-test-id="product-price">Price: {item.price}€</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
