import PricingTable from '../../components/pricing/pricingTable';
import LayoutApp from '../../components/layout/layoutApp';
import PricingText from '../../components/pricing/pricingText';
import { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { handleCheckout } from '../../lib/proSignupHelpers';

const ProSignup: NextPage = () => {
  const { data: session } = useSession();
  const [isStripeLoading, setIsStripeLoading] = useState(false);
  const [monthly, setMonthly] = useState(true);

  useEffect(() => {
    if (isStripeLoading) handleCheckout(monthly);
  }, [isStripeLoading]);

  return (
    <LayoutApp>
      <section className="text-center">
        <h1>RetailAlgoTrader Pro Membership</h1>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="monthlyBilling"
            autoComplete="off"
            defaultChecked
            onClick={() => setMonthly(true)}
          />
          <label className="btn btn-outline-dark" htmlFor="monthlyBilling">
            Monthly Billing
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="annualBilling"
            autoComplete="off"
            onClick={() => setMonthly(false)}
          />
          <label className="btn btn-outline-dark" htmlFor="annualBilling">
            Annual Billing (Save $120)
          </label>
        </div>
      </section>
      <PricingTable signedIn={true} monthly={monthly} />
      {session && !session?.user.isPro ? (
        <div className="alert alert-success text-center">
          You currently have a Hobby account. If you would like to upgrade to a
          Pro membership please click
          <button
            className="btn btn-warning ms-3"
            onClick={() => setIsStripeLoading(true)}
            disabled={isStripeLoading}
          >
            Upgrade to Pro
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {session?.user.isPro ? (
        <div className="alert alert-success text-center">
          You are already a Pro user. If you would like to change your
          membership status please visit your Account Settings page or email
          contact@retailalgotrader.com
        </div>
      ) : (
        <div></div>
      )}
      <div id="liveAlertPlaceholder"></div>
      <PricingText />
    </LayoutApp>
  );
};

export default ProSignup;

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
