import '../globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { items } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function ItemPage() {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={`items-${item.id}`}>
            <Link href={`/items/${item.id}`}>
              <h1>
                {item.name} {item.price}
              </h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
