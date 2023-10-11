import './globals.css';
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
