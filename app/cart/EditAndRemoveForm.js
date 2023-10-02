'use client';

import { useState } from 'react';

export default function EditAndRemoveForm() {
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
      <button>+</button>
      <button>-</button>
      <button data-test-id="cart-product-remove-<product id>">Remove</button>
    </form>
  );
}
