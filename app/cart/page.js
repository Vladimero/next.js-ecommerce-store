import '../globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { items } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import EditAndRemoveForm from './EditAndRemoveForm';

export default function CartPage() {
  // need this for the cart page --> until return JSX Code!
  const itemQuantityCookie = getCookie('cart');

  const itemQuantity = !itemQuantityCookie ? [] : parseJson(itemQuantityCookie);

  // Combine the cookie object with item object --> go with .map through the array --> try to .find if the item.id is in both arrays, when its find create a new variable and return it, otherwise return undefined
  const itemsWithQuantity = items
    .map((item) => {
      const matchingQuantity = itemQuantity.find(
        (quantityObject) => item.id === quantityObject.id,
      );
      return { ...item, quantity: matchingQuantity?.quantity };
    })
    .filter((item) => item.quantity !== undefined); // Filter out items with undefined quantity

  console.log(itemsWithQuantity);

  const totalPrice = itemsWithQuantity.reduce((total, item) => {
    const itemTotalPrice = parseFloat(item.quantity) * parseFloat(item.price);
    return total + itemTotalPrice;
  }, 0);

  console.log('Total Price:', totalPrice);

  return (
    <>
      <div>
        {itemsWithQuantity.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          itemsWithQuantity.map((item) => {
            return (
              <div key={`items-${item.id}`}>
                <Link
                  data-test-id="cart-product-<product id>"
                  href={`/items/${item.id}`}
                >
                  <h1>{item.name}</h1>
                </Link>
                <div>
                  <p>
                    <span data-test-id="product-price">
                      Price: {item.price}€
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    <span data-test-id="cart-product-quantity-<product id>">
                      Added quantity: {item.quantity}
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>
                      Subtotal Price:{' '}
                      {(
                        parseInt(item.quantity) * parseFloat(item.price)
                      ).toFixed(2)}{' '}
                      €
                    </span>
                  </p>
                </div>
                <EditAndRemoveForm />
              </div>
            );
          })
        )}
      </div>
      <b />
      <b />
      <b />
      <div>
        <div>
          <p>
            {itemsWithQuantity.length === 0 ? null : (
              <span data-test-id="cart-total">
                Total Price: {totalPrice.toFixed(2)} €
              </span>
            )}
          </p>
        </div>
        <form>
          {itemsWithQuantity.length === 0 ? null : (
            <Link href="/checkout" data-test-id="cart-checkout">
              Proceed to Checkout
            </Link>
          )}
          <br />
          <Link href="/items">Continue shopping</Link>
        </form>
      </div>
    </>
  );
}
