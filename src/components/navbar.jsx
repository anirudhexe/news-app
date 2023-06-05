import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">News</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/general" className="nav-link active" aria-current="page">
              General
            </Link>
            <Link
              to="/business"
              className="nav-link active"
              aria-current="page"
            >
              Business
            </Link>
            <Link
              to="/entertainment"
              className="nav-link active"
              aria-current="page"
            >
              Entertainment
            </Link>
            <Link to="/health" className="nav-link active" aria-current="page">
              Health
            </Link>
            <Link to="/science" className="nav-link active" aria-current="page">
              Science
            </Link>
            <Link to="/sports" className="nav-link active" aria-current="page">
              Sports
            </Link>
            <Link
              to="/technology"
              className="nav-link active"
              aria-current="page"
            >
              Technology
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
