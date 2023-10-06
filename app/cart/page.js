import '../globals.scss';
import Link from 'next/link';
import React from 'react';
import { getItems } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import EditAndRemoveForm from './EditAndRemoveForm';

export default async function CartPage() {
  const items = await getItems();
  // get/choose the current cookie
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
    // Filter out items with undefined quantity --> Display only added items in cart
    .filter((item) => item.quantity !== undefined);

  console.log('Added items to cart:', itemsWithQuantity);

  // Calculate total price in cart
  const totalPrice = itemsWithQuantity.reduce((total, item) => {
    const itemTotalPrice = parseFloat(item.quantity) * parseFloat(item.price);
    return total + itemTotalPrice;
  }, 0);

  // Calculate total quantity in cart
  const totalQuantity = itemsWithQuantity.reduce((total, item) => {
    return total + parseFloat(item.quantity);
  }, 0);

  return (
    <>
      <h1>Your cart</h1>
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
                  <h3>{item.name}</h3>
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
                      {console.log(
                        'Subtotal Price:',
                        (
                          parseInt(item.quantity) * parseFloat(item.price)
                        ).toFixed(2),
                      )}
                      €
                    </span>
                  </p>
                </div>
                <EditAndRemoveForm itemId={item.id} />
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
                Total Quantity: {totalQuantity}
                {console.log('Total quantity of items:', totalQuantity)} items
              </span>
            )}
          </p>
        </div>
        <div>
          <p>
            {itemsWithQuantity.length === 0 ? null : (
              <span data-test-id="cart-total">
                Total Price: {totalPrice.toFixed(2)}
                {console.log('Total Price:', totalPrice)} €
              </span>
            )}
          </p>
        </div>
        <div>
          <form>
            {itemsWithQuantity.length === 0 ? null : (
              <Link href="/checkout">
                <div>
                  <button data-test-id="cart-checkout">
                    Proceed to Checkout
                  </button>
                </div>
              </Link>
            )}
            <br />
            <Link href="/items">
              <div>
                <button>Continue Shopping</button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
