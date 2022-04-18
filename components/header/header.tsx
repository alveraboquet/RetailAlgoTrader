import Link from 'next/link';

const Header = () => {
  return (
    <header className="container-fluid bg-light ps-3 pe-3">
      <div className="row d-flex align-items-center">
        <nav className="navbar navbar-expand-sm navbar-light">
          <a className="navbar-brand" href="#">
            <p className="display-3">RetailAlgoTrader</p>
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
                <Link href="/">
                  <a
                    className="nav-link text-secondary active"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a
                    className="nav-link text-secondary active"
                    aria-current="page"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog">
                  <a
                    className="nav-link text-secondary active"
                    aria-current="page"
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/resources">
                  <a
                    className="nav-link text-secondary active"
                    aria-current="page"
                  >
                    Resources
                  </a>
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block">
                <Link href="/newsletterSignup">
                  <a
                    className="nav-link text-secondary active"
                    aria-current="page"
                  >
                    Join our Weekly Newsletter
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

export default Header;
