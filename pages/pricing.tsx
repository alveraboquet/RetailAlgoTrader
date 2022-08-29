import PricingTable from '../components/pricing/pricingTable';
import Layout from '../components/layout/layout';
import PricingText from '../components/pricing/pricingText';
import { NextPage } from 'next';
import { useState } from 'react';
import SEO from '../components/SEO/seo';

// Render pricing page for non-signedin users
const Pricing: NextPage = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <div>
      <SEO
        url="https://retailalgotrader.com/pricing"
        openGraphType="website"
        schemaType="website"
        title="Pricing structure for RetailAlgoTrading"
        description="Create a free hobby account to get started. When the more advanced courses and tools interest you
        upgrade to a Pro account for just $30/mo"
        image="https://retailalgotrader.com/images/website/bulltrader.webp"
        keywords="RetailAlgoTrader pricing, RetailAlgoTrader pro membership, RetailAlgoTrader cose"
      />
      <Layout>
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
        <PricingTable signedIn={false} monthly={monthly}></PricingTable>
        <PricingText></PricingText>
      </Layout>
    </div>
  );
};

export default Pricing;
