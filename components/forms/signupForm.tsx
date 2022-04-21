const SignupForm = () => {
  const handleSignupInfo = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValidation = (await import('../../lib/formValidation')).default;
    const validated = formValidation(event);
    if (validated) (event.target as HTMLFormElement).reset();
  };

  return (
    <form
      onSubmit={handleSignupInfo}
      className="form needs-validation rounded"
      noValidate
      id="signupForm"
    >
      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        id="firstName"
        type="text"
        autoComplete="given-name"
        required
        className="form-control"
      />
      <div className="invalid-feedback">This field is required.</div>
      <label htmlFor="lastName" className="form-label mt-3">
        Last Name
      </label>
      <input
        id="lastName"
        type="text"
        autoComplete="family-name"
        required
        className="form-control"
      />
      <div className="invalid-feedback">This field is required.</div>
      <label htmlFor="email" className="form-label mt-3">
        Email
      </label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        required
        aria-describedby="emailHelp"
        className="form-control"
      />
      <div id="emailHelp" className="form-text text-secondary">
        We will never share your email.
      </div>
      <div className="invalid-feedback">This field is required.</div>
      <div className="invalid-feedback">
        Please ensure email is of form johnsmith@email.com
      </div>
      <label htmlFor="password" className="form-label pt-3">
        Password
      </label>
      <input
        id="password"
        type="password"
        required
        className="form-control"
        minLength={8}
      />
      <div id="emailHelp" className="form-text text-secondary">
        Must be at least 8 characters long.
      </div>
      <div className="invalid-feedback">This field is required.</div>
      <div className="row text-center ms-4 me-4">
        <button type="submit" className="btn btn-warning mt-4">
          Submit Info
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
