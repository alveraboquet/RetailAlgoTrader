/**
 * Renders the Login Form and handles submission
 *
 * @param deviceType - Desktop or Mobile to handle proper form rendering and validation
 * @returns login form with inputs: email, password.
 *
 * If data validation is successful user is redirected to their dashboard at subdomain
 *
 * TODOs:
 *  1. Add path for router redirect after login button clicked. Will most likely be to an API call
 *  2. Implement remember me and forgot your password functionality
 */

import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

interface deviceType {
  deviceType: string;
}

const LoginForm = (props: deviceType) => {
  const router = useRouter();

  const handleLoginInfo = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValidation = (await import('../../lib/formValidation')).default;
    const validated = formValidation(event);
    if (validated) {
      type LoginDetails = EventTarget & {
        email: HTMLInputElement;
        password: HTMLInputElement;
      };
      const target = event.target as LoginDetails;
      // add error / timeout for fetch
      const res = await fetch('http://localhost:4000/api/auth/login', {
        body: JSON.stringify({
          email: target.email.value,
          password: target.password.value,
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Custom-Header': 'lollipop',
        },
        method: 'POST',
      });
      (event.target as HTMLFormElement).reset();
      const result = await res.json();
      router.push('/');
    }
  };

  return props.deviceType === 'mobile' ? (
    <form
      onSubmit={handleLoginInfo}
      className="form loginForm pb-4 needs-validation rounded pt-3"
      noValidate
      id="mobileForm"
    >
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="text"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  ) : (
    <form
      onSubmit={handleLoginInfo}
      className="form loginForm pb-4 needs-validation rounded pt-3"
      noValidate
      id="desktopForm"
    >
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="text"
          required
          className="form-control"
        />
        <div className="invalid-feedback">This field is required.</div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  deviceType: PropTypes.string.isRequired,
};

export default LoginForm;
