'use client';

import Link from 'next/link';
import React from 'react';

export default function PaymentCredentialsForm() {
  return (
    <>
      <h3>Payment Information</h3>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <label htmlFor="Credit Card number">Credit Card number</label>
          <input
            data-test-id="checkout-credit-card"
            name="CreditCardNumber"
            type="tel"
            inputMode="numeric"
            placeholder="xxxx xxxx xxxx xxxx"
            maxLength="19"
            autoComplete="off"
            pattern="[0-9\s]{13,19}"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Expiration date">Expiration date</label>
          <input
            data-test-id="checkout-expiration-date"
            name="ExpirationDate"
            type="tel"
            inputMode="numerical"
            placeholder="MM / YY"
            maxLength="2"
            autoComplete="off"
            pattern="[0-9]*"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Security code">Security code</label>
          <input
            data-test-id="checkout-security-code"
            name="SecurityCode"
            type="tel"
            inputMode="numerical"
            placeholder="CVC"
            max="999"
            maxLength="3"
            autoComplete="off"
            pattern="([0-9]|[0-9]|[0-9])"
            required
          />
        </div>
      </form>
      <br />
      <Link data-test-id="checkout-confirm-order" href="/thankYouPage">
        <div>
          <button>Confirm order!</button>
        </div>
      </Link>
    </>
  );
}
