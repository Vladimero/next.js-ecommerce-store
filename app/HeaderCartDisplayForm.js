import Image from 'next/image';
import Link from 'next/link';
import cartLogo from '../public/images/cartLogo.png';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default function HeaderCartDisplayForm() {
  const itemQuantityCookie = getCookie('cart');

  const itemQuantity = !itemQuantityCookie ? [] : parseJson(itemQuantityCookie);

  // Calculate total quantity
  const totalQuantity = itemQuantity.reduce((total, item) => {
    return total + parseFloat(item.quantity);
  }, 0);

  return (
    <Link href="/cart">
      <Image src={cartLogo} alt="Cart" width={40} height={40} />
      <span data-test-id="cart-count">{totalQuantity}</span>
    </Link>
  );
}
