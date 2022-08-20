import SignInError from '../signinError';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

interface Props {
  error: string | string[] | undefined;
  providers: Provider;
}

const DesktopSignInContent = (props: Props) => {
  const { error, providers } = props;

  return (
    <main>
      <div className="row vh-100">
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
              and{' '}
              <Link href="/privacyPolicy">
                <a>Privacy Policy</a>
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DesktopSignInContent;
