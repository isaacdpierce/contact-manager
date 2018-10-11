import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ branding }) => (
  <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
                <i className="fas fa-home ml-2" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
                <i className="fas fa-question ml-2" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                Add
                <i className="fas fa-plus ml-2" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
