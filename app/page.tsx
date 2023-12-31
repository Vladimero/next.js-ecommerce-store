import './globals.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import heroImageFour from '../public/images/heroImageFour.png';
import heroImageHomepage from '../public/images/heroImageHomepage.png';
import heroImageOne from '../public/images/heroImageOne.png';
import heroImageThree from '../public/images/heroImageThree.png';
import heroImageTwo from '../public/images/heroImageTwo.png';
import NavbarForm from './NavbarForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta
          name="description"
          content="Our divers poodle goods shop welcomes you!"
        />
      </Head>
      <header>
        <NavbarForm />
      </header>
      <div className="carousel w-full">
        <div className="carousel-item">
          <Image
            src={heroImageHomepage}
            alt="1"
            width={500}
            height={200}
            className="w-full"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={heroImageFour}
            alt="1"
            width={500}
            height={200}
            className="w-full"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={heroImageOne}
            alt="1"
            width={500}
            height={200}
            className="w-full"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={heroImageThree}
            alt="1"
            width={500}
            height={200}
            className="w-full"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={heroImageTwo}
            alt="1"
            width={500}
            height={200}
            className="w-full"
          />
        </div>
        h
      </div>

      <div className="hero min-h-screen flex flex-col justify-start">
        <div className="hero-content text-center text-neutral-content mt-16">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl text-gray-800">
              This is our poodle shop
            </h1>

            <Link href="/items" className="btn btn-neutral btn-wide btn-md">
              Explore our diversity
            </Link>
            <p className="text-gray-700 mt-8">
              Explore our curated selection of premium poodle goods, from
              stylish collars to cozy beds. Pamper your furry friend in style
              and comfort!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
