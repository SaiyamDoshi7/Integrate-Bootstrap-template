import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark py-3 border-bottom border-secondary">

      <div className="container">

        {/* LOGO */}
        <Link 
          className="navbar-brand fw-bold fs-3 text-white" 
          to="/"
        >
          KRAFT
        </Link>

        {/* MENU */}
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/menu">Services</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/gallery">Portfolio</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/services">Solutions</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/blog">Insights</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/contact">Contact</Link>
          </li>

          {/* CTA BUTTON */}
          <li className="nav-item ms-lg-3">
            <Link 
              className="btn btn-outline-light rounded-pill px-4"
              to="/login"
            >
              Let’s Talk
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;