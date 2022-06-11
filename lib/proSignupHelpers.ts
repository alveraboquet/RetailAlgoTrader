import { fetchPostJSON } from './fetchJSON';
import { MONTHLY_AMOUNT, ANNUAL_AMOUNT } from '../stripe.config';
import alert from './alert';
import getStripe from './getStripe';

export const handleCheckout = async (monthly: boolean) => {
  // Create a Checkout Session.
  const response = await fetchPostJSON(
    '/api/stripe/checkoutSession/checkoutSession',
    {
      amount: monthly ? MONTHLY_AMOUNT : ANNUAL_AMOUNT,
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
      return;
    }
  }
  // Redirect to Checkout.
  const stripe = await getStripe();
  const { error } = await stripe!.redirectToCheckout({
    sessionId: response.id,
  });
  console.warn(error.message);
};
