import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/assets/styles/FormAssembly.scss";
import formAssemblyLogo from "/src/assets/images/FormAssembly-logo.svg";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src={formAssemblyLogo} height={32} alt="FormAssembly Logo" />
      </a>

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

      {/* Collapsible Menu */}
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Solutions
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Plans
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Resources
            </a>
          </li>
        </ul>

        {/* Buttons Block */}
        <div className="btn-block d-flex">
          <button className="btn btn-primary demo-btn me-2">Book a Demo</button>
          <button className=" login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
