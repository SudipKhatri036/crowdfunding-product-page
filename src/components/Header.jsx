function Header() {
  return (
    <header className="w-100 container-lg d-flex align-items-center  justify-content-between position-absolute start-50 translate-middle py-3 ">
      <a className="navbar-brand">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      <nav className="navbar">
        <ul className="d-flex align-items-center w-100 gap-4 list-unstyled mb-0">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
