import { getProviders } from 'next-auth/react';
import SEO from '../../components/SEO/seo';
import { useRouter } from 'next/router';
import MobileSignUpContent from '../../components/auth/signup/mobileSignUpContent';
import DesktopSignUpContent from '../../components/auth/signup/desktopSignUpContent';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

// Custom signin page used with NextAuth
const SignUp = ({ providers }: { [k: string]: Provider }) => {
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
        url="https://retailalgotrader/auth/signup"
        openGraphType="website"
        schemaType="website"
        title="Sign-up"
        description="Sign-up for RetailAlgoTrader application. Allows access to courses and EA Template generator."
        image="https://retailalgotrader.com/images/website/bulltrader.webp"
        keywords="RetailAlgoTrader signup, RetailAlgoTrader create account"
      />
      {isMobile && <MobileSignUpContent error={error} providers={providers} />}
      {isDesktop && (
        <DesktopSignUpContent error={error} providers={providers} />
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

export default SignUp;
