'use client';

import Head from 'next/head';

export default function RootError() {
  return (
    <div>
      <Head>
        <title>Error Page</title>
        <meta
          name="description"
          content="This page appears when something went wrong on the application."
        />
      </Head>
      Ups! something went wrong
    </div>
  );
}
