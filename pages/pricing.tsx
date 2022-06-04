import PricingTable from '../components/pricing/pricingTable';
import Layout from '../components/layout/layout';
import PricingText from '../components/pricing/pricingText';
import { NextPage } from 'next';
import { useState } from 'react';

const Pricing: NextPage = () => {
  const [monthly, setMonthly] = useState(true);

  return (
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
  );
};

export default Pricing;
