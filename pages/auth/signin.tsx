import { getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';
import SEO from '../../components/SEO/seo';
import SignInError from '../../components/auth/signinError';
import { useRouter } from 'next/router';
import styles from '../../styles/SignIn.module.css';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

const SignIn = ({ providers }: { [k: string]: Provider }) => {
  const { error } = useRouter().query;

  return (
    <div>
      <SEO
        url="https://ezmto.com/login"
        openGraphType="website"
        schemaType="website"
        title="Login"
        description="Simplifying the pipe fabrication bid process from beginning to end. 
         Save time, energy, and money on material takeoffs, acquiring bids, and creating bid tabs."
        image="https://ezmto.com/images/chemicalPlantSocial.webp"
      />

      {/* Mobile Login page */}
      <main className="container-fluid d-lg-none bg-light vh-100">
        <div className="bg-light row"></div>
        <section className="bg-white position-relative top-50 start-50 translate-middle text-center rounded border">
          <header>
            <h1 className="pt-3">User Login</h1>
          </header>
          <SignInError error={error} />
          <div>
            {Object.values(providers).map((provider) => (
              <div key={provider.name} className="w-100 ps-3 pe-3">
                <button
                  className="btn btn-warning btn-block w-100 mt-4"
                  onClick={() =>
                    signIn(provider.id, { callbackUrl: '/app/dashboard' })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
          <aside className="row mt-3 text-center ps-3 pe-3">
            <p className="fs-4">Not a member?</p>
            <p>
              Sign in with one of the options above and an account will
              automatically be created for you.
            </p>
            <p>
              If you do not have an account with any of these services you can
              setup a typical email and password login by clicking &apos;Sign in
              with Auth0&apos;
            </p>
          </aside>
          <p className="text-center bg-light p-3">
            By signing up for RetailAlgoTrader, you agree to
            RetailAlgoTrader&apos;s{' '}
            <Link href="/termsOfService">
              <a>Terms of Service</a>
            </Link>{' '}
            &{' '}
            <Link href="/privacyPolicy">
              <a>Privacy Policy</a>
            </Link>
            .
          </p>
        </section>
      </main>

      {/* Desktop Login page */}
      <main>
        <div className="row vh-100 d-none d-lg-flex">
          <section className="col-6 bg-light d-flex align-items-center justify-content-center p-4">
            <div className="row">
              <article className="w-75 mx-auto bg-white text-center rounded border p-3">
                <header>
                  <h1>User Login</h1>
                </header>
                <SignInError error={error} />
                <div>
                  {Object.values(providers).map((provider) => (
                    <div key={provider.name} className="w-100">
                      <button
                        className="btn btn-warning btn-block w-100 mt-4"
                        onClick={() =>
                          signIn(provider.id, { callbackUrl: '/app/dashboard' })
                        }
                      >
                        Sign in with {provider.name}
                      </button>
                    </div>
                  ))}
                </div>
                <aside className="row mt-3 text-center">
                  <p className="fs-4">Not a member?</p>
                  <p>
                    Sign in with one of the options above and an account will
                    automatically be created for you.
                  </p>
                  <p>
                    If you do not have an account with any of these services you
                    can setup a typical email and password login by clicking
                    &apos;Sign in with Auth0&apos;
                  </p>
                </aside>
              </article>
              <p className="text-center bg-light mt-3">
                By signing up for RetailAlgoTrader, you agree to
                RetailAlgoTrader&apos;s{' '}
                <Link href="/termsOfService">
                  <a>Terms of Service</a>
                </Link>{' '}
                &{' '}
                <Link href="/privacyPolicy">
                  <a>Privacy Policy</a>
                </Link>
                .
              </p>
            </div>
          </section>
          <section className={`${styles.signinBackground} col-6`}>
            <div className="row text-left mt-5">
              <aside className="col-8 ps-5">
                <header>
                  <h2 className="display-4">
                    Create a free account. No payment info necessary.
                  </h2>
                </header>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
