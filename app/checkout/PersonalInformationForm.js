import Link from 'next/link';
import React from 'react';

('use-client');

export default function PersonalInformationForm() {
  return (
    <>
      <h3>Personal Information</h3>
      <form>
        <div>
          <label htmlFor="First Name">First Name</label>
          <input data-test-id="checkout-first-name" required />
        </div>
        <br />
        <div>
          <label htmlFor="Last Name">Last Name</label>
          <input data-test-id="checkout-last-name" required />
        </div>
        <br />
        <div>
          <label htmlFor="Email">Email</label>
          <input data-test-id="checkout-email" required />
        </div>
        <br />
        <div>
          <label htmlFor="Address">Address</label>
          <input data-test-id="checkout-address" required />
        </div>
        <br />
        <div>
          <label htmlFor="City">City</label>
          <input data-test-id="checkout-city" required />
        </div>
        <br />
        <div>
          <label htmlFor="Postal code">Postal code</label>
          <input data-test-id="checkout-postal-code" required />
        </div>
        <br />
        <div>
          <label htmlFor="Country">Country</label>
          <input data-test-id="checkout-country" required />
        </div>
      </form>
    </>
  );
}
