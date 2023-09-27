import '../globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { goods } from '../../database/products';

export default function ProductsPage() {
  return (
    <div>
      {goods.map((good) => {
        return (
          <div key={`poodleGood-${good.id}`}>
            <Link href={`/products/${good.id}`}>
              <h1>
                {good.name} {good.price}
              </h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
