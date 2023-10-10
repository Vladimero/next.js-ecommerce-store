/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: ['autumn'],
  extend: {
    backgroundImage: {
      hero: "url('/Users/vladimirvorozbit/projects/next.js-ecommerce-store/public/images/heroImage.png')",
    },
  },

  plugins: [require('daisyui')],
};
