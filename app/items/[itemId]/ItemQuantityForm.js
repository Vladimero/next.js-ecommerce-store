'use client';

import Link from 'next/link';
import { useState } from 'react';
import { addToCard } from './actions';

export default function ItemQuantityForm(props) {
  const [quantity, setQuantity] = useState('1');

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => await addToCard(props.itemId, quantity)}
      >
        Add to cart
      </button>
      <br />
      <Link href="/items">Continue shopping</Link>
    </form>
  );
}
