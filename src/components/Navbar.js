import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#a6dea8" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic bg-warning btn" to="/">
            Gofood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/contact">
                  Contact
                </Link>
              </li>
              {localStorage.getItem("authToken") && (
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/myOrder">
                    My Orders
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex align-items-center">
              {!(localStorage.getItem("authToken")) ? (
                <>
                  <Link className="btn btn-outline-light text-success mx-1" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-light text-success mx-1" to="/createuser">
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <div className="btn btn-outline-light text-success mx-2" onClick={() => setCartView(true)}>
                    My Cart <Badge pill bg="danger">{data.length}</Badge>
                  </div>
                  {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                  <div className="btn btn-outline-light text-danger mx-2" onClick={handleLogout}>
                    Logout
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
