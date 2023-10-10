import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import brandLogo from '../public/images/brandLogo.png';
import HeaderCartDisplayForm from './HeaderCartDisplayForm';
import styles from './layout.module.scss';

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
        <header>
          <div>
            <div>
              <div>
                <ul>
                  <li>
                    <Link href="/items" data-test-id="products-link">
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link href="/">
                      <Image
                        src={brandLogo}
                        alt="Logo"
                        width={200}
                        height={40}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <HeaderCartDisplayForm data-test-id="cart-link" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {props.children}

        {/*
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerContainerInner}>
              <div>
                <ul>
                  <li>Legacy</li>
                  <li>
                    <Link href="/#">Contact</Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <Link href="/">Logo</Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>Social Icons</li>
                </ul>
              </div>
            </div>
          </div>
  </footer>
  */}
      </body>
    </html>
  );
}
