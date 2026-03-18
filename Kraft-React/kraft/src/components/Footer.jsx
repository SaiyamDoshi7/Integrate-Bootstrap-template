import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-4">

      <div className="container">

        <div className="row">

          {/* ABOUT */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">KRAFT Studio</h4>
            <p className="text-secondary">
              We craft bold digital experiences, modern brand identities and
              creative solutions for ambitious businesses.
            </p>
          </div>

          {/* LINKS */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled text-secondary">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p className="text-secondary">Surat, Gujarat</p>
            <p className="text-secondary">hello@kraftstudio.com</p>
            <p className="text-secondary">+91 98765 43210</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-secondary">
          © 2026 KRAFT Creative Agency
        </div>

      </div>

    </footer>
  );
}

export default Footer;