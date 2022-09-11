import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import ProSignupBanner from '../pricing/proSignupBanner';
import { useSession } from 'next-auth/react';

/**
 * Footer component for non-logged in users
 * Contains: CTA, about us section, contact section, social media links, and top blog posts
 */
const FooterApp = () => {
  const { data: session } = useSession();

  return (
    <footer className="bg-dark overflow-hidden ps-4 pe-4">
      <div className="container">
        <div className="row mt-3 mb-3">
          <p className="text-light">
            RetailAlgoTrader - Become a profitable retail trader
          </p>
          <ProSignupBanner isPro={session?.user.isPro} />
          <section className="row">
            <div className="col-md-6">
              <h2 className="fs-5 text-light mt-3">ABOUT US</h2>
              <p className="text-light">
                RetailAlgoTrading is a resource and community dedicated to
                retail traders. We aim to provide the tools and education for
                individual traders to profitably trade.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-none d-md-block">
                <h2 className="fs-5 text-light mt-3">Contact Us</h2>
                <figure className="d-flex">
                  <Image
                    src="/images/svgs/envelope.svg"
                    alt=""
                    width={72}
                    height={16}
                  />
                  <p className="text-light pt-2">
                    contact@retailalgotrader.com
                  </p>
                </figure>
                <figure className="d-flex">
                  <Image
                    src="/images/svgs/home.svg"
                    alt=""
                    width={72}
                    height={16}
                  />
                  <p className="text-light pt-2">
                    https://retailalgotrader.com
                  </p>
                </figure>
              </div>
            </div>
          </section>
          <section className="row mt-md-3 mb-md-3">
            <div className="col-3 p-0 d-flex justify-content-center">
              <a href="https://www.facebook.com/RetailAlgoTrading">
                <Image
                  src="/images/svgs/facebook.svg"
                  alt="Facebook Logo"
                  width={144}
                  height={32}
                />
              </a>
            </div>
            <div className="col-3 p-0 d-flex justify-content-center">
              <a href="https://twitter.com/RetailAlgoTrade">
                <Image
                  src="/images/svgs/twitter.svg"
                  alt="Twitter Logo"
                  width={144}
                  height={32}
                />
              </a>
            </div>
            <div className="col-3 p-0 d-flex justify-content-center">
              <a href="https://www.instagram.com/retailalgotrader/">
                <Image
                  src="/images/svgs/instagram.svg"
                  alt="Instagram Logo"
                  width={144}
                  height={32}
                />
              </a>
            </div>
            <div className="col-3 p-0 d-flex justify-content-center">
              <a href="https://www.quora.com/">
                <Image
                  src="/images/svgs/quora.svg"
                  alt="Quora Logo"
                  width={144}
                  height={32}
                />
              </a>
            </div>
          </section>
          <section className="d-md-none">
            <h2 className="fs-5 text-light mt-3">Contact Us</h2>
            <figure className="d-flex">
              <Image
                src="/images/svgs/envelope.svg"
                alt="Email icon"
                width={72}
                height={16}
              />
              <p className="text-light pt-2">contact@retailalgotrader.com</p>
            </figure>
            <figure className="d-flex">
              <Image
                src="/images/svgs/home.svg"
                alt="Home icon"
                width={72}
                height={16}
              />
              <Link href="/">
                <a className="text-light pt-2">https://retailalgotrader.com</a>
              </Link>
            </figure>
          </section>
        </div>
        <nav className="nav pb-5 mt-3 justify-content-center">
          <Link href="/app/dashboard">
            <a className="nav-link text-light" aria-current="page">
              Dashboard
            </a>
          </Link>
          <Link href="/privacyPolicy">
            <a className="nav-link text-light" aria-current="page">
              Privacy Policy
            </a>
          </Link>
          <Link href="/termsOfService">
            <a className="nav-link text-light" aria-current="page">
              Terms of Service
            </a>
          </Link>
          <Link href="/logout">
            <a
              className="nav-link text-light"
              aria-current="page"
              onClick={(e) => {
                e.preventDefault();
                // Nextauth function to initiate user signout flow
                // https://next-auth.js.org/getting-started/client#signout
                signOut({ callbackUrl: '/' });
              }}
            >
              Logout
            </a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default FooterApp;
