interface Props {
  buttonText: string;
  buttonColor: string;
}

/**
 * Must use form to access API route as the browser will not allow a document follow on a redirect originated from a
 * fetch request
 * @returns - form to redirect to Stripe billing portal
 */
const CreateCustomerPortalSessionForm = ({
  buttonText,
  buttonColor,
}: Props) => {
  return (
    <form method="POST" action="/api/stripe/createCustomerPortalSession">
      <button type="submit" className={`btn ${buttonColor}`}>
        {buttonText}
      </button>
    </form>
  );
};

export default CreateCustomerPortalSessionForm;
