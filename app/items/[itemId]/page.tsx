import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getItemsById } from '../../../database/items';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ItemQuantityForm from './ItemQuantityForm';

type Props = {
  params: {
    itemId: string;
  };
};

export async function generateMetadata(props: Props) {
  const singleAnimal = await getItemsById(Number(props.params.itemId));

  return {
    title: singleAnimal ? singleAnimal.name : '',
  };
}

export default async function SingleItemPage(props: Props) {
  const item = await getItemsById(Number(props.params.itemId));

  if (!item) {
    notFound();
  }

  // catch the cookie from the actions.js file
  const addedQuantityCookie = getCookie('cart');
  // parse the cookie, because it was stringified in actions.js file & when cookie is undefined create an empty array
  const addedQuantities = !addedQuantityCookie
    ? []
    : parseJson(addedQuantityCookie);

  // Display only one added quantity, create a find method
  const itemQuantityToDisplay = addedQuantities?.find((addedQuantity) => {
    return addedQuantity.id === item.id;
  });

  return (
    <>
      <Head>
        <title>Single Item Page</title>
        <meta
          name="description"
          content={`Item name: ${item.name} Item description: ${item.description} Price: ${item.price} ${item.price}`}
        />
      </Head>
      <div className="grid justify-center items-center mb-24">
        <div className="card lg:card-side bg-base-200 shadow-xl">
          <figure className="px-5 pt-5 pb-5">
            <Image
              data-test-id="product-image"
              src={`/images/${item.name}.png`}
              alt={item.description}
              width={385}
              height={322}
              className="rounded-lg"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h1 className="card-title">{item.name}</h1>
            <p>{item.description}</p>
            <p>
              <span data-test-id="product-price">Price: {item.price}€</span>
            </p>
            <p>
              <span data-test-id="product-quantity">
                Added quantity: {itemQuantityToDisplay?.quantity}
              </span>
            </p>
            <div className="card-actions justify-end">
              <ItemQuantityForm itemId={item.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
