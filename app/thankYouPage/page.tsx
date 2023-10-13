import '../globals.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImage from '../../public/images/heroImage.png';

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
      <div className="hero min-h-screen">
        <Image
          src={heroImage}
          alt="1"
          width={500}
          height={200}
          className="w-full"
        />
        <div className="hero-overlay bg-opacity-40" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl">Thank you for your order</h1>
            <Link href="/" className="btn btn-neutral btn-wide btn-md">
              Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
