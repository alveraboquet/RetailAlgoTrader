import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="mt-md-4 mb-md-3 d-md-flex justify-content-center">
      <aside className="bg-warning text-center rounded text-dark p-3 col-md-6 mb-3">
        <p className="fs-5">
          Start learning how algorithmic trading can increase your profitability
          and efficiency for free
        </p>
        <button className="btn btn-dark">
          <Link href="/signup">
            <a className="text-decoration-none text-light">
              Get started for free today
            </a>
          </Link>
        </button>
      </aside>
    </div>
  );
};

export default CallToAction;
