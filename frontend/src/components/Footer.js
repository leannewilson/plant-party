import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="Footer">
      <footer>
        <div>
          <Link to="/about-us">About Us</Link>
        </div>
        <div>
          <a href="https://github.com/leannewilson/plant-party">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
