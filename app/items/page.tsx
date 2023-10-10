import '../globals.css';
import Image from 'next/image';
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
              data-test-id={`product-${item.id}`}
              href={`/items/${item.id}`}
            >
              <h1>{item.name}</h1>
              <figure>
                <Image
                  data-test-id="product-image"
                  src={`/images/${item.name}.png`}
                  alt={item.description}
                  width={385}
                  height={322}
                />
              </figure>
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
