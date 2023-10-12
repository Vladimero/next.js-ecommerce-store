import '../globals.css';
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
    <>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-96 card bg-base-100 rounded-box place-items-center m-4">
          <PersonalInformationForm />
        </div>
        <div className="divider lg:divider-horizontal" />
        <div className="grid flex-grow h-96 card bg-base-100 rounded-box place-items-center m-4">
          <PaymentCredentialsForm />
        </div>
      </div>

      {/* <div className="justify-center items-center min-h-screen w-full mb-14 p-6">
        <h1>Checkout</h1>
        <div>
          <form>
            {itemsWithQuantity.map((item) => {
              return (
                <div key={`items-${item.id}`}>
                  <Link
                    data-test-id="cart-product-<product id>"
                    href={`/items/${item.id}`}
                  >
                    <span>
                      <h3>{item.name}</h3>
                    </span>
                  </Link>
                </div>
              );
            })}
            <b />
            <b />
            <div>
              <div>
                <p>
                  <span data-test-id="cart-total">
                    Total Quantity: {totalQuantity} items
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span data-test-id="cart-total">
                    Total Price: {totalPrice.toFixed(2)} €
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
        <p>Please fill the fields!</p>
        <div>
          <PersonalInformationForm />
        </div>
        <br />
        <div>
          <button>
            <PaymentCredentialsForm />
          </button>
        </div>
          </div>*/}
    </>
  );
}
