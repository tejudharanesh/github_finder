import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 footer-center text-secondary">
      <div>
        <p>Copyright &copy; {footerYear} All rights Reserved</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
