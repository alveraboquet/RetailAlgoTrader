import Layout from '../components/layout/layout';
import LayoutApp from '../components/layout/layoutApp';
import { GetServerSideProps, NextPage } from 'next';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

const TermsOfService: NextPage = () => {
  const { data: session } = useSession();

  if (session)
    return (
      <LayoutApp>
        <h1>Terms of Service Placeholder</h1>
        <p>
          Note that this is a mock website for a portfolio. It is not a
          functioning business.
        </p>
      </LayoutApp>
    );
  else
    return (
      <Layout>
        {' '}
        <h1>Terms of Service Placeholder</h1>
        <p>
          Note that this is a mock website for a portfolio. It is not a
          functioning business.
        </p>
      </Layout>
    );
};

export default TermsOfService;

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
