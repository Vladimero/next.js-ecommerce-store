import '../globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { items } from '../../database/items';

export default function ItemPage() {
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
