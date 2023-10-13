'use client';

import React from 'react';

export default function PersonalInformationForm() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form>
          <div className="mb-5">
            <label
              htmlFor="Personal Information"
              className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"
            >
              Personal Information
            </label>
            <label
              htmlFor="First Name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
          <div className="mb-5">
            <label
              htmlFor="Last Name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
          <div className="mb-5">
            <label
              htmlFor="Email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              data-test-id="checkout-email"
              id="email"
              name="Email"
              type="email"
              inputMode="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address"
              autoComplete="on"
              required
            />
          </div>

          <div className="mb-5 pt-3">
            <label
              htmlFor="Address"
              className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"
            >
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="Address"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Street
                  </label>
                  <input
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="City"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    City
                  </label>
                  <input
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="Country"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Country
                  </label>
                  <input
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="Postal code"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Postal code
                  </label>
                  <input
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    data-test-id="checkout-postal-code"
                    id="postalCode"
                    name="Postal code"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    title="Please enter a valid postal code"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
