import Link from 'next/link';
import React from 'react';

('use-client');

export default function PaymentCredentialsForm() {
  return (
    <>
      <h3>Payment Information</h3>
      <form>
        <div>
          <label htmlFor="Credit Card number">Credit Card number</label>
          <input data-test-id="checkout-credit-card" required />
        </div>
        <br />
        <div>
          <label htmlFor="Expiration date">Expiration date</label>
          <input data-test-id="checkout-expiration-date" required />
        </div>
        <br />
        <div>
          <label htmlFor="Security code">Security code</label>
          <input data-test-id="checkout-security-code" required />
        </div>
      </form>
      <br />
      <Link data-test-id="checkout-confirm-order" href="/thankYouPage">
        Confirm order!
      </Link>
    </>
  );
}
