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
      alert('Enter valid Payment credentials');
      return; // single return means: do nothing and stop here
    }
    await removeAllItemFromCookies();
    router.push('/thankYouPage');
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-medium mb-6">Payment Information</h2>
        <form>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="Credit Card number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="Expiration date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expiration Date
              </label>

              <input
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="Security code"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                CVV
              </label>

              <input
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
          </div>
          <div className="mt-8">
            <Link data-test-id="checkout-confirm-order" href="/thankYouPage">
              <span>
                <button
                  className="btn-outline w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                  onClick={(event) => handleConfirmOrder(event)}
                >
                  Submit
                </button>
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
