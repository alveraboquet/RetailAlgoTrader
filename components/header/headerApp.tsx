import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const HeaderApp = () => {
  const { data: session } = useSession();

  return (
    <header className="container-fluid ps-3 pe-3 bg-dark">
      <div className="row d-flex align-items-center">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <a className="navbar-brand" href="#">
            <p className="display-3 text-white">RetailAlgoTrader</p>
          </a>
          {session?.user && (
            <p>Signed in as {session.user?.name ?? session.user.email}</p>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/app/dashboard">
                  <a className="nav-link text-white active" aria-current="page">
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/app/courses/testCourse">
                  <a className="nav-link text-white active" aria-current="page">
                    Test Course
                  </a>
                </Link>
              </li>
              <li className="nav-item btn btn-warning">
                <Link href="/api/auth/signout">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut({ callbackUrl: '/' });
                    }}
                  >
                    Logout
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
