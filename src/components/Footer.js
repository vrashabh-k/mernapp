import React from "react";
// Uncomment the Link import if you need to navigate within your app
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center py-4 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
        {/* Optional logo or home link */}
        {/* <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <img src="logo.png" alt="Gofood Logo" width="30" height="30" />
        </Link> */}
        <span className="text-muted">© 2024 Gofood, All rights reserved</span>
      </div>

      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-muted" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Font Awesome icon */}
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> {/* Font Awesome icon */}
          </a>
        </li>
      </ul>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          {/* Uncomment Link if needed */}
          {/* <Link to="/" className="nav-link px-2 text-muted">Home</Link> */}
          <a href="/" className="nav-link px-2 text-muted">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 text-muted">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link px-2 text-muted">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/privacy" className="nav-link px-2 text-muted">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
}
