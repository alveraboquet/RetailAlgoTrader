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
          <h1 className="pt-3">User Sign-Up</h1>
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
                Sign up with {provider.name}
              </button>
            </div>
          ))}
        </div>
        <p className="fs-4 mb-0 mt-3">Not a member?</p>
        <p>
          Sign in with one of the options above and an account will
          automatically be created for you.
        </p>
        <p>
          If you do not have an account with any of these services you can setup
          a typical email and password login by clicking &apos;Sign in with
          Auth0&apos;
        </p>
        <aside className="row mt-3 mb-3 text-center ps-4 pe-4">
          <p className="fs-4">Already a member?</p>
          <button
            className="nav-item btn btn-warning ms-md-2"
            onClick={(e) => {
              e.preventDefault();
              // NextAuth function to initiate user authentication flow
              // https://next-auth.js.org/getting-started/client#signin
              signIn(undefined, { callbackUrl: '/app/dashboard' });
            }}
          >
            Member Login
          </button>
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
  );
};

export default MobileSignInContent;
