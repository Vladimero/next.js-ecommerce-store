import '../globals.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ThankYouPage() {
  return (
    <div>
      <Head>
        <title>Thank You Page</title>
        <meta
          name="description"
          content="We appreciate your trust in our products!"
        />
      </Head>
      Thank you for your order
    </div>
  );
}
