import '../globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { items } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckoutForm from './CheckoutForm';
import EditAndRemoveForm from './EditAndRemoveForm';

export default function CartPage() {
  // need this for the cart page --> until return JSX Code!
  const itemQuantityCookie = getCookie('cart');

  const itemQuantity = !itemQuantityCookie ? [] : parseJson(itemQuantityCookie);

  // Combine the cookie object with item object --> go with .map through the array --> try to .find if the item.id is in both arrays, when its find create a new variable and return it, otherwise return undefined
  const itemsWithQuantity = items.map((item) => {
    const matchingQuantity = itemQuantity.find(
      (quantityObject) => item.id === quantityObject.id,
    );
    return { ...item, quantity: matchingQuantity?.quantity };
  });
  console.log(itemsWithQuantity);

  return (
    <>
      <div>
        {itemsWithQuantity.map((item) => {
          return (
            <div key={`items-${item.id}`}>
              <Link href={`/items/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
              <div>
                <p>
                  <span data-test-id="product-price">Price: {item.price}€</span>
                </p>
              </div>
              <div>
                <p>
                  <span>Added quantity: {item.quantity}</span>
                </p>
              </div>
              <EditAndRemoveForm />
            </div>
          );
        })}
      </div>
      <b />
      <b />
      <b />
      <div>
        <CheckoutForm />
      </div>
    </>
  );
}
