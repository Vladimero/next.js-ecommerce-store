import './globals.scss';
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
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            <div className={styles.topBarContainerInner}>
              <p>Made in Austria</p>
              <p>Exclusive</p>
              <p>Worldwide free shipping</p>
            </div>
          </div>
        </div>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.headerContainerInner}>
              <div>
                <ul className={styles.mainMenu}>
                  <li>
                    <Link href="/items" data-test-id="products-link">
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={styles.headerLogo}>
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
                <ul className={styles.headerRight}>
                  <li>
                    <HeaderCartDisplayForm data-test-id="cart-link" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <div>{props.children}</div>

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