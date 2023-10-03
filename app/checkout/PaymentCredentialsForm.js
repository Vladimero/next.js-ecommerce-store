'use client';

import Link from 'next/link';
import React from 'react';
import { removeAllItemFromCookies } from './actions';

// import { useState } from 'react';

export default function PaymentCredentialsForm() {
  // const [creditCardNumber, setCreditCardNumber] = useState('');
  // const [expirationDate, setExpirationDate] = useState('');
  // const [securityCode, setSecurityCode] = useState('');
  const handleConfirmOrder = async () => {
    /*if (
      creditCardNumber === '' ||
      !creditCardNumber.match(/^\d{13,19}$/) ||
      expirationDate === '' ||
      !expirationDate.match(/^\d[0-9]*$/) ||
      securityCode === '' ||
      !securityCode.match(/^\d[0-9]|[0-9]|[0-9]*$/)
    ) {
      alert('Enter a valid credit card number.');
      return;
    }
    */
    await removeAllItemFromCookies();
  };

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
            // value={creditCardNumber}
            // onChange={(e) => setCreditCardNumber(e.target.value)}
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
            // value={expirationDate}
            // onChange={(e) => setExpirationDate(e.target.value)}
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
            // value={securityCode}
            // onChange={(e) => setSecurityCode(e.target.value)}
            required
          />
        </div>
        <br />
        <Link data-test-id="checkout-confirm-order" href="/thankYouPage">
          <div>
            <button onClick={handleConfirmOrder}>Confirm order!</button>
          </div>
        </Link>
      </form>
    </>
  );
}
