import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { FaHome, FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa';
import Modal from '../Modal';
import Cart from '../screens/Cart';
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
      <nav className="navbar navbar-expand-lg navbar-light shadow" style={{ backgroundColor: "#1a936f" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic text-white" to="/" style={{ fontWeight: "bold" }}>
            <span style={{ backgroundColor: "#f6d55c", padding: "5px 10px", borderRadius: "5px" }}>Gofood</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link fs-5 text-white d-flex align-items-center" to="/">
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              {localStorage.getItem("authToken") &&
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-white d-flex align-items-center" to="/myOrder">
                    <FaUser className="me-2" /> My Orders
                  </Link>
                </li>
              }
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn btn-outline-light mx-1" to="/login">Login</Link>
                <Link className="btn btn-warning mx-1" to="/creatuser">Signup</Link>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <div className="btn text-white position-relative mx-2" onClick={() => setCartView(true)} style={{ fontSize: "1.2rem" }}>
                  <FaShoppingCart className="me-1" />
                  My Cart
                  {data.length > 0 && (
                    <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                      {data.length}
                    </Badge>
                  )}
                </div>
                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                <div className="btn text-white mx-2" onClick={handleLogout}>
                  <FaSignOutAlt className="me-2" /> Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
