/* eslint-disable @typescript-eslint/no-non-null-assertion */
// The non-null-assertions marked by eslint are the recommended methods in Stripes documentation
import { fetchPostJSON } from './fetchJSON';
import { MONTHLY_AMOUNT, ANNUAL_AMOUNT } from '../stripe.config';
import alert from './alert';

/**
 *
 * @param monthly - monthly pricing or annual pricing
 * @returns - nothing
 */
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
  return response.url;
};
