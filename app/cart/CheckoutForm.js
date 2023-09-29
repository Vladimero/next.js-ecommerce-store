'use client';

import { useState } from 'react';

export default function CheckoutForm() {
  return (
    <form>
      <button data-test-id="cart-checkout">Proceed to Checkout</button>
      <button>Continue shopping</button>
    </form>
  );
}
