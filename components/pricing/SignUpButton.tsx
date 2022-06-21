import Link from 'next/link';

// button for nextauth signup page
const SignUpButton = () => {
  return (
    <button className="btn btn-warning">
      <Link href="/auth/signup">
        <a className="text-decoration-none text-dark">Sign up</a>
      </Link>
    </button>
  );
};

export default SignUpButton;
