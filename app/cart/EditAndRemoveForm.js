'use client';

import { useState } from 'react';
import { removeItemFromCookies } from './actions';

export default function EditAndRemoveForm(props) {
  const [quantity, setQuantity] = useState('');

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <br />
      <br />
      <button
        data-test-id="cart-product-remove-<product id>"
        formAction={async () => await removeItemFromCookies(props.itemId)}
      >
        Remove
      </button>
    </form>
  );
}
