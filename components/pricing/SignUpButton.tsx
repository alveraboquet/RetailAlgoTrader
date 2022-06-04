import Link from 'next/link';

const SignUpButton = () => {
  return (
    <button className="btn btn-warning">
      <Link href="/auth/signin">
        <a className="text-decoration-none text-dark">Sign up</a>
      </Link>
    </button>
  );
};

export default SignUpButton;
