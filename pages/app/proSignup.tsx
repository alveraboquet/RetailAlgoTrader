import { NextPage } from 'next';
import LayoutApp from '../../components/layout/layoutApp';
import { fetchPostJSON } from '../../lib/fetchJSON';
import getStripe from '../../lib/getStripe';
import { useState } from 'react';

const ProSignup: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON(
      '/api/stripe/checkoutSession/checkoutSession',
      {
        amount: 30.0,
      }
    );

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <LayoutApp>
      <div className="container">
        <h1>Shopping Cart</h1>
      </div>
      <button
        className="cart-style-background"
        type="submit"
        onClick={handleCheckout}
        disabled={loading}
      >
        Checkout
      </button>
    </LayoutApp>
  );
};

export default ProSignup;
