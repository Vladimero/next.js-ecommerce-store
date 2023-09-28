'use client';

import { useState } from 'react';

export default function EditAndRemoveForm() {
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
      <button>Add</button>
      <button>Remove</button>
    </form>
  );
}
