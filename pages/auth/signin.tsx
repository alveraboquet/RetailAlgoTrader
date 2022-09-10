import { getProviders } from 'next-auth/react';
import SEO from '../../components/SEO/seo';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import MobileSignInContent from '../../components/auth/signin/mobileSignInContent';
import DesktopSignInContent from '../../components/auth/signin/desktopSignInContent';
import { useState, useEffect } from 'react';
import MockSiteBanner from '../../components/mockSiteBanner';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

type Providers = Record<Provider['id'], Provider>;

// Custom signin page used with NextAuth
const SignIn = ({ providers }: Providers) => {
  // Retrieves error if one returned by NextAuth signin flow
  const { error } = useRouter().query;
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMediaQueryChange = (matches: boolean) => {
    if (matches) {
      router.reload();
    }
  };

  const isMobileCheck = useMediaQuery(
    { maxWidth: 576 },
    undefined,
    handleMediaQueryChange
  );
  const isDesktopCheck = useMediaQuery(
    { minWidth: 577 },
    undefined,
    handleMediaQueryChange
  );

  useEffect(() => {
    if (isMobileCheck) setIsMobile(true);
    if (isDesktopCheck) setIsDesktop(true);
  }, [isMobileCheck, isDesktopCheck]);

  return (
    <div>
      <SEO
        url="https://retailalgotrader/auth/signin"
        openGraphType="website"
        schemaType="website"
        title="Sign-in"
        description="Sign-in for RetailAlgoTrader application. Allows access to courses and EA Template generator."
        image="https://retailalgotrader.com/images/website/bulltrader.webp"
        keywords="RetailAlgoTrader signin, RetailAlgoTrader login"
      />
      <MockSiteBanner />
      {isMobile && <MobileSignInContent error={error} providers={providers} />}
      {isDesktop && (
        <DesktopSignInContent error={error} providers={providers} />
      )}
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
