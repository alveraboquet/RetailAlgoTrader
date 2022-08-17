import { getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';
import SEO from '../../components/SEO/seo';
import SignInError from '../../components/auth/signinError';
import { useRouter } from 'next/router';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

// Custom signin page used with NextAuth
const SignIn = ({ providers }: { [k: string]: Provider }) => {
  // Retrieves error if one returned by NextAuth signin flow
  const { error } = useRouter().query;

  return (
    <div>
      <SEO
        url="https://retailalgotrader/auth/signin"
        openGraphType="website"
        schemaType="website"
        title="Sign-in"
        description="Sign-in for RetailAlgoTrader application. Allows access to courses and EA Template generator."
        image="https://retailalgotrader.com/images/website/bulltrader.webp"
      />

      {/* Mobile Login page */}
      <main className="container-fluid d-sm-none bg-light vh-100">
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
                    // Nextauth function to initiate signin flow
                    // https://next-auth.js.org/getting-started/client#signin
                    signIn(provider.id, { callbackUrl: '/app/dashboard' })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
          <aside className="row mt-3 text-center ps-4 pe-4 mb-3">
            <p className="fs-4">Not a member?</p>
            <Link href="/auth/signup">
              <button className="btn btn-warning p-md-3">
                Sign Up Today! No Credit Card Required
              </button>
            </Link>
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
        <div className="row vh-100 d-none d-sm-flex">
          <section className="bg-light d-flex align-items-center justify-content-center p-4">
            <div className="row">
              <article className="col-8 col-lg-6 mx-auto bg-white text-center rounded border p-3">
                <header>
                  <h1>User Login</h1>
                </header>
                <SignInError error={error} />
                <div>
                  {Object.values(providers).map((provider) => (
                    <div key={provider.name} className="w-100">
                      <button
                        className="btn btn-warning btn-block w-100 mt-4"
                        data-testid={provider.name}
                        onClick={() =>
                          // Nextauth function to initiate signin flow
                          // https://next-auth.js.org/getting-started/client#signin
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
                  <Link href="/auth/signup">
                    <button className="btn btn-warning">
                      Sign Up Today! No Credit Card Required
                    </button>
                  </Link>
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
