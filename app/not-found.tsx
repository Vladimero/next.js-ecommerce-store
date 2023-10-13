import Head from 'next/head';

export default function RootNotFound() {
  return (
    <div>
      <Head>
        <title>Not Found Page</title>
        <meta
          name="description"
          content="This page appears when the user is trying to access a not existing page."
        />
      </Head>
      Sorry this page was not found make sure you visit a page that exists
    </div>
  );
}
