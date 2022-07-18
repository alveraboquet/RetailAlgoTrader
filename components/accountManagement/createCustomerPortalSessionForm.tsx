/**
 * Must use form to access API route as the browser will not allow a document follow on a redirect originated from a
 * fetch request
 * @returns - form to redirect to Stripe billing portal
 */
const CreateCustomerPortalSessionForm = () => {
  return (
    <form method="POST" action="/api/stripe/createCustomerPortalSession">
      <button type="submit" className="btn btn-warning">
        Manage Billing
      </button>
    </form>
  );
};

export default CreateCustomerPortalSessionForm;
