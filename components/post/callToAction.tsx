import Link from 'next/link';

// CTA component that can be used in blog posts or other locations
const CallToAction = () => {
  return (
    <div className="mt-md-4 mb-md-3 d-md-flex justify-content-center">
      <aside className="bg-warning text-center rounded text-dark p-3 col-md-8 col-lg-6 mb-3">
        <p className="fs-5">
          Start learning how algorithmic trading can increase your profitability
          and efficiency for free
        </p>
        <Link href="/auth/signup">
          <button className="btn btn-dark text-light">
            Get started for free today
          </button>
        </Link>
      </aside>
    </div>
  );
};

export default CallToAction;
