import Image from 'next/image';
import Link from 'next/link';
import { getItems } from '../database/items';
import brandLogo from '../public/images/brandLogo.png';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default async function NavbarForm() {
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
    <div className="navbar bg-base-100 fixed w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            htmlFor="DropdownMenuLeft"
            tabIndex={0}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/items" data-test-id="products-link">
                Products
              </Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <Image src={brandLogo} alt="Logo" width={200} height={40} />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="dropdown dropdown-end">
          <label
            htmlFor="MenuRight"
            tabIndex={0}
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                data-test-id="cart-count"
                className="badge badge-sm indicator-item"
              >
                {totalQuantity}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{totalQuantity} items</span>
              <span className="text-info">{totalPrice} €</span>
              <div className="card-actions">
                <Link data-test-id="cart-link" href="/cart">
                  <span>
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}