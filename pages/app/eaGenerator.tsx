import { NextPage, NextPageContext } from 'next';
import LayoutApp from '../../components/layout/layoutApp';
import { getSession, useSession } from 'next-auth/react';
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
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

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
}
