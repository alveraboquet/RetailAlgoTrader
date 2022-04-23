import Link from 'next/link';

const Header = () => {
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
                <Link href="/">
                  <a className="nav-link text-white active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link text-white active" aria-current="page">
                    About
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
                <Link href="/login">
                  <a className="nav-link text-white active" aria-current="page">
                    Login
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
