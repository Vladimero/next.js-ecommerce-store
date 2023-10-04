'use client';

import React from 'react';

export default function PersonalInformationForm() {
  return (
    <>
      <h3>Personal Information</h3>
      <form onSubmit={(event) => event.preventDefault()} required>
        <div>
          <label htmlFor="First Name">First Name</label>
          <input
            data-test-id="checkout-first-name"
            id="firstName"
            name="First Name"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Last Name">Last Name</label>
          <input
            data-test-id="checkout-last-name"
            id="lastName"
            name="Last Name"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Email">Email</label>
          <input
            data-test-id="checkout-email"
            id="email"
            name="Email"
            inputMode="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Address">Address</label>
          <input
            data-test-id="checkout-address"
            id="address"
            name="Address"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="City">City</label>
          <input
            data-test-id="checkout-city"
            id="city"
            name="City"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Postal code">Postal code</label>
          <input
            data-test-id="checkout-postal-code"
            id="postalCode"
            name="Postal code"
            inputMode="numeric"
            pattern="[0-9]{5}"
            title="Please enter a valid postal code"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="Country">Country</label>
          <input
            data-test-id="checkout-country"
            id="country"
            name="Country"
            inputMode="text"
            pattern="[A-Za-z\s]+"
            title="Please enter text only (no numbers)"
            autoComplete="on"
            required
          />
        </div>
      </form>
    </>
  );
}
