// List of possible errors Next-Auth can return
// https://next-auth.js.org/configuration/pages#sign-in-page
const errors: { [k: string]: string } = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign-in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
};

interface Props {
  error: string | string[] | undefined;
}

/**
 *
 * @param error - sign-in error message received from Next-Auth API
 * @returns - blank if undefined error or div with error message
 */
const SignInError = (error: Props) => {
  if (error.error === undefined) {
    return <></>;
  } else if (typeof error.error === 'string') {
    const errorMessage = error.error && (errors[error.error] ?? errors.default);
    return <div className="text-danger">{errorMessage}</div>;
  } else {
    return <div className="text-danger">Unable to sign in.</div>;
  }
};

export default SignInError;
