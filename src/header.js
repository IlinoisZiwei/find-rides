import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky sticky-navbar">
    
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <span color="blue_word">UIUC</span> <span className="white_word">ride-finding</span>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="three_buttons">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          All Available Rides
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          My Ride History
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          My Saved Ride Providers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/contact">
                          Contact
                        </a>
                      </li>
                    </ul>
              
                  </li>
              </ul>
          </div>
          
          
        </div>
        <div className="d-flex login" role="login">
            <Link to="/login" className="btn btn-primary ml-3">
              <img
                width="64"
                height="64"
                src="/src/_img/login.png"
                alt="user-male-circle"
                color="white"
              />
            </Link>
          </div>
      </div>
    </nav>
    {/* Search for rides */}
    {/* Footer */}
    <footer>{/* Footer content (e.g., copyright information) */}</footer>
    </div>
  );
}

export default Header;
