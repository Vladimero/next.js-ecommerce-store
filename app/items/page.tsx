import '../globals.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getItems } from '../../database/items';

export const metadata = {
  title: 'Poodle goods page',
  description: 'Choose your poodle goods',
};

// in order to avoid ESLint message of the initial falsy value of items in the if statement
function isNullOrUndefined(value: unknown): boolean {
  return value === null || value === undefined;
}

export default async function ItemsPage() {
  const items = await getItems();

  if (isNullOrUndefined(items)) {
    return notFound();
  }

  return (
    <div className="grid justify-center items-center mb-24">
      <Head>
        <title>Items Page</title>
        <meta
          name="description"
          content="Discover our divers collection of poodle items."
        />
      </Head>
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        {items.map((item) => {
          return (
            <div
              className="card w-96 overflow-hidden bg-base-200 shadow-xl"
              key={`items-${item.id}`}
            >
              <Link
                data-test-id={`product-${item.id}`}
                href={`/items/${item.id}`}
              >
                <figure className="px-10 pt-10">
                  <Image
                    data-test-id="product-image"
                    src={`/images/${item.name}.png`}
                    alt={item.description}
                    width={385}
                    height={322}
                    className="rounded-lg"
                  />
                </figure>
              </Link>
              <div className="card-body items-center text-center">
                <h1 className="card-title font-bold">{item.name}</h1>
                <div className="card-actions">
                  <Link href={`/items/${item.id}`}>
                    <span>
                      <button className="btn btn-outline">Buy now</button>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
