import Link from 'next/link';

// Renders signup button for ea template generator if not signed in
const NonUserButton = () => {
  return (
    <Link href="/auth/signup">
      <button className="btn btn-warning p-md-3">
        Click Here to Download Your Template
      </button>
    </Link>
  );
};

export default NonUserButton;
