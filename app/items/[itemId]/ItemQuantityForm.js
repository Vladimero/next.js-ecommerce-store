'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addToCard } from './actions';

export default function ItemQuantityForm(props) {
  const [quantity, setQuantity] = useState('1');
  const router = useRouter();

  const handleAddToCart = async () => {
    await addToCard(props.itemId, quantity);
    router.refresh();
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button data-test-id="product-add-to-cart" onClick={handleAddToCart}>
        Add to cart
      </button>
      <br />
      <br />
      <Link href="/cart">
        <div>
          <button>View cart</button>
        </div>
      </Link>
      <br />
      <Link href="/items">
        <div>
          <button>Continue Shopping</button>
        </div>
      </Link>
    </form>
  );
}
