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
    await addToCard(props.itemId, quantity);
    router.refresh();
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    // Allow positive integers or default to 1 if input is invalid or empty
    const sanitizedValue = Math.max(parseInt(inputValue, 10) || 1, 1);
    setQuantity(String(sanitizedValue));
  }

  return (
    <form className="card-text" onSubmit={handleSubmit}>
      <input
        type="number"
        className="input input-bordered w-1/4 input-md max-w-xs"
        data-test-id="product-quantity"
        min={1}
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
