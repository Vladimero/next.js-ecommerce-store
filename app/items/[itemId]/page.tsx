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
    <div>
      <h1>{item.name}</h1>
      <div>
        <figure>
          <Image
            data-test-id="product-image"
            src={`/images/${item.name}.png`}
            alt={item.description}
            width={385}
            height={322}
          />
        </figure>
      </div>
      <div>
        <p>
          <span>{item.description}</span>
        </p>
      </div>
      <div>
        <p>
          <span data-test-id="product-price">Price: {item.price}€</span>
        </p>
      </div>
      <div>Added quantity: {itemQuantityToDisplay?.quantity}</div>
      <br />
      <ItemQuantityForm itemId={item.id} />
    </div>
  );
}
