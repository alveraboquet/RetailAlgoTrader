import SignInError from '../signinError';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import styles from '../../../styles/SignIn.module.css';

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

const DesktopSignUpContent = (props: Props) => {
  const { error, providers } = props;

  return (
    <main>
      <div className="row vh-100">
        <section className="col-6 bg-light d-flex align-items-center justify-content-center p-4">
          <div className="row">
            <article className="w-75 mx-auto bg-white text-center rounded border p-3">
              <header>
                <h1>User Sign-Up</h1>
              </header>
              <SignInError error={error} />
              <div>
                {Object.values(providers).map((provider) => (
                  <div key={provider.name} className="w-100">
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
                Sign up with one of the options above and an account will
                automatically be created for you.
              </p>
              <p>
                If you do not have an account with Google or Facebook you can
                setup a typical email and password login by clicking &apos;Sign
                in with Auth0&apos;
              </p>
              <aside className="row mt-3 text-center ps-3 pe-3">
                <p className="fs-4">Already a member?</p>
                <button
                  className="nav-item btn btn-warning"
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
  );
};

export default DesktopSignUpContent;
