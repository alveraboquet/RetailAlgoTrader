/**
 *
 * TODOs:
 *  1. Set up reddit account and add link
 */

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark overflow-hidden ps-4 pe-4">
      <div className="row mt-3 mb-3">
        <p className="text-light">
          RetailAlgoTrader - Become a profitable retail trader
        </p>
        <div className="d-md-none d-flex justify-content-center">
          <button className="btn btn-warning">
            <Link href="/signup">
              <a className="text-decoration-none text-white">
                Join Our Weekly Newsletter
              </a>
            </Link>
          </button>
        </div>
        <p className="fs-5 text-light mt-3">ABOUT US</p>
        <p className="text-light">
          RetailAlgoTrading is a resource and community dedicated to retail
          traders. We aim to provide the tools and education for individual
          traders to profitably trade.
        </p>
        <Link href="https://www.facebook.com/RetailAlgoTrading" passHref>
          <Image
            src="/images/svgs/facebook.svg"
            alt="Facebook Logo"
            width={72}
            height={16}
          />
        </Link>
        <Link href="https://twitter.com/RetailAlgoTrade" passHref>
          <Image
            src="/images/svgs/twitter.svg"
            alt="Twitter Logo"
            width={72}
            height={16}
          />
        </Link>
        <Link href="https://www.instagram.com/retailalgotrader/" passHref>
          <Image
            src="/images/svgs/instagram.svg"
            alt="Instagram Logo"
            width={72}
            height={16}
          />
        </Link>
        <Link href="https://www.instagram.com/retailalgotrader/" passHref>
          <Image
            src="/images/svgs/reddit.svg"
            alt="Reddit Logo"
            width={72}
            height={16}
          />
        </Link>
        <p className="fs-5 text-light mt-3">Contact Us</p>
        <figure className="d-flex">
          <Image
            src="/images/svgs/envelope.svg"
            alt=""
            width={72}
            height={16}
          />
          <p className="text-light pt-2">contact@retailalgotrader.com</p>
        </figure>
        <figure className="d-flex">
          <Image src="/images/svgs/home.svg" alt="" width={72} height={16} />
          <p className="text-light pt-2">https://retailalgotrader.com</p>
        </figure>
        <p className="fs-5 text-light mt-3">Top Blog Posts</p>
        <div className="d-none d-md-flex justify-content-center">
          <p className="fs-4">
            Enroll in a free trial!
            <span>
              <button className="btn btn-primary ms-3">
                <Link href="/signup">
                  <a className="text-decoration-none text-white">Click Here</a>
                </Link>
              </button>
            </span>
          </p>
        </div>
      </div>
      <nav className="nav pb-5 justify-content-center">
        <Link href="/">
          <a className="nav-link text-light" aria-current="page">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="nav-link text-light" aria-current="page">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="nav-link text-light" aria-current="page">
            Blog
          </a>
        </Link>
        <Link href="/privacyPolicy">
          <a className="nav-link text-light" aria-current="page">
            Resources
          </a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
