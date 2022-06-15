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
