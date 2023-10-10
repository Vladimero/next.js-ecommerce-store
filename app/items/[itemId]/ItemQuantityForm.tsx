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
    <form onSubmit={handleSubmit}>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={handleChange}
      />
      <button data-test-id="product-add-to-cart" onClick={handleAddToCart}>
        Add to cart
      </button>
      <br />
      <br />
      <div>
        <Link href="/cart">
          <span>
            <button>View cart</button>
          </span>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/items">
          <span>
            <button>Continue Shopping</button>
          </span>
        </Link>
      </div>
    </form>
  );
}
