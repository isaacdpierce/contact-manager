import React from "react";
import PropTypes from "prop-types";

const Header = ({ branding }) => (
  <div>
    <h1>{branding}</h1>
  </div>
);

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
