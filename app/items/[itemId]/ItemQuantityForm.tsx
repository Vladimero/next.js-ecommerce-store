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
