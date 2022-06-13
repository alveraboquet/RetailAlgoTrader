import { screen, render } from '@testing-library/react';
import SignInError from '../../../components/auth/signinError';

describe('<SignInError />', () => {
  test('renders nothing if no error', () => {
    render(<SignInError error={undefined} />);

    let error = screen.queryByText('Try signing in with a different account.');
    expect(error).not.toBeInTheDocument();

    error = screen.queryByText(
      'To confirm your identity, sign in with the same account you used originally.'
    );
    expect(error).not.toBeInTheDocument();

    error = screen.queryByText('Check your email address.');
    expect(error).not.toBeInTheDocument();

    error = screen.queryByText(
      'Sign-in failed. Check the details you provided are correct.'
    );
    expect(error).not.toBeInTheDocument();

    error = screen.queryByText('Unable to sign in.');
    expect(error).not.toBeInTheDocument();
  });

  test('renders Signin error', () => {
    render(<SignInError error={'Signin'} />);

    const error = screen.getByText('Try signing in with a different account.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders OAuthSignin error', () => {
    render(<SignInError error={'OAuthSignin'} />);

    const error = screen.getByText('Try signing in with a different account.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders OAuthCallback error', () => {
    render(<SignInError error={'OAuthCallback'} />);

    const error = screen.getByText('Try signing in with a different account.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders OAuthCreateAccount error', () => {
    render(<SignInError error={'OAuthCreateAccount'} />);

    const error = screen.getByText('Try signing in with a different account.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders EmailCreateAccount error', () => {
    render(<SignInError error={'EmailCreateAccount'} />);

    const error = screen.getByText('Try signing in with a different account.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders Callback error', () => {
    render(<SignInError error={'Callback'} />);

    const error = screen.getByText('Try signing in with a different account.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders OAuthAccountNotLinked error', () => {
    render(<SignInError error={'OAuthAccountNotLinked'} />);

    const error = screen.getByText(
      'To confirm your identity, sign in with the same account you used originally.'
    );
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders EmailSignIn error', () => {
    render(<SignInError error={'EmailSignin'} />);

    const error = screen.getByText('Check your email address.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders CredentialsSignin error', () => {
    render(<SignInError error={'CredentialsSignin'} />);

    const error = screen.getByText(
      'Sign-in failed. Check the details you provided are correct.'
    );
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });

  test('renders default error', () => {
    render(<SignInError error={'default'} />);

    const error = screen.getByText('Unable to sign in.');
    expect(error).toBeInTheDocument();
    expect(error).toHaveStyle(
      'color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity))'
    );
  });
});
