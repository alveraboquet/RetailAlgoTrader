import { NextPage, GetServerSideProps } from 'next';
import LayoutApp from '../../components/layout/layoutApp';
import { useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import EaTemplateTool from '../../components/eaGenerator/eaTemplateTool';
import ProSignupBanner from '../../components/pricing/proSignupBanner';

// EA template generator page for signedin users
const EaGenerator: NextPage = () => {
  const { data: session } = useSession();

  return (
    <LayoutApp>
      <div className="mt-3 mt-md-0">
        <ProSignupBanner isPro={session?.user.isPro} />
      </div>
      <EaTemplateTool />
    </LayoutApp>
  );
};

export default EaGenerator;

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
