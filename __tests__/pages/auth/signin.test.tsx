import { screen, render } from '@testing-library/react';
import SignIn from '../../../pages/auth/signin';
import mockRouter from 'next-router-mock';
import React from 'react';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<SignIn />', () => {
  // Tested components will be in the DOM twice. 1 for desktop and 1 for mobile
  test('renders header, footer, and articles correctly', () => {
    const providers = {
      Google: {
        id: 'googleId',
        name: 'Google',
        type: 'googleType',
        signinUrl: 'googleSigninUrl',
        callbackUrl: 'googleCallbackUrl',
      },
      Facebook: {
        id: 'facebookId',
        name: 'Facebook',
        type: 'facebookType',
        signinUrl: 'facebookSigninUrl',
        callbackUrl: 'facebookCallbackUrl',
      },
      Auth0: {
        id: 'auth0Id',
        name: 'Auth0',
        type: 'auth0Type',
        signinUrl: 'auth0SigninUrl',
        callbackUrl: 'auth0CallbackUrl',
      },
    };

    render(<SignIn providers={providers} />);

    const loginTitle = screen.getAllByText(/user login/i);
    const googleButton = screen.getAllByRole('button', {
      name: /sign in with google/i,
    });
    const facebookButton = screen.getAllByRole('button', {
      name: /sign in with facebook/i,
    });
    const auth0Button = screen.getAllByRole('button', {
      name: /sign in with auth0/i,
    });
    const termsOfServiceLink = screen.getAllByRole('link', {
      name: /terms of service/i,
    });
    const privacyPolicy = screen.getAllByRole('link', {
      name: /privacy policy/i,
    });
    const imageText = screen.getByText(
      /create a free account. No payment info necessary/i
    );

    expect(loginTitle).toHaveLength(2);
    expect(googleButton).toHaveLength(2);
    expect(facebookButton).toHaveLength(2);
    expect(auth0Button).toHaveLength(2);
    expect(termsOfServiceLink).toHaveLength(2);
    expect(privacyPolicy).toHaveLength(2);
    expect(imageText).toBeInTheDocument();
  });
});
