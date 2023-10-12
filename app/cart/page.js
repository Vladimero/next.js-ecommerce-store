import '../globals.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getItems } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import EditAndRemoveForm from './EditAndRemoveForm';

export const metadata = {
  title: 'Cart',
  description: 'You chosen poodle goods',
};

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
      <div className="justify-center items-center min-h-screen w-full mb-14 p-6">
        <h1 className="font-bold text-4xl text-center pt-6">Your cart</h1>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price (€)</th>
                    <th>Quantity</th>
                    <th>Subtotal Price (€)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsWithQuantity.map((item) => (
                    <tr key={`items-${item.id}`}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <Link
                              data-test-id="cart-product-<product id>"
                              href={`/items/${item.id}`}
                            >
                              <div className="mask mask-squircle w-12 h-12">
                                <Image
                                  src={`/images/${item.name}.png`}
                                  alt={item.description}
                                  width={12}
                                  height={12}
                                  className="rounded-xl"
                                />
                              </div>
                            </Link>
                          </div>
                          <div>
                            <div className="font-bold">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {(
                          parseInt(item.quantity) * parseFloat(item.price)
                        ).toFixed(2)}
                      </td>
                      <td>
                        <EditAndRemoveForm itemId={item.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
            <div className="card w-96 bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {itemsWithQuantity.length === 0 ? null : (
                    <span data-test-id="cart-total">
                      Total Quantity: {totalQuantity}
                      {console.log(
                        'Total quantity of items:',
                        totalQuantity,
                      )}{' '}
                      items
                    </span>
                  )}
                  <br />
                  {itemsWithQuantity.length === 0 ? null : (
                    <span data-test-id="cart-total">
                      Total Price: {totalPrice.toFixed(2)}
                      {console.log('Total Price:', totalPrice)} €
                    </span>
                  )}
                </h2>
              </div>
              <form className="card-body items-center text-center">
                {itemsWithQuantity.length === 0 ? null : (
                  <div className="card-title">
                    <Link href="/checkout">
                      <span>
                        <button
                          data-test-id="cart-checkout"
                          className="btn btn-outline btn-wide btn-md"
                        >
                          Proceed to Checkout
                        </button>
                      </span>
                    </Link>
                  </div>
                )}
                <br />
                <div className="card-title">
                  <Link href="/items">
                    <span>
                      <button className="btn btn-outline">
                        Continue Shopping
                      </button>
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="justify-center items-center min-h-screen w-full mb-14 p-6"> */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price (€)</th>
              <th>Quantity</th>
              <th>Subtotal Price (€)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {itemsWithQuantity.map((item) => (
              <tr key={`items-${item.id}`}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <Link
                        data-test-id="cart-product-<product id>"
                        href={`/items/${item.id}`}
                      >
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={`/images/${item.name}.png`}
                            alt={item.description}
                            width={12}
                            height={12}
                            className="rounded-xl"
                          />
                        </div>
                      </Link>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  {(parseInt(item.quantity) * parseFloat(item.price)).toFixed(
                    2,
                  )}
                </td>
                <td>
                  <EditAndRemoveForm itemId={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {itemsWithQuantity.length === 0 ? null : (
              <span data-test-id="cart-total">
                Total Quantity: {totalQuantity}
                {console.log('Total quantity of items:', totalQuantity)} items
              </span>
            )}
            <br />
            {itemsWithQuantity.length === 0 ? null : (
              <span data-test-id="cart-total">
                Total Price: {totalPrice.toFixed(2)}
                {console.log('Total Price:', totalPrice)} €
              </span>
            )}
          </h2>
        </div>
        <form className="card-body items-center text-center">
          {itemsWithQuantity.length === 0 ? null : (
            <div className="card-title">
              <Link href="/checkout">
                <span>
                  <button
                    data-test-id="cart-checkout"
                    className="btn btn-outline btn-wide btn-md"
                  >
                    Proceed to Checkout
                  </button>
                </span>
              </Link>
            </div>
          )}
          <br />
          <div className="card-title">
            <Link href="/items">
              <span>
                <button className="btn btn-outline">Continue Shopping</button>
              </span>
            </Link>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
}
