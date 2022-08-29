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

const MobileSignInContent = (props: Props) => {
  const { error, providers } = props;

  return (
    <main className="container-fluid bg-light vh-100">
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
          and{' '}
          <Link href="/privacyPolicy">
            <a>Privacy Policy</a>
          </Link>
          .
        </p>
      </section>
    </main>
  );
};

export default MobileSignInContent;
