'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { addToCard } from './actions';

type Props = {
  itemId: number;
};

export default function ItemQuantityForm(props: Props) {
  const [quantity, setQuantity] = useState('1');
  const router = useRouter();

  const handleAddToCart = async () => {
    const parsedQuantity = parseInt(quantity, 10);
    // Check if quantity is a valid positive number
    if (!isNaN(parsedQuantity) && parsedQuantity >= 1) {
      await addToCard(props.itemId, quantity);
      router.refresh();
    } else {
      alert('Please enter a positive quantity.');
    }
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(event.currentTarget.value);
  }

  return (
    <form className="card-text" onSubmit={handleSubmit}>
      <input
        type="number"
        className="input input-bordered w-1/4 input-md max-w-xs"
        data-test-id="product-quantity"
        min="1"
        value={quantity}
        onChange={handleChange}
      />
      <button
        className="btn btn-outline"
        data-test-id="product-add-to-cart"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
      <br />
      <br />
      <div>
        <Link href="/cart">
          <span>
            <button className="btn btn-outline btn-wide btn-md">
              View cart
            </button>
          </span>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/items">
          <span>
            <button className="btn btn-outline btn-wide btn-sm">
              Continue Shopping
            </button>
          </span>
        </Link>
      </div>
    </form>
  );
}
