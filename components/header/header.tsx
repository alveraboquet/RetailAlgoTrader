import Link from 'next/link';
import { signIn } from 'next-auth/react';

// Header for pages that do not require sign-in
const Header = () => {
  return (
    <header className="ps-3 pe-3 bg-dark">
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link href="/">
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
              <Link href="/">
                <a className="nav-link text-white active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link text-white active" aria-current="page">
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/eaGenerator">
                <a className="nav-link text-white active" aria-current="page">
                  EA Generator
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link text-white active" aria-current="page">
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing">
                <a className="nav-link text-white active" aria-current="page">
                  Pricing
                </a>
              </Link>
            </li>
            <button
              className="nav-item btn btn-warning ms-md-2"
              onClick={(e) => {
                e.preventDefault();
                // NextAuth function to initiate user authentication flow
                // https://next-auth.js.org/getting-started/client#signin
                signIn(undefined, { callbackUrl: '/app/dashboard' });
              }}
            >
              Login
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
