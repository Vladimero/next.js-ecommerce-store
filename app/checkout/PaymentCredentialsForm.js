'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { removeAllItemFromCookies } from './actions';

export default function PaymentCredentialsForm() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const router = useRouter();

  const handleConfirmOrder = async (event) => {
    event.preventDefault();
    if (
      creditCardNumber === '' ||
      !creditCardNumber.match(/^\d{4} \d{4} \d{4} \d{4}$/) ||
      expirationDate === '' ||
      !expirationDate.match(/^\d{2} \/ \d{2}$/) ||
      securityCode === '' ||
      !securityCode.match(/^\d{3}$/)
    ) {
      alert('Enter a valid credit card number.');
      return;
    }
    await removeAllItemFromCookies();
    router.push('/thankYouPage');
  };

  return (
    <>
      <h3>Payment Information</h3>
      <form onSubmit={(event) => handleConfirmOrder(event)} required>
        <div>
          <label htmlFor="Credit Card number">Credit Card number</label>
          <input
            data-test-id="checkout-credit-card"
            id="creditCardNumber"
            name="Credit Card Number"
            type="tel"
            inputMode="numeric"
            placeholder="xxxx xxxx xxxx xxxx"
            maxLength="19"
            autoComplete="off"
            pattern="^\d{4} \d{4} \d{4} \d{4}$"
            value={creditCardNumber}
            onChange={(event) => {
              const input = event.target.value;
              // Allow only numbers and spaces
              const sanitizedInput = input.replace(/[^0-9 ]/g, '');
              setCreditCardNumber(sanitizedInput);
            }}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Expiration date">Expiration date</label>
          <input
            data-test-id="checkout-expiration-date"
            id="expirationDate"
            name="Expiration Date"
            type="tel"
            inputMode="numerical"
            placeholder="MM / YY"
            maxLength="7"
            autoComplete="off"
            pattern="^\d{2} \/ \d{2}$"
            value={expirationDate}
            onChange={(event) => {
              const input = event.target.value;
              // Allow only numbers, space, and slash
              const sanitizedInput = input.replace(/[^0-9 /]/g, '');
              setExpirationDate(sanitizedInput);
            }}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Security code">Security code</label>
          <input
            data-test-id="checkout-security-code"
            id="securityCode"
            name="Security Code"
            type="tel"
            inputMode="numerical"
            placeholder="CVC"
            max="999"
            maxLength="3"
            autoComplete="off"
            pattern="^\d{3}$"
            value={securityCode}
            onChange={(event) => {
              const input = event.target.value;
              // Allow only numbers
              const sanitizedInput = input.replace(/[^0-9]/g, '');
              setSecurityCode(sanitizedInput);
            }}
            required
          />
        </div>
        <br />
        <Link data-test-id="checkout-confirm-order" href="/thankYouPage">
          <div>
            <button onClick={(event) => handleConfirmOrder(event)}>
              Confirm order!
            </button>
          </div>
        </Link>
      </form>
    </>
  );
}
