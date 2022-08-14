import Link from 'next/link';
import { signOut } from 'next-auth/react';

// Header for pages that require sign-in
const HeaderApp = () => {
  return (
    <header className="ps-3 pe-3 bg-dark">
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link href="/app/dashboard">
          <a className="navbar-brand">RetailAlgoTrader</a>
        </Link>
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
              <Link href="/app/eaGenerator">
                <a className="nav-link text-white active" aria-current="page">
                  EA Generator
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/app/accountManagement">
                <a className="nav-link text-white active" aria-current="page">
                  Account Info
                </a>
              </Link>
            </li>
            <button
              className="nav-item btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                // Nextauth function to initiate user signout flow
                // https://next-auth.js.org/getting-started/client#signout
                signOut({ callbackUrl: '/' });
              }}
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderApp;
