'use client';

import { useState } from 'react';
import plusMinus from './actions';

export default function EditAndRemoveForm({
  itemId,
  currentQuantity,
  onRemove,
}) {
  const [quantity, setQuantity] = useState(currentQuantity);

  const handleIncrement = () => {
    const newQuantity = parseInt(quantity, 10) + 1;
    setQuantity(newQuantity);
    plusMinus(itemId, newQuantity); // Call plusMinus to update quantity in the cookie
  };

  const handleDecrement = () => {
    const newQuantity = parseInt(quantity, 10) - 1;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      plusMinus(itemId, newQuantity); // Call plusMinus to update quantity in the cookie
    }
  };

  const handleRemove = () => {
    onRemove();
    plusMinus(itemId, 0); // Call plusMinus with 0 quantity to remove the item from the cookie
  };

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button
        data-test-id="cart-product-remove-<product id>"
        onClick={handleRemove}
      >
        Remove
      </button>
    </form>
  );
}
