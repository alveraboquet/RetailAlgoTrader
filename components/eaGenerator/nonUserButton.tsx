import Link from 'next/link';

const NonUserButton = () => {
  return (
    <button className="btn btn-warning p-md-3">
      <Link href="/auth/signin">
        <a className="text-decoration-none text-dark fs-3">
          Click Here to Download Your Template
        </a>
      </Link>
    </button>
  );
};

export default NonUserButton;
