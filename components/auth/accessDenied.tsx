import { signIn } from 'next-auth/react';
import Layout from '../layout/layout';
import Link from 'next/link';

const AccessDenied = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1>Access Denied</h1>
        <p>
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              You must be signed in to view this page
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default AccessDenied;
