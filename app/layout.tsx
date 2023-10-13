import './globals.css';
import Head from 'next/head';
import { ReactNode } from 'react';
import FooterForm from './FooterForm';
import NavbarForm from './NavbarForm';

export const metadata = {
  title: { default: 'Poodlemania', template: '%s | YourPoodleshop' },
  description: 'Your trusty Poodle goods store',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <Head>
        <title>Wrapper Page</title>
        <meta
          name="description"
          content="This page wraps all the necessary pages on our website."
        />
      </Head>
      <body>
        <NavbarForm />
        <main className="container mx-auto pt-20 min-h-screen">
          {props.children}
        </main>
        <FooterForm />
      </body>
    </html>
  );
}
