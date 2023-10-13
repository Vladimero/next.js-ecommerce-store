import '../globals.css';
import Head from 'next/head';
import Link from 'next/link';
import { getItems } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import PaymentCredentialsForm from './PaymentCredentialsForm';
import PersonalInformationForm from './PersonalInformationForm';

export const metadata = {
  title: 'Checkout',
  description: 'Please fill the fields',
};

export default async function CheckoutPage() {
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
    <div className="flex flex-col w-full lg:flex-row">
      <Head>
        <title>Checkout Page</title>
        <meta
          name="description"
          content="Fill the fields and provide your personal and payment data."
        />
      </Head>
      <div className="grid flex-grow h-128 card bg-base-100 rounded-box place-items-center m-4">
        <PersonalInformationForm />
      </div>
      <div className="grid flex-grow h-128 card bg-base-100 rounded-box place-items-center m-4">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <h3>
                <span data-test-id="cart-total">
                  Total Quantity:{' '}
                  <h3 className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    {totalQuantity} items
                  </h3>
                </span>
              </h3>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3>
                <span data-test-id="cart-total">
                  Total Price:{' '}
                  <h3 className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    {totalPrice.toFixed(2)} €
                  </h3>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <PaymentCredentialsForm />
      </div>
    </div>
  );
}
