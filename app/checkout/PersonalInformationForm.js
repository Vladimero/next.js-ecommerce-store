// 'use client';

import Link from 'next/link';
import React from 'react';
import { getItems } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function PersonalInformationForm() {
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
      <h3>Personal Information</h3>
      <form>
        <div>
          {itemsWithQuantity.map((item) => {
            return (
              <div key={`items-${item.id}`}>
                <Link
                  data-test-id="cart-product-<product id>"
                  href={`/items/${item.id}`}
                >
                  <h3>{item.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <b />
        <b />
        <div>
          <div>
            <p>
              <span data-test-id="cart-total">
                Total Quantity: {totalQuantity}
                {console.log('Total quantity of items:', totalQuantity)} items
              </span>
            </p>
          </div>
          <div>
            <p>
              <span data-test-id="cart-total">
                Total Price: {totalPrice.toFixed(2)}
                {console.log('Total Price:', totalPrice)} €
              </span>
            </p>
          </div>
        </div>
        <div>
          <label htmlFor="First Name">First Name: </label>
          <input
            data-test-id="checkout-first-name"
            id="firstName"
            name="First Name"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Last Name">Last Name: </label>
          <input
            data-test-id="checkout-last-name"
            id="lastName"
            name="Last Name"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Email">Email: </label>
          <input
            data-test-id="checkout-email"
            id="email"
            name="Email"
            inputMode="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Address">Address: </label>
          <input
            data-test-id="checkout-address"
            id="address"
            name="Address"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="City">City: </label>
          <input
            data-test-id="checkout-city"
            id="city"
            name="City"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Postal code">Postal code: </label>
          <input
            data-test-id="checkout-postal-code"
            id="postalCode"
            name="Postal code"
            inputMode="numeric"
            pattern="[0-9]{5}"
            title="Please enter a valid postal code"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Country">Country: </label>
          <input
            data-test-id="checkout-country"
            id="country"
            name="Country"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
      </form>
    </>
  );
}
