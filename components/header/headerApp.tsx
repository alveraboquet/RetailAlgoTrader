import Link from 'next/link';
import { signOut } from 'next-auth/react';

const HeaderApp = () => {
  return (
    <header className="container-fluid ps-3 pe-3 bg-dark">
      <div className="row d-flex align-items-center">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <a className="navbar-brand" href="#">
            <p className="display-3 text-white">RetailAlgoTrader</p>
          </a>
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
                    EA Generator
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/app/courses/testCourse">
                  <a className="nav-link text-white active" aria-current="page">
                    Articles & Guides
                  </a>
                </Link>
              </li>
              <button
                className="nav-item btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  signOut({ callbackUrl: '/' });
                }}
              >
                Logout
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
