import { NextPage } from 'next';
import LayoutApp from '../../components/layout/layoutApp';
import { fetchPostJSON } from '../../lib/fetchJSON';
import getStripe from '../../lib/getStripe';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import alert from '../../lib/alert';

const ProSignup: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [monthly, setMonthly] = useState(true);

  const handleCheckout = async () => {
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON(
      '/api/stripe/checkoutSession/checkoutSession',
      {
        amount: monthly ? 40.0 : 30.0,
      }
    );
    if (response.statusCode === 500) {
      console.error(response.message);
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
      if (!alertPlaceholder) {
        return;
      } else {
        alert(
          'Unable to process the request. Please try again. If this issue continues please email contact@retailalgotrader.com',
          'danger',
          alertPlaceholder
        );
        setLoading(false);
        return;
      }
    }
    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: response.id,
    });
    console.warn(error.message);
    setLoading(false);
  };

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
      <div className="table-responsive">
        <table className="table table-striped text-successtable-border border-light">
          <thead className="border-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <strong>Hobby</strong>
              </th>
              <th scope="col">
                <strong>Pro</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mini Courses</th>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Advanced Guides</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Pro Courses</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Academies</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Template Generator</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td className="fw-bold">Free</td>
              <td className="fw-bold">{monthly ? '$40/mo' : '$30/mo'}</td>
            </tr>
            <tr>
              <th></th>
              <th>
                <button className="btn btn-warning">
                  <Link href="/auth/signin">
                    <a className="text-decoration-none text-dark">Sign up</a>
                  </Link>
                </button>
              </th>
              <th>
                <button
                  className="btn btn-warning"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  Upgrade to Pro
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        <div id="liveAlertPlaceholder"></div>
      </div>
      <section className="text-center p-3">
        <h2>Learn how to properly trade</h2>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <p>Develop a trading plan</p>
          </div>
          <div className="col-4">
            <p>Setup backtesting framework</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <p>Optimize strategies</p>
          </div>
          <div className="col-4">
            <p>Create trading portfolio</p>
          </div>
        </div>
      </section>
      <section className="bg-light p-3 text-center">
        <h2>Discover how to master the following skills</h2>
        <div className="row">
          <div className="col-4">
            <p>Equities</p>
          </div>
          <div className="col-4">
            <p>Forex</p>
          </div>
          <div className="col-4">
            <p>Futures</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>TradingView</p>
          </div>
          <div className="col-4">
            <p>MT4</p>
          </div>
          <div className="col-4">
            <p>QuantConnect</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>Python</p>
          </div>
          <div className="col-4">
            <p>Jupyter Notebooks</p>
          </div>
          <div className="col-4">
            <p>Crypto</p>
          </div>
        </div>
      </section>
      <section className="text-center p-3">
        <h2>Frequently Asked Questions</h2>
        <div className="row">
          <div className="col-6 p-3">
            <h3>How do Hobby and Pro differ?</h3>
            <p>
              Pro includes everything in the Hobby subscription plus all of our
              advanced resources and courses. Pro gives you access to advanced
              guides for specific topics, pro courses, trading academies, and
              our custom template generator. These tools will provide all of the
              resources and knowledge needed to efficiently develop your own
              profitable trading system.
            </p>
            <h3>Is upgrading to Pro worth it?</h3>
            <p>
              The Pro resources have been designed based on the countless hours
              and lessons that our team has undergone in trading. Our resources
              provide all of the required knowledge and skills in one location.
              You will reach profitable trading much more quickly than
              attempting to learn everything on your own. Our resources focus on
              practical skills rather than theoretical knowledge that is seen in
              most resources.
            </p>
            <h3>Can I cancel my subscription?</h3>
            <p>
              You can cancel your Pro subscription anytime through the
              &quot;Account Settings&quot; page.
            </p>
          </div>
          <div className="col-6 p-3">
            <h3>Is it required that I already know how to program?</h3>
            <p>
              Absolutely not. Many of our users have minimal coding experience
              when they join.
            </p>
            <h3>What are academies?</h3>
            <p>
              Academies are a comprehensive framework for essential trading
              skills. They contain everything needed to get started with their
              respective topics.
            </p>
            <h3>What is the template generator?</h3>
            <p>
              The majority of code in trading algorithms is &quot;boilerplate
              code&quot;. Your specific strategy will only be a small percentage
              of the total code. Our templates allow you to select entry rules,
              exit rules, risk management rules, etc for your respective
              platform. This will ensure that you do not miss any important
              functions and save you valuable time and energy.
            </p>
          </div>
        </div>
      </section>
    </LayoutApp>
  );
};

export default ProSignup;
